import * as THREE from 'three';
import { BUGS } from '../data/data.js';
import { makeBugMesh } from '../world/builders.js';
import { logEvent } from '../core/state.js';
import { riverCenterZ, POND, waterLevel, POND_Y } from '../world/world.js';

const CATCH_RATE = { 1: 0.92, 2: 0.75, 3: 0.55 };

export class BugSystem {
  constructor(scene, world, state, clock, ui, audio) {
    Object.assign(this, { scene, world, state, clock, ui, audio });
    this.active = [];
    this.spawnT = 0;
  }

  validSpecies(spot) {
    const { min, day, weather } = { min: this.clock.min, day: this.clock.day, weather: this.clock.weather };
    if (weather === 'rain' || weather === 'storm') return [];
    return BUGS.filter((b) => {
      if (b.spot !== spot) return false;
      const inT = (t) => t && min >= t[0] && min <= t[1];
      if (!inT(b.time) && !inT(b.time2)) return false;
      if (b.days && (day < b.days[0] || day > b.days[1])) return false;
      return true;
    });
  }

  spawnOne(playerPos) {
    const kinds = [];
    // 近くの木
    for (const t of this.world.trees) {
      const d = Math.hypot(t.x - playerPos.x, t.z - playerPos.z);
      if (d > 6 && d < 42) kinds.push({ spot: 'tree', ref: t });
    }
    for (const g of this.world.grassAreas) {
      const d = Math.hypot(g.x - playerPos.x, g.z - playerPos.z);
      if (d < 40) kinds.push({ spot: 'grass', ref: g });
    }
    // 水辺
    const rc = riverCenterZ(playerPos.x);
    if (Math.abs(playerPos.z - rc) < 30) kinds.push({ spot: 'water', ref: { x: playerPos.x + (Math.random() * 30 - 15), z: 0, river: true } });
    if (Math.hypot(POND.x - playerPos.x, POND.z - playerPos.z) < 35) kinds.push({ spot: 'water', ref: { x: POND.x, z: POND.z, pond: true } });
    if (Math.abs(playerPos.z - rc) < 26) kinds.push({ spot: 'river', ref: { x: playerPos.x + (Math.random() * 24 - 12), z: 0, river: true } });
    if (!kinds.length) return;

    const k = kinds[Math.floor(Math.random() * kinds.length)];
    const species = this.validSpecies(k.spot);
    if (!species.length) return;
    const pool = [];
    species.forEach((s) => { for (let i = 0; i < 4 - s.rarity; i++) pool.push(s); });
    const spec = pool[Math.floor(Math.random() * pool.length)];

    const mesh = makeBugMesh(spec);
    const bug = { spec, mesh, t: Math.random() * 10, fleeT: 0, kind: k.spot };
    if (k.spot === 'tree') {
      const a = Math.random() * Math.PI * 2;
      const h = spec.id === 'kabuto' || spec.id === 'nokogiri' ? 0.9 + Math.random() * 0.8 : 1.4 + Math.random() * 1.4;
      const r = k.ref.big ? 0.55 : 0.34;
      const ty = this.world.groundY(k.ref.x, k.ref.z);
      mesh.position.set(k.ref.x + Math.cos(a) * r, ty + h, k.ref.z + Math.sin(a) * r);
      mesh.lookAt(k.ref.x, ty + h + 1, k.ref.z);
      bug.static = true;
    } else if (k.spot === 'grass') {
      const a = Math.random() * Math.PI * 2, r = Math.random() * k.ref.r;
      const hx = k.ref.x + Math.cos(a) * r, hz = k.ref.z + Math.sin(a) * r;
      bug.home = new THREE.Vector3(hx, this.world.groundY(hx, hz) + 0.7, hz);
      mesh.position.copy(bug.home);
    } else if (k.spot === 'water' || k.spot === 'river') {
      if (k.ref.pond) {
        const a = Math.random() * Math.PI * 2;
        bug.home = new THREE.Vector3(k.ref.x + Math.cos(a) * (POND.r + 1.5), POND_Y + 1.1, k.ref.z + Math.sin(a) * (POND.r + 1.5));
      } else {
        const x = k.ref.x;
        bug.home = new THREE.Vector3(x, waterLevel(x) + (k.spot === 'river' ? 0.9 : 1.2), riverCenterZ(x) + (Math.random() < 0.5 ? -6.5 : 6.5));
      }
      mesh.position.copy(bug.home);
    }
    this.scene.add(mesh);
    this.active.push(bug);
  }

