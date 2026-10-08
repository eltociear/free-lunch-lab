// 使い方: node build.js  →  public/ に en(/), ja(/ja/), hi(/hi/), sitemap.xml, robots.txt を生成
const fs = require('fs');
const path = require('path');
const { SITE_URL, LANGS, DEFAULT_LANG, SERVICES, CATS, T } = require('./src/data.js');

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

function card(s, lang) {
  const L = T[lang];
  const d = s[lang] || s.en;
  const name = lang === 'ja' ? s.name : s.nameEn || s.name;
  const has = !!s.code;
  return `<article class="svc" data-cat="${s.cat}" data-type="${s.type}">
<div class="svc-top"><h3><span class="cat">${esc(CATS[lang][s.cat])}</span>${esc(name)}</h3><div class="tags"><span class="type ${s.type}">${esc(s.type === 'loop' ? L.tagLoop : L.tagOnce)}</span></div></div>
<p class="gain">${esc(d.gain)}<small>${esc(d.note)}</small></p>
<dl><dt>${esc(L.need)}</dt><dd>${esc(d.need)}</dd><dt>${esc(L.ease)}</dt><dd>${meter(s.ease)}</dd><dt>${esc(L.region)}</dt><dd><span class="region">${esc(s.global ? L.global : L.jp)}</span></dd></dl>
${d.caution ? `<p class="caution">${esc(L.cautionP + d.caution)}</p>` : ''}
<div class="slip"><div class="code${has ? '' : ' empty'}"><span class="label">${esc(L.code)}</span><span class="dot">${has ? esc(s.code) : esc(L.pending)}</span></div><button class="btn line" type="button"${has ? ` data-code="${esc(s.code)}"` : ' disabled'}>${esc(L.copy)}</button><a class="btn solid" href="${esc(s.ref || s.official)}" target="_blank" rel="noopener sponsored">${esc(s.ref ? L.goRef : L.goOff)}</a></div>
</article>`;
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
${alts}
<link rel="alternate" hreflang="x-default" href="${abs(DEFAULT_LANG)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(L.metaDesc)}">
<meta property="og:url" content="${abs(lang)}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

function clientScript(lang) {
  const L = T[lang];
  const i18n = { count: L.count, copied: L.copied, selected: L.selected };
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
