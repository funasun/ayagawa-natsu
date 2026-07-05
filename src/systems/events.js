import { logEvent } from '../core/state.js';
import { phaseOf, youbi, TIME_SCALE } from '../data/data.js';

// ことでん琴平線 陶→瓦町: 実際の所要時間 約30分をゲーム内時間で再現
const RIDE_GAME_MIN = 30;
const RIDE_REAL_S = 44; // 体験としての実時間 (このあいだに30分すすむ)
const STOPS_GO = [
  ['はただ', 2], ['かざしがおか', 5], ['おかもと', 7], ['えんざ', 10], ['いちのみや', 12],
  ['くうこうどおり', 14], ['ぶっしょうざん', 17], ['おおた', 19], ['ふせいし', 21],
  ['さんじょう', 23], ['りつりんこうえん', 25],
];
const STOPS_BACK = [
  ['りつりんこうえん', 4], ['さんじょう', 6], ['ふせいし', 8], ['おおた', 10], ['ぶっしょうざん', 12],
  ['くうこうどおり', 15], ['いちのみや', 17], ['えんざ', 19], ['おかもと', 22],
  ['かざしがおか', 24], ['はただ', 26],
];

// かくれんぼの かくれ場所 (ひみつのばしょと座標がかぶらないよう少しずらしてある)
const KAKURENBO_SPOTS = [
  { id: 'hashi', x: 17.6, z: 4.2, place: 'はしのした', hint: 'みずの おとに まじって、わらいごえが きこえたような…' },
  { id: 'kusu', x: -6.2, z: -53.2, place: 'クスノキの うら', hint: 'じんじゃの ほうで スズメが いっせいに とびたった' },
  { id: 'take', x: -13.4, z: -65.4, place: 'たけやぶの なか', hint: 'たけやぶが ガサガサッと ゆれた。……かぜかなあ?' },
  { id: 'eki', x: 108, z: -8, place: 'えきの ベンチの かげ', hint: 'えきの ほうへ かけていく せなかが ちらっと みえた' },
  { id: 'himawari', x: 21, z: 30.5, place: 'ひまわりばたけ', hint: 'はたけの ひまわりが 2ほんだけ ぐらぐら ゆれとる' },
];

// 固定インタラクトとイベント進行
export class EventSystem {
  constructor(world, state, clock, ui, audio, sleepFn) {
    Object.assign(this, { world, state, clock, ui, audio, sleepFn });
  }

