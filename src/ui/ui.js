import { BUGS, FISH, youbi, calDay, WEATHER_LABEL } from '../data/data.js';
import { bugCount, fishCount } from '../core/state.js';
import { options, saveOptions } from '../core/options.js';
import { riverCenterZ, RIVER_HALF, POND, TOBIN, RAIL_PTS, roadDefs, BRIDGE_X, BRIDGE2_X, BRIDGE3_X, TOBIISHI_X } from '../world/world.js';

const WEATHER_ICON = { sunny: '☀', cloudy: '☁', rain: '🌧', storm: '🌀' };
const $ = (id) => document.getElementById(id);

export class UI {
  constructor(state, audio) {
    this.state = state;
    this.audio = audio;
    this.isTouch = matchMedia('(pointer: coarse)').matches;
    this.modalCount = 0;
    this.zukanOpen = false;
    this.settingsOpen = false;
    this.pauseOpen = false;
    this.mapOpen = false;
    this.guideText = '';
    this.els = {
      hud: $('hud'), prompt: $('prompt'), toasts: $('toasts'), fade: $('fade'),
      dialogue: $('dialogue'), dlgName: $('dlg-name'), dlgText: $('dlg-text'),
      choice: $('choice'), zukan: $('zukan'), map: $('map'), settings: $('settings'), pause: $('pause'), diary: $('diary'), title: $('title'), ending: $('ending'),
      note: $('daynote'), guide: $('guide'),
    };
  }

  get modal() { return this.modalCount > 0 || this.zukanOpen || this.settingsOpen || this.pauseOpen || this.mapOpen; }

  // ---------- やることガイド ----------
  setGuide(text) {
    if ((text || '') === this.guideText) return;
    this.guideText = text || '';
    this.els.guide.textContent = this.guideText;
    this.els.guide.classList.toggle('on', !!this.guideText);
  }

  // ---------- HUD ----------
  updateHUD(clock) {
    this.els.hud.style.display = 'flex';
    const d = clock.day;
    const cal = calDay(d);
    this.els.hud.innerHTML =
      `<span class="hud-date">8月${d}日 (${youbi(d)})</span>` +
      `<span class="hud-time">${clock.fmt()}</span>` +
      `<span class="hud-weather">${WEATHER_ICON[clock.weather]} ${clock.yudachi ? 'ゆうだち' : WEATHER_LABEL[clock.weather]}</span>`;
    this.els.note.textContent = cal.note || '';
    this.els.note.style.opacity = cal.note && clock.min < 480 ? 1 : 0;
  }

  showPrompt(label) {
    if (label) {
      this.els.prompt.textContent = `E ${label}`;
      this.els.prompt.classList.add('on');
    } else {
      this.els.prompt.classList.remove('on');
    }
  }

