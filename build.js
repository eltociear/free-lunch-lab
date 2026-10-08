// 使い方: node build.js  →  public/ に en(/), ja(/ja/), hi(/hi/), sitemap.xml, robots.txt を生成
const fs = require('fs');
const path = require('path');
const { SITE_URL, LANGS, DEFAULT_LANG, SERVICES, PICKS, NEWS, CATS, T } = require('./src/data.js');

const OUT = path.join(__dirname, 'public');
const template = fs.readFileSync(path.join(__dirname, 'src/template.html'), 'utf8');
const LANG_NAMES = { en: 'EN', ja: '日本語', zh: '中文', hi: 'हिन्दी', es: 'Español', ar: 'العربية' };
const LANG_TAG = { en: 'en', ja: 'ja', zh: 'zh-Hans', hi: 'hi', es: 'es', ar: 'ar' }; // html lang / hreflang
const OG_LOCALE = { en: 'en_US', ja: 'ja_JP', zh: 'zh_CN', hi: 'hi_IN', es: 'es_ES', ar: 'ar_AR' };
const RTL = new Set(['ar']);
// 共通: 見出しの Dela Gothic One と数字の DotGothic16。本文フォントは言語ごと
const BASE_FONTS = 'family=Dela+Gothic+One&family=DotGothic16';
const LANG_FONTS = {
  en: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  ja: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  es: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  zh: 'family=Noto+Sans+SC:wght@400;500;700;900',
  hi: 'family=Noto+Sans+Devanagari:wght@400;500;700',
  ar: 'family=Noto+Kufi+Arabic:wght@700&family=Noto+Sans+Arabic:wght@400;500;700',
};
const fontsUrl = l => `https://fonts.googleapis.com/css2?${BASE_FONTS}&${LANG_FONTS[l]}&display=swap`;

const live = SERVICES.filter(s => s.ref); // 紹介リンクがあるものだけ表示
const urlPath = l => (l === DEFAULT_LANG ? '/' : `/${l}/`);
const abs = l => SITE_URL + urlPath(l);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function meter(n) {
  let h = '';
  for (let i = 0; i < 5; i++) h += i < n ? '<i class="on"></i>' : '<i></i>';
  return `<span class="meter" role="img" aria-label="${n}/5">${h}</span>`;
}

// 信頼の目安（換金・市場価格・運営元）。na は暗号資産でないので出さない
const SYM = { yes: '✓', partial: '△', no: '✗', unknown: '?' };
const TV = { yes: 'tYes', partial: 'tPartial', no: 'tNo', unknown: 'tUnknown' };
const colon = l => (l === 'ja' || l === 'zh' ? '：' : ': ');
function trust(s, lang) {
  if (!s.trust) return '';
  const L = T[lang];
  const items = [['cash', 'trustCash'], ['price', 'trustPrice'], ['operator', 'trustOp']]
    .filter(([k]) => s.trust[k] && s.trust[k] !== 'na')
    .map(([k, t]) => {
      const v = s.trust[k], mean = L[t + 'D'] + colon(lang) + L[TV[v]];
      return `<li class="t-${v}" title="${esc(mean)}"><span aria-hidden="true">${esc(L[t])}</span><b aria-hidden="true">${SYM[v]}</b><span class="vh">${esc(mean)}</span></li>`;
    });
  return `<ul class="trust" aria-label="${esc(L.trustLabel)}">${items.join('')}</ul>`;
}
function trustLegend(lang) {
  const L = T[lang];
  return `<span class="tr-leg"><span>${esc(L.trustLabel)}</span>${Object.keys(SYM).map(v => `<span><b class="t-${v}">${SYM[v]}</b> ${esc(L[TV[v]])}</span>`).join('')}</span>`;
}

// 追加から14日以内なら NEW
const NEW_MS = 14 * 864e5;
const isNew = s => s.added && Date.now() - Date.parse(s.added) < NEW_MS;

function card(s, lang) {
  const L = T[lang];
  const d = s[lang] || s.en;
  const name = lang === 'ja' ? s.name : s.nameEn || s.name;
  const has = !!s.code; // 紹介リンクがあるものはコード欄・コピーボタンを出さない
  return `<article class="svc" id="svc-${s.id}" data-cat="${s.cat}" data-type="${s.type}">
<div class="svc-top"><h3><span class="cat">${esc(CATS[lang][s.cat])}</span>${esc(name)}</h3><div class="tags">${isNew(s) ? '<span class="new">NEW</span>' : ''}${s.ease >= 5 ? `<span class="max">${esc(L.badgeMax)}</span>` : ''}<span class="type ${s.type}">${esc(s.type === 'loop' ? L.tagLoop : L.tagOnce)}</span></div></div>
<p class="gain">${esc(d.gain)}<small>${esc(d.note)}</small></p>
<dl><dt>${esc(L.need)}</dt><dd>${esc(d.need)}</dd><dt>${esc(L.ease)}</dt><dd>${meter(s.ease)}</dd><dt>${esc(L.region)}</dt><dd><span class="region">${esc(s.global ? L.global : L.jp)}</span></dd></dl>
${trust(s, lang)}
${d.caution ? `<p class="caution">${esc(L.cautionP + d.caution)}</p>` : ''}
<div class="slip">${s.ref ? '' : `<div class="code${has ? '' : ' empty'}"><span class="label">${esc(L.code)}</span><span class="dot">${has ? esc(s.code) : esc(L.pending)}</span></div><button class="btn line" type="button"${has ? ` data-code="${esc(s.code)}"` : ' disabled'}>${esc(L.copy)}</button>`}<a class="btn solid" href="${esc(s.ref || s.official)}" target="_blank" rel="noopener sponsored">${esc(s.ref ? L.goRef : L.goOff)}</a></div>
</article>`;
}