  get spots() {
    const s = this.state;
    const c = this.clock;
    const list = [];

    // ---- ことでんの車内 ----
    if (this.world.indoor && this.world.sub === this.world.trainRide) {
      const tr = this.world.trainRide;
      list.push({
        x: tr.entry.x, z: tr.entry.z, r: 2.2, label: 'しゃそうを ながめる',
        action: async () => {
          const views = [
            'たんぼの みどりが ずーっと つづいとる',
            'さぬきふじみたいな おむすびやまが みえる!',
            'うどんやの かんばん、もう 3けんめや',
            'ためいけが きらきら ひかっとる',
            'ガタンゴトン… でんしゃの ゆれ、ねむくなるなあ',
          ];
          this.ui.toast(views[(this.rideViews = ((this.rideViews || 0) + 1)) % views.length]);
        },
      });
      return list;
    }

    // ---- 高松・瓦町 ----
    if (this.world.indoor && this.world.sub === this.world.takamatsu) {
      const pts = this.world.takamatsu.pts;
      list.push({
        x: pts.station.x, z: pts.station.z, r: 3, label: 'ことでんで すえへ かえる',
        action: () => this.boardTrain(-1),
      });
      if (!s.flags['soft' + c.day]) {
        list.push({
          x: pts.depato.x, z: pts.depato.z, r: 2.4, label: 'デパートの おくじょうで ソフトクリーム',
          action: async () => {
            s.flags['soft' + c.day] = true;
            this.audio.sfx('coin');
            await this.ui.fadePulse();
            this.ui.toast('おくじょうから たかまつの まちが みわたせる! ソフトクリームが とける〜', 'gold');
            logEvent(s, 'デパートのおくじょうでソフトクリームをたべた');
          },
        });
      }
      list.push({
        x: pts.gamecen.x, z: pts.gamecen.z, r: 2.2, label: 'ゲームセンターで あそぶ',
        action: async () => {
          this.audio.sfx('coin');
          const res = ['レースゲームで 1い! やったー!', 'シューティングは むずかしい… すぐ やられた', 'たいせんかくとうで おにいさんに まけた…', 'クレーンゲームは あと ちょっとやった!'];
          this.ui.toast(`100えん とうにゅう… ${res[(c.day + Math.floor(c.min / 60)) % res.length]}`);
          logEvent(s, 'かわらまちのゲーセンであそんだ');
        },
      });
      list.push({
        x: pts.honya.x, z: pts.honya.z, r: 2.2, label: 'ほんやで まんがを たちよみする',
        action: async () => {
          const ok = Math.random() < 0.7;
          this.ui.toast(ok ? 'しんかんの まんがを たちよみ… つづきが きになる!' : 'おばちゃんに「かうの? かわんの?」って にらまれた…');
          logEvent(s, 'ほんやでまんがをたちよみした');
        },
      });
      if (!s.flags['omiyage' + c.day] && !s.flags.keyholder && !s.flags.keyholderGiven) {
        list.push({
          x: pts.omiyage.x, z: pts.omiyage.z, r: 2.2, label: 'おみやげの キーホルダーを かう',
          action: async () => {
            s.flags['omiyage' + c.day] = true;
            s.flags.keyholder = true; // ミナにわたすとイベント
            this.audio.sfx('coin');
            this.ui.toast('ことでんの キーホルダーを かった! ミナに あげたら よろこぶかなあ', 'gold');
            logEvent(s, 'おみやげのキーホルダーをかった');
          },
        });
      }
      list.push({
        x: pts.vending.x, z: pts.vending.z, r: 1.8, label: 'つめたい ジュースを かう',
        action: async () => {
          this.audio.sfx('coin');
          this.ui.toast('ガコン! …ぷはー、とかいの ジュースも うまい');
        },
      });
      return list;
    }

    // ---- 家の2階 (ぼくの部屋) ----
    if (this.world.indoor && this.world.sub === this.world.interior2f) {
      const sp = this.world.interior2f.spots;
      list.push({
        x: sp.stairs.x, z: sp.stairs.z, r: 1.5, label: 'いちかいへ おりる',
        action: () => this.warpTo(this.world.interior, 1.7, -0.9, 0, 250),
      });
      list.push({
        x: sp.futon.x, z: sp.futon.z, r: 1.9, label: 'ふとんで ねる',
        action: async () => {
          if (c.min >= 1020 || c.day === 31) {
            const yes = await this.ui.choice('きょうはもう ねる?', ['ねる', 'まだあそぶ']);
            if (yes === 0) this.sleepFn();
            return;
          }
          // 日中はひるねもできる (夕方まで時間をとばす。カブトやヒグラシ待ちに)
          const pick = await this.ui.choice('まだ ひが たかいけど…', ['ひるねする (ゆうがたまで)', 'よるまで ぐっすりねる', 'やめとく']);
          if (pick === 1) { this.sleepFn(); return; }
          if (pick !== 0) return;
          await this.ui.fade(true, 700);
          s.min = Math.max(s.min, Math.min(Math.max(s.min + 60, 980), 1015)); // 16:20すぎに目がさめる (夕方ちかくなら1時間だけ)
          await new Promise((r) => setTimeout(r, 500));
          await this.ui.fade(false, 700);
          this.ui.toast('セミのこえを ききながら うとうと…… おきたら もう ゆうがたや');
          logEvent(s, 'ふとんでひるねした');
        },
      });
      list.push({
        x: sp.desk.x, z: sp.desk.z, r: 1.7, label: 'つくえで にっきを よみかえす',
        action: async () => {
          if (!s.diary || s.diary.length === 0) {
            this.ui.toast('にっきちょうは まだ まっしろ。きょうの よるから つけよう');
            return;
          }
          this.audio.sfx('page');
          await this.ui.showDiaryBook();
        },
      });
      list.push({
        x: sp.shelf.x, z: sp.shelf.z, r: 1.7, label: 'ラジオを つける',
        action: async () => {
          this.audio.sfx('taiso');
          const prog = c.min >= 1140
            ? ['ザーッ… 「こんやも ひとつ、むかしばなしを」… ラジオドラマや', 'ざつおんの むこうで、しずかな おんがくが ながれとる']
            : c.min < 600
              ? ['「ラジオたいそう、だいいち〜!」 ちょっと からだが うずうずする', '「つづいて、ぜんこくの てんきよほう です」', 'あさの ニュースが ながれとる。とうきょうの はなしも しとった']
              : ['ザーッ… 「カキーン! はいった! ホームラン!」 やきゅうちゅうけいや!', 'かようきょくが ながれとる。おばあちゃんも しっとるかな', '「つづいて、ぜんこくの てんきよほう です」'];
          this.ui.toast(prog[(c.day + Math.floor(c.min / 120)) % prog.length]);
          logEvent(s, 'へやでラジオをきいた');
        },
      });
      list.push({
        x: sp.window.x, z: sp.window.z, r: 1.6, label: 'まどから そとを ながめる',
        action: async () => {
          const ph = phaseOf(c.min);
          const msg = {
            morning: 'あさの ひかりが たんぼに さしとる。きょうは なにしよう',
            day: 'にゅうどうぐもが もくもく。セミが ないとる',
            evening: 'ゆうやけで まちが まっかっか。カラスが かえっていく',
            night: 'ほしが いっぱい。とうきょうじゃ こんなに みえんかった',
          }[ph] || 'かぜが きもちいい';
          this.ui.toast(msg);
        },
      });
      return list;
    }

    // ---- 家の1階 ----
    if (this.world.indoor && this.world.sub === this.world.interior) {
      list.push({ x: 6.2, z: 3.5, r: 1.5, label: 'そとにでる', action: () => this.exitHouse() });
      list.push({
        x: 2.75, z: -1.5, r: 1.4, label: 'にかいの じぶんのへやへ',
        action: () => {
          const e = this.world.interior2f.entry;
          return this.warpTo(this.world.interior2f, e.x, e.z, Math.PI, 250);
        },
      });
      // おばあちゃん (家のなかにいる時間帯)
      const home = this.baachanHome();
      if (home) {
        list.push({
          x: home.x, z: home.z, r: 2.0, label: 'はなす (おばあちゃん)',
          action: () => this.talkBaachanIndoor(),
        });
        // ごはん (おばあちゃんがいるときだけ)
        if (c.min < 540 && !s.flags['asagohan' + c.day]) {
          list.push({
            x: 0, z: 1.8, r: 1.9, label: 'あさごはんを たべる',
            action: async () => {
              s.flags['asagohan' + c.day] = true;
              await this.ui.say('おばあちゃん', ['ほれ、あさごはん。ようけ たべて いきな。']);
              this.audio.sfx('slurp');
              await this.ui.fadePulse();
              const menu = ['ごはんと おみそしる、たまごやき', 'たまごかけごはん と きゅうりの つけもの', 'おにぎりと ゆでとうもろこし', 'ごはんと のりと あじの ひもの'];
              this.ui.toast(`${menu[c.day % menu.length]}。あさから おなかいっぱい!`);
              logEvent(s, 'おばあちゃんとあさごはんをたべた');
            },
          });
        }
        if (c.min >= 1020 && !s.flags['bangohan' + c.day]) {
          list.push({
            x: 0, z: 1.8, r: 1.9, label: 'ばんごはんを たべる',
            action: async () => {
              s.flags['bangohan' + c.day] = true;
              await this.ui.say('おばあちゃん', ['きょうは ごちそうじゃよ。', 'ようけ あそんだあとの ごはんは、うまいじゃろう。']);
              this.audio.sfx('slurp');
              await this.ui.fadePulse();
              const menu = ['カレーライス! おかわりした', 'てんぷらと ひやしそうめん', 'にくじゃがと ほかほかごはん', 'やきざかなと デザートの スイカ', 'ちらしずしと おすまし'];
              this.ui.toast(`${menu[c.day % menu.length]}。ごちそうさまでした!`);
              logEvent(s, 'おばあちゃんとばんごはんをたべた');
            },
          });
        }
      }
      // おひる (おばあちゃんはにわ仕事中。ちゃぶ台によういしてある)
      if (c.min >= 660 && c.min <= 840 && !s.flags['hirugohan' + c.day]) {
        list.push({
          x: 0, z: 1.8, r: 1.9, label: 'ちゃぶだいの おひるを たべる',
          action: async () => {
            s.flags['hirugohan' + c.day] = true;
            this.ui.toast('ちゃぶだいに ふきんの かかった おさら。「おひるは これを おたべ。ばあちゃん」');
            await new Promise((r) => setTimeout(r, 1400));
            this.audio.sfx('slurp');
            await this.ui.fadePulse();
            const menu = [
              'おにぎりと きゅうりの あさづけ。うめぼしが すっぱい!',
              'ひやしそうめん。みょうがは よけて たべた',
              'むすびと たまごやき。おなかが おちついた',
              'ひやしうどんに レモンを しぼって。つるつる いけた',
            ];
            this.ui.toast(menu[c.day % menu.length]);
            logEvent(s, 'おばあちゃんのおいてくれたおひるをたべた');
          },
        });
      }
      list.push({
        x: -2.0, z: -3.0, r: 1.9, label: 'テレビを みる',
        action: async () => {
          this.audio.sfx('coin');
          // 時間帯で番組がかわる (夏の昼はだいたい高校野球をやっとる)
          let shows;
          if (c.event === 'typhoon') {
            shows = [
              '台風じょうほう。「香川県の 中讃地方、暴風に 警戒してください」',
              'ずっと 台風の ニュースや。きしょうよほうしの ひとも ねむそう',
            ];
          } else if (c.min < 600) {
            shows = [
              'あさの れんぞくドラマ。おばあちゃんが かかさず みとるやつ',
              'あさの ニュース。とうきょうの えいぞうが うつって、ちょっと なつかしい',
              'てんきよほう。「きょうも 35どを こえるでしょう」…またか!',
            ];
          } else if (c.min < 780) {
            shows = youbi(c.day) === '日'
              ? ['のどじまん! かねが カンカンカン! って なっとる', 'のどじまんの おばちゃんが うたっとる。おんち やけど たのしそう']
              : ['ひるの ドラマ。よめと しゅうとめが もめとる…', 'ひるの ワイドショー。とかいは きょうも いそがしそうや'];
          } else if (c.min < 990) {
            shows = [
              'こうこうやきゅう! エースが れんとうしとる。がんばれ〜!',
              'こうこうやきゅう。9かいうら、まんるい…! てに あせにぎるわ',
              'こうこうやきゅう。かんとくが しんぱんに もんく ゆうとる',
            ];
          } else if (c.min < 1140) {
            shows = [
              'ゆうがたの アニメの さいほうそう。なんかい みても おもろい',
              'ローカルニュース。「あやがわの ためいけで すいしつちょうさが…」あ、しっとる池や!',
            ];
          } else {
            shows = [
              'ナイターちゅうけい。おじいちゃんも すきやったんかな',
              'クイズばんぐみ。おばあちゃんのほうが はやく こたえる',
            ];
          }
          this.ui.toast(shows[(c.day + Math.floor(c.min / 120)) % shows.length]);
          logEvent(s, 'いえでテレビをみた');
        },
      });
      list.push({
        x: -2.3, z: 1.7, r: 1.6, label: 'せんぷうきに あたる',
        action: async () => {
          const v = [
            'あ゛ー゛ー゛ー゛… (せんぷうきの まえで こえを だす)',
            'われわれは うちゅうじんだ… (せんぷうきの こえに なる)',
            'シャツの なかに かぜを いれる。さいこうや',
          ];
          this.ui.toast(v[(this.fanCount = (this.fanCount || 0) + 1) % v.length]);
        },
      });
      if (!s.flags['butsudan' + c.day]) {
        list.push({
          x: 6.2, z: -2.8, r: 1.7, label: 'ぶつだんに おまいりする',
          action: async () => {
            s.flags['butsudan' + c.day] = true;
            this.audio.sfx('suzu');
            const isObon = c.event === 'obon';
            const msgs = isObon
              ? ['チーン…… (おじいちゃん、おぼんじゃね。かえってきとる?)', 'チーン…… (おばあちゃんが きゅうりの うまを かざっとったよ)']
              : ['チーン…… (おじいちゃん、きょうも あそんでくるね)', 'チーン…… (しゃしんの おじいちゃん、わらっとる)', 'チーン…… (おじいちゃん、きょうは むしを つかまえたよ)'];
            this.ui.toast(msgs[c.day % msgs.length]);
            logEvent(s, 'ぶつだんのおじいちゃんにあいさつした');
          },
        });
      }
      list.push({
        x: -8.3, z: -2.9, r: 1.6, label: 'れいぞうこの むぎちゃを のむ',
        action: async () => {
          this.audio.sfx('splash');
          const v = [
            'キンキンに ひえた むぎちゃ! いきかえる〜',
            'やかんごと コップに そそぐ。つめたさで コップが くもった',
            'ぐびぐびぐび…… ぷはーっ! おかわり!',
          ];
          this.ui.toast(v[(this.chaCount = (this.chaCount || 0) + 1) % v.length]);
        },
      });
      return list;
    }

    // 家にはいる (陶のおばあちゃんち。玄関はカメラのある南東がわ)
    list.push({ x: 118, z: 16.1, r: 2.4, label: 'いえにはいる', action: () => this.enterHouse() });

    // ラジオ体操 (6:00-7:00 神社ひろば)
    if (c.min <= 420 && !s.flags['taiso' + c.day]) {
      list.push({
        x: 0, z: -55, r: 4, label: 'ラジオたいそうに さんかする',
        action: async () => {
          s.flags['taiso' + c.day] = true;
          s.stamps += 1;
          this.audio.sfx('taiso');
          await this.ui.fadePulse();
          this.ui.toast(`ラジオたいそう かんりょう! スタンプ ${s.stamps}こめ`, 'gold');
          if (s.stamps === 10) this.ui.toast('スタンプ10こ! みやじさんも かんしんしとる', 'gold');
          if (s.stamps === 31) this.ui.toast('パーフェクト!! でんせつの きんべんしょうねん!', 'gold');
          logEvent(s, 'あさのラジオたいそうにいった');
        },
      });
    }

    // 朝うどん (げんさんの店 6:00-14:00)
    if (c.min <= 840 && !s.flags['udon' + c.day]) {
      list.push({
        x: -50.5, z: 21.5, r: 2.4, label: 'あさうどんを たべる',
        action: async () => {
          s.flags['udon' + c.day] = true;
          s.udon += 1;
          this.audio.sfx('slurp');
          await this.ui.fadePulse();
          const msgs = [
            'かけうどん、いりこだしが うまい!!',
            'ひやあつ、コシが すごい!!',
            'しょうゆうどん、シンプルで うまい!!',
            'ぶっかけ、レモンが きいとる!!',
          ];
          this.ui.toast(`${msgs[s.udon % msgs.length]} (あさうどん ${s.udon}かいめ)`);
          s.friend.gen = (s.friend.gen || 0) + 1;
          logEvent(s, 'げんさんのあさうどんをたべた');
        },
      });
    }

    // 駄菓子屋 (8:00-18:00)
    if (c.min >= 480 && c.min <= 1080 && !s.flags['dagashi' + c.day]) {
      list.push({
        x: -63, z: 21, r: 2.2, label: 'だがしを かう',
        action: async () => {
          s.flags['dagashi' + c.day] = true;
          this.audio.sfx('coin');
          const items = ['きなこぼう', 'ラムネ', 'あんずあめ', 'ソースせんべい', 'ガラガラくじ'];
          const item = items[(c.day * 3) % items.length];
          const atari = Math.random() < 0.2;
          this.ui.toast(`${item}を かった!${atari ? ' 【あたりつき! もう1こ!】' : ''}`, atari ? 'gold' : null);
          logEvent(s, `だがしやで${item}をかった`);
        },
      });
    }

    // まつりの屋台 (8/25 夕方から)
    if (c.event === 'matsuri' && c.min >= 1020) {
      if (!s.flags.matsuriUdon) {
        list.push({
          x: -7, z: -44.5, r: 2, label: 'しっぽくうどんを たべる',
          action: async () => {
            s.flags.matsuriUdon = true;
            this.audio.sfx('slurp');
            this.ui.toast('おまつりの しっぽくうどん、さいこうや!', 'gold');
            logEvent(s, 'まつりでしっぽくうどんをたべた');
          },
        });
      }
      if (!s.flags.matsuriKingyo) {
        list.push({
          x: 0, z: -42.5, r: 2, label: 'きんぎょすくいを する',
          action: async () => {
            s.flags.matsuriKingyo = true;
            const got = Math.random() < 0.6;
            this.audio.sfx(got ? 'catch' : 'splash');
            this.ui.toast(got ? 'きんぎょが すくえた! たいせつにそだてよう' : 'ポイが やぶれた…! ざんねん', got ? 'gold' : null);
            logEvent(s, got ? 'きんぎょをすくった' : 'きんぎょすくいはしっぱいした');
          },
        });
      }
      if (!s.flags.matsuriAme) {
        list.push({
          x: 7, z: -44.5, r: 2, label: 'りんごあめを かう',
          action: async () => {
            s.flags.matsuriAme = true;
            this.audio.sfx('coin');
            this.ui.toast('りんごあめ、ほっぺが おちそう!');
            logEvent(s, 'りんごあめをたべた');
          },
        });
      }
    }

    // 学校の夏まつりの屋台 (8/9 夕方から、小学校の校庭で)
    if (c.event === 'gakusai' && c.min >= 1020) {
      if (!s.flags.gakusaiYoyo) {
        list.push({
          x: -47, z: 63.2, r: 2, label: 'ヨーヨーつりを する',
          action: async () => {
            s.flags.gakusaiYoyo = true;
            const got = Math.random() < 0.65;
            this.audio.sfx(got ? 'catch' : 'splash');
            this.ui.toast(got
              ? 'こよりが きれるまえに…… とれた! みずいろの ヨーヨーや!'
              : 'こよりが プツン。……ざんねん! でも おまけで 1こ もろた', got ? 'gold' : null);
            logEvent(s, got ? 'がっこうまつりでヨーヨーをつった' : 'ヨーヨーつりはおまけをもろた');
          },
        });
      }
      if (!s.flags.gakusaiKori) {
        list.push({
          x: -42, z: 64.2, r: 2, label: 'かきごおりを たべる',
          action: async () => {
            s.flags.gakusaiKori = true;
            const i = await this.ui.choice('なにあじに する?', ['いちご', 'メロン', 'ブルーハワイ']);
            const name = ['いちご', 'メロン', 'ブルーハワイ'][i];
            this.audio.sfx('slurp');
            this.ui.toast(`${name}の かきごおり! いそいで たべたら あたまが キーン!!`, 'gold');
            logEvent(s, `がっこうまつりで${name}のかきごおりをたべた`);
          },
        });
      }
      if (!s.flags.gakusaiKuji) {
        list.push({
          x: -37, z: 63.2, r: 2, label: 'くじびきを する',
          action: async () => {
            s.flags.gakusaiKuji = true;
            const atari = Math.random() < 0.3;
            this.audio.sfx(atari ? 'boom' : 'coin');
            this.ui.toast(atari
              ? '【あたり!!】カランカラン! けいひんは ちょうデカい うちわ!'
              : 'はずれ…… ざんねんしょうの あめだま 3こ。まあ ええか', atari ? 'gold' : null);
            logEvent(s, atari ? 'がっこうまつりのくじであたりをひいた' : 'がっこうまつりでくじびきをした');
          },
        });
      }
    }

    // ことでんに乗って高松・瓦町へ (7:00-15:00 に陶駅から)
    if (c.min >= 420 && c.min <= 900) {
      list.push({
        x: 109.4, z: -11.5, r: 4.4, label: 'ことでんに のる (かわらまち・たかまつほうめん)',
        action: () => this.boardTrain(1),
      });
    }

    // ケンタにおしえてもろた「クスノキのうろ」(夜か朝はやく、1日1回)
    if (s.flags.kentaTree && !s.flags['uro' + c.day] && (c.min >= 1080 || c.min <= 470)) {
      list.push({
        x: -7.3, z: -51.2, r: 2.0, label: 'クスノキの うろを のぞく',
        action: async () => {
          s.flags['uro' + c.day] = true;
          const roll = Math.random();
          if (roll < 0.4) {
            const id = Math.random() < 0.5 ? 'kabuto' : 'nokogiri';
            const name = id === 'kabuto' ? 'カブトムシ' : 'ノコギリクワガタ';
            const first = !s.bugs[id];
            s.bugs[id] = (s.bugs[id] || 0) + 1;
            this.audio.sfx('catch');
            this.ui.toast(`うろの じゅえきに ${name}が! そーっと… つかまえた!!${first ? ' 【ずかんに とうろく!】' : ''}`, 'gold');
            logEvent(s, `クスノキのうろで${name}をつかまえた`);
          } else if (roll < 0.7) {
            const first = !s.bugs.kanabun;
            s.bugs.kanabun = (s.bugs.kanabun || 0) + 1;
            this.audio.sfx('catch');
            this.ui.toast(`きょうは カナブンだけ。それでも つかまえた${first ? ' 【ずかんに とうろく!】' : ''}`);
            logEvent(s, 'クスノキのうろをのぞいた');
          } else {
            this.audio.sfx('flee');
            this.ui.toast('じゅえきの においだけ。……スズメバチが きたので しずかに はなれた');
            logEvent(s, 'クスノキのうろをのぞいた');
          }
        },
      });
    }

    // ゆうびんうけ (おかあさんから、なつのあいだに 3まい はがきがとどく)
    const hagakiNo = c.day >= 26 && !s.flags.hagaki3 ? 3
      : c.day >= 15 && !s.flags.hagaki2 ? 2
      : c.day >= 7 && !s.flags.hagaki1 ? 1 : 0;
    if (hagakiNo) {
      list.push({ x: 120.5, z: 18.5, r: 2.0, label: 'ゆうびんうけを のぞく', action: () => this.readHagaki(hagakiNo) });
    }

    // かわらで みずきり (あかるいうちなら いつでも。じこベストを記録)
    if (c.min >= 420 && c.min < 1140 && c.weather !== 'storm') {
      list.push({ x: 14, z: 6.5, r: 2.2, label: 'かわらで みずきりを する', action: () => this.mizukiri() });
    }

    // すいかわり (はれた日のひる、ケンタたちと。1日1回)
    if (c.weather === 'sunny' && c.phase === 'day' && c.day >= 2 && c.day !== 31 && !s.flags['suika' + c.day]) {
      list.push({ x: 7, z: 12, r: 2.4, label: 'すいかわりを する (ケンタとミナと)', action: () => this.suikawari() });
    }

    // 綾上の棚田の農作業 (あさ・ひる、1日1回。ノボルさんの手つだい)
    if ((c.phase === 'morning' || c.phase === 'day') && c.weather !== 'rain' && c.weather !== 'storm'
        && c.day >= 2 && c.day !== 31 && !s.flags['nou' + c.day]) {
      list.push({ x: -135, z: -52.5, r: 2.6, label: 'たなだの のさぎょうを てつだう', action: () => this.tanadaWork() });
    }

    // ばあちゃんの畑のみずやり (あさ か ゆうがた、1日1回)
    if ((c.min < 600 || (c.min >= 960 && c.min < 1140)) && c.weather !== 'rain' && c.weather !== 'storm'
        && !s.flags['mizuyari' + c.day]) {
      list.push({ x: 108.5, z: 16, r: 2.3, label: 'はたけに みずやりを する', action: () => this.mizuyari() });
    }

    // かくれんぼ (あさ・ひる、雨でなければ。はじめたらその日のうちに見つけること)
    if ((c.phase === 'morning' || c.phase === 'day') && c.weather !== 'rain' && c.weather !== 'storm'
        && c.day >= 2 && c.day !== 31 && !s.flags['kakurenbo' + c.day] && !this.hide) {
      list.push({ x: 12.5, z: 11, r: 2.2, label: 'かくれんぼを する (ケンタたちと)', action: () => this.startKakurenbo() });
    }
    if (this.hide) {
      for (const h of KAKURENBO_SPOTS) {
        list.push({ x: h.x, z: h.z, r: 2.6, label: `${h.place}を さがす`, action: () => this.searchKakurenbo(h) });
      }
    }

    // えんがわで はなび (よる、おばあちゃんと。雨とまつりの日はなし)
    if (c.min >= 1140 && c.weather !== 'rain' && c.weather !== 'storm'
        && c.day >= 2 && c.event !== 'matsuri' && !s.flags['hanabi' + c.day]) {
      list.push({ x: 114.5, z: 19.5, r: 2.4, label: 'えんがわで はなびを する', action: () => this.hanabi() });
    }

    // えんがわで ひとやすみ (なにもしない「間」の ぜいたく。時間だけが すぎていく)
    if (c.min >= 380 && c.min < 1140 && c.day >= 2) {
      list.push({ x: 114.5, z: 19.5, r: 2.4, label: 'えんがわに こしかける', action: () => this.engawaRest() });
    }

    // 竹やぶのひみつきち (ケンタに さそわれるまでは たちいりきんし)
    if (s.flags.kentaBase) {
      list.push({ x: -13.8, z: -76.2, r: 2.4, label: 'ひみつきちで すごす', action: () => this.himitsukichi() });
    } else {
      list.push({
        x: -13.8, z: -76.2, r: 2.4, label: 'いたの こやを のぞく',
        action: async () => {
          this.ui.toast('「たちいりきんし!!」って かいてある。だれの ひみつきちやろ…');
        },
      });
    }

    // 十瓶山の見晴らし台 (いつでも。夕方は特別)
    if (this.world.lookout && !s.flags['miharashi' + c.day]) {
      list.push({ x: this.world.lookout.x, z: this.world.lookout.z, r: 2.6, label: 'けしきを ながめる', action: () => this.miharashi() });
    }

    // 用水路 (ザリガニのすみか。あかるいうち)
    if (c.min >= 420 && c.min < 1140 && c.weather !== 'storm' && !s.flags['zari' + c.day]) {
      list.push({ x: 5.4, z: 60, r: 2.4, label: 'ようすいろを のぞく', action: () => this.zariganiPeek() });
    }

    // ---- お盆 (13日: おはかまいり と むかえび / 15日: おくりび) ----
    if (c.day >= 13 && c.day <= 15 && c.min < 1100 && !s.flags.obonHaka) {
      list.push({ x: 141.5, z: 17.8, r: 2.6, label: 'おはかまいりを する (ばあちゃんと)', action: () => this.ohakamairi() });
    }
    if (c.day === 13 && c.min >= 1140 && !s.flags.mukaebi) {
      list.push({ x: 120.5, z: 15.8, r: 2.2, label: 'むかえびを たく (ばあちゃんと)', action: () => this.mukaebi() });
    }
    if (c.day === 15 && c.min >= 1140 && !s.flags.okuribi) {
      list.push({ x: 120.5, z: 15.8, r: 2.2, label: 'おくりびを たく (ばあちゃんと)', action: () => this.okuribi() });
    }

    // ---- よるの墓地: ひとだま (19:30すぎ。こわいような、なつかしいような) ----
    if (c.min >= 1170) {
      list.push({
        x: 141.6, z: 20.4, r: 3.4,
        label: s.flags.obake ? 'ひとだまに はなしかける' : 'あおしろい ひに そっと ちかづく',
        action: () => this.obakeTalk(),
      });
    }

    // ひみつのばしょ (いちどきりの発見)
    const secrets = [
      { id: 'hashi', x: 16.5, z: 3.2, label: 'はしのしたを のぞく', sfx: 'splash',
        msg: 'はしのしたは ひんやりして きもちいい! ツバメのすを みつけた', log: 'はしのしたで ツバメのすをみつけた' },
      { id: 'kusu', x: -7.3, z: -52.2, label: 'おおきな きを しらべる', sfx: 'catch',
        msg: 'セミのぬけがらを みつけた! せなかが ぱっくり われとる', log: 'クスノキでセミのぬけがらをみつけた' },
      { id: 'take', x: -14.5, z: -66.5, label: 'たけやぶに はいってみる', sfx: 'suzu',
        msg: 'たけやぶの なかは すずしい。かぜで サラサラ いうとる…', log: 'たけやぶでひとやすみした' },
      { id: 'ike', x: 116, z: 66, label: 'いけを のぞきこむ', sfx: 'splash',
        msg: 'おたまじゃくしが うじゃうじゃ おる! つかまえたいなあ', log: 'ためいけでおたまじゃくしをみた' },
      { id: 'rail', x: 119.5, z: -7.8, label: 'せんろを ながめる', sfx: 'train',
        msg: 'レールが ぴかぴか ひかっとる。とおくから カタンコトン…', log: 'えきでことでんをまった' },
      { id: 'himawari', x: 20, z: 29.5, label: 'ひまわりと せいくらべ', sfx: 'taiso',
        msg: 'ひまわりのほうが ずっと おっきい。まけた!', log: 'ひまわりとせいくらべをした' },
      { id: 'kama', x: 154, z: 47, label: 'かまあとを しらべる', sfx: 'catch',
        msg: 'つちのなかに とうきの かけらが! むかし ここで やきものを やいとったんや', log: 'とうびんやまのかまあとをしらべた' },
      { id: 'keikoku', x: -205, z: -32, label: 'たにがわを のぞく', sfx: 'splash',
        msg: 'みずが つめたい! やまの みずは ぜんぜん ちがうなあ', log: 'あやかみのたにがわであそんだ' },
      { id: 'tanada', x: -135, z: -54, label: 'たなだを ながめる', sfx: 'catch',
        msg: 'やまの しゃめんに たんぼが だんだんに ならんどる! みずかがみが ぴかぴかや', log: 'あやかみのたなだをみにいった' },
    ];
    for (const sec of secrets) {
      if (s.flags['secret_' + sec.id]) continue;
      list.push({
        x: sec.x, z: sec.z, r: 2.2, label: sec.label,
        action: async () => {
          s.flags['secret_' + sec.id] = true;
          this.audio.sfx(sec.sfx);
          this.ui.toast(`【はっけん!】${sec.msg}`, 'gold');
          logEvent(s, sec.log);
        },
      });
    }

    // 天満宮におまいり
    if (!s.flags['omairi' + c.day]) {
      list.push({
        x: 0, z: -61.5, r: 2, label: 'おまいりする',
        action: async () => {
          s.flags['omairi' + c.day] = true;
          this.audio.sfx('suzu');
          const wishes = [
            'なつやすみが ずっとつづきますように…',
            'カブトムシが つかまえられますように…',
            'おおきな さかなが つれますように…',
            'みんなが げんきで いられますように…',
            'また らいねんも これますように…',
          ];
          this.ui.toast(`パンパン… (${wishes[c.day % wishes.length]})`);
          logEvent(s, 'てんまんぐうにおまいりした');
        },
      });
    }

    return list;
  }

