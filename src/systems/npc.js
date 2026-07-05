import * as THREE from 'three';
import { NPCS } from '../data/npcs.js';
import { makePerson } from '../world/builders.js';
import { calDay, phaseOf, BUGS } from '../data/data.js';
import { logEvent, bugCount } from '../core/state.js';

export class NpcSystem {
  constructor(scene, world, state, clock, ui, audio) {
    Object.assign(this, { scene, world, state, clock, ui, audio });
    this.npcs = NPCS.map((def) => {
      const p = makePerson({ body: def.body, head: def.head, hat: def.hat, hair: def.hair, elder: !!def.elder, scale: def.id === 'kenta' || def.id === 'mina' ? 0.85 : 1 });
      p.group.visible = false;
      scene.add(p.group);
      return { def, mesh: p.group, parts: p.parts, t: Math.random() * 10, wanderT: 0, target: null };
    });

    // 「!」マーカー (だいじな ひとの あたまのうえで ぴょこぴょこ はねる)
    const c = document.createElement('canvas');
    c.width = 64; c.height = 96;
    const g = c.getContext('2d');
    g.font = 'bold 76px sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineWidth = 12;
    g.strokeStyle = '#7a4a00';
    g.strokeText('!', 32, 50);
    g.fillStyle = '#ffd452';
    g.fillText('!', 32, 50);
    this.marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    this.marker.scale.set(0.7, 1.05, 1);
    this.marker.visible = false;
    scene.add(this.marker);
    this.markerT = 0;
  }

  ctx() {
    const s = this.state;
    return {
      day: s.day, min: s.min, phase: phaseOf(s.min),
      weather: calDay(s.day).weather, event: calDay(s.day).event || null,
      state: s, friend: 0,
    };
  }

  async talk(npc) {
    const c = this.ctx();
    c.friend = this.state.friend[npc.def.id] || 0;
    // 物語の弧が すすんだ しゅんかんを、その日の にっきに のこす
    const watch = ['rodBaachan', 'rodStory', 'kentaPapa1', 'kentaPapa2', 'kentaPapa3', 'genMusuko1', 'genMusuko2', 'minaYuki1', 'minaYuki2'];
    const before = {};
    for (const k of watch) before[k] = this.state.flags[k];
    // プレイヤーの方を向く
    const lines = npc.def.talk(c);
    if (!this.state.talkedToday[npc.def.id]) {
      this.state.talkedToday[npc.def.id] = true;
      this.state.friend[npc.def.id] = (this.state.friend[npc.def.id] || 0) + 1;
      logEvent(this.state, `${npc.def.name}とはなした`);
    }
    await this.ui.say(npc.def.name, lines);
    // 駅前で出迎えてくれたおばあちゃんは、話したあと家にもどる
    if (npc.def.id === 'baachan' && !this.state.flags.metBaachan) {
      this.state.flags.metBaachan = true;
      // はじめての出会いのあとに、あそびかたガイド (1かいだけ)
      if (!this.state.flags.tutorial) {
        this.state.flags.tutorial = true;
        const t = this.ui.isTouch;
        await this.ui.showStory([
          `<b>― あそびかた ―</b><br><br>${t ? 'ひだりの スティック' : 'WASD キー'}で あるく。<br>${t ? 'スティックを おおきく たおすと' : 'Shift を おしながら あるくと'} はしれる。<br><br>きになるものの ちかくで<br>${t ? '「しらべる」ボタン' : 'E キー'}を おすと しらべられるよ。`,
          `つかまえた むしや さかなは<br>${t ? '「ずかん」ボタン' : 'Z キー'}で ずかんに きろくされる。<br><br>みちに まよったら<br>${t ? '「ちず」ボタン' : 'X キー'}で まちの ちずが みられるよ。`,
          'この まちには、じかんが ながれとる。<br>あさ、ひる、ゆうがた、よる……<br>じかんや ひにちで、あえるひとや<br>おこることが かわっていくんや。<br><br><b>8がつ31にち</b>まで、<br>じゆうに なつやすみを すごそう。',
        ]);
      }
      this.ui.toast('おばあちゃんは さきに いえへ もどっていった。ついていこう (みなみへ)');
    }
    // 弧のフラグが たったら、その日の にっきネタに 記す
    const diaryFor = {
      rodBaachan: 'じいちゃんの つりざおの はなしを、ばあちゃんに きいた',
      rodStory: 'げんじいに じいちゃんの 竿を 見せた',
      kentaPapa1: 'ケンタが とうちゃんの はなしを した',
      kentaPapa2: 'ケンタの とうちゃんが お盆で かえってきとった',
      kentaPapa3: 'ケンタの とうちゃんを、いっしょに 見おくった',
      genMusuko1: 'げんさんの せがれの はなしを きいた',
      genMusuko2: 'げんさんの せがれが まつりの 屋台を てつどうとった',
      minaYuki1: 'ミナの てんこうした ともだち、ユキちゃんの はなしを きいた',
      minaYuki2: 'ミナが ユキちゃんから てがみを もらったと 話しとった',
    };
    for (const k of watch) {
      if (!before[k] && this.state.flags[k] && diaryFor[k]) logEvent(this.state, diaryFor[k]);
    }
    // カブトかクワガタを持ってケンタに会うと、むしずもうを挑まれる (1日1回)
    if (npc.def.id === 'kenta') await this.maybeBugSumo();
    // むしに詳しくなってくると、ミナがクイズを出してくる (1日1回)
    if (npc.def.id === 'mina') await this.maybeMushiQuiz();
  }

