import * as THREE from 'three';
import {
  mat, smat, grassTex, woodTex, waterTex, makeTree, makePine, makeBamboo, makeHouse, makeTorii, makeShrineHall,
  makeStoneLantern, makeBridge, makeSunflower, makePole, makeStoneWall, makeVending, makePostbox,
  makeBusStop, makeYatai, makeChochin, makeTrain, makeStation, makeRiceRow, makeFence,
  makeBench, makeMonument, makeAppleTree, makeKamaato,
  makeSignBoard, makeMall, makeTownHall, makeCar, makeSchool, makeHatake,
  makeMichishirube, makeHideout, makeGrave, makeLookout, makePerson,
} from './builders.js';
import { buildInterior, buildUpstairs } from './interior.js';
import { buildTrainRide } from './train.js';
import { buildTakamatsu } from './takamatsu.js';

// ==== 実在の綾川町の地理 ====
// +x = 北 (下流・陶方面) / -x = 南 (上流・綾上方面) / +z = 東 / -z = 西
// 綾川は綾上の山から北へ流れ、滝宮を抜けて陶の東をかすめる
export const riverCenterZ = (x) =>
  -8 + 13 * Math.sin(x / 41) - Math.max(0, x - 70) * 0.5 - Math.max(0, -x - 70) * 0.35;
export const RIVER_HALF = 6;
export const POND = { x: 130, z: 78, r: 15 }; // 北条池 (陶)
export const BRIDGE_X = 20;
export const BRIDGE2_X = -20.8; // 滝宮駅まえの橋 (駅前の道が川をわたるところ)
export const BRIDGE3_X = -137.5; // 綾上の棚田への山道が川をわたる木橋
export const TOBIISHI_X = 48; // 飛び石のならぶ場所
export const TOBIN = { x: 168, z: 52, h: 9.5, r: 24 }; // 十瓶山 (陶の窯跡の山)

const hash = (x, z) => {
  const n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
  return n - Math.floor(n);
};

// 大きな地形 (綾上の丘陵・山ぎわ・十瓶山)
function ridges(x, z) {
  let y = 0;
  if (x < -60) y += (-60 - x) * 0.055; // 綾上へ向かう上り (上流ほど高い)
  if (z < -80) y += (-80 - z) * 0.05; // 西の山ぎわ
  const dT = Math.hypot(x - TOBIN.x, z - TOBIN.z);
  y += TOBIN.h * Math.exp(-(dT * dT) / (TOBIN.r * TOBIN.r));
  return y;
}

// うねりつきの素の標高 (川べり・池べりはうねりを弱めて水があふれないように)
export function baseElev(x, z) {
  const dR = Math.abs(z - riverCenterZ(x));
  const dP = Math.hypot(x - POND.x, z - POND.z);
  const damp = Math.min(1, dR / 12) * Math.min(1, dP / (POND.r + 6));
  return ridges(x, z) + 0.35 * Math.sin(x / 23) * Math.sin(z / 19) * damp;
}

// 川の水面は岸より必ず0.55低く、下流(+x)へ向かって下る
export const waterLevel = (x) => ridges(x, riverCenterZ(x)) - 0.55;
export const POND_Y = ridges(POND.x, POND.z) - 0.5;

// 川と池のへこみを掘った最終的な地面の高さ
export function groundY(x, z) {
  let y = baseElev(x, z);
  const dR = Math.abs(z - riverCenterZ(x));
  if (dR < 9) y -= 2.3 * 0.5 * (1 + Math.cos((Math.PI * dR) / 9));
  const dP = Math.hypot(x - POND.x, z - POND.z);
  if (dP < POND.r + 3) y -= 1.7 * 0.5 * (1 + Math.cos((Math.PI * dP) / (POND.r + 3)));
  return y;
}

// ==== 道路網 (県道17号・32号を模した幹線 + 集落の道) ====
// (ちず画面の描画にも使うので export)
export const roadDefs = [
  // 幹線: 綾上 - 滝宮の商店通り - 陶
  { pts: [[-230, -38], [-180, -24], [-140, -16], [-95, 8], [-78, 24], [38, 24], [56, 21], [76, 14], [100, 5], [160, 3], [230, 7]], w: 3.6 },
  // 橋への道と天満宮の参道
  { pts: [[20, 25], [20, 7]], w: 2.6 },
  { pts: [[20, -6], [14, -28], [5, -44], [1, -52], [0, -58]], w: 2.6 },
  // 旧金毘羅街道 (北へ)
  { pts: [[-70, 24], [-70, 60], [-62, 80]], w: 2.6 },
  // 旧金毘羅街道から あやがわ小学校へ
  { pts: [[-70, 60], [-52, 60]], w: 2.2 },
  // ミナんちのまえ
  { pts: [[32, 24], [32, 19]], w: 2.2 },
  // 滝宮駅まえ (川は橋でわたる: 北岸→橋→南岸で駅へ)
  { pts: [[-20, 24], [-20.6, -5.5]], w: 2.6 },
  { pts: [[-20.9, -22.3], [-21.1, -23.2]], w: 2.6 },
  // 陶: 家のまえ (北条池への道から分かれて玄関さきへ)・陶駅まえ・北条池への道・十瓶山のふもと
  { pts: [[127.5, 13], [120.5, 15.3]], w: 2 },
  { pts: [[108, 3.8], [109, -8]], w: 2.4 },
  { pts: [[126, 3.4], [128, 24], [129, 44], [128, 60]], w: 2.4 },
  { pts: [[129, 44], [144, 44], [156, 43]], w: 2.2 },
  // 綾上: 果樹園への小道・棚田への山道
  { pts: [[-180, -24], [-184, -8]], w: 2.4 },
  // (川は x≈-137.5 の木橋でわたる)
  { pts: [[-140, -16], [-138.5, -20]], w: 1.8 },
  { pts: [[-136.4, -38], [-135.5, -44]], w: 1.8 },
  // 十瓶山: 見晴らし台への山道
  { pts: [[156, 43], [157, 50], [157, 57]], w: 2 },
  // 陶: 山すその墓地への小道
  { pts: [[138, 8], [141, 18]], w: 1.8 },
  // 飛び石への川べりの小道 (両岸)
  { pts: [[48, 24], [48, 10]], w: 1.8 },
  { pts: [[48, -2], [56, -8]], w: 1.8 },
  // あやがわモールへの道 (踏切をわたる)
  { pts: [[56, 21], [58, -8], [60, -26], [66, -30]], w: 3 },
  // 役場まえ
  { pts: [[-20.6, 3], [-27, 3]], w: 2.2 },
];

function segDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz || 1)));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}
function roadDist(x, z) {
  let best = 1e9;
  for (const rd of roadDefs) {
    for (let i = 0; i < rd.pts.length - 1; i++) {
      const d = segDist(x, z, ...rd.pts[i], ...rd.pts[i + 1]) - rd.w / 2;
      if (d < best) best = d;
    }
  }
  return best;
}

// ==== ことでん琴平線 (挿頭丘方面から滝宮・陶を抜けて高松へ) ====
export const RAIL_PTS = [[-240, -102], [-145, -90], [-90, -60], [-25, -30], [40, -24], [95, -18], [240, 8]];
function railDist(x, z) {
  let best = 1e9;
  for (let i = 0; i < RAIL_PTS.length - 1; i++) {
    const d = segDist(x, z, ...RAIL_PTS[i], ...RAIL_PTS[i + 1]);
    if (d < best) best = d;
  }
  return best;
}
// 線路の路盤高さ: 川に近づくと盛り土になって鉄橋の高さへ
function railBedY(x, z) {
  const g = groundY(x, z);
  const dR = Math.abs(z - riverCenterZ(x));
  const t = Math.max(0, Math.min(1, (14 - dR) / 8));
  return Math.max(g, g + (waterLevel(x) + 1.0 - g) * t) + 0.1;
}

function strip(points, width, lift, color, yFn) {
  const pos = [];
  const uv = [];
  const idx = [];
  const half = width / 2;
  let v = 0;
  const yAt = (px, pz) => (yFn ? yFn(px, pz) : groundY(px, pz) + lift);
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const q = points[Math.min(i + 1, points.length - 1)];
    const o = points[Math.max(i - 1, 0)];
    const dx = q[0] - o[0], dz = q[1] - o[1];
    const len = Math.hypot(dx, dz) || 1;
    const nx = -dz / len, nz = dx / len;
    const l = [p[0] + nx * half, p[1] + nz * half];
    const r = [p[0] - nx * half, p[1] - nz * half];
    if (i > 0) v += Math.hypot(p[0] - o[0], p[1] - o[1]) / width;
    pos.push(l[0], yAt(l[0], l[1]), l[1], r[0], yAt(r[0], r[1]), r[1]);
    uv.push(0, v, 1, v);
    if (i > 0) {
      const a = (i - 1) * 2;
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, smat(color));
  mesh.receiveShadow = true;
  return mesh;
}

function densify(pts, step = 4) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step));
    for (let k = 0; k < n; k++) out.push([ax + ((bx - ax) * k) / n, az + ((bz - az) * k) / n]);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