  // サブエリア (家のなか・車内・高松) への移動をまとめて行う
  async warpTo(sub, x, z, heading = Math.PI, fadeMs = 350) {
    const p = this.player;
    await this.ui.fade(true, fadeMs);
    this.world.indoor = !!sub;
    this.world.sub = sub;
    p.mesh.position.set(x, sub ? sub.floorY : this.world.groundY(x, z), z);
    p.heading = heading;
    p.mesh.rotation.y = heading;
    p.snapCamera();
    await this.ui.fade(false, fadeMs);
  }

  async enterHouse() {
    this.audio.sfx('coin');
    const e = this.world.interior.entry;
    await this.warpTo(this.world.interior, e.x, e.z);
  }

  async exitHouse() {
    await this.warpTo(null, 118, 16.4, 0);
  }

  // おばあちゃんが家のなかにいる時間帯なら位置を返す (それ以外は null = そとにいる)
  baachanHome() {
    const s = this.state;
    const c = this.clock;
    if (s.day === 1 && !s.flags.metBaachan) return null; // 駅で出迎え中
    if (c.event === 'matsuri' && c.min >= 1020) return null; // まつりにでかけとる
    if (c.min < 500 || (s.day === 1 && c.min < 600)) return { x: -6.0, z: -2.5, ry: Math.PI }; // 台所であさごはんのしたく (初日は孫のごはんをよういして待っとる)
    if (c.min >= 1200) return { x: 0, z: -1.7, ry: 0 }; // 茶の間でひとやすみ
    if (c.min >= 1020) return { x: -6.0, z: -2.5, ry: Math.PI }; // 台所でばんごはんのしたく
    return null; // 日中はにわさき
  }