// 流れるテープ（サービス名＋もらえるもの）
function tape(lang) {
  return live.map(s => {
    const d = s[lang] || s.en;
    return `<span><b>${esc(lang === 'ja' ? s.name : s.nameEn || s.name)}</b>${esc(d.gain)}</span>`;
  }).join('');
}

// まず入れるならこの3つ（紹介リンクがあるものだけ）
function picks(lang) {
  const L = T[lang];
  return PICKS.map(p => [p, live.find(s => s.id === p.id)]).filter(([, s]) => s).map(([p, s], i) => {
    const name = lang === 'ja' ? s.name : s.nameEn || s.name;
    return `<article class="pick"><div class="pick-top"><span class="rank dot">${i + 1}</span><div><span class="cat">${esc(CATS[lang][s.cat])}</span><h3>${esc(name)}</h3></div></div>
<p>${esc(p[lang] || p.en)}</p>
<a class="btn solid" href="${esc(s.ref)}" target="_blank" rel="noopener sponsored">${esc(L.goRef)}</a>
<a class="more" href="#svc-${s.id}">${esc(L.pickMore)} ↓</a>
</article>`;
  }).join('\n');
}

// 新着・更新履歴（新しい順に8件）
function news(lang) {
  return NEWS.slice(0, 8).map(n => `<li><time class="dot" datetime="${n.date}">${n.date.replace(/-/g, '.')}</time><span>${esc(n[lang] || n.en)}</span></li>`).join('');
}

