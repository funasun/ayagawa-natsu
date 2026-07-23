import * as THREE from 'three';

// ぼくのなつやすみ風の「画づくり」ポストプロセス。
// 描いた画面を いったんテクスチャに焼き、
//   ① あかるい所を にじませる やわらかブルーム (夏の しめった 空気の光)
//   ② フィルム風カラーグレード (かげは 褪せた 暖色、ひかりは 金色、ゆるいコントラスト)
//   ③ ビネット + フィルム粒子
// を のせて 画面に もどす。追加ライブラリなし・全部 自前シェーダ。
//
// 色空間は「表示 (sRGB) 空間」で そのまま あつかう。sceneRT は トーンマップ済み・
// sRGB エンコード済みの 表示ピクセルを 保持し、以降は 素の値として 処理する。

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// あかるい所だけ 抜き出す (しきい値の やわらかい ロールオフ)
const BRIGHT_FRAG = `
  uniform sampler2D tDiffuse;
  uniform float threshold;
  uniform float knee;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb;
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    float b = smoothstep(threshold, threshold + knee, l);
    gl_FragColor = vec4(c * b, 1.0);
  }
`;

// 分離ガウシアン (9タップ)。dir で よこ / たて を きりかえる
const BLUR_FRAG = `
  uniform sampler2D tDiffuse;
  uniform vec2 dir;
  varying vec2 vUv;
  void main() {
    vec3 s = vec3(0.0);
    s += texture2D(tDiffuse, vUv + dir * -4.0).rgb * 0.0162;
    s += texture2D(tDiffuse, vUv + dir * -3.0).rgb * 0.0540;
    s += texture2D(tDiffuse, vUv + dir * -2.0).rgb * 0.1216;
    s += texture2D(tDiffuse, vUv + dir * -1.0).rgb * 0.1945;
    s += texture2D(tDiffuse, vUv               ).rgb * 0.2270;
    s += texture2D(tDiffuse, vUv + dir *  1.0).rgb * 0.1945;
    s += texture2D(tDiffuse, vUv + dir *  2.0).rgb * 0.1216;
    s += texture2D(tDiffuse, vUv + dir *  3.0).rgb * 0.0540;
    s += texture2D(tDiffuse, vUv + dir *  4.0).rgb * 0.0162;
    gl_FragColor = vec4(s, 1.0);
  }
`;

const COMP_FRAG = `
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float uBloom;
  uniform float uExposure;  // 全体の あかるさ
  uniform float uLift;      // かげを 褪せた 暖色に もちあげる 量
  uniform float uContrast;  // S字コントラストの つよさ
  uniform float uVignette;
  uniform vec3  uVigCol;
  uniform float uGrain;
  uniform float uSat;
  uniform float uWarm;    // 夕方など、暖色に よせる量 (0..1)
  uniform float uTime;
  uniform vec2  uRes;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  vec3 sat(vec3 c, float s) {
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    return mix(vec3(l), c, s);
  }

  void main() {
    vec3 col = texture2D(tScene, vUv).rgb;
    vec3 bl  = texture2D(tBloom, vUv).rgb;

    // ① ブルームを のせる (白とびを ほどよく おさえて にじませる)
    col += bl * uBloom * (1.0 - col * 0.35);

    // 露出
    col *= uExposure;
    float l = dot(col, vec3(0.299, 0.587, 0.114));

    // ② フィルム・グレード ---------------------------------
    // かげを 褪せた 暖色に もちあげる (黒を しめきらない = 古い写真の 味)
    col += vec3(0.055, 0.030, 0.014) * uLift * (1.0 - smoothstep(0.0, 0.5, l));
    // ひかりは 金いろに
    col *= mix(vec3(1.0), vec3(1.05, 1.01, 0.92), smoothstep(0.35, 1.0, l));
    // ゆるい S字コントラスト (黒は しめきらないよう 中心を もちあげぎみに)
    vec3 s = col * col * (3.0 - 2.0 * col);
    col = mix(col, s, uContrast);
    // 彩度: すこし ゆたかに (夏の みどり)
    col = sat(col, uSat);
    // 深い かげに ほんのり 青 (奥ゆき)
    col = mix(col, col * vec3(0.95, 0.99, 1.05), (1.0 - smoothstep(0.0, 0.32, l)) * 0.18);
    // 夕方は 画面全体を さらに 茜へ
    col *= mix(vec3(1.0), vec3(1.09, 0.98, 0.86), uWarm);

    // ③ ビネット (すみを 暖色に おとす) ------------------
    vec2 q = vUv - 0.5;
    q.x *= uRes.x / uRes.y;      // 画面比を 補正して まるい ビネットに
    float r = length(q);
    float vig = 1.0 - smoothstep(0.42, 1.05, r) * uVignette;
    col *= vig;
    col = mix(col, col * uVigCol, (1.0 - vig) * 0.5);

    // ④ フィルム粒子 -------------------------------------
    float g = hash(vUv * uRes + fract(uTime) * 431.0) - 0.5;
    col += g * uGrain;

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }
`;

