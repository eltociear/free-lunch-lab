// 使い方: node og.js  →  SNS 用の画像（1200x630）とアイコンを Chrome で作る。サービスや見出しを変えたら作り直す
//   src/og/{lang}.png              言語ごとのトップページ
//   src/og/svc/{lang}/{id}.jpg     サービスの個別ページ（名前・もらえるもの・目安）
//   src/og/essay/{lang}/{id}.jpg   エッセイ（題・要約）
//   src/static/apple-touch-icon.png, favicon.ico, favicon-32.png   src/static/favicon.svg から
// 中身（HTML とフォント）が前回と同じ画像は作り直さない（src/og/manifest.json に指紋を記録）。全部作り直すときは OG_FORCE=1
// Chrome の場所は環境変数 CHROME で変えられる
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const crypto = require('crypto');
const { LANGS, SERVICES, T, CATS, ESSAYS } = require('./src/data.js');

const CHROME = process.env.CHROME || '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';
const OUT = path.join(__dirname, 'src/og');
const FONTS = {
  ja: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  en: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  es: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  de: 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@700',
  zh: 'family=Noto+Sans+SC:wght@700;900',
  hi: 'family=Noto+Sans+Devanagari:wght@700',
  ar: 'family=Noto+Kufi+Arabic:wght@700&family=Noto+Sans+Arabic:wght@700',
};
const FACE = {
  ja: '"Dela Gothic One"', en: '"Dela Gothic One"', es: '"Dela Gothic One"', de: '"Dela Gothic One"',
  zh: '"Noto Sans SC"', hi: '"Noto Sans Devanagari"', ar: '"Noto Kufi Arabic"',
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const live = SERVICES.filter(s => s.ref || s.noRef);

// フォントは画面に出る文字だけのサブセット（Google Fonts の text=）を先に取ってきて data: URI で埋め込む。
// ヘッドレス Chrome でリモートのフォントを読ませると、読み込みが間に合わず代わりのフォントで撮れてしまうことがあるため
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const curl = (url, enc) => execFileSync('curl', ['-sfL', '--retry', '3', '-A', UA, url], { encoding: enc, maxBuffer: 64 << 20 });
const GBREVE = 'https://fonts.gstatic.com/l/font?kit=o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc1azXvFujBSg6T775xg&skey=2b960fe17823056f&v=v42';
const dataUri = url => `data:font/woff2;base64,${curl(url).toString('base64')}`;
function inlineFonts(lang, text) {
  const chars = [...new Set(text)].join('');
  const css = curl(`https://fonts.googleapis.com/css2?${FONTS[lang]}&text=${encodeURIComponent(chars)}&display=block`, 'utf8');
  const urls = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"\s]+/g) || [])];
  if (!urls.length) throw new Error(`no font urls for ${lang}`);
  let out = css;
  for (const u of urls) out = out.split(u).join(dataUri(u));
  return out + `\n@font-face{font-family:"GBreve";src:url(${dataUri(GBREVE)}) format("woff2");unicode-range:U+011E;font-display:block}`;
}

function page(lang, withFonts = true) {
  const L = T[lang];
  const rtl = lang === 'ar';
  const chips = live.map(s => `<span>${esc(lang === 'ja' ? s.name : s.nameEn || s.name)}</span>`).join('');
  return `<!doctype html><html lang="${lang}"${rtl ? ' dir="rtl"' : ''}><head><meta charset="utf-8">
<style>
${(withFonts ? inlineFonts : (l, t) => `/* fonts ${FONTS[l]} ${t} */`)(lang, [L.brandPlain, L.tagline, L.h1.replace(/<[^>]+>/g, ''), chips.replace(/<[^>]+>/g, ''), ' ·zZ'].join(''))}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;display:flex;flex-direction:column;padding-bottom:${live.length > 16 ? 44 : 56}px!important;color:#EEF1FF;font-family:${FACE[lang]},sans-serif;position:relative;padding:64px 72px;
  background:radial-gradient(70% 90% at 88% 0%,#3B2A86 0%,transparent 60%),radial-gradient(60% 70% at 0% 100%,#0F3B5C 0%,transparent 60%),linear-gradient(180deg,#0A0F24,#121741)}
body::before{content:"";position:absolute;inset:0;background-image:radial-gradient(2px 2px at 30px 40px,#fff 50%,transparent 51%),radial-gradient(1.5px 1.5px at 150px 110px,#fff 50%,transparent 51%),radial-gradient(2px 2px at 260px 30px,#fff7d6 50%,transparent 51%),radial-gradient(1.5px 1.5px at 90px 200px,#cfd6ff 50%,transparent 51%);background-size:320px 240px;opacity:.8}
.moon{position:absolute;top:52px;${rtl ? 'left' : 'right'}:80px;width:190px;height:190px;border-radius:50%;box-shadow:inset -40px 22px 0 0 #FFE7A3;transform:rotate(-12deg);filter:drop-shadow(0 0 40px rgba(255,214,107,.5))}
.z{position:absolute;top:255px;${rtl ? 'left' : 'right'}:110px;font-family:"Dela Gothic One",sans-serif;color:#CFD6FF;font-size:44px;opacity:.85}
.z small{font-size:28px}
.brandname{color:#FFD66B}
.eyebrow{position:relative;max-width:820px;font-family:"Zen Kaku Gothic New",${FACE[lang]},sans-serif;font-weight:700;font-size:24px;color:#A9B2D8;letter-spacing:.04em}
h1{position:relative;font-weight:${/^(ja|en|es|de)$/.test(lang) ? 400 : 900};font-size:${lang === 'ja' ? 84 : lang === 'en' || lang === 'es' ? 76 : lang === 'de' ? 66 : rtl && live.length > 16 ? 60 : 70}px;line-height:${rtl || lang === 'hi' ? 1.4 : 1.15};margin-top:18px;max-width:${lang === 'ja' ? 820 : 900}px;text-shadow:0 6px 40px rgba(120,100,255,.4)}
h1 em{font-style:normal;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
.chips{position:relative;margin-top:auto;padding-top:16px;display:flex;flex-wrap:wrap;gap:${live.length > 22 ? 6 : live.length > 16 ? 8 : 10}px}
.chips span{font-family:"GBreve","Zen Kaku Gothic New","Noto Sans SC","Noto Sans Arabic",sans-serif;font-weight:700;font-size:${live.length > 22 ? 17 : live.length > 16 ? 19 : 22}px;color:#141A3A;background:#FFD66B;padding:${live.length > 22 ? '4px 12px' : live.length > 16 ? '5px 14px' : '6px 18px'};border-radius:999px}
</style></head><body>
<div class="moon"></div><div class="z"><small>z</small>Z</div>
<p class="eyebrow"><b class="brandname">${esc(L.brandPlain)}</b> · ${esc(L.tagline)}</p>
<h1>${L.h1}</h1>
<div class="chips">${chips}</div>
</body></html>`;
}

// ---- 指紋（同じなら作り直さない）
const MANIFEST = path.join(OUT, 'manifest.json');
let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8')); } catch {}
const FORCE = !!process.env.OG_FORCE;
const hash = s => crypto.createHash('sha1').update(s).digest('hex').slice(0, 16);
const fresh = (rel, key) => !FORCE && manifest[rel] === key && fs.existsSync(path.join(OUT, rel));

// ---- 個別ページ用: サイトと同じ自前のサブセット（src/fonts）を data: URI で埋め込む
const FDIR = path.join(__dirname, 'src/fonts');
const FMAN = JSON.parse(fs.readFileSync(path.join(FDIR, 'fonts.json'), 'utf8')).faces;
const BODY = { en: 'Zen Kaku Gothic New', ja: 'Zen Kaku Gothic New', es: 'Zen Kaku Gothic New', de: 'Zen Kaku Gothic New', zh: 'Noto Sans SC', hi: 'Noto Sans Devanagari', ar: 'Noto Sans Arabic' };
const DISP = { en: ['Dela Gothic One', 400], ja: ['Dela Gothic One', 400], es: ['Dela Gothic One', 400], de: ['Dela Gothic One', 400], zh: ['Noto Sans SC', 900], hi: ['Noto Sans Devanagari', 700], ar: ['Noto Kufi Arabic', 700] };
const b64 = f => fs.readFileSync(path.join(FDIR, f)).toString('base64');
function siteFonts(lang) {
  const face = (key, fam, w) => (FMAN[key] || []).map(c => `@font-face{font-family:"${fam}";font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${b64(c.file)}) format("woff2");unicode-range:${unicodeRange([...c.chars])}}`).join('\n');
  const [df, dw] = DISP[lang];
  return [
    face(`${lang}:body:700`, BODY[lang], 700),
    lang === 'hi' ? '' : face(`${lang}:display`, df, dw),
    face(`${lang}:dot`, 'DotGothic16', 400),
    face('logo', 'FLL Logo', 900),
    face(`${lang}:ava`, 'Dela Gothic One', 400),
  ].join('\n');
}
const { unicodeRange } = require('./fonts.js');
const CAT_COLOR = { 'crypto-bi': '#9B82FF', 'ai-agent': '#22B8CF', app: '#3FCF92', pointsite: '#F59A3C', career: '#EE6A93', exchange: '#5B97F0', finance: '#2BC0C0' };
const SKY = `background:radial-gradient(70% 90% at 88% 0%,#3B2A86 0%,transparent 60%),radial-gradient(60% 70% at 0% 100%,#0F3B5C 0%,transparent 60%),linear-gradient(180deg,#0A0F24,#121741)`;
function frame(lang, cls, inner) {
  const L = T[lang];
  const rtl = lang === 'ar';
  const [df, dw] = DISP[lang];
  const dot = lang === 'ja' || lang === 'en';
  return `<!doctype html><html lang="${lang}"${rtl ? ' dir="rtl"' : ''}><head><meta charset="utf-8"><style>
${siteFonts(lang)}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:56px 72px 52px;color:#EEF1FF;font-family:"${BODY[lang]}",sans-serif;font-weight:700;${SKY}}
body::before{content:"";position:absolute;inset:0;background-image:radial-gradient(2px 2px at 30px 40px,#fff 50%,transparent 51%),radial-gradient(1.5px 1.5px at 150px 110px,#fff 50%,transparent 51%),radial-gradient(2px 2px at 260px 30px,#fff7d6 50%,transparent 51%),radial-gradient(1.5px 1.5px at 90px 200px,#cfd6ff 50%,transparent 51%);background-size:320px 240px;opacity:.75}
.moon{position:absolute;top:46px;${rtl ? 'left' : 'right'}:70px;width:150px;height:150px;border-radius:50%;box-shadow:inset -32px 18px 0 0 #FFE7A3;transform:rotate(-12deg);filter:drop-shadow(0 0 36px rgba(255,214,107,.5));opacity:.95}
.top{position:relative;display:flex;align-items:center;gap:14px;font-size:26px;color:#A9B2D8;max-width:860px}
.top b{font-family:"FLL Logo","${BODY[lang]}",sans-serif;font-weight:900;color:#FFD66B;font-size:30px}
.mid{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;padding-block:16px;overflow:hidden;max-width:${cls === 'essay' ? 1050 : 960}px;min-height:0}
.cat{align-self:flex-start;font-size:26px;color:var(--c);border:2px solid var(--c);border-radius:999px;padding:2px 18px}
h1{font-family:"${df}","${BODY[lang]}",sans-serif;font-weight:${dw};line-height:1.18;color:#fff;text-shadow:0 6px 40px rgba(120,100,255,.4);word-break:auto-phrase;text-wrap:balance}
h1 small{display:block;font-family:"${BODY[lang]}",sans-serif;font-weight:700;font-size:.42em;color:#A9B2D8;margin-top:6px;text-shadow:none}
.lbl{font-size:24px;color:#A9B2D8;letter-spacing:.06em}
.gain{font-family:${dot ? '"DotGothic16",' : ''}"${BODY[lang]}",sans-serif;font-weight:${dot ? 400 : 700};line-height:1.3;background:linear-gradient(100deg,#FFD66B 10%,#6CF0B0 90%);-webkit-background-clip:text;background-clip:text;color:transparent;word-break:auto-phrase;text-wrap:balance}
.desc{font-size:30px;line-height:1.6;color:#C9D0EE;font-weight:400;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}
.chips{position:relative;display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.chips span{font-size:22px;padding:5px 16px;border-radius:999px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.22);color:#EEF1FF}
.chips .risk{background:#FF6E61;border-color:#FF6E61;color:#2A0B07}
.chips .loop{background:#173328;border-color:#5FD3A0;color:#6CF0B0}
.chips .meter i{display:inline-block;width:14px;height:14px;border-radius:3px;margin-inline-start:4px;background:rgba(255,255,255,.18)}
.chips .meter i.on{background:#6CF0B0}
.chips .site{margin-inline-start:auto;background:none;border:0;color:#A9B2D8;font-size:22px;padding:0}
</style></head><body class="${cls}"><div class="moon"></div>
<p class="top"><b>${esc(L.brandPlain)}</b><span>${esc(L.tagline)}</span></p>
${inner}
<script>
// 長い文字は枠に収まるまで小さくする
const fits = [...document.querySelectorAll('[data-fit]')];
for (const el of fits) { const [max, min, h] = el.dataset.fit.split(',').map(Number); let size = max; el.style.fontSize = size + 'px'; while ((el.scrollHeight > h || el.scrollWidth > el.clientWidth + 1) && size > min) { size -= 2; el.style.fontSize = size + 'px'; } }
// 全体が下の目安の行にかぶるなら、見出しと本文を交互に少しずつ小さくする
const mid = document.querySelector('.mid');
for (let i = 0; i < 40 && mid.scrollHeight > mid.clientHeight + 1; i++) { const el = fits[i % fits.length]; const size = parseFloat(el.style.fontSize); if (size > 24) el.style.fontSize = (size - 2) + 'px'; }
</script></body></html>`;
}
const sName = (s, l) => (l === 'ja' ? s.name : s.nameEn || s.name);
function nameParts(name) { const m = name.match(/^(.+?)(?:（(.+)）| \((.+)\))$/); return m ? [m[1], m[2] || m[3]] : [name, '']; }
function svcHtml(s, lang) {
  const L = T[lang], d = s[lang] || s.en;
  const [nm, q] = nameParts(sName(s, lang));
  const meter = Array.from({ length: 5 }, (_, i) => `<i${i < s.ease ? ' class="on"' : ''}></i>`).join('');
  const region = s.onlyIn ? L['only_' + s.onlyIn] : s.global ? L.global : L.jp;
  const chips = [d.warning ? `<span class="risk">${esc(L.riskBadge)}</span>` : '', `<span class="${s.type === 'loop' ? 'loop' : ''}">${esc(s.type === 'loop' ? L.tagLoop : L.tagOnce)}</span>`, `<span class="meter">${esc(L.ease)}${meter}</span>`, `<span>${esc(region)}</span>`].join('');
  return frame(lang, 'svc', `<div class="mid" style="--c:${CAT_COLOR[s.cat] || '#93A8FF'}">
<p class="cat">${esc(CATS[lang][s.cat])}</p>
<h1 data-fit="92,48,230"><bdi>${esc(nm)}</bdi>${q ? `<small><bdi>${esc(q)}</bdi></small>` : ''}</h1>
<p class="lbl">${esc(L.hGain)}</p>
<p class="gain" data-fit="54,28,150">${esc(d.gain)}</p>
</div>
<div class="chips">${chips}</div>`);
}
function essayHtml(e, lang) {
  const L = T[lang];
  return frame(lang, 'essay', `<div class="mid">
<p class="cat" style="--c:#FFD66B">${esc(L.ebEssay)}</p>
<h1 data-fit="72,40,250">${esc(e.title[lang] || e.title.en)}</h1>
<p class="desc">${esc(e.desc[lang] || e.desc.en)}</p>
</div>
<div class="chips"><span>${esc(L.essayBy)}</span></div>`);
}

// ---- Chrome（DevTools プロトコル）を1回だけ起動して全部撮る
async function launch() {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'og-prof-'));
  const { spawn } = require('child_process');
  const proc = spawn(CHROME, ['--headless=new', '--hide-scrollbars', '--disable-gpu', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  const wsUrl = await new Promise((ok, ng) => { let b = ''; const t = setTimeout(() => ng(new Error('Chrome did not start')), 30000); proc.stderr.on('data', d => { b += d; const m = b.match(/DevTools listening on (ws:\/\/\S+)/); if (m) { clearTimeout(t); ok(m[1]); } }); });
  const port = new URL(wsUrl).port;
  const target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, ng) => { ws.onopen = ok; ws.onerror = ng; });
  let id = 0; const pending = new Map(), waiters = [];
  ws.onmessage = ev => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { const [ok, ng] = pending.get(m.id); pending.delete(m.id); m.error ? ng(new Error(m.error.message)) : ok(m.result); } else if (m.method) for (const w of waiters.splice(0)) w.method === m.method ? w.ok(m.params) : waiters.push(w); };
  const send = (method, params = {}) => new Promise((ok, ng) => { pending.set(++id, [ok, ng]); ws.send(JSON.stringify({ id, method, params })); });
  const once = method => Promise.race([new Promise(ok => waiters.push({ method, ok })), new Promise((_, ng) => setTimeout(() => ng(new Error('timeout ' + method)), 60000))]);
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  return { send, once, close: () => { ws.close(); proc.kill(); try { fs.rmSync(profile, { recursive: true, force: true }); } catch {} } };
}
async function shoot(cdp, html, file, format) {
  const tmpFile = path.join(tmp, 'p.html');
  fs.writeFileSync(tmpFile, html);
  const loaded = cdp.once('Page.loadEventFired');
  await cdp.send('Page.navigate', { url: 'file://' + tmpFile });
  await loaded;
  const { result } = await cdp.send('Runtime.evaluate', { awaitPromise: true, returnByValue: true, expression: `document.fonts.ready.then(()=>[...document.fonts].filter(f=>f.status==='error').length)` });
  if (result.value) throw new Error(`${file}: ${result.value} font(s) failed`);
  const r = await cdp.send('Page.captureScreenshot', format === 'png' ? { format: 'png' } : { format: 'jpeg', quality: 82 });
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, Buffer.from(r.data, 'base64'));
}

