import * as THREE from 'three';
import { FISH } from '../data/data.js';
import { logEvent } from '../core/state.js';

function markSprite(text, color) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.font = 'bold 52px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 8;
  ctx.strokeText(text, 32, 34);
  ctx.fillText(text, 32, 34);
  const tex = new THREE.CanvasTexture(c);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }));
  sp.scale.set(1.4, 1.4, 1);
  return sp;
}

export class FishingSystem {
  constructor(scene, world, state, clock, ui, audio) {
    Object.assign(this, { scene, world, state, clock, ui, audio });
    this.phase = 'idle'; // idle | wait | bite
    this.timer = 0;
    this.bobber = new THREE.Group();
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshLambertMaterial({ color: 0xdd3322 }));
    const ball2 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshLambertMaterial({ color: 0xffffff }));
    ball2.position.y = -0.1;
    this.bobber.add(ball, ball2);
    this.bobber.visible = false;
    scene.add(this.bobber);
    this.mark = markSprite('!', '#e33');
    this.mark.visible = false;
    scene.add(this.mark);
    this.t = 0;
  }

  get active() { return this.phase !== 'idle'; }

  start(zoneInfo) {
    this.phase = 'wait';
    this.zone = zoneInfo.zone;
    this.baseY = zoneInfo.spot.y + 0.1;
    this.bobber.position.copy(zoneInfo.spot);
    this.bobber.visible = true;
    const rainBonus = (this.clock.weather === 'rain') ? 0.55 : 1;
    this.timer = (2.2 + Math.random() * 5) * rainBonus;
    this.audio.sfx('splash');
  }

  stop() {
    this.phase = 'idle';
    this.bobber.visible = false;
    this.mark.visible = false;
  }

  pickFish() {
    const min = this.clock.min;
    const pool = [];
    for (const f of FISH) {
      if (f.zone !== 'both' && f.zone !== this.zone) continue;
      if (f.time && (min < f.time[0] || min > f.time[1])) continue;
      for (let i = 0; i < 4 - f.rarity; i++) pool.push(f);
    }
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  hook() {
    const f = this.pickFish();
    this.stop();
    if (!f) { this.ui.toast('なにも つれなかった…'); return; }
    const first = !this.state.fish[f.id];
    this.state.fish[f.id] = (this.state.fish[f.id] || 0) + 1;
    this.audio.sfx('catch');
    this.ui.toast(`${f.name} (${f.len}) をつった!${first ? ' 【ずかんに とうろく!】' : ''}`, first ? 'gold' : null);
    logEvent(this.state, `${f.name}をつった`);
    if (f.id === 'unagi') this.state.flags.unagi = true;
  }

  update(dt, player, prompts, interactHit) {
    this.t += dt;
    if (this.phase === 'idle') {
      if (player.moving) return;
      const w = this.world.waterZone(player.pos.x, player.pos.z);
      if (w) prompts.push({ dist: 1.5, label: `つりをする (${w.zone === 'river' ? 'あやがわ' : 'ほうじょういけ'})`, action: () => this.start(w) });
      return;
    }

    // 釣り中
    this.bobber.position.y = this.baseY + Math.sin(this.t * 2.4) * 0.05;
    if (this.phase === 'wait') {
      this.timer -= dt;
      if (interactHit) { this.stop(); this.ui.toast('つりをやめた'); return; }
      if (this.timer <= 0) {
        this.phase = 'bite';
        this.timer = 0.85;
        this.mark.position.copy(this.bobber.position).add(new THREE.Vector3(0, 1.6, 0));
        this.mark.visible = true;
        this.bobber.position.y = this.baseY - 0.3;
        this.audio.sfx('bite');
      }
    } else if (this.phase === 'bite') {
      this.timer -= dt;
      if (interactHit) { this.hook(); return; }
      if (this.timer <= 0) {
        this.stop();
        this.ui.toast('のがした! はやく E をおすんだ!');
      }
    }
  }
}
