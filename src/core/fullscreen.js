// 全画面まわり。
// Android Chrome 等: Fullscreen API で URL バーを消し、可能なら横向きに固定。
// iOS Safari(iPhone): Fullscreen API 非対応 → index.html の apple メタ +「ホーム画面に追加」で対応。

export function fsElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

// この端末が Fullscreen API に対応しているか (iPhone Safari は false)
export function fsSupported() {
  const el = document.documentElement;
  return !!(el.requestFullscreen || el.webkitRequestFullscreen);
}

// 可能なら画面を横向きに固定 (全画面中のみ効く。未対応でも例外を投げない)
export function lockLandscape() {
  try {
    const o = screen.orientation;
    if (o && o.lock) o.lock('landscape').catch(() => {});
  } catch { /* 未対応の端末 */ }
}

// 全画面に入る。成功したら横向きロックも試みる。返り値は Promise。
export function enterFullscreen() {
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen;
  if (!req) return Promise.reject(new Error('fullscreen unsupported'));
  try {
    const done = Promise.resolve(req.call(el, { navigationUI: 'hide' }));
    done.then(lockLandscape).catch(() => {});
    return done;
  } catch (e) {
    return Promise.reject(e);
  }
}

export function exitFullscreen() {
  const ex = document.exitFullscreen || document.webkitExitFullscreen;
  try { if (ex && fsElement()) ex.call(document); } catch { /* noop */ }
}

export function toggleFullscreen() {
  if (fsElement()) exitFullscreen();
  else enterFullscreen().catch(() => {});
}
