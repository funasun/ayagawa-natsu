import * as THREE from 'three';

export const mat = (color, opts = {}) => new THREE.MeshLambertMaterial({ color, flatShading: true, ...opts });
export const smat = (color, opts = {}) => new THREE.MeshLambertMaterial({ color, ...opts });

function m(geo, material, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  return mesh;
}

// ---------- テクスチャ ----------
function canvasTex(size, draw, repeat = [1, 1]) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export const kawaraTex = (base = '#4a5560') => canvasTex(64, (ctx, s) => {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, s, s);
  for (let y = 0; y < s; y += 8) {
    ctx.fillStyle = 'rgba(0,0,0,0.28)';
    ctx.fillRect(0, y + 6, s, 2);
    ctx.fillStyle = 'rgba(255,255,255,0.10)';
    ctx.fillRect(0, y, s, 1);
    for (let x = (y / 8) % 2 ? 8 : 0; x < s; x += 16) {
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(x, y, 1, 8);
    }
  }
}, [3, 2]);

export const woodTex = (base = '#7a5a38') => canvasTex(64, (ctx, s) => {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, s, s);
  for (let x = 0; x < s; x += 6) {
    ctx.fillStyle = `rgba(30,15,5,${0.1 + (x % 12 ? 0.06 : 0.16)})`;
    ctx.fillRect(x, 0, 2, s);
  }
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = 'rgba(35,18,6,0.25)';
    ctx.fillRect(Math.random() * s, Math.random() * s, 1, 3 + Math.random() * 8);
  }
}, [2, 1]);

export const plasterTex = () => canvasTex(64, (ctx, s) => {
  ctx.fillStyle = '#f1e7d0';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 240; i++) {
    ctx.fillStyle = `rgba(150,130,95,${Math.random() * 0.12})`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 2, 2);
  }
});

export const grassTex = () => canvasTex(256, (ctx, s) => {
  ctx.fillStyle = '#6d9646';
  ctx.fillRect(0, 0, s, s);
  // 濃淡のまだら (土や日焼けのムラ)
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * s, y = Math.random() * s;
    ctx.fillStyle = Math.random() < 0.5 ? 'rgba(70,105,45,0.25)' : 'rgba(160,150,90,0.14)';
    ctx.beginPath(); ctx.arc(x, y, 6 + Math.random() * 16, 0, 7); ctx.fill();
  }
  // 草の葉
  for (let i = 0; i < 6500; i++) {
    const g = 105 + Math.random() * 85;
    ctx.fillStyle = `rgba(${g * 0.52},${g},${g * 0.34},0.55)`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1, 2 + Math.random() * 3);
  }
  // クローバーぽい明るい点
  for (let i = 0; i < 260; i++) {
    ctx.fillStyle = 'rgba(150,190,95,0.35)';
    ctx.fillRect(Math.random() * s, Math.random() * s, 2, 2);
  }
}, [40, 40]);

export const waterTex = () => canvasTex(128, (ctx, s) => {
  ctx.fillStyle = '#3f7e94';
  ctx.fillRect(0, 0, s, s);
  // 深みのムラ
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = 'rgba(18,58,78,0.18)';
    ctx.beginPath(); ctx.arc(Math.random() * s, Math.random() * s, 6 + Math.random() * 14, 0, 7); ctx.fill();
  }
  // 流れに沿うさざなみ (v=流れ方向=canvasの縦)
  for (let i = 0; i < 34; i++) {
    const x = Math.random() * s;
    ctx.strokeStyle = `rgba(220,240,250,${0.06 + Math.random() * 0.12})`;
    ctx.lineWidth = 1 + Math.random() * 1.2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    for (let y = 0; y <= s; y += 14) ctx.lineTo(x + Math.sin(y * 0.18 + i * 2.1) * 3.5, y);
    ctx.stroke();
  }
});

// ---------- 木 ----------
export function makeTree(big = false, seed = 0) {
  const g = new THREE.Group();
  const rnd = (n) => ((Math.sin(seed * 127.1 + n * 311.7) * 43758.5) % 1 + 1) % 1;
  const s = big ? 2.6 : 0.95 + rnd(1) * 0.6;
  const trunkH = 2.6 * s;
  const trunk = m(new THREE.CylinderGeometry(0.16 * s, 0.34 * s, trunkH, 7), smat(0x5d452c), 0, trunkH / 2, 0);
  trunk.rotation.z = (rnd(2) - 0.5) * 0.1;
  trunk.castShadow = true;
  g.add(trunk);
  // 枝
  for (let i = 0; i < (big ? 3 : 2); i++) {
    const br = m(new THREE.CylinderGeometry(0.05 * s, 0.09 * s, 1.1 * s, 5), smat(0x5d452c),
      Math.sin(i * 2.4 + seed) * 0.5 * s, trunkH * (0.62 + i * 0.14), Math.cos(i * 2.4 + seed) * 0.5 * s);
    br.rotation.set(Math.cos(i * 2.4 + seed) * 0.8, 0, -Math.sin(i * 2.4 + seed) * 0.8);
    g.add(br);
  }
  // 葉のかたまり (色に深みのグラデーション)
  const baseHue = 0.27 + rnd(3) * 0.05;
  const n = big ? 9 : 5;
  for (let i = 0; i < n; i++) {
    const r = (big ? 2.1 : 1.15) * s * (1 - (i / n) * 0.35) * (0.75 + rnd(i + 4) * 0.4);
    const col = new THREE.Color().setHSL(baseHue, 0.5 + rnd(i + 9) * 0.14, 0.19 + (i / n) * 0.13 + rnd(i + 5) * 0.05);
    const blob = m(new THREE.IcosahedronGeometry(r, 1), smat(col),
      Math.sin(seed + i * 2.4) * r * 0.75, trunkH * 0.85 + (i % 3) * 0.8 * s + r * 0.4, Math.cos(seed * 2 + i * 1.7) * r * 0.75);
    blob.scale.y = 0.82;
    blob.castShadow = true;
    g.add(blob);
  }
  g.userData.radius = 0.5 * s;
  return g;
}

