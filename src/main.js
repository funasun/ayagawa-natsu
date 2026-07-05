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
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
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
  ui.toast(`8月${state.day}日の あさ。${cal.note ? ' 〜' + cal.note + '〜' : ''}`);
  sleeping = false;
}

gameClock.onDayEnd = () => sleep(true);

// --- 起動フロー ---
async function boot() {
  ui.els.fade.style.opacity = 1;
  state.min = 1035; // タイトル裏は夕方の光
  const saved = loadState();
  setTimeout(() => { ui.els.fade.style.opacity = 0; }, 400);
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
}

// --- メインループ ---
let audioT = 0;
let currentAction = null;

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
      ui.showPrompt(fishing.phase === 'bite' ? 'いまだ!!' : 'まつ… (E でやめる)');
      currentAction = null;
    } else {
      prompts.sort((a, b) => a.dist - b.dist);
      const top = prompts[0] || null;
      ui.showPrompt(top ? top.label : null);
      currentAction = top ? top.action : null;
      if (interactHit && currentAction) currentAction();
    }

    if (input.hit('KeyZ')) ui.toggleZukan();
  } else if (ui.zukanOpen && input.hit('KeyZ')) {
    ui.toggleZukan();
  } else if (modal || sleeping) {
    ui.showPrompt(null);
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
    audio.setScene({
      phase: phaseOf(state.min),
      weather: gameClock.weather, // 夕立ちゅうは 'rain' になる
      festivalNight: calDay(state.day).event === 'matsuri' && state.min >= 1020,
      lateSummer: state.day >= 18, // 後半はセミの主役が交代して、おわりの気配がする
    });
  }

  input.endFrame();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(() => frame());

boot();

// デバッグ用 (コンソールから時間・日付を動かせる)
window.__game = { state, player, npcs, bugs, fishing, events, ui, step: (dt = 0.016) => frame(dt), get clock() { return gameClock; } };