  toast(text, style) {
    const el = document.createElement('div');
    el.className = 'toast' + (style === 'gold' ? ' gold' : '');
    el.textContent = text;
    this.els.toasts.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 500);
    }, 3400);
  }

  // ---------- 会話 ----------
  say(name, lines) {
    return new Promise((resolve) => {
      this.modalCount++;
      const box = this.els.dialogue;
      this.els.dlgName.textContent = name;
      box.classList.add('on');
      let i = 0;
      const show = () => { this.els.dlgText.textContent = lines[i]; };
      const advance = (e) => {
        if (e.type === 'keydown' && !['KeyE', 'Space', 'Enter'].includes(e.code)) return;
        e.preventDefault();
        this.audio.sfx('page');
        i++;
        if (i >= lines.length) {
          window.removeEventListener('keydown', advance, true);
          window.removeEventListener('pointerdown', advance);
          box.classList.remove('on');
          setTimeout(() => { this.modalCount--; resolve(); }, 60);
        } else show();
      };
      show();
      setTimeout(() => {
        window.addEventListener('keydown', advance, true);
        // 会話ちゅうは ほかのボタンがぜんぶ かくれるので、画面のどこをタッチしても つぎへすすめる
        window.addEventListener('pointerdown', advance);
      }, 120);
    });
  }

  choice(text, options) {
    return new Promise((resolve) => {
      this.modalCount++;
      const box = this.els.choice;
      box.innerHTML = `<div class="choice-text">${text}</div>` +
        options.map((o, i) => `<button class="choice-btn" data-i="${i}">${o}</button>`).join('');
      box.classList.add('on');
      let sel = 0;
      const btns = [...box.querySelectorAll('.choice-btn')];
      const paint = () => btns.forEach((b, i) => b.classList.toggle('sel', i === sel));
      paint();
      const done = (i) => {
        window.removeEventListener('keydown', onKey, true);
        box.classList.remove('on');
        setTimeout(() => { this.modalCount--; resolve(i); }, 60);
      };
      const onKey = (e) => {
        e.preventDefault();
        if (e.code === 'ArrowUp' || e.code === 'KeyW') { sel = (sel + options.length - 1) % options.length; paint(); }
        if (e.code === 'ArrowDown' || e.code === 'KeyS') { sel = (sel + 1) % options.length; paint(); }
        if (['KeyE', 'Space', 'Enter'].includes(e.code)) done(sel);
        if (e.code === 'Escape') done(options.length - 1);
      };
      btns.forEach((b) => b.addEventListener('pointerdown', () => done(+b.dataset.i)));
      setTimeout(() => window.addEventListener('keydown', onKey, true), 120);
    });
  }

  // ---------- フェード ----------
  fade(dark, ms = 900) {
    return new Promise((resolve) => {
      this.els.fade.style.transitionDuration = ms + 'ms';
      this.els.fade.style.opacity = dark ? 1 : 0;
      setTimeout(resolve, ms + 30);
    });
  }

  async fadePulse() {
    this.modalCount++;
    await this.fade(true, 400);
    await new Promise((r) => setTimeout(r, 350));
    await this.fade(false, 400);
    this.modalCount--;
  }

  // ---------- ちず (子どもの手がき風マップ。カメラは常に -z を向くので 上=にし・右=きた) ----------
  toggleMap(playerPos) {
    this.mapOpen = !this.mapOpen;
    if (this.mapOpen) { this.renderMap(playerPos); this.els.map.classList.add('on'); this.audio.sfx('page'); }
    else this.els.map.classList.remove('on');
  }

  renderMap(playerPos) {
    this.els.map.innerHTML = `
      <div class="map-inner">
        <div class="map-head">🗾 あやがわちょうの ちず<span class="map-close">とじる [X]</span></div>
        <canvas width="860" height="580"></canvas>
      </div>`;
    this.els.map.querySelector('.map-close').addEventListener('pointerdown', () => this.toggleMap());
    const cv = this.els.map.querySelector('canvas');
    const ctx = cv.getContext('2d');
    const W = cv.width, H = cv.height;
    // 世界座標 (x: -232..232 / z: -148..148) → 画面 (右=+x, 上=-z)
    const px = (x) => ((x + 232) / 464) * (W - 60) + 30;
    const py = (z) => ((z + 148) / 296) * (H - 60) + 30;

    // 紙のじめん
    ctx.fillStyle = '#eee5c8';
    ctx.fillRect(0, 0, W, H);
    // 山のみどり (西のやまぎわ・綾上の丘・十瓶山・高鉢山)
    ctx.fillStyle = '#cfe0ae';
    const hill = (x, z, r) => { ctx.beginPath(); ctx.arc(px(x), py(z), r, 0, 7); ctx.fill(); };
    hill(-130, -118, 52); hill(-200, -120, 70); hill(-60, -165, 60); hill(60, -130, 46); hill(150, -110, 55);
    hill(TOBIN.x, TOBIN.z, 40); hill(-210, -40, 46); hill(-232, 40, 40); hill(210, 110, 44);

    // 田んぼ (滝宮・陶・棚田)
    ctx.fillStyle = '#d9e6a8';
    const paddy = (x, z, w, h) => ctx.fillRect(px(x) - w / 2, py(z) - h / 2, w, h);
    paddy(31, 61, 90, 46); paddy(103, 35, 62, 42); paddy(-135, -54, 42, 30);

    // 道 (roadDefs から)
    ctx.strokeStyle = '#d3bd8e'; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const rd of roadDefs) {
      ctx.lineWidth = Math.max(3, rd.w * 1.6);
      ctx.beginPath();
      rd.pts.forEach(([x, z], i) => (i ? ctx.lineTo(px(x), py(z)) : ctx.moveTo(px(x), py(z))));
      ctx.stroke();
    }

    // 綾川 (上流=みなみ -x から 下流=きた +x へ)
    ctx.strokeStyle = '#8fbdd8'; ctx.lineWidth = RIVER_HALF * 2 * 1.7;
    ctx.beginPath();
    for (let x = -232; x <= 232; x += 8) { const m = x === -232 ? 'moveTo' : 'lineTo'; ctx[m](px(x), py(riverCenterZ(x))); }
    ctx.stroke();
    // 北条池
    ctx.fillStyle = '#8fbdd8';
    ctx.beginPath(); ctx.arc(px(POND.x), py(POND.z), POND.r * 1.7, 0, 7); ctx.fill();

    // はし・とびいし
    ctx.fillStyle = '#a5713f';
    for (const bx of [BRIDGE_X, BRIDGE2_X, BRIDGE3_X]) ctx.fillRect(px(bx) - 4, py(riverCenterZ(bx)) - 13, 8, 26);
    ctx.fillStyle = '#9a948a';
    for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(px(TOBIISHI_X), py(riverCenterZ(TOBIISHI_X)) + (i - 1.5) * 6, 2.2, 0, 7); ctx.fill(); }

    // ことでんの線路
    ctx.strokeStyle = '#7a7268'; ctx.lineWidth = 4;
    ctx.beginPath();
    RAIL_PTS.forEach(([x, z], i) => (i ? ctx.lineTo(px(x), py(z)) : ctx.moveTo(px(x), py(z))));
    ctx.stroke();
    ctx.strokeStyle = '#f2ead2'; ctx.lineWidth = 2; ctx.setLineDash([7, 7]);
    ctx.beginPath();
    RAIL_PTS.forEach(([x, z], i) => (i ? ctx.lineTo(px(x), py(z)) : ctx.moveTo(px(x), py(z))));
    ctx.stroke();
    ctx.setLineDash([]);

    // めじるし
    const marks = [
      [113, 16, '🏠', 'ばあちゃんち'],
      [109, -10, '🚉', 'すえのえき'],
      [-21, -25, '🚉', 'たきのみやえき'],
      [0, -60, '⛩', 'てんまんぐう'],
      [-49, 63, '🏫', 'しょうがっこう'],
      [70, -34, '🛒', 'モール'],
      [-16, 25, '🍧', 'しょうてんがい'],
      [130, 78, '', 'ほうじょういけ'],
      [143, 20, '🪦', 'おはか'],
      [-135, -56, '', 'たなだ'],
      [-181, -6, '🍎', 'りんごえん'],
      [160, 61, '🌄', 'みはらしだい'],
      [21, 31, '🌻', 'ひまわり'],
      [-70, 42, '', 'こんぴらかいどう'],
    ];
    ctx.textAlign = 'center';
    for (const [x, z, icon, label] of marks) {
      if (icon) { ctx.font = '17px sans-serif'; ctx.fillStyle = '#000'; ctx.fillText(icon, px(x), py(z) + 5); }
      ctx.font = 'bold 11px sans-serif';
      ctx.strokeStyle = 'rgba(247,239,220,0.85)'; ctx.lineWidth = 3;
      ctx.strokeText(label, px(x), py(z) + 17);
      ctx.fillStyle = '#5a4a30';
      ctx.fillText(label, px(x), py(z) + 17);
    }
    // かわのなまえ
    ctx.font = 'bold 12px sans-serif'; ctx.fillStyle = '#4a7898';
    ctx.fillText('あ や が わ', px(-60), py(riverCenterZ(-60)) + 4);

    // ほういじしん (右=きた)
    ctx.font = 'bold 12px sans-serif'; ctx.fillStyle = '#8a7455';
    ctx.fillText('→ きた (すえ)', W - 70, 22);
    ctx.fillText('← みなみ (あやかみ)', 92, 22);

    // いまここ
    if (playerPos) {
      const gx = px(playerPos.x), gz = py(playerPos.z);
      ctx.beginPath(); ctx.arc(gx, gz, 7, 0, 7); ctx.fillStyle = '#e8503a'; ctx.fill();
      ctx.lineWidth = 2.5; ctx.strokeStyle = '#fff'; ctx.stroke();
      ctx.font = 'bold 12px sans-serif';
      ctx.strokeStyle = 'rgba(247,239,220,0.9)'; ctx.lineWidth = 4;
      ctx.strokeText('いま ここ!', gx, gz - 12);
      ctx.fillStyle = '#c03a28';
      ctx.fillText('いま ここ!', gx, gz - 12);
    }
  }

  // ---------- 図鑑 ----------
  toggleZukan() {
    this.zukanOpen = !this.zukanOpen;
    if (this.zukanOpen) { this.renderZukan('bugs'); this.els.zukan.classList.add('on'); this.audio.sfx('page'); }
    else this.els.zukan.classList.remove('on');
  }

  renderZukan(tab) {
    const s = this.state;
    const list = tab === 'bugs' ? BUGS : FISH;
    const got = tab === 'bugs' ? s.bugs : s.fish;
    const cells = list.map((item) => {
      const n = got[item.id] || 0;
      if (!n) return `<div class="zcell empty">???</div>`;
      return `<div class="zcell"><b>${item.name}</b><span class="zn">×${n}</span><small>${item.desc}</small></div>`;
    }).join('');
    const count = tab === 'bugs' ? bugCount(s) : fishCount(s);
    this.els.zukan.innerHTML = `
      <div class="zukan-inner">
        <div class="ztabs">
          <button class="ztab ${tab === 'bugs' ? 'sel' : ''}" data-t="bugs">むし ${bugCount(s)}/${BUGS.length}</button>
          <button class="ztab ${tab === 'fish' ? 'sel' : ''}" data-t="fish">さかな ${fishCount(s)}/${FISH.length}</button>
          <span class="zclose">とじる [Z]</span>
        </div>
        <div class="zgrid">${cells}</div>
        <div class="zfoot">ラジオたいそう ${s.stamps}かい ・ あさうどん ${s.udon}はい</div>
      </div>`;
    this.els.zukan.querySelectorAll('.ztab').forEach((b) =>
      b.addEventListener('pointerdown', () => this.renderZukan(b.dataset.t)));
    this.els.zukan.querySelector('.zclose').addEventListener('pointerdown', () => this.toggleZukan());
  }

  // ---------- ポーズ ----------
  togglePause() {
    this.pauseOpen = !this.pauseOpen;
    if (this.pauseOpen) {
      this.els.pause.innerHTML = `
        <div class="pause-inner">
          <div class="pause-big">⏸ ポーズちゅう</div>
          <div class="pause-sub">じかんは とまっとるよ。<br>ゆっくり きゅうけいしてな</div>
          <button class="pause-resume">つづける</button>
        </div>`;
      this.els.pause.querySelector('.pause-resume').addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.togglePause();
      });
      this.els.pause.classList.add('on');
      this.audio.sfx('page');
    } else {
      this.els.pause.classList.remove('on');
      this.audio.sfx('page');
    }
  }

  // ---------- せってい ----------
  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
    if (this.settingsOpen) { this.renderSettings(); this.els.settings.classList.add('on'); this.audio.sfx('page'); }
    else this.els.settings.classList.remove('on');
  }

  renderSettings() {
    const rows = [
      { key: 'sound', label: 'おと', desc: 'BGM と こうかおん (M キーでも きりかえ)' },
      { key: 'camBob', label: 'カメラのゆれ', desc: 'あるくときの じょうげのゆれ。よいやすいひとは OFF' },
    ];
    this.els.settings.innerHTML = `
      <div class="set-inner">
        <div class="set-head">せってい <span class="set-close">とじる</span></div>
        ${rows.map((r) => `
          <div class="set-row">
            <div class="set-label">${r.label}<small>${r.desc}</small></div>
            <button class="set-btn ${options[r.key] ? 'on' : ''}" data-k="${r.key}">${options[r.key] ? 'ON' : 'OFF'}</button>
          </div>`).join('')}
      </div>`;
    this.els.settings.querySelectorAll('.set-btn').forEach((b) =>
      b.addEventListener('pointerdown', () => {
        const k = b.dataset.k;
        options[k] = !options[k];
        saveOptions();
        if (k === 'sound') this.audio.setMuted(!options.sound);
        this.audio.sfx('page');
        this.renderSettings();
      }));
    this.els.settings.querySelector('.set-close').addEventListener('pointerdown', () => this.toggleSettings());
  }

  // ---------- 絵日記 ----------
  diaryText(clock) {
    const s = this.state;
    const cal = calDay(s.day);
    // 書きだし: 天気のことを子どもなりの言いかたで
    const intros = {
      sunny: ['きょうも すごく あつかった。', 'あさから セミが ワシワシ ないていた。', 'そらが まぶしいくらい はれていた。'],
      cloudy: ['きょうは くもり。ちょっとだけ すずしかった。', 'そらが ずっと ねずみいろだった。'],
      rain: ['きょうは あめ。かえるが おおよろこびで ないていた。', 'あめの おとを ききながら すごした。'],
      storm: ['きょうは たいふう! かぜが ゴーゴー いって、いえが ミシミシ いった。'],
    }[cal.weather];
    let intro = intros[s.day % intros.length];
    if (s.today.some((t) => t.includes('ゆうだちにあった'))) intro = 'きょうは とつぜん ゆうだちが きた。セミが いっせいに だまって、びっくりした。';
    // 本文: その日にしたことを、じゅんばんに
    let body;
    if (s.today.length === 0) {
      body = 'きょうは なんにも しなかった。でも、それも なつやすみだと おもう。';
    } else {
      const parts = s.today.slice(0, 5);
      const joins = ['それから、', 'あと、', 'それと、', 'そのあと、'];
      body = 'きょうは、' + parts[0] + '。' + parts.slice(1).map((t, i) => `${joins[i % joins.length]}${t}。`).join(' ');
    }
    // むすび: 日や出来事でかわる
    const closers = [
      'あしたは なにを しようかな。',
      'はやく あしたに ならないかな。',
      'おばあちゃんの ごはんは、なんで あんなに おいしいんだろう。',
      'とうきょうの ともだちは、いま なにしてるかな。',
      'ねるまえの むぎちゃが、いちばん おいしい きがする。',
    ];
    let closer = closers[s.day % closers.length];
    if (s.today.some((t) => t.includes('むしずもう') && t.includes('かった'))) closer = 'ケンタの よこづなに かった。ちょっと じまんの あいぼうだ。';
    if (s.today.some((t) => t.includes('ウナギ'))) closer = 'げんじいに はやく じまんしに いこう。';
    if (s.today.some((t) => t.includes('みずきり'))) closer = `いしは ひらたいのが いい。いまの きろくは ${s.mizukiri || 0}だんだ。`;
    if (s.today.some((t) => t.includes('すいかわりでいっぱつ'))) closer = 'めかくししてても わかった。すいかは においが するんだ。';
    if (s.today.some((t) => t.includes('かくれんぼ'))) closer = 'こんどは ぼくが かくれる ばんだ。ぜったい みつからない ばしょを かんがえておこう。';
    if (s.today.some((t) => t.includes('はなび'))) closer = 'せんこうはなびの ひだまは、おちるとき ちょっと さびしい。';
    if (s.today.some((t) => t.includes('ながれぼし'))) closer = 'ねがいごとは いえなかったけど、みられただけで いいことが ありそうだ。';
    if (s.today.some((t) => t.includes('はがき'))) closer = 'おかあさんの じで なまえを よばれると、なんだか くすぐったい。';
    if (s.today.some((t) => t.includes('むしクイズにぜんもん'))) closer = 'ミナの クイズに ぜんぶ こたえられた。ずかんは よんでおくものだ。';
    if (s.today.some((t) => t.includes('ゆうだちにあった'))) closer = 'ゆうだちの あとの つちの におい。あれが なつの においだと おもう。';
    if (s.today.some((t) => t.includes('にじをみた'))) closer = 'にじの ねもとには なにが あるんだろう。こんど ケンタと さがしに いこう。';
    if (s.today.some((t) => t.includes('ザリガニをつかまえた'))) closer = 'ザリガニの はさみは みかけだおしじゃ なかった。ちょっと いたかった。';
    if (s.today.some((t) => t.includes('ひみつきちのメンバー'))) closer = 'ひみつきちの ばしょは、ぜったいの ひみつだ。にっきにも かかない。……かいちゃった。';
    if (s.today.some((t) => t.includes('ひみつきちで'))) closer = 'きちに いると、なんでか ひみつの はなしが したくなる。';
    if (s.today.some((t) => t.includes('おはかまいり'))) closer = 'あったことのない ひいじいちゃんに、こころの なかで あいさつした。';
    if (s.today.some((t) => t.includes('むかえび'))) closer = 'けむりに のって かえってくるなんて、ちょっと かっこいいと おもった。';
    if (s.today.some((t) => t.includes('おくりび'))) closer = '「また らいねん」って ばあちゃんが いってた。わかれは かなしいだけじゃ ないんだ。';
    if (s.day >= 24 && s.day < 29) {
      const lateClosers = [
        'せみの こえが、すこし かわった きがする。',
        'カレンダーを みたら、のこりの ひにちを かぞえてしまった。',
        'ひぐらしの こえを きくと、なんで むねの おくが すーすーするんだろう。',
        'かえったら、ケンタや ミナと あそべなくなる。かんがえないように しよう。',
        'ゆうやけが きょうは やけに きれいだった。',
      ];
      closer = lateClosers[s.day % lateClosers.length];
    }
    if (s.today.some((t) => t.includes('ゆうひをめにやきつけた'))) closer = 'めを つぶると、さっきの ゆうやけが まだ みえる。「やきつける」って、こういうことか。';
    if (s.day >= 29 && s.day < 31) closer = 'なつやすみも あと すこしだ。なんだか むねが きゅっとする。';
    if (s.day === 30) closer = 'あしたで さいごだ。ぜったい わすれないぞ、この なつ。';
    if (cal.event === 'matsuri') closer = 'はなびが きれいだった。ずっと おぼえていたいな。';
    if (cal.event === 'hotaru' && s.today.some((t) => t.includes('ホタル') || t.includes('ボタル'))) closer = 'ホタルの ひかりが ゆめみたいだった。';
    return { header: `8月${s.day}日 (${youbi(s.day)}) ${WEATHER_LABEL[cal.weather]}`, text: `${intro} ${body} ${closer}` };
  }

  showDiary(clock) {
    return new Promise((resolve) => {
      this.modalCount++;
      const { header, text } = this.diaryText(clock);
      // 日記帳に保存 (2階の机で読み返せる)
      const s = this.state;
      if (!s.diary.some((d) => d.day === s.day)) s.diary.push({ day: s.day, header, text });
      this.els.diary.innerHTML = `
        <div class="diary-page">
          <div class="diary-head">${header}</div>
          <div class="diary-body">${text}</div>
          <div class="diary-next">— ${this.isTouch ? 'タッチ' : 'E'} で つぎのひへ —</div>
        </div>`;
      this.els.diary.classList.add('on');
      this.audio.sfx('sleep');
      const onKey = (e) => {
        if (!['KeyE', 'Space', 'Enter'].includes(e.code) && e.type === 'keydown') return;
        window.removeEventListener('keydown', onKey, true);
        this.els.diary.removeEventListener('pointerdown', onKey);
        this.els.diary.classList.remove('on');
        this.modalCount--;
        resolve();
      };
      setTimeout(() => {
        window.addEventListener('keydown', onKey, true);
        this.els.diary.addEventListener('pointerdown', onKey);
      }, 900);
    });
  }

  // ---------- 日記帳の読み返し (2階の机) ----------
  showDiaryBook() {
    return new Promise((resolve) => {
      this.modalCount++;
      const s = this.state;
      let i = s.diary.length - 1;
      const close = () => {
        window.removeEventListener('keydown', onKey, true);
        this.els.diary.classList.remove('on');
        setTimeout(() => { this.modalCount--; resolve(); }, 60);
      };
      const render = () => {
        const d = s.diary[i];
        this.els.diary.innerHTML = `
          <div class="diary-page">
            <div class="diary-head">${d.header}</div>
            <div class="diary-body">${d.text}</div>
            <div style="display:flex;gap:10px;justify-content:center;align-items:center;margin-top:16px;flex-wrap:wrap">
              <button class="choice-btn" data-n="-1" style="${i === 0 ? 'opacity:.35' : ''}">← まえのひ</button>
              <span style="opacity:.7">${i + 1} / ${s.diary.length}</span>
              <button class="choice-btn" data-n="1" style="${i === s.diary.length - 1 ? 'opacity:.35' : ''}">つぎのひ →</button>
              <button class="choice-btn" data-n="x">とじる</button>
            </div>
          </div>`;
        this.els.diary.querySelectorAll('button').forEach((b) =>
          b.addEventListener('pointerdown', (e) => {
            e.stopPropagation();
            if (b.dataset.n === 'x') return close();
            const ni = i + Number(b.dataset.n);
            if (ni >= 0 && ni < s.diary.length) { i = ni; this.audio.sfx('page'); render(); }
          }));
      };
      const onKey = (e) => {
        if (['KeyA', 'ArrowLeft'].includes(e.code) && i > 0) { i--; this.audio.sfx('page'); render(); }
        else if (['KeyD', 'ArrowRight'].includes(e.code) && i < s.diary.length - 1) { i++; this.audio.sfx('page'); render(); }
        else if (['KeyE', 'Escape', 'Enter', 'Space'].includes(e.code)) close();
        e.preventDefault();
      };
      render();
      this.els.diary.classList.add('on');
      setTimeout(() => window.addEventListener('keydown', onKey, true), 200);
    });
  }

  // ---------- ものがたりページ (オープニング・エンディング共用) ----------
  async showStory(pages) {
    this.modalCount++;
    this.els.ending.classList.add('on');
    for (const p of pages) {
      await new Promise((resolve) => {
        this.els.ending.innerHTML = `<div class="end-page">${p}<div class="diary-next">— ${this.isTouch ? 'タッチ' : 'E'} で つづく —</div></div>`;
        const onKey = (e) => {
          if (e.type === 'keydown' && !['KeyE', 'Space', 'Enter'].includes(e.code)) return;
          window.removeEventListener('keydown', onKey, true);
          this.els.ending.removeEventListener('pointerdown', onKey);
          resolve();
        };
        setTimeout(() => {
          window.addEventListener('keydown', onKey, true);
          this.els.ending.addEventListener('pointerdown', onKey);
        }, 900);
      });
      this.audio.sfx('page');
    }
    this.els.ending.classList.remove('on');
    this.modalCount--;
  }

  // ---------- タイトル ----------
  showTitle(hasSave) {
    return new Promise((resolve) => {
      this.modalCount++;
      this.els.title.innerHTML = `
        <div class="title-inner">
          <div class="title-sub">かがわけん あやがわちょう ものがたり</div>
          <h1 class="title-main">あやがわの夏</h1>
          <div class="title-menu">
            <button class="title-btn" data-a="new">はじめから</button>
            ${hasSave ? '<button class="title-btn" data-a="continue">つづきから</button>' : ''}
          </div>
          <div class="title-help">WASD/やじるし: あるく ・ Shift: はしる ・ E: しらべる/はなす ・ Z: ずかん ・ X: ちず ・ M: おと</div>
          <div class="title-note">クリックすると おとが でます</div>
        </div>`;
      this.els.title.classList.add('on');
      this.els.title.querySelectorAll('.title-btn').forEach((b) =>
        b.addEventListener('pointerdown', () => {
          this.audio.init();
          this.audio.sfx('catch');
          // スマホ: よこ画面すいしょう → フルスクリーン＋よこ向きロックを ためす (できない端末では回転案内にまかせる)
          if (this.isTouch) {
            try {
              const p = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
              if (p && p.then) {
                p.then(() => {
                  if (screen.orientation && screen.orientation.lock) return screen.orientation.lock('landscape');
                }).catch(() => {});
              }
            } catch { /* iOS Safari などは 非対応。CSSの回転オーバーレイで案内する */ }
          }
          this.els.title.classList.remove('on');
          this.modalCount--;
          resolve(b.dataset.a);
        }));
    });
  }

  // ---------- エンディング ----------
  async showEnding() {
    const s = this.state;
    this.modalCount++;
    const friends = Object.values(s.friend).filter((v) => v >= 3).length;
    const secrets = Object.keys(s.flags).filter((k) => k.startsWith('secret_')).length;
    const pages = [
      `8月31日。<br><br>ばあちゃんが 駅まで おくってくれた。<br>ことでんが ホームに すべりこんでくる。`,
    ];
    // なかよくなった みんなが、駅まで はしってくる
    const farewell = [];
    if ((s.friend.kenta || 0) >= 6) {
      farewell.push('「おーい!!」<br>ケンタが じてんしゃで つっこんできた。<br>「これ! よこづな つれてけ! 東京で さいきょうに なれ!!」<br>むしかごを おしつけて、はなを すすった。');
    } else if (s.flags.kentaPapa3) {
      farewell.push('ケンタが ホームの はしまで ならんで はしってきた。<br>「見おくりは なれとんねん! おれ、なかんぞ!!」<br><br>……うん。しっとる。ぼくも、なかない。');
    }
    if (s.flags.keyholderGiven) farewell.push('ミナが かばんを もちあげて みせた。<br>ことでんの キーホルダーが ゆれとる。<br>「ちゃんと つけとるけんね。……また来年、ぜったいやで」');
    if (s.flags.unagiTold) farewell.push('かいさつの むこうで、げんじいが つりざおを ふっとる。<br>「あやがわの主ー! 来年は わしが 釣るけんのー!」');
    if (farewell.length) pages.push(...farewell);
    pages.push(
      `「また おいでな」<br><br>ばあちゃんの こえが、セミのこえに まじって きこえた。<br>まどのそとで、あやがわの まちが ながれていく。`,
    );
    if (s.flags.rodStory) pages.push('ひざの うえには、しんぶんしに つつんだ<br>じいちゃんの つりざお。<br><br>「来年は その竿と しょうぶじゃ」<br>げんじいの こえが、まだ みみに のこっとる。');
    if (s.flags.bunshuDone) pages.push('かえったら、おかあさんに はなそう。<br><br>ぶんしゅうの こと。かっぱの こと。<br>おかあさんの なつやすみと、<br>ぼくの なつやすみの こと。');
    pages.push(
      `<div class="end-stats">
        <div>つかまえた むし …… ${bugCount(s)} しゅるい</div>
        <div>つった さかな …… ${fishCount(s)} しゅるい</div>
        <div>ラジオたいそう …… ${s.stamps} かい</div>
        <div>あさうどん …… ${s.udon} はい</div>
        <div>みつけた ひみつのばしょ …… ${secrets} かしょ</div>
        <div>みずきりの さいこうきろく …… ${s.mizukiri || 0} だん</div>
        <div>つかまえた ザリガニ …… ${s.zarigani || 0} ひき</div>
        <div>かきつづけた にっき …… ${s.diary.length} ページ</div>
        <div>なかよくなった ひと …… ${friends} にん</div>
      </div>`,
      `── それから、なんねんも たった。<br><br>おとなに なった いまでも、<br>8がつの ゆうがたに セミのこえを きくと、<br>あの なつの においが する。`,
      `ぼくは きっと、この なつを わすれない。<br><br><span class="end-title">あやがわの夏</span><br><br>― おわり ―`,
    );
    await this.showStory(pages);
    this.modalCount--;
  }
}
