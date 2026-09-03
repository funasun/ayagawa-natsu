import * as THREE from 'three';
import { smat } from '../world/builders.js';
import { logEvent } from '../core/state.js';

// 生きもの (ねこ・にわとり)。ゆっくり うろうろして、はしって ちかづくと にげる。
// なでると すこしずつ なついて、そのうち にげんようになる ―― 昭和の なつの 庭さき

function makeCat(col) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.42, 4, 8), smat(col));
  body.rotation.z = Math.PI / 2; body.position.y = 0.27; body.castShadow = true; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), smat(col));
  head.position.set(0.32, 0.38, 0); g.add(head);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.1, 4), smat(col));
    ear.position.set(0.34, 0.52, s * 0.08); g.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), smat(0x2a5a30));
    eye.position.set(0.44, 0.4, s * 0.06); g.add(eye);
  }
  for (const [lx, lz] of [[0.16, -0.08], [0.16, 0.08], [-0.16, -0.08], [-0.16, 0.08]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.2, 5), smat(col));
    leg.position.set(lx, 0.1, lz); g.add(leg);
  }
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.34, 5), smat(col));
  tail.position.set(-0.36, 0.36, 0); tail.rotation.z = 0.9; g.add(tail);
  return { group: g, parts: { tail, head } };
}

function makeChicken() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), smat(0xf2ede4));
  body.scale.set(1.25, 0.95, 1); body.position.y = 0.26; body.castShadow = true; g.add(body);
  const head = new THREE.Group();
  head.add(new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 8), smat(0xf2ede4)));
  const comb = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.03), smat(0xd83a30)); comb.position.y = 0.09; head.add(comb);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), smat(0xe8a030)); beak.rotation.z = -Math.PI / 2; beak.position.x = 0.1; head.add(beak);
  head.position.set(0.2, 0.44, 0); g.add(head);
  const tailF = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.06), smat(0xd8d0c4)); tailF.position.set(-0.2, 0.36, 0); tailF.rotation.z = 0.7; g.add(tailF);
  for (const lz of [-0.05, 0.05]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.14, 4), smat(0xe8a030));
    leg.position.set(0, 0.07, lz); g.add(leg);
  }
  return { group: g, parts: { head } };
}

