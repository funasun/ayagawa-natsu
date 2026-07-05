const KEY = 'ayagawa_natsu_save_v1';

export function newState() {
  return {
    day: 1,
    min: 360,
    bugs: {},        // id -> 捕獲数
    fish: {},        // id -> 捕獲数
    friend: {},      // npcId -> 仲良し度
    talkedToday: {}, // npcId -> true
    stamps: 0,       // ラジオ体操
    udon: 0,         // 朝うどん回数
    today: [],       // その日の日記ネタ
    diary: [],       // {day, weather, lines}
    flags: {},
  };
}

export function saveState(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* private mode等 */ }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (typeof s.day !== 'number') return null;
    return Object.assign(newState(), s);
  } catch (e) { return null; }
}

export function clearSave() {
  try { localStorage.removeItem(KEY); } catch (e) {}
}

export function logEvent(state, text) {
  if (!state.today.includes(text)) state.today.push(text);
}

export function bugCount(state) { return Object.keys(state.bugs).length; }
export function fishCount(state) { return Object.keys(state.fish).length; }
