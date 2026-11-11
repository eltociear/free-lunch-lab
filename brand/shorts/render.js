// Usage: node brand/shorts/render.js [map-ja|map-en|takenaka-ja ...] [--still SECONDS] [--no-video]
//   -> brand/shorts/out/short-{name}.mp4 (1080x1920, 30fps, H.264 yuv420p, faststart, no audio)
//      and brand/shorts/out/short-{name}-cover.png
//   --still 9.3   only writes out/short-{name}-at-9.3.png (for checking a layout)
// Vertical short videos for TikTok / YouTube Shorts / Instagram Reels. Not part of the site (outside public/).
// Each video is an HTML page (map.html, takenaka.html) with a deterministic timeline: window.setT(seconds) draws the
// frame for that moment, so nothing depends on wall-clock time. This script fills the page with numbers from the repo
// (src/map.js + src/calc-world.js for the map, the takenaka-70000-yen-basic-income essay table for the households),
// inlines subset Google Fonts (Dela Gothic One, Zen Kaku Gothic New), drives headless Chrome over CDP frame by frame
// and pipes PNGs into ffmpeg. Every frame sample is checked: text must stay inside the platform safe zone
// (top 220px, bottom 380px and right 160px are covered by app UI) and must not overflow its box.
// Chrome path: env CHROME. Temp files: env SHORTS_TMP (default: os.tmpdir()/freelunch-shorts).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync, spawn } = require('child_process');

const ROOT = path.join(__dirname, '../..');
const OUT = path.join(__dirname, 'out');
const TMP = process.env.SHORTS_TMP || path.join(os.tmpdir(), 'freelunch-shorts');
const CHROME = process.env.CHROME || '/Users/ikkoashimine/Library/Caches/ms-playwright/chromium-1248/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const FPS = 30, W = 1080, H = 1920;
const SAFE = { left: 56, right: W - 160, top: 220, bottom: H - 380 };
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const curl = (url, enc) => execFileSync('curl', ['-sfL', '--retry', '5', '--retry-delay', '1', '--retry-all-errors', '-A', UA, url], { encoding: enc, maxBuffer: 64 << 20 });
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Same approach as og.js / brand/x: subset Google Fonts to the exact characters and inline them as data: URIs
const FONTS = 'family=Dela+Gothic+One&family=Zen+Kaku+Gothic+New:wght@500;700;900';
function inlineFonts(text) {
  const chars = [...new Set(text)].filter(c => c.codePointAt(0) > 31).join('');
  const css = curl(`https://fonts.googleapis.com/css2?${FONTS}&text=${encodeURIComponent(chars)}&display=block`, 'utf8');
  const urls = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"\s]+/g) || [])];
  if (!urls.length) throw new Error('no font urls');
  let out = css;
  for (const u of urls) out = out.split(u).join(`data:font/woff2;base64,${curl(u).toString('base64')}`);
  return out;
}

// ---------- data ----------
const { ESSAYS, CALC, T } = require(path.join(ROOT, 'src/data.js'));
const mapJs = require(path.join(ROOT, 'src/map.js'));
const essayText = (id, lang) => JSON.stringify(ESSAYS.find(e => e.id === id).blocks[lang]);
// fail if a number shown on screen is not written in the essay the video is based on
const mustSay = (id, lang, s) => { if (!essayText(id, lang).includes(s)) throw new Error(`"${s}" is not in essay ${id} (${lang})`); return s; };

