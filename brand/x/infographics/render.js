// Usage: node brand/x/infographics/render.js [name ...]
//   -> brand/x/infographics/{name}-{lang}.png (default 1080x1350, 4:5 portrait for the X feed)
//   With no args every infographic in GRAPHICS is rendered. Example: node brand/x/infographics/render.js verify-5
//   It fails if anything overflows the frame; ALLOW_OVERFLOW=1 captures anyway (for debugging the layout).
// X (@FreeLunchLab) posts only; not part of the site (outside public/). Chrome path can be overridden with CHROME.
// To add an infographic: add an entry to GRAPHICS. Either a function lang => { title, sub, body, css } (1080x1350,
// ja + en, standard frame: night sky, title, footer, fonts), or an object { w, h, langs, safe, build } where build
// returns { body, css, bare: true, moon: [cx, cy, r] } to lay out the whole page itself (`file` overrides the
// output name for single-language entries). `safe: [w, h]` checks that
// every element outside .deco stays inside a centred box of that size (for sites that crop, e.g. note.com).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { SERVICES, T } = require('../../../src/data.js');

const DIR = __dirname;
const W = 1080, H = 1350; // defaults
const CHROME = process.env.CHROME || '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const curl = (url, enc) => execFileSync('curl', ['-sfL', '--retry', '5', '--retry-delay', '1', '--retry-connrefused', '--retry-all-errors', '-A', UA, url], { encoding: enc, maxBuffer: 64 << 20 });
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Same approach as og.js: subset Google Fonts to the exact characters and inline them as data: URIs,
// plus the Ğ-only fallback face (Zen Kaku / Dela Gothic have no U+011E).
const FONTS = 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@500;700;900';
const GBREVE = 'https://fonts.gstatic.com/l/font?kit=o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc1azXvFujBSg6T775xg&skey=2b960fe17823056f&v=v42';
const dataUri = url => `data:font/woff2;base64,${curl(url).toString('base64')}`;
function inlineFonts(text) {
  const chars = [...new Set(text.replace(/<[^>]+>/g, ''))].join('');
  const css = curl(`https://fonts.googleapis.com/css2?${FONTS}&text=${encodeURIComponent(chars)}&display=block`, 'utf8');
  const urls = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"\s]+/g) || [])];
  if (!urls.length) throw new Error('no font urls');
  let out = css;
  for (const u of urls) out = out.split(u).join(dataUri(u));
  return out + `\n@font-face{font-family:"GBreve";src:url(${dataUri(GBREVE)}) format("woff2");unicode-range:U+011E;font-display:block}`;
}

// Service display name straight from src/data.js, without the trailing "(World App)"-style qualifier
const live = SERVICES.filter(s => s.ref || s.noRef);
function svc(id, lang) {
  const s = live.find(x => x.id === id);
  if (!s) throw new Error(`service not visible: ${id}`);
  return (lang === 'ja' ? s.name : s.nameEn || s.name).replace(/\s*[（(].*[)）]\s*$/, '');
}

const STARS = (n, w = W, h = H) => {
  let s = 11, out = '';
  const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < n; i++) out += `<circle cx="${(r() * w).toFixed(1)}" cy="${(r() * h).toFixed(1)}" r="${(0.6 + r() * 1.5).toFixed(2)}" fill="${r() > .7 ? '#FFF7D6' : '#FFFFFF'}" opacity="${(0.35 + r() * 0.5).toFixed(2)}"/>`;
  return out;
};
const moon = (cx, cy, r) => `
<defs><mask id="moonm"><rect width="100%" height="100%" fill="#fff"/><circle cx="${cx - r * 0.48}" cy="${cy + r * 0.3}" r="${r * 0.92}" fill="#000"/></mask></defs>
<g style="filter:drop-shadow(0 0 ${Math.round(r * 0.45)}px rgba(255,214,107,.55))"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFE7A3" mask="url(#moonm)"/></g>`;

// Bento mark from brand/x/render.js (240x168 box)
const bento = `
<defs><clipPath id="bc"><rect x="0" y="0" width="240" height="168" rx="26"/></clipPath></defs>
<rect x="0" y="0" width="240" height="168" rx="26" fill="#141A3A"/>
<g clip-path="url(#bc)">
  <rect x="0" y="0" width="128" height="168" fill="#F6F2E6"/><circle cx="64" cy="84" r="17" fill="#E8505B"/>
  <rect x="128" y="0" width="112" height="84" fill="#FFD66B"/><rect x="128" y="40" width="112" height="6" fill="#F0B93A"/>
  <rect x="128" y="84" width="112" height="84" fill="#1B6B52"/>
  <circle cx="160" cy="124" r="20" fill="#6CF0B0"/><circle cx="200" cy="118" r="16" fill="#3FCF92"/><circle cx="190" cy="148" r="13" fill="#9BF5CB"/>
</g>
<line x1="128" y1="6" x2="128" y2="162" stroke="#141A3A" stroke-width="9"/><line x1="132" y1="84" x2="234" y2="84" stroke="#141A3A" stroke-width="9"/>
<rect x="0" y="0" width="240" height="168" rx="26" fill="none" stroke="url(#grad)" stroke-width="12"/>`;