  // ミナの「むしクイズ」: 図鑑の説明文から、どのむしか当てる
  async maybeMushiQuiz() {
    const s = this.state;
    if (s.day === 1 || s.day === 31) return;
    if (s.flags['quiz' + s.day]) return;
    if (bugCount(s) < 3) return; // すこし詳しくなってから
    const ph = phaseOf(s.min);
    if (ph !== 'morning' && ph !== 'day') return;

    await this.ui.say('ミナ', [
      'ねえねえ、あんた むしに くわしくなってきたんやろ?',
      'ほな、うちの「むしクイズ」に ちょうせんしてみる? 2もんね。',
    ]);
    const ok = await this.ui.choice('むしクイズ、うける?', ['うける!', 'またこんど']);
    if (ok !== 0) {
      await this.ui.say('ミナ', ['ふうん。じしんないんや? ま、いつでも どうぞ。']);
      return;
    }
    s.flags['quiz' + s.day] = true;
    // 出題: ランダムな2種 + まぎらわしい選択肢
    const pool = [...BUGS].sort(() => Math.random() - 0.5);
    let correct = 0;
    for (let q = 0; q < 2; q++) {
      const answer = pool[q];
      const wrongs = pool.filter((b) => b.id !== answer.id).slice(-2);
      const opts = [answer, ...wrongs].sort(() => Math.random() - 0.5);
      const i = await this.ui.choice(`だい${q + 1}もん! 「${answer.desc}」……なーんだ?`, opts.map((o) => o.name));
      if (opts[i].id === answer.id) {
        correct += 1;
        this.audio.sfx('coin');
        this.ui.toast('ミナ「せいかーい!」');
      } else {
        this.audio.sfx('flee');
        this.ui.toast(`ミナ「ぶっぶー。こたえは ${answer.name}でした」`);
      }
    }
    if (correct === 2) {
      s.friend.mina = (s.friend.mina || 0) + 2;
      await this.ui.say('ミナ', [
        '2もん せいかい! ……やるやん。',
        'うち、しょうらい むしはかせと けっこんしよう おもとるんよね。じょうだんやけど。',
      ]);
      logEvent(s, 'ミナのむしクイズにぜんもんせいかいした');
    } else if (correct === 1) {
      s.friend.mina = (s.friend.mina || 0) + 1;
      await this.ui.say('ミナ', ['1もん せいかい。まあまあやね。', 'ずかんを よみこんだら、もっと わかるように なるよ。']);
      logEvent(s, 'ミナのむしクイズにちょうせんした');
    } else {
      await this.ui.say('ミナ', ['ぜんぜん やん! ずかん もっとる いみ ある?', 'ふふ、また ちょうせんしてな。']);
      logEvent(s, 'ミナのむしクイズにちょうせんした');
    }
  }

