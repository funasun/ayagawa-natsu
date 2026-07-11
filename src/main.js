import * as THREE from 'three';
import { newState, loadState, saveState, clearSave } from './core/state.js';
import { GameClock } from './core/clock.js';
import { buildWorld } from './world/world.js';
import { Sky } from './world/sky.js';
import { Effects } from './world/effects.js';
import { Input } from './systems/input.js';
import { TouchControls } from './systems/touch.js';
import { Player } from './systems/player.js';
import { BugSystem } from './systems/bugs.js';
import { FishingSystem } from './systems/fishing.js';
import { NpcSystem } from './systems/npc.js';
import { EventSystem } from './systems/events.js';
import { AudioEngine } from './audio/audio.js';
import { UI } from './ui/ui.js';
import { options, saveOptions } from './core/options.js';
import { enterFullscreen, fsElement, fsSupported, lockLandscape } from './core/fullscreen.js';
import { DAY_START, calDay, phaseOf } from './data/data.js';

// --- three.js 基本 ---
const isCoarse = matchMedia('(pointer: coarse)').matches;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, isCoarse ? 1.75 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 600);

// --- 画面の向き: スマホが たてむきのまま 5秒たったら、ステージを90°回して強制よこ画面 ---
let forcedLandscape = false;
let iosHintOn = false; // iPhone むけ「ホーム画面に追加」案内の表示ちゅうは強制回転を待つ
function applyViewport() {
  // 強制よこ画面のときは body が回転するぶん、幅と高さを入れかえて描く
  const w = forcedLandscape ? innerHeight : innerWidth;
  const h = forcedLandscape ? innerWidth : innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
const coarsePointer = matchMedia('(pointer: coarse)');
let forceTimer = null;
function evalOrientation() {
  const portrait = innerHeight > innerWidth;
  if (portrait && coarsePointer.matches && !iosHintOn) {
    // たてむき: 5秒だけ「よこにしてね」案内を見せ、それでも たてなら強制回転
    if (!forcedLandscape && forceTimer === null) {
      forceTimer = setTimeout(() => {
        forceTimer = null;
        forcedLandscape = true;
        document.body.classList.add('force-landscape');
        applyViewport();
      }, 5000);
    }
  } else {
    // 実機を よこにした / PC: 強制回転を解除
    if (forceTimer !== null) { clearTimeout(forceTimer); forceTimer = null; }
    if (forcedLandscape) {
      forcedLandscape = false;
      document.body.classList.remove('force-landscape');
    }
  }
  applyViewport();
}
window.addEventListener('resize', evalOrientation);
window.addEventListener('orientationchange', () => setTimeout(evalOrientation, 200));
evalOrientation();

// スマホは 最初のタップで 全画面へ (URLバーを消す)。Fullscreen API 対応端末のみ。
// requestFullscreen は「ユーザー操作ちゅう」でないと通らないので pointerdown を起点にする。
if (coarsePointer.matches && fsSupported()) {
  let fsArmed = true;
  const tryFs = () => {
    if (!fsArmed || fsElement()) return;
    enterFullscreen().then(() => { fsArmed = false; }).catch(() => {});
  };
  window.addEventListener('pointerdown', tryFs, true);
  const onFsChange = () => { if (fsElement()) { fsArmed = false; lockLandscape(); } else { fsArmed = true; } };
  document.addEventListener('fullscreenchange', onFsChange);
  document.addEventListener('webkitfullscreenchange', onFsChange);
}

// iPhone むけ: Fullscreen API が使えない端末では「ホーム画面に追加」で全画面になる。
// 初回だけ、小さな案内を出す (案内ちゅうは強制回転を待って、読む時間をつくる)。
const a2hsEl = document.getElementById('a2hs');
let a2hsTimer = null;
function hideIosHint() {
  if (!iosHintOn) return;
  iosHintOn = false;
  a2hsEl.classList.remove('on');
  if (a2hsTimer) { clearTimeout(a2hsTimer); a2hsTimer = null; }
  evalOrientation(); // 案内を消したら、必要なら強制回転タイマーを始める
}
function maybeIosHint() {
  const ua = navigator.userAgent;
  const iOS = /iPhone|iPod/.test(ua) || (/iPad/.test(ua)) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  const standalone = navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;
  // 全画面APIが使える端末(iPad等)や、すでにホーム画面から起動ずみなら 出さない
  if (!iOS || standalone || fsSupported() || !coarsePointer.matches) return;
  if (localStorage.getItem('ayagawa.a2hs') === '1') return;
  localStorage.setItem('ayagawa.a2hs', '1');
  iosHintOn = true;
  a2hsEl.classList.add('on');
  a2hsTimer = setTimeout(hideIosHint, 12000);
}
a2hsEl.querySelector('.a2hs-close').addEventListener('pointerdown', (e) => {
  e.preventDefault(); e.stopPropagation(); hideIosHint();
});

// --- ゲームオブジェクト ---
const state = newState();
const clock3 = new THREE.Clock();
const gameClock = new GameClock(state);
const audio = new AudioEngine();
audio.setMuted(!options.sound);
const ui = new UI(state, audio);
document.getElementById('opt-toggle').addEventListener('pointerdown', (e) => {
  e.preventDefault();
  ui.toggleSettings();
});
document.getElementById('pause-toggle').addEventListener('pointerdown', (e) => {
  e.preventDefault();
  // 会話やイベントちゅうは ポーズできない (すでに時間は止まっているため)
  if (started && !sleeping && (!ui.modal || ui.pauseOpen)) ui.togglePause();
});
const input = new Input();
new TouchControls(input);

// --- カメラ回転: なにもない ところを よこにドラッグ (マウス/タッチ両対応) ---
{
  const cv = renderer.domElement;
  let dragId = null, lastX = 0, lastY = 0, acc = 0;
  cv.addEventListener('pointerdown', (e) => {
    dragId = e.pointerId; lastX = e.clientX; lastY = e.clientY; acc = 0;
  });
  window.addEventListener('pointermove', (e) => {
    if (dragId !== e.pointerId) return;
    // 強制よこ画面ちゅうは 画面が90°回っているので、見た目のよこ = 端末のたて
    const fl = document.body.classList.contains('force-landscape');
    const dx = fl ? (e.clientY - lastY) : (e.clientX - lastX);
    lastX = e.clientX; lastY = e.clientY;
    acc += Math.abs(dx);
    if (acc > 6) input.yawDelta -= dx * 0.0052; // 6px の あそびで タップと区別
  });
  const endDrag = (e) => { if (dragId === e.pointerId) dragId = null; };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
}
const world = buildWorld(scene);
const sky = new Sky(scene);
const effects = new Effects(scene, world, gameClock, audio);
const player = new Player(scene, world, input, camera);
const bugs = new BugSystem(scene, world, state, gameClock, ui, audio);
const fishing = new FishingSystem(scene, world, state, gameClock, ui, audio);
const npcs = new NpcSystem(scene, world, state, gameClock, ui, audio);
const events = new EventSystem(world, state, gameClock, ui, audio, () => sleep(false));
events.player = player; // update() 前に warpTo (オープニング) が走っても大丈夫なように

let started = false;
let sleeping = false;

async function sleep(auto) {
  if (sleeping || !started) return;
  sleeping = true;
  fishing.stop();
  if (auto) ui.toast('もう おそい… ねむくなってきた');

  if (state.day >= 31) {
    await ui.fade(true, 1600);
    audio.setScene({ phase: 'night', weather: 'sunny', festivalNight: false });
    audio.sfx('train');
    await ui.showEnding();
    clearSave();
    location.reload();
    return;
  }

  await ui.fade(true, 1200);
  await ui.showDiary(gameClock);
  state.day += 1;
  state.min = DAY_START;
  state.today = [];
  state.talkedToday = {};
  bugs.clearAll();
  // どこで眠っても、あさは2階のじぶんのへやのふとんで目がさめる
  events.cancelRide();
  world.indoor = true;
  world.sub = world.interior2f;
  player.mesh.position.set(38.9, world.interior2f.floorY, -1.2);
  player.heading = Math.PI / 2;
  player.mesh.rotation.y = Math.PI / 2;
  player.snapCamera();
  saveState(state);
  await new Promise((r) => setTimeout(r, 300));
  // さいごの朝だけ、目がさめる前にひとことだけモノローグ
  if (state.day === 31) {
    await ui.showStory([
      '8がつ 31にち。<br><br>めが さめたとき、いつもの セミのこえが<br>きのうより とおくに きこえた。<br><br>きょうが、さいごの ひだ。',
    ]);
  }
  await ui.fade(false, 1200);
  const cal = calDay(state.day);
  // 後半は「おわり」が すこしずつ ちかづいてくる
  const left = 31 - state.day;
  const leftNote = state.day >= 25 && left > 0 ? ` ……なつやすみは あと${left}にち。` : '';
  ui.toast(`8月${state.day}日の あさ。${cal.note ? ' 〜' + cal.note + '〜' : ''}${leftNote}`);
  sleeping = false;
}

gameClock.onDayEnd = () => sleep(true);

// --- 起動フロー ---
async function boot() {
  ui.els.fade.style.opacity = 1;
  state.min = 1035; // タイトル裏は夕方の光
  const saved = loadState();
  setTimeout(() => { ui.els.fade.style.opacity = 0; }, 400);
  maybeIosHint(); // iPhone なら タイトルのうちに「ホーム画面に追加」案内を出す
  const action = await ui.showTitle(!!saved);
  if (action === 'continue' && saved) {
    Object.assign(state, saved);
  } else {
    clearSave();
    Object.assign(state, newState());
  }
  await ui.fade(true, 500);
  player.snapCamera();
  started = true;
  document.body.classList.add('started'); // ポーズボタンを表示
  if (state.day === 1 && !state.flags.metBaachan && state.min <= DAY_START + 10) {
    // はじめて: オープニング (モノローグ → ことでん車内 → 陶駅でおばあちゃんの出迎え)
    await events.opening();
  } else {
    await ui.fade(false, 1000);
    ui.toast(`8月${state.day}日 ― つづきから`);
  }
  // タッチ操作の ひとには、はじめの1回だけ ボタンの ばしょを ひからせて おしえる
  if (ui.touchUI && !state.flags.touchTut) {
    state.flags.touchTut = true;
    await ui.showTutorial();
    saveState(state);
  }
}

// --- メインループ ---
let audioT = 0;
let currentAction = null;

// 時間帯によるスクリーンの色被せ (真昼は白い日ざし、夕方は茜、夜はあおい やみ)
const gradeEl = document.getElementById('grade');
function gradeColor(min, weather) {
  const rainy = weather === 'rain' || weather === 'storm';
  if (min >= 1170 || min < 340) return 'rgba(35, 55, 120, 0.26)';   // 夜
  if (min >= 1105) return 'rgba(125, 70, 140, 0.20)';               // マジックアワーの うす紫
  if (min >= 1030) return 'rgba(255, 115, 45, 0.21)';               // 夕方の茜
  if (min >= 980) return 'rgba(255, 172, 80, 0.14)';                // 16時すぎの 金色
  if (rainy) return 'rgba(148, 158, 175, 0.18)';                    // 雨の鉛色
  if (min >= 640) return 'rgba(255, 250, 226, 0.20)';               // 真昼の 白くとぶ日ざし
  return 'rgba(198, 222, 255, 0.10)';                               // 朝の すんだ空気
}

function frame(forcedDt) {
  const dt = forcedDt !== undefined ? forcedDt : Math.min(clock3.getDelta(), 0.05);
  const modal = ui.modal;
  const frozen = !started || modal || fishing.active || sleeping;
  document.body.classList.toggle('modal', !!(modal || sleeping));

  if (started && !modal && !sleeping) gameClock.tick(dt);

  sky.update(gameClock, player.pos, dt);
  effects.update(dt, player.pos);
  player.update(dt, frozen, events.festivalOn, effects.fireworksOn);

  const prompts = [];
  if (started && !modal && !sleeping) {
    const interactHit = input.interact;
    if (!world.indoor) {
      bugs.update(dt, player, prompts);
      npcs.hideKids = !!events.hide; // かくれんぼ中はふたりを非表示に
      npcs.update(dt, player, prompts);
    }
    events.update(dt, player, prompts);
    if (!world.indoor) fishing.update(dt, player, fishing.active ? [] : prompts, fishing.active ? interactHit : false);

    if (fishing.active) {
      ui.showPrompt(fishing.phase === 'bite' ? 'いまだ!!' : 'まつ… (やめられる)');
      currentAction = null;
    } else {
      prompts.sort((a, b) => a.dist - b.dist);
      const top = prompts[0] || null;
      ui.showPrompt(top ? top.label : null);
      currentAction = top ? top.action : null;
      if (interactHit && currentAction) currentAction();
    }

    if (input.hit('KeyZ')) ui.toggleZukan();
    if (input.hit('KeyX')) ui.toggleMap(player.pos);
  } else if (ui.zukanOpen && input.hit('KeyZ')) {
    ui.toggleZukan();
  } else if (ui.mapOpen && input.hit('KeyX')) {
    ui.toggleMap();
  } else if (modal || sleeping) {
    ui.showPrompt(null);
  }

  // やることガイド (つぎに なにをすればいいか、チップで そっと しめす)
  if (started) {
    let guide = null;
    if (state.day === 1 && !state.flags.metBaachan) guide = 'えきまえの おばあちゃんに はなしかけよう';
    else if (state.flags.rodFound && !state.flags.rodBaachan) guide = 'つりざおの こと、おばあちゃんに きいてみよう';
    else if (state.flags.rodBaachan && !state.flags.rodStory) guide = 'じいちゃんの つりざおを、ため池の げんじいに 見せにいこう';
    else if (state.flags.bunshuHint && !state.flags.bunshuDone) guide = 'ひるまに 小学校で ぶんしゅうを 見せてもらおう';
    ui.setGuide(guide);
  }

  // ポーズ (P / Esc)。ずかん・せってい・会話が開いているときは無効
  if ((input.hit('KeyP') || input.hit('Escape')) && started && !sleeping && (!ui.modal || ui.pauseOpen)) {
    ui.togglePause();
  }

  if (input.hit('KeyM')) {
    const m = audio.toggleMute();
    options.sound = !m;
    saveOptions();
    if (ui.settingsOpen) ui.renderSettings();
    ui.toast(m ? 'おと OFF' : 'おと ON');
  }

  if (started) ui.updateHUD(gameClock);

  audioT -= dt;
  if (audioT <= 0) {
    audioT = 1;
    // 時間帯カラーグレーディング (CSS transition がなめらかに つないでくれる)
    gradeEl.style.backgroundColor = gradeColor(state.min, gameClock.weather);
    audio.setScene({
      phase: phaseOf(state.min),
      weather: gameClock.weather, // 夕立ちゅうは 'rain' になる
      festivalNight: ['matsuri', 'gakusai'].includes(calDay(state.day).event) && state.min >= 1020,
      lateSummer: state.day >= 18, // 後半はセミの主役が交代して、おわりの気配がする
    });
  }

  input.endFrame();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(() => frame());

boot();

// デバッグ用 (コンソールから時間・日付を動かせる)
window.__game = {
  state, player, npcs, bugs, fishing, events, ui, renderer, camera, effects,
  step: (dt = 0.016) => frame(dt),
  get clock() { return gameClock; },
  // 実機なしで 強制よこ画面を確認するためのフック
  forceLandscape(on) {
    forcedLandscape = !!on;
    document.body.classList.toggle('force-landscape', forcedLandscape);
    applyViewport();
  },
};