const BASE_CSS = (W, H) => `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{position:relative;color:#EEF1FF;font-family:"GBreve","Zen Kaku Gothic New",sans-serif;font-weight:700;
  background:radial-gradient(70% 55% at 92% 0%,#3B2A86 0%,transparent 60%),radial-gradient(70% 50% at 0% 100%,#0F3B5C 0%,transparent 60%),linear-gradient(180deg,#0A0F24,#121741)}
svg.sky{position:absolute;inset:0}
.page{position:absolute;inset:0;padding:44px 60px 30px;display:flex;flex-direction:column}
h1{font-family:"Dela Gothic One",sans-serif;font-weight:400;line-height:1.1;text-shadow:0 6px 40px rgba(120,100,255,.45);padding-right:120px}
h1 em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{margin-top:12px;font-size:30px;line-height:1.35;color:#C9D0F0}
.foot{margin-top:auto;display:flex;align-items:center;gap:20px;padding-top:18px;border-top:2px solid rgba(255,255,255,.12)}
.foot svg{flex:none}
.wm{font-family:"Dela Gothic One",sans-serif;font-size:32px;line-height:1.1}
.wm.ja{font-family:"Zen Kaku Gothic New",sans-serif;font-weight:900;font-size:34px}
.wm em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.tag{font-size:26px;line-height:1.3;color:#FFD66B;margin-top:2px}
.handle{margin-left:auto;font-size:30px;color:#EEF1FF;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.16);padding:8px 22px;border-radius:999px}
`;

function frame(lang, { title = '', sub = '', body, css, bare, moon: m = [966, 112, 50] }, W = 1080, H = 1350) {
  const L = T[lang];
  const wordmark = lang === 'ja' ? esc(L.brandPlain) : 'Free <em>Lunch</em> Lab';
  const text = [title, sub, body, wordmark, L.tagline, '@FreeLunchLab'].join('');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
${inlineFonts(text)}
${BASE_CSS(W, H)}
${css}
</style></head><body>
<svg class="sky" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#6CF0B0"/></linearGradient></defs>
  <g opacity=".8">${STARS(Math.round(110 * W * H / 1458000), W, H)}</g>${moon(...m)}
</svg>
<div class="page">${bare ? body : `
  <h1>${title}</h1>
  <p class="sub">${esc(sub)}</p>
  ${body}
  <div class="foot">
    <svg width="84" height="59" viewBox="-8 -8 256 184">${bento}</svg>
    <div><p class="wm ${lang}">${wordmark}</p><p class="tag">${esc(L.tagline)}</p></div>
    <p class="handle">@FreeLunchLab</p>
  </div>`}
</div>
</body></html>`;
}

// ---------- icons (64x64, stroked with the brand gradient) ----------
const ic = inner => `<svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="url(#grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const ICON_PATHS = {
  iris: `<path d="M4 32 C14 16 50 16 60 32 C50 48 14 48 4 32 Z"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="4" fill="#FFD66B" stroke="none"/>`,
  face: `<path d="M6 18 V10 a4 4 0 0 1 4 -4 H18 M46 6 H54 a4 4 0 0 1 4 4 V18 M58 46 V54 a4 4 0 0 1 -4 4 H46 M18 58 H10 a4 4 0 0 1 -4 -4 V46"/><circle cx="24" cy="27" r="2.5" fill="#FFD66B" stroke="none"/><circle cx="40" cy="27" r="2.5" fill="#B5E58E" stroke="none"/><path d="M23 40 C28 45 36 45 41 40"/>`,
  passport: `<rect x="10" y="6" width="32" height="46" rx="4"/><circle cx="26" cy="24" r="7"/><path d="M18 40 H34"/><path d="M48 24 a10 10 0 0 1 0 14 M54 19 a17 17 0 0 1 0 24" /><path d="M14 58 H38" opacity=".55"/>`,
  trust: `<path d="M32 14 L14 34 M32 14 L50 34 M14 34 L32 52 M50 34 L32 52 M14 34 H50"/><circle cx="32" cy="12" r="6" fill="#141A3A"/><circle cx="12" cy="34" r="6" fill="#141A3A"/><circle cx="52" cy="34" r="6" fill="#141A3A"/><circle cx="32" cy="54" r="6" fill="#141A3A"/>`,
  puzzle: `<path d="M6 26 H16 a6 6 0 1 1 12 0 H38 V36 a6 6 0 1 1 0 12 V58 H6 Z"/><circle cx="48" cy="16" r="12" fill="#141A3A"/><path d="M48 10 V16 L52 19"/>`,
  coin: `<circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="16" opacity=".55"/><path d="M25 22 L32 32 L39 22 M32 32 V44 M26 34 H38"/>`,
  chip: `<rect x="16" y="16" width="32" height="32" rx="5"/><rect x="25" y="25" width="14" height="14" rx="2" fill="#6CF0B0" stroke="none" opacity=".8"/><path d="M24 16 V8 M32 16 V8 M40 16 V8 M24 48 V56 M32 48 V56 M40 48 V56 M16 24 H8 M16 32 H8 M16 40 H8 M48 24 H56 M48 32 H56 M48 40 H56"/>`,
};
const ICONS = Object.fromEntries(Object.entries(ICON_PATHS).map(([k, v]) => [k, ic(v)]));
const plus = `<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#6CF0B0"/><path d="M13 7 V19 M7 13 H19" stroke="#0A0F24" stroke-width="3.4" stroke-linecap="round"/></svg>`;
const minus = `<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#FFB49A"/><path d="M7 13 H19" stroke="#0A0F24" stroke-width="3.4" stroke-linecap="round"/></svg>`;

