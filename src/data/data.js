// 図鑑データと30日カレンダー

// rarity: 1=よく見る 2=ときどき 3=めずらしい
export const BUGS = [
  { id: 'aburazemi', name: 'アブラゼミ', rarity: 1, spot: 'tree', time: [420, 1080], color: 0x8a5a2b, size: 0.32, desc: 'ジリジリジリ…あついこえでなく、なつのぬし。' },
  { id: 'kumazemi', name: 'クマゼミ', rarity: 2, spot: 'tree', time: [360, 720], color: 0x1c1c1c, size: 0.38, desc: 'シャアシャアシャア! あさいちばんのおおごえ。' },
  { id: 'niinii', name: 'ニイニイゼミ', rarity: 1, spot: 'tree', time: [400, 1050], color: 0x77705c, size: 0.22, desc: 'チーー…と、ひかえめになく小さなセミ。' },
  { id: 'higurashi', name: 'ヒグラシ', rarity: 2, spot: 'tree', time: [960, 1170], color: 0x9c6b3f, size: 0.3, desc: 'カナカナカナ…ゆうぐれのこえは、すこしせつない。' },
  { id: 'kabuto', name: 'カブトムシ', rarity: 3, spot: 'tree', time: [1080, 1290], time2: [360, 470], color: 0x3a2010, size: 0.42, desc: 'なつやすみの王さま。あさはやくか、よるにあらわれる。' },
  { id: 'nokogiri', name: 'ノコギリクワガタ', rarity: 3, spot: 'tree', time: [1080, 1290], color: 0x4a1e10, size: 0.4, desc: 'りっぱなあご! みつけたらしずかにちかづこう。' },
  { id: 'kanabun', name: 'カナブン', rarity: 1, spot: 'tree', time: [420, 1020], color: 0x557733, size: 0.22, desc: 'ブーンととんできて、きのしるをなめている。' },
  { id: 'oniyanma', name: 'オニヤンマ', rarity: 3, spot: 'water', time: [480, 1020], color: 0x226644, size: 0.45, desc: 'にほんさいだいのトンボ。かわのうえをパトロール中。' },
  { id: 'shiokara', name: 'シオカラトンボ', rarity: 1, spot: 'water', time: [420, 1080], color: 0x88aacc, size: 0.3, desc: 'みずべのじょうれんさん。おすは青っぽい。' },
  { id: 'ageha', name: 'アゲハチョウ', rarity: 2, spot: 'grass', time: [420, 1020], color: 0xddcc44, size: 0.35, desc: 'ひらひらまいながら、はなからはなへ。' },
  { id: 'monshiro', name: 'モンシロチョウ', rarity: 1, spot: 'grass', time: [380, 1000], color: 0xf5f5ee, size: 0.25, desc: 'はたけのちかくでよく見かける白いチョウ。' },
  { id: 'suzumushi', name: 'スズムシ', rarity: 2, spot: 'grass', time: [1140, 1290], color: 0x333344, size: 0.18, desc: 'リーンリーン…よるの草むらのおんがくか。' },
  { id: 'hotaru', name: 'ヘイケボタル', rarity: 2, spot: 'river', time: [1150, 1290], days: [1, 6], glow: true, color: 0x445533, size: 0.16, desc: '8月はじめのよる、かわべでひかる。いまだけのきせき。' },
  { id: 'tsukutsuku', name: 'ツクツクボウシ', rarity: 2, spot: 'tree', time: [420, 1050], days: [15, 31], color: 0x5a6b4a, size: 0.26, desc: 'このこえが きこえたら、なつやすみは おりかえし。' },
  { id: 'akiakane', name: 'アキアカネ', rarity: 2, spot: 'grass', time: [480, 1080], days: [20, 31], color: 0xcc4433, size: 0.28, desc: 'あかとんぼ。なつのおわりに、やまから おりてくる。' },
];