  async talkBaachanIndoor() {
    const s = this.state;
    const min = this.clock.min;
    const day = this.clock.day;
    const pick = (arr) => arr[day % arr.length];
    let lines;
    if (day === 1 && min < 600) {
      lines = [
        'おお、ついたか、ついたか。とおいとこ、ようがんばったなあ。',
        'あさごはん、よういしとるよ。ちゃぶ台に おすわり。',
        'たべたら、まちを ぶらぶら みてくると ええわ。',
      ];
    } else if (min < 500) {
      lines = pick([
        ['おはようさん。よう ねむれたかな?', 'あさごはん、ちゃぶ台に よそっとるけん、たべてお いき。'],
        ['おはよう。ゆうべ、あんたの ねごと きこえたよ。ふふ。', 'なんの ゆめ みとったんかな?'],
        ['おはようさん。おみそしるの だし、ええにおい じゃろ?', 'イリコはな、げんさんとこの となりで こうとるんよ。'],
      ]);
    } else if (min < 1200) {
      lines = pick([
        ['おかえり。もうすぐ ばんごはんじゃけん、てを あろうときな。'],
        ['おかえり。きょうは なにして あそんだん?', 'ごはんの とき、ゆっくり きかせてな。'],
        ['おかえり。まっとったよ。', 'なべの ふたを あけて ごらん。……ふふ、ごちそうじゃろ。'],
      ]);
    } else if (day >= 28 && !s.flags.baachanSabishii) {
      s.flags.baachanSabishii = true;
      lines = [
        '……あと すこしで かえってしまうんじゃねえ。',
        'あんたが きてから、いえの なかが ずっと にぎやかでなあ。',
        'ひとりの ばんごはんに もどるんは、ちょっと さびしいわ。',
        '……なんてな。としよりの たわごとじゃ。はよ おやすみ。ふふ。',
      ];
      s.friend.baachan = (s.friend.baachan || 0) + 1;
    } else {
      lines = pick([
        ['きょうも ようけ あそんだなあ。', 'ふとんは 2かいに しいとるよ。おやすみ。'],
        ['よなべは ほどほどにな。', 'にっきを つけたら、はよ おやすみ。'],
        ['か とりせんこう、たいとくけんな。', 'ぷーんいうのが きたら、ばあちゃんの まけじゃ。おやすみ。'],
      ]);
    }
    if (!s.talkedToday.baachan) {
      s.talkedToday.baachan = true;
      s.friend.baachan = (s.friend.baachan || 0) + 1;
      logEvent(s, 'おばあちゃんとはなした');
    }
    await this.ui.say('おばあちゃん', lines);
  }

