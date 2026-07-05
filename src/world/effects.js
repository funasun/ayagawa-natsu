import * as THREE from 'three';
import { riverCenterZ, waterLevel, groundY } from './world.js';

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
  }
}