export class CritterSystem {
  constructor(scene, world, state, clock, ui, audio) {
    Object.assign(this, { scene, world, state, clock, ui, audio });
    this.t = 0;
    const gy = (x, z) => (world.groundY ? world.groundY(x, z) : 0);
    this.cats = [
      { id: 'mike', name: 'みけ', home: { x: 116.8, z: 21.2 }, col: 0xdcc39a }, // ばあちゃんちの 庭さき
      { id: 'kuro', name: 'くろ', home: { x: -58.5, z: 21.4 }, col: 0x2b2b30 }, // 商店通りの 日かげ
    ].map((c) => {
      const m = makeCat(c.col);
      m.group.position.set(c.home.x, gy(c.home.x, c.home.z), c.home.z);
      scene.add(m.group);
      return { ...c, mesh: m.group, parts: m.parts, mode: 'sit', t: 2 + Math.random() * 4, target: null, fleeT: 0, dir: Math.random() * 6.28 };
    });
    this.chickens = [[276, -37.5], [279, -35.5], [274, -33.5]].map(([x, z], i) => {
      const m = makeChicken();
      m.group.position.set(x, gy(x, z), z);
      m.group.rotation.y = i * 2.1;
      scene.add(m.group);
      return { home: { x, z }, mesh: m.group, parts: m.parts, mode: 'peck', t: 1 + Math.random() * 3, target: null, fleeT: 0, ph: Math.random() * 6 };
    });
    // 蚊取り線香の けむり (ばあちゃんちの えんがわ)。ゆうがた〜よるだけ
    this.smoke = new THREE.Group();
    this.smoke.userData.noMerge = true;
    this.puffs = [];
    for (let i = 0; i < 4; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), smat(0xe8e6e0, { transparent: true, opacity: 0.3 }));
      p.userData.ph = i / 4;
      this.smoke.add(p);
      this.puffs.push(p);
    }
    this.smoke.position.set(112.6, gy(112.6, 20.6) + 0.42, 20.6);
    scene.add(this.smoke);
  }

  _walkTo(c, spd, dt) {
    const p = c.mesh.position, tg = c.target;
    const dx = tg.x - p.x, dz = tg.z - p.z, d = Math.hypot(dx, dz);
    if (d < 0.25) return true;
    const nx = p.x + (dx / d) * spd * dt, nz = p.z + (dz / d) * spd * dt;
    if (this.world.isBlocked(nx, nz)) return true; // かべなら あきらめる
    p.x = nx; p.z = nz;
    p.y = this.world.groundY(p.x, p.z);
    c.mesh.rotation.y = Math.atan2(dx, dz) + (c.isChicken ? 0 : Math.PI / 2) - Math.PI / 2;
    return false;
  }

  update(dt, player, prompts) {
    this.t += dt;
    const min = this.clock.min;
    const pp = player.pos;
    const evening = min >= 1040 || min < 330;
    const catFriend = (id) => (this.state.critter && this.state.critter[id]) || 0;

    // ---- ねこ ----
    for (const c of this.cats) {
      const p = c.mesh.position;
      const d = Math.hypot(pp.x - p.x, pp.z - p.z);
      const shy = catFriend(c.id) < 3;
      if (c.mode !== 'flee' && shy && player.running && d < 4.5) {
        c.mode = 'flee'; c.fleeT = 1.6;
        const ang = Math.atan2(p.x - pp.x, p.z - pp.z);
        c.target = { x: p.x + Math.sin(ang) * 6, z: p.z + Math.cos(ang) * 6 };
      }
      if (c.mode === 'flee') {
        c.fleeT -= dt;
        if (this._walkTo(c, 4.2, dt) || c.fleeT <= 0) { c.mode = 'sit'; c.t = 3 + Math.random() * 4; }
      } else if (c.mode === 'walk') {
        if (this._walkTo(c, 1.1, dt)) { c.mode = 'sit'; c.t = 3 + Math.random() * 6; }
      } else {
        c.t -= dt;
        // しっぽを ゆらす
        c.parts.tail.rotation.x = Math.sin(this.t * 1.7 + p.x) * 0.5;
        if (c.t <= 0 && !evening) {
          const a = Math.random() * Math.PI * 2, r = 1.5 + Math.random() * 4;
          c.target = { x: c.home.x + Math.cos(a) * r, z: c.home.z + Math.sin(a) * r };
          if (!this.world.isBlocked(c.target.x, c.target.z)) c.mode = 'walk'; else c.t = 2;
        } else if (c.t <= 0) c.t = 4;
      }
      if (c.mode !== 'flee' && d < 2.3 && !this.world.indoor) {
        prompts.push({ dist: d, label: `${c.name}を なでる`, action: () => this.pet(c) });
      }
    }

    // ---- にわとり ----
    for (const h of this.chickens) {
      h.isChicken = true;
      const p = h.mesh.position;
      const d = Math.hypot(pp.x - p.x, pp.z - p.z);
      if (h.mode !== 'flee' && d < 2.6) {
        h.mode = 'flee'; h.fleeT = 1.4;
        const ang = Math.atan2(p.x - pp.x, p.z - pp.z) + (Math.random() - 0.5) * 1.2;
        h.target = { x: p.x + Math.sin(ang) * 4, z: p.z + Math.cos(ang) * 4 };
        if (this.t - (this.kokeT || -9) > 1.2) { this.audio.sfx('koke'); this.kokeT = this.t; }
      }
      if (h.mode === 'flee') {
        h.fleeT -= dt;
        h.parts.head.position.y = 0.5 + Math.abs(Math.sin(this.t * 14)) * 0.06;
        if (this._walkTo(h, 3.6, dt) || h.fleeT <= 0) { h.mode = 'peck'; h.t = 2 + Math.random() * 3; }
      } else if (h.mode === 'walk') {
        if (this._walkTo(h, 0.8, dt)) { h.mode = 'peck'; h.t = 2 + Math.random() * 4; }
      } else {
        h.t -= dt;
        h.parts.head.position.y = 0.44 - Math.max(0, Math.sin(this.t * 3.4 + h.ph)) * 0.12; // つついとる
        if (h.t <= 0) {
          const a = Math.random() * Math.PI * 2, r = 1 + Math.random() * 2.5;
          h.target = { x: h.home.x + Math.cos(a) * r, z: h.home.z + Math.sin(a) * r };
          if (!this.world.isBlocked(h.target.x, h.target.z)) h.mode = 'walk'; else h.t = 1.5;
        }
      }
    }

    // ---- 蚊取り線香の けむり ----
    this.smoke.visible = evening && !this.world.indoor;
    if (this.smoke.visible) {
      for (const p of this.puffs) {
        const u = ((this.t * 0.22) + p.userData.ph) % 1;
        p.position.set(Math.sin(u * 9 + p.userData.ph * 5) * 0.08, u * 1.5, Math.cos(u * 7) * 0.06);
        p.scale.setScalar(0.6 + u * 1.8);
        p.material.opacity = 0.32 * (1 - u);
      }
    }
  }

  async pet(c) {
    const s = this.state;
    s.critter = s.critter || {};
    const f = s.critter[c.id] || 0;
    if (f < 2 && Math.random() < 0.5) {
      // まだ なれとらん: するっと にげる
      c.mode = 'flee'; c.fleeT = 1.4;
      const p = c.mesh.position, ang = Math.random() * Math.PI * 2;
      c.target = { x: p.x + Math.sin(ang) * 5, z: p.z + Math.cos(ang) * 5 };
      this.ui.toast(`${c.name}は するっと にげた。……まだ なれとらんみたい`);
      s.critter[c.id] = f + 0.5;
      return;
    }
    s.critter[c.id] = f + 1;
    this.audio.sfx('nyaa');
    c.mode = 'sit'; c.t = 6;
    const lines = [
      `${c.name}が ごろごろ いうとる`,
      `${c.name}は めを ほそめて、あごを のばしてきた`,
      `${c.name}が あしに すりすりしてきた。……あったかい`,
      `${c.name}は ひなたで ひっくりかえって おなかを 見せた`,
    ];
    this.ui.toast(lines[Math.min(lines.length - 1, Math.floor(f))]);
    if (!s.flags['neko' + s.day]) { s.flags['neko' + s.day] = true; logEvent(s, `ねこの${c.name}をなでた`); }
  }
}