  // ---- おかあさんからの はがき (7日・15日・26日ごろに 1まいずつ) ----
  async readHagaki(no) {
    const s = this.state;
    s.flags['hagaki' + no] = true;
    this.audio.sfx('page');
    this.ui.toast('ゆうびんうけに はがきが はいっとった。……おかあさんの じだ!');
    const texts = {
      1: [
        'げんきに してますか。ちゃんと やさい たべてますか。',
        'おばあちゃんの いうことを よく きくこと。よふかしは しないこと。',
        'ついしん ── せんたくものは じぶんで かごに いれること! かあさんより',
      ],
      2: [
        'おぼんに かえれなくて ごめんね。おばあちゃんに よろしく つたえてください。',
        'かあさんも こどものころ、じんじゃの クスノキに のぼって、よく しかられました。',
        'あなたは のぼっては いけません。 かあさんより',
      ],
      3: [
        'なつやすみも もうすぐ おわりですね。31にちの ゆうがた、とうきょうえきまで むかえに いきます。',
        'まっくろに ひやけした かおを みるのが たのしみです。',
        'おみやげばなし、たくさん きかせてね。 かあさんより',
      ],
    };
    await this.ui.say('おかあさんの はがき', texts[no]);
    logEvent(s, 'おかあさんからはがきがとどいた');
  }

  // ---- かわらの みずきり (石えらびで はねる回数がかわる。じこベスト更新がうれしいやつ) ----
  async mizukiri() {
    const s = this.state;
    const i = await this.ui.choice('あしもとの いしを えらぶ', ['ひらたい いし', 'まるい いし', 'でっかい いし']);
    let n;
    if (i === 0) n = 2 + Math.floor(Math.random() * 5);      // 2〜6だん
    else if (i === 1) n = 1 + Math.floor(Math.random() * 3); // 1〜3だん
    else n = Math.random() < 0.15 ? 4 : 0;                   // ロマンわく
    this.audio.sfx('splash');
    if (n === 0) {
      this.ui.toast('ドッボーン!! でっかい みずしぶきが あがっただけ。……これはこれで きもちええ');
    } else {
      const pi = ['ピッ', 'ピッ、ピッ', 'ピッ、ピッ、ピッ', 'ピピッ、ピッ、ピッ', 'ピピピッ、ピピッ', 'ピピピピピッ、ピッ'][n - 1];
      this.ui.toast(`よこなげで シュッ! ${pi}… ${n}だん!`);
    }
    if (n > (s.mizukiri || 0)) {
      s.mizukiri = n;
      this.audio.sfx('catch');
      this.ui.toast(`じこしんきろく こうしん! ${n}だん!!`, 'gold');
    }
    if (!s.flags['mizukiri' + s.day]) {
      s.flags['mizukiri' + s.day] = true;
      logEvent(s, 'かわらでみずきりをした');
    }
  }

  // ---- すいかわり (めかくしで 3ぽ。ミナは正直、ケンタは たまに ウソをつく) ----
  async suikawari() {
    const s = this.state;
    const c = this.clock;
    s.flags['suika' + c.day] = true;
    await this.ui.say('ケンタ', [
      'おっ、ええとこ きた! ばあちゃんに すいか もろたんや。',
      'ミナも よんできたけん、すいかわりに しようや。おまえ めかくし な!',
    ]);
    await this.ui.say('ミナ', [
      'タオル まくよ。……はい、まっくら。',
      'うちらの こえだけが たよりやからね。ケンタの こえは しんじすぎんように。',
    ]);
    this.audio.sfx('taiso');
    const dirs = ['ひだりへ', 'まっすぐ', 'みぎへ'];
    let hits = 0;
    for (let step = 0; step < 3; step++) {
      const ans = Math.floor(Math.random() * 3);
      const who = step === 1 ? 'ケンタ' : 'ミナ';
      const lie = who === 'ケンタ' && Math.random() < 0.4;
      const said = lie ? (ans + 1 + Math.floor(Math.random() * 2)) % 3 : ans;
      const q = `${who}「${dirs[said]}や${who === 'ケンタ' ? 'って!' : '!'}」${lie ? ' ……(わらいを こらえとる?)' : ''}`;
      const pick = await this.ui.choice(q, dirs);
      if (pick === ans) {
        hits += 1;
        this.audio.sfx('coin');
        this.ui.toast(`${step + 1}ぽめ… すいかの けはいが ちかい!`);
      } else {
        this.audio.sfx('flee');
        this.ui.toast(`${step + 1}ぽめ… あれ? くさの うえを ふんどる…?`);
      }
    }
    if (hits === 3) {
      this.audio.sfx('boom');
      this.ui.toast('えいっ!! ……パッカーン!!! どまんなか!', 'gold');
      await this.ui.say('ケンタ', ['うっそやろ!? いっぱつで わりよった!', 'おれの ウソにも ひっかからんし……おまえ、すごいわ。']);
      s.friend.kenta = (s.friend.kenta || 0) + 2;
      s.friend.mina = (s.friend.mina || 0) + 2;
      logEvent(s, 'すいかわりでいっぱつでわった');
    } else if (hits === 2) {
      this.audio.sfx('bite');
      this.ui.toast('えいっ! ……コツン。はしっこに あたった! ひびが はいった!');
      await this.ui.say('ミナ', ['おしい〜! でも ひび はいったけん、もう われたも どうぜんよ。']);
      s.friend.kenta = (s.friend.kenta || 0) + 1;
      s.friend.mina = (s.friend.mina || 0) + 1;
      logEvent(s, 'すいかわりであとちょっとだった');
    } else {
      this.audio.sfx('flee');
      this.ui.toast('えいっ! ……ブンッ。じめんを たたいた。ふたりの わらいごえが ひびく');
      await this.ui.say('ケンタ', ['あっはっは! ぜんぜん ちゃうとこ たたきよる!', 'ま、われんでも たべられるけん。ほら、すわり!']);
      s.friend.kenta = (s.friend.kenta || 0) + 1;
      s.friend.mina = (s.friend.mina || 0) + 1;
      logEvent(s, 'すいかわりはずしてわらわれた');
    }
    this.audio.sfx('slurp');
    this.ui.toast('3にんで かわらに すわって すいかを たべた。たねを どこまで とばせるか きょうそうした');
  }

  // ---- 綾上の棚田の農作業 (ノボルさんの手つだい。つづけると ええことがある) ----
  async tanadaWork() {
    const s = this.state;
    const c = this.clock;
    s.flags['nou' + c.day] = true;
    if (!s.nouka) {
      await this.ui.say('ノボルさん', [
        'ん? まちの子か。こんな やまおくまで ようきたのう。',
        'わしは ノボル。この たなだを じいさんの代から まもっとるんじゃ。',
        'なんな、てつどうてくれるんか? ほな たのむわ。のうかは ねこのてでも かりたいんじゃ!',
      ]);
    }
    const i = await this.ui.choice('なにを てつだう?', ['あぜの くさぬき', 'みずの みまわり', 'かかしの なおし']);
    await this.ui.fadePulse();
    this.audio.sfx('taiso');
    if (i === 0) {
      this.ui.toast('あぜの くさを ずんずん ぬいた。てのひらが くさの においに なった');
      if (Math.random() < 0.4) {
        this.audio.sfx('flee');
        this.ui.toast('くさむらから バッタが とびだして びっくりした!');
      }
    } else if (i === 1) {
      this.audio.sfx('splash');
      this.ui.toast('みなくちを あけて、たんぼに みずを いれた。ひざしで ぬるんだ みずが きもちええ');
    } else {
      this.ui.toast('かかしの ぼうしを かぶせなおして、むきを ととのえた。……なんか えらそうな かおに なった');
    }
    s.min = Math.min(s.min + 50, 1280); // のさぎょうは 時間がかかる
    s.nouka = (s.nouka || 0) + 1;
    s.friend.noboru = (s.friend.noboru || 0) + 1;
    if (s.nouka === 3) {
      this.audio.sfx('catch');
      await this.ui.say('ノボルさん', [
        'もう 3かいめか。ぼん、みどころ あるわ。',
        'ほれ、うちの もぎたての トマトじゃ。まるかじりが いちばん うまいんぞ。',
      ]);
      this.ui.toast('とれたての トマトを もろた! あまくて、ちょっと あおくさい なつの あじや', 'gold');
      logEvent(s, 'ノボルさんにトマトをもろた');
    } else if (s.nouka === 7) {
      this.audio.sfx('catch');
      await this.ui.say('ノボルさん', [
        'ぼんは もう いっちょまえの のうかじゃ。',
        'この たなだの こめはな、やまの みずだけで そだつんじゃ。',
        'あきに とれた しんまい、ばあちゃんとこへ とどけちゃるけん。たのしみに しとりまい。',
      ]);
      this.ui.toast('【やくそく】あきに ノボルさんの しんまいが とどくことになった!', 'gold');
      logEvent(s, 'ノボルさんとしんまいのやくそくをした');
    } else {
      const okini = [
        'おおきに、たすかったわ。ぼんは ええ てつだいじゃ。',
        'きょうも あついのう。むぎちゃ のんで いきまい。',
        'たなだの みずかがみはな、ゆうがたが いちばん きれいなんじゃ。',
        'いねの はなはな、あさの すずしいうちに さくんぞ。しっとったか?',
      ];
      await this.ui.say('ノボルさん', [okini[c.day % okini.length]]);
    }
    logEvent(s, 'たなだののさぎょうをてつだった');
  }

