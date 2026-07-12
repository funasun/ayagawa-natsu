import * as THREE from 'three';
import { riverCenterZ, waterLevel, groundY, RIVER_HALF, POND, POND_Y } from './world.js';

// 丸くぼかした光の粒テクスチャ (Pointsが四角く見えるのを防ぐ)
export function glowDotTex() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

export class Effects {
  constructor(scene, world, clock, audio) {
    Object.assign(this, { scene, world, clock, audio });

    // 雨
    const rainGeo = new THREE.BufferGeometry();
    const rp = [];
    this.rainCount = 700;
    for (let i = 0; i < this.rainCount; i++) rp.push((Math.random() - 0.5) * 70, Math.random() * 30, (Math.random() - 0.5) * 70);
    rainGeo.setAttribute('position', new THREE.Float32BufferAttribute(rp, 3));
    this.rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0xaac4dd, size: 0.14, transparent: true, opacity: 0.7 }));
    this.rain.visible = false;
    scene.add(this.rain);

    // アンビエントホタル (図鑑用と別の、雰囲気の光)
    const fGeo = new THREE.BufferGeometry();
    const fp = [];
    this.fireflyBase = [];
    for (let i = 0; i < 46; i++) {
      const x = -20 + Math.random() * 60;
      const z = riverCenterZ(x) + (Math.random() < 0.5 ? -1 : 1) * (7 + Math.random() * 4);
      const y = waterLevel(x) + 1.4;
      this.fireflyBase.push({ x, y, z, ph: Math.random() * 10 });
      fp.push(x, y, z);
    }
    fGeo.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
    this.fireflies = new THREE.Points(fGeo, new THREE.PointsMaterial({ color: 0xd4ff7a, size: 0.7, map: glowDotTex(), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.fireflies.visible = false;
    scene.add(this.fireflies);

    // ひとだま (よる、陶の山すその墓地に ふわりと浮かぶ。events.obakeTalk と対)
    const wisp = (sc, op) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowDotTex(), color: 0xaef0ff, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false }));
      sp.scale.setScalar(sc);
      return sp;
    };
    this.obake = new THREE.Group();
    this.obakeCore = wisp(1.7, 0.85);
    this.obakeW1 = wisp(0.8, 0.5);
    this.obakeW2 = wisp(0.55, 0.4);
    this.obake.add(this.obakeCore, this.obakeW1, this.obakeW2);
    this.obakeY = groundY(141.6, 20.4); // 墓地 (陶の山すそ) の地面の高さ
    this.obake.visible = false;
    scene.add(this.obake);

    // 虹 (夕立のあと、カメラの正面 = -z の空に ひくく かかる。カメラは常に -z を向くのでここ以外は見えない)
    const rainbowGroup = new THREE.Group();
    const rainbowCols = [0xff6a5a, 0xffaa4a, 0xffe66a, 0x7ad86a, 0x5aa8e8, 0x8a6ae0];
    rainbowCols.forEach((col, i) => {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(58 - i * 1.5, 0.9, 6, 48, Math.PI),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.3, depthWrite: false }),
      );
      rainbowGroup.add(arc);
    });
    rainbowGroup.position.set(10, -32, -175);
    rainbowGroup.scale.setScalar(1.1);
    rainbowGroup.visible = false;
    scene.add(rainbowGroup);
    this.rainbowGroup = rainbowGroup;
    this.rainbowFade = 0;

    // 水面のきらめき (ひるまの川と池が 日ざしで キラキラ ひかる)
    this.sparklePos = () => {
      if (Math.random() < 0.68) {
        const x = -140 + Math.random() * 300; // 町のはんいの 川すじ
        const z = riverCenterZ(x) + (Math.random() - 0.5) * RIVER_HALF * 1.5;
        return [x, waterLevel(x) + 0.1, z];
      }
      const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * (POND.r - 1.5);
      return [POND.x + Math.cos(a) * rr, POND_Y + 0.1, POND.z + Math.sin(a) * rr];
    };
    this.sparkles = [];
    for (let L = 0; L < 2; L++) {
      const n = 70;
      const arr = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) arr.set(this.sparklePos(), i * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
      const p = new THREE.Points(geo, new THREE.PointsMaterial({
        color: 0xfff6d8, size: 0.55, map: glowDotTex(),
        transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      p.visible = false;
      scene.add(p);
      this.sparkles.push({ pts: p, ph: L * Math.PI * 0.5 });
    }
    this.sparkleTimer = 0;
    this._spWhite = new THREE.Color(0xfff6d8);
    this._spGold = new THREE.Color(0xffb057);

    // 赤とんぼ (お盆すぎの ゆうがた、たんぼのうえを すいすい とぶ)
    this.tomboBase = [];
    const tomboPts = [];
    const paddies = [[24, 60], [45, 55], [30, 68], [96, 30], [110, 40]];
    for (let i = 0; i < 16; i++) {
      const [px, pz] = paddies[i % paddies.length];
      const cx = px + (Math.random() - 0.5) * 10, cz = pz + (Math.random() - 0.5) * 8;
      this.tomboBase.push({
        cx, cz, y: groundY(cx, cz) + 1.5 + Math.random() * 1.5,
        rx: 2 + Math.random() * 3, rz: 1.5 + Math.random() * 2.5,
        sp: 0.5 + Math.random() * 0.7, ph: Math.random() * 9,
      });
      tomboPts.push(cx, 0, cz);
    }
    const tomboGeo = new THREE.BufferGeometry();
    tomboGeo.setAttribute('position', new THREE.Float32BufferAttribute(tomboPts, 3));
    this.tombo = new THREE.Points(tomboGeo, new THREE.PointsMaterial({ color: 0xe8542a, size: 0.52, transparent: true, opacity: 0.95 }));
    this.tombo.visible = false;
    scene.add(this.tombo);

    // ひこうき雲 (ひるさがり、みなみの山なみの うえを しずかに よこぎる)
    // ※カメラは 見上げられないので、みえる帯 (地平線から +8度) にあわせた低めの空をとぶ
    this.plane = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xf2f5f8, fog: false }),
    );
    this.contrail = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 0.7, 1, 6, 1, true), // 機体がわ(+x)が ほそく、うしろが ふわっと ひろがる
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.62, fog: false, depthWrite: false }),
    );
    this.contrail.rotation.z = Math.PI / 2; // x方向に ながく のびる
    this.plane.visible = this.contrail.visible = false;
    scene.add(this.plane, this.contrail);
    this.planeT = -1; // -1: 休み / 0..: 飛行ちゅうの経過秒
    this.planeDay = 0;

    // 花火
    this.bursts = [];
    this.fwTimer = 0;
    this.fireworksOn = false;

    // 電車
    this.trainT = -1;
    this.lastMin = 0;
    this.t = 0;
  }

  launchFirework() {
    const n = 70;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const colors = [0xffd27a, 0xff7a7a, 0x7ab8ff, 0xb9ff7a, 0xff9ade];
    const mat = new THREE.PointsMaterial({ color: colors[Math.floor(Math.random() * colors.length)], size: 0.9, map: glowDotTex(), transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false });
    const pts = new THREE.Points(geo, mat);
    const cx = -10 + Math.random() * 20, cy = 32 + Math.random() * 12, cz = -75 - Math.random() * 15;
    const vels = [];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, b = Math.acos(2 * Math.random() - 1);
      const sp = 7 + Math.random() * 5;
      vels.push(new THREE.Vector3(Math.sin(b) * Math.cos(a) * sp, Math.cos(b) * sp, Math.sin(b) * Math.sin(a) * sp));
      pos[i * 3] = cx; pos[i * 3 + 1] = cy; pos[i * 3 + 2] = cz;
    }
    this.scene.add(pts);
    this.bursts.push({ pts, vels, life: 2.1 });
    this.audio.sfx('boom');
  }

  update(dt, playerPos) {
    this.t += dt;
    const weather = this.clock.weather;
    const min = this.clock.min;

    // 川の流れ
    const wm = this.world.riverWaterMat;
    if (wm && wm.map) wm.map.offset.y -= dt * 0.08;
    // 滝と沢の ながれ (はやい)
    if (this.world.fallMat && this.world.fallMat.map) this.world.fallMat.map.offset.y -= dt * 0.6;
    if (this.world.sawaMats) for (const sm of this.world.sawaMats) { if (sm.map) sm.map.offset.y -= dt * 0.3; }
    // 滝しぶきの あわが ゆらめく
    if (this.world.foamMat) this.world.foamMat.opacity = 0.5 + Math.sin(this.t * 5.2) * 0.14;

    // 雨
    const raining = weather === 'rain' || weather === 'storm';
    this.rain.visible = raining && (!this.world.indoor || !!(this.world.sub && this.world.sub.outdoor));
    if (raining) {
      const arr = this.rain.geometry.attributes.position.array;
      const fall = weather === 'storm' ? 42 : 26;
      const drift = weather === 'storm' ? 14 : 2;
      for (let i = 0; i < this.rainCount; i++) {
        arr[i * 3 + 1] -= fall * dt;
        arr[i * 3] += drift * dt;
        if (arr[i * 3 + 1] < 0) {
          arr[i * 3] = playerPos.x + (Math.random() - 0.5) * 70;
          arr[i * 3 + 1] = 25 + Math.random() * 8;
          arr[i * 3 + 2] = playerPos.z + (Math.random() - 0.5) * 70;
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }

    // 虹 (夕立あがりに ふわっと あらわれて、ゆっくり きえる)
    const wantRainbow = !!this.clock.rainbow && !this.world.indoor;
    this.rainbowFade += ((wantRainbow ? 1 : 0) - this.rainbowFade) * Math.min(1, dt * 0.8);
    this.rainbowGroup.visible = this.rainbowFade > 0.02;
    if (this.rainbowGroup.visible) {
      this.rainbowGroup.children.forEach((arc, i) => { arc.material.opacity = 0.3 * this.rainbowFade * (1 - i * 0.06); });
    }

    // ホタル (8/1-6の夜)
    const hotaruNight = this.clock.event === 'hotaru' && min >= 1150;
    this.fireflies.visible = hotaruNight;
    if (hotaruNight) {
      const arr = this.fireflies.geometry.attributes.position.array;
      for (let i = 0; i < this.fireflyBase.length; i++) {
        const b = this.fireflyBase[i];
        arr[i * 3] = b.x + Math.sin(this.t * 0.5 + b.ph) * 2;
        arr[i * 3 + 1] = b.y + Math.sin(this.t * 0.8 + b.ph * 2) * 0.5;
        arr[i * 3 + 2] = b.z + Math.cos(this.t * 0.4 + b.ph) * 1.5;
      }
      this.fireflies.geometry.attributes.position.needsUpdate = true;
      this.fireflies.material.opacity = 0.5 + Math.sin(this.t * 2.2) * 0.4;
    }

    // ひとだま (19:30すぎ、墓地のうえを ゆらゆら ただよう)
    const obakeOn = min >= 1170 && !this.world.indoor;
    this.obake.visible = obakeOn;
    if (obakeOn) {
      this.obake.position.set(
        141.6 + Math.sin(this.t * 0.45) * 1.5,
        this.obakeY + 1.6 + Math.sin(this.t * 1.1) * 0.35,
        20.4 + Math.cos(this.t * 0.32) * 1.1,
      );
      // 尾の光が すこし おくれて ついてくる
      this.obakeW1.position.set(-0.35 + Math.sin(this.t * 2.1) * 0.3, -0.3 + Math.sin(this.t * 1.7) * 0.12, 0.2);
      this.obakeW2.position.set(0.4 + Math.sin(this.t * 1.6) * 0.25, -0.45 + Math.cos(this.t * 1.9) * 0.12, -0.15);
      this.obakeCore.material.opacity = 0.7 + Math.sin(this.t * 3.1) * 0.25;
    }

    // 花火 (まつりの夜 19:30-20:40)
    this.fireworksOn = this.clock.event === 'matsuri' && min >= 1170 && min <= 1240;
    if (this.fireworksOn) {
      this.fwTimer -= dt;
      if (this.fwTimer <= 0) {
        this.fwTimer = 2.5 + Math.random() * 2.5;
        this.launchFirework();
      }
    }
    for (const b of [...this.bursts]) {
      b.life -= dt;
      if (b.life <= 0) {
        this.scene.remove(b.pts);
        this.bursts = this.bursts.filter((x) => x !== b);
        continue;
      }
      const arr = b.pts.geometry.attributes.position.array;
      for (let i = 0; i < b.vels.length; i++) {
        const v = b.vels[i];
        v.y -= 3.5 * dt;
        arr[i * 3] += v.x * dt;
        arr[i * 3 + 1] += v.y * dt;
        arr[i * 3 + 2] += v.z * dt;
      }
      b.pts.geometry.attributes.position.needsUpdate = true;
      b.pts.material.opacity = Math.min(1, b.life / 1.2);
    }

    // ことでん (8:00 / 12:30 / 17:30 に通過)
    for (const tm of [480, 750, 1050]) {
      if (this.lastMin < tm && min >= tm && this.trainT < 0) {
        this.trainT = 0;
        this.audio.sfx('train');
      }
    }
    this.lastMin = min;
    if (this.trainT >= 0) {
      this.trainT += dt;
      const path = this.world.railPath;
      const d = this.trainT * 30;
      const train = this.world.train;
      train.visible = true;
      // 2両編成が線路のカーブと勾配に沿って走る
      for (let i = 0; i < train.children.length; i++) {
        const p = path.pointAt(Math.max(0, d - i * 9.8));
        train.children[i].position.set(p.x, p.y + 0.18, p.z);
        train.children[i].rotation.y = p.rot;
      }
      if (d > path.length + 15) { this.trainT = -1; train.visible = false; }
    }

    // 川のきらめき
    if (this.world.riverWaterMat) {
      const h = 0.55 + Math.sin(this.t * 0.8) * 0.015;
      this.world.riverWaterMat.color.setHSL(0.55, 0.5, min >= 1150 ? 0.22 : h * 0.9);
    }

    // 水面のきらめき (ひる強く、ゆうがたは 金色に。くもり・雨・夜は しずか)
    const tSun = THREE.MathUtils.clamp((min - 350) / (1160 - 350), 0, 1);
    const sunUp = Math.max(0, Math.sin(tSun * Math.PI));
    const warmT = THREE.MathUtils.clamp(1 - Math.abs(tSun - 0.9) * 4.5, 0, 1);
    const wf = weather === 'sunny' ? 1 : weather === 'cloudy' ? 0.3 : 0;
    const sBase = this.world.indoor ? 0 : sunUp * wf;
    this.sparkleTimer -= dt;
    const resample = this.sparkleTimer <= 0;
    if (resample) this.sparkleTimer = 0.24;
    for (const s of this.sparkles) {
      s.pts.visible = sBase > 0.03;
      if (!s.pts.visible) continue;
      s.pts.material.opacity = sBase * (0.3 + 0.7 * Math.abs(Math.sin(this.t * 2.1 + s.ph)));
      s.pts.material.color.copy(this._spWhite).lerp(this._spGold, warmT * 0.85);
      if (resample) {
        // 数こずつ 場所を いれかえて、日ざしの チラチラを つくる
        const arr = s.pts.geometry.attributes.position.array;
        for (let k = 0; k < 5; k++) {
          const i = Math.floor(Math.random() * (arr.length / 3));
          arr.set(this.sparklePos(), i * 3);
        }
        s.pts.geometry.attributes.position.needsUpdate = true;
      }
    }

    // 赤とんぼ (8/13すぎ、はれた ゆうがた 16:00-19:00 に たんぼのうえ)
    const tomboOn = this.clock.day >= 13 && min >= 960 && min <= 1140 &&
      (weather === 'sunny' || weather === 'cloudy') && !this.world.indoor;
    this.tombo.visible = tomboOn;
    if (tomboOn) {
      const arr = this.tombo.geometry.attributes.position.array;
      for (let i = 0; i < this.tomboBase.length; i++) {
        const b = this.tomboBase[i];
        const a = this.t * b.sp + b.ph;
        arr[i * 3] = b.cx + Math.cos(a) * b.rx;
        arr[i * 3 + 1] = b.y + Math.sin(a * 2.3) * 0.4;
        arr[i * 3 + 2] = b.cz + Math.sin(a) * b.rz;
      }
      this.tombo.geometry.attributes.position.needsUpdate = true;
    }

    // ひこうき雲 (はれた日の ひるさがり、1日1回 たかい空を しずかに よこぎる)
    if (this.planeT < 0 && this.planeDay !== this.clock.day && weather === 'sunny') {
      const target = 620 + (this.clock.day * 97) % 260; // 10:20〜14:40 の どこか (日ごとに ちがう)
      if (min >= target && min <= target + 40) {
        this.planeDay = this.clock.day;
        this.planeT = 0;
        this.contrail.material.opacity = 0.62;
      }
    }
    if (this.planeT >= 0) {
      this.planeT += dt;
      const px = -240 + this.planeT * 11; // 約44秒で 里山の空を よこぎる
      const py = 12 + this.planeT * 0.09; // すこしずつ のぼっていく (とおくの山の 中腹の たかさ = 画面のみえる帯)
      const pz = -110;
      const show = !this.world.indoor;
      if (px <= 245) {
        this.plane.position.set(px, py, pz);
        this.plane.visible = show;
        // 雲は 機体の すこし うしろから、70くらいの ながさで たなびく
        const tail = px - 2.2;
        const head = Math.max(-238, tail - 70);
        const len = tail - head;
        if (len > 1) {
          this.contrail.scale.set(1, len, 1);
          this.contrail.position.set((head + tail) / 2, py - (px - (head + tail) / 2) * 0.09 / 11, pz);
          this.contrail.visible = show;
        }
      } else {
        // わたりおわったら、雲だけ ゆっくり きえていく
        this.plane.visible = false;
        this.contrail.visible = show;
        this.contrail.material.opacity -= dt * 0.12;
        if (this.contrail.material.opacity <= 0.02) {
          this.contrail.visible = false;
          this.planeT = -1;
        }
      }
    }
  }
}
