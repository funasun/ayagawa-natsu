import * as THREE from 'three';
import { smat, woodTex, makePerson } from './builders.js';

// おばあちゃんの家のなか。地下 (y=-80) に部屋を置いて、外の世界とは切り離す
// 1階: 台所 / 茶の間 / おばあちゃんの間 (仏壇) / 玄関 + 階段
export function buildInterior(scene) {
  const Y = -80;
  const g = new THREE.Group();
  const md = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(x, Y + y, z);
    g.add(mm);
    return mm;
  };

  // まわりの暗がり (地中から空が見えないように包む。こわくないよう暖色の闇に)
  // ※ 幅をひろげすぎると x=40 にある2階の部屋を貫通して片側が黒くなるので注意
  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(40, 36, 44),
    new THREE.MeshBasicMaterial({ color: 0x1a1410, side: THREE.BackSide, fog: false }),
  );
  shell.position.set(0, Y + 8, 6);
  g.add(shell);

  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#6b4e30') });
  const woodDark = new THREE.MeshLambertMaterial({ map: woodTex('#4e3820') });
  const plaster = smat(0xf0e6cc);
  const tatamiA = smat(0xa8b278), tatamiB = smat(0xb7bf86);

  // 床 (板の間ぜんたい)
  md(new THREE.BoxGeometry(18.8, 0.3, 9.5), wood, 0, -0.15, 0);

  // 茶の間の畳 (x -2.9..3.3)
  for (let cx = 0; cx < 3; cx++) for (let cz = 0; cz < 2; cz++) {
    md(new THREE.BoxGeometry(1.95, 0.06, 4.0), (cx + cz) % 2 ? tatamiA : tatamiB,
      -1.85 + cx * 2.08, 0.03, -2.05 + cz * 4.1);
  }
  // おばあちゃんの間の畳 (x 3.7..9, 奥がわ)
  for (let cx = 0; cx < 2; cx++) {
    md(new THREE.BoxGeometry(2.55, 0.06, 4.6), cx % 2 ? tatamiA : tatamiB, 4.95 + cx * 2.6, 0.03, -1.85);
  }
  // 玄関の土間 (すこし暗い三和土)
  md(new THREE.BoxGeometry(5.4, 0.09, 2.9), smat(0x6a6258), 6.3, 0.05, 2.95);
  md(new THREE.BoxGeometry(5.4, 0.14, 0.22), woodDark, 6.3, 0.1, 1.42); // 上がりかまち

  // 外壁 (奥と左右は高く、手前はカメラが見えるように低く)
  md(new THREE.BoxGeometry(18.8, 6, 0.3), plaster, 0, 3, -4.4);
  md(new THREE.BoxGeometry(0.3, 6, 9.5), plaster, -9.25, 3, 0);
  md(new THREE.BoxGeometry(0.3, 6, 9.5), plaster, 9.25, 3, 0);
  // 天井 (虚空が見えないように木の天井を張る)
  md(new THREE.BoxGeometry(18.8, 0.25, 9.3), wood, 0, 5.85, -0.1);
  md(new THREE.BoxGeometry(18.8, 0.35, 0.35), woodDark, 0, 5.55, -3); // 梁
  md(new THREE.BoxGeometry(18.8, 0.35, 0.35), woodDark, 0, 5.55, 1.5);
  // 手前はカメラ用の切りかき (舞台セットふうの低い壁。玄関のところは戸口)
  md(new THREE.BoxGeometry(13.6, 1.1, 0.3), plaster, -2.45, 0.55, 4.4);
  md(new THREE.BoxGeometry(1.4, 1.1, 0.3), plaster, 8.75, 0.55, 4.4);
  md(new THREE.BoxGeometry(0.18, 2.3, 0.22), woodDark, 4.45, 1.15, 4.4); // 玄関柱
  md(new THREE.BoxGeometry(0.18, 2.3, 0.22), woodDark, 8.0, 1.15, 4.4);
  md(new THREE.BoxGeometry(3.8, 0.22, 0.26), woodDark, 6.2, 2.35, 4.4); // 鴨居

  // 間仕切り (前がわは通れるように開いている)
  md(new THREE.BoxGeometry(0.24, 6, 5.7), plaster, -3.1, 3, -1.55); // 台所|茶の間
  md(new THREE.BoxGeometry(0.24, 6, 5.1), plaster, 3.55, 3, -1.85); // 茶の間|おばあちゃんの間
  md(new THREE.BoxGeometry(0.24, 1.9, 3.2), plaster, -3.1, 4.9, 2.9); // 鴨居上の壁
  md(new THREE.BoxGeometry(0.24, 1.9, 3.5), plaster, 3.55, 4.9, 2.6);

  // ---- 台所 (x -9..-3.2) ----
  // 流し台 + ガス台 (奥の壁ぞい)
  md(new THREE.BoxGeometry(2.5, 0.82, 1.0), smat(0x88a4a0), -6.9, 0.41, -3.8);
  md(new THREE.BoxGeometry(2.6, 0.08, 1.06), smat(0xc4ccd0), -6.9, 0.86, -3.8); // ステンレス天板
  md(new THREE.BoxGeometry(0.9, 0.06, 0.62), smat(0x9aa8ac), -7.3, 0.9, -3.8); // シンクのくぼみ
  md(new THREE.CylinderGeometry(0.035, 0.035, 0.4, 6), smat(0xd8d8d8), -7.3, 1.1, -4.1); // 蛇口
  md(new THREE.BoxGeometry(1.3, 0.82, 1.0), smat(0xe8e0d0), -5.0, 0.41, -3.8); // ガス台
  md(new THREE.CylinderGeometry(0.3, 0.34, 0.26, 10), smat(0x7a7a72), -5.0, 1.0, -3.8); // なべ
  md(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), smat(0x3a3a36), -4.65, 1.05, -3.8).rotation.z = 1.2; // なべの柄
  // 小窓 (流しのうえ)
  md(new THREE.BoxGeometry(1.5, 1.0, 0.08), smat(0xbcd4dc, { emissive: 0x36474f }), -6.9, 2.5, -4.22);
  // 冷蔵庫 (まるっこいレトロ)
  md(new THREE.BoxGeometry(0.95, 1.75, 0.85), smat(0xf0ead8), -8.6, 0.88, -3.6);
  md(new THREE.BoxGeometry(0.06, 0.5, 0.08), smat(0x8a8578), -8.1, 1.2, -3.14);
  // 食器棚
  md(new THREE.BoxGeometry(0.72, 1.95, 1.5), wood, -8.75, 0.98, -0.5);
  md(new THREE.BoxGeometry(0.1, 0.7, 1.3), smat(0xd8e4e8), -8.35, 1.45, -0.5); // ガラス戸
  // やかんと ざる (ちょい置き)
  md(new THREE.CylinderGeometry(0.16, 0.2, 0.22, 8), smat(0xd0a848), -6.3, 1.0, -3.75);

  // ---- 茶の間 (x -3..3.5) ----
  // ちゃぶ台とざぶとん
  md(new THREE.CylinderGeometry(1.0, 1.0, 0.12, 16), wood, 0, 0.46, 0.3);
  for (const [lx, lz] of [[-0.6, -0.2], [0.6, -0.2], [-0.6, 0.8], [0.6, 0.8]]) {
    md(new THREE.BoxGeometry(0.1, 0.4, 0.1), wood, lx, 0.2, lz);
  }
  md(new THREE.CylinderGeometry(0.26, 0.3, 0.12, 10), smat(0xd8ceb4), 0.3, 0.58, 0.15); // 湯のみ盆
  md(new THREE.BoxGeometry(0.85, 0.09, 0.85), smat(0x9a4a3c), 0, 0.05, 1.85).rotation.y = 0.1;
  md(new THREE.BoxGeometry(0.85, 0.09, 0.85), smat(0x8a5a3c), -1.75, 0.05, 0.3).rotation.y = -0.15;
  md(new THREE.BoxGeometry(0.85, 0.09, 0.85), smat(0x6a7a54), 1.75, 0.05, 0.3).rotation.y = 0.2;
  // テレビ (ブラウン管)
  md(new THREE.BoxGeometry(1.3, 0.5, 1.0), wood, -2.0, 0.25, -3.55);
  md(new THREE.BoxGeometry(1.1, 0.85, 0.85), smat(0x7a6a52), -2.0, 0.95, -3.55);
  const screen = md(new THREE.BoxGeometry(0.8, 0.6, 0.05), smat(0x1c2820, { emissive: 0x0a120c }), -2.0, 0.98, -3.1);
  md(new THREE.CylinderGeometry(0.015, 0.015, 0.9, 4), smat(0xcccccc), -2.2, 1.75, -3.6).rotation.z = 0.5;
  md(new THREE.CylinderGeometry(0.015, 0.015, 0.9, 4), smat(0xcccccc), -1.8, 1.75, -3.6).rotation.z = -0.5;
  // 窓と掛けじく・柱時計
  md(new THREE.BoxGeometry(1.7, 1.3, 0.08), smat(0xbcd4dc, { emissive: 0x36474f }), -0.6, 2.2, -4.22);
  md(new THREE.BoxGeometry(1.8, 0.12, 0.14), wood, -0.6, 1.5, -4.2);
  md(new THREE.BoxGeometry(0.5, 0.85, 0.12), woodDark, 1.3, 2.6, -4.22); // 柱時計
  md(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 12), smat(0xf4eedd), 1.3, 2.75, -4.14).rotation.x = Math.PI / 2;
  // 扇風機 (首をふる)
  md(new THREE.CylinderGeometry(0.35, 0.4, 0.1, 12), smat(0x9fc4bc), -2.3, 0.05, 1.7);
  md(new THREE.CylinderGeometry(0.05, 0.05, 0.95, 8), smat(0xd8d8d0), -2.3, 0.55, 1.7);
  const fanHead = new THREE.Group();
  fanHead.position.set(-2.3, Y + 1.1, 1.7);
  const fanFace = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.22, 14), smat(0x9fc4bc));
  fanFace.rotation.x = Math.PI / 2;
  fanHead.add(fanFace);
  const fanBtn = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), smat(0x38504c));
  fanBtn.position.z = 0.16;
  fanHead.add(fanBtn);
  g.add(fanHead);
  // 階段 (茶の間の奥から2階へ)
  for (let i = 0; i < 7; i++) {
    md(new THREE.BoxGeometry(1.3, 0.32, 0.4), woodDark, 2.75, 0.16 + i * 0.32, -2.35 - i * 0.32);
  }
  md(new THREE.BoxGeometry(0.06, 0.9, 2.3), woodDark, 2.06, 1.4, -3.3); // 手すり板

  // ---- おばあちゃんの間 (x 3.7..9) ----
  // 仏壇 (おじいちゃんがいる)
  md(new THREE.BoxGeometry(1.25, 1.7, 0.75), woodDark, 6.2, 0.85, -3.9);
  md(new THREE.BoxGeometry(0.95, 1.0, 0.1), smat(0x9a7a28, { emissive: 0x554010 }), 6.2, 1.05, -3.5); // 金色の奥
  md(new THREE.BoxGeometry(0.34, 0.44, 0.06), smat(0xf4f0e4), 6.2, 1.1, -3.44); // おじいちゃんの写真
  md(new THREE.BoxGeometry(1.05, 0.4, 0.5), woodDark, 6.2, 0.2, -3.1); // 経机
  md(new THREE.SphereGeometry(0.09, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), smat(0xc8a038), 5.9, 0.4, -3.05); // りん
  md(new THREE.CylinderGeometry(0.02, 0.02, 0.22, 5), smat(0x604830), 6.5, 0.5, -3.05); // 線香たて
  // タンス
  md(new THREE.BoxGeometry(0.75, 2.3, 1.7), wood, 8.7, 1.15, -1.5);
  for (const hy of [0.5, 1.05, 1.6]) {
    md(new THREE.BoxGeometry(0.06, 0.06, 1.5), smat(0x2a2018), 8.3, hy, -1.5);
  }
  md(new THREE.BoxGeometry(0.85, 0.09, 0.85), smat(0x9a4a3c), 5.0, 0.05, -1.2).rotation.y = -0.1; // ざぶとん
  md(new THREE.BoxGeometry(0.62, 1.25, 0.04), smat(0xe8e0c8), 7.6, 2.35, -4.22); // 掛けじく
  md(new THREE.BoxGeometry(0.3, 0.4, 0.05), smat(0xb04038), 7.6, 2.5, -4.19);

  // ---- 玄関 ----
  md(new THREE.BoxGeometry(1.5, 0.85, 0.5), wood, 8.7, 0.43, 2.2); // 下駄箱
  md(new THREE.CylinderGeometry(0.14, 0.17, 0.7, 8), smat(0x707a84), 4.9, 0.4, 3.6); // 傘立て
  md(new THREE.CylinderGeometry(0.02, 0.02, 0.8, 4), smat(0xb04038), 4.95, 0.75, 3.6).rotation.z = 0.15;
  md(new THREE.BoxGeometry(0.26, 0.09, 0.6), smat(0x4a4038), 5.9, 0.12, 3.1); // くつ
  md(new THREE.BoxGeometry(0.26, 0.09, 0.6), smat(0x4a4038), 6.3, 0.12, 3.15);

  // 裸電球 (茶の間とおばあちゃんの間)
  for (const [bx, bz] of [[0, 0.3], [6.2, -1.2], [-6, -1.5]]) {
    md(new THREE.CylinderGeometry(0.02, 0.02, 2.8, 4), smat(0x1a1a18), bx, 4.35, bz);
    md(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshLambertMaterial({ color: 0xffe8b0, emissive: 0xffc870, emissiveIntensity: 0.9 }), bx, 2.95, bz);
  }
  const bulb = new THREE.PointLight(0xffdfa8, 1.6, 22, 1.4);
  bulb.position.set(0, Y + 2.8, 0.3);
  g.add(bulb);
  const bulb2 = new THREE.PointLight(0xffdfa8, 1.2, 18, 1.4);
  bulb2.position.set(6.2, Y + 2.8, -1.2);
  g.add(bulb2);
  const bulb3 = new THREE.PointLight(0xffe4b8, 1.1, 18, 1.4);
  bulb3.position.set(-6, Y + 2.8, -1.5);
  g.add(bulb3);
  // 部屋ぜんたいをやわらかく持ちあげる補助光
  const fill = new THREE.PointLight(0xffe8c8, 0.6, 40, 1.2);
  fill.position.set(0, Y + 5, 7);
  g.add(fill);

  // おばあちゃん (時間帯によって家のなかにいる。位置は events が動かす)
  const bchan = makePerson({ body: 0x8877aa, head: 0xf0c8a0, hair: 0xcccccc, elder: true });
  bchan.group.position.set(-6, Y, -2.2);
  bchan.group.visible = false;
  g.add(bchan.group);

  scene.add(g);

  return {
    floorY: Y,
    entry: { x: 6.2, z: 2.8 },
    bounds: { minX: -8.9, maxX: 8.9, minZ: -3.85, maxZ: 3.9 },
    rects: [
      { x: -3.1, z: -1.55, hx: 0.2, hz: 2.9 },   // 間仕切り (台所)
      { x: 3.55, z: -1.85, hx: 0.2, hz: 2.6 },   // 間仕切り (おばあちゃんの間)
      { x: -6.0, z: -3.8, hx: 2.0, hz: 0.6 },    // 流し・ガス台
      { x: -8.6, z: -3.6, hx: 0.55, hz: 0.5 },   // 冷蔵庫
      { x: -8.75, z: -0.5, hx: 0.45, hz: 0.8 },  // 食器棚
      { x: 0, z: 0.3, hx: 1.1, hz: 1.1 },        // ちゃぶ台
      { x: -2.0, z: -3.55, hx: 0.7, hz: 0.6 },   // テレビ
      { x: -2.3, z: 1.7, hx: 0.42, hz: 0.42 },   // 扇風機
      { x: 2.75, z: -3.3, hx: 0.72, hz: 1.15 },  // 階段
      { x: 6.2, z: -3.7, hx: 0.68, hz: 0.6 },    // 仏壇
      { x: 8.7, z: -1.5, hx: 0.5, hz: 0.9 },     // タンス
      { x: 8.7, z: 2.2, hx: 0.5, hz: 0.35 },     // 下駄箱
    ],
    fanHead,
    tvScreen: screen.material,
    baachan: bchan.group,
  };
}