  // ---- ばあちゃんの畑のみずやり (きゅうりとトマト。つづけると そだつ) ----
  async mizuyari() {
    const s = this.state;
    const c = this.clock;
    s.flags['mizuyari' + c.day] = true;
    await this.ui.fadePulse();
    this.audio.sfx('splash');
    s.mizuyariN = (s.mizuyariN || 0) + 1;
    s.min = Math.min(s.min + 20, 1280);
    this.ui.toast('じょうろで たっぷり みずやり。かわいた つちの においが ふわっと たった');
    if (s.mizuyariN >= 5 && !s.flags.kyuriMogi) {
      s.flags.kyuriMogi = true;
      this.audio.sfx('catch');
      this.ui.toast('【おおきくなった!】そだてた きゅうりを 1ぽん もいで、まるかじりした! みずみずしい!', 'gold');
      s.friend.baachan = (s.friend.baachan || 0) + 1;
      logEvent(s, 'そだてたきゅうりをまるかじりした');
    } else if (s.mizuyariN === 1) {
      this.ui.toast('ばあちゃんの こえ「まいにち みずを やるとな、やさいは こたえてくれるんよ」');
    } else if (Math.random() < 0.3) {
      this.audio.sfx('suzu');
      this.ui.toast('トマトの みが すこし あこうなっとる。もうちょっとや');
    }
    logEvent(s, 'ばあちゃんのはたけにみずやりをした');
  }

  // ---- かくれんぼ (ふたりが まちのどこかに かくれる。ヒントをたよりに さがす) ----
  async startKakurenbo() {
    const s = this.state;
    s.flags['kakurenbo' + s.day] = true;
    await this.ui.say('ケンタ', ['かくれんぼ しようや! おまえ おに な!', 'クスノキんとこで 30 かぞえてから こいよ!']);
    await this.ui.say('ミナ', ['まちの どこかに かくれるけん。', 'くらくなるまでに みつけてな!']);
    const spot = KAKURENBO_SPOTS[Math.floor(Math.random() * KAKURENBO_SPOTS.length)];
    this.hide = { id: spot.id, wrong: 0 };
    await this.ui.fadePulse();
    this.audio.sfx('taiso');
    this.ui.toast('30…… 29…… (とばして) …… 3、2、1。もう ええかい!?');
    this.ui.toast(`(${spot.hint})`);
  }

  async searchKakurenbo(h) {
    const s = this.state;
    const target = KAKURENBO_SPOTS.find((k) => k.id === this.hide.id);
    if (h.id !== this.hide.id) {
      this.hide.wrong += 1;
      this.audio.sfx('flee');
      const miss = [
        'おらんなあ。セミの こえが するだけや。',
        'はずれ。アリの ぎょうれつを みつけただけやった。',
        'おらん。……でも どっかから くすくす きこえる!',
      ];
      this.ui.toast(miss[Math.min(this.hide.wrong - 1, miss.length - 1)]);
      if (this.hide.wrong >= 2) this.ui.toast(`(もういちど ヒント: ${target.hint})`);
      return;
    }
    this.audio.sfx('catch');
    this.ui.toast(`${h.place}から あたまが 2つ、ぴょこっ。……みーつけた!!`, 'gold');
    await this.ui.say('ケンタ', ['うわっ、なんで わかったん!? おまえ はなが きくのう!', 'よし、こんどは おれが おにやけん…… って、もう ええ じかんか。またな!']);
    s.friend.kenta = (s.friend.kenta || 0) + 1;
    s.friend.mina = (s.friend.mina || 0) + 1;
    logEvent(s, 'ケンタとミナとかくれんぼをした');
    this.hide = null;
  }

  // ---- えんがわの はなび (せんこうはなびは おばあちゃんと しょうぶ) ----
  async hanabi() {
    const s = this.state;
    const c = this.clock;
    s.flags['hanabi' + c.day] = true;
    await this.ui.say('おばあちゃん', [
      'ほれ、しんがいの スーパーで はなび こうてきとるよ。',
      'バケツに みずも くんだけん、えんがわで やろうか。',
    ]);
    const i = await this.ui.choice('どの はなびに する?', ['せんこうはなび (ばあちゃんと しょうぶ)', 'ススキはなび (パチパチの おおきいの)']);
    if (i === 0) {
      this.audio.sfx('suzu');
      this.ui.toast('シュッ…… ちいさな ひだまが ジジジ…… パチ、パチ……');
      await new Promise((r) => setTimeout(r, 1800));
      const win = Math.random() < 0.5;
      this.audio.sfx(win ? 'catch' : 'flee');
      if (win) {
        this.ui.toast('おばあちゃんのが さきに ポトッ。……かった!', 'gold');
        await this.ui.say('おばあちゃん', [
          'ありゃりゃ、おちてしもた。あんたの かちじゃ。',
          'せんこうはなびはな、いきを とめたら いかんのよ。……ばあちゃんが いうても せんないか。ふふ。',
        ]);
      } else {
        this.ui.toast('あっ……ぼくのが ポトッ。まけた!');
        await this.ui.say('おばあちゃん', [
          'ふふ、ばあちゃんの かち。',
          'てに ちからが はいっとった。ちからを ぬいて、じっと まつんよ。なんでも いっしょじゃ。',
        ]);
      }
    } else {
      this.audio.sfx('boom');
      this.ui.toast('シュボッ! パチパチパチ!! オレンジの ひばなが よるの にわを てらす!');
      await new Promise((r) => setTimeout(r, 1500));
      this.ui.toast('けむりの におい。……なんでか、なつの おわりの においが した');
      await this.ui.say('おばあちゃん', [
        'きれいじゃねえ。',
        'おじいさんも はなびが すきでな。よう ここで、こどもらと やりよったんよ。',
      ]);
    }
    s.friend.baachan = (s.friend.baachan || 0) + 1;
    logEvent(s, 'おばあちゃんとえんがわではなびをした');
  }

  // ---- 竹やぶのひみつきち (ケンタに さそわれてから 入れる) ----
  async himitsukichi() {
    const s = this.state;
    const c = this.clock;
    const key = 'kichi' + c.day;
    if (!s.flags.kichiFirst) {
      // はじめての ひみつきち
      s.flags.kichiFirst = true;
      s.flags[key] = true;
      await this.ui.say('ケンタ', [
        'ようこそ、おれらの ひみつきちへ!!',
        'ここはな、おれと ミナしか しらんかった ばしょや。おまえで 3にんめ。',
        'みかんばこの つくえに、ビーだまの びん。ぜんぶ おれらの たからもんや。',
      ]);
      await this.ui.say('ミナ', [
        'ここに おると、あめの ひでも たいくつせんのよ。',
        '……あんたも きょうから メンバーやけん。ないしょやで。',
      ]);
      this.audio.sfx('catch');
      this.ui.toast('【ひみつきちの メンバーに なった!】', 'gold');
      s.friend.kenta = (s.friend.kenta || 0) + 1;
      s.friend.mina = (s.friend.mina || 0) + 1;
      logEvent(s, 'ひみつきちのメンバーになった');
      return;
    }
    if (s.flags[key]) {
      this.ui.toast('きょうは もう たっぷり あそんだ。きちは にげへん');
      return;
    }
    s.flags[key] = true;
    // 日がわりの ひみつきちシーン
    const scenes = [
      async () => {
        await this.ui.say('ケンタ', ['さくせんかいぎや。あしたは どこで あそぶ?', '川か、やまか、いけか……ぜんぶって いうのも ありやな!']);
        logEvent(s, 'ひみつきちでさくせんかいぎをした');
      },
      async () => {
        this.audio.sfx('coin');
        await this.ui.say('ミナ', ['ラムネ もってきたんよ。3ぼん あるけん、いっぽんずつな。', 'ビーだまが カラカラ いうの、なんか すきなんよなあ。']);
        this.ui.toast('つめたい ラムネを のんだ。ビーだまが カラン と なった');
        logEvent(s, 'ひみつきちでラムネをのんだ');
      },
      async () => {
        await this.ui.say('ケンタ', ['たからもの こうかんせえへん? おれは この セミのぬけがら な。', '……え、いらん? なんでや! いちばん ええ やつやのに!']);
        logEvent(s, 'ひみつきちでたからものじまんをした');
      },
      async () => {
        await this.ui.say('ミナ', ['ここだけの はなしな。ケンタ、ほんまは よる こわいらしいで。', 'こないだ きもだめしの はなしに なったら、きゅうに だまっとった。ふふ。']);
        logEvent(s, 'ひみつきちでないしょばなしをきいた');
      },
    ];
    await scenes[c.day % scenes.length]();
    if (c.day >= 27) {
      await this.ui.say('ケンタ', ['……なあ。おまえが かえっても、この きち、このままに しとくけん。', 'らいねん きたとき、また ここ あつまろうや。やくそくな。']);
    }
  }