  flee(bug) {
    if (bug.fleeT > 0) return;
    bug.fleeT = 0.9;
    this.audio.sfx('flee');
  }

  tryCatch(bug) {
    const spec = bug.spec;
    if (Math.random() < CATCH_RATE[spec.rarity]) {
      const first = !this.state.bugs[spec.id];
      this.state.bugs[spec.id] = (this.state.bugs[spec.id] || 0) + 1;
      this.audio.sfx('catch');
      this.ui.toast(`${spec.name} をつかまえた!${first ? ' 【ずかんに とうろく!】' : ''}`, first ? 'gold' : null);
      logEvent(this.state, `${spec.name}をつかまえた`);
      this.remove(bug);
    } else {
      this.ui.toast('あっ、にげられた…');
      this.flee(bug);
    }
  }

  remove(bug) {
    this.scene.remove(bug.mesh);
    this.active = this.active.filter((b) => b !== bug);
  }

  update(dt, player, prompts) {
    const p = player.pos;
    this.spawnT -= dt;
    if (this.spawnT <= 0) {
      this.spawnT = 1.4;
      if (this.active.length < 7) this.spawnOne(p);
    }

    let nearest = null, nearestD = 1e9;
    for (const bug of [...this.active]) {
      bug.t += dt;
      const bp = bug.mesh.position;
      const d = Math.hypot(bp.x - p.x, bp.z - p.z);

      if (bug.fleeT > 0) {
        bug.fleeT -= dt;
        bp.y += dt * 6;
        bp.x += Math.sin(bug.t * 8) * dt * 4;
        if (bug.fleeT <= 0) this.remove(bug);
        continue;
      }
      if (d > 65) { this.remove(bug); continue; }
      if (player.running && d < 6.5) { this.flee(bug); continue; }

      // 動き
      if (bug.kind === 'grass') {
        bp.x = bug.home.x + Math.sin(bug.t * 0.7) * 2.2;
        bp.z = bug.home.z + Math.cos(bug.t * 0.53) * 2.2;
        bp.y = bug.home.y + Math.sin(bug.t * 2.2) * 0.35;
        if (bug.mesh.userData.wings) {
          const w = Math.sin(bug.t * 14) * 0.9;
          bug.mesh.userData.wings[0].rotation.z = w;
          bug.mesh.userData.wings[1].rotation.z = -w;
        }
      } else if (bug.kind === 'water') {
        bp.x = bug.home.x + Math.sin(bug.t * 0.9) * 4;
        bp.z = bug.home.z + Math.sin(bug.t * 0.62) * 2.5;
        bp.y = bug.home.y + Math.sin(bug.t * 3.1) * 0.2;
        bug.mesh.rotation.y = Math.atan2(Math.cos(bug.t * 0.9) * 4, Math.cos(bug.t * 0.62) * 2.5);
      } else if (bug.kind === 'river') { // ホタル
        bp.x = bug.home.x + Math.sin(bug.t * 0.4) * 3;
        bp.z = bug.home.z + Math.cos(bug.t * 0.33) * 2;
        bp.y = bug.home.y + Math.sin(bug.t * 0.9) * 0.4;
        const glow = (Math.sin(bug.t * 2.4) + 1) / 2;
        bug.mesh.children[0].material.emissiveIntensity = 0.2 + glow * 1.2;
      }

      if (d < 2.7 && d < nearestD) { nearest = bug; nearestD = d; }
    }

    if (nearest) {
      prompts.push({ dist: nearestD, label: `あみをふる (${nearest.spec.name}?)`, action: () => this.tryCatch(nearest) });
    }
  }

  clearAll() {
    for (const b of [...this.active]) this.remove(b);
  }
}