export function makePine(seed = 0) {
  const g = new THREE.Group();
  const s = 1 + (seed % 3) * 0.25;
  const trunk = m(new THREE.CylinderGeometry(0.12 * s, 0.26 * s, 3.4 * s, 6), smat(0x54402a), 0, 1.7 * s, 0);
  trunk.rotation.z = Math.sin(seed) * 0.12;
  trunk.castShadow = true;
  g.add(trunk);
  for (let i = 0; i < 4; i++) {
    const r = (1.5 - i * 0.28) * s;
    const cone = m(new THREE.ConeGeometry(r, 1.3 * s, 8), smat(new THREE.Color().setHSL(0.32, 0.35, 0.2 + i * 0.03)), 0, (2.4 + i * 1.05) * s, 0);
    cone.castShadow = true;
    g.add(cone);
  }
  return g;
}

export function makeBamboo(seed = 0) {
  const g = new THREE.Group();
  const rnd = (n) => ((Math.sin(seed * 91.3 + n * 47.7) * 4375.85) % 1 + 1) % 1;
  const h = 7 + rnd(1) * 3;
  const stalk = m(new THREE.CylinderGeometry(0.09, 0.12, h, 6), smat(new THREE.Color().setHSL(0.24, 0.4, 0.32 + rnd(2) * 0.1)), 0, h / 2, 0);
  stalk.rotation.z = (rnd(3) - 0.5) * 0.16;
  g.add(stalk);
  for (let i = 1; i < 5; i++) g.add(m(new THREE.TorusGeometry(0.105, 0.015, 4, 8), smat(0x3a5a2a), 0, (h / 5) * i, 0)).children.at(-1).rotation.x = Math.PI / 2;
  for (let i = 0; i < 3; i++) {
    const leaf = m(new THREE.IcosahedronGeometry(0.7 + rnd(i + 4) * 0.4, 0), smat(0x5a8a3c), (rnd(i + 5) - 0.5) * 1.4, h - i * 0.9, (rnd(i + 6) - 0.5) * 1.4);
    leaf.scale.y = 0.5;
    g.add(leaf);
  }
  return g;
}

// ---------- 日本家屋 ----------
export function makeHouse({ w = 8, d = 6, h = 3, roofC = '#454f5a', engawa = true, doorSide = 1 } = {}) {
  const g = new THREE.Group();
  const plaster = new THREE.MeshLambertMaterial({ map: plasterTex() });
  const wood = new THREE.MeshLambertMaterial({ map: woodTex() });
  const kawara = new THREE.MeshLambertMaterial({ map: kawaraTex(roofC) });

  // 基礎石
  g.add(m(new THREE.BoxGeometry(w + 0.3, 0.4, d + 0.3), mat(0x8b8578), 0, 0.2, 0));
  // 壁: 下は板張り・上は漆喰
  const lower = m(new THREE.BoxGeometry(w, h * 0.55, d), wood, 0, 0.4 + h * 0.275, 0);
  lower.castShadow = true;
  g.add(lower);
  const upper = m(new THREE.BoxGeometry(w, h * 0.45, d), plaster, 0, 0.4 + h * 0.775, 0);
  upper.castShadow = true;
  g.add(upper);
  // 柱
  for (const sx of [-1, 1]) for (const sz of [-1, 1])
    g.add(m(new THREE.BoxGeometry(0.22, h, 0.22), wood, sx * (w / 2), 0.4 + h / 2, sz * (d / 2)));

  // 入母屋ふう瓦屋根 (深い軒)
  const eave = 1.1;
  const roofH = 1.6 + w * 0.08;
  const roof = m(new THREE.ConeGeometry(1, 1, 4), kawara, 0, 0.4 + h + roofH / 2, 0);
  roof.rotation.y = Math.PI / 4;
  roof.scale.set((w / 2 + eave) * 1.42, roofH, (d / 2 + eave) * 1.42);
  roof.castShadow = true;
  g.add(roof);
  // 軒下の陰
  g.add(m(new THREE.BoxGeometry(w + eave * 1.6, 0.14, d + eave * 1.6), mat(0x2e2a24), 0, 0.4 + h + 0.02, 0));
  // 棟瓦
  g.add(m(new THREE.BoxGeometry(w * 0.5, 0.22, 0.5), kawara, 0, 0.4 + h + roofH - 0.06, 0));

  // 障子窓と戸
  const zf = doorSide * (d / 2 + 0.02);
  const shoji = smat(0xf5efdd);
  const frame = smat(0x4a3524);
  g.add(m(new THREE.BoxGeometry(1.5, 1.9, 0.08), frame, w * 0.22, 1.35, zf));
  g.add(m(new THREE.BoxGeometry(1.3, 1.7, 0.06), shoji, w * 0.22, 1.35, zf + doorSide * 0.02));
  for (const wx of [-w * 0.24, -w * 0.02]) {
    g.add(m(new THREE.BoxGeometry(1.3, 1.1, 0.08), frame, wx, 1.7, zf));
    g.add(m(new THREE.BoxGeometry(1.14, 0.95, 0.06), shoji, wx, 1.7, zf + doorSide * 0.02));
  }
  if (engawa) {
    g.add(m(new THREE.BoxGeometry(w * 0.9, 0.14, 1.2), wood, 0, 0.55, doorSide * (d / 2 + 0.65)));
    for (const sx of [-1, 0, 1]) g.add(m(new THREE.BoxGeometry(0.12, 0.5, 0.12), wood, sx * w * 0.4, 0.25, doorSide * (d / 2 + 1.1)));
  }
  return g;
}

