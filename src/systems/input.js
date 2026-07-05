export class Input {
  constructor() {
    this.keys = new Set();
    this.pressed = new Set();
    // タッチスティックのアナログ入力 (-1..1)
    this.axisX = 0;
    this.axisY = 0;
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.keys.add(e.code);
      this.pressed.add(e.code);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }
  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }
  get interact() { return this.hit('KeyE') || this.hit('Space') || this.hit('Enter'); }
  endFrame() { this.pressed.clear(); }
}
