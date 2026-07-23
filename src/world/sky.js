import * as THREE from 'three';
import { smat } from './builders.js';

// 夕方 (16:50-19:30) は 金色 → 茜 → 薄紫 → 群青 と、ながく ていねいに 暮れていく
const KEYS = [
  [340, 0x2a3055], [370, 0xf7c98a], [430, 0xaed6ee], [720, 0x74bdf0],
  [950, 0x8ac4e8], [1010, 0xf2b968], [1055, 0xf08040], [1095, 0xd85a40],
  [1130, 0x9a5570], [1165, 0x4a3f75], [1210, 0x232a4d], [1290, 0x181e3c],
];
const WEATHER_MIX = { sunny: [0, 0], cloudy: [0.55, 0.25], rain: [0.78, 0.5], storm: [0.9, 0.65] };
const GRAY = new THREE.Color(0x93a1ab);
const DARK = new THREE.Color(0x4d565e);

function skyColorAt(min) {
  const c = new THREE.Color();
  for (let i = 0; i < KEYS.length - 1; i++) {
    const [t0, c0] = KEYS[i], [t1, c1] = KEYS[i + 1];
    if (min >= t0 && min <= t1) {
      c.set(c0).lerp(new THREE.Color(c1), (min - t0) / (t1 - t0));
      return c;
    }
  }
  return c.set(min < 340 ? 0x2a3055 : 0x181e3c);
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,250,235,1)');
  g.addColorStop(0.25, 'rgba(255,235,190,0.85)');
  g.addColorStop(0.6, 'rgba(255,215,150,0.25)');
  g.addColorStop(1, 'rgba(255,200,120,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function makeCumulus(seed) {
  const g = new THREE.Group();
  const m = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x9aa4b0, emissiveIntensity: 0.35 });
  const rnd = (n) => ((Math.sin(seed * 91.7 + n * 47.3) * 4375.8) % 1 + 1) % 1;
  const blobs = 9 + Math.floor(rnd(0) * 5);
  for (let i = 0; i < blobs; i++) {
    const r = 9 + rnd(i + 1) * 14 * (1 - i / blobs);
    const b = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), m);
    b.position.set((rnd(i + 2) - 0.5) * 44, i * 6.5 + rnd(i + 3) * 6, (rnd(i + 4) - 0.5) * 22);
    b.scale.y = 0.75;
    g.add(b);
  }
  return g;
}