// ---------- 神社まわり ----------
export function makeTorii(scale = 1) {
  const g = new THREE.Group();
  const red = smat(0xb5372c);
  for (const sx of [-1, 1]) {
    const p = m(new THREE.CylinderGeometry(0.2 * scale, 0.27 * scale, 4 * scale, 10), red, sx * 1.8 * scale, 2 * scale, 0);
    p.castShadow = true;
    g.add(p);
  }
  const kasagi = m(new THREE.BoxGeometry(5.6 * scale, 0.34 * scale, 0.42 * scale), smat(0x2e2a28), 0, 4.25 * scale, 0);
  kasagi.castShadow = true;
  g.add(kasagi);
  const k2 = m(new THREE.BoxGeometry(5.3 * scale, 0.22 * scale, 0.38 * scale), red, 0, 3.98 * scale, 0);
  g.add(k2);
  g.add(m(new THREE.BoxGeometry(4.2 * scale, 0.26 * scale, 0.3 * scale), red, 0, 3.2 * scale, 0));
  g.add(m(new THREE.BoxGeometry(0.16 * scale, 0.7 * scale, 0.24 * scale), red, 0, 3.6 * scale, 0));
  return g;
}

export function makeShrineHall() {
  const g = new THREE.Group();
  const kawara = new THREE.MeshLambertMaterial({ map: kawaraTex('#39463f') });
  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#6a4a2e') });
  g.add(m(new THREE.BoxGeometry(9.4, 1, 7.4), mat(0x93897c), 0, 0.5, 0));
  const hall = m(new THREE.BoxGeometry(7.5, 3, 5.5), wood, 0, 2.5, 0);
  hall.castShadow = true;
  g.add(hall);
  for (const sx of [-1, -0.33, 0.33, 1]) g.add(m(new THREE.BoxGeometry(0.26, 3.2, 0.26), smat(0x503a24), sx * 3.6, 2.5, 2.7));
  const roof = m(new THREE.ConeGeometry(1, 1, 4), kawara, 0, 5.3, 0);
  roof.rotation.y = Math.PI / 4;
  roof.scale.set(7.4, 2.6, 5.6);
  roof.castShadow = true;
  g.add(roof);
  g.add(m(new THREE.BoxGeometry(4, 0.3, 0.6), kawara, 0, 6.4, 0));
  g.add(m(new THREE.BoxGeometry(2.6, 0.6, 2.2), mat(0x877d70), 0, 0.8, 4)); // 階段
  g.add(m(new THREE.BoxGeometry(2, 1.7, 0.12), smat(0x3f2f1e), 0, 2.1, 2.79));
  // しめ縄と鈴
  g.add(m(new THREE.CylinderGeometry(0.09, 0.09, 2.4, 6), smat(0xc9b380), 0, 3.6, 2.85)).children.at(-1).rotation.z = Math.PI / 2;
  g.add(m(new THREE.SphereGeometry(0.16, 8, 6), smat(0xd8b23a), 0, 3.2, 2.9));
  return g;
}

export function makeStoneLantern() {
  const g = new THREE.Group();
  const gray = mat(0x8a8a82);
  g.add(m(new THREE.CylinderGeometry(0.3, 0.36, 0.18, 8), gray, 0, 0.09, 0));
  g.add(m(new THREE.CylinderGeometry(0.14, 0.2, 1.1, 6), gray, 0, 0.7, 0));
  g.add(m(new THREE.BoxGeometry(0.62, 0.14, 0.62), gray, 0, 1.32, 0));
  g.add(m(new THREE.BoxGeometry(0.48, 0.44, 0.48), mat(0x9a9a90), 0, 1.6, 0));
  g.add(m(new THREE.ConeGeometry(0.55, 0.42, 4), gray, 0, 2.05, 0)).children.at(-1).rotation.y = Math.PI / 4;
  g.add(m(new THREE.SphereGeometry(0.12, 6, 5), gray, 0, 2.34, 0));
  return g;
}

// ---------- 橋・田・小物 ----------
export function makeBridge() {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#8a6538') });
  const deck = m(new THREE.BoxGeometry(4.4, 0.28, 16), wood, 0, 0.3, 0);
  deck.castShadow = true;
  g.add(deck);
  for (let i = -7; i <= 7; i++) g.add(m(new THREE.BoxGeometry(4.4, 0.06, 0.5), mat(0x6d4d28), 0, 0.46, i * 1.05));
  for (const sx of [-1, 1]) {
    g.add(m(new THREE.BoxGeometry(0.14, 0.1, 16), wood, sx * 2.05, 1.05, 0));
    for (let i = -3; i <= 3; i++) g.add(m(new THREE.BoxGeometry(0.13, 0.75, 0.13), wood, sx * 2.05, 0.72, i * 2.4));
    for (const iz of [-6, 0, 6]) g.add(m(new THREE.CylinderGeometry(0.16, 0.18, 1.6, 6), wood, sx * 1.9, -0.4, iz));
  }
  return g;
}

export function makeSunflower(seed = 0) {
  const g = new THREE.Group();
  const h = 1.5 + ((seed * 13) % 10) / 18;
  g.add(m(new THREE.CylinderGeometry(0.035, 0.05, h, 5), smat(0x4a7a34), 0, h / 2, 0));
  for (let i = 0; i < 3; i++) {
    const leaf = m(new THREE.IcosahedronGeometry(0.16, 0), smat(0x559040), Math.sin(i * 2.2) * 0.22, h * (0.35 + i * 0.2), Math.cos(i * 2.2) * 0.15);
    leaf.scale.set(1.4, 0.35, 0.9);
    g.add(leaf);
  }
  const head = new THREE.Group();
  head.position.set(0, h, 0.06);
  for (let i = 0; i < 12; i++) {
    const petal = m(new THREE.BoxGeometry(0.1, 0.02, 0.26), smat(0xf6c832), Math.sin((i / 12) * 7) * 0.32, 0, Math.cos((i / 12) * 7) * 0.32);
    petal.rotation.y = (i / 12) * Math.PI * 2;
    head.add(petal);
  }
  head.add(m(new THREE.CylinderGeometry(0.2, 0.2, 0.09, 10), smat(0x54381c)));
  head.rotation.x = Math.PI / 2 - 0.45;
  g.add(head);
  return g;
}