// ---------- infographics ----------
const GRAPHICS = {
  // "5 ways apps prove you're one human". Examples come from each service's verify[] in src/data.js.
  'verify-5': lang => {
    const ja = lang === 'ja';
    const rows = [
      { icon: 'iris', ids: ['oro', 'axo', 'aidac', 'humad'],
        name: ja ? '虹彩スキャン（World ID）' : 'Iris scan (World ID)',
        line: ja ? 'Orb という機械で目を撮影する' : 'A device called the Orb scans your eyes',
        pro: ja ? '一意性がいちばん強い' : 'strongest uniqueness',
        con: ja ? '虹彩のデータを渡す' : 'you hand over iris data' },
      { icon: 'face', ids: ['gooddollar', 'billions', 'fheid', 'interlink'],
        name: ja ? '顔スキャン（ライブネス）' : 'Face scan (liveness)',
        line: ja ? 'スマホのカメラで生きた人間か確かめる' : 'Your phone camera checks you’re live',
        pro: ja ? 'スマホだけで手軽' : 'quick, just a phone',
        con: ja ? '顔のデータを渡す' : 'you hand over face data' },
      { icon: 'passport', ids: ['billions'],
        name: ja ? 'パスポートの IC チップ' : 'Passport NFC chip',
        line: ja ? 'パスポートをスマホにかざして読み取る' : 'Tap your passport to the phone',
        pro: ja ? '国の身分証が裏づけ' : 'backed by a government ID',
        con: ja ? '身分証のデータを渡す' : 'you hand over ID data' },
      { icon: 'trust', ids: ['circles', 'g1', 'idena'],
        name: ja ? '信頼の網・招待' : 'Web of trust / invites',
        line: ja ? '参加中のメンバーが「本物の人」と保証する' : 'Members vouch that you’re a real person',
        pro: ja ? '生体情報いらず' : 'no biometrics',
        con: ja ? '保証してくれる人が必要' : 'someone must vouch for you' },
      { icon: 'puzzle', ids: ['idena'],
        name: ja ? '全員が同時に解くパズル' : 'Same-moment puzzle',
        line: ja ? '世界中で同じ時刻に一斉にパズルを解く' : 'Everyone solves puzzles at the same time',
        pro: ja ? '生体情報も身分証もいらず' : 'no biometrics, no ID',
        con: ja ? '決まった時刻に参加が必要' : 'you must show up at a fixed time' },
    ];
    const body = `<div class="cards">${rows.map((r, i) => `
  <div class="card">
    <div class="icon"><span class="n">${i + 1}</span>${ICONS[r.icon]}</div>
    <div class="txt">
      <p class="name">${esc(r.name)}</p>
      <p class="line">${esc(r.line)}</p>
      <p class="chips">${r.ids.map(id => `<span>${esc(svc(id, lang))}</span>`).join('')}</p>
      <p class="tr"><span>${plus}${esc(r.pro)}</span><span>${minus}${esc(r.con)}</span></p>
    </div>
  </div>`).join('')}
</div>`;
    return {
      title: ja ? 'アプリはどうやって<br><em>「1人1つ」</em>を守っている？' : 'How do apps prove<br>you’re <em>one human</em>?',
      sub: ja ? 'ベーシックインカムは、1人が2回もらえたら成り立たない。' : 'Basic income only works if no one can claim twice.',
      body,
      css: `
h1{font-size:${ja ? 62 : 66}px}
.cards{margin-top:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:10px}
.card{display:flex;gap:26px;align-items:center;padding:10px 24px 11px 22px;border-radius:26px;background:rgba(24,30,68,.92);border:2px solid rgba(255,255,255,.13)}
.icon{position:relative;flex:none;width:116px;height:116px;border-radius:24px;background:#141A3A;border:2px solid rgba(255,214,107,.35);display:flex;align-items:center;justify-content:center}
.n{position:absolute;top:-14px;left:-14px;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FFD66B,#6CF0B0);color:#0A0F24;font-family:"Dela Gothic One",sans-serif;font-size:26px;line-height:44px;text-align:center}
.txt{min-width:0;flex:1}
.name{font-family:${ja ? '"Zen Kaku Gothic New",sans-serif;font-weight:900' : '"Dela Gothic One",sans-serif;font-weight:400'};font-size:${ja ? 35 : 34}px;line-height:1.15}
.line{margin-top:2px;font-size:27px;line-height:1.26;color:#C9D0F0;font-weight:500}
.chips{margin-top:6px;display:flex;flex-wrap:wrap;gap:8px}
.chips span{font-family:"GBreve","Zen Kaku Gothic New",sans-serif;font-size:26px;line-height:1;color:#141A3A;background:#FFD66B;padding:4px 14px 5px;border-radius:999px}
.tr{margin-top:6px;display:flex;flex-wrap:wrap;column-gap:24px;row-gap:2px;font-size:26px;line-height:1.26}
.tr span{display:inline-flex;align-items:center;gap:9px}
.tr svg{flex:none}
.tr span:first-child{color:#B6F5D6}.tr span:last-child{color:#FFD2C2}
`,
    };
  },

  // Basic income timeline. Years and type come from TIMELINE in src/data.js; each line is condensed from that
  // item's place / paid / result fields (nothing added beyond the data).
  timeline: lang => {
    const ja = lang === 'ja';
    const L = T[lang];
    const rows = [
      { id: 'mincome',
        place: ja ? 'カナダ・ドーフィン' : 'Dauphin, Canada',
        what: ja ? '最低所得保障の実験 Mincome が始まる' : 'Mincome experiment: a guaranteed income floor',
        res: ja ? '入院率8.5%減と報告（のちに異論も）' : '8.5% fewer hospitalisations reported (disputed)' },
      { id: 'alaska',
        place: ja ? 'アメリカ・アラスカ州' : 'Alaska, USA',
        what: ja ? '州の基金から住民に毎年配当' : 'A yearly state-fund dividend for residents',
        res: ja ? '最初の配当は1人1,000ドル' : 'The first one: $1,000 each' },
      { id: 'namibia',
        place: ja ? 'ナミビア・オチヴェロ' : 'Otjivero, Namibia',
        what: ja ? '60歳未満の全員に月100ナミビア・ドル' : 'N$100 a month to everyone under 60',
        res: ja ? '子どもの栄養改善を報告（推進側の評価）' : 'Better child nutrition (advocates’ report)' },
      { id: 'finland',
        place: ja ? 'フィンランド' : 'Finland',
        what: ja ? '失業者2,000人に月560ユーロ' : '€560 a month to 2,000 unemployed people',
        res: ja ? '就労効果は小さく、心の健康は改善' : 'Small job effect, better mental health' },
      { id: 'g1',
        place: ja ? '世界（フランス語圏中心）' : 'Worldwide (mostly French-speaking)',
        what: ja ? 'Ğ1：メンバー全員に毎日の配当' : 'Ğ1: a daily dividend for every member',
        res: ja ? '2017年3月8日、59人で開始' : 'Launched 8 March 2017 with 59 members' },
      { id: 'stockton',
        place: ja ? 'アメリカ・ストックトン' : 'Stockton, California',
        what: ja ? '住民125人に月500ドルを2年間' : '$500 a month for 2 years to 125 residents',
        res: ja ? 'フルタイム就労への移行が対照群の2倍超' : 'Full-time work at over 2× the control rate' },
      { id: 'pilotprojekt',
        place: ja ? 'ドイツ' : 'Germany',
        what: ja ? '約120人に月1,200ユーロを3年間' : '€1,200 a month for 3 years to about 120 people',
        res: ja ? '労働時間は目立って減らず、心の健康が改善' : 'Work hours not cut much; mental health improved' },
      { id: 'wld-end',
        place: ja ? '世界（World ID）' : 'Worldwide (World ID)',
        what: ja ? 'World ID 認証者への毎月の WLD エアドロップ' : 'Monthly WLD airdrops for verified people',
        res: ja ? '2026年6月1日に新規・更新を停止' : 'No new or renewed cycles from 1 June 2026' },
    ];
    const TL = require('../../../src/data.js').TIMELINE;
    const COLOR = { gov: '#FFD66B', ngo: '#8FB8FF', private: '#8FB8FF', crypto: '#6CF0B0' };
    const items = rows.map(r => {
      const t = TL.find(x => x.id === r.id);
      if (!t) throw new Error(`timeline item missing: ${r.id}`);
      const [from, to] = t.years.split('–');
      const tail = to === undefined ? '' : to === '' ? (ja ? '〜現在' : '–now') : `–${to.slice(2)}`;
      const c = COLOR[t.type];
      return `
  <div class="item" style="--c:${c}">
    <p class="yr">${from}${tail ? `<small>${tail}</small>` : ''}</p>
    <span class="dot"></span>
    <div class="c">
      <p class="pl"><svg width="22" height="28" viewBox="0 0 22 28"><path d="M11 27 C11 27 2 16 2 10.5 a9 9 0 0 1 18 0 C20 16 11 27 11 27 Z" fill="${c}"/><circle cx="11" cy="10.5" r="3.6" fill="#141A3A"/></svg>${esc(r.place)}</p>
      <p class="what">${esc(r.what)}</p>
      <p class="res"><svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 11 H17 M11 5 L17 11 L11 17" stroke="#FFE7A3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>${esc(r.res)}</p>
    </div>
  </div>`;
    }).join('');
    const legend = [['gov', L.tlGov], ['ngo', L.tlNgo], ['crypto', L.tlCrypto]]
      .map(([k, label]) => `<span><i style="background:${COLOR[k]}"></i>${esc(label)}</span>`).join('');
    return {
      title: ja ? 'ベーシックインカム<br>実験の<em>半世紀</em>' : '<em>Half a century</em> of<br>basic income experiments',
      sub: ja ? 'カナダの小さな町から、スマホのアプリまで。' : 'From a Canadian town to an app on your phone.',
      body: `<p class="legend">${legend}</p><div class="tl">${items}</div>`,
      css: `
h1{font-size:${ja ? 64 : 52}px}
.legend{margin-top:14px;display:flex;flex-wrap:wrap;gap:8px 28px;font-size:26px;line-height:1.2;color:#C9D0F0}
.legend span{display:inline-flex;align-items:center;gap:10px}
.legend i{width:20px;height:20px;border-radius:50%}
.tl{position:relative;margin-top:24px;margin-bottom:16px;display:flex;flex-direction:column;gap:12px}
.tl::before{content:"";position:absolute;left:191px;top:14px;bottom:40px;width:6px;border-radius:3px;background:linear-gradient(180deg,#FFD66B,#8FB8FF 55%,#6CF0B0)}
.item{position:relative;display:grid;grid-template-columns:166px 56px 1fr;align-items:start}
.yr{text-align:right;font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:44px;line-height:1;color:var(--c);padding-top:2px}
.yr small{display:block;margin-top:6px;font-family:"Zen Kaku Gothic New",sans-serif;white-space:nowrap;font-weight:700;font-size:26px;color:#A9B2D8}
.dot{justify-self:center;margin-top:8px;width:30px;height:30px;border-radius:50%;background:var(--c);border:6px solid #10153A;box-shadow:0 0 0 3px var(--c),0 0 18px var(--c)}
.c{min-width:0}
.pl{display:flex;align-items:center;gap:10px;font-size:30px;line-height:1.2;font-weight:900;color:#FFFFFF}
.pl svg,.res svg{flex:none}
.what{margin-top:2px;font-size:27px;line-height:1.26;font-weight:500;color:#C9D0F0;white-space:nowrap}
.res{display:flex;align-items:center;gap:9px;font-size:26px;line-height:1.26;color:#FFE7A3;white-space:nowrap}
`,
    };
  },
  // note.com header (見出し画像) for the article on Musk's "universal high income". note crops the edges in some
  // views, so all text sits inside a centred 1100x560 safe area; only the .deco visual and the sky may bleed out.
  'note-uhi': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">イーロン・マスクが語る未来</p>
  <h1 class="hero">ユニバーサル<em>“ハイ”</em>インカム</h1>
  <p class="ask">で、<b>誰が払うの？</b></p>
</div>
<svg class="deco" width="300" height="330" viewBox="0 0 300 330">
  <path d="M310 46 H150 a40 40 0 0 0 -40 40 V118" fill="none" stroke="url(#grad)" stroke-width="58" stroke-linejoin="round"/>
  <path d="M310 46 H150 a40 40 0 0 0 -40 40 V118" fill="none" stroke="#1A2050" stroke-width="40" stroke-linejoin="round"/>
  <rect x="68" y="112" width="84" height="22" rx="7" fill="url(#grad)"/>
  <g transform="translate(110 196)"><circle r="40" fill="#FFD66B"/><circle r="31" fill="none" stroke="#F0B93A" stroke-width="5"/>
    <text y="17" text-anchor="middle" font-family="Dela Gothic One" font-size="46" fill="#7A5310">¥</text></g>
  <g transform="translate(96 286) rotate(-14)"><ellipse rx="34" ry="11" fill="#F0B93A"/><ellipse rx="34" ry="11" cy="-5" fill="#FFD66B"/></g>
  <text x="196" y="300" font-family="Dela Gothic One" font-size="124" fill="url(#grad)">?</text>
</svg>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:96px;width:860px}
.kicker{display:inline-block;font-size:32px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:34px;font-size:80px;line-height:1.1;padding-right:0;white-space:nowrap}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.ask{margin-top:22px;font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:124px;line-height:1.1;color:#FFFFFF;text-shadow:0 6px 40px rgba(120,100,255,.45);white-space:nowrap}
.ask b{font-weight:400;color:#FFD66B}
.deco{position:absolute;right:0;top:300px}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article asking whether KABU& (前澤さんの「国民総株主」) is a basic income. Same 1100x560
  // safe area as note-uhi; the five BI conditions are drawn as chips with SVG marks (no KABU& logo, text name only).
  'note-kabuand': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => {
      const mk = {
        o: `<svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="16" fill="none" stroke="#6CF0B0" stroke-width="6"/></svg>`,
        t: `<svg width="44" height="44" viewBox="0 0 44 44"><path d="M22 6 L39 36 H5 Z" fill="none" stroke="#FFD66B" stroke-width="6" stroke-linejoin="round"/></svg>`,
        x: `<svg width="44" height="44" viewBox="0 0 44 44"><path d="M8 8 L36 36 M36 8 L8 36" stroke="#FF8A7A" stroke-width="6.5" stroke-linecap="round"/></svg>`,
      };
      const rows = [['定期的', 't'], ['現金', 'x'], ['個人単位', 'o'], ['誰でも', 'x'], ['条件なし', 'x']];
      return {
        bare: true,
        moon: [1192, 92, 44],
        body: `
<div class="wrap">
  <p class="kicker">前澤さんの「国民総株主」</p>
  <h1 class="hero"><span class="l1">カブアンドは</span><span class="l2"><em>ベーシックインカム</em>か？</span></h1>
  <div class="chk">
    ${rows.map(([t, m]) => `<div class="chip ${m}">${mk[m]}<span>${t}</span></div>`).join('')}
    <div class="score"><span>5条件中</span><b>1<small>つ</small></b></div>
  </div>
  <p class="sub2">電気代が株になる仕組みを、5つの条件で検証</p>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
        css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:72px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:22px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:62px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:86px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.chk{margin-top:28px;display:flex;align-items:stretch;gap:12px}
.chip{width:150px;display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 0 12px;border-radius:20px;background:rgba(20,26,58,.72);border:2px solid rgba(207,214,255,.18)}
.chip span{font-size:26px;line-height:1.1;color:#E3E8FF;white-space:nowrap}
.chip.o{border-color:#6CF0B0;box-shadow:0 0 22px rgba(108,240,176,.35)}
.chip.x span{color:#AEB6DA}
.score{margin-left:12px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 10px}
.score span{font-size:26px;line-height:1.1;color:#C9D0F0}
.score b{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:76px;line-height:1;color:#FF8A7A}
.score small{font-family:"Zen Kaku Gothic New",sans-serif;font-weight:900;font-size:30px;margin-left:4px;color:#FFFFFF}
.sub2{margin-top:22px;font-size:28px;line-height:1.2;color:#C9D0F0;white-space:nowrap}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
      };
    },
  },
  // note.com profile header for 「不労所得で生きていきたい」. note shows roughly a centre crop on mobile, so every
  // text element stays inside a centred 1000x600 box (stricter than the 1400x600 desktop safe area); the constellation
  // icons, moon and glow are atmosphere and may sit outside it.
  'note-profile-header': {
    w: 1920, h: 1006, langs: ['ja'], safe: [1000, 600], file: 'note-profile-header',
    build: () => {
      const node = (k, x, y) => `<g transform="translate(${x} ${y})"><circle r="62" fill="rgba(20,26,58,.55)" stroke="rgba(207,214,255,.22)" stroke-width="2"/>
        <g transform="translate(-36 -36) scale(1.125)" fill="none" stroke="url(#grad)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[k]}</g></g>`;
      const star = (x, y, r = 5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFF7D6"/>`;
      const spark = (x, y, r, c = '#FFF7D6', o = 1) => `<path transform="translate(${x} ${y})" opacity="${o}" fill="${c}" d="M0 ${-r} Q${r * .16} ${-r * .16} ${r} 0 Q${r * .16} ${r * .16} 0 ${r} Q${-r * .16} ${r * .16} ${-r} 0 Q${-r * .16} ${-r * .16} 0 ${-r} Z"/>`;
      const line = pts => `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="rgba(207,214,255,.32)" stroke-width="2" stroke-dasharray="2 10" stroke-linecap="round"/>`;
      const L = [[300, 290], [235, 430], [190, 590], [262, 700], [370, 790]];
      const R = [[1700, 430], [1622, 520], [1585, 640], [1668, 735], [1745, 820]];
      const sky = `
<svg class="deco sky2" width="1920" height="1006" viewBox="0 0 1920 1006">
  <defs>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFD66B" stop-opacity=".42"/><stop offset=".45" stop-color="#6CF0B0" stop-opacity=".12"/><stop offset="1" stop-color="#6CF0B0" stop-opacity="0"/></radialGradient>
    <linearGradient id="ray" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFE7A3" stop-opacity=".34"/><stop offset="1" stop-color="#FFE7A3" stop-opacity="0"/></linearGradient>
    <radialGradient id="glowL" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#6C5CE7" stop-opacity=".22"/><stop offset="1" stop-color="#6C5CE7" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="1240" cy="560" rx="430" ry="330" fill="url(#halo)"/>
  <ellipse cx="300" cy="560" rx="360" ry="420" fill="url(#glowL)"/>
  ${line(L)}${line(R)}${line([[1700, 430], [1640, 230]])}
  ${L.filter((_, i) => i % 2).map(([x, y]) => star(x, y, 4)).join('')}${R.filter((_, i) => i % 2).map(([x, y]) => star(x, y, 4)).join('')}
  ${node('iris', ...L[0])}${node('face', ...L[2])}${node('passport', ...L[4])}
  ${node('puzzle', ...R[0])}${node('coin', ...R[2])}${node('chip', ...R[4])}
  ${spark(560, 170, 16, '#FFE7A3', .9)}${spark(1450, 150, 12, '#CFD6FF', .8)}${spark(120, 880, 12, '#CFD6FF', .6)}${spark(1850, 600, 10, '#FFE7A3', .7)}${spark(980, 900, 9, '#CFD6FF', .55)}${spark(820, 120, 8, '#FFF7D6', .7)}
</svg>`;
      // open bento: lid leaning behind, rice + umeboshi, a compartment of gold coins (¥), one of teal tokens ($)
      const coin = (x, y, r, sym, c1 = '#FFD66B', c2 = '#F0B93A', ink = '#7A5310') => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="${c1}"/><circle r="${r * .76}" fill="none" stroke="${c2}" stroke-width="${r * .12}"/>${sym ? `<text y="${r * .4}" text-anchor="middle" font-family="Dela Gothic One" font-size="${r * 1.12}" fill="${ink}">${sym}</text>` : ''}</g>`;
      const flat = (x, y, rx, rot, c1 = '#FFD66B', c2 = '#F0B93A') => `<g transform="translate(${x} ${y}) rotate(${rot})"><ellipse rx="${rx}" ry="${rx * .34}" cy="${rx * .14}" fill="${c2}"/><ellipse rx="${rx}" ry="${rx * .34}" fill="${c1}"/></g>`;
      const bentoArt = `
<svg class="deco bentoart" width="350" height="328" viewBox="0 0 470 440">
  <defs><clipPath id="bx"><rect x="60" y="200" width="350" height="216" rx="30"/></clipPath></defs>
  <path d="M120 200 L60 0 H190 L200 200 Z M215 200 L235 0 H330 L300 200 Z M318 200 L400 10 H470 L395 200 Z" fill="url(#ray)"/>
  <g transform="rotate(-9 150 170)"><rect x="40" y="140" width="300" height="66" rx="26" fill="#1A2050" stroke="url(#grad)" stroke-width="8"/><rect x="150" y="160" width="80" height="12" rx="6" fill="#FFD66B" opacity=".5"/></g>
  <rect x="60" y="200" width="350" height="216" rx="30" fill="#141A3A"/>
  <g clip-path="url(#bx)">
    <rect x="60" y="200" width="168" height="216" fill="#F6F2E6"/>
    <circle cx="144" cy="308" r="22" fill="#E8505B"/><circle cx="137" cy="300" r="6" fill="#F58A92"/>
    <rect x="228" y="200" width="182" height="108" fill="#2A2350"/>
    ${flat(266, 288, 30, -8)}${flat(330, 284, 30, 6)}${flat(380, 290, 26, -4)}${coin(300, 252, 34, '¥')}${coin(366, 232, 24, '')}
    <rect x="228" y="308" width="182" height="108" fill="#123C35"/>
    ${coin(272, 362, 30, '$', '#6CF0B0', '#3FCF92', '#0F3B33')}${coin(336, 380, 22, '', '#9BF5CB', '#3FCF92')}${coin(378, 346, 20, '', '#3FCF92', '#1B6B52')}${coin(352, 336, 12, '', '#B6F5D6', '#6CF0B0')}
  </g>
  <line x1="228" y1="206" x2="228" y2="410" stroke="#141A3A" stroke-width="11"/><line x1="232" y1="308" x2="404" y2="308" stroke="#141A3A" stroke-width="11"/>
  <rect x="60" y="200" width="350" height="216" rx="30" fill="none" stroke="url(#grad)" stroke-width="13"/>
  ${coin(246, 118, 22, '¥')}${flat(330, 78, 18, 24)}${coin(176, 64, 15, '$', '#6CF0B0', '#3FCF92', '#0F3B33')}
  ${spark(120, 120, 14, '#FFF7D6')}${spark(392, 150, 10, '#FFE7A3')}${spark(300, 22, 8, '#CFD6FF')}
</svg>`;
      return {
        bare: true,
        moon: [1640, 210, 62],
        body: `${sky}
<div class="wrap">
  <p class="brand"><span>不労所得研究所</span><i></i><span>Free Lunch Lab</span></p>
  <h1 class="hero">タダ飯は、<br><em>ある。</em></h1>
  <p class="lede">生きているだけでもらえるお金を、<br>正直に調べる。</p>
</div>
${bentoArt}`,
        css: `
.page{padding:0}
.sky2{position:absolute;left:0;top:0}
.wrap{position:absolute;left:492px;top:240px}
.brand{display:flex;align-items:center;gap:18px;font-size:32px;line-height:1;letter-spacing:.14em;color:#CFD6FF}
.brand i{width:36px;height:3px;border-radius:2px;background:linear-gradient(90deg,#FFD66B,#6CF0B0)}
.hero{margin-top:30px;font-size:146px;line-height:1.06;padding-right:0;letter-spacing:.02em;white-space:nowrap}
.hero em{font-style:normal;text-shadow:none;background:linear-gradient(100deg in oklch,#FFD66B 12%,#6CF0B0 88%);-webkit-background-clip:text;background-clip:text;color:transparent}
.lede{margin-top:30px;font-size:40px;line-height:1.4;color:#E3E8FF;letter-spacing:.04em;white-space:nowrap}
.bentoart{position:absolute;left:1126px;top:362px}
`,
      };
    },
  },
};

// Screenshots go through the DevTools protocol, not `chrome --screenshot`: the one-shot CLI capture can fire before
// every raster tile is painted (it once left a white block over the footer). Here we fix the viewport, wait for
// load + document.fonts.ready + two animation frames, check that nothing overflows, then capture with an explicit clip.
const { spawn } = require('child_process');
async function launch(W, H) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ig-chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows',
    '--remote-debugging-port=0', `--user-data-dir=${profile}`, `--window-size=${W},${H}`, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  const wsUrl = await new Promise((ok, ng) => {
    let buf = '';
    const t = setTimeout(() => ng(new Error('Chrome did not start')), 20000);
    proc.stderr.on('data', d => { buf += d; const m = buf.match(/DevTools listening on (ws:\/\/\S+)/); if (m) { clearTimeout(t); ok(m[1]); } });
  });
  const port = new URL(wsUrl).port;
  const page = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((ok, ng) => { ws.onopen = ok; ws.onerror = ng; });
  let id = 0; const pending = new Map(), waiters = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const [ok, ng] = pending.get(m.id); pending.delete(m.id); m.error ? ng(new Error(m.error.message)) : ok(m.result); }
    else if (m.method) for (const w of waiters.splice(0)) w.method === m.method ? w.ok(m.params) : waiters.push(w);
  };
  // every wait has a timeout so a stuck page fails loudly instead of hanging
  const timed = (p, what) => Promise.race([p, new Promise((_, ng) => setTimeout(() => ng(new Error(`timed out: ${what}`)), 30000))]);
  const send = (method, params = {}) => timed(new Promise((ok, ng) => { pending.set(++id, [ok, ng]); ws.send(JSON.stringify({ id, method, params })); }), method);
  const once = method => timed(new Promise(ok => waiters.push({ method, ok })), method);
  const close = async () => {
    ws.close();
    if (proc.exitCode === null && proc.signalCode === null) {
      await new Promise(ok => { proc.once('exit', ok); proc.kill(); setTimeout(() => { proc.kill('SIGKILL'); ok(); }, 5000); });
    }
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  };
  return { send, once, close };
}

const log = (...a) => process.env.DEBUG && console.error(new Date().toISOString().slice(11, 23), ...a);
async function shot(cdp, name, html, W, H, safe) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ig-'));
  try { await capture(cdp, name, html, W, H, safe, tmp); } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}
async function capture(cdp, name, html, W, H, safe, tmp) {
  const f = path.join(tmp, `${name}.html`);
  fs.writeFileSync(f, html);
  if (process.env.KEEP_HTML) fs.writeFileSync(path.join(DIR, `${name}.html`), html);
  const out = path.join(DIR, `${name}.png`);
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const loaded = cdp.once('Page.loadEventFired');
  await cdp.send('Page.navigate', { url: `file://${f}` });
  await loaded;
  log(name, 'loaded');
  const { result } = await cdp.send('Runtime.evaluate', {
    awaitPromise: true, returnByValue: true,
    expression: `document.fonts.ready.then(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => {
      const over = [...document.querySelectorAll('.page *')].filter(e => !e.closest('.deco')).filter(e => { const b = e.getBoundingClientRect(); return b.width && (b.right > ${W} + .5 || b.bottom > ${H} + .5); }).map(e => (e.getAttribute('class') || e.tagName) + '@' + Math.round(e.getBoundingClientRect().bottom));
      const sx = (${W} - ${safe ? safe[0] : W}) / 2, sy = (${H} - ${safe ? safe[1] : H}) / 2;
      const unsafe = [...document.querySelectorAll('.page *')].filter(e => !e.closest('.deco')).filter(e => { const b = e.getBoundingClientRect(); return b.width && (b.left < sx - .5 || b.top < sy - .5 || b.right > ${W} - sx + .5 || b.bottom > ${H} - sy + .5); }).map(e => (e.getAttribute('class') || e.tagName) + '@' + [b => b.left, b => b.top, b => b.right, b => b.bottom].map(f => Math.round(f(e.getBoundingClientRect()))).join(','));
      r({ unsafe, fonts: [...document.fonts].filter(x => x.status !== 'loaded' && x.status !== 'unloaded').length, over, w: innerWidth, h: innerHeight });
    }))))`,
  });
  const v = result.value;
  if (v.w !== W || v.h !== H) throw new Error(`${name}: viewport ${v.w}x${v.h}, expected ${W}x${H}`);
  if (v.fonts) throw new Error(`${name}: ${v.fonts} font(s) failed to load`);
  if (v.over.length && !process.env.ALLOW_OVERFLOW) throw new Error(`${name}: overflows the ${W}x${H} frame: ${[...new Set(v.over)].join(', ')}`);
  if (v.unsafe.length && !process.env.ALLOW_OVERFLOW) throw new Error(`${name}: outside the ${safe.join('x')} safe area: ${[...new Set(v.unsafe)].join(', ')}`);
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
  fs.writeFileSync(out, Buffer.from(data, 'base64'));
  console.log(out);
}

(async () => {
  const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(GRAPHICS);
  for (const name of names) if (!GRAPHICS[name]) throw new Error(`unknown infographic: ${name}`);
  // a fresh Chrome per image: reusing one tab for several captures could stall on later frames
  for (const name of names) {
    const g = typeof GRAPHICS[name] === 'function' ? { build: GRAPHICS[name] } : GRAPHICS[name];
    const { w = W, h = H, langs = ['ja', 'en'], safe = null, file = null } = g;
    for (const lang of langs) {
    const html = frame(lang, g.build(lang), w, h);
    log(name, 'launch');
    const cdp = await launch(w, h);
    log(name, 'connected');
    try {
      await cdp.send('Page.enable');
      await shot(cdp, file || `${name}-${lang}`, html, w, h, safe);
    } finally { await cdp.close(); log(name, 'closed'); }
    }
  }
})().catch(e => { console.error(e); process.exit(1); });