const riverPts = () => {
  const pts = [];
  for (let x = -238; x <= 238; x += 4) pts.push([x, riverCenterZ(x)]);
  return pts;
};

export function buildWorld(scene) {
  const world = {
    circles: [],
    rects: [],
    trees: [],
    grassAreas: [
      { x: 22, z: 27, r: 6 }, { x: 10, z: 10, r: 6 }, { x: 30, z: 44, r: 8 }, { x: -28, z: 42, r: 8 },
      { x: 112, z: 12, r: 6 }, { x: 124, z: 60, r: 7 }, { x: -152, z: -10, r: 7 },
    ],
    lanternMats: [],
    // 橋の上はデッキの高さを歩く (両端はスロープでなじませる)
    groundY: (x, z) => {
      if (world.indoor) return world.sub.floorY;
      const bz = Math.abs(z - riverCenterZ(x));
      if (Math.abs(x - BRIDGE_X) < 2.3 && bz < 8.2) {
        const t = Math.min(1, (8.2 - bz) / 1.2);
        return Math.max(groundY(x, z), 0.49 * t);
      }
      if (Math.abs(x - BRIDGE2_X) < 2.3 && bz < 8.2) {
        const t = Math.min(1, (8.2 - bz) / 1.2);
        return Math.max(groundY(x, z), 0.49 * t);
      }
      if (Math.abs(x - BRIDGE3_X) < 2.3 && bz < 8.2) {
        const t = Math.min(1, (8.2 - bz) / 1.2);
        const base = baseElev(BRIDGE3_X, riverCenterZ(BRIDGE3_X) - 9);
        return Math.max(groundY(x, z), (base + 0.49) * t + groundY(x, z) * (1 - t));
      }
      // 飛び石 (x=48) の上を ぴょんぴょん わたる
      if (Math.abs(x - TOBIISHI_X) < 1.4 && bz < RIVER_HALF + 2.4) {
        const t = Math.min(1, (RIVER_HALF + 2.4 - bz) / 1.6);
        return Math.max(groundY(x, z), groundY(x, z) + (waterLevel(x) + 0.34 - groundY(x, z)) * t);
      }
      return groundY(x, z);
    },
  };
  const addCircle = (x, z, r) => world.circles.push({ x, z, r });
  const addRect = (x, z, hx, hz) => world.rects.push({ x, z, hx, hz });
  // 家: 本体 + 縁側 (張り出し) の両方に当たり判定をつける
  const addHouse = (x, z, w, d, ds = 1) => {
    addRect(x, z, w / 2 + 0.3, d / 2 + 0.3);
    addRect(x, z + ds * (d / 2 + 0.7), w * 0.45, 0.78);
  };
  // カメラと主人公のあいだをふさぐ建物を半透明にするための登録
  world.indoor = false;
  world.occluders = [];
  const registerOccluder = (obj, x, z, r, topY) => {
    const mats = new Set();
    obj.traverse((o) => { if (o.isMesh) mats.add(o.material); });
    world.occluders.push({ x, z, r, topY, mats: [...mats], fade: 1 });
  };
  const gy = (x, z) => groundY(x, z);
  const dummy = new THREE.Object3D();

  // ---------- 地面 (実際の高低差 + 川と池の掘り込み。頂点カラーで塗り分け) ----------
  const gGeo = new THREE.PlaneGeometry(520, 520, 208, 208);
  gGeo.rotateX(-Math.PI / 2);
  const gp = gGeo.attributes.position;
  const colors = new Float32Array(gp.count * 3);
  const c = new THREE.Color();
  const roadCol = new THREE.Color(0x9d8a63);
  const dirtCol = new THREE.Color().setHSL(0.12, 0.32, 0.5);
  const gravelCol = new THREE.Color(0x8d8474);
  for (let i = 0; i < gp.count; i++) {
    const x = gp.getX(i), z = gp.getZ(i);
    const y = groundY(x, z);
    gp.setY(i, y);
    const n = hash(Math.floor(x / 5), Math.floor(z / 5));
    const carve = baseElev(x, z) - y; // 川・池の掘り込みの深さ
    // 基本は草の濃淡。標高が上がると山の濃い緑に
    c.setHSL(0.24 + n * 0.03, 0.32 + n * 0.14, Math.max(0.28, 0.42 + n * 0.1 - y * 0.012));
    if (carve > 0.5) c.setHSL(0.11, 0.3, 0.52 + n * 0.06); // 川原の砂
    else if (carve > 0.18) c.lerp(dirtCol, 0.55);
    const rd = roadDist(x, z);
    if (rd < 2.4) c.lerp(roadCol, Math.max(0, 1 - Math.max(0, rd) / 2.4) * 0.5);
    const rl = railDist(x, z);
    if (rl < 2.4) c.lerp(gravelCol, Math.max(0, 1 - rl / 2.4) * 0.45);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  gGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  gGeo.computeVertexNormals();
  const ground = new THREE.Mesh(gGeo, new THREE.MeshLambertMaterial({ map: grassTex(), vertexColors: true }));
  ground.receiveShadow = true;
  scene.add(ground);

  // ---------- 綾川 (水面は岸より低い。上流ほど高く、下流へ下る) ----------
  const water = strip(riverPts(), RIVER_HALF * 2 + 1, 0, 0xffffff, (px) => waterLevel(px));
  water.material.map = waterTex();
  water.material.transparent = true;
  water.material.opacity = 0.92;
  scene.add(water);
  world.riverWaterMat = water.material;
  // 川原の石 (水ぎわに半分つかる)
  const stoneGeo = new THREE.DodecahedronGeometry(0.32, 0);
  const stones = new THREE.InstancedMesh(stoneGeo, smat(0x9a958c), 110);
  for (let i = 0; i < 110; i++) {
    const x = -220 + hash(i, 1) * 440;
    const side = hash(i, 2) < 0.5 ? -1 : 1;
    const d = 6.2 + hash(i, 3) * 2;
    const z = riverCenterZ(x) + side * d;
    dummy.position.set(x, gy(x, z) + 0.1, z);
    dummy.rotation.set(hash(i, 4) * 3, hash(i, 5) * 3, 0);
    dummy.scale.setScalar(0.5 + hash(i, 6) * 1.3);
    dummy.updateMatrix();
    stones.setMatrixAt(i, dummy.matrix);
  }
  scene.add(stones);
  // アシ (水辺の草)
  const reedGeo = new THREE.ConeGeometry(0.1, 1.3, 4);
  reedGeo.translate(0, 0.6, 0);
  const reeds = new THREE.InstancedMesh(reedGeo, smat(0x6a8f4a), 200);
  for (let i = 0; i < 200; i++) {
    let x, z;
    if (i < 170) {
      x = -215 + hash(i, 7) * 430;
      const side = hash(i, 8) < 0.5 ? -1 : 1;
      z = riverCenterZ(x) + side * (6.0 + hash(i, 9) * 1.6);
    } else { // 北条池のまわり
      const a = hash(i, 7) * Math.PI * 2;
      const d = 13 + hash(i, 9) * 2;
      x = POND.x + Math.cos(a) * d;
      z = POND.z + Math.sin(a) * d;
    }
    dummy.position.set(x, gy(x, z), z);
    dummy.rotation.y = hash(i, 10) * 6;
    dummy.rotation.z = (hash(i, 11) - 0.5) * 0.3;
    dummy.scale.set(1, 0.7 + hash(i, 12) * 0.9, 1);
    dummy.updateMatrix();
    reeds.setMatrixAt(i, dummy.matrix);
  }
  scene.add(reeds);

  // ---------- 北条池 (陶の大ため池) ----------
  const pond = new THREE.Mesh(new THREE.CircleGeometry(POND.r + 1.2, 32), smat(0x4f8aa8, { transparent: true, opacity: 0.9 }));
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(POND.x, POND_Y, POND.z);
  scene.add(pond);
  // ベンチは池への通り道 (x≈120の直進ライン) をふさがない位置に
  const pondBench = makeBench();
  pondBench.position.set(125.5, gy(125.5, 60), 60);
  pondBench.rotation.y = -Math.PI * 0.3;
  scene.add(pondBench);
  addRect(125.5, 60, 1, 0.5);

  // ---------- 道 ----------
  for (const rd of roadDefs) scene.add(strip(densify(rd.pts), rd.w, 0.05, 0xc7ad7e));

  // ---------- 橋 ----------
  const bridge = makeBridge();
  bridge.position.set(BRIDGE_X, 0, riverCenterZ(BRIDGE_X));
  scene.add(bridge);
  // 滝宮駅まえの橋 (駅前の道 [-20,24]→[-21,-22] が川をわたる場所)
  const bridge2 = makeBridge();
  bridge2.position.set(BRIDGE2_X, 0, riverCenterZ(BRIDGE2_X));
  scene.add(bridge2);
  // 綾上の木橋 (棚田への山道が川をわたる場所。土地が高いぶん橋も高い)
  const bridge3 = makeBridge();
  bridge3.position.set(BRIDGE3_X, baseElev(BRIDGE3_X, riverCenterZ(BRIDGE3_X) - 9), riverCenterZ(BRIDGE3_X));
  scene.add(bridge3);

  // ---------- ことでんの線路 (路盤 + レール + まくらぎ + 鉄橋) ----------
  const railDense = densify(RAIL_PTS, 3);
  scene.add(strip(railDense, 3.4, 0, 0x8d8474, (px, pz) => railBedY(px, pz)));
  const offsetPts = (pts, off) => pts.map((p, i) => {
    const q = pts[Math.min(i + 1, pts.length - 1)];
    const o = pts[Math.max(i - 1, 0)];
    const dx = q[0] - o[0], dz = q[1] - o[1];
    const len = Math.hypot(dx, dz) || 1;
    return [p[0] - (dz / len) * off, p[1] + (dx / len) * off];
  });
  for (const off of [-0.7, 0.7]) scene.add(strip(offsetPts(railDense, off), 0.16, 0, 0x707068, (px, pz) => railBedY(px, pz) + 0.22));
  // 経路 (距離 -> 位置/向き)。電車の走行にも使う
  const cum = [0];
  for (let i = 1; i < railDense.length; i++) cum.push(cum[i - 1] + Math.hypot(railDense[i][0] - railDense[i - 1][0], railDense[i][1] - railDense[i - 1][1]));
  const railLen = cum[cum.length - 1];
  const railPoint = (d) => {
    d = Math.max(0, Math.min(railLen, d));
    let i = 1;
    while (i < cum.length - 1 && cum[i] < d) i++;
    const t = (d - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
    const x = railDense[i - 1][0] + (railDense[i][0] - railDense[i - 1][0]) * t;
    const z = railDense[i - 1][1] + (railDense[i][1] - railDense[i - 1][1]) * t;
    const dx = railDense[i][0] - railDense[i - 1][0], dz = railDense[i][1] - railDense[i - 1][1];
    return { x, z, y: railBedY(x, z), rot: -Math.atan2(dz, dx) };
  };
  world.railPath = { length: railLen, pointAt: railPoint };
  const nSleep = Math.floor(railLen / 3.2);
  const sleepers = new THREE.InstancedMesh(new THREE.BoxGeometry(0.3, 0.08, 2.2), smat(0x5a4a38), nSleep);
  for (let i = 0; i < nSleep; i++) {
    const p = railPoint(i * 3.2 + 1);
    dummy.position.set(p.x, p.y + 0.14, p.z);
    dummy.rotation.set(0, p.rot, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    sleepers.setMatrixAt(i, dummy.matrix);
  }
  scene.add(sleepers);
  // 綾川を渡る鉄橋 (滝宮駅と陶の間で川を越える)
  let bd = 0, bmin = 1e9;
  for (let d = 0; d < railLen; d += 2) {
    const p = railPoint(d);
    const dr = Math.abs(p.z - riverCenterZ(p.x));
    if (dr < bmin) { bmin = dr; bd = d; }
  }
  const bp = railPoint(bd);
  const girder = new THREE.Mesh(new THREE.BoxGeometry(30, 0.9, 3.6), smat(0x3f5a46));
  girder.position.set(bp.x, waterLevel(bp.x) + 0.72, bp.z);
  girder.rotation.y = bp.rot;
  scene.add(girder);
  for (const s of [-9, 0, 9]) {
    const pierX = bp.x + Math.cos(-bp.rot) * s;
    const pierZ = bp.z + Math.sin(-bp.rot) * s;
    const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 2.6, 8), mat(0x8a857a));
    pier.position.set(pierX, waterLevel(bp.x) - 0.9, pierZ);
    scene.add(pier);
  }

  // ---------- 駅 (滝宮駅・陶駅) ----------
  const stTakinomiya = makeStation();
  stTakinomiya.position.set(-22.3, gy(-22.3, -26.1), -26.1);
  stTakinomiya.rotation.y = -0.092 + Math.PI;
  scene.add(stTakinomiya);
  addRect(-22.3, -26.3, 8.3, 3.2);
  registerOccluder(stTakinomiya, -22.3, -26.1, 9, gy(-22.3, -26.1) + 5.4);
  const stSue = makeStation();
  stSue.position.set(109.4, gy(109.4, -11.8), -11.8);
  stSue.rotation.y = -0.1774 + Math.PI;
  scene.add(stSue);
  addRect(109.4, -12, 8.3, 3.2);
  registerOccluder(stSue, 109.4, -11.8, 9, gy(109.4, -11.8) + 5.4);
  const train = makeTrain();
  train.visible = false;
  scene.add(train);
  world.train = train;

  // ---------- おばあちゃんの家 (陶。石垣と柿の木) ----------
  // 玄関はカメラのある南東側 (+z) に向けて、戸口が見えるように
  const house = makeHouse({ w: 9, d: 6.5, h: 3.1, roofC: '#454f5a', doorSide: 1 });
  house.position.set(118, gy(118, 10), 10);
  scene.add(house);
  addHouse(118, 10, 9, 6.5, 1);
  registerOccluder(house, 118, 10, 7, gy(118, 10) + 6);
  for (const [wx, wl] of [[112.8, 5], [123.4, 5.5]]) {
    const wall = makeStoneWall(wl);
    wall.position.set(wx, gy(wx, 5.6), 5.6);
    scene.add(wall);
    addRect(wx, 5.6, wl / 2, 0.5);
  }
  const kaki = makeTree(false, 11);
  kaki.position.set(124, gy(124, 13), 13);
  scene.add(kaki);
  world.trees.push({ x: 124, z: 13, big: false });
  addCircle(124, 13, 0.6);
  // ばあちゃんの野菜畑 (きゅうりとトマト。あさかゆうがたに みずやりできる)
  const hatake = makeHatake();
  hatake.position.set(108.5, gy(108.5, 13), 13);
  scene.add(hatake);
  addRect(108.5, 13, 2.3, 1.8);

  // 陶の集落 (瓦屋根の家いえ)
  for (const [hx, hz, hw, hd, hr, ds] of [
    [100, 14, 6, 4.6, '#5f5346', -1],
    [134, 12, 5.4, 4.4, '#6b4438', -1],
    [98, -2, 5.6, 4.4, '#4e5a4e', 1], // 駅前の道をふさがない位置に

  ]) {
    const h2 = makeHouse({ w: hw, d: hd, h: 2.7, roofC: hr, doorSide: ds });
    h2.position.set(hx, gy(hx, hz), hz);
    scene.add(h2);
    addHouse(hx, hz, hw, hd, ds);
    registerOccluder(h2, hx, hz, hw / 2 + 2, gy(hx, hz) + 5.2);
  }
  const sueVend = makeVending();
  sueVend.position.set(105, gy(105, -7), -7);
  sueVend.rotation.y = 0.2;
  scene.add(sueVend);
  addCircle(105, -7, 0.7);

  // ---------- 十瓶山 (陶の焼きものの山) ----------
  const tobinPeak = new THREE.Mesh(new THREE.ConeGeometry(15, 11, 12), smat(new THREE.Color().setHSL(0.35, 0.3, 0.3)));
  tobinPeak.position.set(TOBIN.x, ridges(TOBIN.x, TOBIN.z) + 4, TOBIN.z);
  scene.add(tobinPeak);
  addCircle(TOBIN.x, TOBIN.z, 12);
  // カメラが山のなかに入ると画面がふさがるので、あいだに入ったら半透明にする
  registerOccluder(tobinPeak, TOBIN.x, TOBIN.z, 15.5, tobinPeak.position.y + 5.5);
  for (let i = 0; i < 9; i++) {
    const a = hash(i, 61) * Math.PI * 2;
    const d = 13 + hash(i, 62) * 9;
    const px = TOBIN.x + Math.cos(a) * d, pz = TOBIN.z + Math.sin(a) * d;
    const t = makePine(i);
    t.position.set(px, gy(px, pz), pz);
    scene.add(t);
    world.trees.push({ x: px, z: pz, big: false });
    addCircle(px, pz, 0.5);
  }
  // 窯あと (陶器のかけらが出る)
  const kama = makeKamaato();
  kama.position.set(154, gy(154, 47), 47);
  kama.rotation.y = 0.5;
  scene.add(kama);
  addCircle(154, 47, 1.1);

  // ---------- 滝宮の田 + 陶の田 (水鏡と稲) ----------
  const paddyDefs = [];
  for (let cx = 0; cx < 4; cx++) for (let cz = 0; cz < 3; cz++) paddyDefs.push([12 + cx * 13, 50 + cz * 11]);
  for (let cx = 0; cx < 3; cx++) for (let cz = 0; cz < 3; cz++) paddyDefs.push([90 + cx * 13, 24 + cz * 11]);
  const riceAll = makeRiceRow(paddyDefs.length * 14 * 8);
  let ri = 0;
  for (const [px, pz] of paddyDefs) {
    const base = gy(px, pz);
    const waterP = new THREE.Mesh(new THREE.BoxGeometry(11.4, 0.14, 9.4), smat(0x7d9a6e, { transparent: true, opacity: 0.93 }));
    waterP.position.set(px, base + 0.2, pz);
    scene.add(waterP);
    const bund = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.55, 10.4), smat(0xa08a5e));
    bund.position.set(px, base + 0.05, pz);
    bund.receiveShadow = true;
    scene.add(bund);
    for (let rz = 0; rz < 8; rz++) for (let rx = 0; rx < 14; rx++) {
      dummy.position.set(px - 5.1 + rx * 0.78, base + 0.24, pz - 3.9 + rz * 1.1);
      dummy.rotation.set(0, hash(rx, rz) * 3, 0);
      dummy.scale.setScalar(0.85 + hash(rx + px, rz + pz) * 0.4);
      dummy.updateMatrix();
      riceAll.setMatrixAt(ri++, dummy.matrix);
    }
  }
  scene.add(riceAll);

  // ---------- 綾上の棚田 (山の斜面に石垣の段々。まんなかに あぜ道) ----------
  const tanadaDefs = [];
  // 山すその斜面にならぶ (線路は z≈-77〜-90 と、田からはなれた山がわを通る)
  for (const tx of [-149, -142, -128, -121]) for (const tz of [-49, -59]) tanadaDefs.push([tx, tz]);
  const riceTana = makeRiceRow(tanadaDefs.length * 8 * 7);
  let tanaI = 0;
  for (const [px, pz] of tanadaDefs) {
    const base = gy(px, pz);
    const bund = new THREE.Mesh(new THREE.BoxGeometry(7.0, 1.1, 9.2), smat(0xa08a5e));
    bund.position.set(px, base + 0.2, pz);
    bund.receiveShadow = true;
    scene.add(bund);
    const waterP = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.14, 8.4), smat(0x7d9a6e, { transparent: true, opacity: 0.93 }));
    waterP.position.set(px, base + 0.62, pz);
    scene.add(waterP);
    // くだりがわ (+x) の石垣
    const ishigaki = makeStoneWall(9);
    ishigaki.rotation.y = Math.PI / 2;
    ishigaki.position.set(px + 3.6, gy(px + 3.6, pz), pz);
    scene.add(ishigaki);
    for (let rz = 0; rz < 7; rz++) for (let rx = 0; rx < 8; rx++) {
      dummy.position.set(px - 2.7 + rx * 0.78, base + 0.66, pz - 3.3 + rz * 1.1);
      dummy.rotation.set(0, hash(rx + px, rz) * 3, 0);
      dummy.scale.setScalar(0.85 + hash(rx, rz + pz) * 0.4);
      dummy.updateMatrix();
      riceTana.setMatrixAt(tanaI++, dummy.matrix);
    }
    addRect(px, pz, 3.5, 4.6); // 田んぼには入れない (あぜ道を歩く)
  }
  scene.add(riceTana);
  // 農具ごや
  const koya = new THREE.Group();
  const kBody = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.1, 2.2), smat(0x6b5136));
  kBody.position.y = 1.05;
  kBody.castShadow = true;
  const kRoof = new THREE.Mesh(new THREE.ConeGeometry(2.3, 1.2, 4), smat(0x4a3a2c));
  kRoof.position.y = 2.7;
  kRoof.rotation.y = Math.PI / 4;
  koya.add(kBody, kRoof);
  koya.position.set(-130, gy(-130, -41.5), -41.5);
  scene.add(koya);
  addCircle(-130, -41.5, 1.7);
  // かかし (あぜ道のまんなかで 田をみまもる)
  const kakashi = new THREE.Group();
  const kkPole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 2.1, 5), smat(0x8a6a42));
  kkPole.position.y = 1.05;
  const kkArm = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.09, 0.09), smat(0x8a6a42));
  kkArm.position.y = 1.55;
  const kkShirt = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.75, 0.4), smat(0xb04a3a));
  kkShirt.position.y = 1.25;
  const kkHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 6), smat(0xf0dcb0));
  kkHead.position.y = 1.85;
  const kkHat = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.32, 8), smat(0xc8a84e));
  kkHat.position.y = 2.05;
  kakashi.add(kkPole, kkArm, kkShirt, kkHead, kkHat);
  kakashi.traverse((o) => { o.castShadow = true; });
  kakashi.position.set(-135, gy(-135, -49), -49);
  kakashi.rotation.y = 0.4;
  scene.add(kakashi);
  addCircle(-135, -49, 0.4);

  // ---------- ミナんち (もとのおばあちゃんの家。ひまわり畑つき) ----------
  const minaHouse = makeHouse({ w: 9, d: 6.5, h: 3.1, roofC: '#5a4438' });
  minaHouse.position.set(32, gy(32, 14), 14);
  scene.add(minaHouse);
  addHouse(32, 14, 9, 6.5, 1);
  registerOccluder(minaHouse, 32, 14, 7, gy(32, 14) + 6);
  for (const [wx, wl] of [[26.5, 5], [38, 5.5]]) {
    const wall = makeStoneWall(wl);
    wall.position.set(wx, gy(wx, 20.8), 20.8);
    scene.add(wall);
    addRect(wx, 20.8, wl / 2, 0.5);
  }
  for (let i = 0; i < 36; i++) {
    const f = makeSunflower(i);
    const fx = 17 + (i % 6) * 1.5 + Math.sin(i * 7) * 0.4;
    const fz = 27 + Math.floor(i / 6) * 1.4 + Math.cos(i * 5) * 0.4;
    f.position.set(fx, gy(fx, fz), fz);
    f.rotation.y = -0.6 + Math.sin(i) * 0.25;
    scene.add(f);
  }

  // ---------- 滝宮の商店通り (うどん屋・駄菓子屋・町家) ----------
  const udon = makeHouse({ w: 7.5, d: 5, h: 2.9, roofC: '#5a4438' });
  udon.position.set(-52, gy(-52, 17), 17);
  scene.add(udon);
  addHouse(-52, 17, 7.5, 5, 1);
  registerOccluder(udon, -52, 17, 6.2, gy(-52, 17) + 5.5);
  const noren = new THREE.Mesh(new THREE.BoxGeometry(3, 0.9, 0.06), smat(0x2c4d78));
  noren.position.set(-52, gy(-52, 20) + 2.2, 20);
  scene.add(noren);
  const postbox = makePostbox();
  postbox.position.set(-48, gy(-48, 21.2), 21.2);
  scene.add(postbox);
  addCircle(-48, 21.2, 0.5);

  const dagashi = makeHouse({ w: 5.6, d: 4.6, h: 2.6, roofC: '#7a3a30' });
  dagashi.position.set(-63, gy(-63, 17.2), 17.2);
  scene.add(dagashi);
  addHouse(-63, 17.2, 5.6, 4.6, 1);
  registerOccluder(dagashi, -63, 17.2, 5.2, gy(-63, 17.2) + 5);

  // 旧金毘羅街道の街並み (滝宮は宿場町)
  for (const [hx, hw, hd, hr] of [[-40, 6, 4.6, '#5f5346'], [-31.5, 5.2, 4.3, '#6b4438'], [-72.5, 5.4, 4.4, '#4e5a4e']]) {
    const machiya = makeHouse({ w: hw, d: hd, h: 2.7, roofC: hr });
    machiya.position.set(hx, gy(hx, 17.4), 17.4);
    scene.add(machiya);
    addHouse(hx, 17.4, hw, hd, 1);
    registerOccluder(machiya, hx, 17.4, hw / 2 + 2, gy(hx, 17.4) + 5.2);
  }
  // うどん発祥の地 の石碑
  const monument = makeMonument();
  monument.position.set(-56.5, gy(-56.5, 20.6), 20.6);
  monument.rotation.y = 0.15;
  scene.add(monument);
  addCircle(-56.5, 20.6, 0.7);
  const vend = makeVending();
  vend.position.set(-59.6, gy(-59.6, 19.9), 19.9);
  vend.rotation.y = 0.1;
  scene.add(vend);
  addCircle(-59.6, 19.9, 0.7);

  const bus = makeBusStop();
  bus.position.set(-20, gy(-20, 26.6), 26.6);
  scene.add(bus);
  addCircle(-20, 26.6, 0.4);

  // ---------- 滝宮天満宮 ----------
  const torii = makeTorii(1.15);
  torii.position.set(2.5, gy(2.5, -47), -47);
  torii.rotation.y = 0.15;
  scene.add(torii);
  addCircle(0.5, -47, 0.4); addCircle(4.6, -47, 0.4);
  const hall = makeShrineHall();
  hall.position.set(0, gy(0, -66), -66);
  scene.add(hall);
  addRect(0, -66, 4.9, 3.9);
  addRect(0, -62, 1.5, 1.3); // 拝殿の階段
  registerOccluder(hall, 0, -66, 6.5, gy(0, -66) + 5.5);
  for (const sx of [-1, 1]) {
    const lan = makeStoneLantern();
    lan.position.set(sx * 3, gy(sx * 3, -58), -58);
    scene.add(lan);
    addCircle(sx * 3, -58, 0.4);
  }
  const kusu = makeTree(true, 3);
  kusu.position.set(-9, gy(-9, -54), -54);
  scene.add(kusu);
  world.trees.push({ x: -9, z: -54, big: true });
  addCircle(-9, -54, 1.2);
  for (let i = 0; i < 16; i++) {
    const bx = -16 - hash(i, 21) * 9, bz = -68 - hash(i, 22) * 8;
    const b = makeBamboo(i);
    b.position.set(bx, gy(bx, bz), bz);
    scene.add(b);
  }
  addCircle(-20, -72, 4.5);

  // ---------- 滝宮神社 (天満宮のとなり) ----------
  const jinjaTorii = makeTorii(0.82);
  jinjaTorii.position.set(13, gy(13, -53), -53);
  jinjaTorii.rotation.y = -0.12;
  scene.add(jinjaTorii);
  addCircle(11.6, -53, 0.35); addCircle(14.4, -53, 0.35);
  const jinja = makeShrineHall();
  jinja.scale.setScalar(0.72);
  jinja.position.set(14, gy(14, -64), -64);
  jinja.rotation.y = -0.12;
  scene.add(jinja);
  addRect(14, -64, 3.6, 2.9);
  addRect(13.7, -61.1, 1.2, 1.0); // 階段
  registerOccluder(jinja, 14, -64, 5, gy(14, -64) + 4.4);

  // ---------- 綾上 (山あいの里。りんご園と農家) ----------
  for (const [hx, hz, hr, ds] of [[-150, -12, '#5f5346', -1], [-172, -10, '#6b4438', -1]]) {
    const farm = makeHouse({ w: 7, d: 5, h: 2.8, roofC: hr, doorSide: ds });
    farm.position.set(hx, gy(hx, hz), hz);
    scene.add(farm);
    addHouse(hx, hz, 7, 5, ds);
    registerOccluder(farm, hx, hz, 5.8, gy(hx, hz) + 5.3);
  }
  for (let ax = 0; ax < 3; ax++) for (let az = 0; az < 2; az++) {
    const px = -186 + ax * 4.2, pz = -10 + az * 4.4;
    const apple = makeAppleTree(ax * 3 + az);
    apple.position.set(px, gy(px, pz), pz);
    scene.add(apple);
    addCircle(px, pz, 0.5);
  }
  const orchardFence = makeFence(15);
  orchardFence.position.set(-181.8, gy(-181.8, -2.5), -2.5);
  scene.add(orchardFence);

  // ---------- 川辺のベンチ (滝宮公園ふう) ----------
  for (const [bx, bzOff] of [[26.5, 7.6], [31.5, 8.0]]) {
    const bz = riverCenterZ(bx) + bzOff;
    const bench = makeBench();
    bench.position.set(bx, gy(bx, bz), bz);
    bench.rotation.y = Math.PI;
    scene.add(bench);
    addRect(bx, bz, 1, 0.35);
  }

  // ---------- あやがわモール (綾川駅ちかくの大型ショッピングセンター) ----------
  const mall = makeMall();
  const mallY = gy(66, -44);
  mall.position.set(66, mallY, -44);
  scene.add(mall);
  addRect(66, -44, 17.3, 8.3);
  registerOccluder(mall, 66, -44, 19, mallY + 8.6);
  // 駐車場 (地形になじむ帯 + 白線 + とまってる車)
  scene.add(strip(densify([[51, -32.5], [81, -32.5]], 4), 13, 0.07, 0x8f9094));
  for (let i = 0; i < 7; i++) {
    const lx = 54 + i * 4;
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 4.8), smat(0xf0f0ea));
    line.position.set(lx, gy(lx, -33.2) + 0.12, -33.2);
    scene.add(line);
  }
  const carCols = [0xd0d4d8, 0xb43a34, 0x3a5a94, 0xe8e2cc];
  [[56, -33.3, 0.05], [60, -33.3, 0], [64, -33.3, -0.04], [72, -33.3, 0.08]].forEach(([cx, cz, cr], i) => {
    const car = makeCar(carCols[i % carCols.length]);
    car.position.set(cx, gy(cx, cz) + 0.08, cz);
    car.rotation.y = Math.PI / 2 + cr;
    scene.add(car);
    addRect(cx, cz, 1.1, 2.0);
  });

  // ---------- 綾川町役場 ----------
  const yakuba = makeTownHall();
  yakuba.position.set(-32, gy(-32, 3), 3);
  yakuba.rotation.y = Math.PI / 2;
  scene.add(yakuba);
  addRect(-32, 3, 4.3, 6.8);
  registerOccluder(yakuba, -32, 3, 8.5, gy(-32, 3) + 7);

  // ---------- うどん会館 (道の駅ふう) ----------
  const kaikan = makeHouse({ w: 10, d: 6, h: 3.4, roofC: '#3f4f5f' });
  kaikan.position.set(-8, gy(-8, 17.5), 17.5);
  scene.add(kaikan);
  addHouse(-8, 17.5, 10, 6, 1);
  registerOccluder(kaikan, -8, 17.5, 8, gy(-8, 17.5) + 6.4);
  const kaikanSign = makeSignBoard('うどんかいかん', { bg: '#2c4d78', fg: '#ffffff', w: 5.6, h: 1.05 });
  kaikanSign.position.set(-8, gy(-8, 17.5) + 3.35, 17.5 + 3.2);
  scene.add(kaikanSign);

  // ---------- 街道すじの民家 (滝宮・陶・綾上をにぎやかに) ----------
  for (const [hx, hz, hw, hd, hr, ds, rot] of [
    // 滝宮: 幹線の北がわの家なみ
    [-76, 29.5, 5.6, 4.4, '#5f5346', -1, 0.05], [-46, 29.5, 5.2, 4.2, '#6b4438', -1, -0.04],
    [-36, 29.5, 6, 4.6, '#4e5a4e', -1, 0.03], [-26, 29.5, 5.4, 4.4, '#5a4438', -1, 0],
    [-12, 29.5, 5.8, 4.5, '#5f5346', -1, -0.05], [0, 29.5, 5.2, 4.2, '#454f5a', -1, 0.04],
    [10, 29.5, 6, 4.6, '#6b4438', -1, 0],
    // 陶
    [94, 13.4, 5.4, 4.4, '#6b4438', -1, 0.04], [144, -3, 5.6, 4.4, '#5f5346', 1, -0.03],
    [98, -6, 5.2, 4.2, '#454f5a', 1, 0.05],
    // 綾上
    [-128, -3, 5.6, 4.4, '#5f5346', -1, 0.06],
  ]) {
    const hh = makeHouse({ w: hw, d: hd, h: 2.7, roofC: hr, doorSide: ds });
    hh.position.set(hx, gy(hx, hz), hz);
    hh.rotation.y = rot;
    scene.add(hh);
    addHouse(hx, hz, hw + 0.5, hd + 0.5, ds);
    registerOccluder(hh, hx, hz, hw / 2 + 2.2, gy(hx, hz) + 5.2);
  }

  // ---------- 電柱と電線 (滝宮の通り + 陶の通り) ----------
  const wireMat = smat(0x2a2a28);
  const poleRow = (poles, pz) => {
    const placed = [];
    for (const px of poles) {
      const p = makePole();
      const py = gy(px, pz);
      p.position.set(px, py, pz);
      scene.add(p);
      addCircle(px, pz, 0.3);
      placed.push({ px, py });
    }
    for (let i = 0; i < placed.length - 1; i++) {
      for (const wy of [7.9, 7.2]) {
        const a = new THREE.Vector3(placed[i].px, placed[i].py + wy, pz);
        const b = new THREE.Vector3(placed[i + 1].px, placed[i + 1].py + wy, pz);
        const mid = a.clone().lerp(b, 0.5); mid.y -= 0.7;
        const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
        scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.03, 4), wireMat));
      }
    }
  };
  poleRow([-78, -59, -40, -21, -2, 17, 36], 22);
  poleRow([98, 116, 134, 152], 6.3);

  // ---------- 木々 (集落まわりの手植え) ----------
  const treeSpots = [
    [10, 2], [26, -2], [38, 3], [-6, -4], [-14, -2], [-38, -6], [43, -11], [58, 2],
    [8, -46], [24, -52], [-14, -64], [6, -70], [-18, -44], [26, -64],
    [40, 30], [50, 40], [-20, 55], [-52, 50], [-30, 76], [-14, 40],
    [60, 60], [70, 20], [-80, 40], [-90, 10], [-40, -30], [-60, -20], [-75, -45],
    [30, -30], [40, -48], [70, -15], [-25, -75], [35, 70], [66, 44],
    // 陶
    [100, 20], [126, 16], [142, 10], [108, 54], [140, 66], [118, 86], [144, 88], [160, 20], [96, -2], [130, -6],
    // 綾上
    [-120, -4], [-136, 4], [-158, -2], [-176, -20],
  ];
  treeSpots.forEach(([x, z], i) => {
    if (Math.abs(z - riverCenterZ(x)) < 10) z += 13;
    const t = i % 5 === 4 ? makePine(i) : makeTree(false, i);
    t.position.set(x, gy(x, z), z);
    scene.add(t);
    world.trees.push({ x, z, big: false });
    addCircle(x, z, 0.6);
  });
  // 山すそと町はずれの森 (綾上の丘・南の山ぎわ・外周)
  let planted = 0, tguard = 0;
  while (planted < 240 && tguard++ < 12000) {
    const x = -228 + hash(tguard, 31) * 456;
    const z = -142 + hash(tguard, 32) * 284;
    const wild = x < -95 || z < -85 || z > 95 || x > 175 || baseElev(x, z) > 3;
    if (!wild) continue;
    if (Math.abs(z - riverCenterZ(x)) < 10) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 6) continue;
    if (roadDist(x, z) < 2.4) continue;
    if (railDist(x, z) < 3.5) continue;
    if (x > -152 && x < -118 && z > -68 && z < -38) continue; // 綾上の棚田
    const t = tguard % 3 === 0 ? makePine(tguard) : makeTree(false, tguard);
    t.scale.setScalar(0.95 + hash(tguard, 33) * 0.7);
    t.position.set(x, gy(x, z), z);
    scene.add(t);
    planted++;
  }

  // ---------- 一面の草むら ----------
  const tuftGeo = new THREE.ConeGeometry(0.22, 0.55, 4);
  tuftGeo.translate(0, 0.24, 0);
  const tufts = new THREE.InstancedMesh(tuftGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), 6000);
  const tc = new THREE.Color();
  let ti = 0;
  let guard = 0;
  while (ti < 6000 && guard++ < 90000) {
    const x = -228 + hash(guard, 41) * 456;
    const z = -145 + hash(guard, 42) * 290;
    if (Math.abs(z - riverCenterZ(x)) < 7.5) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 4) continue;
    if (roadDist(x, z) < 0.7) continue;
    if (railDist(x, z) < 2.2) continue;
    if (x > 4 && x < 60 && z > 43 && z < 79) continue; // 滝宮の田
    if (x > 82 && x < 124 && z > 17 && z < 53) continue; // 陶の田
    if (x > 45 && x < 87 && z > -55 && z < -24) continue; // モールと駐車場
    if (x > -152 && x < -118 && z > -68 && z < -38) continue; // 綾上の棚田
    if (x > -55 && x < -30 && z > 47 && z < 68) continue; // 小学校の校庭
    let hit = false;
    for (const r of world.rects) if (Math.abs(x - r.x) < r.hx + 1 && Math.abs(z - r.z) < r.hz + 1) { hit = true; break; }
    if (hit) continue;
    dummy.position.set(x, gy(x, z), z);
    dummy.rotation.set(0, hash(guard, 43) * 6, 0);
    dummy.scale.setScalar(0.6 + hash(guard, 44) * 1.1);
    dummy.updateMatrix();
    tufts.setMatrixAt(ti, dummy.matrix);
    tc.setHSL(0.26 + hash(guard, 45) * 0.04, 0.55, 0.16 + hash(guard, 46) * 0.09);
    tufts.setColorAt(ti, tc);
    ti++;
  }
  tufts.count = ti;
  scene.add(tufts);

  // ---------- 道ばたの野の花 ----------
  const flowerGeo = new THREE.SphereGeometry(0.09, 6, 5);
  flowerGeo.translate(0, 0.17, 0);
  const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), 420);
  const fcols = [0xf5eed6, 0xf0d268, 0xe0a0b4, 0xdde3f0];
  let fi = 0, fguard = 0;
  while (fi < 420 && fguard++ < 30000) {
    const x = -225 + hash(fguard, 51) * 450;
    const z = -140 + hash(fguard, 52) * 280;
    const rdist = roadDist(x, z);
    if (rdist < 1.2 || rdist > 6) continue;
    if (Math.abs(z - riverCenterZ(x)) < 8) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 4) continue;
    if (railDist(x, z) < 2.4) continue;
    if (x > 4 && x < 60 && z > 43 && z < 79) continue;
    if (x > 82 && x < 124 && z > 17 && z < 53) continue;
    if (x > 45 && x < 87 && z > -55 && z < -24) continue;
    if (x > -55 && x < -30 && z > 47 && z < 68) continue; // 小学校の校庭
    let fhit = false;
    for (const r of world.rects) if (Math.abs(x - r.x) < r.hx + 1 && Math.abs(z - r.z) < r.hz + 1) { fhit = true; break; }
    if (fhit) continue;
    dummy.position.set(x, gy(x, z), z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(0.7 + hash(fguard, 53) * 0.7);
    dummy.updateMatrix();
    flowers.setMatrixAt(fi, dummy.matrix);
    tc.set(fcols[fguard % fcols.length]);
    flowers.setColorAt(fi, tc);
    fi++;
  }
  flowers.count = fi;
  scene.add(flowers);

  // ---------- 田んぼの木柵 ----------
  const fence = makeFence(50);
  fence.position.set(31.5, gy(31.5, 43.6), 43.6);
  scene.add(fence);
  const fence2 = makeFence(20);
  fence2.rotation.y = Math.PI / 2;
  fence2.position.set(3.6, gy(3.6, 55), 55);
  scene.add(fence2);
  // おばあちゃんの家の玄関さき (x>110) をふさがない長さにとどめる
  const fence3 = makeFence(26);
  fence3.position.set(96, gy(96, 16.4), 16.4);
  scene.add(fence3);

  // ---------- 遠景の山なみ ----------
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.3;
    const dist = 250 + (i % 3) * 40;
    const h = 42 + (i % 4) * 18;
    const col = new THREE.Color().setHSL(0.36 - (i % 3) * 0.02, 0.25, 0.34 + (i % 3) * 0.06);
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(64 + (i % 3) * 24, h, 9), smat(col));
    const mx = Math.cos(a) * dist, mz = Math.sin(a) * dist * 0.85;
    mtn.position.set(mx, h / 2 - 5 + ridges(mx, mz) * 0.5, mz);
    scene.add(mtn);
  }
  // 讃岐七富士: 堤山(羽床富士)・高鉢山(綾上富士)。おむすび形の山
  for (const [mx, mz, h, r] of [[-60, -165, 46, 42], [-245, -120, 52, 48]]) {
    const fuji = new THREE.Mesh(new THREE.ConeGeometry(r, h, 16), smat(new THREE.Color().setHSL(0.42, 0.24, 0.4)));
    fuji.position.set(mx, h / 2 - 3 + ridges(mx, mz) * 0.6, mz);
    scene.add(fuji);
  }
  // ---------- 里山 (歩けるエリアのはしに ちいさな山。綾川町の山がちな地形) ----------
  const satoyamaDefs = [
    // みなみがわ (カメラ正面にみえる しんりんのおく)
    [-130, -118, 24, 28], [-40, -126, 16, 20], [60, -127, 20, 24], [150, -122, 14, 18],
    // きたがわ
    [-70, 124, 18, 22], [40, 126, 22, 26], [105, 122, 14, 18],
  ];
  for (let si = 0; si < satoyamaDefs.length; si++) {
    const [sx, sz, sh, sr] = satoyamaDefs[si];
    const scol = new THREE.Color().setHSL(0.33 + hash(si, 91) * 0.05, 0.3, 0.3 + hash(si, 92) * 0.08);
    const hill = new THREE.Mesh(new THREE.ConeGeometry(sr, sh, 10), smat(scol));
    hill.position.set(sx, gy(sx, sz) + sh / 2 - 0.6, sz);
    scene.add(hill);
    addCircle(sx, sz, sr * 0.75);
    // 北がわの山はプレイヤーとカメラのあいだに入るので半透明化を登録
    if (sz > 0) registerOccluder(hill, sx, sz, sr + 0.5, gy(sx, sz) + sh * 0.5);
    for (let k = 0; k < 5; k++) {
      const a = hash(si, k) * Math.PI * 2;
      const d = sr * (0.85 + hash(k, si + 40) * 0.35);
      const hx = sx + Math.cos(a) * d, hz = sz + Math.sin(a) * d;
      if (Math.abs(hx) > 228 || Math.abs(hz) > 145) continue;
      const t = makePine(si * 7 + k);
      t.position.set(hx, gy(hx, hz), hz);
      scene.add(t);
      addCircle(hx, hz, 0.5);
    }
  }
  // ---------- 遠景の第2層 (もやのむこうの大きな山なみ。カメラがむく -z がわを厚く) ----------
  const far2Defs = [
    [-300, -270, 85, 130], [-190, -320, 68, 110], [-80, -345, 92, 140], [30, -350, 72, 115],
    [140, -330, 88, 135], [250, -290, 64, 105], [335, -220, 74, 115],
    [-355, -60, 78, 120], [355, -30, 66, 105],
  ];
  for (let i = 0; i < far2Defs.length; i++) {
    const [mx, mz, h, r] = far2Defs[i];
    const mcol = new THREE.Color().setHSL(0.4, 0.22, 0.3 + (i % 3) * 0.05);
    const mtn = new THREE.Mesh(new THREE.ConeGeometry(r, h, 10), smat(mcol));
    mtn.position.set(mx, h / 2 - 6, mz);
    scene.add(mtn);
  }

  // ---------- まつりの飾り (滝宮天満宮) ----------
  const festival = new THREE.Group();
  const yataiColors = [0xd8433b, 0x3b6ed8, 0xd8a23b];
  [[-7, -46], [0, -44], [7, -46]].forEach(([x, z], i) => {
    const y = makeYatai(yataiColors[i]);
    y.position.set(x, gy(x, z), z);
    y.rotation.y = Math.PI;
    festival.add(y);
    world.festivalRects = world.festivalRects || [];
    world.festivalRects.push({ x, z, hx: 1.5, hz: 0.9 });
  });
  for (let i = 0; i < 10; i++) {
    const cx = -9 + i * 2;
    const c2 = makeChochin();
    c2.position.set(cx, gy(cx, -50) + 3 + Math.sin(i * 1.3) * 0.15, -50);
    festival.add(c2);
    c2.traverse((o) => { if (o.userData && o.userData.lantern) world.lanternMats.push(o.material); });
  }
  for (let i = 0; i < 8; i++) {
    const cx = 2.5 - 2 + (i % 2) * 4, cz = -46 + i * 1.2 - 4;
    const c2 = makeChochin();
    c2.position.set(cx, gy(cx, cz) + 2.6, cz);
    festival.add(c2);
    c2.traverse((o) => { if (o.userData && o.userData.lantern) world.lanternMats.push(o.material); });
  }
  // 滝宮の念仏踊 (国指定重要無形民俗文化財。8/25のまつりで 輪になっておどる)
  const odori = new THREE.Group();
  const odoriDancers = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const p = makePerson({ body: i % 2 ? 0x3b5ed8 : 0xe8e2d0, hat: 0xc8a84e, scale: 0.95 }).group;
    p.position.set(Math.cos(a) * 3.2, 0, Math.sin(a) * 3.2);
    p.rotation.y = Math.atan2(-Math.cos(a), -Math.sin(a)); // 輪のまんなかを むく
    odori.add(p);
    odoriDancers.push(p);
  }
  const gechi = makePerson({ body: 0xc83a32, hat: 0x2a2018 }).group; // まんなかで うちわを ふる下知(げち)役
  odori.add(gechi);
  const taiko = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.6, 10), smat(0xa04a28));
  taiko.position.set(1.3, 0.62, 0);
  taiko.rotation.z = Math.PI / 2;
  odori.add(taiko);
  odori.position.set(0, gy(0, -55), -55);
  festival.add(odori);
  world.odoriGroup = odori;
  world.odoriDancers = odoriDancers;

  festival.visible = false;
  scene.add(festival);
  world.festivalGroup = festival;

  // ---------- 王冠のおとしもの の目じるし (日がわりの場所で きらっと ひかる) ----------
  const capMark = new THREE.Group();
  capMark.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.05, 10), smat(0xf0c040, { emissive: 0x8a6a1a }))));
  const capGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.22, depthWrite: false }),
  );
  capGlow.position.y = 0.1;
  capMark.add(capGlow);
  capMark.visible = false;
  scene.add(capMark);
  world.capMarker = capMark;

  // ---------- あやがわ小学校 (旧金毘羅街道のさき。8/9 は校庭で夏まつり) ----------
  // カメラは -z を向くので、校しゃは校庭の北 (z小) に置き、正面を +z に向ける
  const school = makeSchool();
  school.position.set(-42, gy(-42, 52), 52);
  scene.add(school);
  addRect(-42, 52, 8.9, 3.0);
  registerOccluder(school, -42, 52, 9.5, gy(-42, 52) + 6.5);
  // 校庭 (踏みかためた土のグラウンド)
  scene.add(strip(densify([[-51, 60], [-33.5, 60]], 3), 13, 0.04, 0xcbb287));
  // 鉄棒
  const tetsubo = new THREE.Group();
  for (const tx of [-1.1, 1.1]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.15, 6), smat(0x3a6ea5));
    post.position.set(tx, 0.55, 0);
    tetsubo.add(post);
  }
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 6), smat(0xc8ccd0));
  bar.rotation.z = Math.PI / 2;
  bar.position.y = 1.1;
  tetsubo.add(bar);
  tetsubo.position.set(-35.5, gy(-35.5, 64.5), 64.5);
  scene.add(tetsubo);
  addRect(-35.5, 64.5, 1.3, 0.2);
  // 百葉箱
  const hyakuyo = new THREE.Group();
  const hyBox = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), smat(0xf2f2ee));
  hyBox.position.y = 1.0;
  hyBox.castShadow = true;
  hyakuyo.add(hyBox);
  for (const [lx, lz] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 5), smat(0xf2f2ee));
    leg.position.set(lx, 0.35, lz);
    hyakuyo.add(leg);
  }
  hyakuyo.position.set(-49.5, gy(-49.5, 56.5), 56.5);
  scene.add(hyakuyo);
  addCircle(-49.5, 56.5, 0.6);
  // 校門 (道のつきあたり)
  for (const gz of [58.2, 61.8]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.7, 0.6), smat(0x9a948a));
    pillar.position.set(-51.3, gy(-51.3, gz) + 0.85, gz);
    pillar.castShadow = true;
    scene.add(pillar);
    addCircle(-51.3, gz, 0.5);
  }
  // 校庭のサクラの木 (2がっきには 葉ざくら)
  for (const [px, pz] of [[-31, 54], [-53.5, 63.5]]) {
    const t = makeTree(false, px + pz);
    t.position.set(px, gy(px, pz), pz);
    scene.add(t);
    world.trees.push({ x: px, z: pz, big: false });
    addCircle(px, pz, 0.6);
  }

  // ---------- 学校の夏まつりの飾り (8/9 だけ校庭にあらわれる) ----------
  const gakusai = new THREE.Group();
  world.gakusaiRects = [];
  [[-47, 61.5], [-42, 62.5], [-37, 61.5]].forEach(([x, z], i) => {
    const y = makeYatai(yataiColors[(i + 1) % 3]);
    y.position.set(x, gy(x, z), z);
    gakusai.add(y);
    world.gakusaiRects.push({ x, z, hx: 1.5, hz: 0.9 });
  });
  for (let i = 0; i < 8; i++) {
    const cx = -49 + i * 2;
    const c3 = makeChochin();
    c3.position.set(cx, gy(cx, 58.5) + 3 + Math.sin(i * 1.7) * 0.15, 58.5);
    gakusai.add(c3);
    c3.traverse((o) => { if (o.userData && o.userData.lantern) world.lanternMats.push(o.material); });
  }
  gakusai.visible = false;
  scene.add(gakusai);
  world.gakusaiGroup = gakusai;

  // ---------- 道しるべ (まよわないための子ども看板) ----------
  for (const [sx, sz, rot, entries] of [
    // 橋の北詰の土手のうえ (川の中に立たないよう岸から離す): 橋のむこうへ滝宮 / 東へ陶
    [16.0, -11.8, 0.1, [{ text: 'たきのみや', side: -1 }, { text: 'すえ・モール', side: 1 }]],
    // 橋の南詰: 南へ天満宮 / 東へミナんち
    [17.2, 27.5, 0, [{ text: 'てんまんぐう', side: -1 }, { text: 'ミナんち', side: 1 }]],
    // 商店通り東端
    [-16, 27.2, 0, [{ text: 'しょうてんがい', side: -1 }, { text: 'はし・かわら', side: 1 }]],
    // 陶の分かれ道: 池と駅
    [123.5, 4.8, -0.15, [{ text: 'すえの えき', side: -1 }, { text: 'ほうじょういけ', side: 1 }]],
    // 池の分かれ道: 十瓶山へ
    [131.5, 41.5, 0.2, [{ text: 'とかめやま', side: 1 }]],
    // 綾上への道: とおいよ
    [-92, 13, 0.5, [{ text: 'あやかみ (とおい)', side: -1 }]],
    // 旧金毘羅街道の分かれ道: 小学校へ
    [-68, 56.5, 0.3, [{ text: 'しょうがっこう', side: 1 }]],
  ]) {
    const sign = makeMichishirube(entries);
    sign.position.set(sx, gy(sx, sz), sz);
    sign.rotation.y = rot;
    scene.add(sign);
    addCircle(sx, sz, 0.35);
  }

  // ---------- 河原の石原 (橋のたもとの水あそび場) ----------
  // ひらたい石がころがる さんかくす。みずきりの いしは ここでひろう
  for (let i = 0; i < 26; i++) {
    const rx = 9 + hash(i, 71) * 12;
    const rc2 = riverCenterZ(rx);
    const rz = rc2 + RIVER_HALF + 0.8 + hash(i, 72) * 3.4;
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.16 + hash(i, 73) * 0.22, 0), mat(hash(i, 74) < 0.5 ? 0x9a948a : 0x8a857c));
    st.scale.y = 0.4;
    st.rotation.y = hash(i, 75) * 3;
    st.position.set(rx, gy(rx, rz) + 0.05, rz);
    st.castShadow = true;
    scene.add(st);
  }
  // すこし大きな岩 (すわれる)
  for (const [rx, rzOff, rs] of [[11, 1.4, 0.55], [16.5, 2.6, 0.7], [24.5, 1.8, 0.5]]) {
    const rz = riverCenterZ(rx) + RIVER_HALF + rzOff;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rs, 0), mat(0x8d887e));
    rock.scale.y = 0.62;
    rock.position.set(rx, gy(rx, rz) + rs * 0.25, rz);
    rock.castShadow = true;
    scene.add(rock);
    addCircle(rx, rz, rs * 0.8);
  }

  // ---------- 飛び石 (x=48。ぴょんぴょん わたれる近道) ----------
  for (let i = 0; i < 7; i++) {
    const rc3 = riverCenterZ(TOBIISHI_X);
    const tz = rc3 - RIVER_HALF + 1 + i * ((RIVER_HALF * 2 - 2) / 6);
    const tx = TOBIISHI_X + (hash(i, 81) - 0.5) * 0.7;
    const st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.62 + hash(i, 82) * 0.15, 0), mat(0x93908a));
    st.scale.y = 0.45;
    st.rotation.y = hash(i, 83) * 3;
    st.position.set(tx, waterLevel(tx) + 0.12, tz);
    st.castShadow = true;
    scene.add(st);
  }

  // ---------- 竹やぶのひみつきち (ケンタたちの basecamp) ----------
  const hideout = makeHideout();
  hideout.position.set(-15, gy(-15, -78), -78);
  hideout.rotation.y = 0.5;
  scene.add(hideout);
  registerOccluder(hideout, -15, -78, 3.4, gy(-15, -78) + 2.2);
  addRect(-15.9, -78.8, 1.4, 0.5); // うしろの壁だけ当たり判定 (前はあいてる)
  // きちを かこむ竹 (ひみつ感)
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const bx = -15 + Math.cos(a) * (5 + hash(i, 91) * 2.5);
    const bz = -78 + Math.sin(a) * (4.5 + hash(i, 92) * 2);
    if (bz > -74.5 && bx > -17 && bx < -12) continue; // 入口はあけておく
    const b = makeBamboo(i + 40);
    b.position.set(bx, gy(bx, bz), bz);
    scene.add(b);
    addCircle(bx, bz, 0.25);
  }

  // ---------- 陶の山すその墓地 (お盆に おはかまいり) ----------
  for (let i = 0; i < 5; i++) {
    const gxp = 140 + (i % 3) * 1.7;
    const gzp = 19.5 + Math.floor(i / 3) * 1.9;
    const grave = makeGrave(i);
    grave.position.set(gxp, gy(gxp, gzp), gzp);
    grave.rotation.y = -0.1 + hash(i, 95) * 0.2;
    scene.add(grave);
    addCircle(gxp, gzp, 0.5);
  }
  const graveWall = makeStoneWall(7);
  graveWall.position.set(141.7, gy(141.7, 23.4), 23.4);
  scene.add(graveWall);
  addRect(141.7, 23.4, 3.5, 0.4);
  const gravePine = makePine(77);
  gravePine.position.set(137.5, gy(137.5, 21.5), 21.5);
  scene.add(gravePine);
  world.trees.push({ x: 137.5, z: 21.5, big: false });
  addCircle(137.5, 21.5, 0.5);

  // ---------- 十瓶山の見晴らし台 (山道のさき。夕日の名所) ----------
  const lookout = makeLookout();
  const LOOKOUT = { x: 157, z: 59.5 };
  lookout.position.set(LOOKOUT.x, gy(LOOKOUT.x, LOOKOUT.z), LOOKOUT.z);
  lookout.rotation.y = Math.PI; // 柵を まちのほう (南西) に向ける
  scene.add(lookout);
  world.lookout = LOOKOUT;
  addRect(LOOKOUT.x, LOOKOUT.z + 1.5, 2.3, 0.2); // 柵
  // 山道ぞいの立ち木
  for (const [px, pz] of [[153, 46], [160, 50], [154, 56], [161, 62]]) {
    const t = makePine(px + pz);
    t.position.set(px, gy(px, pz), pz);
    scene.add(t);
    world.trees.push({ x: px, z: pz, big: false });
    addCircle(px, pz, 0.5);
  }

  // ---------- 用水路 (田んぼのよこ。ザリガニのすみか) ----------
  // 滝宮の田の西のふちに、細い水路と木のふた
  const canalPts = densify([[4, 44], [4, 76]], 4);
  const canal = strip(canalPts, 1.1, 0.05, 0x5a7a8a);
  canal.material.transparent = true;
  canal.material.opacity = 0.9;
  scene.add(canal);
  for (const cz of [50, 62, 74]) {
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 1.1), smat(0x8a6a44));
    lid.position.set(4, gy(4, cz) + 0.12, cz);
    scene.add(lid);
  }
  world.canal = { x: 4, z1: 44, z2: 76 };

  // ---------- サブエリア (家のなか・ことでん車内・高松) ----------
  world.interior = buildInterior(scene);
  world.interior2f = buildUpstairs(scene);
  world.trainRide = buildTrainRide(scene);
  world.takamatsu = buildTakamatsu(scene);
  world.sub = null; // 現在いるサブエリア (null = 綾川の外の世界)
  for (const oc of world.takamatsu.occluders) world.occluders.push(oc);

  // ---------- 当たり判定・クエリ ----------
  world.isBlocked = (x, z, festivalOn = false) => {
    if (world.indoor) {
      const b = world.sub.bounds;
      if (x < b.minX || x > b.maxX || z < b.minZ || z > b.maxZ) return true;
      for (const r of world.sub.rects) if (Math.abs(x - r.x) < r.hx + 0.35 && Math.abs(z - r.z) < r.hz + 0.35) return true;
      return false;
    }
    if (Math.abs(x) > 232 || Math.abs(z) > 148) return true;
    const rc = riverCenterZ(x);
    const dR = Math.abs(z - rc);
    if (dR < RIVER_HALF + 0.5 && !(x > BRIDGE_X - 2.4 && x < BRIDGE_X + 2.4) && !(x > BRIDGE2_X - 2.4 && x < BRIDGE2_X + 2.4) && !(x > BRIDGE3_X - 2.4 && x < BRIDGE3_X + 2.4) && !(x > TOBIISHI_X - 1.2 && x < TOBIISHI_X + 1.2)) return true;
    if (dR < 13 && railDist(x, z) < 1.6) return true; // 川ちかくの線路の盛り土
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.5) return true;
    for (const cc of world.circles) if (Math.hypot(x - cc.x, z - cc.z) < cc.r + 0.45) return true;
    for (const r of world.rects) if (Math.abs(x - r.x) < r.hx + 0.4 && Math.abs(z - r.z) < r.hz + 0.4) return true;
    if (festivalOn && world.activeFestivalRects) {
      for (const r of world.activeFestivalRects) if (Math.abs(x - r.x) < r.hx + 0.4 && Math.abs(z - r.z) < r.hz + 0.4) return true;
    }
    return false;
  };

  // カメラと主人公のあいだに割りこんだ建物をすっと半透明にする
  world.updateOcclusion = (p, cam, dt) => {
    for (const oc of world.occluders) {
      let want = 1;
      if ((!world.indoor || (world.sub && world.sub.outdoor)) && Math.abs(p.x - oc.x) < 45 && Math.abs(p.z - oc.z) < 45) {
        const dx = cam.x - p.x, dz = cam.z - p.z;
        const t = Math.max(0, Math.min(1, ((oc.x - p.x) * dx + (oc.z - p.z) * dz) / (dx * dx + dz * dz || 1)));
        const dist = Math.hypot(oc.x - (p.x + dx * t), oc.z - (p.z + dz * t));
        if (dist < oc.r) {
          const losY = p.y + 2.4 + (cam.y - p.y - 2.4) * t;
          if (losY < oc.topY) want = 0.24;
        }
      }
      if (want === 1 && oc.fade === 1) continue;
      oc.fade += (want - oc.fade) * Math.min(1, dt * 7);
      if (want === 1 && oc.fade > 0.99) oc.fade = 1;
      for (const mm of oc.mats) {
        mm.opacity = oc.fade;
        mm.transparent = oc.fade < 0.995;
      }
    }
  };

  world.waterZone = (x, z) => {
    if (world.indoor) return null;
    const rc = riverCenterZ(x);
    const dRiver = Math.abs(z - rc);
    if (dRiver >= RIVER_HALF + 0.4 && dRiver < RIVER_HALF + 4.5 && Math.abs(x) < 230) {
      if (!(x > BRIDGE_X - 3 && x < BRIDGE_X + 3) && !(x > BRIDGE2_X - 3 && x < BRIDGE2_X + 3) && !(x > BRIDGE3_X - 3 && x < BRIDGE3_X + 3)) return { zone: 'river', spot: new THREE.Vector3(x, waterLevel(x) + 0.06, rc) };
    }
    const dPond = Math.hypot(x - POND.x, z - POND.z);
    if (dPond >= POND.r + 0.4 && dPond < POND.r + 4) {
      const t = 0.55;
      return { zone: 'pond', spot: new THREE.Vector3(POND.x + (x - POND.x) * t, POND_Y + 0.06, POND.z + (z - POND.z) * t) };
    }
    return null;
  };

  return world;
}