export function makeRiceRow(len) {
  // 稲のうね1列 (InstancedMeshで田1枚ぶんまとめる)
  const geo = new THREE.ConeGeometry(0.2, 0.85, 5);
  geo.translate(0, 0.42, 0);
  const inst = new THREE.InstancedMesh(geo, smat(0x4f8f2e), len);
  return inst;
}

export function makeFence(len) {
  const g = new THREE.Group();
  const wood = smat(0x7a6248);
  const n = Math.max(1, Math.round(len / 2.2));
  for (let i = 0; i <= n; i++) {
    g.add(m(new THREE.CylinderGeometry(0.05, 0.065, 0.95, 5), wood, -len / 2 + (i * len) / n, 0.47, 0));
  }
  g.add(m(new THREE.BoxGeometry(len, 0.06, 0.05), wood, 0, 0.78, 0));
  g.add(m(new THREE.BoxGeometry(len, 0.06, 0.05), wood, 0, 0.42, 0));
  return g;
}

export function makeBench() {
  const g = new THREE.Group();
  const wood = smat(0x9a7a4a);
  g.add(m(new THREE.BoxGeometry(1.8, 0.08, 0.5), wood, 0, 0.5, 0));
  g.add(m(new THREE.BoxGeometry(1.8, 0.38, 0.08), wood, 0, 0.88, -0.24));
  for (const sx of [-0.7, 0.7]) g.add(m(new THREE.BoxGeometry(0.1, 0.5, 0.42), smat(0x777770), sx, 0.25, 0));
  return g;
}

// うどん発祥の地 の石碑
export function makeMonument() {
  const g = new THREE.Group();
  g.add(m(new THREE.BoxGeometry(1.4, 0.35, 0.9), mat(0x8a857a), 0, 0.17, 0));
  const stone = m(new THREE.BoxGeometry(0.85, 1.7, 0.4), mat(0x77726a), 0, 1.15, 0);
  stone.castShadow = true;
  g.add(stone);
  g.add(m(new THREE.BoxGeometry(0.55, 1.2, 0.03), smat(0x5a554c), 0, 1.2, 0.21));
  return g;
}

export function makeAppleTree(seed = 0) {
  const g = new THREE.Group();
  const rnd = (n) => ((Math.sin(seed * 57.3 + n * 213.7) * 43758.5) % 1 + 1) % 1;
  const trunk = m(new THREE.CylinderGeometry(0.09, 0.16, 1.1, 6), smat(0x6a4a2e), 0, 0.55, 0);
  trunk.castShadow = true;
  g.add(trunk);
  const crown = m(new THREE.IcosahedronGeometry(1.05 + rnd(1) * 0.25, 1), smat(new THREE.Color().setHSL(0.3, 0.45, 0.27 + rnd(2) * 0.05)), 0, 1.75, 0);
  crown.scale.y = 0.9;
  crown.castShadow = true;
  g.add(crown);
  for (let i = 0; i < 6; i++) {
    const a = rnd(i + 3) * Math.PI * 2, ph = 0.4 + rnd(i + 9) * 2.2;
    g.add(m(new THREE.SphereGeometry(0.09, 6, 5), smat(0xc23b2e),
      Math.cos(a) * Math.sin(ph) * 1.0, 1.75 + Math.cos(ph) * 0.75, Math.sin(a) * Math.sin(ph) * 1.0));
  }
  return g;
}

// 十瓶山の窯あと (陶の焼きもの遺跡)
export function makeKamaato() {
  const g = new THREE.Group();
  // のぼり窯の石組み
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 1.2 - 0.6;
    const st = m(new THREE.DodecahedronGeometry(0.4, 0), mat(0x8a8378), Math.cos(a) * 1.6, 0.25, Math.sin(a) * 1.1);
    st.scale.set(1, 0.7, 0.8);
    st.rotation.y = i * 2.1;
    g.add(st);
  }
  g.add(m(new THREE.BoxGeometry(2.2, 0.3, 1.6), mat(0x77706a), 0, 0.12, 0));
  // われた かめ
  const pot = m(new THREE.CylinderGeometry(0.34, 0.24, 0.5, 8, 1, true), mat(0x9a6a4a, { side: THREE.DoubleSide }), 1.3, 0.24, 0.9);
  pot.rotation.z = 0.8;
  g.add(pot);
  g.add(m(new THREE.CylinderGeometry(0.26, 0.2, 0.34, 7, 1, true), mat(0xa87a52, { side: THREE.DoubleSide }), -1.1, 0.16, 1.1));
  // 立て札
  g.add(m(new THREE.BoxGeometry(0.08, 1, 0.08), smat(0x7a6248), -1.5, 0.5, 0.4));
  g.add(m(new THREE.BoxGeometry(0.9, 0.5, 0.06), smat(0xe8dfc8), -1.5, 1.1, 0.4));
  return g;
}

export function makePole() {
  const g = new THREE.Group();
  const gray = smat(0x8f8d84);
  const p = m(new THREE.CylinderGeometry(0.13, 0.19, 8.5, 7), gray, 0, 4.25, 0);
  p.castShadow = true;
  g.add(p);
  g.add(m(new THREE.BoxGeometry(2.6, 0.12, 0.12), gray, 0, 7.9, 0));
  g.add(m(new THREE.BoxGeometry(1.8, 0.1, 0.1), gray, 0, 7.2, 0));
  for (const sx of [-0.9, 0.9]) g.add(m(new THREE.CylinderGeometry(0.06, 0.06, 0.25, 5), smat(0xe8e4d8), sx, 8.05, 0));
  const trans = m(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 8), gray, 0.35, 6.6, 0);
  g.add(trans);
  return g;
}