export const FISH = [
  { id: 'oikawa', name: 'オイカワ', rarity: 1, zone: 'river', len: '12cm', desc: 'キラッとひかる、あやがわのにんきもの。' },
  { id: 'funa', name: 'ギンブナ', rarity: 1, zone: 'both', len: '18cm', desc: 'どっしりかまえた、ため池のぬし気どり。' },
  { id: 'koi', name: 'コイ', rarity: 2, zone: 'river', len: '45cm', desc: 'ひっぱるちからがすごい! うでがなる。' },
  { id: 'dojo', name: 'ドジョウ', rarity: 1, zone: 'river', len: '10cm', desc: 'にゅるにゅる。たんぼのみぞにもいるらしい。' },
  { id: 'namazu', name: 'ナマズ', rarity: 3, zone: 'river', time: [960, 1290], len: '50cm', desc: 'ゆうがたからうごきだす、ひげのぬし。' },
  { id: 'unagi', name: 'ウナギ', rarity: 3, zone: 'river', time: [1140, 1290], len: '60cm', desc: 'よるのかわのたからもの。げんじいのあこがれ。' },
  { id: 'tenagaebi', name: 'テナガエビ', rarity: 2, zone: 'river', len: '9cm', desc: 'ながいうでのエビ。いしのすきまがすみか。' },
  { id: 'bass', name: 'ブラックバス', rarity: 2, zone: 'pond', len: '35cm', desc: 'ため池のあばれんぼう。ひきがつよい!' },
  { id: 'bluegill', name: 'ブルーギル', rarity: 1, zone: 'pond', len: '15cm', desc: 'ため池ならどこにでもいる、げんきなやつ。' },
  { id: 'medaka', name: 'メダカ', rarity: 2, zone: 'pond', len: '3cm', desc: 'ちいさなちいさな、すいめんのきらめき。' },
];

// weather: sunny / cloudy / rain / storm
export const CALENDAR = [
  null, // day 0 なし
  { weather: 'sunny', event: 'hotaru', note: 'なつやすみ、はじまる' },
  { weather: 'sunny', event: 'hotaru' },
  { weather: 'cloudy', event: 'hotaru' },
  { weather: 'sunny', event: 'hotaru' },
  { weather: 'rain', event: 'hotaru' },
  { weather: 'sunny', event: 'hotaru', note: 'ホタルはこよいまで…' },
  { weather: 'sunny' },
  { weather: 'cloudy' },
  { weather: 'sunny', event: 'gakusai', note: 'しょうがっこうの なつまつり' },
  { weather: 'rain' },
  { weather: 'sunny' },
  { weather: 'cloudy' },
  { weather: 'sunny', event: 'obon', note: 'おぼんのいりび' },
  { weather: 'sunny', event: 'obon', note: 'おはかまいり' },
  { weather: 'cloudy', event: 'obon', note: 'おぼんのあけび' },
  { weather: 'rain' },
  { weather: 'sunny' },
  { weather: 'sunny' },
  { weather: 'cloudy' },
  { weather: 'storm', event: 'typhoon', note: 'たいふうがくる!' },
  { weather: 'sunny', note: 'たいふういっか' },
  { weather: 'sunny' },
  { weather: 'cloudy' },
  { weather: 'sunny', event: 'matsuriEve', note: 'あすはまつり' },
  { weather: 'sunny', event: 'matsuri', note: '滝宮の夏まつり!' },
  { weather: 'sunny' },
  { weather: 'rain' },
  { weather: 'cloudy' },
  { weather: 'sunny' },
  { weather: 'sunny' },
  { weather: 'sunny', event: 'last', note: 'なつやすみ、さいごのひ' },
];

const YOUBI = ['土', '日', '月', '火', '水', '木', '金'];
export function youbi(day) { return YOUBI[(day - 1) % 7]; }

export function calDay(day) { return CALENDAR[Math.min(day, 31)]; }

export const WEATHER_LABEL = { sunny: 'はれ', cloudy: 'くもり', rain: 'あめ', storm: 'たいふう' };

// 時刻(分)→フェーズ
export function phaseOf(min) {
  if (min < 600) return 'morning';   // 6:00-10:00
  if (min < 960) return 'day';       // 10:00-16:00
  if (min < 1140) return 'evening';  // 16:00-19:00
  return 'night';                    // 19:00-21:30
}

export const DAY_START = 360;   // 6:00
export const DAY_END = 1290;    // 21:30 じどうしゅうしん
export const TIME_SCALE = 2.5;  // 実1秒 = ゲーム2.5分 (1日 ≈ 6分)