// 2階: ぼくの部屋 (x=40 のあたりに別区画としてつくる)
export function buildUpstairs(scene) {
  const Y = -80;
  const CX = 40;
  const g = new THREE.Group();
  const md = (geo, material, x, y, z) => {
    const mm = new THREE.Mesh(geo, material);
    mm.position.set(CX + x, Y + y, z);
    g.add(mm);
    return mm;
  };

  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(50, 36, 50),
    new THREE.MeshBasicMaterial({ color: 0x1a1410, side: THREE.BackSide, fog: false }),
  );
  shell.position.set(CX, Y + 8, 4);
  g.add(shell);

  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#7a5a38') });
  const woodDark = new THREE.MeshLambertMaterial({ map: woodTex('#4e3820') });
  const plaster = smat(0xefe8d2);

  // 床と畳
  md(new THREE.BoxGeometry(9.4, 0.3, 8.4), wood, 0, -0.15, 0);
  for (let cx = 0; cx < 2; cx++) for (let cz = 0; cz < 2; cz++) {
    md(new THREE.BoxGeometry(3.3, 0.06, 3.3), (cx + cz) % 2 ? smat(0xa8b278) : smat(0xb7bf86),
      -1.7 + cx * 3.4, 0.03, -1.8 + cz * 3.4);
  }

  // 壁と天井 (勾配天井ふうに奥をすこし低く)
  md(new THREE.BoxGeometry(9.4, 5.6, 0.3), plaster, 0, 2.8, -4.1);
  md(new THREE.BoxGeometry(0.3, 5.6, 8.4), plaster, -4.55, 2.8, 0);
  md(new THREE.BoxGeometry(0.3, 5.6, 8.4), plaster, 4.55, 2.8, 0);
  md(new THREE.BoxGeometry(9.4, 0.25, 8.2), wood, 0, 5.55, -0.1);
  md(new THREE.BoxGeometry(9.4, 0.3, 0.3), woodDark, 0, 5.3, -2); // 梁
  md(new THREE.BoxGeometry(3.4, 1.0, 0.3), plaster, -2.9, 0.5, 4.1); // 手前の低い壁
  md(new THREE.BoxGeometry(3.4, 1.0, 0.3), plaster, 2.9, 0.5, 4.1);

  // 階段の降り口 (左手前)
  md(new THREE.BoxGeometry(1.4, 0.06, 2.0), smat(0x241a10), -3.6, 0.05, 2.6);
  md(new THREE.BoxGeometry(0.08, 0.75, 2.0), woodDark, -2.85, 0.55, 2.6); // 手すり
  md(new THREE.BoxGeometry(0.08, 0.75, 0.08), woodDark, -2.85, 0.55, 1.6);
  md(new THREE.BoxGeometry(0.08, 0.75, 0.08), woodDark, -2.85, 0.55, 3.55);

  // ふとん
  md(new THREE.BoxGeometry(1.3, 0.14, 2.4), smat(0xf2eee2), -2.6, 0.11, -2.2);
  md(new THREE.BoxGeometry(1.32, 0.14, 1.6), smat(0x7f9fbf), -2.6, 0.22, -1.85);
  md(new THREE.BoxGeometry(0.68, 0.14, 0.36), smat(0xdcd6c0), -2.6, 0.23, -3.15);

  // 学習机 (奥の窓ぎわ)
  md(new THREE.BoxGeometry(1.9, 0.08, 1.0), wood, 2.6, 0.78, -3.3);
  md(new THREE.BoxGeometry(0.08, 0.78, 0.95), wood, 1.72, 0.39, -3.3);
  md(new THREE.BoxGeometry(0.08, 0.78, 0.95), wood, 3.48, 0.39, -3.3);
  md(new THREE.BoxGeometry(0.6, 0.35, 0.9), wood, 3.15, 0.6, -3.3); // 引き出し
  md(new THREE.BoxGeometry(0.4, 0.55, 0.06), smat(0x3a5a44, { emissive: 0x14241a }), 2.1, 1.1, -3.68); // スタンドの笠がわり黒板?いや本立て
  md(new THREE.BoxGeometry(0.34, 0.02, 0.46), smat(0xffffff), 2.7, 0.83, -3.2); // ノート
  md(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 4), smat(0xd8a030), 2.95, 0.84, -3.1).rotation.z = 1.3; // えんぴつ
  // 電気スタンド
  md(new THREE.CylinderGeometry(0.09, 0.11, 0.04, 8), smat(0x486858), 1.95, 0.82, -3.45);
  md(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 5), smat(0x486858), 1.95, 1.06, -3.45).rotation.x = 0.3;
  md(new THREE.SphereGeometry(0.1, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.6), new THREE.MeshLambertMaterial({ color: 0x8fc4a4, emissive: 0x2a4434 }), 1.95, 1.32, -3.28);
  // いす
  md(new THREE.BoxGeometry(0.5, 0.08, 0.5), wood, 2.6, 0.45, -2.5);
  for (const [ix, iz] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) {
    md(new THREE.BoxGeometry(0.06, 0.45, 0.06), wood, 2.6 + ix, 0.22, -2.5 + iz);
  }
  md(new THREE.BoxGeometry(0.5, 0.55, 0.06), wood, 2.6, 0.75, -2.28);

  // 本棚 + ラジオ + 虫かご
  md(new THREE.BoxGeometry(0.55, 1.65, 1.5), wood, 4.2, 0.83, 0.4);
  const bookCols = [0xb04038, 0x3a6a9a, 0x6a8a3a, 0xc8902a, 0x7a4a8a];
  for (let i = 0; i < 5; i++) {
    md(new THREE.BoxGeometry(0.36, 0.42, 0.16), smat(bookCols[i]), 4.15, 1.25, -0.2 + i * 0.22);
  }
  for (let i = 0; i < 4; i++) {
    md(new THREE.BoxGeometry(0.36, 0.36, 0.18), smat(bookCols[(i + 2) % 5]), 4.15, 0.68, -0.1 + i * 0.24);
  }
  md(new THREE.BoxGeometry(0.5, 0.3, 0.34), smat(0x8a4838), 4.2, 1.82, 0.85); // ラジオ
  md(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 4), smat(0xd8d8d8), 4.3, 2.2, 0.85).rotation.z = 0.5; // アンテナ
  md(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), smat(0xd8ceb4), 4.05, 1.85, 0.75).rotation.x = Math.PI / 2; // ダイヤル
  md(new THREE.BoxGeometry(0.4, 0.34, 0.3), smat(0x6a9a4a, { emissive: 0x1a2a12 }), 4.2, 1.85, 0.05); // 虫かご
  md(new THREE.BoxGeometry(0.42, 0.05, 0.32), smat(0x3a5a2a), 4.2, 2.04, 0.05);

  // 窓 (夜空や朝の光がにじむ) とポスター
  md(new THREE.BoxGeometry(2.0, 1.4, 0.08), smat(0xbcd4dc, { emissive: 0x36474f }), -0.5, 2.3, -3.94);
  md(new THREE.BoxGeometry(2.1, 0.12, 0.14), wood, -0.5, 1.55, -3.9);
  md(new THREE.BoxGeometry(0.06, 1.4, 0.1), wood, -0.5, 2.3, -3.92);
  md(new THREE.BoxGeometry(0.7, 1.0, 0.04), smat(0xf4f0e0), -3.2, 2.5, -3.94); // ポスター
  md(new THREE.BoxGeometry(0.5, 0.5, 0.05), smat(0xd85a40), -3.2, 2.6, -3.9); // 怪獣ふう

  // 電球
  md(new THREE.CylinderGeometry(0.02, 0.02, 2.4, 4), smat(0x1a1a18), 0, 4.3, 0.3);
  md(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshLambertMaterial({ color: 0xffe8b0, emissive: 0xffc870, emissiveIntensity: 0.9 }), 0, 3.0, 0.3);
  const bulb = new THREE.PointLight(0xffdfa8, 1.5, 20, 1.4);
  bulb.position.set(CX, Y + 2.9, 0.3);
  g.add(bulb);
  const fill = new THREE.PointLight(0xffe8c8, 0.55, 30, 1.2);
  fill.position.set(CX, Y + 4.5, 6);
  g.add(fill);

  scene.add(g);

  return {
    floorY: Y,
    entry: { x: CX - 2.0, z: 2.5 }, // 階段をのぼってきたところ
    bounds: { minX: CX - 4.2, maxX: CX + 4.2, minZ: -3.55, maxZ: 3.6 },
    rects: [
      { x: CX - 3.6, z: 2.6, hx: 0.75, hz: 1.05 }, // 階段の穴
      { x: CX - 2.6, z: -2.2, hx: 0.75, hz: 1.3 }, // ふとん
      { x: CX + 2.6, z: -3.15, hx: 1.05, hz: 0.65 }, // 机
      { x: CX + 2.6, z: -2.5, hx: 0.35, hz: 0.35 },  // いす
      { x: CX + 4.2, z: 0.4, hx: 0.4, hz: 0.85 },    // 本棚
    ],
    spots: {
      stairs: { x: CX - 3.55, z: 1.2 },
      futon: { x: CX - 2.6, z: -2.2 },
      desk: { x: CX + 2.6, z: -1.7 },
      shelf: { x: CX + 3.5, z: 0.4 },
      window: { x: CX - 0.5, z: -2.9 },
    },
  };
}