// ---- アイコン: favicon.svg から apple-touch-icon（180px）と favicon.ico（32/16px の PNG 入り）
const STATIC = path.join(__dirname, 'src/static');
function ico(pngs) {
  const head = Buffer.alloc(6 + 16 * pngs.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4);
  let off = head.length;
  pngs.forEach(([size, buf], i) => {
    const o = 6 + 16 * i;
    head.writeUInt8(size, o); head.writeUInt8(size, o + 1); head.writeUInt8(0, o + 2); head.writeUInt8(0, o + 3);
    head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6); head.writeUInt32LE(buf.length, o + 8); head.writeUInt32LE(off, o + 12);
    off += buf.length;
  });
  return Buffer.concat([head, ...pngs.map(p => p[1])]);
}
async function icons(cdp) {
  const svg = fs.readFileSync(path.join(STATIC, 'favicon.svg'), 'utf8');
  const key = hash(svg);
  if (!FORCE && manifest['static/icons'] === key && fs.existsSync(path.join(STATIC, 'favicon.ico'))) return;
  const shot = async size => {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: size, height: size, deviceScaleFactor: 1, mobile: false });
    await cdp.send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
    const f = path.join(tmp, 'i.html');
    fs.writeFileSync(f, `<!doctype html><style>*{margin:0}html,body{width:${size}px;height:${size}px;overflow:hidden;background:transparent}img{display:block;width:${size}px;height:${size}px}</style><img src="data:image/svg+xml;base64,${Buffer.from(size >= 64 ? svg.replace(/rx="\d+"/, 'rx="0"') : svg).toString('base64')}">`);
    const loaded = cdp.once('Page.loadEventFired');
    await cdp.send('Page.navigate', { url: 'file://' + f });
    await loaded;
    const r = await cdp.send('Page.captureScreenshot', { format: 'png', omitBackground: true });
    return Buffer.from(r.data, 'base64');
  };
  const touch = await shot(180), p32 = await shot(32), p16 = await shot(16);
  fs.writeFileSync(path.join(STATIC, 'apple-touch-icon.png'), touch);
  fs.writeFileSync(path.join(STATIC, 'favicon-32.png'), p32);
  fs.writeFileSync(path.join(STATIC, 'favicon.ico'), ico([[32, p32], [16, p16]]));
  await cdp.send('Emulation.setDefaultBackgroundColorOverride', {});
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  manifest['static/icons'] = key;
  console.log('static/apple-touch-icon.png, favicon.ico, favicon-32.png');
}

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));
(async () => {
  const cdp = await launch();
  let made = 0, kept = 0;
  try {
    await icons(cdp);
    const ONLY = process.env.OG_LANGS ? process.env.OG_LANGS.split(',') : LANGS;
    for (const lang of ONLY) {
      // トップページ（Google Fonts のサブセットを埋め込む従来の画像）
      // 指紋はフォントを取りに行く前の HTML で取る（変わっていなければネットワークも使わない）
      const homeRel = `${lang}.png`, homeKey = hash(page(lang, false));
      if (fresh(homeRel, homeKey)) kept++; else { await shoot(cdp, page(lang), path.join(OUT, homeRel), 'png'); manifest[homeRel] = homeKey; made++; console.log('og/' + homeRel); }
      const jobs = [...live.map(s => [`svc/${lang}/${s.id}.jpg`, () => svcHtml(s, lang)]), ...ESSAYS.map(e => [`essay/${lang}/${e.id}.jpg`, () => essayHtml(e, lang)])];
      for (const [rel, mk] of jobs) {
        const html = mk(), key = hash(html);
        if (fresh(rel, key)) { kept++; continue; }
        await shoot(cdp, html, path.join(OUT, rel), 'jpeg');
        manifest[rel] = key; made++;
        if (made % 20 === 0) console.log(`... ${made} images`);
      }
      fs.writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.keys(manifest).sort().map(k => [k, manifest[k]])), null, 1) + '\n');
    }
    console.log(`og: ${made} made, ${kept} unchanged`);
  } finally {
    cdp.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
})().catch(e => { console.error(e); process.exit(1); });