function mapData(lang) {
  const ja = lang === 'ja';
  const L = T[lang];
  const rows = mapJs.rows(require(path.join(ROOT, 'src/calc-world.js')).world(CALC));
  const counts = mapJs.counts(rows);
  const by = Object.fromEntries(rows.map(r => [r.id, r]));
  const bin = id => (by[id] ? by[id].bin : mapJs.NONE);
  const shape = (s, cls) => `<path${cls ? ` class="${cls}"` : ''} data-id="${s.id}" d="${s.d}"/>`;
  const dot = (d, cls) => `<circle${cls ? ` class="${cls}"` : ''} data-id="${d.id}" cx="${d.x}" cy="${d.y}" r="3"/>`;
  const M = mapJs.MAP;
  const svg = `<svg id="map" viewBox="0 0 ${M.width} ${M.height}" width="1080" height="480" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
<defs><pattern id="wmHatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><rect width="5" height="5" style="fill:var(--wm-none)"/><rect width="1.6" height="5" style="fill:var(--wm-hatch)"/></pattern></defs>
<g id="base">${M.shapes.map(s => shape(s)).join('')}${M.dots.map(d => dot(d)).join('')}</g>
<g id="top">${M.shapes.map(s => shape(s, 'b' + bin(s.id))).join('')}${M.dots.map(d => dot(d, 'b' + bin(d.id))).join('')}</g>
<circle id="ring" cx="0" cy="0" r="10"/></svg>`;
  const pct = r => {
    const p = r.tax * 100;
    return (p < 100 ? p.toFixed(1) : String(Math.round(p))) + (ja ? '％' : '%');
  };
  const zoom = { jp: 250, us: 430, in: 330, ae: 190 };
  const callouts = ['jp', 'us', 'in', 'ae'].map(id => {
    const r = by[id];
    const p = mustSay('basic-income-world-map', lang, pct(r).replace('％', ja ? '％' : '%'));
    return { id, name: r.c.name[lang], pct: p, over: r.tax > 1, color: mapJs.BINS[r.bin].dark, zoom: zoom[id] };
  });
  // band counts must match the essay's table (the build warns if they drift; here it would be a wrong video)
  const table = ESSAYS.find(e => e.id === 'basic-income-world-map').blocks[lang].find(b => b[0] === 't')[1];
  const essayCounts = table.split('\n').slice(1).map(l => Number(l.split(' | ')[1]));
  if (essayCounts.join() !== counts.join()) throw new Error(`band counts ${counts} differ from the essay ${essayCounts}`);
  const labels = counts.map((_, i) => (i === 5 && ja ? 'データなし' : L['mapBin' + i].replace(/\s*[（(].*$/, '')));
  return {
    file: 'map.html',
    duration: 22,
    cover: 9.4,
    data: {
      lang,
      svg,
      css: mapJs.CSS,
      hl: ja ? ['明日から', '<em>ベーシックインカム</em>を', '払える国はどこ？'] : ['Which countries', 'could afford a', '<em>basic income</em>', 'tomorrow?'],
      sub: ja ? '全員に1日3ドル（世界銀行の貧困ライン）を1年配る費用は、税収の何％？' : '$3 a day for everyone (the World Bank poverty line) for a year: what share of tax revenue?',
      legendH: L.mapLegendH,
      bands: counts.map((n, i) => ({ n, label: labels[i] })),
      callouts,
      pre: ja ? '税収の' : '',
      post: ja ? '' : 'of tax revenue',
      overNote: ja ? '税収をすべて使っても足りない' : 'more than all its tax revenue',
      src: ja ? '出典: 世界銀行 / Free Lunch Lab' : 'Source: World Bank / Free Lunch Lab',
      end: ja
        ? { q: 'あなたの国は？', n: `${rows.length}の国・地域を計算できます`, cta: 'プロフィールのリンクから<br>自分の国を計算', brand: esc(L.brandPlain), tag: esc(L.tagline) }
        : { q: 'What about your country?', n: `${rows.length} countries and territories`, cta: 'Link in profile:<br>check your country', brand: 'Free <em>Lunch</em> Lab', tag: esc(L.tagline) },
      url: 'neteru-nyukin.eltociear.workers.dev',
    },
  };
}

function takenakaData() {
  const ID = 'takenaka-70000-yen-basic-income';
  const blocks = ESSAYS.find(e => e.id === ID).blocks.ja;
  const table = blocks.find(b => b[0] === 't' && b[1].startsWith('家計 |'))[1];
  // 家計 | いまの給付 | BI | 差し引き  (月額、増税の前)
  const homes = table.split('\n').slice(1).map(line => {
    const [label, now, bi, diff] = line.split(' | ');
    const m = diff.match(/^(.*?)（(.*)）$/);
    const value = m ? m[1] : diff, note = m ? m[2] : '';
    const parts = value.split('〜');
    const sign = s => (s.startsWith('＋') ? 'pos' : s.startsWith('−') ? 'neg' : 'zero');
    // split the label into two lines at "・" or before "（"
    const lab = label.includes('・') ? label.split('・') : label.includes('（') ? [label.replace(/（.*$/, ''), label.replace(/^[^（]*/, '')] : [label];
    return { lab, now, bi, parts: parts.map((p, i) => ({ s: (i ? '〜 ' : '') + p, c: sign(p) })), note };
  });
  if (homes.length !== 5) throw new Error('expected 5 households');
  const say = s => mustSay(ID, 'ja', s);
  return {
    file: 'takenaka.html',
    duration: 24.5,
    cover: 1.6,
    data: {
      homes,
      hook: { sub: '竹中平蔵氏の案（2020年）を<br>5つの家計で計算' },
      premise: {
        a: '全員に', b: `月${say('7万円')}`,
        lines: ['子どもも同じ額', '年金・生活保護・高所得者の返納を<br>どう扱うかで結果が変わる'],
        note: '月額・増税の前・2026年度の制度',
      },
      sum: {
        good: '得をしやすい', goodT: say('子どもがいて、いまの給付が少ない世帯').replace('、', '、<br>'),
        bad: '損をしうる', badT: ['年金や生活保護に頼っている人', '返納や増税の対象になる高所得の世帯'].map(say).map(s => s.replace('になる', 'になる<br>')),
      },
      cost: { a: '全員に配ると1年で', b: say('約103.2兆円'), c: `国の一般会計の${say('約84％')}`, d: `年金をすべて回しても<br>${say('約40兆円足りません').replace('ません', 'ない')}` },
      end: { q: 'わが家は得？損？', cta: '前提と計算のくわしい内容は<br>プロフィールのリンクから', brand: esc(T.ja.brandPlain), tag: esc(T.ja.tagline) },
      src: ['出典: 日本年金機構・厚生労働省ほか', '計算: Free Lunch Lab'],
      url: 'neteru-nyukin.eltociear.workers.dev',
    },
  };
}

const VIDEOS = {
  'map-ja': () => mapData('ja'),
  'map-en': () => mapData('en'),
  'takenaka-ja': takenakaData,
};

// Bento mark (same drawing as brand/x)
const BENTO = `<svg class="bento" width="96" height="67" viewBox="-8 -8 256 184"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#6CF0B0"/></linearGradient><clipPath id="bc"><rect x="0" y="0" width="240" height="168" rx="26"/></clipPath></defs>
<rect x="0" y="0" width="240" height="168" rx="26" fill="#141A3A"/><g clip-path="url(#bc)"><rect x="0" y="0" width="128" height="168" fill="#F6F2E6"/><circle cx="64" cy="84" r="17" fill="#E8505B"/><rect x="128" y="0" width="112" height="84" fill="#FFD66B"/><rect x="128" y="40" width="112" height="6" fill="#F0B93A"/><rect x="128" y="84" width="112" height="84" fill="#1B6B52"/><circle cx="160" cy="124" r="20" fill="#6CF0B0"/><circle cx="200" cy="118" r="16" fill="#3FCF92"/><circle cx="190" cy="148" r="13" fill="#9BF5CB"/></g>
<line x1="128" y1="6" x2="128" y2="162" stroke="#141A3A" stroke-width="9"/><line x1="132" y1="84" x2="234" y2="84" stroke="#141A3A" stroke-width="9"/><rect x="0" y="0" width="240" height="168" rx="26" fill="none" stroke="url(#grad)" stroke-width="12"/></svg>`;

function buildPage(name) {
  const v = VIDEOS[name]();
  const tpl = fs.readFileSync(path.join(__dirname, v.file), 'utf8');
  const json = JSON.stringify(v.data);
  const text = tpl + JSON.stringify({ ...v.data, svg: '' }) + '0123456789';
  const html = tpl
    .replace('/*FONTS*/', () => inlineFonts(text))
    .replace('<!--BENTO-->', () => BENTO)
    .replace('/*DATA*/', () => `window.DATA=${json.replace(/</g, '\\u003c')};`);
  fs.mkdirSync(TMP, { recursive: true });
  const file = path.join(TMP, `${name}.html`);
  fs.writeFileSync(file, html);
  return { v, file };
}

// ---------- minimal CDP client ----------
async function launch() {
  const port = 9400 + Math.floor(Math.random() * 500);
  const profile = fs.mkdtempSync(path.join(TMP, 'chrome-'));
  const proc = spawn(CHROME, ['--headless=new', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    `--window-size=${W},${H}`, '--force-device-scale-factor=1', '--no-first-run', '--no-default-browser-check', '--mute-audio',
    '--force-color-profile=srgb', 'about:blank'], { stdio: 'ignore' });
  let target;
  for (let i = 0; i < 100 && !target; i++) {
    await new Promise(r => setTimeout(r, 150));
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page'); } catch {}
  }
  if (!target) throw new Error('chrome did not start');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0;
  const pending = new Map(), listeners = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const { res, rej } = pending.get(m.id); pending.delete(m.id); m.error ? rej(new Error(m.error.message)) : res(m.result); }
    else if (m.method) listeners.forEach(l => l(m));
  };
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const once = method => new Promise(res => { const l = m => { if (m.method === method) { listeners.splice(listeners.indexOf(l), 1); res(m.params); } }; listeners.push(l); });
  const close = () => { try { ws.close(); } catch {} proc.kill(); setTimeout(() => fs.rmSync(profile, { recursive: true, force: true }), 500); };
  return { send, once, close };
}

