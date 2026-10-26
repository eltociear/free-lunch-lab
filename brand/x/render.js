// 使い方: node brand/x/render.js  →  brand/x/avatar.png（400x400）と brand/x/header.png（1500x500）を作る
// X（@FreeLunchLab）のプロフィール画像。サイトには含めない（public/ の外）。Chrome の場所は環境変数 CHROME で変えられる
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = __dirname;
const CHROME = process.env.CHROME || '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const curl = (url, enc) => execFileSync('curl', ['-sfL', '--retry', '3', '-A', UA, url], { encoding: enc, maxBuffer: 64 << 20 });

// Same approach as og.js: subset Google Fonts to the exact characters and inline them as data: URIs
function inlineFonts(families, text) {
  const chars = [...new Set(text)].join('');
  const css = curl(`https://fonts.googleapis.com/css2?${families}&text=${encodeURIComponent(chars)}&display=block`, 'utf8');
  const urls = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"\s]+/g) || [])];
  if (!urls.length) throw new Error('no font urls');
  let out = css;
  for (const u of urls) out = out.split(u).join(`data:font/woff2;base64,${curl(u).toString('base64')}`);
  return out;
}

const SKY = `background:radial-gradient(70% 90% at 85% 0%,#3B2A86 0%,transparent 60%),radial-gradient(60% 70% at 0% 100%,#0F3B5C 0%,transparent 60%),linear-gradient(180deg,#0A0F24,#121741)`;
const STARS = n => {
  // deterministic pseudo-random star field
  let s = 7, out = '';
  const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < n; i++) out += `<circle cx="${(r() * 100).toFixed(2)}%" cy="${(r() * 100).toFixed(2)}%" r="${(0.6 + r() * 1.4).toFixed(2)}" fill="${r() > .7 ? '#FFF7D6' : '#FFFFFF'}" opacity="${(0.45 + r() * 0.5).toFixed(2)}"/>`;
  return out;
};

// Bento box drawn as vector shapes (no emoji glyph). Accent stroke uses the site's yellow→teal "paid" gradient.
const bento = (id) => `
<defs>
  <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#6CF0B0"/></linearGradient>
  <clipPath id="c${id}"><rect x="0" y="0" width="240" height="168" rx="26"/></clipPath>
</defs>
<rect x="0" y="0" width="240" height="168" rx="26" fill="#141A3A"/>
<g clip-path="url(#c${id})">
  <rect x="0" y="0" width="128" height="168" fill="#F6F2E6"/>
  <circle cx="64" cy="84" r="17" fill="#E8505B"/>
  <rect x="128" y="0" width="112" height="84" fill="#FFD66B"/>
  <rect x="128" y="40" width="112" height="6" fill="#F0B93A"/>
  <rect x="128" y="84" width="112" height="84" fill="#1B6B52"/>
  <circle cx="160" cy="124" r="20" fill="#6CF0B0"/>
  <circle cx="200" cy="118" r="16" fill="#3FCF92"/>
  <circle cx="190" cy="148" r="13" fill="#9BF5CB"/>
</g>
<line x1="128" y1="6" x2="128" y2="162" stroke="#141A3A" stroke-width="9"/>
<line x1="132" y1="84" x2="234" y2="84" stroke="#141A3A" stroke-width="9"/>
<rect x="0" y="0" width="240" height="168" rx="26" fill="none" stroke="url(#g${id})" stroke-width="12"/>`;

// Crescent moon as two circles (mask)
const moon = (id, cx, cy, r) => `
<defs><mask id="m${id}"><rect width="100%" height="100%" fill="#fff"/><circle cx="${cx - r * 0.48}" cy="${cy + r * 0.3}" r="${r * 0.92}" fill="#000"/></mask></defs>
<g style="filter:drop-shadow(0 0 ${Math.round(r * 0.4)}px rgba(255,214,107,.55))"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFE7A3" mask="url(#m${id})"/></g>`;

function avatar() {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0}html,body{width:400px;height:400px;overflow:hidden}
body{${SKY}}
svg{position:absolute;inset:0}
</style></head><body>
<svg width="400" height="400" viewBox="0 0 400 400">
  <g opacity=".9">${STARS(26)}</g>
  ${moon('a', 268, 112, 46)}
  <g transform="translate(80 162)">${bento('a')}</g>
</svg></body></html>`;
}

function header() {
  const text = 'Free Lunch LabThere is such a thing as a free lunch.不労所得研究所';
  const fonts = inlineFonts('family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700', text);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${fonts}
*{margin:0;box-sizing:border-box}html,body{width:1500px;height:500px;overflow:hidden}
body{${SKY};position:relative;color:#EEF1FF}
svg.bg{position:absolute;inset:0}
.wrap{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding-bottom:40px;text-align:center}
.ja{font-family:"Zen Kaku Gothic New",sans-serif;font-weight:700;font-size:26px;letter-spacing:.3em;color:#A9B2D8}
h1{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:104px;line-height:1.05;text-shadow:0 6px 40px rgba(120,100,255,.45)}
h1 em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none}
.tag{font-family:"Zen Kaku Gothic New",sans-serif;font-weight:700;font-size:34px;color:#FFD66B}
</style></head><body>
<svg class="bg" width="1500" height="500" viewBox="0 0 1500 500">
  <g opacity=".85">${STARS(90)}</g>
  ${moon('h', 1330, 160, 58)}
  <g transform="translate(1235 300) scale(.5)" opacity=".95">${bento('h')}</g>
</svg>
<div class="wrap"><p class="ja">不労所得研究所</p><h1>Free <em>Lunch</em> Lab</h1><p class="tag">There is such a thing as a free lunch.</p></div>
</body></html>`;
}

function shot(name, html, w, h) {
  const f = path.join(DIR, `${name}.html`);
  fs.writeFileSync(f, html);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=8000', '--force-device-scale-factor=1',
    `--window-size=${w},${h}`, `--screenshot=${path.join(DIR, `${name}.png`)}`, `file://${f}`], { stdio: 'ignore' });
  fs.unlinkSync(f);
  console.log(path.join(DIR, `${name}.png`));
}

shot('avatar', avatar(), 400, 400);
shot('header', header(), 1500, 500);
