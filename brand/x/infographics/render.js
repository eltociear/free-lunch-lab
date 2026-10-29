// Usage: node brand/x/infographics/render.js [name ...]
//   -> brand/x/infographics/{name}-{lang}.png (1080x1350, 4:5 portrait for the X feed)
//   With no args every infographic in GRAPHICS is rendered. Example: node brand/x/infographics/render.js verify-5
// X (@FreeLunchLab) posts only; not part of the site (outside public/). Chrome path can be overridden with CHROME.
// To add an infographic: add an entry to GRAPHICS that returns { body, css } per language; the shared frame
// (night sky, title, footer, fonts) is handled by frame().
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { SERVICES, T } = require('../../../src/data.js');

const DIR = __dirname;
const W = 1080, H = 1350;
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

const STARS = n => {
  let s = 11, out = '';
  const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < n; i++) out += `<circle cx="${(r() * W).toFixed(1)}" cy="${(r() * H).toFixed(1)}" r="${(0.6 + r() * 1.5).toFixed(2)}" fill="${r() > .7 ? '#FFF7D6' : '#FFFFFF'}" opacity="${(0.35 + r() * 0.5).toFixed(2)}"/>`;
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

const BASE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{position:relative;color:#EEF1FF;font-family:"Zen Kaku Gothic New",sans-serif;font-weight:700;
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

function frame(lang, { title, sub, body, css }) {
  const L = T[lang];
  const wordmark = lang === 'ja' ? esc(L.brandPlain) : 'Free <em>Lunch</em> Lab';
  const text = [title, sub, body, wordmark, L.tagline, '@FreeLunchLab'].join('');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
${inlineFonts(text)}
${BASE_CSS}
${css}
</style></head><body>
<svg class="sky" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#6CF0B0"/></linearGradient></defs>
  <g opacity=".8">${STARS(110)}</g>${moon(966, 112, 50)}
</svg>
<div class="page">
  <h1>${title}</h1>
  <p class="sub">${esc(sub)}</p>
  ${body}
  <div class="foot">
    <svg width="84" height="59" viewBox="-8 -8 256 184">${bento}</svg>
    <div><p class="wm ${lang}">${wordmark}</p><p class="tag">${esc(L.tagline)}</p></div>
    <p class="handle">@FreeLunchLab</p>
  </div>
</div>
</body></html>`;
}

// ---------- icons (64x64, stroked with the brand gradient) ----------
const ic = inner => `<svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="url(#grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const ICONS = {
  iris: ic(`<path d="M4 32 C14 16 50 16 60 32 C50 48 14 48 4 32 Z"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="4" fill="#FFD66B" stroke="none"/>`),
  face: ic(`<path d="M6 18 V10 a4 4 0 0 1 4 -4 H18 M46 6 H54 a4 4 0 0 1 4 4 V18 M58 46 V54 a4 4 0 0 1 -4 4 H46 M18 58 H10 a4 4 0 0 1 -4 -4 V46"/><circle cx="24" cy="27" r="2.5" fill="#FFD66B" stroke="none"/><circle cx="40" cy="27" r="2.5" fill="#B5E58E" stroke="none"/><path d="M23 40 C28 45 36 45 41 40"/>`),
  passport: ic(`<rect x="10" y="6" width="32" height="46" rx="4"/><circle cx="26" cy="24" r="7"/><path d="M18 40 H34"/><path d="M48 24 a10 10 0 0 1 0 14 M54 19 a17 17 0 0 1 0 24" /><path d="M14 58 H38" opacity=".55"/>`),
  trust: ic(`<path d="M32 14 L14 34 M32 14 L50 34 M14 34 L32 52 M50 34 L32 52 M14 34 H50"/><circle cx="32" cy="12" r="6" fill="#141A3A"/><circle cx="12" cy="34" r="6" fill="#141A3A"/><circle cx="52" cy="34" r="6" fill="#141A3A"/><circle cx="32" cy="54" r="6" fill="#141A3A"/>`),
  puzzle: ic(`<path d="M6 26 H16 a6 6 0 1 1 12 0 H38 V36 a6 6 0 1 1 0 12 V58 H6 Z"/><circle cx="48" cy="16" r="12" fill="#141A3A"/><path d="M48 10 V16 L52 19"/>`),
};
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
};

// Screenshots go through the DevTools protocol, not `chrome --screenshot`: the one-shot CLI capture can fire before
// every raster tile is painted (it once left a white block over the footer). Here we fix the viewport, wait for
// load + document.fonts.ready + two animation frames, check that nothing overflows, then capture with an explicit clip.
const { spawn } = require('child_process');
async function launch() {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ig-chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
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
  const send = (method, params = {}) => new Promise((ok, ng) => { pending.set(++id, [ok, ng]); ws.send(JSON.stringify({ id, method, params })); });
  const once = method => new Promise(ok => waiters.push({ method, ok }));
  const close = async () => {
    ws.close();
    await new Promise(ok => { proc.once('exit', ok); proc.kill(); });
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  };
  return { send, once, close };
}

async function shot(cdp, name, html) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ig-'));
  const f = path.join(tmp, `${name}.html`);
  fs.writeFileSync(f, html);
  if (process.env.KEEP_HTML) fs.writeFileSync(path.join(DIR, `${name}.html`), html);
  const out = path.join(DIR, `${name}.png`);
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const loaded = cdp.once('Page.loadEventFired');
  await cdp.send('Page.navigate', { url: `file://${f}` });
  await loaded;
  const { result } = await cdp.send('Runtime.evaluate', {
    awaitPromise: true, returnByValue: true,
    expression: `document.fonts.ready.then(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => {
      const over = [...document.querySelectorAll('.page *')].filter(e => { const b = e.getBoundingClientRect(); return b.width && (b.right > ${W} + .5 || b.bottom > ${H} + .5); }).map(e => e.className || e.tagName);
      r({ fonts: [...document.fonts].filter(x => x.status !== 'loaded' && x.status !== 'unloaded').length, over, w: innerWidth, h: innerHeight });
    }))))`,
  });
  const v = result.value;
  if (v.w !== W || v.h !== H) throw new Error(`${name}: viewport ${v.w}x${v.h}, expected ${W}x${H}`);
  if (v.fonts) throw new Error(`${name}: ${v.fonts} font(s) failed to load`);
  if (v.over.length) throw new Error(`${name}: overflows the ${W}x${H} frame: ${[...new Set(v.over)].join(', ')}`);
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
  fs.writeFileSync(out, Buffer.from(data, 'base64'));
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(out);
}

(async () => {
  const names = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(GRAPHICS);
  for (const name of names) if (!GRAPHICS[name]) throw new Error(`unknown infographic: ${name}`);
  const cdp = await launch();
  try {
    await cdp.send('Page.enable');
    for (const name of names) for (const lang of ['ja', 'en']) await shot(cdp, `${name}-${lang}`, frame(lang, GRAPHICS[name](lang)));
  } finally { await cdp.close(); }
})().catch(e => { console.error(e); process.exit(1); });