export function makeStoneWall(len = 6) {
  const g = new THREE.Group();
  for (let x = 0; x < len; x += 0.75) {
    for (let y = 0; y < 2; y++) {
      const st = m(new THREE.DodecahedronGeometry(0.42, 0), mat(0x8d887c), x - len / 2 + (y % 2) * 0.3, 0.3 + y * 0.5, 0);
      st.scale.set(1, 0.72, 0.7);
      st.rotation.y = x * 2 + y;
      st.castShadow = true;
      g.add(st);
    }
  }
  return g;
}

export function makeVending() {
  const g = new THREE.Group();
  const body = m(new THREE.BoxGeometry(1.1, 1.9, 0.8), smat(0xd8dde2), 0, 0.95, 0);
  body.castShadow = true;
  g.add(body);
  g.add(m(new THREE.BoxGeometry(0.95, 0.85, 0.05), smat(0x35506b), 0, 1.45, 0.41));
  for (let i = 0; i < 4; i++) g.add(m(new THREE.BoxGeometry(0.16, 0.3, 0.06), smat([0xd84a3a, 0x3a7ad8, 0xe8b83a, 0x4aa858][i]), -0.32 + i * 0.21, 1.5, 0.44));
  g.add(m(new THREE.BoxGeometry(0.5, 0.3, 0.05), smat(0x2a2a2a), 0.2, 0.55, 0.41));
  return g;
}

export function makePostbox() {
  const g = new THREE.Group();
  const red = smat(0xc03a2a);
  g.add(m(new THREE.CylinderGeometry(0.16, 0.16, 0.9, 8), red, 0, 0.45, 0));
  g.add(m(new THREE.CylinderGeometry(0.34, 0.34, 0.8, 10), red, 0, 1.25, 0));
  g.add(m(new THREE.SphereGeometry(0.34, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), red, 0, 1.65, 0));
  g.add(m(new THREE.BoxGeometry(0.4, 0.05, 0.1), smat(0x2a2a2a), 0, 1.5, 0.3));
  return g;
}

export function makeBusStop() {
  const g = new THREE.Group();
  g.add(m(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6), smat(0x888880), 0, 1.2, 0));
  const sign = m(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 12), smat(0xe8e2d0), 0, 2.3, 0);
  sign.rotation.x = Math.PI / 2;
  g.add(sign);
  g.add(m(new THREE.CylinderGeometry(0.5, 0.55, 0.2, 8), mat(0x777770), 0, 0.1, 0));
  const bench = m(new THREE.BoxGeometry(1.8, 0.08, 0.45), smat(0x9a7a4a), 1.6, 0.5, 0);
  g.add(bench);
  for (const sx of [0.9, 2.3]) g.add(m(new THREE.BoxGeometry(0.1, 0.5, 0.4), smat(0x777770), sx, 0.25, 0));
  return g;
}

export function makeYatai(roofColor = 0xd8433b) {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ map: woodTex() });
  g.add(m(new THREE.BoxGeometry(2.6, 1, 1.4), wood, 0, 0.5, 0));
  g.add(m(new THREE.BoxGeometry(2.7, 0.08, 1.5), smat(0xead8b0), 0, 1.04, 0));
  for (const sx of [-1, 1]) g.add(m(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 5), wood, sx * 1.2, 1.2, 0));
  const roof = m(new THREE.BoxGeometry(3, 0.1, 2), smat(roofColor), 0, 2.45, 0);
  roof.rotation.z = 0.06;
  g.add(roof);
  const stripe = m(new THREE.BoxGeometry(3.02, 0.35, 2.02), smat(0xf5efe0), 0, 2.25, 0);
  g.add(stripe);
  return g;
}

export function makeChochin() {
  const g = new THREE.Group();
  const body = m(new THREE.SphereGeometry(0.24, 10, 8), new THREE.MeshLambertMaterial({ color: 0xffb84d, emissive: 0xd96b17, emissiveIntensity: 0 }));
  body.scale.y = 1.15;
  body.userData.lantern = true;
  g.add(body);
  g.add(m(new THREE.CylinderGeometry(0.11, 0.13, 0.07, 8), smat(0x222222), 0, 0.28, 0));
  g.add(m(new THREE.CylinderGeometry(0.13, 0.11, 0.07, 8), smat(0x222222), 0, -0.28, 0));
  return g;
}

export function makeTrain() {
  const g = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const car = new THREE.Group();
    car.position.x = i * 9.6;
    const body = m(new THREE.BoxGeometry(9, 2.4, 2.4), smat(0xf5f2e8), 0, 2, 0);
    body.castShadow = true;
    car.add(body);
    car.add(m(new THREE.BoxGeometry(9.04, 0.7, 2.44), smat(0xdfa53a), 0, 1.5, 0));
    car.add(m(new THREE.BoxGeometry(8.6, 0.35, 2.2), smat(0x8a887e), 0, 3.35, 0));
    for (let w = -1; w <= 1; w++) car.add(m(new THREE.BoxGeometry(1.6, 0.75, 2.46), smat(0x40606f), w * 2.7, 2.5, 0));
    for (const wx of [-3.2, 3.2]) car.add(m(new THREE.CylinderGeometry(0.4, 0.4, 2.2, 8), smat(0x333333), wx, 0.5, 0)).children.at(-1).rotation.x = Math.PI / 2;
    g.add(car);
  }
  return g;
}

export function makeStation() {
  const g = new THREE.Group();
  g.add(m(new THREE.BoxGeometry(16, 0.9, 3.4), mat(0xb2ab9e), 0, 0.45, 0));
  g.add(m(new THREE.BoxGeometry(16, 0.06, 0.3), smat(0xe8d84a), 0, 0.93, 1.4));
  const hut = makeHouse({ w: 6, d: 3.4, h: 2.6, roofC: '#6b4438', engawa: false });
  hut.position.set(0, 0.9, 0.2);
  hut.scale.setScalar(0.9);
  g.add(hut);
  const sign = m(new THREE.BoxGeometry(2.6, 0.8, 0.08), smat(0xf5f2ea), 5.5, 2.2, 1.2);
  g.add(sign);
  g.add(m(new THREE.BoxGeometry(0.1, 1.8, 0.1), smat(0x666660), 5.5, 1, 1.2));
  return g;
}

