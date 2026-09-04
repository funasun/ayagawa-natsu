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
    this.vistaT = 0; // 絵になる場所で 立ちどまっている 時間
    this.blinkT = 2; this.blinkOn = 0; // まばたき
    // カメラの向き (0 = 南から北をみる)。ドラッグや Q/R キーで 360度まわせる
    this.camYaw = 0;
    // 僕夏ふうの「低く・寄った・見下ろしすぎない」追従カメラ。
    // 遠くまで一望する箱庭ではなく、その場に立っている ような ちかい目線に。
    this.camDist = 9.3;  // うしろへの きょり
    this.camHigh = 4.1;  // 少年の あたまより すこし上 (低め = より一人称にちかい目線)
    this.camLook = 2.3;  // みつめる高さ (胸〜あたま あたり)
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

  // カメラが 木のはっぱや 家の屋根に めり込まないよう、さえぎりの手前へ ひきよせる
  resolveCamBlock(v) {
    const obs = this.world.camObstacles;
    if (!obs || this.world.indoor) return v;
    const px = this.pos.x, py = this.pos.y + 2.3, pz = this.pos.z;
    const dx = v.x - px, dy = v.y - py, dz = v.z - pz;
    const reach = Math.hypot(dx, dz) + 0.001;
    let tHit = 1;
    for (const o of obs) {
      if (Math.abs(o.x - px) > reach + o.r || Math.abs(o.z - pz) > reach + o.r) continue;
      for (let s = 2; s <= 10; s++) {
        const t = s / 10;
        if (t >= tHit) break;
        const y = py + dy * t;
        if (y < o.y0 || y > o.y1) continue;
        if (Math.hypot(px + dx * t - o.x, pz + dz * t - o.z) < o.r) { tHit = Math.max(0.42, t - 0.1); break; } // 0.42 = 主人公の あたまの うえまで ちぢまない 下限
      }
    }
    if (tHit < 1) v.set(px + dx * tHit, py + dy * tHit, pz + dz * tHit);
    return v;
  }

  snapCamera() {
    if (this.world.indoor) this.camYaw = 0; // 屋内は 正面すえおき
    const y = this.camYaw;
    this.camPos.copy(this.pos).add(new THREE.Vector3(this.camDist * Math.sin(y), this.camHigh, this.camDist * Math.cos(y)));
    this.clampCamY(this.camPos);
    this.resolveCamBlock(this.camPos);
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.pos.x, this.pos.y + this.camLook, this.pos.z);
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
      // カメラ回転 (画面ドラッグ / Q・R キー)。屋内は 部屋のつくりに合わせて正面固定
      if (!this.world.indoor) {
        let yawIn = inp.yawDelta;
        if (inp.down('KeyQ')) yawIn += dt * 2.4;
        if (inp.down('KeyR')) yawIn -= dt * 2.4;
        this.camYaw += yawIn;
      }
    }
    inp.yawDelta = 0; // 会話ちゅうの ドラッグぶんが たまらないよう、毎フレームすてる
    if (this.world.indoor && this.camYaw !== 0) {
      // 屋内にはいったら、近いほうまわりで するっと正面へもどす
      let y = this.camYaw;
      while (y > Math.PI) y -= Math.PI * 2;
      while (y < -Math.PI) y += Math.PI * 2;
      y *= Math.max(0, 1 - dt * 5);
      this.camYaw = Math.abs(y) < 0.01 ? 0 : y;
    }
    const cy = Math.cos(this.camYaw), sy = Math.sin(this.camYaw);
    this.moving = dx !== 0 || dz !== 0;
    // スティックを外周まで倒すと走る
    this.running = this.moving && (inp.down('ShiftLeft') || inp.down('ShiftRight') || stick > 0.92);
    if (this.moving) {
      // 入力はカメラ基準 → 世界の向きへ変換 (みぎ = カメラのみぎ)
      const wx = dx * cy + dz * sy;
      const wz = -dx * sy + dz * cy;
      const len = Math.hypot(wx, wz);
      const speed = this.running ? RUN : WALK;
      const nx = (wx / len) * speed * dt;
      const nz = (wz / len) * speed * dt;
      const p = this.pos;
      // 急な のぼり斜面 (山はだ・がけ) には 体が めり込まないよう すすめない
      const gyF = this.world.groundY;
      const canStep = (fx, fz, tx, tz) => {
        if (this.world.isBlocked(tx, tz, festivalOn)) return false;
        if (!this.world.indoor && gyF) {
          const rise = gyF(tx, tz) - gyF(fx, fz);
          if (rise / (Math.hypot(tx - fx, tz - fz) || 1) > 1.6) return false;
        }
        return true;
      };
      if (canStep(p.x, p.z, p.x + nx, p.z)) p.x += nx;
      if (canStep(p.x, p.z, p.x, p.z + nz)) p.z += nz;
      const target = Math.atan2(wx / len, wz / len);
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
    // まばたき (2.5〜6秒に いちど、0.12秒)
    if (this.parts.eyes) {
      this.blinkT -= dt;
      if (this.blinkT <= 0) { this.blinkT = 2.5 + Math.random() * 3.5; this.blinkOn = 0.12; }
      if (this.blinkOn > 0) { this.blinkOn -= dt; this.parts.eyes.scale.y = 0.12; } else this.parts.eyes.scale.y = 1;
    }
    const gyFn = this.world.groundY;
    const gy = gyFn ? gyFn(this.pos.x, this.pos.z) : 0;
    // 斜面では 描画メッシュ (2mグリッド) と 解析地形が ずれて 足が うまるので、勾配ぶん すこし もちあげる
    let slopeLift = 0;
    if (gyFn && !this.world.indoor) {
      const gsx = Math.abs(gyFn(this.pos.x + 0.4, this.pos.z) - gyFn(this.pos.x - 0.4, this.pos.z));
      const gsz = Math.abs(gyFn(this.pos.x, this.pos.z + 0.4) - gyFn(this.pos.x, this.pos.z - 0.4));
      slopeLift = Math.min(0.22, Math.max(gsx, gsz) * 0.35);
    }
    // カメラのゆれOFF (酔い対策) のときは上下バウンドを止める
    this.mesh.position.y = gy + slopeLift + (this.moving && options.camBob ? Math.abs(Math.sin(this.walkT)) * 0.09 : 0);

    // カメラ追従 (花火の夜に立ち止まると空を見上げる)。camYaw で 360度どこからでも
    const wantUp = lookUp && !this.moving ? 1 : 0;
    this.lookUpT += (wantUp - this.lookUpT) * Math.min(1, dt * 1.4);
    const up = this.lookUpT;
    const desired = new THREE.Vector3(
      this.pos.x + this.camDist * sy,
      this.pos.y + this.camHigh - up * 2.8,
      this.pos.z + this.camDist * cy,
    );
    this.clampCamY(desired);
    this.resolveCamBlock(desired);
    // 絵になる場所: 立ちどまると、一枚絵のような きまった構図へ すっと 切りかわる (僕夏の 固定カメラの 味)
    let vista = null;
    const vs = this.world.vistaSpots;
    if (vs && !this.world.indoor && !this.moving && !lookUp) {
      for (const v of vs) if (Math.hypot(v.x - this.pos.x, v.z - this.pos.z) < v.r) { vista = v; break; }
    }
    this.vistaT = vista ? this.vistaT + dt : 0;
    if (vista && this.vistaT > 1.2) {
      desired.set(vista.cam.x, vista.cam.y, vista.cam.z);
      this.camPos.lerp(desired, Math.min(1, dt * 1.6));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(vista.look.x, vista.look.y, vista.look.z);
    } else {
      this.camPos.lerp(desired, Math.min(1, dt * 4.5));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(this.pos.x, this.pos.y + this.camLook + up * 12, this.pos.z);
    }

    // カメラをふさぐ建物を半透明にする
    if (this.world.updateOcclusion) this.world.updateOcclusion(this.pos, this.camera.position, dt);
  }
}
