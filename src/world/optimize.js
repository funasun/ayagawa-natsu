import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// シーン構築のさいごに1回だけ呼ぶ「描画の骨組み」最適化。見た目は変えずに:
//   ① うごかないメッシュの「色」を頂点カラーに焼きこみ、白い共有マテリアルに統一
//      (木1本ごとに微妙にちがう色も、ぜんぶ1つのマテリアルで描けるようになる)
//   ② そのうえで テクスチャ/質感ごとに ぬい合わせ、数千の描画コールを 数十に へらす
//   ③ フェードする建物 (オクルーダー) は「建物単位」で ぬい合わせ、専用マテリアルを もたせる
// さわらないもの: うごく物 (電車・ふうりん・せんたくもの・まつり一式・王冠マーカー・
// 屋内のばあちゃん・車窓のながめ)、水系、InstancedMesh、透明マテリアル、非表示の動体。
export function optimizeStatic(scene, world) {
  const stats = { meshBefore: 0, meshAfter: 0, groups: 0 };

  // ---- さわらない登録 ----
  const exSub = new Set([
    world.train, world.furin, world.capMarker,
    world.odoriGroup, world.festivalGroup, world.gakusaiGroup,
    world.trainRide && world.trainRide.group,
    world.interior && world.interior.baachan,
    ...(world.laundry || []),
    ...(world.ayu || []),
  ].filter(Boolean));
  const exMats = new Set([
    world.riverWaterMat, world.fallMat, world.foamMat,
    ...(world.sawaMats || []), ...(world.lanternMats || []),
  ].filter(Boolean));
  for (const oc of world.occluders) for (const m of oc.mats) exMats.add(m);

  const inExcluded = (o) => {
    for (let p = o; p; p = p.parent) {
      if (exSub.has(p) || p.userData.noMerge) return true;
      if (p.visible === false) return true; // 非表示 = あとで表示される動体かもしれない
    }
    return false;
  };

  // ぬい合わせ候補になれるか (色いがいの質感が グループのカギになる)
  const mergeKey = (o) => {
    const m = o.material;
    if (!m || Array.isArray(m)) return null;
    if (!m.isMeshLambertMaterial && !m.isMeshBasicMaterial) return null;
    if (m.transparent) return null; // 透明は 前後関係が くずれる (アルファ抜きは ぬってよい)
    return [
      m.type, m.map ? m.map.uuid : '', m.alphaTest || 0,
      m.bumpMap ? m.bumpMap.uuid : '', m.bumpScale ?? 1,
      m.emissive ? m.emissive.getHex() : 0, m.emissiveIntensity ?? 1,
      m.side, m.flatShading ? 1 : 0, m.fog === false ? 0 : 1,
      m.depthWrite ? 1 : 0, m.depthTest ? 1 : 0, m.blending, m.toneMapped ? 1 : 0,
      o.castShadow ? 1 : 0, o.receiveShadow ? 1 : 0, o.renderOrder,
    ].join('|');
  };

  // 色を頂点カラーへ焼きこみつつ、ワールド座標に直した ジオメトリを かえす
  const bake = (o) => {
    let g = o.geometry.clone();
    if (g.index) g = g.toNonIndexed();
    g.applyMatrix4(o.matrixWorld);
    if (!g.attributes.normal) g.computeVertexNormals();
    const n = g.attributes.position.count;
    const m = o.material;
    const col = new Float32Array(n * 3);
    const src = g.attributes.color; // 地面など、すでに頂点カラーがある場合は かけ合わせる
    for (let i = 0; i < n; i++) {
      col[i * 3] = m.color.r * (src ? src.getX(i) : 1);
      col[i * 3 + 1] = m.color.g * (src ? src.getY(i) : 1);
      col[i * 3 + 2] = m.color.b * (src ? src.getZ(i) : 1);
    }
    // 接地の くらがり (かんたんな 頂点AO): 地面に ちかい 頂点ほど すこし くらく → ものが 地面に「のる」
    // (地面の板・道・田んぼのような たいらで ひろい ものは のぞく)
    if (world.groundY && n < 20000) {
      g.computeBoundingBox();
      const bb = g.boundingBox;
      const hgt = bb.max.y - bb.min.y, ext = Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z) || 1;
      if (o.castShadow || hgt / ext > 0.05) {
        const pos = g.attributes.position;
        for (let i = 0; i < n; i++) {
          const h = pos.getY(i) - world.groundY(pos.getX(i), pos.getZ(i));
          const t = Math.min(1, Math.max(0, h / 1.6));
          const f = 0.62 + 0.38 * t * t * (3 - 2 * t);
          col[i * 3] *= f; col[i * 3 + 1] *= f; col[i * 3 + 2] *= f;
        }
      }
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    // マテリアルに テクスチャがなければ uv系は 捨てて 属性を そろえる
    if (!m.map) { g.deleteAttribute('uv'); if (g.attributes.uv1) g.deleteAttribute('uv1'); }
    else if (g.attributes.uv1) g.deleteAttribute('uv1');
    if (g.attributes.uv2) g.deleteAttribute('uv2');
    return g;
  };

  // グループの代表マテリアルから、白ベース+頂点カラーの共有マテリアルを つくる
  const groupMat = (m) => {
    const M = m.isMeshBasicMaterial ? THREE.MeshBasicMaterial : THREE.MeshLambertMaterial;
    const nm = new M({
      color: 0xffffff, vertexColors: true, map: m.map || null,
      side: m.side, flatShading: m.flatShading,
      fog: m.fog, depthWrite: m.depthWrite, depthTest: m.depthTest,
      blending: m.blending, toneMapped: m.toneMapped,
    });
    if (nm.emissive && m.emissive) { nm.emissive.copy(m.emissive); nm.emissiveIntensity = m.emissiveIntensity; }
    if (m.alphaTest) nm.alphaTest = m.alphaTest;
    if (m.bumpMap && nm.isMeshLambertMaterial) { nm.bumpMap = m.bumpMap; nm.bumpScale = m.bumpScale; }
    return nm;
  };

  const buildMerged = (entries, matOf) => {
    const out = [];
    for (const e of entries) {
      if (e.items.length < 1) continue;
      const g = mergeGeometries(e.items.map((o) => bake(o)), false);
      if (!g) continue;
      const mesh = new THREE.Mesh(g, matOf(e));
      mesh.castShadow = e.cast; mesh.receiveShadow = e.recv; mesh.renderOrder = e.ro;
      // アルファ抜きの 葉は、影も 葉の かたちに ぬく
      if (mesh.material.alphaTest > 0 && mesh.material.map) {
        mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: mesh.material.map, alphaTest: mesh.material.alphaTest });
      }
      mesh.matrixAutoUpdate = false;
      mesh.userData.noMerge = true;
      for (const o of e.items) o.removeFromParent();
      out.push(mesh);
      stats.groups++;
    }
    return out;
  };

  const collect = (root, filter) => {
    const map = new Map();
    const list = [];
    root.traverse((o) => list.push(o));
    for (const o of list) {
      if (!o.isMesh || o.isInstancedMesh) continue;
      if (!filter(o)) continue;
      const key = mergeKey(o);
      if (!key) continue;
      if (!map.has(key)) map.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, ro: o.renderOrder, items: [] });
      map.get(key).items.push(o);
    }
    return [...map.values()];
  };

  scene.updateMatrixWorld(true);
  scene.traverse((o) => { if (o.isMesh) stats.meshBefore++; });

  // ---- ③ オクルーダーを建物単位で ぬい合わせ (専用マテリアル = フェードが建物だけに効く) ----
  for (const oc of world.occluders) {
    if (!oc.obj || !oc.obj.isObject3D) continue;
    const entries = collect(oc.obj, (o) => !o.material.transparent);
    const total = entries.reduce((n, e) => n + e.items.length, 0);
    if (total < 2) continue;
    const newMats = [];
    const meshes = buildMerged(entries, (e) => {
      const m2 = groupMat(e.mat);
      exMats.add(m2);
      newMats.push(m2);
      return m2;
    });
    for (const mesh of meshes) scene.add(mesh);
    if (newMats.length) oc.mats = newMats; // フェード対象を さしかえ
  }

  // ---- ①② 全体の静的メッシュ (色ちがいも まとめて) ぬい合わせ ----
  const shared = new Map(); // 同じ質感の共有マテリアルは 1つを使いまわす
  const entries = collect(scene, (o) => !exMats.has(o.material) && !inExcluded(o));
  const meshes = buildMerged(entries, (e) => {
    const key = mergeKey({ material: e.mat, castShadow: e.cast, receiveShadow: e.recv, renderOrder: e.ro });
    if (!shared.has(key)) shared.set(key, groupMat(e.mat));
    return shared.get(key);
  });
  const mergedRoot = new THREE.Group();
  mergedRoot.name = 'staticMerged';
  for (const mesh of meshes) mergedRoot.add(mesh);
  scene.add(mergedRoot);

  let after = 0;
  scene.traverse((o) => { if (o.isMesh) after++; });
  stats.meshAfter = after;
  console.info(`[optimize] mesh ${stats.meshBefore}→${stats.meshAfter} / 結合グループ ${stats.groups}`);
  return stats;
}
