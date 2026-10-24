// 使い方: node og.js  →  src/og/{lang}.png（SNS 用 1200x630）を Chrome で作る。サービスや見出しを変えたら作り直す
// Chrome の場所は環境変数 CHROME で変えられる
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { LANGS, SERVICES, T } = require('./src/data.js');

const CHROME = process.env.CHROME || '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';
const OUT = path.join(__dirname, 'src/og');
const FONTS = {
  ja: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  en: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  es: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  zh: 'family=Noto+Sans+SC:wght@700;900',
  hi: 'family=Noto+Sans+Devanagari:wght@700',
  ar: 'family=Noto+Kufi+Arabic:wght@700&family=Noto+Sans+Arabic:wght@700',
};
const FACE = {
  ja: '"Dela Gothic One"', en: '"Dela Gothic One"', es: '"Dela Gothic One"',
  zh: '"Noto Sans SC"', hi: '"Noto Sans Devanagari"', ar: '"Noto Kufi Arabic"',
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const live = SERVICES.filter(s => s.ref || s.noRef);

function page(lang) {
  const L = T[lang];
  const rtl = lang === 'ar';
  const chips = live.map(s => `<span>${esc(lang === 'ja' ? s.name : s.nameEn || s.name)}</span>`).join('');
  return `<!doctype html><html lang="${lang}"${rtl ? ' dir="rtl"' : ''}><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${FONTS[lang]}&display=block">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&text=%C4%9E&display=block">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;display:flex;flex-direction:column;padding-bottom:${live.length > 16 ? 44 : 56}px!important;color:#EEF1FF;font-family:${FACE[lang]},sans-serif;position:relative;padding:64px 72px;
  background:radial-gradient(70% 90% at 88% 0%,#3B2A86 0%,transparent 60%),radial-gradient(60% 70% at 0% 100%,#0F3B5C 0%,transparent 60%),linear-gradient(180deg,#0A0F24,#121741)}
body::before{content:"";position:absolute;inset:0;background-image:radial-gradient(2px 2px at 30px 40px,#fff 50%,transparent 51%),radial-gradient(1.5px 1.5px at 150px 110px,#fff 50%,transparent 51%),radial-gradient(2px 2px at 260px 30px,#fff7d6 50%,transparent 51%),radial-gradient(1.5px 1.5px at 90px 200px,#cfd6ff 50%,transparent 51%);background-size:320px 240px;opacity:.8}
.moon{position:absolute;top:52px;${rtl ? 'left' : 'right'}:80px;width:190px;height:190px;border-radius:50%;box-shadow:inset -40px 22px 0 0 #FFE7A3;transform:rotate(-12deg);filter:drop-shadow(0 0 40px rgba(255,214,107,.5))}
.z{position:absolute;top:255px;${rtl ? 'left' : 'right'}:110px;font-family:"Dela Gothic One",sans-serif;color:#CFD6FF;font-size:44px;opacity:.85}
.z small{font-size:28px}
.eyebrow{position:relative;max-width:820px;font-family:"Zen Kaku Gothic New",${FACE[lang]},sans-serif;font-weight:700;font-size:24px;color:#A9B2D8;letter-spacing:.04em}
h1{position:relative;font-weight:${/^(ja|en|es)$/.test(lang) ? 400 : 900};font-size:${lang === 'ja' ? 84 : lang === 'en' || lang === 'es' ? 76 : rtl && live.length > 16 ? 60 : 70}px;line-height:${rtl || lang === 'hi' ? 1.4 : 1.15};margin-top:18px;max-width:${lang === 'ja' ? 820 : 900}px;text-shadow:0 6px 40px rgba(120,100,255,.4)}
h1 em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.chips{position:relative;margin-top:auto;padding-top:16px;display:flex;flex-wrap:wrap;gap:${live.length > 22 ? 6 : live.length > 16 ? 8 : 10}px}
.chips span{font-family:"Zen Kaku Gothic New","Noto Sans","Noto Sans SC","Noto Sans Arabic",sans-serif;font-weight:700;font-size:${live.length > 22 ? 17 : live.length > 16 ? 19 : 22}px;color:#141A3A;background:#FFD66B;padding:${live.length > 22 ? '4px 12px' : live.length > 16 ? '5px 14px' : '6px 18px'};border-radius:999px}
</style></head><body>
<div class="moon"></div><div class="z"><small>z</small>Z</div>
<p class="eyebrow">${esc(L.brandPlain)} · ${esc(L.eyebrow)}</p>
<h1>${L.h1}</h1>
<div class="chips">${chips}</div>
</body></html>`;
}

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));
for (const lang of LANGS) {
  const html = path.join(tmp, `${lang}.html`);
  fs.writeFileSync(html, page(lang));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=15000',
    '--window-size=1200,630', `--screenshot=${path.join(OUT, `${lang}.png`)}`, `file://${html}`], { stdio: 'ignore' });
  console.log(`og/${lang}.png`);
}
fs.rmSync(tmp, { recursive: true, force: true });
