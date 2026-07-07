// スマホ用バーチャルスティックとボタン
const CTRL_KEY = 'ayagawa.ctrl';

export class TouchControls {
  constructor(input) {
    // 操作モード: 保存があれば優先、なければ端末から自動判定。ボタンでいつでも切替可
    const auto = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    let mode = localStorage.getItem(CTRL_KEY) || (auto ? 'touch' : 'kb');
    const toggle = document.getElementById('ctrl-toggle');
    const apply = () => {
      document.body.classList.toggle('touch', mode === 'touch');
      toggle.textContent = mode === 'touch' ? 'そうさ: タッチ' : 'そうさ: キーボード';
    };
    toggle.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      mode = mode === 'touch' ? 'kb' : 'touch';
      localStorage.setItem(CTRL_KEY, mode);
      apply();
    });
    apply();

    const joy = document.getElementById('joy');
    const knob = document.getElementById('joy-knob');
    const R = 42;
    let pid = null;

    const setAxis = (e) => {
      const rect = joy.getBoundingClientRect();
      // 指の位置は「画面座標」。強制よこ画面のときはステージを +90°(時計回り)
      // 回しているので、局所座標へ逆回転してから軸に入れる (指の向き = ゲームの向き)
      const sx = (e.clientX - (rect.left + rect.width / 2)) / R;
      const sy = (e.clientY - (rect.top + rect.height / 2)) / R;
      let dx, dy;
      if (document.body.classList.contains('force-landscape')) {
        dx = sy; dy = -sx;
      } else {
        dx = sx; dy = sy;
      }
      const len = Math.hypot(dx, dy);
      if (len > 1) { dx /= len; dy /= len; }
      input.axisX = dx;
      input.axisY = dy;
      knob.style.transform = `translate(${dx * R}px, ${dy * R}px)`;
    };
    const reset = () => {
      pid = null;
      input.axisX = input.axisY = 0;
      knob.style.transform = '';
    };
    joy.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      pid = e.pointerId;
      try { joy.setPointerCapture(pid); } catch { /* 合成イベントでは失敗する */ }
      setAxis(e);
    });
    joy.addEventListener('pointermove', (e) => { if (e.pointerId === pid) setAxis(e); });
    joy.addEventListener('pointerup', (e) => { if (e.pointerId === pid) reset(); });
    joy.addEventListener('pointercancel', reset);

    const bind = (id, code) => {
      const el = document.getElementById(id);
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        input.pressed.add(code);
        el.classList.add('press');
      });
      el.addEventListener('pointerup', () => el.classList.remove('press'));
      el.addEventListener('pointercancel', () => el.classList.remove('press'));
    };
    bind('btnA', 'KeyE');
    bind('btnZ', 'KeyZ');
    bind('btnX', 'KeyX');
  }
}
