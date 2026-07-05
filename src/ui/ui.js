import { BUGS, FISH, youbi, calDay, WEATHER_LABEL } from '../data/data.js';
import { bugCount, fishCount } from '../core/state.js';
import { options, saveOptions } from '../core/options.js';

const WEATHER_ICON = { sunny: '☀', cloudy: '☁', rain: '🌧', storm: '🌀' };
const $ = (id) => document.getElementById(id);

export class UI {
  constructor(state, audio) {
    this.state = state;
    this.audio = audio;
    this.modalCount = 0;
    this.zukanOpen = false;
    this.settingsOpen = false;
    this.pauseOpen = false;
    this.els = {
      hud: $('hud'), prompt: $('prompt'), toasts: $('toasts'), fade: $('fade'),
      dialogue: $('dialogue'), dlgName: $('dlg-name'), dlgText: $('dlg-text'),
      choice: $('choice'), zukan: $('zukan'), settings: $('settings'), pause: $('pause'), diary: $('diary'), title: $('title'), ending: $('ending'),
      note: $('daynote'),
    };
  }

  get modal() { return this.modalCount > 0 || this.zukanOpen || this.settingsOpen || this.pauseOpen; }

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
          box.removeEventListener('pointerdown', advance);
          box.classList.remove('on');
          setTimeout(() => { this.modalCount--; resolve(); }, 60);
        } else show();
      };
      show();
      setTimeout(() => {
        window.addEventListener('keydown', advance, true);
        box.addEventListener('pointerdown', advance);
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
          <div class="diary-next">— E で つぎのひへ —</div>
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
        this.els.ending.innerHTML = `<div class="end-page">${p}<div class="diary-next">— E で つづく —</div></div>`;
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
          <div class="title-help">WASD/やじるし: あるく ・ Shift: はしる ・ E: しらべる/はなす ・ Z: ずかん ・ M: おと</div>
          <div class="title-note">クリックすると おとが でます</div>
        </div>`;
      this.els.title.classList.add('on');
      this.els.title.querySelectorAll('.title-btn').forEach((b) =>
        b.addEventListener('pointerdown', () => {
          this.audio.init();
          this.audio.sfx('catch');
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
    if ((s.friend.kenta || 0) >= 6) farewell.push('「おーい!!」<br>ケンタが じてんしゃで つっこんできた。<br>「これ! よこづな つれてけ! 東京で さいきょうに なれ!!」<br>むしかごを おしつけて、はなを すすった。');
    if (s.flags.keyholderGiven) farewell.push('ミナが かばんを もちあげて みせた。<br>ことでんの キーホルダーが ゆれとる。<br>「ちゃんと つけとるけんね。……また来年、ぜったいやで」');
    if (s.flags.unagiTold) farewell.push('かいさつの むこうで、げんじいが つりざおを ふっとる。<br>「あやがわの主ー! 来年は わしが 釣るけんのー!」');
    if (farewell.length) pages.push(...farewell);
    pages.push(
      `「また おいでな」<br><br>ばあちゃんの こえが、セミのこえに まじって きこえた。<br>まどのそとで、あやがわの まちが ながれていく。`,
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