// 言語ごとによく使われる SNS を先に並べる
const SHARE_ORDER = {
  ja: ['x', 'line'], en: ['x', 'wa', 'tg'], zh: ['wb', 'x', 'tg'],
  hi: ['wa', 'x', 'tg'], es: ['wa', 'x', 'fb'], ar: ['wa', 'x', 'tg'],
};
function shareBtns(lang) {
  const L = T[lang];
  const u = encodeURIComponent(abs(lang)), t = encodeURIComponent(L.shareText);
  const SNS = {
    x: ['X', `https://x.com/intent/post?text=${t}&url=${u}`],
    line: ['LINE', `https://social-plugins.line.me/lineit/share?url=${u}`],
    wa: ['WhatsApp', `https://wa.me/?text=${t}%20${u}`],
    tg: ['Telegram', `https://t.me/share/url?url=${u}&text=${t}`],
    wb: ['微博', `https://service.weibo.com/share/share.php?url=${u}&title=${t}`],
    fb: ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`],
  };
  return SHARE_ORDER[lang].map(k => `<a class="btn sb-${k}" href="${esc(SNS[k][1])}" target="_blank" rel="noopener">${SNS[k][0]}</a>`).join('')
    + `<button class="btn sb-native" type="button" id="nativeShare" hidden>${esc(L.share)}</button>`
    + `<button class="btn sb-copy" type="button" id="copyLink">${esc(L.copyLink)}</button>`;
}

function filters(lang) {
  const cats = Object.keys(CATS.en).filter(c => c === 'all' || live.some(s => s.cat === c));
  return cats.map(c => {
    const n = c === 'all' ? live.length : live.filter(s => s.cat === c).length;
    return `<button type="button" data-cat="${c}" aria-pressed="${c === 'all'}">${esc(CATS[lang][c])}<span>${n}</span></button>`;
  }).join('');
}

function head(lang) {
  const L = T[lang];
  const title = `${L.title} | ${L.eyebrow}`;
  const alts = LANGS.map(l => `<link rel="alternate" hreflang="${LANG_TAG[l]}" href="${abs(l)}">`).join('\n');
  const ld = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: title, inLanguage: LANG_TAG[lang],
    itemListElement: live.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: lang === 'ja' ? s.name : s.nameEn || s.name, url: s.official })),
  };
  return `<title>${esc(title)}</title>
<meta name="description" content="${esc(L.metaDesc)}">
<link rel="canonical" href="${abs(lang)}">
<meta name="google-site-verification" content="n5VlzRi2FPlfwdfg9RcoApbpTtxkHIoB2ws5jWbPF9s">
${alts}
<link rel="alternate" hreflang="x-default" href="${abs(DEFAULT_LANG)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(L.metaDesc)}">
<meta property="og:url" content="${abs(lang)}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta property="og:image" content="${SITE_URL}/og/${lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE_URL}/og/${lang}.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

function clientScript(lang) {
  const L = T[lang];
  const i18n = { count: L.count, copied: L.copied, selected: L.selected, linkCopied: L.linkCopied, shareText: L.shareText, url: abs(lang) };
  return `<script>
(function(){
  var I18N=${JSON.stringify(i18n)};
  var grid=document.getElementById('grid'),filters=document.getElementById('filters'),loopOnly=document.getElementById('loopOnly'),
      countEl=document.getElementById('count'),empty=document.getElementById('empty'),toast=document.getElementById('toast'),cat='all',timer;
  function apply(){
    var n=0;
    grid.querySelectorAll('.svc').forEach(function(el){
      var show=(cat==='all'||el.getAttribute('data-cat')===cat)&&(!loopOnly.checked||el.getAttribute('data-type')==='loop');
      el.hidden=!show; if(show)n++;
    });
    empty.hidden=n>0;
    countEl.textContent=I18N.count.replace('{n}',n);
  }
  filters.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    cat=b.getAttribute('data-cat');
    filters.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    apply();
  });
  loopOnly.addEventListener('change',apply);
  function say(msg){toast.textContent=msg;toast.hidden=false;clearTimeout(timer);timer=setTimeout(function(){toast.hidden=true},1800)}
  grid.addEventListener('click',function(e){
    var b=e.target.closest('[data-code]'); if(!b) return;
    var code=b.getAttribute('data-code'),span=b.previousElementSibling.querySelector('.dot');
    function fallback(){var r=document.createRange();r.selectNodeContents(span);var sel=getSelection();sel.removeAllRanges();sel.addRange(r);say(I18N.selected)}
    try{navigator.clipboard.writeText(code).then(function(){say(I18N.copied)},fallback)}catch(err){fallback()}
  });
  document.getElementById('copyLink').addEventListener('click',function(){
    try{navigator.clipboard.writeText(I18N.url).then(function(){say(I18N.linkCopied)},function(){prompt('',I18N.url)})}catch(err){prompt('',I18N.url)}
  });
  var ns=document.getElementById('nativeShare');
  if(navigator.share){ns.hidden=false;ns.addEventListener('click',function(){navigator.share({text:I18N.shareText,url:I18N.url}).catch(function(){})})}
  // このページを開いてからの時間
  var t0=Date.now(),timerEl=document.getElementById('timer');
  function pad(n){return n<10?'0'+n:''+n}
  setInterval(function(){var s=Math.floor((Date.now()-t0)/1000);timerEl.textContent=pad(Math.floor(s/3600))+':'+pad(Math.floor(s/60)%60)+':'+pad(s%60)},1000);
})();
</script>`;
}

fs.rmSync(OUT, { recursive: true, force: true });
for (const lang of LANGS) {
  const L = T[lang];
  let body = template.replace(/\{\{t\.(\w+)\}\}/g, (_, k) => {
    if (!(k in L)) throw new Error(`missing ${lang}.${k}`);
    return L[k];
  });
  const vars = {
    head: head(lang),
    langSwitch: LANGS.map(l => `<a href="${urlPath(l)}" hreflang="${LANG_TAG[l]}" lang="${LANG_TAG[l]}"${RTL.has(l) ? ' dir="rtl"' : ''}${l === lang ? ' aria-current="page"' : ''}>${LANG_NAMES[l]}</a>`).join(''),
    fonts: fontsUrl(lang),
    filters: filters(lang),
    cards: live.map(s => card(s, lang)).join('\n'),
    count: esc(L.count.replace('{n}', live.length)),
    statAll: live.length,
    statLoop: live.filter(s => s.type === 'loop').length,
    statGlobal: live.filter(s => s.global).length,
    tape: tape(lang),
    picks: picks(lang),
    trustLegend: trustLegend(lang),
    news: news(lang),
    shareBtns: shareBtns(lang),
    script: clientScript(lang),
  };
  body = body.replace(/\{\{(\w+)\}\}/g, (_, k) => {
    if (!(k in vars)) throw new Error(`missing var ${k}`);
    return vars[k];
  });
  const cut = body.indexOf('</style>') + '</style>'.length;
  const html = `<!doctype html>
<html lang="${LANG_TAG[lang]}"${RTL.has(lang) ? ' dir="rtl"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
${body.slice(0, cut).trim()}
</head>
<body>
${body.slice(cut).trim()}
</body>
</html>
`;
  const dir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// SNS 用の画像（node og.js で src/og/ に作る）をそのままコピー
const OG_SRC = path.join(__dirname, 'src/og');
if (fs.existsSync(OG_SRC)) fs.cpSync(OG_SRC, path.join(OUT, 'og'), { recursive: true });

const today = new Date().toISOString().slice(0, 10);
const alts = LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${LANG_TAG[l]}" href="${abs(l)}"/>`).join('\n');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(l => `  <url>
    <loc>${abs(l)}</loc>
    <lastmod>${today}</lastmod>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(DEFAULT_LANG)}"/>
  </url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`built ${LANGS.length} pages, ${live.length} services shown (${SERVICES.length - live.length} hidden)`);
