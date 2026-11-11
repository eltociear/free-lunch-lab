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

// ---------- "common objection vs data" series (myth-*) ----------
// Same flat design system as 'work-effect' (1200x1500, solid navy, gold #FFD66B, ink #141A3A, kicker pill, big question,
// evidence cards, gold takeaway, sources footer). myth() takes the per-card content; `top` is optional extra HTML
// between the question and the rows, `rows` use the work-effect card layout, `extraCss` tweaks a single card.
const mythArrow = `<svg class="ar" width="34" height="20" viewBox="0 0 34 20"><path d="M2 10 H29 M21 3 L29 10 L21 17" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const mythCmp = (label, a, b, cls = '') => `<p class="cmp ${cls}"><span class="cl">${label}</span><span class="cv">${a}</span>${mythArrow}<span class="cv b">${b}</span></p>`;
function myth(lang, { q, qSize, lede = '', top = '', rows = [], after = '', t1, t2, src, url, extraCss = '' }) {
  const ja = lang === 'ja';
  const mark = bento.replace('url(#grad)', '#FFD66B');
  return {
    bare: true,
    moon: [-999, -999, 1],
    body: `
<p class="kicker">${ja ? 'よくある疑問 × データ' : 'Common objection vs data'}</p>
<h1 class="q">${q}</h1>
${lede ? `<p class="lede2">${lede}</p>` : ''}
${top}
<div class="rows">${rows.map(r => `
  <section class="row">
    <div class="lc">
      <p class="nm">${r.name}</p>
      <p class="meta">${r.meta}</p>
      ${r.pay ? `<p class="pay">${r.pay}</p>` : ''}
      ${r.who ? `<p class="who">${r.who}</p>` : ''}
    </div>
    <div class="rc">
      <p class="res">${r.res}</p>
      ${r.more || ''}
    </div>
  </section>`).join('')}
</div>
${after}
<div class="take">
  <p class="t1">${t1}</p>
  <p class="t2">${t2}</p>
</div>
<div class="foot3">
  <p class="src">${src}</p>
  <div class="brand">
    <svg width="64" height="45" viewBox="-8 -8 256 184">${mark}</svg>
    <p class="wm2">${ja ? '不労所得研究所' : 'Free Lunch Lab'}</p>
    <p class="url">${url}</p>
  </div>
</div>`,
    css: `