  // ---- 十瓶山の見晴らし台 (夕方は 特別な ながめ) ----
  // ---- えんがわの「間」: なにもしないで、ただ じかんが すぎるのを あじわう ----
  async engawaRest() {
    const s = this.state;
    const c = this.clock;
    this.audio.sfx('slurp');
    this.ui.toast('えんがわに こしかけた。ばあちゃんが むぎちゃを もってきてくれた');
    await new Promise((r) => setTimeout(r, 1700));
    await this.ui.fadePulse();
    s.min = Math.min(s.min + 45, 1255);
    const ph = phaseOf(s.min);
    if (ph === 'morning') {
      this.audio.sfx('suzu');
      await this.ui.showStory([
        'あさの かぜが えんがわを とおりぬけていく。<br>のきさきの ふうりんが、ちりん、と なった。<br><br>きょうは、なにして あそぼう。',
      ]);
    } else if (ph === 'day') {
      await this.ui.showStory([
        'セミしぐれの なか、つめたい むぎちゃを ごくり。<br>グラスの そとがわに、みずの つゆが ついとる。<br><br>なにも せんでも、じかんは すぎていく。<br>……それが、なんか ええ。',
      ]);
    } else if (ph === 'evening' && c.day >= 20) {
      await this.ui.showStory([
        'ゆうやけが、きのうより すこし はやい きがする。<br><br>ばあちゃんが よこに こしかけて、ぽつりと いった。<br>「なつやすみも、あと すこしやなあ」<br><br>……うん。しっとる。いま、いわんといて。',
      ]);
    } else if (ph === 'evening') {
      await this.ui.showStory([
        'そらが すこしずつ 茜色に なっていく。<br>やまの ほうで、ヒグラシが なきはじめた。<br><br>たのしい 1にちは、なんで こんなに はやいんやろ。',
      ]);
    } else {
      await this.ui.showStory([
        'よるの えんがわ。すずむしの こえ。<br>せんぷうきも いらんくらい、かぜが すずしい。<br><br>とうきょうでは みたことない かずの ほしが みえる。',
      ]);
    }
    logEvent(s, 'えんがわでぼーっとした');
  }

  async miharashi() {
    const s = this.state;
    const c = this.clock;
    s.flags['miharashi' + c.day] = true;
    const phase = phaseOf(c.min);
    await this.ui.fadePulse();
    if (phase === 'evening') {
      this.audio.sfx('suzu');
      if (c.day >= 24) {
        await this.ui.showStory([
          'ゆうひが、まちを ぜんぶ オレンジいろに そめとる。<br><br>ことでんが ちいさく みえる。<br>かわが ひかっとる。ばあちゃんの いえの やねも みえる。',
          'この けしきを、とうきょうに もって かえれたら いいのに。<br><br>……め に、やきつけて おこう。',
        ]);
        logEvent(s, 'みはらしだいでゆうひをめにやきつけた');
      } else {
        await this.ui.showStory([
          'ゆうひが しずんでいく。<br><br>とんぼの むれが、ひかりの なかを とんでいく。<br>まちの どこかから、ゆうげの においが してくる。',
        ]);
        logEvent(s, 'みはらしだいからゆうひをみた');
      }
      this.ui.toast('【とっておきの けしき】ゆうひが めに やきついた', 'gold');
    } else if (phase === 'night') {
      await this.ui.showStory([
        'まちの あかりが ぽつぽつ ともっとる。<br><br>とうきょうの よるは あかるいけど、<br>ここの よるは、ほしが あかるい。',
      ]);
      logEvent(s, 'みはらしだいからよるのまちをみた');
    } else {
      const views = [
        'まちが ぜんぶ みえる! あれが ばあちゃんの いえで、あっちが てんまんぐう…',
        'かわが きらきら ひかって、ことでんが おもちゃみたいに はしっとる',
        'とおくに さぬきふじ! ほんまに おむすびの かたちや',
      ];
      this.ui.toast(views[c.day % views.length]);
      logEvent(s, 'みはらしだいからまちをみた');
    }
  }

  // ---- 用水路の ザリガニ ----
  async zariganiPeek() {
    const s = this.state;
    const c = this.clock;
    s.flags['zari' + c.day] = true;
    this.ui.toast('ようすいろを そーっと のぞく……');
    await new Promise((r) => setTimeout(r, 900));
    const roll = Math.random();
    if (roll < 0.45) {
      this.audio.sfx('catch');
      const first = !s.flags.zariganiEver;
      s.flags.zariganiEver = true;
      s.zarigani = (s.zarigani || 0) + 1;
      this.ui.toast(`まっかな ザリガニ ゲット! はさみが りっぱや${first ? ' 【はじめての ザリガニ!】' : ` (${s.zarigani}ひきめ)`}`, first ? 'gold' : undefined);
      logEvent(s, 'ようすいろでザリガニをつかまえた');
    } else if (roll < 0.7) {
      this.audio.sfx('splash');
      this.ui.toast('あめんぼが スイーッ。ザリガニは いしの かげに かくれてしもた');
      logEvent(s, 'ようすいろをのぞいた');
    } else {
      this.audio.sfx('flee');
      this.ui.toast('でっかい トノサマガエルが ドボン! びっくりしたぁ…');
      logEvent(s, 'ようすいろでカエルにおどろいた');
    }
  }

  // ---- お盆: おはかまいり (13-15日のひるま) ----
  async ohakamairi() {
    const s = this.state;
    s.flags.obonHaka = true;
    await this.ui.fadePulse();
    await this.ui.say('おばあちゃん', [
      'ちょうど ええところに。おはかまいり、いっしょに いこか。',
      'おみずと おはな、もって おいで。',
    ]);
    this.audio.sfx('splash');
    this.ui.toast('おはかに みずを かけて、おはなを いけた');
    await new Promise((r) => setTimeout(r, 900));
    this.audio.sfx('suzu');
    await this.ui.say('おばあちゃん', [
      'ここには ひいじいちゃんと ひいばあちゃんが ねむっとるんよ。',
      'あんたの おかあさんも、ちいさいころ ようここへ きてな。',
      'せみとりの あみを もったまま てを あわせよったわ。ふふ。',
      '……ごせんぞさんに、あんたが きたこと、ちゃんと ほうこくしとこな。',
    ]);
    this.ui.toast('めを つぶって、てを あわせた。せみの こえだけが きこえる');
    s.friend.baachan = (s.friend.baachan || 0) + 2;
    logEvent(s, 'ばあちゃんとおはかまいりをした');
  }

  // ---- お盆: むかえび (13日のよる) ----
  async mukaebi() {
    const s = this.state;
    s.flags.mukaebi = true;
    await this.ui.say('おばあちゃん', [
      'きょうは おぼんの いりじゃけん、むかえびを たくんよ。',
      'おがらに ひを つけて…… ほれ、けむりが まっすぐ のぼるじゃろ。',
    ]);
    this.audio.sfx('boom');
    this.ui.toast('もんさきで ちいさな ひが パチパチ もえる。けむりが よるの そらへ のぼっていく');
    await new Promise((r) => setTimeout(r, 1200));
    await this.ui.say('おばあちゃん', [
      'ごせんぞさんは、この けむりに のって かえってくるんよ。',
      'おじいさんも、ことしも まよわず かえってこれるわ。',
      '……おかえりなさい、いうて あげような。',
    ]);
    this.ui.toast('「おかえりなさい」 ちいさなこえで いってみた');
    s.friend.baachan = (s.friend.baachan || 0) + 1;
    logEvent(s, 'ばあちゃんとむかえびをたいた');
  }

  // ---- お盆: おくりび (15日のよる) ----
  async okuribi() {
    const s = this.state;
    s.flags.okuribi = true;
    await this.ui.say('おばあちゃん', [
      'おぼんも おしまい。こんどは おくりびを たいて、みおくるんよ。',
    ]);
    this.audio.sfx('boom');
    this.ui.toast('また ちいさな ひが ともる。こんどの けむりは、なんだか さびしい');
    await new Promise((r) => setTimeout(r, 1200));
    await this.ui.say('おばあちゃん', [
      '「また らいねん、きてつかあさいよ」いうてな。',
      '……ひとは なんども わかれて、なんども また あうんよ。',
      'あんたと ばあちゃんも おんなじ。じゃけん、わかれは かなしいことばっかりじゃ ないんよ。',
    ]);
    this.ui.toast('ひが きえるまで、ふたりで だまって みとった');
    s.friend.baachan = (s.friend.baachan || 0) + 1;
    logEvent(s, 'ばあちゃんとおくりびをたいた');
  }

  // ---- よるの墓地: ひとだま (こわいけど、ほんとうは やさしい) ----
  async obakeTalk() {
    const s = this.state;
    const c = this.clock;
    if (!s.flags.obake) {
      // はじめての出会い: びっくり → ごせんぞさまの やさしいこえ
      this.audio.sfx('flee');
      this.ui.toast('うわっ…!? あおしろい ひが、ふわ…と ういとる…');
      await new Promise((r) => setTimeout(r, 1100));
      this.audio.sfx('suzu');
      await this.ui.say('???', [
        '…………',
        '…ぼうや。こんな よるふけに、ようきたのう。',
        'こわがらんでも ええ。わしは ずーっと むかしから、ここで ねむっとる もんじゃ。',
        'わしも こどものころは、あの あやがわで さかなを おいかけて、まっくらに なるまで あそんだもんよ。',
        '……なつは、ええのう。',
        'ぼうやの なつやすみは、いましか ない たからもんじゃ。だいじに しなさいよ。',
      ]);
      s.flags.obake = true;
      this.ui.toast('【ふしぎ】ひとだまは ふわりと ゆれて、おはかの うえに もどっていった', 'gold');
      logEvent(s, 'よるのはかばで ひとだまにあった');
    } else if (c.day >= 13 && c.day <= 15) {
      // お盆のあいだは にぎやからしい
      this.audio.sfx('suzu');
      await this.ui.say('ひとだま', [
        'おぼんじゃけんな、いまは みんな いえに かえっとって、はかばは るすばんばっかりよ。',
        'ぼうやの ばあちゃんちにも、なつかしい ひとが かえっとるはずじゃ。だいじに してあげんさい。',
      ]);
      logEvent(s, 'おぼんのよるに ひとだまとはなした');
    } else {
      const lines = [
        ['こんばんは、ぼうや。……ええ よかぜじゃのう。'],
        ['よるの むしのこえは、なんべん きいても ええもんじゃ。'],
        ['ほしが ようみえる よるじゃ。わしの ころと おんなじじゃなあ。'],
        ['はよ かえらんと、ばあちゃんが しんぱいするで。'],
        ['きょうは なにして あそんだんな? ……ふふ、かおを みたら わかるわ。'],
      ];
      this.audio.sfx('suzu');
      await this.ui.say('ひとだま', lines[c.day % lines.length]);
      logEvent(s, 'よるのはかばで ひとだまとはなした');
    }
  }