async function evaluate(cdp, expr) {
  const r = await cdp.send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception ? r.exceptionDetails.exception.description : r.exceptionDetails.text);
  return r.result.value;
}
const frameAt = (cdp, t) => evaluate(cdp, `(window.setT(${t}), new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => r(1)))))`);
const shot = async cdp => Buffer.from((await cdp.send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: W, height: H, scale: 1 } })).data, 'base64');

async function render(name, { still = null, video = true } = {}) {
  const { v, file } = buildPage(name);
  const cdp = await launch();
  try {
    await cdp.send('Page.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
    const loaded = cdp.once('Page.loadEventFired');
    await cdp.send('Page.navigate', { url: 'file://' + file });
    await loaded;
    await evaluate(cdp, 'document.fonts.ready.then(() => window.init())');
    fs.mkdirSync(OUT, { recursive: true });
    // layout check at every 1/4 second
    const problems = [];
    for (let t = 0; t <= v.duration + 1e-9; t += 0.25) {
      await frameAt(cdp, t);
      const p = await evaluate(cdp, `window.audit(${JSON.stringify(SAFE)})`);
      p.forEach(x => problems.push(`t=${t.toFixed(2)} ${x}`));
    }
    if (problems.length) {
      console.error(problems.slice(0, 40).join('\n'));
      if (!process.env.ALLOW_OVERFLOW) throw new Error(`${name}: ${problems.length} layout problems`);
    }
    if (still != null) {
      await frameAt(cdp, still);
      const f = path.join(OUT, `short-${name}-at-${still}.png`);
      fs.writeFileSync(f, await shot(cdp));
      console.log('wrote', f);
      return;
    }
    await frameAt(cdp, v.cover);
    fs.writeFileSync(path.join(OUT, `short-${name}-cover.png`), await shot(cdp));
    if (!video) return;
    const mp4 = path.join(OUT, `short-${name}.mp4`);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-profile:v', 'high', '-level', '4.1', '-pix_fmt', 'yuv420p',
      '-r', String(FPS), '-movflags', '+faststart', '-an', mp4], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((res, rej) => ff.on('close', c => (c ? rej(new Error('ffmpeg exit ' + c)) : res())));
    const n = Math.round(v.duration * FPS);
    for (let i = 0; i < n; i++) {
      await frameAt(cdp, i / FPS);
      const buf = await shot(cdp);
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 90 === 0) process.stdout.write(`${name} ${i}/${n}\r`);
    }
    ff.stdin.end();
    await done;
    console.log(`wrote ${mp4} (${n} frames, ${v.duration}s)`);
  } finally {
    cdp.close();
  }
}

(async () => {
  const args = process.argv.slice(2);
  const si = args.indexOf('--still');
  const still = si >= 0 ? Number(args.splice(si, 2)[1]) : null;
  const video = !args.includes('--no-video');
  const names = args.filter(a => !a.startsWith('--'));
  for (const n of names.length ? names : Object.keys(VIDEOS)) {
    if (!VIDEOS[n]) throw new Error('unknown video: ' + n);
    await render(n, { still, video });
  }
})().catch(e => { console.error(e); process.exit(1); });
