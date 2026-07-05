import * as THREE from 'three';
import { smat, mat, makeSignBoard, makeTrain, makePerson, makeCar, makeVending, makeTree } from './builders.js';

// 高松・瓦町駅前。本編マップから遠く離れた場所に置く独立エリア
export const TK = { x: 660, z: 0 };

export function buildTakamatsu(scene) {
  const g = new THREE.Group();
  g.position.set(TK.x, 0, TK.z);
  const md = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, y, z);
    g.add(mm);
    return mm;
  };
  const rects = [];
  const addRect = (x, z, hx, hz) => rects.push({ x: TK.x + x, z: TK.z + z, hx, hz });
  const occluders = [];
  const addOccluder = (obj, x, z, r, topY) => {
    const mats = new Set();
    obj.traverse((o) => { if (o.isMesh) mats.add(o.material); });
    occluders.push({ x: TK.x + x, z: TK.z + z, r, topY, mats: [...mats], fade: 1 });
  };

  // 地面 (アスファルトと歩道)
  md(new THREE.PlaneGeometry(240, 240), mat(0xa8a49a), 0, -0.02, 0).rotation.x = -Math.PI / 2;
  // 車道 (東西) と横断歩道
  md(new THREE.BoxGeometry(140, 0.04, 7), smat(0x64615a), 0, 0, 6);
  for (let i = -8; i <= 8; i++) md(new THREE.BoxGeometry(2, 0.05, 0.35), smat(0xe8e6dd), i * 8 + 2, 0.01, 6);
  for (let i = 0; i < 6; i++) md(new THREE.BoxGeometry(0.55, 0.05, 6.4), smat(0xe8e6dd), -3 + i * 1.1, 0.02, 6);

  // ---- 瓦町駅ビル ----
  const stG = new THREE.Group();
  g.add(stG);
  const sm = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, y, z);
    stG.add(mm);
    return mm;
  };
  sm(new THREE.BoxGeometry(26, 22, 14), smat(0xd8d2c4), 0, 11, -26);
  for (let f = 1; f < 7; f++) sm(new THREE.BoxGeometry(24.5, 1.1, 14.2), smat(0x5a6a78, { emissive: 0x22303a, emissiveIntensity: 0.25 }), 0, 2.4 + f * 2.9, -26);
  sm(new THREE.BoxGeometry(10, 3.6, 0.4), smat(0x2c3640, { emissive: 0x18242e, emissiveIntensity: 0.4 }), 0, 1.8, -18.9); // 入口ガラス
  sm(new THREE.BoxGeometry(12, 0.35, 3), smat(0xc4bfae), 0, 3.9, -17.6); // ひさし
  const sign1 = makeSignBoard('かわらまちえき', { bg: '#f5f2ea', fg: '#334455', w: 8, h: 1.4 });
  sign1.position.set(0, 4.9, -18.85);
  stG.add(sign1);
  const sign2 = makeSignBoard('コトデン かわらまち ビル', { bg: '#33475a', fg: '#ffffff', w: 15, h: 1.8 });
  sign2.position.set(0, 20.5, -18.9);
  stG.add(sign2);
  addRect(0, -26, 13.3, 7.3);

  // 駅よこのホームに ことでんが停車中
  const platform = md(new THREE.BoxGeometry(17, 0.8, 3), mat(0xb2ab9e), 25, 0.4, -29.5);
  platform.castShadow = false;
  const parked = makeTrain();
  parked.position.set(17, 0, -33);
  g.add(parked);
  addRect(25, -30.5, 10, 4.5);

  // ---- 商店街アーケード (ときわがいふう) ----
  const ark = new THREE.Group();
  g.add(ark);
  const am = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, y, z);
    ark.add(mm);
    return mm;
  };
  // 屋根 (カメラより高いので視界をふさがない)
  am(new THREE.BoxGeometry(8.6, 0.18, 42), smat(0xdfe4e8, { transparent: true, opacity: 0.85 }), -20, 8.8, 10.5);
  am(new THREE.BoxGeometry(9, 0.5, 1), smat(0x4a7a8a), -20, 8.6, 31.2);
  const arkSign = makeSignBoard('かわらまち しょうてんがい', { bg: '#3a6a7a', fg: '#ffffff', w: 8.6, h: 1.3 });
  arkSign.position.set(-20, 7.6, 31.3);
  ark.add(arkSign);
  for (let z = -8; z <= 30; z += 7.6) {
    for (const cx of [-23.9, -16.1]) {
      am(new THREE.CylinderGeometry(0.12, 0.14, 8.8, 6), smat(0x8a8e92), cx, 4.4, z);
      addRect(cx, z, 0.3, 0.3);
    }
  }
  // 店舗 (2列。まちなかの雑居ふう)
  const shops = [
    [-27, -5, 'ゲームセンター', '#c94a6a'], [-27, 3, 'ほんや', '#3a6a4a'], [-27, 11, 'おみやげ', '#c9873a'],
    [-27, 19, 'きっさ てんまど', '#6a5a4a'], [-27, 27, 'レコード', '#4a5a8a'],
    [-13, -1, 'ふくや', '#8a4a7a'], [-13, 7, 'くすり', '#3a8a8a'], [-13, 15, 'パンや', '#b8763a'], [-13, 23, 'カメラ', '#555560'],
  ];
  for (const [sx, sz, label, col] of shops) {
    const body = am(new THREE.BoxGeometry(5.6, 4.2, 7), smat(0xd8d0bf), sx, 2.1, sz);
    body.castShadow = true;
    am(new THREE.BoxGeometry(5.8, 0.5, 7.2), smat(0x8a8478), sx, 4.45, sz);
    const front = sx < -20 ? sx + 2.85 : sx - 2.85;
    // 店さき (ガラス) と ひさし
    const win = am(new THREE.BoxGeometry(0.12, 2.2, 5.4), smat(0x35424e, { emissive: 0x1a2630, emissiveIntensity: 0.35 }), front, 1.3, sz);
    win.castShadow = false;
    am(new THREE.BoxGeometry(0.9, 0.14, 5.8), smat(new THREE.Color(col)), front + (sx < -20 ? 0.45 : -0.45), 2.7, sz);
    // 通路にさげた看板
    const sb = makeSignBoard(label, { bg: '#fdfaf2', fg: col, w: 3.2, h: 0.85 });
    sb.position.set(sx < -20 ? -22.4 : -17.6, 3.6, sz + 0.2);
    ark.add(sb);
    addRect(sx, sz, 2.9, 3.6);
  }
  addOccluder(ark, -20, 11, 13, 4.8);

  // ---- デパート ----
  const dp = new THREE.Group();
  g.add(dp);
  const dm = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, y, z);
    dp.add(mm);
    return mm;
  };
  dm(new THREE.BoxGeometry(20, 18, 14), smat(0xcfc8bb), 24, 9, 17);
  for (let f = 1; f < 6; f++) dm(new THREE.BoxGeometry(20.2, 0.9, 12.6), smat(0x66707a, { emissive: 0x252e36, emissiveIntensity: 0.25 }), 24, f * 3, 17);
  dm(new THREE.BoxGeometry(0.4, 3.4, 8), smat(0x303a44, { emissive: 0x1a242c, emissiveIntensity: 0.4 }), 13.9, 1.7, 17); // 入口
  dm(new THREE.BoxGeometry(2.6, 0.3, 9), smat(0xbfb8a8), 13, 3.7, 17);
  const dpSign = makeSignBoard('たかまつ デパート', { bg: '#a83a4a', fg: '#ffffff', w: 12, h: 1.9 });
  dpSign.position.set(24, 17.2, 9.9);
  dp.add(dpSign);
  const dpSign2 = makeSignBoard('おくじょう ゆうえんち', { bg: '#f5f2ea', fg: '#a83a4a', w: 6, h: 1 });
  dpSign2.position.set(24, 14.6, 9.9);
  dp.add(dpSign2);
  addRect(24, 17, 10.3, 7.3);
  addOccluder(dp, 24, 17, 12.5, 18);

  // 駅前ひろば (植えこみ・じはんき・ひと)
  for (const [px, pz] of [[-8, -12], [8, -12]]) {
    md(new THREE.CylinderGeometry(1.6, 1.7, 0.55, 10), mat(0x9a938a), px, 0.27, pz);
    const t = makeTree(false, px + 9);
    t.position.set(px, 0.3, pz);
    t.scale.setScalar(0.7);
    g.add(t);
    addRect(px, pz, 1.8, 1.8);
  }
  const vend = makeVending();
  vend.position.set(12.5, 0, -13);
  vend.rotation.y = Math.PI;
  g.add(vend);
  addRect(12.5, -13, 0.7, 0.6);

  // 車 (としの往来)
  for (const [cx, cz, col, dirY] of [[-10, 4.8, 0xc94a3a, 0], [12, 7.4, 0x4a6a9a, Math.PI], [30, 4.8, 0xd8d4c8, 0]]) {
    const car = makeCar(col);
    car.position.set(cx, 0, cz);
    car.rotation.y = Math.PI / 2 + dirY;
    g.add(car);
    addRect(cx, cz, 2.1, 1.1);
  }
  // しんごう
  for (const [lx, lz] of [[-5.5, 1.8], [4.5, 10.2]]) {
    md(new THREE.CylinderGeometry(0.08, 0.1, 4.6, 6), smat(0x6b6e72), lx, 2.3, lz);
    md(new THREE.BoxGeometry(1.3, 0.45, 0.3), smat(0x2a2e33), lx + 0.4, 4.4, lz);
    md(new THREE.SphereGeometry(0.14, 8, 6), smat(0x3ac96a, { emissive: 0x1a7a3a, emissiveIntensity: 0.8 }), lx + 0.85, 4.4, lz + 0.17);
    addRect(lx, lz, 0.25, 0.25);
  }

  // まちのひとたち
  const folks = [
    [-4, -8, 0x7a8a9a, 2.6], [3, -11, 0xa06a5a, -0.4], [-20, 2, 0x5a7a5a, 0.6],
    [-20, 16, 0x8a5a7a, 3.4], [15, 1, 0x4a5a8a, -1.8], [-18.5, 24, 0xc9a05a, 1.2],
  ];
  for (const [px, pz, col, rot] of folks) {
    const p = makePerson({ body: col, head: 0xf0c8a0, hair: [0x2a1d12, 0x3a3a3a, 0x6b5030][Math.floor((px + pz + 60) % 3)], scale: 0.95 });
    p.group.position.set(px, 0, pz);
    p.group.rotation.y = rot;
    g.add(p.group);
    addRect(px, pz, 0.35, 0.35);
  }

  scene.add(g);

  return {
    group: g,
    floorY: 0,
    outdoor: true,
    entry: { x: TK.x, z: TK.z - 14.5 },
    bounds: { minX: TK.x - 33, maxX: TK.x + 33, minZ: TK.z - 16.2, maxZ: TK.z + 31.5 },
    rects,
    occluders,
    pts: {
      station: { x: TK.x, z: TK.z - 15.6 },
      depato: { x: TK.x + 12.5, z: TK.z + 17 },
      gamecen: { x: TK.x - 23.3, z: TK.z - 5 },
      honya: { x: TK.x - 23.3, z: TK.z + 3 },
      omiyage: { x: TK.x - 23.3, z: TK.z + 11 },
      vending: { x: TK.x + 12.5, z: TK.z - 14 },
    },
  };
}