  // はじまりのシーン: モノローグ → ことでん車内 → 陶駅 → おばあちゃんの出迎え
  async opening() {
    const s = this.state;
    s.min = 480; // 8:00 ことでん車内から (サンライズせと 高松7:27着 → 築港のりかえ)
    await this.ui.showStory([
      '8がつ 1にち、あさ。<br><br>よるの ねだいれっしゃ「サンライズせと」は、<br>ぼくを のせて うみの うえの おおきな はしを わたった。',
      '「なつやすみのあいだ、おばあちゃんの いえで<br>すごしておいで」<br><br>おかあさんは そう いって、<br>とうきょうえきの ホームで みおくってくれた。',
      'たかまつに ついたら、ちっこうえきから<br>きいろい ことでんに のりかえる。<br><br>まどのそとは、みたことのない みどりいろ。',
      'かがわけん あやがわちょう。<br>おかあさんが うまれそだった まち ――<br><br>おばあちゃんの いえで、ぼくの なつやすみが はじまる。',
    ]);
    this.audio.sfx('train');
    const tr = this.world.trainRide;
    await this.warpTo(tr, tr.entry.x, tr.entry.z, Math.PI, 700);
    this.ride = { t: 0, dir: -1, next: 0, stops: [['すえ', 6]], realS: 15, gameMin: 10, opening: true, arriving: false };
    this.clock.rate = 10 / (15 * TIME_SCALE);
    this.ui.toast('ガタンゴトン… もうすぐ おばあちゃんの まちに つく');
  }

  async boardTrain(dir) {
    const q = dir > 0
      ? 'ことでんに のって かわらまちへ? (やく30ぷん)'
      : 'ことでんに のって すえまで かえる? (やく30ぷん)';
    const yes = await this.ui.choice(q, ['のる', 'やめとく']);
    if (yes !== 0) return;
    this.state.flags.rideTrain = true; // えきちょうさんが おぼえてくれとる
    this.audio.sfx('train');
    const tr = this.world.trainRide;
    await this.warpTo(tr, tr.entry.x, tr.entry.z, Math.PI, 500);
    this.ride = { t: 0, dir, next: 0, stops: dir > 0 ? STOPS_GO : STOPS_BACK, realS: RIDE_REAL_S, gameMin: RIDE_GAME_MIN, arriving: false };
    // 実際のことでんと同じ約30分が乗車中にすすむ
    this.clock.rate = RIDE_GAME_MIN / (RIDE_REAL_S * TIME_SCALE);
    this.ui.toast(dir > 0 ? '「すえ〜、すえ です。ドアが しまります」ガタン…' : '「かわらまち はっしゃ。ことひらほうめん です」ガタン…');
  }

  async arrive(r) {
    const s = this.state;
    const dir = r.dir;
    this.ride = null;
    this.clock.rate = 1;
    this.audio.sfx('train');
    if (r.opening) {
      this.ui.toast('「まもなく〜、すえ、すえ です」');
      await this.warpTo(null, 109.4, -7.6, Math.PI, 700);
      this.ui.toast('8月1日 ― なつやすみが はじまった!', 'gold');
      this.ui.toast('えきまえで おばあちゃんが まっとる! (E ではなす)');
      logEvent(s, 'ひとりでことでんにのってあやがわにきた');
      return;
    }
    if (dir > 0) {
      this.ui.toast('「まもなく〜、かわらまち、かわらまち。おでぐちは みぎがわ です」');
      const tk = this.world.takamatsu;
      await this.warpTo(tk, tk.entry.x, tk.entry.z, Math.PI, 500);
      this.ui.toast('かわらまちに とうちゃく! たかまつは とかいや…!', 'gold');
      if (!s.flags['takamatsu' + this.clock.day]) {
        s.flags['takamatsu' + this.clock.day] = true;
        logEvent(s, 'ことでんでたかまつへあそびにいった');
      }
    } else {
      this.ui.toast('「まもなく〜、すえ、すえ です」');
      await this.warpTo(null, 109.4, -7.6, Math.PI, 500);
      this.ui.toast('すえに かえってきた。やっぱり あやがわは おちつくなあ');
      logEvent(s, 'ことでんですえまでかえってきた');
    }
  }

  // 乗車を中断して状態をもどす (じどう就寝など)
  cancelRide() {
    this.ride = null;
    this.clock.rate = 1;
  }

  update(dt, player, prompts) {
    this.player = player;
    // ことでん乗車中: 車窓を流し、駅アナウンスを出し、時間どおりに到着する
    if (this.ride) {
      const r = this.ride;
      r.t += dt;
      this.world.trainRide.update(dt, r.dir);
      const gmin = (r.t / r.realS) * r.gameMin;
      while (r.next < r.stops.length && gmin >= r.stops[r.next][1]) {
        const [name] = r.stops[r.next];
        this.ui.toast(`「つぎは〜、${name}、${name} です」`);
        r.next += 1;
      }
      if (r.t >= r.realS && !r.arriving) {
        r.arriving = true;
        this.arrive(r);
      }
    }
    // 扇風機の首とはね (家のなかの小ネタ)
    const fan = this.world.interior && this.world.interior.fanHead;
    if (fan && this.world.indoor) fan.rotation.y = -2.1 + Math.sin(performance.now() / 2400) * 0.6;
    // 家のなかのおばあちゃん (時間帯で台所や茶の間にいる)
    const itr = this.world.interior;
    if (itr && itr.baachan) {
      const home = this.baachanHome();
      itr.baachan.visible = !!home;
      if (home) {
        itr.baachan.position.set(home.x, itr.floorY, home.z);
        if (this.world.sub === itr) {
          const d = Math.hypot(home.x - player.pos.x, home.z - player.pos.z);
          itr.baachan.rotation.y = d < 3.2
            ? Math.atan2(player.pos.x - home.x, player.pos.z - home.z)
            : home.ry;
        } else {
          itr.baachan.rotation.y = home.ry;
        }
      }
    }
    // まつり飾りの表示制御 (8/25 滝宮天満宮 / 8/9 小学校の夏まつり)
    const isMatsuri = this.clock.event === 'matsuri';
    const isGakusai = this.clock.event === 'gakusai';
    this.world.festivalGroup.visible = isMatsuri;
    if (this.world.gakusaiGroup) this.world.gakusaiGroup.visible = isGakusai;
    this.world.activeFestivalRects = isMatsuri ? this.world.festivalRects
      : isGakusai ? this.world.gakusaiRects : null;
    this.festivalOn = isMatsuri || isGakusai;
    if (this.festivalOn) {
      const glow = this.clock.min >= 1020 ? 1.2 : 0;
      for (const m of this.world.lanternMats) m.emissiveIntensity = glow;
    }

    // 17:00 まちの防災無線から『夕焼け小焼け』のチャイム (そとにいるときだけ きこえる)
    if (!this.world.indoor && this.clock.min >= 1020 && this.clock.min < 1060
        && !this.state.flags['chime' + this.clock.day]) {
      this.state.flags['chime' + this.clock.day] = true;
      this.audio.chime();
      this.ui.toast('とおくの スピーカーから 5じの チャイム。……そろそろ かえる じかんや');
    }

    // 18:00 やまの おてらから かねの音 (そとにいるとき)
    if (!this.world.indoor && this.clock.min >= 1080 && this.clock.min < 1120
        && !this.state.flags['kane' + this.clock.day]) {
      this.state.flags['kane' + this.clock.day] = true;
      this.audio.sfx('kane');
      this.ui.toast('やまの おてらから、かねの おと。……ゴーン……');
    }

    // 夕立: ふりはじめの ひとこと (そとにいるとき)
    if (!this.world.indoor && this.clock.yudachi && !this.state.flags['yudachi' + this.clock.day]) {
      this.state.flags['yudachi' + this.clock.day] = true;
      this.ui.toast('ポツ、ポツ…… ザーッ!! ゆうだちや! セミが いっせいに だまった');
      logEvent(this.state, 'ゆうだちにあった');
    }
    // 夕立あがりの虹 (そとで みたときだけ)
    if (!this.world.indoor && this.clock.rainbow && !this.state.flags['niji' + this.clock.day]) {
      this.state.flags['niji' + this.clock.day] = true;
      this.audio.sfx('suzu');
      this.ui.toast('【にじ!】あめあがりの そらに、おっきな にじが かかっとる!', 'gold');
      logEvent(this.state, 'ゆうだちのあとのにじをみた');
    }

    // かくれんぼは くらくなったら おしまい
    if (this.hide && this.clock.min >= 1140) {
      this.hide = null;
      this.ui.toast('くらくなってきた。ふたりとも、いつのまにか いえに かえったみたいや');
    }
    // ながれぼし (はれた よる、そとに おると たまに)
    if (!this.world.indoor && this.clock.min >= 1160 && this.clock.weather === 'sunny'
        && !this.state.flags['hoshi' + this.clock.day] && Math.random() < dt * 0.02) {
      this.state.flags['hoshi' + this.clock.day] = true;
      this.audio.sfx('suzu');
      this.ui.toast('あっ……! ながれぼし! (きえるまえに ねがいごとを 3かい……まにあわんかった)', 'gold');
      logEvent(this.state, 'ながれぼしをみた');
    }

    for (const spot of this.spots) {
      const d = Math.hypot(spot.x - player.pos.x, spot.z - player.pos.z);
      if (d < spot.r) prompts.push({ dist: d, label: spot.label, action: spot.action });
    }
  }
}
