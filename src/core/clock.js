import { TIME_SCALE, DAY_END, phaseOf, calDay } from '../data/data.js';

// 夕立の日 (晴れの日のうち、きまった何日かで 14:15ごろ ザッとくる)
const hash01 = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
export const isYudachiDay = (day) => calDay(day).weather === 'sunny' && hash01(day) < 0.34;
export const YUDACHI_START = 855; // 14:15
export const YUDACHI_END = 895; // 14:55
export const RAINBOW_END = 945; // 15:45 まで虹

export class GameClock {
  constructor(state) {
    this.state = state;
    this.onDayEnd = null; // 21:30到達時に呼ばれる
    this.rate = 1; // 時間の進みの倍率 (ことでん乗車中は実際の所要時間に合わせて調整)
  }
  tick(dt) {
    const s = this.state;
    if (s.min >= DAY_END) return;
    // 夕方 (16:40-19:30) は時間がゆっくり流れる。夕焼けと ヒグラシの「間」を あじわうため
    const evening = s.min >= 1000 && s.min < 1170 ? 0.62 : 1;
    s.min += dt * TIME_SCALE * this.rate * evening;
    if (s.min >= DAY_END) {
      s.min = DAY_END;
      if (this.onDayEnd) this.onDayEnd();
    }
  }
  get min() { return this.state.min; }
  get day() { return this.state.day; }
  get phase() { return phaseOf(this.state.min); }
  // 夕立ちゅうは 晴れの日でも 'rain' としてふるまう (音・虫・そら すべて)
  get yudachi() { return isYudachiDay(this.state.day) && this.state.min >= YUDACHI_START && this.state.min < YUDACHI_END; }
  get rainbow() { return isYudachiDay(this.state.day) && this.state.min >= YUDACHI_END && this.state.min < RAINBOW_END; }
  get weather() { return this.yudachi ? 'rain' : calDay(this.state.day).weather; }
  get event() { return calDay(this.state.day).event || null; }
  fmt() {
    const h = Math.floor(this.state.min / 60);
    const m = Math.floor(this.state.min % 60);
    return `${h}:${String(m).padStart(2, '0')}`;
  }
  // 0(真夜中)..1 の太陽位置用正規化: 6:00=朝焼け, 12:00=真上, 19:00=日没
  get sunT() {
    return (this.state.min - 300) / (1200 - 300); // 5:00->0, 20:00->1
  }
}
