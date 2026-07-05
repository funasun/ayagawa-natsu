import * as THREE from 'three';
import { makePerson } from '../world/builders.js';
import { options } from '../core/options.js';

const WALK = 5.4;
const RUN = 9.5;

export class Player {
  constructor(scene, world, input, camera) {
    this.world = world;
    this.input = input;
    this.camera = camera;
    const p = makePerson({ body: 0xffffff, head: 0xf0c8a0, hat: 0x4d7ec9, hair: 0x2a1d12, scale: 0.85 });
    this.mesh = p.group;
    this.parts = p.parts;
    this.mesh.position.set(114, 0, 17); // 陶のおばあちゃんの家のまえ (玄関さき)
    scene.add(this.mesh);
    this.heading = Math.PI;
    this.walkT = 0;
    this.moving = false;
    this.running = false;
    this.camPos = new THREE.Vector3();
    this.lookUpT = 0;
    this.snapCamera();
  }

  get pos() { return this.mesh.position; }

  // カメラが丘や土手のなかにめり込まないよう、地形より上にもちあげる
  clampCamY(v) {
    if (this.world.indoor || !this.world.groundY) return v;
    const gcam = this.world.groundY(v.x, v.z);
    if (v.y < gcam + 1.6) v.y = gcam + 1.6;
    return v;
  }

  snapCamera() {
    this.camPos.copy(this.pos).add(new THREE.Vector3(0, 6.8, 13));
    this.clampCamY(this.camPos);
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.pos.x, this.pos.y + 2.8, this.pos.z);
  }

  update(dt, frozen, festivalOn, lookUp) {
    const inp = this.input;
    let dx = 0, dz = 0;
    let stick = 0;
    if (!frozen) {
      if (inp.down('KeyW') || inp.down('ArrowUp')) dz -= 1;
      if (inp.down('KeyS') || inp.down('ArrowDown')) dz += 1;
      if (inp.down('KeyA') || inp.down('ArrowLeft')) dx -= 1;
      if (inp.down('KeyD') || inp.down('ArrowRight')) dx += 1;
      stick = Math.hypot(inp.axisX, inp.axisY);
      if (stick > 0.18) { dx += inp.axisX; dz += inp.axisY; }
    }
    this.moving = dx !== 0 || dz !== 0;
    // スティックを外周まで倒すと走る
    this.running = this.moving && (inp.down('ShiftLeft') || inp.down('ShiftRight') || stick > 0.92);
    if (this.moving) {
      const len = Math.hypot(dx, dz);
      const speed = this.running ? RUN : WALK;
      const nx = (dx / len) * speed * dt;
      const nz = (dz / len) * speed * dt;
      const p = this.pos;
      if (!this.world.isBlocked(p.x + nx, p.z, festivalOn)) p.x += nx;
      if (!this.world.isBlocked(p.x, p.z + nz, festivalOn)) p.z += nz;
      const target = Math.atan2(dx / len, dz / len);
      let diff = target - this.heading;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.heading += diff * Math.min(1, dt * 14);
      this.mesh.rotation.y = this.heading;
      this.walkT += dt * (this.running ? 13 : 9);
    } else {
      this.walkT *= 0.8;
    }

    // 歩きアニメ
    const sw = Math.sin(this.walkT) * (this.moving ? 0.75 : 0.06);
    this.parts.armL.rotation.x = sw;
    this.parts.armR.rotation.x = -sw;
    this.parts.legL.rotation.x = -sw;
    this.parts.legR.rotation.x = sw;
    const gy = this.world.groundY ? this.world.groundY(this.pos.x, this.pos.z) : 0;
    // カメラのゆれOFF (酔い対策) のときは上下バウンドを止める
    this.mesh.position.y = gy + (this.moving && options.camBob ? Math.abs(Math.sin(this.walkT)) * 0.09 : 0);

    // カメラ追従 (花火の夜に立ち止まると空を見上げる)
    const wantUp = lookUp && !this.moving ? 1 : 0;
    this.lookUpT += (wantUp - this.lookUpT) * Math.min(1, dt * 1.4);
    const up = this.lookUpT;
    const desired = new THREE.Vector3(this.pos.x, this.pos.y + 6.8 - up * 2.8, this.pos.z + 13);
    this.clampCamY(desired);
    this.camPos.lerp(desired, Math.min(1, dt * 4.5));
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.pos.x, this.pos.y + 2.8 + up * 12, this.pos.z);

    // カメラをふさぐ建物を半透明にする
    if (this.world.updateOcclusion) this.world.updateOcclusion(this.pos, this.camera.position, dt);
  }
}
