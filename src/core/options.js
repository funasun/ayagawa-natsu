// ゲーム設定 (localStorageに永続化)
const KEY = 'ayagawa.opts';

export const options = Object.assign(
  { sound: true, camBob: true },
  JSON.parse(localStorage.getItem(KEY) || 'null'),
);

export function saveOptions() {
  localStorage.setItem(KEY, JSON.stringify(options));
}
