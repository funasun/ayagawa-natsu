import { BUGS, FISH, youbi, calDay, WEATHER_LABEL } from '../data/data.js';
import { bugCount, fishCount } from '../core/state.js';
import { options, saveOptions } from '../core/options.js';
import { fsSupported, fsElement, toggleFullscreen } from '../core/fullscreen.js';
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
    this.tutorialOpen = false;
    this.guideText = '';
    this.els = {
      hud: $('hud'), prompt: $('prompt'), toasts: $('toasts'), fade: $('fade'),
      dialogue: $('dialogue'), dlgName: $('dlg-name'), dlgText: $('dlg-text'),
      choice: $('choice'), zukan: $('zukan'), map: $('map'), settings: $('settings'), pause: $('pause'), diary: $('diary'), title: $('title'), ending: $('ending'),
      note: $('daynote'), guide: $('guide'), tutorial: $('tutorial'),
    };
  }

  get modal() { return this.modalCount > 0 || this.zukanOpen || this.settingsOpen || this.pauseOpen || this.mapOpen || this.tutorialOpen; }

  // いま タッチ操作UI (スティック+ボタン) が表示されているか
  get touchUI() { return document.body.classList.contains('touch'); }

  // ---------- やることガイド ----------
  setGuide(text) {
    if ((text || '') === this.guideText) return;
    this.guideText = text || '';
    this.els.guide.textContent = this.guideText;
    this.els.guide.classList.toggle('on', !!this.guideText);
  }

  // ---------- HUD ----------
  updateHUD(clock, state) {
    this.els.hud.style.display = 'flex';
    const d = clock.day;
    const cal = calDay(d);
    this.els.hud.innerHTML =
      `<span class="hud-date">8月${d}日 (${youbi(d)})</span>` +
      `<span class="hud-time">${clock.fmt()}</span>` +
      `<span class="hud-weather">${WEATHER_ICON[clock.weather]} ${clock.yudachi ? 'ゆうだち' : WEATHER_LABEL[clock.weather]}</span>` +
      (state ? `<span class="hud-money">${state.money}えん</span>` : '');
    this.els.note.textContent = cal.note || '';
    this.els.note.style.opacity = cal.note && clock.min < 480 ? 1 : 0;
  }

  showPrompt(label) {
    if (label) {
      // タッチのときは「E」の代わりに、みぎしたの「しらべる」ボタンが光って知らせる
      this.els.prompt.textContent = this.touchUI ? label : `E ${label}`;
      this.els.prompt.classList.add('on');
      document.body.classList.add('can-act');
    } else {
      this.els.prompt.classList.remove('on');
      document.body.classList.remove('can-act');
    }
  }

  // ---------- そうさガイド (タッチ初回に自動表示 / せっていから再表示) ----------
  showTutorial() {
    return new Promise((resolve) => {
      this.tutorialOpen = true;
      document.body.classList.add('tutorial');
      const el = this.els.tutorial;
      const t = this.touchUI;
      const tap = t ? 'タップ' : 'クリック';
      const steps = t ? [
        { mark: 'tut-s1', html: '<b>あるく</b><br>↙ ひだりしたの まるに ゆびを おいて、いきたい ほうへ スライド。<br><small>そとまで ぐーっと たおすと はしれるよ</small>' },
        { mark: 'tut-s2', html: '<b>しらべる・はなす</b><br>ひとや ものに ちかづくと あんないが でて、↘「しらべる」ボタンが <b>きいろく ひかる</b>。ひかったら おそう。<br><small>はなす・むしとり・つり・かいもの、ぜんぶ この ボタン</small>' },
        { mark: '', html: '<b>カメラを まわす</b><br>ボタンの ない ところを よこに <b>ドラッグ</b>すると、まわりを ぐるっと 見まわせる。<br><small>スティック うえ = カメラの おくへ すすむよ</small>' },
        { mark: 'tut-s3', html: '<b>ずかん・ちず</b><br>↘「ずかん」で つかまえた むしと さかなの きろく、「ちず」で まちの ちずが みられる。<br><small>かいわは がめんの どこを タップしても すすむよ</small>' },
      ] : [
        { mark: '', html: '<b>あるく</b><br><b>WASD</b> か やじるしキーで あるく。<br><b>Shift</b> を おしながらだと はしれる。' },
        { mark: '', html: '<b>しらべる・はなす</b><br>ひとや ものに ちかづくと、したに あんないが でる。<br>そのとき <b>E キー</b>で しらべる・はなす。' },
        { mark: '', html: '<b>そのほか</b><br><b>Q / R</b> か 画面ドラッグで カメラを まわす<br><b>Z</b> ずかん / <b>X</b> ちず / <b>P</b> ポーズ / <b>M</b> おと' },
      ];
      let i = 0;
      const clearMarks = () => document.body.classList.remove('tut-s1', 'tut-s2', 'tut-s3');
      const render = () => {
        clearMarks();
        if (steps[i].mark) document.body.classList.add(steps[i].mark);
        el.innerHTML = `<div class="tut-bubble">${steps[i].html}` +
          `<div class="tut-next">${i === steps.length - 1 ? `${tap}して はじめる` : `${tap}で つぎへ ▼`}</div></div>`;
      };
      const advance = (e) => {
        if (e.type === 'keydown' && !['KeyE', 'Space', 'Enter'].includes(e.code)) return;
        e.preventDefault();
        this.audio.sfx('page');
        i++;
        if (i >= steps.length) {
          window.removeEventListener('pointerdown', advance);
          window.removeEventListener('keydown', advance, true);
          clearMarks();
          el.classList.remove('on');
          document.body.classList.remove('tutorial');
          setTimeout(() => { this.tutorialOpen = false; resolve(); }, 60);
        } else render();
      };
      render();
      el.classList.add('on');
      setTimeout(() => {
        window.addEventListener('pointerdown', advance);
        window.addEventListener('keydown', advance, true);
      }, 350);
    });
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
    // 全画面トグル (対応端末のみ。URLバーを消してよこ画面であそぶ)
    const fsRow = fsSupported() ? `
      <div class="set-row">
        <div class="set-label">ぜんがめん<small>URLバーを かくして よこ画面で あそぶ</small></div>
        <button class="set-btn ${fsElement() ? 'on' : ''}" data-fs="1">${fsElement() ? 'ON' : 'OFF'}</button>
      </div>` : '';
    this.els.settings.innerHTML = `
      <div class="set-inner">
        <div class="set-head">せってい <span class="set-close">とじる</span></div>
        ${rows.map((r) => `
          <div class="set-row">
            <div class="set-label">${r.label}<small>${r.desc}</small></div>
            <button class="set-btn ${options[r.key] ? 'on' : ''}" data-k="${r.key}">${options[r.key] ? 'ON' : 'OFF'}</button>
          </div>`).join('')}
        ${fsRow}
        <div class="set-row">
          <div class="set-label">そうさガイド<small>あそびかたの せつめいを もういちど みる</small></div>
          <button class="set-btn" data-tut="1">みる</button>
        </div>
      </div>`;
    this.els.settings.querySelectorAll('.set-btn[data-k]').forEach((b) =>
      b.addEventListener('pointerdown', () => {
        const k = b.dataset.k;
        options[k] = !options[k];
        saveOptions();
        if (k === 'sound') this.audio.setMuted(!options.sound);
        this.audio.sfx('page');
        this.renderSettings();
      }));
    const fsBtn = this.els.settings.querySelector('.set-btn[data-fs]');
    if (fsBtn) fsBtn.addEventListener('pointerdown', () => {
      toggleFullscreen(); // pointerdown 起点なので requestFullscreen が通る
      this.audio.sfx('page');
      setTimeout(() => { if (this.settingsOpen) this.renderSettings(); }, 120);
    });
    this.els.settings.querySelector('.set-btn[data-tut]').addEventListener('pointerdown', () => {
      this.toggleSettings(); // せっていを とじてから ガイドを ひらく
      this.showTutorial();
    });
    this.els.settings.querySelector('.set-close').addEventListener('pointerdown', () => this.toggleSettings());
  }

  // ---------- 絵日記 ----------
  // ---------- 絵日記の「え」 (その日の いちばんの できごとを クレヨンで) ----------
  diaryMotif(s) {
    const has = (k) => s.today.some((t) => t.includes(k));
    const cal = calDay(s.day);
    if (cal.event === 'matsuri' || has('はなび') || has('やたい')) return 'hanabi';
    if ((cal.event === 'hotaru' && (has('ホタル') || has('ボタル'))) || has('ホタル')) return 'hotaru';
    if (has('ながれぼし') || has('ほしぞら') || has('ゆうひをめにやきつけた')) return 'hoshi';
    if (has('ウナギ') || has('つり') || has('さかな') || has('ザリガニ')) return 'fishing';
    if (has('むしずもう') || has('カブト') || has('クワガタ') || has('むしとり') || has('セミ') || has('チョウ') || has('トンボ')) return 'bug';
    if (has('すいか')) return 'suika';
    if (has('かわであそんだ') || has('みずきり') || has('およ')) return 'kawa';
    if (has('こうしえん')) return 'radio';
    if (has('たいそう')) return 'taiso';
    if (has('おはかまいり') || has('むかえび') || has('おくりび')) return 'obon';
    return 'natsu';
  }

  diaryPicture(motif, day) {
    const W = 300, H = 190;
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    let seed = (day * 131 + motif.length * 37 + 7) % 233280;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const w = (n) => (rnd() - 0.5) * n; // てがきの ゆらぎ
    g.lineCap = 'round'; g.lineJoin = 'round';
    const line = (pts, color, width) => {
      g.strokeStyle = color; g.lineWidth = width; g.beginPath();
      pts.forEach((p, i) => { const x = p[0] + w(1.6), y = p[1] + w(1.6); i ? g.lineTo(x, y) : g.moveTo(x, y); });
      g.stroke();
    };
    const circle = (x, y, r, color) => { g.fillStyle = color; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };
    const shape = (pts, color) => { g.fillStyle = color; g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath(); g.fill(); };
    const daySky = (a, b) => { const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, a || '#8fd0f0'); grd.addColorStop(1, b || '#dff2ec'); g.fillStyle = grd; g.fillRect(0, 0, W, H); };
    const nightSky = () => { const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#0f1f40'); grd.addColorStop(1, '#3a2a56'); g.fillStyle = grd; g.fillRect(0, 0, W, H); for (let i = 0; i < 45; i++) circle(rnd() * W, rnd() * H * 0.78, rnd() * 1.2 + 0.3, `rgba(255,255,240,${0.4 + rnd() * 0.6})`); };
    const sun = (x, y) => { circle(x, y, 15, '#ffd83a'); g.strokeStyle = '#ffcc2a'; g.lineWidth = 3; for (let i = 0; i < 8; i++) { const a = i / 8 * 6.28; g.beginPath(); g.moveTo(x + Math.cos(a) * 19, y + Math.sin(a) * 19); g.lineTo(x + Math.cos(a) * 27, y + Math.sin(a) * 27); g.stroke(); } };
    const cloud = (x, y) => { g.fillStyle = '#fff'; circle(x, y, 11, '#fff'); circle(x + 13, y + 3, 14, '#fff'); circle(x + 28, y, 11, '#fff'); g.fillRect(x, y, 28, 12); };
    const ground = (color, y) => { g.fillStyle = color; g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= W; x += 22) g.lineTo(x, y + w(4)); g.lineTo(W, H); g.lineTo(0, H); g.closePath(); g.fill(); };

    if (motif === 'hanabi') {
      nightSky();
      ground('#20202e', 158);
      [130, 168].forEach((x) => { line([[x, 158], [x, 84]], '#7a4a2c', 4); }); // やぐら
      g.fillStyle = '#d24b3a'; g.fillRect(120, 74, 58, 12);
      const burst = (x, y, col) => { for (let i = 0; i < 12; i++) { const a = i / 12 * 6.28; line([[x, y], [x + Math.cos(a) * 22, y + Math.sin(a) * 22]], col, 2); circle(x + Math.cos(a) * 24, y + Math.sin(a) * 24, 2, col); } };
      burst(72, 54, '#ff6b8a'); burst(210, 44, '#ffe066'); burst(150, 96, '#7ad0ff');
    } else if (motif === 'hotaru') {
      nightSky();
      shape([[0, 190], [0, 118], [70, 78], [140, 120], [140, 190]], '#123320');
      shape([[150, 190], [150, 130], [230, 92], [300, 128], [300, 190]], '#0e2a1a');
      for (let i = 0; i < 20; i++) { const x = 40 + rnd() * 230, y = 70 + rnd() * 100; circle(x, y, 5.5, 'rgba(180,255,120,0.28)'); circle(x, y, 2.4, 'rgba(210,255,150,0.95)'); }
    } else if (motif === 'hoshi') {
      const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#132b58'); grd.addColorStop(1, '#c96a4a'); g.fillStyle = grd; g.fillRect(0, 0, W, H);
      for (let i = 0; i < 40; i++) circle(rnd() * W, rnd() * H * 0.6, rnd() * 1.2 + 0.3, 'rgba(255,255,240,0.9)');
      line([[60, 40], [130, 72]], '#fff', 2); circle(60, 40, 2.5, '#fff'); // ながれ星
      ground('#2a2434', 150);
    } else if (motif === 'fishing') {
      daySky(); sun(44, 34); cloud(200, 30);
      g.fillStyle = '#4aa6d6'; g.fillRect(0, 116, W, H - 116);
      ground('#6fae4a', 118);
      line([[64, 62], [150, 112]], '#8a5a2a', 3); line([[150, 112], [150, 138]], '#eef', 1.4);
      circle(150, 142, 6, '#e0662f'); // うき
      shape([[206, 128], [232, 118], [244, 130], [230, 138]], '#cdd9e0'); circle(214, 126, 2, '#333'); // はねる魚
      line([[150, 116], [150, 108]], '#cdeefb', 2);
    } else if (motif === 'bug') {
      daySky(); sun(250, 34); cloud(38, 28); ground('#7ec24f', 132);
      shape([[62, 132], [70, 58], [86, 58], [82, 132]], '#7a4a22'); // 幹
      circle(80, 52, 33, '#4e9e3e'); circle(54, 60, 22, '#57ab45'); circle(106, 60, 22, '#57ab45');
      circle(72, 100, 11, '#241610'); circle(72, 88, 7, '#241610'); line([[72, 84], [72, 72]], '#241610', 3); line([[72, 84], [66, 74]], '#241610', 3); // カブトのつの
      line([[150, 138], [182, 78]], '#a06a2c', 4); g.strokeStyle = 'rgba(255,255,255,0.55)'; g.lineWidth = 2; g.beginPath(); g.arc(186, 70, 15, 0, 7); g.stroke(); // あみ
    } else if (motif === 'suika') {
      daySky(); sun(42, 30); cloud(210, 32); ground('#7ec24f', 138);
      g.fillStyle = '#e4edf2'; g.fillRect(84, 136, 132, 18); // ござ
      g.fillStyle = '#2e7d32'; g.beginPath(); g.arc(150, 138, 30, Math.PI, 0); g.fill();
      g.fillStyle = '#ea4b5a'; g.beginPath(); g.arc(150, 138, 23, Math.PI, 0); g.fill();
      for (let i = 0; i < 6; i++) circle(128 + i * 9, 128 + w(6), 2, '#241610'); // たね
    } else if (motif === 'kawa') {
      daySky(); sun(252, 30); cloud(40, 30);
      g.fillStyle = '#5bb0da'; g.fillRect(0, 108, W, H - 108);
      ground('#6fae4a', 110);
      for (let i = 0; i < 6; i++) circle(28 + i * 46, 132 + w(10), 7, '#9a8f7a'); // 石
      line([[150, 108], [150, 88]], '#cdeefb', 2); line([[144, 104], [134, 90]], '#cdeefb', 2); line([[156, 104], [166, 90]], '#cdeefb', 2); // しぶき
    } else if (motif === 'radio') {
      daySky('#9fd8f2', '#eaf6e6'); ground('#8fbf5a', 150);
      g.fillStyle = '#b5763b'; g.fillRect(96, 78, 100, 62); g.fillStyle = '#8a5730'; g.fillRect(96, 78, 100, 8);
      g.fillStyle = '#2e2018'; g.beginPath(); g.arc(130, 112, 17, 0, 7); g.fill();
      circle(178, 98, 5, '#eee'); circle(178, 124, 5, '#eee');
      g.strokeStyle = '#fff'; g.lineWidth = 2; [16, 26, 36].forEach((r) => { g.beginPath(); g.arc(200, 96, r, -0.6, 0.6); g.stroke(); });
      line([[186, 78], [216, 50]], '#777', 2); // アンテナ
    } else if (motif === 'taiso') {
      daySky('#bfe6f5', '#f3eecf'); sun(244, 30); ground('#8fbf5a', 142);
      const px = 146; circle(px, 78, 8, '#f0c090'); line([[px, 86], [px, 116]], '#3a6ea5', 5);
      line([[px, 94], [px - 18, 70]], '#f0c090', 4); line([[px, 94], [px + 18, 70]], '#f0c090', 4); // ばんざい
      line([[px, 116], [px - 11, 142]], '#333', 4); line([[px, 116], [px + 11, 142]], '#333', 4);
      g.fillStyle = '#c46'; g.fillRect(70, 108, 22, 32); circle(81, 100, 7, '#241610'); // ラジオ台
    } else if (motif === 'obon') {
      daySky('#a9c6e0', '#e7ddc6'); sun(246, 30); ground('#8aa86a', 142);
      g.fillStyle = '#9a9a9a'; g.fillRect(132, 88, 30, 56); g.fillStyle = '#7a7a7a'; g.fillRect(122, 140, 50, 8);
      circle(114, 138, 5, '#e55d6a'); circle(180, 138, 5, '#e55d6a'); // 花
      line([[147, 88], [152, 60], [143, 40]], 'rgba(210,210,210,0.75)', 3); // けむり
    } else {
      daySky(); sun(252, 34); cloud(38, 26); cloud(150, 40); ground('#7ec24f', 138);
      g.fillStyle = '#ead9b2'; g.fillRect(56, 96, 72, 46);
      shape([[50, 96], [92, 66], [134, 96]], '#b5563a'); // やね
      g.fillStyle = '#7a4a2a'; g.fillRect(84, 118, 18, 24); // ドア
      g.fillStyle = '#bfe3ff'; g.fillRect(110, 104, 14, 14); // まど
      line([[210, 142], [210, 96]], '#3f8f3f', 4);
      for (let i = 0; i < 10; i++) { const a = i / 10 * 6.28; circle(210 + Math.cos(a) * 15, 90 + Math.sin(a) * 15, 4.5, '#ffcf3a'); }
      circle(210, 90, 11, '#f0b400'); circle(210, 90, 6, '#7a4a1a'); // ひまわり
    }
    // クレヨンらしい ふちどり
    g.strokeStyle = 'rgba(60,50,34,0.35)'; g.lineWidth = 3; g.strokeRect(2, 2, W - 4, H - 4);
    return cv.toDataURL('image/png');
  }

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
    // 物語の弧: その日 すすんだ できごとを むすびに
    if (s.today.some((t) => t.includes('つりざお'))) closer = 'あったことのない じいちゃんの つりざお。にぎると、なんだか せなかが しゃんとする。';
    if (s.today.some((t) => t.includes('げんじいに じいちゃんの 竿'))) closer = 'げんじいの 30ねんは、ゆめじゃなくて やくそくだった。しょうぶは、まだ おわってない。';
    if (s.today.some((t) => t.includes('がっきゅうぶんしゅう'))) closer = 'おかあさんにも、ぼくと おなじ なつやすみが あったんだ。かえったら、はなそう。';
    if (s.today.some((t) => t.includes('かわであそんだ'))) closer = 'みずの つめたさと、いしの あたたかさ。なつは、からだで おぼえるものだと おもう。';
    if (s.today.some((t) => t.includes('こうしえん'))) closer = 'ラジオの むこうで、しらない せんしゅたちが ないていた。なつは、だれにとっても みじかい。';
    if (s.today.some((t) => t.includes('とうちゃんを、いっしょに 見おくった'))) closer = 'ケンタは あめのせいだって いってた。……ぼくも、みてないことにした。';
    if (s.today.some((t) => t.includes('とうちゃんが お盆で'))) closer = 'ケンタが あんなに うれしそうな かお、はじめて みた。おぼんって、いいな。';
    if (s.today.some((t) => t.includes('せがれが まつり'))) closer = 'つがなくても、まつりの ばんに ならんで 立てたら いい。げんさんの ことばが のこってる。';
    if (s.today.some((t) => t.includes('ユキちゃんの はなし'))) closer = 'ミナの ともだちは、とおくへ いってしまった。ぼくも、もうすぐ とおくへ かえる。';
    if (s.today.some((t) => t.includes('ユキちゃんから てがみ'))) closer = 'はなれても ともだち。ひまわりが、そのしるし。……ぼくにも、そんなの できるかな。';
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
      const motif = this.diaryMotif(s);
      if (!s.diary.some((d) => d.day === s.day)) s.diary.push({ day: s.day, header, text, motif });
      const pic = this.diaryPicture(motif, s.day);
      this.els.diary.innerHTML = `
        <div class="diary-page">
          <div class="diary-head">${header}</div>
          <img class="diary-pic" src="${pic}" alt="えにっき">
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
        const pic = this.diaryPicture(d.motif || 'natsu', d.day);
        this.els.diary.innerHTML = `
          <div class="diary-page">
            <div class="diary-head">${d.header}</div>
            <img class="diary-pic" src="${pic}" alt="えにっき">
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
    else if (s.flags.minaYuki2) farewell.push('ミナが ホームまで はしってきた。<br>「たね、うえてや。ぜったいやで」<br>したを むいて、それだけ いうと、<br>くるっと せなかを むけて はしっていった。');
    if (s.flags.unagiTold) farewell.push('かいさつの むこうで、げんじいが つりざおを ふっとる。<br>「あやがわの主ー! 来年は わしが 釣るけんのー!」');
    if (farewell.length) pages.push(...farewell);
    pages.push(
      `「また おいでな」<br><br>ばあちゃんの こえが、セミのこえに まじって きこえた。<br>まどのそとで、あやがわの まちが ながれていく。`,
    );
    if (s.flags.rodStory) pages.push('ひざの うえには、しんぶんしに つつんだ<br>じいちゃんの つりざお。<br><br>「来年は その竿と しょうぶじゃ」<br>げんじいの こえが、まだ みみに のこっとる。');
    if (s.flags.bunshuDone) pages.push('かえったら、おかあさんに はなそう。<br><br>ぶんしゅうの こと。かっぱの こと。<br>おかあさんの なつやすみと、<br>ぼくの なつやすみの こと。');
    if (s.flags.minaYuki2) pages.push('ポケットの おくに、ミナから もらった<br>ひまわりの たねが ひとつぶ。<br><br>「はなれても ともだちや」<br><br>とうきょうの ベランダに うえたら、<br>らいねんの なつ、あやがわと おなじ はなが さく。');
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