  async maybeBugSumo() {
    const s = this.state;
    if (s.day === 1 || s.day === 31) return; // 出会いの日と別れの日はなし
    if (s.flags['sumo' + s.day]) return;
    const hasKabuto = (s.bugs.kabuto || 0) > 0;
    const hasNoko = (s.bugs.nokogiri || 0) > 0;
    if (!hasKabuto && !hasNoko) return;
    const ph = phaseOf(s.min);
    if (ph !== 'morning' && ph !== 'day') return;

    const mine = hasKabuto ? 'カブトムシ' : 'ノコギリクワガタ';
    await this.ui.say('ケンタ', [
      `……ん? おまえ、虫かごに ${mine} おるやん!`,
      'ちょうどええ。おれの ノコギリの「よこづな」と しょうぶさせようや!',
      'むしずもうや! まけたほうが ジュース おごりな!',
    ]);
    const ok = await this.ui.choice('むしずもう、うけてたつ?', ['うけてたつ!', 'またこんど']);
    if (ok !== 0) {
      await this.ui.say('ケンタ', ['なんや、びびっとん? ……ま、いつでも こいや。']);
      return;
    }
    s.flags['sumo' + s.day] = true;
    this.audio.sfx('taiso');
    this.ui.toast('きの えだの どひょうに 2ひきを のせた。はっけよーい……のこった!');

    const moves = ['おしだす', 'ねばる', 'つのですくう'];
    const beats = { 0: 1, 1: 2, 2: 0 }; // おす>ねばる, ねばる>すくい, すくい>おす
    const winText = [
      `ぐいぐい おしこむ! ${mine}が どひょうぎわまで おしきった!`,
      'よこづなの すくいなげを、ろっぽんの あしで こらえた!',
      `つのが がっちり はいった! ${mine}の うっちゃり!`,
    ];
    const loseText = [
      'おしこんだところを ひらりと かわされた…!',
      'ねばりくらべで まけた! よこづな、びくとも せん…!',
      'すくいに いった すきに おしだされた…!',
    ];
    let my = 0, ke = 0;
    while (my < 2 && ke < 2) {
      const i = await this.ui.choice(`${mine} ${my} - ${ke} よこづな ▶ どうする!?`, moves);
      const e = Math.floor(Math.random() * 3);
      if (i === e) {
        this.audio.sfx('bite');
        this.ui.toast('がっぷり よつ! りょうしゃ うごかん…!');
        continue;
      }
      if (beats[i] === e) {
        my += 1;
        this.audio.sfx('catch');
        this.ui.toast(winText[i]);
      } else {
        ke += 1;
        this.audio.sfx('flee');
        this.ui.toast(loseText[i]);
      }
    }
    if (my >= 2) {
      s.friend.kenta = (s.friend.kenta || 0) + 2;
      await this.ui.say('ケンタ', [
        'ま……まけた〜!! よこづなが まけた!!',
        `おまえの ${mine}、なんちゅう ちからや…。`,
        'ラムネ おごったる。そのかわり、あしたは リベンジやけんな!',
      ]);
      this.ui.toast('むしずもうに かった! ケンタに ラムネを おごってもろた', 'gold');
      logEvent(s, `むしずもうでケンタのよこづなにかった`);
    } else {
      s.friend.kenta = (s.friend.kenta || 0) + 1;
      await this.ui.say('ケンタ', [
        'よっしゃー! やっぱり よこづなは つよいんや!',
        `けど おまえの ${mine}も、なかなか やったで。`,
        'また しょうぶしような!',
      ]);
      logEvent(s, `むしずもうでケンタにまけた`);
    }
  }