export class Sky {
  constructor(scene) {
    this.scene = scene;

    // スカイドーム (上下グラデーション)
    this.uniforms = {
      topColor: { value: new THREE.Color(0x3f7fd0) },
      bottomColor: { value: new THREE.Color(0xaed6ee) },
      offset: { value: 10 },
      exponent: { value: 0.52 },
    };
    const domeMat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 topColor; uniform vec3 bottomColor; uniform float offset; uniform float exponent; varying vec3 vPos;
        void main(){ float h = normalize(vPos + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0); }`,
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(400, 24, 12), domeMat);
    this.dome.renderOrder = -10;
    scene.add(this.dome);

    this.hemi = new THREE.HemisphereLight(0xcfe4f2, 0x6a8248, 0.9);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffedd0, 1.8);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004;
    const cam = this.sun.shadow.camera;
    cam.left = -75; cam.right = 75; cam.top = 75; cam.bottom = -75; cam.far = 320;
    this.sunTarget = new THREE.Object3D();
    scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;
    scene.add(this.sun);

    // 太陽のグロー
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), transparent: true, depthWrite: false, fog: false }));
    this.glow.scale.setScalar(110);
    scene.add(this.glow);

    scene.fog = new THREE.Fog(0x9ecbe8, 110, 380);

    // 星
    const starGeo = new THREE.BufferGeometry();
    const sp = [];
    for (let i = 0; i < 400; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI * 0.45 + 0.12;
      const r = 360;
      sp.push(Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r, Math.sin(a) * Math.cos(e) * r);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffee, size: 1.2, transparent: true, opacity: 0, sizeAttenuation: false, fog: false }));
    scene.add(this.stars);

    // 月
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(7, 16, 12), new THREE.MeshBasicMaterial({ color: 0xf5f0d8, fog: false }));
    scene.add(this.moon);

    // 入道雲 (夏空の主役)
    this.cumulus = [];
    const spots = [[150, -270, 0], [-230, -200, 3], [260, -120, 6], [-120, 290, 9]];
    for (const [x, z, sd] of spots) {
      const cl = makeCumulus(sd);
      cl.position.set(x, 14, z);
      cl.scale.setScalar(1.15);
      scene.add(cl);
      this.cumulus.push(cl);
    }

    // ながれ雲
    this.clouds = new THREE.Group();
    for (let i = 0; i < 9; i++) {
      const cl = new THREE.Group();
      const cm = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.88, emissive: 0x8890a0, emissiveIntensity: 0.3 });
      for (let j = 0; j < 5; j++) {
        const b = new THREE.Mesh(new THREE.SphereGeometry(4.5 + ((j * 7 + i * 3) % 6), 8, 6), cm);
        b.position.set(j * 6.5 - 13, (j * 5 + i) % 3, ((j * 11 + i * 7) % 8) - 4);
        b.scale.y = 0.5;
        cl.add(b);
      }
      cl.position.set((i / 9) * 440 - 220, 62 + (i % 3) * 12, ((i * 53) % 240) - 120);
      this.clouds.add(cl);
    }
    scene.add(this.clouds);
  }

  update(clock, playerPos, dt) {
    const min = clock.min;
    const weather = clock.weather;
    const [grayMix, darkMix] = WEATHER_MIX[weather];
    const horizon = skyColorAt(min);
    if (grayMix) horizon.lerp(GRAY, grayMix);
    if (darkMix) horizon.lerp(DARK, darkMix * 0.6);

    const t = THREE.MathUtils.clamp((min - 350) / (1160 - 350), 0, 1);
    const sunDay = Math.max(0, Math.sin(t * Math.PI));
    const night = min > 1160 ? Math.min(1, (min - 1160) / 80) : Math.max(0, Math.min(1, (350 - min) / 40));

    // ドームの色
    const top = horizon.clone();
    if (night > 0.5) top.multiplyScalar(0.45);
    else top.lerp(new THREE.Color(0x2f6fc4), (0.4 + sunDay * 0.4) * (1 - grayMix * 0.7));
    this.uniforms.bottomColor.value.copy(horizon);
    // 真夏の地平線は白っぽく霞む
    if (night < 0.5) this.uniforms.bottomColor.value.lerp(new THREE.Color(0xeef5f4), sunDay * 0.5 * (1 - grayMix));
    this.uniforms.topColor.value.copy(top);
    this.dome.position.set(playerPos.x, 0, playerPos.z);

    const warm = THREE.MathUtils.clamp(1 - Math.abs(t - 0.9) * 4.5, 0, 1);
    const warmMorning = THREE.MathUtils.clamp(1 - Math.abs(t - 0.05) * 8, 0, 1) * 0.7;
    const w2 = Math.max(warm, warmMorning);

    // 夏の日中は とおくの山なみが 白く あたたかく 霞む (真夏の 遠景の ノスタルジー)。
    // 夕方は 茜色に とけて 霞む。
    const dayHaze = sunDay * (weather === 'sunny' ? 1 : weather === 'cloudy' ? 0.55 : weather === 'rain' ? 0.2 : 0.1);
    this.scene.fog.color.copy(horizon).lerp(new THREE.Color(0xf4ecd8), dayHaze * 0.5);
    this.scene.fog.near = (weather === 'storm' ? 40 : weather === 'rain' ? 65 : 110 - w2 * 45) - dayHaze * 12;
    this.scene.fog.far = (weather === 'storm' ? 180 : weather === 'rain' ? 240 : 380 - w2 * 90) - dayHaze * 70;

    // 太陽 6:00東 → 19:00西。夕方と朝は 低い光で 影が ながく のびる
    const az = Math.PI * (1 - t);
    const elev = Math.sin(t * Math.PI) * 1.15 + 0.05;
    this.sun.position.set(
      playerPos.x + Math.cos(az) * (80 + w2 * 40),
      Math.max(7, Math.sin(elev) * 90 * (1 - w2 * 0.62)),
      playerPos.z + 30,
    );
    this.sunTarget.position.copy(playerPos);
    const wLight = weather === 'storm' ? 0.25 : weather === 'rain' ? 0.4 : weather === 'cloudy' ? 0.7 : 1;
    this.sun.intensity = (0.7 + sunDay * 1.7 + w2 * 0.5) * wLight * (1 - night * 0.85);
    this.sun.color.setHSL(0.10 - w2 * 0.055, 0.5 + w2 * 0.4, 0.75 - w2 * 0.16);
    this.hemi.intensity = (0.62 + sunDay * 0.55) * (weather === 'storm' ? 0.5 : 1) * (1 - night * 0.5);
    this.hemi.color.copy(horizon).lerp(new THREE.Color(0xffffff), 0.45);
    this.hemi.groundColor.setHSL(0.22, 0.3, 0.22 + sunDay * 0.12);

    // 太陽グロー
    const sunDir = new THREE.Vector3(Math.cos(az) * 300, Math.sin(elev) * 260, 60);
    this.glow.position.copy(playerPos).add(sunDir);
    this.glow.material.opacity = sunDay * (1 - grayMix) * (0.55 + w2 * 0.45);
    const gs = 110 + w2 * 70;
    this.glow.scale.setScalar(gs);
    this.glow.material.color.setHSL(0.09 - w2 * 0.04, 0.8, 0.8 - w2 * 0.1);

    // 星と月
    this.stars.material.opacity = night * (weather === 'sunny' ? 0.9 : weather === 'cloudy' ? 0.3 : 0);
    this.moon.visible = night > 0.1;
    this.moon.position.set(playerPos.x - 150, 120, playerPos.z - 200);
    this.moon.material.color.setScalar(0.7 + night * 0.3);

    // 入道雲は昼だけ堂々と。夕方は 茜色に そまる
    const cloudTint = new THREE.Color(weather === 'sunny' ? 0xffffff : weather === 'cloudy' ? 0xd8dde0 : 0x8f979e);
    if (weather === 'sunny' || weather === 'cloudy') cloudTint.lerp(new THREE.Color(0xffa060), w2 * 0.75);
    for (const cl of this.cumulus) {
      cl.visible = weather !== 'storm';
      cl.traverse((o) => {
        if (o.material) {
          o.material.emissiveIntensity = 0.2 + sunDay * 0.25 + w2 * 0.3;
          o.material.color.copy(cloudTint);
          o.material.emissive.setHex(0x9aa4b0).lerp(new THREE.Color(0xff7a40), w2 * 0.8);
        }
      });
    }

    // ながれ雲
    const cloudOp = weather === 'sunny' ? 0.75 : 0.95;
    this.clouds.children.forEach((cl, i) => {
      cl.position.x += dt * (2 + (i % 3)) * (weather === 'storm' ? 6 : 1);
      if (cl.position.x > 240) cl.position.x = -240;
      cl.children.forEach((b) => {
        b.material.opacity = cloudOp * (1 - night * 0.65);
        b.material.color.copy(cloudTint);
      });
    });
  }
}