export function makeSignBoard(text, { bg = '#ffffff', fg = '#333333', w = 6, h = 1.4 } = {}) {
  const band = h / w; // 正方形キャンバスのうち看板に使う縦の帯
  const tex = canvasTex(256, (ctx, s) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = fg;
    ctx.font = `bold ${Math.floor(s * band * 0.72)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, s / 2, s / 2, s * 0.94);
  });
  tex.repeat.set(1, band);
  tex.offset.set(0, (1 - band) / 2);
  return new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshLambertMaterial({ map: tex }),
  );
}

export function makeMall() {
  const g = new THREE.Group();
  const W = 34, H = 7.5, D = 16;
  const body = m(new THREE.BoxGeometry(W, H, D), smat(0xf2ead8), 0, H / 2, 0);
  body.castShadow = true; body.receiveShadow = true;
  g.add(body);
  g.add(m(new THREE.BoxGeometry(W + 0.6, 0.7, D + 0.6), smat(0xd8cfb8), 0, H + 0.35, 0));
  // 正面ガラス入口 (+z が正面)
  g.add(m(new THREE.BoxGeometry(9, 4.2, 0.2), smat(0x9fc8d8, { emissive: 0x223840 }), 0, 2.1, D / 2 + 0.06));
  g.add(m(new THREE.BoxGeometry(10, 0.5, 2.4), smat(0xd84a8a), 0, 4.6, D / 2 + 1.1)); // ひさし
  for (const px of [-4.6, 4.6]) g.add(m(new THREE.BoxGeometry(0.24, 4.4, 0.24), smat(0x888880), px, 2.2, D / 2 + 2.1));
  // 横長ウィンドウ帯
  for (const sx of [-1, 1]) {
    g.add(m(new THREE.BoxGeometry(9, 1.6, 0.16), smat(0xa8c4d0), sx * 11.5, 3.2, D / 2 + 0.05));
  }
  const sign = makeSignBoard('あやがわモール', { bg: '#d84a8a', fg: '#ffffff', w: 13, h: 2 });
  sign.position.set(0, H - 1.4, D / 2 + 0.12);
  g.add(sign);
  // 屋上設備
  g.add(m(new THREE.BoxGeometry(4, 1.4, 3), smat(0xb8b4a8), -9, H + 1.4, -2));
  g.add(m(new THREE.BoxGeometry(2.6, 1, 2.4), smat(0xc4c0b4), 7, H + 1.2, 3));
  return g;
}

export function makeTownHall() {
  const g = new THREE.Group();
  const W = 13, H = 6.4, D = 8;
  const body = m(new THREE.BoxGeometry(W, H, D), smat(0xeef0ec), 0, H / 2, 0);
  body.castShadow = true; body.receiveShadow = true;
  g.add(body);
  g.add(m(new THREE.BoxGeometry(W + 0.4, 0.5, D + 0.4), smat(0xc8ccc4), 0, H + 0.25, 0));
  // 2階建ての窓グリッド (+z 正面)
  for (const wy of [2.1, 4.7]) {
    for (let i = -2; i <= 2; i++) {
      if (wy < 3 && i === 0) continue; // 1階中央は入口
      g.add(m(new THREE.BoxGeometry(1.6, 1.1, 0.12), smat(0x8fb4c4), i * 2.4, wy, D / 2 + 0.05));
    }
  }
  g.add(m(new THREE.BoxGeometry(2.2, 2.4, 0.16), smat(0x557080), 0, 1.2, D / 2 + 0.06)); // 入口ドア
  g.add(m(new THREE.BoxGeometry(3.6, 0.3, 1.8), smat(0xd8dcd4), 0, 2.6, D / 2 + 0.8)); // 庇
  const sign = makeSignBoard('あやがわちょう やくば', { bg: '#f4f4f0', fg: '#445544', w: 8, h: 1.3 });
  sign.position.set(0, H - 0.9, D / 2 + 0.1);
  g.add(sign);
  return g;
}

export function makeCar(color = 0xd0d4d8) {
  const g = new THREE.Group();
  const body = m(new THREE.BoxGeometry(3.6, 0.8, 1.7), smat(color), 0, 0.75, 0);
  body.castShadow = true;
  g.add(body);
  g.add(m(new THREE.BoxGeometry(2, 0.65, 1.5), smat(color), -0.2, 1.45, 0));
  g.add(m(new THREE.BoxGeometry(1.9, 0.5, 1.54), smat(0x506070), -0.2, 1.42, 0));
  for (const wx of [-1.2, 1.2]) {
    const wheel = m(new THREE.CylinderGeometry(0.32, 0.32, 1.8, 8), smat(0x2a2a2a), wx, 0.34, 0);
    wheel.rotation.x = Math.PI / 2;
    g.add(wheel);
  }
  return g;
}

// ---------- 人物 (まるっこい ちび姿) ----------
export function makePerson({ body = 0x4488cc, head = 0xf3cba4, hat = null, hair = 0x2a2018, scale = 1, elder = false } = {}) {
  const g = new THREE.Group();
  const parts = {};
  const skin = smat(head);

  const bodyM = m(new THREE.CapsuleGeometry(0.34, 0.42, 4, 10), smat(body), 0, 0.95, 0);
  bodyM.castShadow = true;
  g.add(bodyM); parts.body = bodyM;

  const headM = m(new THREE.SphereGeometry(0.4, 14, 12), skin, 0, 1.72, 0);
  headM.scale.set(1, 0.95, 0.95);
  headM.castShadow = true;
  g.add(headM); parts.head = headM;

  // 髪 (おかっぱ気味に頭を包む)
  const hairM = m(new THREE.SphereGeometry(0.42, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), smat(hair), 0, 1.76, -0.02);
  g.add(hairM);

  if (hat != null) {
    g.add(m(new THREE.SphereGeometry(0.43, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), smat(hat), 0, 1.84, 0));
    const brim = m(new THREE.CylinderGeometry(0.55, 0.58, 0.04, 14), smat(hat), 0, 1.88, 0.05);
    g.add(brim);
  }
  // 顔 (目・ほっぺ・にっこりした口。こわくならないよう、目は低め・口は必ずつける)
  const dark = smat(0x40342a);
  for (const sx of [-1, 1]) {
    if (elder) {
      // おとしよりは「にっこり細目」(下向きの弧)
      const eye = m(new THREE.TorusGeometry(0.062, 0.016, 5, 10, Math.PI * 0.75), dark, sx * 0.16, 1.665, 0.335);
      eye.rotation.z = Math.PI * 0.125;
      g.add(eye);
    } else {
      g.add(m(new THREE.SphereGeometry(0.052, 8, 6), dark, sx * 0.16, 1.69, 0.335));
      g.add(m(new THREE.SphereGeometry(0.016, 5, 4), smat(0xffffff), sx * 0.16 + 0.018, 1.705, 0.378));
    }
    g.add(m(new THREE.SphereGeometry(0.042, 6, 5), smat(0xf4b49c), sx * 0.245, 1.615, 0.295));
  }
  // 口 (上向きの弧 = ほほえみ)
  const mouth = m(new THREE.TorusGeometry(0.055, 0.014, 5, 10, Math.PI * 0.8), dark, 0, 1.60, 0.345);
  mouth.rotation.z = Math.PI + Math.PI * 0.1;
  g.add(mouth);

  const mkLimb = (r, h2, c, x, y) => {
    const geo = new THREE.CapsuleGeometry(r, h2, 3, 8);
    geo.translate(0, -h2 / 2, 0);
    const limb = m(geo, smat(c), x, y, 0);
    limb.castShadow = true;
    g.add(limb);
    return limb;
  };
  parts.armL = mkLimb(0.1, 0.42, head, -0.42, 1.3);
  parts.armR = mkLimb(0.1, 0.42, head, 0.42, 1.3);
  parts.legL = mkLimb(0.12, 0.4, 0x3a4a5e, -0.16, 0.52);
  parts.legR = mkLimb(0.12, 0.4, 0x3a4a5e, 0.16, 0.52);
  g.scale.setScalar(scale);
  return { group: g, parts };
}

export function makeBugMesh(spec) {
  const g = new THREE.Group();
  const s = spec.size;
  if (spec.spot === 'grass') { // チョウ
    const wingGeo = new THREE.BoxGeometry(s * 1.6, 0.02, s * 1.2);
    wingGeo.translate(s * 0.8, 0, 0);
    const wl = m(wingGeo, smat(spec.color), 0, 0, 0);
    wl.rotation.y = Math.PI;
    const wr = m(wingGeo.clone(), smat(spec.color));
    g.add(wl, wr);
    g.userData.wings = [wl, wr];
    g.add(m(new THREE.CapsuleGeometry(0.035, s * 0.8, 3, 6), smat(0x333333)).rotateX(Math.PI / 2));
  } else if (spec.spot === 'water') { // トンボ
    g.add(m(new THREE.CapsuleGeometry(0.035, s * 1.7, 3, 6), smat(spec.color)).rotateX(Math.PI / 2));
    const wing = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.45 });
    g.add(m(new THREE.BoxGeometry(s * 1.7, 0.02, 0.14), wing, 0, 0.03, -s * 0.3));
    g.add(m(new THREE.BoxGeometry(s * 1.5, 0.02, 0.14), wing, 0, 0.05, s * 0.1));
  } else { // 甲虫・セミ・ホタル
    const b = m(new THREE.SphereGeometry(s * 0.62, 8, 6), spec.glow
      ? new THREE.MeshLambertMaterial({ color: spec.color, emissive: 0xaaff55, emissiveIntensity: 0.9 })
      : smat(spec.color));
    b.scale.set(0.85, 0.5, 1.25);
    g.add(b);
    if (spec.id === 'kabuto') g.add(m(new THREE.CylinderGeometry(0.02, 0.03, s, 4), smat(0x2a1508), 0, s * 0.35, -s * 0.85));
    if (spec.id === 'nokogiri') {
      g.add(m(new THREE.BoxGeometry(0.04, 0.04, s * 0.6), smat(0x2a1508), -s * 0.2, 0, -s * 0.9));
      g.add(m(new THREE.BoxGeometry(0.04, 0.04, s * 0.6), smat(0x2a1508), s * 0.2, 0, -s * 0.9));
    }
  }
  return g;
}

// ---------- 道しるべ (子どもの字っぽい手描き看板) ----------
export function makeMichishirube(entries) {
  // entries: [{ text, side: -1(左向き)|1(右向き) }]
  const g = new THREE.Group();
  const post = m(new THREE.CylinderGeometry(0.07, 0.09, 2.0, 6), smat(0x7a6248), 0, 1.0, 0);
  post.castShadow = true;
  g.add(post);
  entries.forEach((e, i) => {
    const w = 1.7, h = 0.4;
    const tex = canvasTex(128, (ctx, s) => {
      ctx.fillStyle = '#efe6ce';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#4a3a28';
      ctx.font = `bold ${Math.floor(s * 0.30)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(e.text, s / 2, s / 2, s * 0.92);
    });
    tex.repeat.set(1, h / w);
    tex.offset.set(0, (1 - h / w) / 2);
    const boardMat = new THREE.MeshLambertMaterial({ map: tex });
    const y = 1.75 - i * 0.5;
    // 矢印のかたちに先端をとがらせた板 (板 + 三角)
    const board = m(new THREE.BoxGeometry(w, h, 0.06), boardMat, (e.side || 1) * 0.45, y, 0);
    board.castShadow = true;
    g.add(board);
    const tip = m(new THREE.ConeGeometry(h / 2 * 1.05, 0.32, 4), smat(0xefe6ce), (e.side || 1) * (0.45 + w / 2 + 0.14), y, 0);
    tip.rotation.z = (e.side || 1) * -Math.PI / 2;
    tip.rotation.y = Math.PI / 4;
    g.add(tip);
  });
  return g;
}