body{background:#0E1330}
svg.sky g{opacity:.45}
.page{padding:64px 64px 52px}
.kicker{align-self:flex-start;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:11px 24px 13px;border-radius:999px;font-weight:900}
.q{margin-top:26px;padding-right:0;text-shadow:none;font-size:${qSize || (ja ? 84 : 80)}px;line-height:1.16;color:#FFFFFF;white-space:nowrap}
.lede2{margin-top:16px;font-size:28px;line-height:1.35;color:#C9D0F0;font-weight:700}
.rows{margin-top:34px;display:flex;flex-direction:column;gap:18px}
.row{display:flex;gap:30px;background:#171D45;border:2px solid #262E62;border-radius:22px;padding:26px 30px}
.lc{flex:0 0 392px;display:flex;flex-direction:column}
.nm{font-size:${ja ? 38 : 40}px;line-height:1.15;font-weight:900;color:#FFFFFF;white-space:nowrap}
.meta{margin-top:6px;font-size:23px;line-height:1.3;color:#9AA3CF;font-weight:700;white-space:nowrap}
.pay{margin-top:14px;font-size:30px;line-height:1.2;color:#FFFFFF;font-weight:900}
.who{margin-top:6px;font-size:23px;line-height:1.3;color:#C9D0F0;font-weight:500}
.rc{flex:1;min-width:0;border-left:3px solid #2E3772;padding-left:30px;display:flex;flex-direction:column;justify-content:center}
.res{font-size:${ja ? 36 : 37}px;line-height:1.2;font-weight:900;color:#FFD66B}
.det{margin-top:8px;font-size:25px;line-height:1.35;color:#E3E8FF;font-weight:700}
.cmp{margin-top:8px;display:flex;align-items:center;gap:12px;font-size:28px;line-height:1.2;color:#C9D0F0;font-weight:700}
.cmp .cl{width:${ja ? 150 : 186}px;font-size:23px;color:#9AA3CF}
.cmp .cv{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:32px;min-width:64px;text-align:right}
.cmp .ar{color:#6C76A8}
.cmp.hi .cl{color:#FFD66B}
.cmp.hi .cv{color:#FFFFFF}
.cmp.hi .cv.b{color:#FFD66B}
.big{font-family:"Dela Gothic One",sans-serif;font-weight:400;color:#FFFFFF}
.take{margin-top:30px;margin-bottom:24px;background:#FFD66B;color:#141A3A;border-radius:22px;padding:24px 32px 26px}
.t1{font-size:${ja ? 46 : 46}px;line-height:1.15;font-weight:900;white-space:nowrap}
.t2{margin-top:8px;font-size:26px;line-height:1.4;font-weight:700}
.foot3{margin-top:auto;padding-top:20px;border-top:2px solid #262E62}
.src{font-size:19px;line-height:1.4;color:#9AA3CF;font-weight:500}
.brand{margin-top:14px;display:flex;align-items:center;gap:16px}
.wm2{font-size:30px;line-height:1;font-weight:900;color:#FFFFFF;${ja ? '' : 'font-family:"Dela Gothic One",sans-serif;font-weight:400;'}}
.url{margin-left:auto;font-size:24px;line-height:1;color:#FFD66B;font-weight:700}
${extraCss}`,
  };
}

// ---------- infographics ----------
const GRAPHICS = {
  // X post image for the world map (/calc/map/ and the basic-income-world-map essay): headline, the choropleth from
  // src/map.js (cost of $3.00 a day for everyone as a share of tax revenue, World Bank data via data/countries.json),
  // the legend with the band counts (computed, not typed) and the site name. 1200x675 (16:9) for X.
  'ubi-map': {
    w: 1200, h: 675, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      const mapJs = require('../../../src/map.js');
      const { CALC } = require('../../../src/data.js');
      const rows = mapJs.rows(require('../../../src/calc-world.js').world(CALC));
      const counts = mapJs.counts(rows);
      const L = T[lang];
      const label = i => esc(L['mapBin' + i].replace(/\s*[（(].*$/, ''));
      return {
        bare: true,
        moon: [1146, 62, 26],
        body: `
<h1 class="hl">${ja ? '1日3ドルを全員に配れる国はどこ？' : 'Could your country pay everyone $3 a day?'}</h1>
<p class="sb">${ja ? '世界銀行の貧困ライン（1日3.00ドル）を全員に1年配る費用は、政府の税収の何％か ・ 211の国・地域' : 'The yearly cost of paying everyone the World Bank’s $3.00-a-day poverty line, as a share of government tax revenue · 211 countries'}</p>
<div class="row">
  <div class="wmap">${mapJs.svg({ list: rows })}</div>
  <div class="lg"><p class="lh">${esc(L.mapLegendH)}</p><ul>${counts.map((n, i) => `<li><i class="wm-sw b${i}"></i><span>${label(i)}</span><b>${n}</b></li>`).join('')}</ul>
  <p class="ln">${ja ? '100％超＝税収をすべて使っても足りない' : 'Over 100% = more than all its tax revenue'}</p></div>
</div>
<div class="ft">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ${lang}">${ja ? esc(L.brandPlain) : 'Free <em>Lunch</em> Lab'}</p>
  <p class="url">neteru-nyukin.eltociear.workers.dev/${ja ? 'ja/' : ''}calc/map/</p>
</div>`,
        css: `${mapJs.CSS}
.page{padding:36px 52px 26px}
.hl{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:${ja ? 50 : 46}px;line-height:1.12;padding-right:90px;text-wrap:balance;text-shadow:0 6px 40px rgba(120,100,255,.45)}
.sb{margin-top:10px;font-size:21px;line-height:1.35;color:#C9D0F0;padding-right:40px}
.row{margin-top:16px;display:flex;align-items:center;gap:26px;min-height:0}
.wmap{width:${ja ? 810 : 770}px;flex:none}
.lg{flex:1;min-width:0}
.lh,.ln{word-break:auto-phrase}
.lh{font-size:19px;color:#A9B2D8;margin-bottom:10px;line-height:1.3}
.lg ul{list-style:none;display:grid;gap:10px}
.lg li{display:flex;align-items:center;gap:10px;font-size:21px;color:#EEF1FF;white-space:nowrap}
.lg li b{margin-left:auto;color:#FFD66B;font-weight:900}
.lg .wm-sw{width:30px;height:20px;border-radius:4px}
.ln{margin-top:12px;font-size:16px;line-height:1.35;color:#A9B2D8}
.ft{margin-top:auto;display:flex;align-items:center;gap:16px;padding-top:12px;border-top:2px solid rgba(255,255,255,.12)}
.ft .wm{font-size:26px}
.ft .wm.ja{font-size:28px}
.url{margin-left:auto;font-size:21px;color:#EEF1FF;background:rgba(255,255,255,.08);border:2px solid rgba(255,214,107,.55);padding:6px 18px;border-radius:999px}
`,
      };
    },
  },
  // X post image for the essay does-cash-make-people-stop-working: the essay's work chart (rows and columns read from
  // the 'w' block in ESSAYS, so the image cannot drift from the page): each study's main result on work as a dot in
  // one of three columns (worked less / no clear change / worked more), the US pilots as counts. 1200x675 (16:9).
  'work': {
    w: 1200, h: 675, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      const { ESSAYS } = require('../../../src/data.js');
      const e = ESSAYS.find(x => x.id === 'does-cash-make-people-stop-working');
      const [, head, ...rows] = e.blocks[lang].find(b => b[0] === 'w')[1].split('\n');
      const cols = head.split(' | ');
      const strip = t => t.replace(/\{([^{}|]+)\|[^{}]+\}/g, '$1');
      const cell = (pos, i) => pos.includes(',') ? '<td>' + (Number(pos.split(',')[i]) ? '<b class="n">' + pos.split(',')[i] + '</b>' : '') + '</td>' : '<td>' + (Number(pos) === i - 1 ? '<i class="d"></i>' : '') + '</td>';
      const body = rows.map(r => { const [name, sub, pos, note] = r.split(' | ').map(strip); return '<tr><th><span class="nm">' + esc(name) + '</span><span class="sb2">' + esc(sub) + '</span></th><td class="nt">' + esc(note) + '</td>' + [0, 1, 2].map(i => cell(pos, i)).join('') + '</tr>'; }).join('');
      return {
        bare: true,
        moon: [1146, 58, 24],
        body: `
<h1 class="hl">${ja ? 'お金を配ると、人は働かなくなる？' : 'Does free money make people stop working?'}</h1>
<p class="sb">${ja ? '50年分・10の研究の「仕事への影響」。多くは小さな減少か変化なし' : 'What ten studies over fifty years found. Mostly small cuts in work, or none'}</p>
<table class="ch"><thead><tr><td></td><td></td>${cols.map(c => '<th>' + esc(c) + '</th>').join('')}</tr></thead><tbody>${body}</tbody></table>
<div class="ft">
  <svg width="56" height="39" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ${lang}">${ja ? '不労所得研究所' : 'Free <em>Lunch</em> Lab'}</p>
  <p class="src">${ja ? '出典：各論文・公式報告（詳しくはエッセイ）' : 'Sources: the papers and official reports (see the essay)'}</p>
</div>`,
        css: `
.page{padding:30px 52px 22px}
.hl{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:${ja ? 44 : 40}px;line-height:1.12;padding-right:80px;white-space:nowrap;text-shadow:0 6px 40px rgba(120,100,255,.45)}
.sb{margin-top:8px;font-size:20px;line-height:1.3;color:#C9D0F0}
.ch{margin-top:14px;width:100%;border-collapse:collapse;table-layout:fixed;font-size:17px}
.ch col{width:auto}
.ch thead th{font-size:15px;color:#A9B2D8;font-weight:700;text-align:center;padding:0 4px 6px;width:118px}
.ch thead td:first-child{width:${ja ? 380 : 370}px}
.ch tbody th,.ch tbody td{border-top:1.5px solid rgba(255,255,255,.12);padding:4px 0;height:39px;vertical-align:middle}
.ch tbody th{text-align:left;white-space:nowrap;overflow:hidden}
.nm{font-weight:900;color:#FFFFFF;font-size:${ja ? 18 : 17}px}
.sb2{margin-left:10px;font-size:14px;color:#9AA3CF;font-weight:500}
.nt{color:#FFD66B;font-size:${ja ? 16 : 15}px;white-space:nowrap;overflow:hidden;padding-left:8px!important}
.ch td:nth-child(4),.ch thead th:nth-child(4){background:rgba(255,255,255,.05)}
.ch tbody td:not(.nt){text-align:center}
.d{display:inline-block;width:16px;height:16px;border-radius:50%;background:#93A8FF;vertical-align:middle}
.n{display:inline-grid;place-items:center;min-width:28px;height:28px;border-radius:14px;background:#93A8FF;color:#0E1320;font-weight:900;font-size:16px}
.ft{margin-top:auto;display:flex;align-items:center;gap:14px;padding-top:10px;border-top:2px solid rgba(255,255,255,.12)}
.ft .wm{font-size:24px}
.ft .wm.ja{font-size:26px}
.src{margin-left:auto;font-size:16px;color:#A9B2D8}
`,
      };
    },
  },
  // note.com header for the Japanese article on the same essay (1280x670, safe area 1100x560 like note-pilots).
  // Facts from the essay: Finland year 1 49.64 vs 49.25 days in work (Kela via STM), OpenResearch about 1.3 fewer hours
  // a week (NBER w32719), Alaska no employment effect (Jones & Marinescu 2022), and the Robins (1985) line on no mass withdrawal.
  'note-work': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">50年分・10の研究を並べてみた</p>
  <h1 class="hero"><span class="l1">お金を配ると、</span><span class="l2">人は<em>働かなくなる</em>？</span></h1>
  <p class="quote">答えは<b>“ほとんど変わらない”</b>。ただし、ゼロではない</p>
</div>
<div class="deco">
  <div class="ledger">
    <p class="lh">仕事への影響</p>
    <p class="row"><span>フィンランド</span><i class="no">1年目 差なし</i></p>
    <p class="row"><span>アラスカ</span><i class="no">就業 変化なし</i></p>
    <p class="row"><span>OpenResearch</span><i class="dn">週1.3時間減</i></p>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:96px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:34px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:120px;bottom:56px;width:330px;height:184px}
.ledger{position:absolute;right:0;top:0;width:322px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 20px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.ledger .lh{margin:0 -20px 6px;padding:10px 20px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.ledger .row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:2px solid #DED6BF;font-size:22px;line-height:1.1;color:#141A3A;white-space:nowrap}
.ledger .row:last-child{border-bottom:0}
.ledger i{padding:0 10px;height:26px;border-radius:13px;font-style:normal;font-size:16px;font-weight:900;line-height:26px}
.ledger .no{background:#6CF0B0;color:#141A3A}
.ledger .dn{background:#FFD66B;color:#141A3A}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
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
  // note.com header for the article on the WEF "Great Reset" and basic income. Same 1100x560 safe area and
  // kicker / two-line hero / footer layout as note-uhi and note-kabuand; the famous quote is the subtitle.
  'note-greatreset': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">世界経済フォーラム（ダボス会議）</p>
  <h1 class="hero"><span class="l1">グレートリセットと</span><span class="l2"><em>ベーシックインカム</em></span></h1>
  <p class="quote">「何も所有せず、幸せになる」は<b>誰の言葉か</b></p>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:100px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article on "Universal Prompt Income" (AI-era pay for prompts/work). Same 1100x560 safe
  // area and kicker / two-line hero / footer layout as note-greatreset; the question is the subtitle.
  'note-upi': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">AI時代の新しい収入</p>
  <h1 class="hero"><span class="l1">ユニバーサル・</span><span class="l2"><em>プロンプト・インカム</em></span></h1>
  <p class="quote">「働いた分だけ」は<b>ベーシックインカムか</b></p>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:96px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article on NESARA/GESARA and basic income. Same 1100x560 safe area and kicker /
  // two-line hero / footer layout as note-greatreset; the .deco motif contrasts a stamped payment record (real BI:
  // law, budget, payments) with an unstamped "まもなく発表" slip.
  'note-nesara': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">SNSで広がる「借金チャラ」の噂</p>
  <h1 class="hero"><span class="l1">ネサラ・ゲサラと</span><span class="l2"><em>ベーシックインカム</em></span></h1>
  <p class="quote">「全員にお金が配られる」話の<b>見分け方</b></p>
</div>
<div class="deco">
  <div class="slip"><span>まもなく発表</span><i>記録なし</i></div>
  <div class="book">
    <p class="bh">支給記録</p>
    <p class="row"><span>法律</span><svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11.5 L9 16 L18 6" fill="none" stroke="#1B6B52" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
    <p class="row"><span>予算</span><svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11.5 L9 16 L18 6" fill="none" stroke="#1B6B52" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
    <p class="row"><span>支給日</span><svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11.5 L9 16 L18 6" fill="none" stroke="#1B6B52" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
    <div class="stamp">支給済</div>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:100px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:110px;bottom:60px;width:440px;height:170px}
.slip{position:absolute;left:0;top:34px;width:190px;height:118px;transform:rotate(-5deg);border:3px dashed rgba(207,214,255,.45);border-radius:14px;background:rgba(20,26,58,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}
.slip span{font-size:26px;line-height:1;color:#C9D0F0;white-space:nowrap}
.slip i{font-style:normal;font-size:20px;line-height:1;color:#8790B8;white-space:nowrap}
.book{position:absolute;right:0;top:0;width:230px;height:166px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 18px 0;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.book .bh{margin:0 -18px 8px;padding:9px 18px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.book .row{width:112px;display:flex;gap:8px;align-items:center;padding:5px 0;border-bottom:2px solid #DED6BF;font-size:22px;line-height:1.1;color:#141A3A}
.stamp{position:absolute;right:12px;bottom:22px;width:88px;height:88px;border-radius:50%;border:4px solid #E8505B;color:#E8505B;font-size:21px;font-weight:900;display:flex;align-items:center;justify-content:center;transform:rotate(-14deg);background:rgba(246,242,230,.75)}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article that works out Takenaka Heizo's 月7万円 BI plan for five model households. Same
  // 1100x560 safe area and kicker / two-line hero / footer layout as note-greatreset; the .deco motif is a small
  // household ledger: families with children gain, the pension and welfare rows end in "?" (it depends on the design).
  'note-takenaka': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">竹中平蔵案を家計で計算</p>
  <h1 class="hero"><span class="l1">月7万円の</span><span class="l2"><em>ベーシックインカム</em></span></h1>
  <p class="quote">わが家は<b>得する？損する？</b></p>
</div>
<div class="deco">
  <div class="ledger">
    <p class="lh">家計の差し引き</p>
    <p class="row"><span>子育て世帯</span>${plus}</p>
    <p class="row"><span>年金世帯</span><i class="q">?</i></p>
    <p class="row"><span>生活保護</span><i class="q">?</i></p>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:100px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:120px;bottom:56px;width:270px;height:184px}
.ledger{position:absolute;right:0;top:0;width:262px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 20px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.ledger .lh{margin:0 -20px 6px;padding:10px 20px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.ledger .row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:2px solid #DED6BF;font-size:23px;line-height:1.1;color:#141A3A}
.ledger .row:last-child{border-bottom:0}
.ledger .q{width:26px;height:26px;border-radius:50%;background:#FFD66B;color:#141A3A;font-style:normal;font-size:19px;font-weight:900;line-height:26px;text-align:center}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // Results table for the note article on Takenaka Heizo's 月7万円 BI plan (note-takenaka header). Built on myth()
  // with its kicker swapped; figures (monthly, before any tax rise): pensions from Japan Pension Service FY2026
  // (model couple ¥237,279, basic ¥70,608 each), welfare from MHLW's Oct 2026 table (Tokyo 1級地-1, age 20-40:
  // living ¥77,220 + housing cap ¥53,700), child allowance ¥10,000 per child; Takenaka's book and J-CAST (10 Oct 2020).
  'note-takenaka-table': {
    w: 1200, h: 1500, langs: ['ja'], file: 'note-takenaka-table-ja',
    build: lang => {
      const opt = (k, t, v) => `<p class="opt"><span class="ok">${k}</span><span class="ot">${t}</span><span class="ov">${v}</span></p>`;
      const m = myth(lang, {
        q: '月7万円BI、5つの家計で計算すると',
        qSize: 60,
        rows: [
          { name: '単身・20代会社員', meta: '年収300万円・東京で賃貸', pay: 'いま なし → BI 7万円',
            res: '＋7万円', more: `<p class="det">返す側に入らないとみた場合。増税があれば目減り</p>` },
          { name: '夫婦＋小学生2人', meta: '年収500万円', pay: 'いま 児童手当2万円 → BI 20万〜28万円',
            res: '＋18万〜＋26万円', more: `<p class="det">子どもを月3万円（原田案）にした場合が下限</p>` },
          { name: '元会社員の高齢夫婦', meta: '標準的な夫婦の年金', pay: 'いま 年金23万7279円 → BI 14万円',
            res: '＋14万〜−9万7279円', more: opt('A', '年金に上乗せ', '＋14万円') + opt('B', '基礎年金だけ置き換え', '−1,216円') + opt('C', '年金をすべて置き換え', '−9万7279円') },
          { name: '生活保護の単身者', meta: '東京23区・30代', pay: 'いま 最大13万920円 → BI 7万円',
            res: '±0〜−6万920円', more: opt('A', '足りない分を生活保護で補う', '±0') + opt('B', '生活保護を廃止', '−6万920円') },
          { name: '夫婦＋子ども2人', meta: '年収1000万円', pay: 'いま 児童手当2万円 → BI 28万円',
            res: '＋26万〜−2万円', more: `<p class="det">後で返す額しだい。全額返すと児童手当の分だけ減る<br>増税の負担も重くなりやすい</p>` },
        ],
        t1: '答えは「何と引き換えか」で決まる',
        t2: '子育て世帯は得をしやすい。年金や生活保護に頼る人は、<br>制度が残るかどうかで「ほぼ同じ」から「月約10万円減」まで変わる',
        src: '前提：すべて月額、税負担増は含まない、児童手当はBIに置き換え<br>年金 A＝上乗せ・B＝基礎年金だけ置き換え・C＝すべて置き換え ／ 生活保護 A＝差額を補う・B＝廃止<br>出典：厚生労働省・日本年金機構（2026年度）、竹中平蔵氏の著書（2020年）、J-CASTニュース（2020年10月10日）',
        url: 'neteru-nyukin.eltociear.workers.dev/ja/calc/',
        extraCss: `
.rows{margin-top:28px;gap:14px}
.row{padding:18px 26px;gap:26px}
.lc{flex:0 0 430px;justify-content:center}
.nm{font-size:34px}
.meta{margin-top:4px;font-size:21px}
.pay{margin-top:8px;font-size:22px;line-height:1.3;color:#E3E8FF;font-weight:700;white-space:nowrap}
.rc{padding-left:26px}
.res{font-size:36px;white-space:nowrap}
.det{margin-top:6px;font-size:21px;line-height:1.35;color:#C9D0F0}
.opt{margin-top:5px;display:flex;align-items:center;gap:10px;font-size:21px;line-height:1.3;color:#C9D0F0;font-weight:700;white-space:nowrap}
.opt .ok{flex:0 0 26px;height:26px;border-radius:50%;background:#2E3772;color:#FFD66B;font-size:17px;font-weight:900;line-height:26px;text-align:center}
.opt .ot{flex:1}
.opt .ov{color:#FFFFFF;font-weight:900}
.take{margin-top:24px;margin-bottom:20px;padding:20px 30px 22px}
.t1{font-size:42px}
.t2{font-size:23px}
.src{font-size:18px}`,
      });
      m.body = m.body.replace('よくある疑問 × データ', '竹中平蔵案を家計で計算');
      return m;
    },
  },
  // note.com header for the article on the 「フィンランドで失敗した」 meme (Kela experiment 2017-2018). Same 1100x560
  // safe area and kicker / two-line hero / footer layout as note-greatreset; the .deco motif is a small results card
  // from the May 2020 final evaluation: employment effect small, life satisfaction and mental wellbeing better.
  'note-finland': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">フィンランドの社会実験 2017–2018</p>
  <h1 class="hero"><span class="l1">「フィンランドで失敗した」は</span><span class="l2"><em>本当？</em></span></h1>
  <p class="quote">ベーシックインカム実験で<b>わかったこと</b></p>
</div>
<div class="deco">
  <div class="card">
    <p class="ch">2年間の結果</p>
    <p class="row"><span>働いた日数</span><i class="sm">小</i></p>
    <p class="row"><span>生活の満足度</span>${plus}</p>
    <p class="row"><span>心の健康</span>${plus}</p>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:68px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:108px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:22px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:120px;bottom:56px;width:290px;height:184px}
.card{position:absolute;right:0;top:0;width:282px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 20px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.card .ch{margin:0 -20px 6px;padding:10px 20px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.card .row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:2px solid #DED6BF;font-size:23px;line-height:1.1;color:#141A3A}
.card .row:last-child{border-bottom:0}
.card .sm{width:26px;height:26px;border-radius:50%;background:#FFD66B;color:#141A3A;font-style:normal;font-size:16px;font-weight:900;line-height:26px;text-align:center}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article on Japan's 就業者負担軽減支援金 (refundable-tax-credit essay, three model people).
  // Same 1100x560 safe area and kicker / two-line hero / footer layout as note-takenaka; the .deco motif is a small
  // card of the three people: no earned income gets nothing, ¥1m part-time depends on the floor, ¥4.5m likely above
  // the ceiling. Amounts and lines are left to cabinet order, so the card shows no yen amounts for the payment.
  'note-kyufu': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">給付付き税額控除の第一歩</p>
  <h1 class="hero"><span class="l1">収入ゼロだと</span><span class="l2"><em>1円ももらえない</em></span></h1>
  <p class="quote">新しい給付金を<b>3人の家計</b>で考えた</p>
</div>
<div class="deco">
  <div class="ledger">
    <p class="lh">支援金は届く？</p>
    <p class="row"><span>収入ゼロ</span><i class="no">なし</i></p>
    <p class="row"><span>パート100万円</span><i class="q">?</i></p>
    <p class="row"><span>会社員450万円</span><i class="no">なし</i></p>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:100px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:40px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:120px;bottom:56px;width:300px;height:184px}
.ledger{position:absolute;right:0;top:0;width:292px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 20px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.ledger .lh{margin:0 -20px 6px;padding:10px 20px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.ledger .row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:2px solid #DED6BF;font-size:23px;line-height:1.1;color:#141A3A;white-space:nowrap}
.ledger .row:last-child{border-bottom:0}
.ledger .q{width:26px;height:26px;border-radius:50%;background:#FFD66B;color:#141A3A;font-style:normal;font-size:19px;font-weight:900;line-height:26px;text-align:center}
.ledger .no{padding:0 10px;height:26px;border-radius:13px;background:#E8505B;color:#FFFFFF;font-style:normal;font-size:17px;font-weight:900;line-height:26px}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // note.com header for the article on the 101 US guaranteed income pilots (/pilots/us/, data/us-pilots.json).
  // Same 1100x560 safe area and kicker / two-line hero / footer layout as note-kyufu; the .deco card contrasts
  // Stockton's 2021 first-year report (full-time work up 28% -> 40%) with the 2023 peer-reviewed trial (employment
  // differences not significant), plus the table's median of $500 a month.
  'note-pilots': {
    w: 1280, h: 670, langs: ['ja'], safe: [1100, 560],
    build: () => ({
      bare: true,
      moon: [1192, 92, 44],
      body: `
<div class="wrap">
  <p class="kicker">アメリカの「お金を配る実験」101件</p>
  <h1 class="hero"><span class="l1">いちばん有名な結果は</span><span class="l2"><em>“速報”</em>だった</span></h1>
  <p class="quote">101件で分かった<b>“お金を配る”</b>の本当の結果</p>
</div>
<div class="deco">
  <div class="ledger">
    <p class="lh">ストックトンの雇用</p>
    <p class="row"><span>2021 速報</span><i class="up">28→40%</i></p>
    <p class="row"><span>2023 論文</span><i class="no">有意差なし</i></p>
    <p class="row"><span>101件の中央値</span><i class="md">月$500</i></p>
  </div>
</div>
<div class="foot2">
  <svg width="64" height="45" viewBox="-8 -8 256 184">${bento}</svg>
  <p class="wm ja">不労所得研究所</p>
  <p class="handle">@FreeLunchLab</p>
</div>`,
      css: `
.page{padding:0}
.wrap{position:absolute;left:110px;top:92px;width:1060px}
.kicker{display:inline-block;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:10px 22px 12px;border-radius:999px}
.hero{margin-top:24px;padding-right:0;white-space:nowrap}
.hero span{display:block}
.hero .l1{font-size:72px;line-height:1.12}
.hero .l2{margin-top:4px;font-size:100px;line-height:1.12}
.hero em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.quote{margin-top:26px;font-size:36px;line-height:1.2;font-weight:900;color:#E3E8FF;white-space:nowrap}
.quote b{color:#FFD66B}
.deco{position:absolute;right:120px;bottom:56px;width:306px;height:184px}
.ledger{position:absolute;right:0;top:0;width:298px;transform:rotate(3deg);background:#F6F2E6;border-radius:14px;padding:0 20px 10px;box-shadow:0 10px 30px rgba(0,0,0,.35);overflow:hidden}
.ledger .lh{margin:0 -20px 6px;padding:10px 20px;background:#1B6B52;color:#F6F2E6;font-size:22px;line-height:1}
.ledger .row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:2px solid #DED6BF;font-size:23px;line-height:1.1;color:#141A3A;white-space:nowrap}
.ledger .row:last-child{border-bottom:0}
.ledger i{padding:0 10px;height:26px;border-radius:13px;font-style:normal;font-size:17px;font-weight:900;line-height:26px}
.ledger .up{background:#6CF0B0;color:#141A3A}
.ledger .no{background:#E8505B;color:#FFFFFF}
.ledger .md{background:#FFD66B;color:#141A3A}
.foot2{position:absolute;left:110px;right:110px;bottom:62px;display:flex;align-items:center;gap:16px}
.foot2 .wm{font-size:30px}
.foot2 .handle{margin-left:10px;font-size:28px;padding:6px 20px}
`,
    }),
  },
  // Three-people card for the same note article, built on myth() like note-takenaka-table. Facts only from the
  // refundable-tax-credit essay: the bill and outline (earned income above a floor, total income below a ceiling),
  // the council's floor options (wages of about ¥530k, ¥740k or about ¥1.06m; below the no-local-tax line the payment
  // is the flat part), the government's reference figures via Kyodo (ceiling in the ¥3m range), BI assumed ¥30,000/month.
  'note-kyufu-3people': {
    w: 1200, h: 1500, langs: ['ja'], file: 'note-kyufu-3people-ja',
    build: lang => {
      const opt = (k, t, v) => `<p class="opt"><span class="ok">${k}</span><span class="ot">${t}</span><span class="ov">${v}</span></p>`;
      const bi = `<p class="bi"><span class="bl">BI（月3万円）なら</span><span class="bv">年36万円</span></p>`;
      const m = myth(lang, {
        q: '新しい支援金、3人の家計では',
        qSize: 72,
        rows: [
          { name: 'Aさん・求職中', meta: '去年の勤労所得 なし', pay: '勤労所得が下限を超えることが条件',
            res: '支援金 なし', more: `<p class="det">働けなかった年は対象外。病気や介護で<br>働けない人への対応は2028年度中に検討</p>` + bi },
          { name: 'Bさん・パート', meta: '去年の給与収入 100万円', pay: '所得の下限をどこに引くかで変わる',
            res: '下限しだい', more: opt('案', '下限 約53万円・74万円', '対象（定額部分）') + opt('案', '下限 約106万円', '対象外') + bi },
          { name: 'Cさん・会社員', meta: '去年の給与収入 450万円', pay: '参考案の上限は個人年収300万円台',
            res: '対象外の見込み', more: `<p class="det">BIなら受け取るが、財源の税も増えるので<br>正味では負担が増える可能性</p>` + bi },
        ],
        t1: '届くかどうかは「線引き」しだい',
        t2: '下限・上限・金額は、これから政令で決まります。政府の参考案では<br>対象は約2,000万人、1人あたり平均で年3万円程度（2027・2028年度）',
        src: '前提：支援金は法案・大綱の仕組みと政府が示した参考の数字だけを使用。金額は未定<br>BIは全員に月3万円（年36万円）と仮定。「定額部分」は住民税非課税の水準より下の見込み<br>出典：社会保障国民会議 中間とりまとめ（2026年7月29日）、内閣官房 大綱・法案概要（9月15日・10月9日）、共同通信（10月17日）',
        url: 'neteru-nyukin.eltociear.workers.dev/ja/essays/',
        extraCss: `
.rows{margin-top:34px;gap:22px}
.row{padding:32px 30px;gap:26px}
.lc{flex:0 0 400px;justify-content:center}
.nm{font-size:38px}
.meta{margin-top:6px;font-size:23px}
.pay{margin-top:12px;font-size:21px;line-height:1.35;color:#E3E8FF;font-weight:700;white-space:nowrap}
.rc{padding-left:28px}
.res{font-size:40px;white-space:nowrap}
.det{margin-top:8px;font-size:21px;line-height:1.4;color:#C9D0F0}
.opt{margin-top:6px;display:flex;align-items:center;gap:10px;font-size:21px;line-height:1.3;color:#C9D0F0;font-weight:700;white-space:nowrap}
.opt .ok{flex:0 0 auto;padding:0 8px;height:26px;border-radius:13px;background:#2E3772;color:#FFD66B;font-size:16px;font-weight:900;line-height:26px;text-align:center}
.opt .ov{margin-left:6px;color:#FFFFFF;font-weight:900}
.bi{margin-top:12px;display:flex;align-items:center;gap:12px;padding-top:10px;border-top:2px dashed #2E3772;font-size:21px;line-height:1.2;font-weight:700;color:#9AA3CF;white-space:nowrap}
.bi .bv{color:#6CF0B0;font-weight:900;font-size:26px}
.take{margin-top:28px;margin-bottom:22px;padding:22px 30px 24px}
.t1{font-size:44px}
.t2{margin-top:10px;font-size:23px;line-height:1.45;font-weight:700}
.src{font-size:18px}`,
      });
      m.body = m.body.replace('よくある疑問 × データ', '給付付き税額控除の第一歩');
      return m;
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
  // GitHub profile README banner (eltociear/eltociear, "Basic income tracker" section). 1600x500, shown about 830px
  // wide, so no text below 28px. English first with the Japanese name small; counts come straight from src/data.js
  // (TIMELINE, GRAVE, OSS, ESSAYS, LANGS) so a re-render picks up new entries.
  'readme-banner': {
    w: 1600, h: 500, langs: ['en'], file: 'readme-banner',
    build: () => {
      const D = require('../../../src/data.js');
      const stats = [[D.TIMELINE.length, 'experiments'], [D.GRAVE.length, 'ended schemes'], [D.OSS.length, 'open-source projects'],
        [D.ESSAYS.length, 'essays'], [D.LANGS.length, 'languages']];
      return {
        bare: true,
        moon: [1500, 96, 40],
        body: `
<div class="top">
  <svg width="132" height="93" viewBox="-8 -8 256 184">${bento}</svg>
  <div><p class="name">Free <b>Lunch</b> Lab</p><p class="jp">不労所得研究所</p></div>
</div>
<p class="lede">Basic income, tracked with sources</p>
<p class="stats">${stats.map(([n, l]) => `<span><b>${n}</b> ${l}</span>`).join('<i></i>')}</p>
<div class="foot3">
  <p class="url">neteru-nyukin.eltociear.workers.dev</p>
  <p class="more">Weekly news<i></i>Cost calculator</p>
</div>`,
        css: `
.page{padding:52px 76px 50px}
.top{display:flex;align-items:center;gap:30px}
.top svg{flex:none}
.name{font-family:"Dela Gothic One",sans-serif;font-size:78px;line-height:1;text-shadow:0 6px 40px rgba(120,100,255,.45)}
.name b{font-weight:400;color:#FFD66B}
.jp{margin-top:12px;font-size:30px;line-height:1;font-weight:700;letter-spacing:.12em;color:#CFD6FF}
.lede{margin-top:34px;font-size:48px;line-height:1.15;font-weight:900;color:#EEF1FF}
.stats{margin-top:30px;display:flex;align-items:center;gap:26px;font-size:30px;line-height:1;color:#C9D0F0;white-space:nowrap}
.stats b{font-weight:900;font-size:36px;color:#FFD66B}
.stats i,.more i{width:6px;height:6px;border-radius:50%;background:rgba(207,214,255,.4)}
.foot3{margin-top:auto;display:flex;align-items:center;gap:24px;padding-top:22px;border-top:2px solid rgba(255,255,255,.12)}
.url{font-size:30px;line-height:1;color:#EEF1FF;background:rgba(255,255,255,.08);border:2px solid rgba(255,214,107,.55);padding:10px 24px 12px;border-radius:999px}
.more{margin-left:auto;display:flex;align-items:center;gap:20px;font-size:30px;line-height:1;color:#C9D0F0}
`,
      };
    },
  },
  // X post image: "Does free cash make people stop working?" Three experiments side by side (Finland, Stockton SEED,
  // OpenResearch), numbers from TIMELINE + the openresearch-cash-study essay in src/data.js; Stockton's 28->40 vs
  // 32->37 full-time figures are SEED's first-year analysis (Feb 2019-Feb 2020). 1200x1500 (4:5) for the mobile
  // timeline. Flat palette only: solid navy, solid gold #FFD66B, ink #141A3A on gold; no gradients, glows or moon.
  'work-effect': {
    w: 1200, h: 1500, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      const arrow = `<svg class="ar" width="34" height="20" viewBox="0 0 34 20"><path d="M2 10 H29 M21 3 L29 10 L21 17" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      const cmp = (label, a, b, cls = '') => `<p class="cmp ${cls}"><span class="cl">${label}</span><span class="cv">${a}</span>${arrow}<span class="cv b">${b}</span></p>`;
      const R = ja ? '受給者' : 'Recipients', C = ja ? '対照群' : 'Control group';
      const rows = [
        { name: ja ? 'フィンランド' : 'Finland', meta: ja ? '2017–2018 ・ 政府（Kela）' : '2017–2018 · Government (Kela)',
          pay: ja ? '月560ユーロ × 2年' : '€560 a month × 2 years', who: ja ? '無作為に選んだ失業者2,000人' : '2,000 unemployed people',
          res: ja ? '仕事への効果は小さかった' : 'Small effect on work',
          more: `<p class="det">${ja ? '生活の満足度と心の健康は改善' : 'Wellbeing and mental health improved'}</p>` },
        { name: ja ? 'ストックトン（米国）' : 'Stockton, USA', meta: ja ? '2019–2021 ・ SEED' : '2019–2021 · SEED',
          pay: ja ? '月500ドル × 2年' : '$500 a month × 2 years', who: ja ? '住民125人' : '125 residents',
          res: ja ? 'フルタイムで働く人が増えた' : 'More people got full-time jobs',
          more: `<p class="det">${ja ? '1年目のフルタイム就業率' : 'Full-time work in the first year'}</p>${cmp(R, '28%', '40%', 'hi')}${cmp(C, '32%', '37%')}` },
        { name: 'OpenResearch', meta: ja ? '2020–2023 ・ サム・アルトマン出資' : '2020–2023 · backed by Sam Altman',
          pay: ja ? '月1,000ドル × 3年' : '$1,000 a month × 3 years', who: ja ? '21〜40歳の1,000人' : '1,000 people aged 21–40',
          res: ja ? '労働時間は週1.3時間減った' : '1.3 fewer hours of work a week',
          more: `<p class="det">${ja ? 'それでも就業率は両群で上がった' : 'Employment still rose in both groups'}</p>${cmp(R, '58%', '72%', 'hi')}${cmp(C, '59%', '74%')}` },
      ];
      const mark = bento.replace('url(#grad)', '#FFD66B');
      return {
        bare: true,
        moon: [-999, -999, 1],
        body: `
<p class="kicker">${ja ? '3つの社会実験のデータから' : 'What three cash experiments found'}</p>
<h1 class="q">${ja ? 'お金を配ったら、<br>人は働かなくなる？' : 'Does free cash make<br>people stop working?'}</h1>
<div class="rows">${rows.map(r => `
  <section class="row">
    <div class="lc">
      <p class="nm">${r.name}</p>
      <p class="meta">${r.meta}</p>
      <p class="pay">${r.pay}</p>
      <p class="who">${r.who}</p>
    </div>
    <div class="rc">
      <p class="res">${r.res}</p>
      ${r.more}
    </div>
  </section>`).join('')}
</div>
<div class="take">
  <p class="t1">${ja ? '人は働くのをやめなかった' : 'People did not stop working'}</p>
  <p class="t2">${ja ? '変化は小さかった。ストックトンではフルタイム就業が増え、<br>OpenResearch では労働時間が少し減った' : 'The effects were small. Full-time work rose in Stockton;<br>in OpenResearch, hours fell a little.'}</p>
</div>
<div class="foot3">
  <p class="src">${ja ? '出典：Kela・フィンランド社会保健省（2020）／ SEED 1年目分析（2021）／ Vivalt ほか、NBER w32719（OpenResearch）' : 'Sources: Kela and Finland’s Ministry of Social Affairs and Health (2020) / SEED first-year analysis (2021) / Vivalt et al., NBER w32719 (OpenResearch)'}</p>
  <div class="brand">
    <svg width="64" height="45" viewBox="-8 -8 256 184">${mark}</svg>
    <p class="wm2">${ja ? '不労所得研究所' : 'Free Lunch Lab'}</p>
    <p class="url">neteru-nyukin.eltociear.workers.dev/timeline/</p>
  </div>
</div>`,
        css: `
body{background:#0E1330}
svg.sky g{opacity:.45}
.page{padding:64px 64px 52px}
.kicker{align-self:flex-start;font-size:30px;line-height:1;color:#141A3A;background:#FFD66B;padding:11px 24px 13px;border-radius:999px;font-weight:900}
.q{margin-top:26px;padding-right:0;text-shadow:none;font-size:${ja ? 84 : 80}px;line-height:1.16;color:#FFFFFF;white-space:nowrap}
.rows{margin-top:38px;display:flex;flex-direction:column;gap:18px}
.row{display:flex;gap:30px;background:#171D45;border:2px solid #262E62;border-radius:22px;padding:26px 30px}
.lc{flex:0 0 392px;display:flex;flex-direction:column}
.nm{font-size:${ja ? 38 : 40}px;line-height:1.15;font-weight:900;color:#FFFFFF;white-space:nowrap}
.meta{margin-top:6px;font-size:23px;line-height:1.3;color:#9AA3CF;font-weight:700;white-space:nowrap}
.pay{margin-top:14px;font-size:30px;line-height:1.2;color:#FFFFFF;font-weight:900;white-space:nowrap}
.who{margin-top:6px;font-size:23px;line-height:1.3;color:#C9D0F0;font-weight:500}
.rc{flex:1;min-width:0;border-left:3px solid #2E3772;padding-left:30px;display:flex;flex-direction:column;justify-content:center}
.res{font-size:${ja ? 38 : 39}px;line-height:1.2;font-weight:900;color:#FFD66B}
.det{margin-top:8px;font-size:26px;line-height:1.3;color:#E3E8FF;font-weight:700}
.cmp{margin-top:8px;display:flex;align-items:center;gap:12px;font-size:28px;line-height:1.2;color:#C9D0F0;font-weight:700}
.cmp .cl{width:${ja ? 110 : 186}px;font-size:23px;color:#9AA3CF}
.cmp .cv{font-family:"Dela Gothic One",sans-serif;font-weight:400;font-size:32px;min-width:64px;text-align:right}
.cmp .ar{color:#6C76A8}
.cmp.hi .cl{color:#FFD66B}
.cmp.hi .cv{color:#FFFFFF}
.cmp.hi .cv.b{color:#FFD66B}
.take{margin-top:30px;margin-bottom:24px;background:#FFD66B;color:#141A3A;border-radius:22px;padding:24px 32px 26px}
.t1{font-size:${ja ? 46 : 48}px;line-height:1.15;font-weight:900;white-space:nowrap}
.t2{margin-top:8px;font-size:26px;line-height:1.4;font-weight:700}
.foot3{margin-top:auto;padding-top:20px;border-top:2px solid #262E62}
.src{font-size:19px;line-height:1.4;color:#9AA3CF;font-weight:500}
.brand{margin-top:14px;display:flex;align-items:center;gap:16px}
.wm2{font-size:30px;line-height:1;font-weight:900;color:#FFFFFF;${ja ? '' : 'font-family:"Dela Gothic One",sans-serif;font-weight:400;'}}
.url{margin-left:auto;font-size:24px;line-height:1;color:#FFD66B;font-weight:700}
`,
      };
    },
  },
  // "Common objection vs data" series, cards 2-5 (card 1 is 'work-effect'). Every figure is checked against the
  // primary source named in the footer, or taken from TIMELINE / ESSAYS / CALC / BI_NEWS in src/data.js.
  // Prices: Egger et al., Econometrica 90(6) 2022 (abstract: ~USD 1,000, 10,500+ households, 653 villages, >15% of
  // local GDP, multiplier 2.5; 0.1% average inflation and <1% at the peak from the paper's text); Cunha, De Giorgi &
  // Jayachandran, REStud 86(1) 2019 (in-kind -4%, cash "positive but negligible"); Jones & Marinescu, NTJ 2022
  // (Alaska prices: suggestive, uncertain) and AEJ: Policy 14(2) 2022 (no employment effect, part-time +1.8 pp);
  // Alaska 2026 PFD $1,000 + $200 energy relief (BI_NEWS us-alaska-pfd-2026); ILO brief, Özay & Ernst, May 2026.
  'myth-prices': {
    w: 1200, h: 1500, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      return myth(lang, {
        q: ja ? 'お金を配ったら、<br>物価が上がるだけ？' : 'Won’t cash just<br>push prices up?',
        rows: [
          { name: ja ? 'ケニア（農村部）' : 'Rural Kenya', meta: ja ? '2014–2017 ・ GiveDirectly' : '2014–2017 · GiveDirectly',
            pay: ja ? '1世帯に約1,000ドルを1回' : 'About $1,000 per home',
            who: ja ? '653村・1万500世帯超<br>地域GDPの15%超にあたる額' : 'Paid once to 10,500+ households in<br>653 villages: over 15% of local GDP',
            res: ja ? '物価の上昇は平均0.1%' : 'Prices rose 0.1% on average',
            more: `<p class="det">${ja ? '給付が最も多い時期でも1%未満<br>配った1ドルで地域経済が約2.5ドル分拡大' : 'Under 1% even at the peak.<br>Each $1 grew the local economy by about $2.50'}</p>` },
          { name: ja ? 'メキシコ（農村部）' : 'Rural Mexico', meta: ja ? '村ごとに無作為に割り当て' : 'Villages assigned at random',
            pay: ja ? '食料の現物か、同額の現金' : 'Food boxes, or equal cash',
            res: ja ? '現金：物価はほぼ上がらず' : 'Cash: a negligible rise in prices',
            more: `<p class="det">${ja ? '食料を運び込んだ村では物価が4%下落<br>どちらも、遠い村ほど影響は大きい' : 'Trucked-in food cut prices by 4%.<br>Both effects were bigger in remote villages'}</p>` },
          { name: ja ? 'アラスカ（米国）' : 'Alaska, USA', meta: ja ? '1982– ・ 州の基金から毎年' : '1982– · yearly, from a state fund',
            pay: ja ? '2026年は1人1,200ドル' : '$1,200 each in 2026',
            who: ja ? '条件を満たす住民全員' : 'Every eligible resident',
            res: ja ? '物価への影響ははっきりしない' : 'Effect on prices is unclear',
            more: `<p class="det">${ja ? '上昇の兆候はあるが、原因とは断定できない<br>雇用は減らず、パート就業は1.8ポイント増' : 'Some signs of a rise; the cause is uncertain.<br>Jobs did not fall; part-time work rose 1.8 points'}</p>` },
        ],
        t1: ja ? '地域の実験では、物価はほぼ動かず' : 'In local trials, prices barely moved',
        t2: ja ? 'ただし国全体に配るなら話は別。住宅のように供給が<br>すぐ増えない分野では値上がりの恐れがある（ILO）' : 'A nationwide payment is a different test: where supply<br>can’t grow fast, like housing, prices could rise (ILO).',
        src: ja ? '出典：Egger ほか、Econometrica（2022）／ Cunha ほか、Review of Economic Studies（2019）／ Jones・Marinescu、<br>National Tax Journal・AEJ: Economic Policy（2022）／ アラスカ州PFD局（2026）／ Özay・Ernst、ILO（2026）'
          : 'Sources: Egger et al., Econometrica (2022) / Cunha et al., Review of Economic Studies (2019) / Jones and Marinescu,<br>National Tax Journal and AEJ: Economic Policy (2022) / Alaska PFD Division (2026) / Özay and Ernst, ILO (2026)',
        url: `neteru-nyukin.eltociear.workers.dev/${ja ? 'ja/' : ''}timeline/`,
      });
    },
  },
  // Spending: Evans & Popova, EDCC 65(2) 2017 (19 studies, meta-analysis: significant fall, Latin America / Africa /
  // Asia, conditional and unconditional); Haushofer & Shapiro, QJE 131(4) 2016 (consumption $158 -> $193 PPP a month;
  // alcohol and tobacco effects negative and insignificant); OpenResearch Key Findings: Spending (+$310: food $67,
  // rent $52, transport $50), as in the openresearch-cash-study essay.
  'myth-spending': {
    w: 1200, h: 1500, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      const chip = (k, v) => `<span class="chip"><span class="ck">${k}</span><span class="cvv">${v}</span></span>`;
      return myth(lang, {
        q: ja ? '酒やギャンブルに<br>使われるのでは？' : 'Won’t people spend it<br>on drink and gambling?',
        qSize: ja ? 84 : 76,
        rows: [
          { name: ja ? '世界銀行のレビュー' : 'World Bank review', meta: ja ? 'Evans・Popova（2017）' : 'Evans and Popova (2017)',
            pay: ja ? '19の研究をまとめて分析' : '19 studies, pooled',
            who: ja ? '中南米・アフリカ・アジア' : 'Latin America, Africa and Asia',
            res: ja ? '酒・たばこの支出は減った' : 'Drink and tobacco spending fell',
            more: `<p class="det">${ja ? '平均で減少。条件付きでも無条件でも同じ傾向' : 'On average, with or without conditions'}</p>` },
          { name: ja ? 'ケニア（農村部）' : 'Rural Kenya', meta: ja ? 'GiveDirectly ・ QJE（2016）' : 'GiveDirectly · QJE (2016)',
            pay: ja ? '無条件の現金給付' : 'No-strings cash',
            who: ja ? '貧しい世帯、無作為化比較試験' : 'Poor households, randomised trial',
            res: ja ? '酒・たばこの支出は増えず' : 'No rise in drink or tobacco',
            more: `<p class="det">${ja ? '9か月後の世帯の月の消費（購買力平価ドル）' : 'Monthly household spending at 9 months (PPP)'}</p><p class="cmp hi kc"><span class="cl">${ja ? '対照群' : 'Control'}</span><span class="cv">$158</span><span class="cl" style="margin-left:22px">${ja ? '受給世帯' : 'Recipients'}</span><span class="cv b">$193</span></p>` },
          { name: 'OpenResearch', meta: ja ? '2020–2023 ・ 米国' : '2020–2023 · USA',
            pay: ja ? '月1,000ドル × 3年' : '$1,000 a month × 3 years', who: ja ? '21〜40歳の1,000人' : '1,000 people aged 21–40',
            res: ja ? '増えた支出の半分超は生活費' : 'Over half went on basics',
            more: `<p class="det">${ja ? '対照群より増えた月の支出は310ドル' : 'Spent $310 a month more than the control group'}</p><p class="chips">${chip(ja ? '食費' : 'Food', '+$67')}${chip(ja ? '家賃' : 'Rent', '+$52')}${chip(ja ? '交通' : 'Transport', '+$50')}</p>` },
        ],
        t1: ja ? '使い道は、まず生活費だった' : 'It went on food, rent and transport',
        t2: ja ? 'ここでの研究が測ったのは主に酒とたばこで、ギャンブルは<br>直接測っていない。測った範囲では、増えなかった' : 'These studies mainly measured alcohol and tobacco, not gambling.<br>Where they measured, spending did not go up.',
        src: ja ? '出典：Evans・Popova、Economic Development and Cultural Change（2017）／ Haushofer・Shapiro、<br>Quarterly Journal of Economics（2016）／ OpenResearch「Key Findings: Spending」（2024）'
          : 'Sources: Evans and Popova, Economic Development and Cultural Change (2017) / Haushofer and Shapiro,<br>Quarterly Journal of Economics (2016) / OpenResearch, Key Findings: Spending (2024)',
        url: `neteru-nyukin.eltociear.workers.dev/${ja ? 'ja/' : ''}timeline/`,
        extraCss: `.cmp .cl{width:${ja ? 130 : 186}px}
.cmp.kc .cl{width:auto}
.chips{margin-top:12px;display:flex;gap:14px}
.chip{display:flex;flex-direction:column;gap:6px;background:#0E1330;border:2px solid #2E3772;border-radius:14px;padding:10px 16px 12px}
.ck{font-size:21px;line-height:1;color:#9AA3CF;font-weight:700}
.cvv{font-family:"Dela Gothic One",sans-serif;font-size:32px;line-height:1;color:#FFD66B}`,
      });
    },
  },
  // Cost: gross cost from CALC (Japan: ¥30,000 x 12 x 122,812,000 = ¥44.2tn = 6.7% of 2025 GDP ¥663.76tn; US: $1,000 x
  // 12 x 274,383,878 adults = $3.29tn = 10.7% of 2025 GDP $30.77tn); Widerquist, Basic Income Studies 12(2) 2017
  // ($12,000 adult / $6,000 child, 50% marginal rate: gross $3.415tn, net $539bn, ~2.95% of GDP); funding models from
  // TIMELINE / BI_NEWS (Alaska 2026 PFD $1,200; Marshall Islands Enra ~$200 a quarter from the Compact trust fund;
  // Korea rural pilot 150,000 won a month, 40% national / 30% province / 30% county).
  'myth-cost': {
    w: 1200, h: 1500, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      const tile = (label, v, g) => `<div class="tile"><p class="tl">${label}</p><p class="tv big">${v}</p><p class="tg">${g}</p></div>`;
      const fund = (n, how, amt) => `<div class="fund"><p class="fn">${n}</p><p class="fh">${how}</p><p class="fa">${amt}</p></div>`;
      const gn = (label, v, note, cls = '') => `<p class="gn ${cls}"><span class="cl">${label}</span><span class="cv">${v}</span><span class="nt">${note}</span></p>`;
      return myth(lang, {
        q: ja ? '財源はどうするの？' : 'How would we ever<br>pay for it?',
        top: `<p class="sec">${ja ? '配る総額（グロス）は大きい' : 'The gross cost is big'}</p>
<div class="tiles">${tile(ja ? '日本：全員に月3万円' : 'Japan: ¥30,000 a month to all', ja ? '年44.2兆円' : '¥44.2tn/yr', ja ? 'GDPの6.7%' : '6.7% of GDP')}${tile(ja ? '米国：大人に月1,000ドル' : 'US: $1,000 a month to adults', ja ? '年3.3兆ドル' : '$3.3tn/yr', ja ? 'GDPの10.7%' : '10.7% of GDP')}</div>`,
        rows: [
          { name: ja ? 'グロスとネット' : 'Gross vs net', meta: ja ? 'Widerquist（2017）・米国' : 'Widerquist (2017) · US',
            pay: ja ? '大人に年1.2万ドル<br>子どもに年6,000ドル' : '$12,000 a year per adult,<br>$6,000 per child',
            who: ja ? '税率50%でまかなう簡易試算' : 'Rough estimate with a 50% tax rate',
            res: ja ? 'ネットはグロスの約6分の1' : 'Net cost: about a sixth of gross',
            more: `<p class="det">${ja ? '所得の多い人は受け取る額より多く税を払う<br>差し引きで実際に移るお金がネットのコスト' : 'Better-off people pay more in tax than they get.<br>What actually changes hands is the net cost'}</p>${gn(ja ? 'グロス' : 'Gross', '$3.4tn', '')}${gn(ja ? 'ネット' : 'Net', '$539bn', ja ? 'GDPの約3%' : 'about 3% of GDP', 'hi')}` },
        ],
        after: `<p class="sec">${ja ? 'すでに動いている財源' : 'How it is paid for today'}</p>
<div class="funds">${fund(ja ? 'アラスカ' : 'Alaska', ja ? '石油収入の基金' : 'Oil-wealth fund', ja ? '2026年 1人1,200ドル' : '$1,200 each in 2026')}${fund(ja ? 'マーシャル諸島' : 'Marshall Islands', ja ? '米国との協定の信託基金' : 'Trust fund from a US treaty', ja ? '3か月ごと約200ドル' : 'About $200 a quarter')}${fund(ja ? '韓国の農村' : 'Rural Korea', ja ? '国40%・道30%・郡30%' : 'National and local budgets', ja ? '月15万ウォン' : '150,000 won a month')}</div>`,
        t1: ja ? '安くはない。だから設計で決まる' : 'Not cheap. The design sets the bill',
        t2: ja ? '金額、対象、税の組み方、置き換える給付によって、<br>実際の負担は大きく変わる' : 'The amount, who gets it, how the tax is set and which<br>benefits it replaces all change the real cost.',
        src: ja ? '出典：総務省「人口推計」（2026年10月）・世界銀行GDP（2025）／ 国連 World Population Prospects 2024 ／ Widerquist、Basic Income Studies（2017）／ アラスカ州PFD局（2026）／ Lowy Institute（マーシャル諸島）／ 韓国 農林畜産食品部'
          : 'Sources: Statistics Bureau of Japan (Oct 2026), World Bank GDP (2025) / UN World Population Prospects 2024 / Widerquist, Basic Income Studies (2017) / Alaska PFD Division (2026) / Lowy Institute (Marshall Islands) / Korea MAFRA',
        url: `neteru-nyukin.eltociear.workers.dev/${ja ? 'ja/' : ''}calc/`,
        extraCss: `
.sec{margin-top:24px;font-size:27px;line-height:1.2;font-weight:900;color:#9AA3CF}
.tiles{margin-top:14px;display:flex;gap:18px}
.tile{flex:1;background:#171D45;border:2px solid #262E62;border-radius:22px;padding:22px 28px 24px}
.tl{font-size:24px;line-height:1.3;color:#C9D0F0;font-weight:700;white-space:nowrap}
.tv{margin-top:10px;font-size:${ja ? 54 : 56}px;line-height:1.1;white-space:nowrap}
.tg{margin-top:8px;font-size:30px;line-height:1.1;color:#FFD66B;font-weight:900}
.rows{margin-top:18px}
.gn{margin-top:8px;display:flex;align-items:baseline;gap:16px;color:#C9D0F0}
.gn .cl{width:${ja ? 96 : 80}px;font-size:23px;color:#9AA3CF;font-weight:700}
.gn .cv{font-family:"Dela Gothic One",sans-serif;font-size:32px;color:#C9D0F0}
.gn .nt{font-size:24px;font-weight:900;color:#FFD66B}
.gn.hi .cl{color:#FFD66B}.gn.hi .cv{color:#FFD66B}
.funds{margin-top:14px;display:flex;gap:18px}
.fund{flex:1;background:#171D45;border:2px solid #262E62;border-radius:22px;padding:20px 24px 22px}
.fn{font-size:${ja ? 30 : 30}px;line-height:1.15;font-weight:900;color:#FFFFFF;white-space:nowrap}
.fh{margin-top:6px;font-size:21px;line-height:1.3;color:#9AA3CF;font-weight:700}
.fa{margin-top:10px;font-size:25px;line-height:1.2;color:#FFD66B;font-weight:900}
.take{margin-top:26px}`,
      });
    },
  },
  // AI: Altman, YC blog 27 Jan 2016 ("as technology continues to eliminate traditional jobs"); AI Dividend (Blood in
  // the Machine, 24 Mar 2026: $1,000 a month for a year, 25-50 workers, $300,000 start, $3m goal for 2026); Anthropic,
  // Investing in the public benefit, 18 Oct 2026 (5% of shares subject to stockholder approval; "direct distributions to
  // specific populations"; governance not yet published); ILO research brief, Özay & Ernst, May 2026.
  'myth-ai': {
    w: 1200, h: 1500, langs: ['ja', 'en'],
    build: lang => {
      const ja = lang === 'ja';
      return myth(lang, {
        q: ja ? 'AIで仕事が<br>なくなったら？' : 'What if AI<br>takes the jobs?',
        lede: ja ? '予測ではなく、すでに動いているお金と議論' : 'Not a forecast: the money and arguments already on the table',
        rows: [
          { name: 'OpenResearch', meta: ja ? '2016年発表 ・ サム・アルトマン出資' : 'Announced 2016 · Sam Altman',
            pay: ja ? '月1,000ドル × 3年' : '$1,000 a month × 3 years', who: ja ? '1,000人' : '1,000 people',
            res: ja ? '動機は、技術で仕事が減る時代への備え' : 'Motive: preparing for tech job loss',
            more: `<p class="det">${ja ? '結果：労働時間は週1.3時間減、支出は主に生活費' : 'Result: 1.3 fewer hours of work a week;<br>the money went mostly on basics'}</p>` },
          { name: 'AI Dividend', meta: ja ? '2026年3月〜 ・ 米国の非営利団体' : 'Since March 2026 · US nonprofits',
            pay: ja ? '月1,000ドル × 1年' : '$1,000 a month × 1 year',
            res: ja ? 'AIで仕事を失った人への現金給付' : 'Cash for workers hit by AI',
            more: `<p class="det">${ja ? '25〜50人。30万ドルで始め、<br>2026年に300万ドルを配るのが目標' : '25–50 people. Started with $300,000;<br>aims to pay out $3 million in 2026'}</p>` },
          { name: 'Anthropic', meta: ja ? '2026年10月18日 ・ 公益基金' : '18 Oct 2026 · Public Benefit Fund',
            pay: ja ? '株式の5%を基金に' : '5% of its shares into a fund',
            res: ja ? '使い道の例に「特定の人々への直接分配」' : 'Uses may include “direct distributions to specific populations”',
            more: `<p class="det">${ja ? '株主の承認が条件。運営の仕組みは未公表' : 'Needs stockholder approval;<br>governance not yet published'}</p>` },
          { name: ja ? 'ILO（国際労働機関）' : 'ILO research brief', meta: ja ? '2026年5月 ・ Özay・Ernst' : 'May 2026 · Özay and Ernst',
            pay: ja ? '懐疑的な立場' : 'The sceptical view',
            res: ja ? 'AIが変えるのは職業より「作業」' : 'AI changes tasks, not whole occupations',
            more: `<p class="det">${ja ? '全員への給付は住宅や医療の値上がりを招くと指摘<br>職業訓練や住宅供給の拡大を優先すべきと主張' : 'Cash for all would push up housing and health<br>prices; it favours reskilling and more housing'}</p>` },
        ],
        t1: ja ? '議論は理論から、実際のお金へ' : 'The debate has moved to real money',
        t2: ja ? 'どれもまだ小さく、一部は約束の段階。<br>AIが仕事をどれだけ減らすかは、まだ誰にも分からない' : 'All of it is small, and some is only a pledge.<br>Nobody yet knows how many jobs AI will take.',
        src: ja ? '出典：Altman「Basic Income」Y Combinator ブログ（2016）／ Vivalt ほか、NBER w32719 ／<br>Blood in the Machine（2026年3月24日）／ Anthropic（2026年10月18日）／ Özay・Ernst、ILO（2026年5月）'
          : 'Sources: Altman, “Basic Income”, Y Combinator blog (2016) / Vivalt et al., NBER w32719 / Blood in the Machine (24 Mar 2026) / Anthropic, “Investing in the public benefit” (18 Oct 2026) / Özay and Ernst, ILO research brief (May 2026)',
        url: `neteru-nyukin.eltociear.workers.dev/${ja ? 'ja/' : ''}essays/`,
        extraCss: `
.rows{margin-top:24px;gap:14px}
.who{margin-top:4px;font-size:21px}
.row{padding:18px 28px}
.lede2{margin-top:12px}
.lc{flex-basis:360px}
.nm{font-size:${ja ? 34 : 36}px}
.meta{font-size:21px}
.pay{margin-top:10px;font-size:25px}
.res{font-size:${ja ? 30 : 29}px}
.det{font-size:23px}
.take{margin-top:24px}`,
      });
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