  update(dt, player, prompts) {
    const c = this.ctx();
    this.markerT += dt;
    let markerNpc = null;
    let nearest = null, nearestD = 1e9;
    for (const npc of this.npcs) {
      npc.t += dt;
      // かくれんぼ中のふたりは、まちのどこかに かくれとる (すがたを消す)
      if (this.hideKids && (npc.def.id === 'kenta' || npc.def.id === 'mina')) {
        npc.mesh.visible = false;
        continue;
      }
      const pos = npc.def.sched(c);
      if (!pos) { npc.mesh.visible = false; continue; }
      if (!npc.mesh.visible) {
        npc.mesh.visible = true;
        npc.mesh.position.set(pos.x, 0, pos.z);
        npc.anchor = pos;
      } else if (!npc.anchor || npc.anchor.x !== pos.x || npc.anchor.z !== pos.z) {
        npc.mesh.position.set(pos.x, 0, pos.z);
        npc.anchor = pos;
      }

      const mp = npc.mesh.position;
      mp.y = this.world.groundY ? this.world.groundY(mp.x, mp.z) : 0;
      const d = Math.hypot(mp.x - player.pos.x, mp.z - player.pos.z);

      // 子どもはうろうろ
      const kid = npc.def.id === 'kenta' || npc.def.id === 'mina';
      if (kid && d > 3) {
        npc.wanderT -= dt;
        if (npc.wanderT <= 0) {
          npc.wanderT = 2 + Math.random() * 3;
          const a = Math.random() * Math.PI * 2;
          npc.target = { x: pos.x + Math.cos(a) * 2.5, z: pos.z + Math.sin(a) * 2.5 };
        }
        if (npc.target) {
          const tx = npc.target.x - mp.x, tz = npc.target.z - mp.z;
          const td = Math.hypot(tx, tz);
          if (td > 0.2) {
            const sp = 1.6 * dt;
            const nx = mp.x + (tx / td) * sp, nz = mp.z + (tz / td) * sp;
            if (!this.world.isBlocked(nx, nz)) { mp.x = nx; mp.z = nz; }
            npc.mesh.rotation.y = Math.atan2(tx / td, tz / td);
            const sw = Math.sin(npc.t * 7) * 0.5;
            npc.parts.armL.rotation.x = sw;
            npc.parts.armR.rotation.x = -sw;
            npc.parts.legL.rotation.x = -sw;
            npc.parts.legR.rotation.x = sw;
          }
        }
      } else {
        // 待機ゆらゆら
        npc.parts.armL.rotation.x = Math.sin(npc.t * 1.4) * 0.06;
        npc.parts.armR.rotation.x = -Math.sin(npc.t * 1.4) * 0.06;
        npc.parts.legL.rotation.x = 0;
        npc.parts.legR.rotation.x = 0;
      }

      // 近いと目を合わせる
      if (d < 4) {
        npc.mesh.rotation.y = Math.atan2(player.pos.x - mp.x, player.pos.z - mp.z);
      }
      if (d < 2.6 && d < nearestD) { nearest = npc; nearestD = d; }

      // 1日め、まだ話していないおばあちゃんに「!」マーカー (きづきやすく)
      if (npc.def.id === 'baachan' && c.day === 1 && !this.state.flags.metBaachan) markerNpc = npc;
    }

    if (markerNpc && markerNpc.mesh.visible) {
      const mp = markerNpc.mesh.position;
      this.marker.visible = true;
      this.marker.position.set(mp.x, mp.y + 2.35 + Math.abs(Math.sin(this.markerT * 3.2)) * 0.28, mp.z);
    } else {
      this.marker.visible = false;
    }

    if (nearest) {
      prompts.push({ dist: nearestD, label: `はなす (${nearest.def.name})`, action: () => this.talk(nearest) });
    }
  }
}
