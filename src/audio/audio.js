// WebAudioですべて合成する環境音とSE (外部ファイル不要)
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.layers = {};
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.3;
    this.master.connect(this.ctx.destination);

    const noiseBuf = this.makeNoise();

    // セミ (昼)
    this.layers.cicada = this.noiseLayer(noiseBuf, 4800, 7, 26);
    // クマゼミ (朝)
    this.layers.kuma = this.noiseLayer(noiseBuf, 6300, 8, 13);
    // 雨
    this.layers.rain = this.noiseLayer(noiseBuf, 1000, 0.6, 0);
    // 台風の風
    this.layers.wind = this.noiseLayer(noiseBuf, 280, 0.8, 0.13);

    // ヒグラシ / スズムシ / まつり囃子 / ツクツクボウシ / カラスはパターン再生
    this.layers.higurashi = { gain: { value: 0 } };
    this.layers.cricket = { gain: { value: 0 } };
    this.layers.matsuri = { gain: { value: 0 } };
    this.layers.tsukutsuku = { gain: { value: 0 } };
    this.layers.crow = { gain: { value: 0 } };
    this._patternGains = { higurashi: 0, cricket: 0, matsuri: 0, tsukutsuku: 0, crow: 0 };

    setInterval(() => this.higurashiPhrase(), 4200);
    setInterval(() => this.cricketChirp(), 1200);
    setInterval(() => this.matsuriBeat(), 1900);
    setInterval(() => this.tsukutsukuPhrase(), 6500);
    setInterval(() => this.crowCaw(), 9000);
  }

  makeNoise() {
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  noiseLayer(buf, freq, q, tremHz) {
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const bp = this.ctx.createBiquadFilter();
    bp.type = freq > 2000 ? 'bandpass' : 'lowpass';
    bp.frequency.value = freq;
    bp.Q.value = q;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    src.connect(bp).connect(gain).connect(this.master);
    if (tremHz) {
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = tremHz;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.5;
      const dc = this.ctx.createGain();
      dc.gain.value = 0.5;
      lfo.connect(lfoGain);
      const mod = this.ctx.createGain();
      mod.gain.value = 0;
      lfoGain.connect(mod.gain);
      lfo.start();
    }
    src.start();
    return gain;
  }

  setLayer(name, target, ramp = 2) {
    if (!this.ctx) return;
    const l = this.layers[name];
    if (!l) return;
    if (l.gain && l.gain.setTargetAtTime) l.gain.setTargetAtTime(target, this.ctx.currentTime, ramp);
    else this._patternGains[name] = target;
  }

  // シーン更新: phase, weather, festival, lateSummer (8月後半はセミの主役が交代する)
  setScene({ phase, weather, festivalNight, lateSummer }) {
    if (!this.ctx) return;
    const raining = weather === 'rain' || weather === 'storm';
    const day = phase === 'day' || phase === 'morning';
    // 後半はアブラゼミのかべが うすくなって、ツクツクボウシが目立つ
    this.setLayer('cicada', !raining && day ? (lateSummer ? 0.09 : 0.16) : 0, 3);
    this.setLayer('kuma', !raining && phase === 'morning' && !lateSummer ? 0.12 : 0, 3);
    this.setLayer('rain', raining ? (weather === 'storm' ? 0.3 : 0.18) : 0, 1.5);
    this.setLayer('wind', weather === 'storm' ? 0.28 : 0, 2);
    this._patternGains.higurashi = !raining && phase === 'evening' ? 0.9 : 0;
    this._patternGains.cricket = !raining && phase === 'night' ? 0.4 : 0;
    this._patternGains.matsuri = festivalNight ? 0.5 : 0;
    this._patternGains.tsukutsuku = !raining && day && lateSummer ? 0.5 : 0;
    this._patternGains.crow = !raining && phase === 'evening' ? 0.6 : 0; // 夕方、とおくで カラスがなく
  }

  tone(freq, dur, { type = 'sine', vol = 0.2, when = 0, glide = null } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  noiseBurst(freq, dur, { vol = 0.25, when = 0, type = 'bandpass' } = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + when;
    const src = this.ctx.createBufferSource();
    src.buffer = this.makeNoise();
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  higurashiPhrase() {
    const v = this._patternGains.higurashi;
    if (!v || this.muted) return;
    // カナカナカナ…… (ちかくの声と、やまの ほうから こだまのように かえってくる声)
    for (let i = 0; i < 9; i++) {
      this.tone(3700 - i * 60, 0.1, { vol: 0.05 * v, when: i * 0.15 });
    }
    for (let i = 0; i < 7; i++) {
      this.tone(3450 - i * 55, 0.1, { vol: 0.022 * v, when: 1.9 + i * 0.16 });
    }
  }

  crowCaw() {
    const v = this._patternGains.crow;
    if (!v || this.muted || Math.random() < 0.35) return;
    // カァー…カァー (とおくの ねぐらへ かえっていく)
    const n = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < n; i++) {
      const w = i * (0.7 + Math.random() * 0.3);
      this.tone(760 + Math.random() * 60, 0.34, { type: 'sawtooth', vol: 0.016 * v, when: w, glide: 520 });
      this.noiseBurst(1400, 0.2, { vol: 0.012 * v, when: w });
    }
  }

  cricketChirp() {
    const v = this._patternGains.cricket;
    if (!v || this.muted) return;
    for (let i = 0; i < 3; i++) this.tone(4300, 0.05, { vol: 0.05 * v, when: i * 0.09 });
  }

  tsukutsukuPhrase() {
    const v = this._patternGains.tsukutsuku;
    if (!v || this.muted) return;
    // ツクツク…ボーシ! ×3 → ジー…
    for (let i = 0; i < 3; i++) {
      const t0 = i * 0.75;
      this.tone(3000, 0.06, { vol: 0.05 * v, when: t0 });
      this.tone(3000, 0.06, { vol: 0.05 * v, when: t0 + 0.12 });
      this.tone(3400, 0.3, { vol: 0.06 * v, when: t0 + 0.28, glide: 2700 });
    }
    this.tone(2900, 0.9, { vol: 0.03 * v, when: 2.4, glide: 2400 });
  }

  // 17:00の防災無線チャイム『夕焼け小焼け』(1923年・草川信。パブリックドメイン)
  chime() {
    if (!this.ctx || this.muted) return;
    // ソソラソ ミーソー / ミソラド' ラーソー (ゆっくり、とおくのスピーカーの音色で)
    const N = { E4: 329.6, G4: 392.0, A4: 440.0, C5: 523.3 };
    const seq = [
      ['G4', 0.5], ['G4', 0.5], ['A4', 0.5], ['G4', 0.5], ['E4', 1.0], ['G4', 1.4],
      ['E4', 0.5], ['G4', 0.5], ['A4', 0.5], ['C5', 0.5], ['A4', 1.0], ['G4', 1.6],
    ];
    let t = 0;
    for (const [n, d] of seq) {
      this.tone(N[n], d * 0.92, { type: 'triangle', vol: 0.07, when: t });
      this.tone(N[n] * 2, d * 0.92, { type: 'sine', vol: 0.02, when: t }); // うすいオクターブ上 = スピーカーのわれた感じ
      t += d * 0.62;
    }
  }

  matsuriBeat() {
    const v = this._patternGains.matsuri;
    if (!v || this.muted) return;
    // ドン ドン カッ
    this.tone(75, 0.3, { vol: 0.3 * v });
    this.tone(75, 0.3, { vol: 0.3 * v, when: 0.45 });
    this.noiseBurst(2500, 0.08, { vol: 0.12 * v, when: 0.9 });
    // 笛
    if (Math.random() < 0.4) this.tone(1560, 0.7, { vol: 0.04 * v, when: 0.3, glide: 1320 });
  }

  sfx(name) {
    if (!this.ctx || this.muted) return;
    switch (name) {
      case 'catch':
        this.tone(660, 0.12, { vol: 0.25 });
        this.tone(880, 0.2, { vol: 0.25, when: 0.1 });
        break;
      case 'flee':
        this.tone(900, 0.15, { glide: 300, vol: 0.12 });
        break;
      case 'splash':
        this.noiseBurst(800, 0.35, { vol: 0.2 });
        break;
      case 'bite':
        this.tone(1300, 0.08, { vol: 0.3 });
        this.tone(1300, 0.08, { vol: 0.3, when: 0.12 });
        break;
      case 'taiso':
        [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.22, { vol: 0.18, when: i * 0.2 }));
        break;
      case 'slurp':
        this.noiseBurst(600, 0.25, { vol: 0.18 });
        this.tone(300, 0.3, { glide: 700, vol: 0.1, when: 0.05 });
        break;
      case 'coin':
        this.tone(1000, 0.08, { type: 'square', vol: 0.1 });
        this.tone(1500, 0.18, { type: 'square', vol: 0.1, when: 0.08 });
        break;
      case 'suzu':
        this.tone(2500, 0.5, { type: 'triangle', vol: 0.15 });
        this.tone(3100, 0.4, { type: 'triangle', vol: 0.1, when: 0.03 });
        break;
      case 'boom':
        this.tone(60, 1.2, { vol: 0.4 });
        this.noiseBurst(400, 1, { vol: 0.2, type: 'lowpass' });
        break;
      case 'train':
        this.noiseBurst(200, 3, { vol: 0.15, type: 'lowpass' });
        this.tone(550, 0.6, { vol: 0.08, when: 0.4 });
        this.tone(440, 0.6, { vol: 0.08, when: 0.5 });
        break;
      case 'kane': {
        // お寺の鐘 (ゴーン……)。基音と ひずんだ倍音が ながく のこる
        const f0 = 146;
        [[f0, 4.5, 0.2], [f0 * 2.76, 3.2, 0.07], [f0 * 4.07, 1.8, 0.045], [f0 * 1.02, 4.2, 0.1]].forEach(([f, d, vl]) => {
          this.tone(f, d, { type: 'sine', vol: vl });
        });
        this.noiseBurst(500, 0.25, { vol: 0.06, type: 'lowpass' });
        break;
      }
      case 'sleep':
        [784, 659, 523].forEach((f, i) => this.tone(f, 0.5, { vol: 0.12, when: i * 0.35 }));
        break;
      case 'page':
        this.noiseBurst(3000, 0.12, { vol: 0.08 });
        break;
    }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.3;
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }
}