export class PostFX {
  constructor(renderer, opts = {}) {
    this.renderer = renderer;
    this.enabled = true;
    this._res = new THREE.Vector2();
    this._texel = new THREE.Vector2();
    const { w, h } = this._drawSize();

    // 画面バッファ: トーンマップ + sRGB 済みの 表示ピクセルを 保持 (MSAA でジャギを のこす)
    this.sceneRT = new THREE.WebGLRenderTarget(w, h, {
      depthBuffer: true,
      stencilBuffer: false,
      samples: opts.samples != null ? opts.samples : 4,
    });
    this.sceneRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.sceneRT.texture.minFilter = THREE.LinearFilter;
    this.sceneRT.texture.magFilter = THREE.LinearFilter;

    // ブルーム用 (半解像度・素の値としてあつかう)
    const hw = Math.max(1, w >> 1), hh = Math.max(1, h >> 1);
    const halfOpt = { depthBuffer: false, stencilBuffer: false };
    this.rtA = new THREE.WebGLRenderTarget(hw, hh, halfOpt);
    this.rtB = new THREE.WebGLRenderTarget(hw, hh, halfOpt);
    for (const rt of [this.rtA, this.rtB]) {
      rt.texture.colorSpace = THREE.NoColorSpace;
      rt.texture.minFilter = THREE.LinearFilter;
      rt.texture.magFilter = THREE.LinearFilter;
    }
    this._texel.set(1 / hw, 1 / hh);

    // フルスクリーン矩形
    this.fsCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.fsScene = new THREE.Scene();
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
    this.quad.frustumCulled = false;
    this.fsScene.add(this.quad);

    this.brightMat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        threshold: { value: 0.58 },
        knee: { value: 0.32 },
      },
      vertexShader: VERT, fragmentShader: BRIGHT_FRAG,
      depthTest: false, depthWrite: false,
    });
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, dir: { value: new THREE.Vector2() } },
      vertexShader: VERT, fragmentShader: BLUR_FRAG,
      depthTest: false, depthWrite: false,
    });
    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        tBloom: { value: null },
        uBloom: { value: 0.75 },
        uExposure: { value: 1.08 },
        uLift: { value: 1.0 },
        uContrast: { value: 0.09 },
        uVignette: { value: 0.30 },
        uVigCol: { value: new THREE.Color(0xffcf94) },
        uGrain: { value: 0.035 },
        uSat: { value: 1.07 },
        uWarm: { value: 0.0 },
        uTime: { value: 0 },
        uRes: { value: this._res.clone() },
      },
      vertexShader: VERT, fragmentShader: COMP_FRAG,
      depthTest: false, depthWrite: false,
    });
    for (const m of [this.brightMat, this.blurMat, this.compMat]) m.toneMapped = false;
  }

  _drawSize() {
    this.renderer.getDrawingBufferSize(this._res);
    return { w: Math.max(1, Math.floor(this._res.x)), h: Math.max(1, Math.floor(this._res.y)) };
  }

  setSize() {
    const { w, h } = this._drawSize();
    const hw = Math.max(1, w >> 1), hh = Math.max(1, h >> 1);
    this.sceneRT.setSize(w, h);
    this.rtA.setSize(hw, hh);
    this.rtB.setSize(hw, hh);
    this._texel.set(1 / hw, 1 / hh);
    this.compMat.uniforms.uRes.value.set(w, h);
  }

  // 夕方の暖色よせ量を そとから わたす (0..1)
  setWarm(v) { this.compMat.uniforms.uWarm.value = v; }

  render(scene, camera, time) {
    const r = this.renderer;
    if (!this.enabled) {
      r.setRenderTarget(null);
      r.render(scene, camera);
      return;
    }
    const prevAutoClear = r.autoClear;
    r.autoClear = true;

    // 1) 3D を sceneRT へ
    r.setRenderTarget(this.sceneRT);
    r.render(scene, camera);

    // 2) あかるい所を 抜き出して 半解像度 rtA へ
    this.quad.material = this.brightMat;
    this.brightMat.uniforms.tDiffuse.value = this.sceneRT.texture;
    r.setRenderTarget(this.rtA);
    r.render(this.fsScene, this.fsCam);

    // 3) 分離ガウシアンを 2周 (だんだん ひろげて やわらかく)
    this.quad.material = this.blurMat;
    const tx = this._texel.x, ty = this._texel.y;
    const spreads = [1.25, 2.8];
    for (const s of spreads) {
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture;
      this.blurMat.uniforms.dir.value.set(tx * s, 0);
      r.setRenderTarget(this.rtB);
      r.render(this.fsScene, this.fsCam);

      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture;
      this.blurMat.uniforms.dir.value.set(0, ty * s);
      r.setRenderTarget(this.rtA);
      r.render(this.fsScene, this.fsCam);
    }

    // 4) 合成して 画面へ
    this.quad.material = this.compMat;
    this.compMat.uniforms.tScene.value = this.sceneRT.texture;
    this.compMat.uniforms.tBloom.value = this.rtA.texture;
    this.compMat.uniforms.uTime.value = time || 0;
    r.setRenderTarget(null);
    r.render(this.fsScene, this.fsCam);

    r.autoClear = prevAutoClear;
  }
}
