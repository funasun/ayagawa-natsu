import * as THREE from 'three';
import { smat, mat, makeHouse, makeTree, makePerson } from './builders.js';

// ことでんの車内。本編マップから遠く離れた場所に置き、車窓の景色を流して走行を表現する
const TR = { x: 660, z: 420 };
const SPEED = 15; // 車窓の流れる速さ (≒ことでんの体感速度)

export function buildTrainRide(scene) {
  const g = new THREE.Group();
  g.position.set(TR.x, 0, TR.z);
  const md = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, y, z);
    g.add(mm);
    return mm;
  };

  const FLOOR = 0.98;
  const yellow = smat(0xdfa53a); // 琴平線カラー
  const cream = smat(0xf0ece0);
  const steel = smat(0xb8b4a8);

  // 床と外板 (足まわりは黄色の帯)
  md(new THREE.BoxGeometry(16, 0.16, 2.9), smat(0x8a8478), 0, FLOOR - 0.08, 0);
  md(new THREE.BoxGeometry(16, 0.95, 3.0), yellow, 0, 0.5, 0);
  for (const wx of [-5.6, -2.2, 2.2, 5.6]) {
    const wh = md(new THREE.CylinderGeometry(0.34, 0.34, 2.4, 8), smat(0x333333), wx, 0.34, 0);
    wh.rotation.x = Math.PI / 2;
  }

  // 奥側 (-z) の壁: 窓下・窓柱・幕板
  md(new THREE.BoxGeometry(16, 0.86, 0.1), cream, 0, FLOOR + 0.43, -1.42);
  md(new THREE.BoxGeometry(16, 0.42, 0.1), cream, 0, FLOOR + 2.11, -1.42);
  for (let i = -4; i <= 4; i++) {
    md(new THREE.BoxGeometry(0.14, 0.9, 0.1), cream, i * 1.9, FLOOR + 1.31, -1.42);
  }
  // 両端の壁と運転台のドア
  for (const ex of [-8, 8]) md(new THREE.BoxGeometry(0.14, 2.35, 2.9), cream, ex, FLOOR + 1.17, 0);
  md(new THREE.BoxGeometry(0.1, 1.8, 0.9), smat(0x7a6a52), -7.9, FLOOR + 0.9, 0);

  // 天井 (奥6割だけ張って、手前はカメラ用に開ける)
  md(new THREE.BoxGeometry(16, 0.12, 1.7), cream, 0, FLOOR + 2.38, -0.6);
  // 手前側 (+z) は腰までのパネルと立ち棒だけ (舞台セットふう)
  md(new THREE.BoxGeometry(16, 0.5, 0.08), cream, 0, FLOOR + 0.55, 1.42);
  for (const px of [-4.8, 0, 4.8]) {
    md(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 6), steel, px, FLOOR + 1.15, 0.7);
  }

  // ロングシート (奥側) と吊り革
  md(new THREE.BoxGeometry(13, 0.14, 0.6), smat(0x3f6a52), 0, FLOOR + 0.42, -1.05);
  md(new THREE.BoxGeometry(13, 0.5, 0.1), smat(0x4a7a5e), 0, FLOOR + 0.85, -1.33);
  const rail = md(new THREE.CylinderGeometry(0.025, 0.025, 14, 6), steel, 0, FLOOR + 2.05, -0.45);
  rail.rotation.z = Math.PI / 2;
  const straps = [];
  for (let i = -6; i <= 6; i++) {
    const st = new THREE.Group();
    st.position.set(i * 1.05, FLOOR + 2.05, -0.45);
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.3, 0.02), smat(0xe8e4d8));
    band.position.y = -0.15;
    st.add(band);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.018, 5, 10), smat(0xf5f2ea));
    ring.position.y = -0.36;
    st.add(ring);
    g.add(st);
    straps.push(st);
  }

  // すわっている乗客
  const pax = [];
  for (const [px, bc] of [[-4.5, 0x7a8a9a], [2.8, 0xa06a5a]]) {
    const p = makePerson({ body: bc, head: 0xf0c8a0, hair: 0x3a2a1a, scale: 0.9 });
    p.group.position.set(px, FLOOR - 0.35, -1.02); // 座面に腰かけている風に沈める
    p.parts.legL.rotation.x = -1.4;
    p.parts.legR.rotation.x = -1.4;
    g.add(p.group);
    pax.push(p);
  }

  // ---- 車窓のせかい (地面・線路・流れる景色) ----
  md(new THREE.PlaneGeometry(340, 200), mat(0x7d9a5a), 0, -0.03, 0).rotation.x = -Math.PI / 2;
  for (const rz of [-0.8, 0.8]) {
    md(new THREE.BoxGeometry(340, 0.08, 0.12), smat(0x6a675e), 0, 0.06, rz);
  }
  const gravel = md(new THREE.BoxGeometry(340, 0.06, 3.4), mat(0x8d8474), 0, 0.02, 0);
  gravel.position.y = 0.01;

  // 流れる景色: 枕木・電柱・家・木・田んぼ (遠景の山はゆっくり=パララックス)
  const scroll = new THREE.Group();
  const far = new THREE.Group();
  g.add(scroll, far);
  const scrollItems = [];
  const addScroll = (obj, x, z, grp = scroll) => {
    obj.position.set(x, 0, z);
    grp.add(obj);
    scrollItems.push({ obj, far: grp === far });
  };
  const W = 320; // ラップ幅
  for (let x = -W / 2; x < W / 2; x += 1.4) {
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.05, 2.2), smat(0x4a4038));
    addScroll(tie, x, 0);
  }
  for (let x = -W / 2; x < W / 2; x += 16) {
    const pole = new THREE.Group();
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 7, 6), smat(0x6b6458));
    post.position.y = 3.5;
    pole.add(post);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.6), smat(0x5a5348));
    arm.position.y = 6.4;
    pole.add(arm);
    addScroll(pole, x + 3, -3.4);
  }
  // 田んぼと家と木 (両側に)
  let seed = 3;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let x = -W / 2; x < W / 2; x += 22) {
    for (const side of [-1, 1]) {
      const r = rnd();
      if (r < 0.42) {
        const paddy = new THREE.Mesh(new THREE.BoxGeometry(16, 0.1, 9), mat(0x5e8a3e));
        addScroll(paddy, x + rnd() * 8, side * (9 + rnd() * 8));
      } else if (r < 0.72) {
        const h = makeHouse({ w: 5.5 + rnd() * 2, d: 4.2, h: 2.6, roofC: ['#5f5346', '#6b4438', '#4e5a4e'][Math.floor(rnd() * 3)] });
        h.rotation.y = rnd() * Math.PI;
        addScroll(h, x + rnd() * 8, side * (10 + rnd() * 10));
      } else {
        addScroll(makeTree(rnd() < 0.3, Math.floor(rnd() * 30)), x + rnd() * 8, side * (7 + rnd() * 12));
      }
    }
  }
  // 遠景の山なみ (讃岐富士っぽいおむすび山も)
  for (let x = -W / 2; x < W / 2; x += 40) {
    const hill = new THREE.Mesh(
      new THREE.ConeGeometry(22 + rnd() * 14, 14 + rnd() * 10, 8),
      mat(new THREE.Color().setHSL(0.36, 0.25, 0.34)),
    );
    addScroll(hill, x + rnd() * 20, -(60 + rnd() * 20), far);
  }

  scene.add(g);

  let t = 0;
  return {
    group: g,
    floorY: FLOOR,
    entry: { x: TR.x + 0.5, z: TR.z + 0.4 },
    bounds: { minX: TR.x - 7.4, maxX: TR.x + 7.4, minZ: TR.z - 0.55, maxZ: TR.z + 0.9 },
    rects: [
      { x: TR.x - 4.8, z: TR.z + 0.7, hx: 0.12, hz: 0.12 },
      { x: TR.x, z: TR.z + 0.7, hx: 0.12, hz: 0.12 },
      { x: TR.x + 4.8, z: TR.z + 0.7, hx: 0.12, hz: 0.12 },
      { x: TR.x - 4.5, z: TR.z - 1.0, hx: 0.6, hz: 0.4 },
      { x: TR.x + 2.8, z: TR.z - 1.0, hx: 0.6, hz: 0.4 },
    ],
    update(dt, dir) {
      t += dt;
      const dx = SPEED * dt * dir;
      for (const it of scrollItems) {
        it.obj.position.x -= dx * (it.far ? 0.22 : 1);
        if (it.obj.position.x < -W / 2) it.obj.position.x += W;
        if (it.obj.position.x > W / 2) it.obj.position.x -= W;
      }
      // 吊り革のゆれと車体のかすかな上下
      const sway = Math.sin(t * 2.6) * 0.09 + Math.sin(t * 7.3) * 0.03;
      for (const st of straps) st.rotation.x = sway;
      g.position.y = Math.sin(t * 9.1) * 0.012;
    },
  };
}