// ---------- 竹やぶのひみつきち (板ぎれと トタンの かたむいた小屋) ----------
export function makeHideout() {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#8a6a44') });
  const wood2 = new THREE.MeshLambertMaterial({ map: woodTex('#6e5236') });
  // かたむいた柱 4本
  for (const [px, pz, lean] of [[-1.1, -0.9, 0.06], [1.1, -0.9, -0.04], [-1.1, 0.9, 0.03], [1.1, 0.9, -0.06]]) {
    const post = m(new THREE.BoxGeometry(0.14, 1.9, 0.14), wood2, px, 0.95, pz);
    post.rotation.z = lean;
    post.castShadow = true;
    g.add(post);
  }
  // 板ぎれの壁 (すきまだらけ)
  for (let i = 0; i < 5; i++) {
    const p = m(new THREE.BoxGeometry(0.5, 1.5 + (i % 2) * 0.2, 0.05), i % 2 ? wood : wood2, -1.1 + 0.01, 0.8, -0.85 + i * 0.44);
    p.rotation.x = (i % 3 - 1) * 0.03;
    g.add(p);
  }
  for (let i = 0; i < 4; i++) {
    const p = m(new THREE.BoxGeometry(0.55, 1.4, 0.05), i % 2 ? wood2 : wood, -0.9 + i * 0.55, 0.75, -0.92);
    p.rotation.y = Math.PI / 2 + (i % 2 ? 0.04 : -0.05);
    g.add(p);
  }
  // トタン屋根 (ななめ)
  const roof = m(new THREE.BoxGeometry(2.9, 0.06, 2.5), smat(0x8a9298), 0, 1.95, 0);
  roof.rotation.z = 0.12;
  roof.castShadow = true;
  g.add(roof);
  // 波トタンのすじ
  for (let i = 0; i < 6; i++) {
    const rib = m(new THREE.BoxGeometry(2.9, 0.02, 0.06), smat(0x767e84), 0, 1.99 + i * 0.001, -1.05 + i * 0.42);
    rib.rotation.z = 0.12;
    g.add(rib);
  }
  // なかの宝もの: みかん箱の机 + かんづめ + ビー玉びん
  g.add(m(new THREE.BoxGeometry(0.7, 0.5, 0.5), wood, 0.2, 0.25, 0.1));
  g.add(m(new THREE.CylinderGeometry(0.09, 0.09, 0.14, 8), smat(0xb8b0a0), 0.05, 0.57, 0.05));
  g.add(m(new THREE.CylinderGeometry(0.07, 0.07, 0.2, 8), smat(0x88b8cc, { transparent: true, opacity: 0.7 }), 0.4, 0.6, 0.2));
  // 「ひみつきち たちいりきんし!」の板
  const tex = canvasTex(128, (ctx, s) => {
    ctx.fillStyle = '#d8cfb0';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#a03428';
    ctx.font = `bold ${Math.floor(s * 0.17)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('たちいり', s / 2, s * 0.42);
    ctx.fillText('きんし!!', s / 2, s * 0.62);
  });
  const kanban = m(new THREE.PlaneGeometry(0.8, 0.8), new THREE.MeshLambertMaterial({ map: tex }), 1.15, 0.9, 1.0);
  kanban.rotation.y = 0.4;
  g.add(kanban);
  return g;
}

// ---------- おはか (陶の山すその小さな墓地) ----------
export function makeGrave(seed = 0) {
  const g = new THREE.Group();
  const stone = mat(0x8a857c);
  const dark = mat(0x77726a);
  g.add(m(new THREE.BoxGeometry(0.9, 0.22, 0.9), dark, 0, 0.11, 0));
  g.add(m(new THREE.BoxGeometry(0.62, 0.3, 0.62), stone, 0, 0.35, 0));
  const pillar = m(new THREE.BoxGeometry(0.34, 1.0 + (seed % 3) * 0.12, 0.34), stone, 0, 1.0, 0);
  pillar.castShadow = true;
  g.add(pillar);
  // 花たて (お盆に花がはいる)
  for (const sx of [-0.26, 0.26]) g.add(m(new THREE.CylinderGeometry(0.05, 0.04, 0.16, 6), dark, sx, 0.55, 0.28));
  return g;
}

// ---------- 見晴らし台 (十瓶山の中腹。木の柵とベンチ) ----------
export function makeLookout() {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ map: woodTex('#8a6a44') });
  // ウッドデッキ
  const deck = m(new THREE.BoxGeometry(4.6, 0.18, 3.2), wood, 0, 0.09, 0);
  deck.receiveShadow = true;
  g.add(deck);
  // 柵 (北がわ = ながめのほう)
  for (let i = 0; i < 5; i++) g.add(m(new THREE.BoxGeometry(0.1, 0.9, 0.1), wood, -2.1 + i * 1.05, 0.55, -1.5));
  g.add(m(new THREE.BoxGeometry(4.5, 0.1, 0.1), wood, 0, 0.95, -1.5));
  g.add(m(new THREE.BoxGeometry(4.5, 0.08, 0.08), wood, 0, 0.6, -1.5));
  // ベンチ
  const bench = makeBench();
  bench.position.set(0.4, 0.16, 0.8);
  bench.rotation.y = Math.PI;
  g.add(bench);
  return g;
}
