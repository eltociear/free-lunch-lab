// 使い方: node build.js  →  public/ に6言語の一覧ページ（/ と /{lang}/）、サービスごとの個別ページ（services/{id}/）、sitemap.xml, robots.txt を生成
const fs = require('fs');
const path = require('path');
const { SITE_URL, LANGS, DEFAULT_LANG, SERVICES, PICKS, NEWS, CATS, T, ORGS, ORG_GROUPS, ORG_REGIONS, ORG_PREVIEW } = require('./src/data.js');

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

const live = SERVICES.filter(s => s.ref || s.noRef); // 紹介リンクがあるもの（と紹介制度のない noRef）だけ表示
const urlPath = l => (l === DEFAULT_LANG ? '/' : `/${l}/`);
const abs = l => SITE_URL + urlPath(l);
// サービスごとの個別ページ: /services/{id}/（英語）と /{lang}/services/{id}/
const svcPath = (l, s) => `${urlPath(l)}services/${s.id}/`;
const svcAbs = (l, s) => SITE_URL + svcPath(l, s);
// UBIの団体・プロジェクト: /organizations/ と /{lang}/organizations/
const orgPath = l => `${urlPath(l)}organizations/`;
const orgAbs = l => SITE_URL + orgPath(l);
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

// 申し込みボタン。codeOnly と noRef はリンク先が公式ページなので sponsored を付けない
function cta(s, L) {
  const label = s.codeOnly ? L.goCode : s.ref ? L.goRef : L.goOff;
  return `<a class="btn solid" href="${esc(s.ref || s.official)}" target="_blank" rel="noopener${s.ref && !s.codeOnly ? ' sponsored' : ''}">${esc(label)}</a>`;
}

// アイコン代わりのモノグラム（ロゴは使わない）。日本語名は頭の1文字、英字は大文字2つか頭2文字
const MONO = { honeygain: 'Hg', pinetwork: 'Pi', wavee: 'W' };
function mono(s, name) {
  if (MONO[s.id] && /^[\x00-\x7f]/.test(name)) return MONO[s.id];
  if (!/^[\x00-\x7f]/.test(name)) return name[0];
  const caps = name.replace(/[^A-Z]/g, '');
  return caps.length >= 2 ? caps.slice(0, 2) : name.replace(/[^A-Za-z]/g, '').slice(0, 2);
}

function card(s, lang) {
  const L = T[lang];
  const d = s[lang] || s.en;
  const name = lang === 'ja' ? s.name : s.nameEn || s.name;
  return `<article class="svc rv" id="svc-${s.id}" data-cat="${s.cat}" data-type="${s.type}">
<div class="svc-top">${ava(s, name)}<div class="svc-id"><h3><span class="cat">${esc(CATS[lang][s.cat])}</span><a href="${svcPath(lang, s)}">${esc(name)}</a></h3>${tags(s, L)}</div></div>
<p class="gain">${esc(d.gain)}</p>
<div class="desc"><p id="d-${s.id}">${esc(d.note)}</p><button class="expand" type="button" aria-expanded="false" aria-controls="d-${s.id}" hidden>${esc(L.more)}</button></div>
<p class="need"><b>${esc(L.need)}</b><span>${esc(d.need)}</span></p>
${meta(s, lang)}
${d.caution ? `<p class="caution">${esc(L.cautionP + d.caution)}</p>` : ''}
${slip(s, L)}
</article>`;
}

// カードと個別ページで共通の部品
const ava = (s, name) => `<span class="ava" aria-hidden="true" dir="auto">${esc(mono(s, name))}</span>`;
const tags = (s, L) => `<div class="tags">${isNew(s) ? '<span class="new">NEW</span>' : ''}${s.ease >= 5 ? `<span class="max">${esc(L.badgeMax)}</span>` : ''}<span class="type ${s.type}">${esc(s.type === 'loop' ? L.tagLoop : L.tagOnce)}</span></div>`;
function meta(s, lang) {
  const L = T[lang];
  return `<div class="meta"><span class="ease"><span>${esc(L.ease)}</span>${meter(s.ease)}</span><span class="region${s.global ? ' world' : ''}"><span class="vh">${esc(L.region)}: </span>${esc(s.global ? L.global : L.jp)}</span>${trust(s, lang)}</div>`;
}
function slip(s, L) {
  const has = !!s.code;
  // 紹介リンクがあるものはコード欄・コピーボタンを出さない。codeOnly はリンクが公式ページだけなのでコードを出す
  // noRef は紹介制度がないのでコード欄も出さない
  const showCode = (!s.ref && !s.noRef) || s.codeOnly;
  return `<div class="slip">${showCode ? `<div class="code${has ? '' : ' empty'}"><span class="label">${esc(L.code)}</span><span class="dot"${has ? ' dir="ltr"' : ''}>${has ? esc(s.code) : esc(L.pending)}</span></div><button class="btn line" type="button"${has ? ` data-code="${esc(s.code)}"` : ' disabled'}>${esc(L.copy)}</button>` : ''}${cta(s, L)}</div>`;
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
    return `<article class="pick rv"><div class="pick-top"><span class="rank dot">${i + 1}</span><div><span class="cat">${esc(CATS[lang][s.cat])}</span><h3>${esc(name)}</h3></div></div>
<p>${esc(p[lang] || p.en)}</p>
${cta(s, L)}
<a class="more" href="#svc-${s.id}">${esc(L.pickMore)} ↓</a>
</article>`;
  }).join('\n');
}

// 新着・更新履歴（日付ごとにまとめて新しい順に5日分）
function news(lang) {
  const days = new Map();
  for (const n of NEWS) {
    if (!days.has(n.date)) days.set(n.date, []);
    days.get(n.date).push(n);
  }
  return [...days].slice(0, 5).map(([date, items]) => `<li><time class="dot" datetime="${date}">${date.replace(/-/g, '.')}</time><ul>${items.map(n => `<li>${esc(n[lang] || n.en)}</li>`).join('')}</ul></li>`).join('');
}

// 言語ごとによく使われる SNS を先に並べる
const SHARE_ORDER = {
  ja: ['x', 'line', 'fb', 'tg'], en: ['x', 'wa', 'tg', 'fb'], zh: ['wb', 'x', 'tg', 'fb'],
  hi: ['wa', 'x', 'tg', 'fb'], es: ['wa', 'x', 'fb', 'tg'], ar: ['wa', 'x', 'tg', 'fb'],
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
  const i18n = { more: L.more, less: L.less, count: L.count, copied: L.copied, selected: L.selected, linkCopied: L.linkCopied, shareText: L.shareText, url: abs(lang) };
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
  // 説明文は3行で畳む。はみ出すものだけ「もっと見る」を出す
  function clampAll(){
    grid.querySelectorAll('.desc').forEach(function(d){
      if(d.classList.contains('open')) return;
      var p=d.firstChild,b=d.lastChild;
      b.hidden=!(p.scrollHeight>p.clientHeight+1);
    });
  }
  clampAll();
  if(document.fonts) document.fonts.ready.then(clampAll);
  grid.addEventListener('click',function(e){
    var b=e.target.closest('.expand'); if(!b) return;
    var d=b.parentNode,open=d.classList.toggle('open');
    b.setAttribute('aria-expanded',open); b.textContent=open?I18N.less:I18N.more;
  });
  // スクロールで少しずつ出す（一度だけ）。動きを減らす設定や非対応のときはそのまま見せる
  var rv=document.querySelectorAll('.rv,.rise');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){
      var k=0;
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        var el=e.target; io.unobserve(el);
        el.style.transitionDelay=Math.min(k++*70,280)+'ms'; el.classList.add('in');
        setTimeout(function(){el.style.transitionDelay='';el.classList.add('done')},1100);
      });
    },{rootMargin:'0px 0px -40px 0px'});
    rv.forEach(function(el){io.observe(el)});
  }else rv.forEach(function(el){el.classList.add('in','done')});
  // このページを開いてからの時間
  var t0=Date.now(),timerEl=document.getElementById('timer');
  function pad(n){return n<10?'0'+n:''+n}
  function tick(){var s=Math.floor((Date.now()-t0)/1000);timerEl.textContent=pad(Math.floor(s/3600))+':'+pad(Math.floor(s/60)%60)+':'+pad(s%60)}
  setInterval(tick,1000);
  // 言語切替で読んでいた位置と絞り込みを引き継ぐ（文章量が違うのでpxではなく要素＋割合で）
  var KEY='langPos',bar=document.querySelector('.bar'),tools=document.getElementById('tools'),root=document.documentElement;
  function barB(){return bar?bar.getBoundingClientRect().bottom:0}
  // 一覧の絞り込みバーは上に貼りつくので、その高さをCSSに渡す。貼りついている間は見えている上端がその下になる
  function stuck(){var r=tools.getBoundingClientRect();return Math.abs(r.top-parseFloat(getComputedStyle(tools).top))<1.5&&window.scrollY>0}
  function topB(){return stuck()?tools.getBoundingClientRect().bottom:barB()}
  function measure(){root.style.setProperty('--bar-h',(bar?bar.offsetHeight:0)+'px');root.style.setProperty('--tools-h',tools.offsetHeight+'px')}
  function onScroll(){tools.classList.toggle('stuck',stuck())}
  measure(); onScroll();
  window.addEventListener('resize',function(){measure();onScroll();clampAll()});
  window.addEventListener('scroll',onScroll,{passive:true});
  document.querySelector('.lang').addEventListener('click',function(e){
    var a=e.target.closest('a'); if(!a||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
    var y=topB(),best=null,f=0;
    document.querySelectorAll('header[id],section[id],.svc[id]').forEach(function(el){
      var r=el.getBoundingClientRect(); if(!r.height||r.bottom<=y||(best&&r.top>y)) return;
      best=el; f=Math.max(0,(y-r.top)/r.height);
    });
    try{sessionStorage.setItem(KEY,JSON.stringify({id:best&&window.scrollY>0?best.id:'',f:f,cat:cat,loop:loopOnly.checked,t0:t0,t:Date.now()}))}catch(err){}
  });
  var s=null;
  try{s=JSON.parse(sessionStorage.getItem(KEY));sessionStorage.removeItem(KEY)}catch(err){}
  if(s&&Date.now()-s.t<30000){
    // 経過時間も引き継ぐ（未来や24時間超の値は無視）
    if(typeof s.t0==='number'&&s.t0<=Date.now()&&Date.now()-s.t0<864e5){t0=s.t0;tick()}
    var fb=s.cat&&filters.querySelector('button[data-cat="'+s.cat+'"]');
    if(fb&&s.cat!=='all') fb.click();
    if(s.loop){loopOnly.checked=true;apply()}
    var el=s.id&&document.getElementById(s.id),goneY;
    function go(){
      if(!el||el.hidden) return;
      root.style.scrollBehavior='auto';
      // 絞り込みバーが貼りつくかどうかで上端が変わるので、何回か合わせる
      for(var i=0;i<3;i++){var r=el.getBoundingClientRect();window.scrollTo(0,window.scrollY+r.top+s.f*r.height-topB())}
      root.style.scrollBehavior=''; goneY=window.scrollY; onScroll();
    }
    go();
    // フォント等の読込で位置がずれたら、まだ動かしていなければ合わせ直す
    window.addEventListener('load',function(){if(window.scrollY===goneY)go()});
    if(document.fonts) document.fonts.ready.then(function(){clampAll();if(window.scrollY===goneY)go()});
  }
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
    orgsPreview: ORG_PREVIEW.map(id => ORGS.find(o => o.id === id)).filter(Boolean).map(o => `<li><a href="organizations/#org-${o.id}" dir="auto">${esc(o.name)}</a><span>${esc(o.region ? ORG_REGIONS[o.region][lang] : '')}</span><p>${esc((o.short || o.desc)[lang] || (o.short || o.desc).en)}</p></li>`).join(''),
    orgsBtn: esc(L.orgsSecBtn.replace('{n}', ORGS.length)),
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

// ---- サービスごとの個別ページ（検索で「サービス名 とは」などから来る人向け）。中身は SERVICES のデータだけで作る
const CSS = template.slice(template.indexOf('<style>') + 7, template.indexOf('</style>'));
const DETAIL_CSS = `
.crumbs ol{list-style:none;margin:0;padding:14px 0 0;display:flex;flex-wrap:wrap;gap:4px 8px;font-size:.8rem;color:var(--muted)}
.crumbs li+li::before{content:"›";margin-inline-end:8px;opacity:.7}
[dir="rtl"] .crumbs li+li::before{content:"‹"}
.crumbs a{color:var(--muted);text-underline-offset:3px}
.detail{max-width:760px;margin:20px auto 0;gap:16px;padding:clamp(20px,4vw,32px)}
.detail:hover{transform:none}
.detail h1{font-size:clamp(1.6rem,5vw,2.3rem);line-height:1.3;overflow-wrap:anywhere}
.detail .ava{width:64px;height:64px;font-size:1.4rem}
.detail h2{font-family:var(--f-body);font-weight:700;font-size:.78rem;letter-spacing:.08em;color:var(--muted);margin-top:4px}
.detail .body{font-size:.98rem;line-height:1.9}
.detail .gain{font-size:clamp(1.4rem,4vw,1.9rem)}
.detail .meta{margin-top:4px}
.detail .caution{font-size:.88rem}
#related{--sky1:#7C5CFF;--sky2:#C04FA0;max-width:760px;margin-inline:auto;padding-top:clamp(40px,6vw,64px)}
.rel-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr));gap:12px}
.rel{--c:var(--accent);display:flex;gap:12px;align-items:center;padding:14px;border-radius:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none;box-shadow:var(--shadow);min-width:0;transition:border-color .2s ease}
.rel:hover{border-color:color-mix(in srgb,var(--c) 50%,var(--line))}
.rel .ava{width:42px;height:42px;border-radius:12px;font-size:.95rem}
.rel>span:last-child{display:grid;min-width:0}
.rel b{font-size:.98rem;line-height:1.35;overflow-wrap:anywhere}
.rel small{font-size:.78rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.back{max-width:760px;margin:28px auto 0;display:flex;justify-content:center}
.back .btn{border-radius:999px;padding:10px 22px}
.detail-foot{margin-top:clamp(48px,7vw,80px)}
.detail-foot .foot{padding-top:18px}
.org-link{font-size:.84rem;color:var(--muted);border-top:1px dashed var(--line);padding-top:12px}
.org-link span{font-size:.78rem}
/* 団体ページ: お金のカードと区別するため、色の帯やボタンのない落ち着いた行で並べる */
.orgs{max-width:820px;margin-inline:auto}
.orgs-head{padding-block:24px 8px;display:grid;gap:12px}
.orgs-head h1{font-size:clamp(1.6rem,5vw,2.4rem)}
.orgs-intro{color:var(--muted);max-width:44em}
.org-toc{display:flex;flex-wrap:wrap;gap:6px}
.org-toc a{font-size:.8rem;color:var(--ink);text-decoration:none;border:1px solid var(--line);border-radius:999px;padding:2px 12px;background:var(--surface)}
.org-toc a:hover{border-color:var(--accent);color:var(--accent)}
.org-group{padding-top:clamp(32px,5vw,48px)}
.org-group h2{font-size:1.25rem;display:flex;align-items:center;gap:10px;padding-bottom:8px;border-bottom:2px solid var(--ink)}
.org-group h2 .dot{font-size:.85rem;color:var(--muted);font-weight:400}
.org-list{list-style:none;margin:0;padding:0}
.org{padding:16px 2px;border-bottom:1px solid var(--line);display:grid;gap:6px;scroll-margin-top:calc(var(--bar-h,56px) + 16px)}
.org:target{background:color-mix(in srgb,var(--accent) 8%,transparent);border-radius:8px;padding-inline:10px}
.org-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px}
.org-name{font-weight:700;font-size:1.02rem;text-underline-offset:3px;overflow-wrap:anywhere}
.org-name::after{content:"↗";font-size:.8em;margin-inline-start:4px;opacity:.7}
.org-meta{font-size:.78rem;color:var(--muted)}
.org p{font-size:.9rem;line-height:1.8;color:var(--ink)}
.org-svc{justify-self:start;font-size:.8rem;font-weight:700;color:var(--pos);text-underline-offset:3px}
.foot a{color:inherit;text-underline-offset:3px}
`;
const sName = (s, l) => (l === 'ja' ? s.name : s.nameEn || s.name);
// meta description 用に長さをそろえる（日本語・中国語は短め）
function clip(str, lang) {
  const n = lang === 'ja' || lang === 'zh' ? 110 : 155;
  const a = [...str];
  return a.length <= n ? str : a.slice(0, n - 1).join('').trimEnd() + '…';
}
// 関連サービス: 同じカテゴリから最大4つ。3つに満たなければ同じ種類（継続/1回）→その他で埋める
function related(s) {
  const others = live.filter(x => x.id !== s.id);
  const out = others.filter(x => x.cat === s.cat).slice(0, 4);
  for (const x of [...others.filter(x => x.type === s.type), ...others]) {
    if (out.length >= 3) break;
    if (!out.includes(x)) out.push(x);
  }
  return out;
}
function servicePage(s, lang) {
  const L = T[lang];
  const d = s[lang] || s.en;
  const name = sName(s, lang);
  const rtl = RTL.has(lang);
  const sep = lang === 'ja' || lang === 'zh' ? '：' : ': ';
  const end = lang === 'ja' || lang === 'zh' ? '。' : '. ';
  const title = `${L.svcTitle.replace('{name}', name)} | ${L.title}`;
  const desc = clip(`${name}${sep}${d.gain}${end}${d.note}`, lang);
  const url = svcAbs(lang, s);
  const home = urlPath(lang);
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
  const rel = related(s).map(x => `<a class="rel" data-cat="${x.cat}" href="${svcPath(lang, x)}">${ava(x, sName(x, lang))}<span><span class="cat">${esc(CATS[lang][x.cat])}</span><b>${esc(sName(x, lang))}</b><small>${esc((x[lang] || x.en).gain)}</small></span></a>`).join('');
  const org = ORGS.find(o => o.svc === s.id);
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li><a href="${home}#list">${esc(L.listH)}</a></li><li aria-current="page">${esc(name)}</li></ol></nav>
<main>
<article class="svc detail" id="svc-${s.id}" data-cat="${s.cat}" data-type="${s.type}">
<div class="svc-top">${ava(s, name)}<div class="svc-id"><span class="cat">${esc(CATS[lang][s.cat])}</span><h1>${esc(name)}</h1>${tags(s, L)}</div></div>
<h2>${esc(L.hGain)}</h2>
<p class="gain">${esc(d.gain)}</p>
<h2>${esc(L.hAbout.replace('{name}', name))}</h2>
<p class="body">${esc(d.note)}</p>
<h2>${esc(L.hNeed)}</h2>
<p class="body">${esc(d.need)}</p>
${meta(s, lang)}
${d.caution ? `<p class="caution">${esc(L.cautionP + d.caution)}</p>` : ''}
${slip(s, L)}
${org ? `<p class="org-link">${esc(L.orgsRelated)}: <a href="${orgPath(lang)}#org-${org.id}">${esc(org.name)}</a> <span>(${esc(L.orgsTitle)})</span></p>` : ''}
</article>
<section id="related">
  <div class="sec-head"><h2>${esc(L.hRelated)}</h2></div>
  <div class="rel-grid">${rel}</div>
</section>
<p class="back"><a class="btn line" href="${home}#list">${rtl ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  const i18n = { copied: L.copied, selected: L.selected };
  const script = `<script>
(function(){
  var I18N=${JSON.stringify(i18n)},toast=document.getElementById('toast'),timer;
  function say(m){toast.textContent=m;toast.hidden=false;clearTimeout(timer);timer=setTimeout(function(){toast.hidden=true},1800)}
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-code]'); if(!b) return;
    var code=b.getAttribute('data-code'),span=b.previousElementSibling.querySelector('.dot');
    function fallback(){var r=document.createRange();r.selectNodeContents(span);var sel=getSelection();sel.removeAllRanges();sel.addRange(r);say(I18N.selected)}
    try{navigator.clipboard.writeText(code).then(function(){say(I18N.copied)},fallback)}catch(err){fallback()}
  });
})();
</script>`;
  return shell(lang, { title, desc, hrefFor: l => svcAbs(l, s), pathFor: l => svcPath(l, s), ld, ogType: 'article', body, script, pr: true });
}

// 個別ページ・団体ページで共通の外枠（head、上のバー、フッター）
function shell(lang, { title, desc, hrefFor, pathFor, ld, ogType, body, script = '', pr = false }) {
  const L = T[lang];
  const rtl = RTL.has(lang);
  const home = urlPath(lang);
  const url = hrefFor(lang);
  const alts = LANGS.map(l => `<link rel="alternate" hreflang="${LANG_TAG[l]}" href="${hrefFor(l)}">`).join('\n');
  return `<!doctype html>
<html lang="${LANG_TAG[lang]}"${rtl ? ' dir="rtl"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${alts}
<link rel="alternate" hreflang="x-default" href="${hrefFor(DEFAULT_LANG)}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta property="og:image" content="${SITE_URL}/og/${lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE_URL}/og/${lang}.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fontsUrl(lang)}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&text=%C4%9E&display=swap">
<style>${CSS}${DETAIL_CSS}</style>
</head>
<body>
<div class="bar">
  <div class="bar-in">
    <a class="brand" href="${home}">${L.brand}</a>
    <nav class="nav" aria-label="${esc(L.navLabel)}"><a href="${home}#list">${esc(L.navList)}</a><a href="${home}#how">${esc(L.navHow)}</a><a href="${home}#faq">${esc(L.navFaq)}</a></nav>
    <div class="lang" role="group" aria-label="${esc(L.langLabel)}">${LANGS.map(l => `<a href="${pathFor(l)}" hreflang="${LANG_TAG[l]}" lang="${LANG_TAG[l]}"${RTL.has(l) ? ' dir="rtl"' : ''}${l === lang ? ' aria-current="page"' : ''}>${LANG_NAMES[l]}</a>`).join('')}</div>
  </div>
</div>
<div class="wrap">
${pr ? `<p class="pr"><b>PR</b><span>${L.pr}</span></p>\n` : ''}${body}
</div>
<footer class="foot-band detail-foot"><div class="wrap foot"><span>${esc(L.foot)}</span><span class="dot">${esc(L.brandPlain)}</span></div></footer>
<div class="toast" id="toast" role="status" hidden></div>
${script}
</body>
</html>
`;
}

// ---- UBIの団体・プロジェクト（/organizations/）。お金がもらえるサービスではないので、紹介ボタンや sponsored は付けない
function orgsPage(lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const title = `${L.orgsTitle} | ${L.title}`;
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: L.orgsTitle, item: orgAbs(lang) },
    ],
  };
  const groups = ORG_GROUPS.map(g => {
    const items = ORGS.filter(o => o.group === g.id).map(o => {
      const svc = o.svc && live.find(x => x.id === o.svc);
      const meta = [o.region && ORG_REGIONS[o.region][lang], o.year && `${L.orgsFounded} ${o.year}`].filter(Boolean).map(esc).join(' · ');
      return `<li class="org" id="org-${o.id}"><div class="org-head"><a class="org-name" href="${esc(o.url)}" target="_blank" rel="noopener" dir="auto">${esc(o.name)}</a>${meta ? `<span class="org-meta">${meta}</span>` : ''}</div>
<p>${esc(o.desc[lang] || o.desc.en)}</p>${svc ? `<a class="org-svc" href="${svcPath(lang, svc)}">${esc(L.orgsOnSite)}: ${esc(sName(svc, lang))}</a>` : ''}</li>`;
    }).join('\n');
    return `<section class="org-group" id="g-${g.id}"><h2>${esc(g.name[lang])}<span class="dot">${ORGS.filter(o => o.group === g.id).length}</span></h2><ul class="org-list">${items}</ul></section>`;
  }).join('\n');
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li aria-current="page">${esc(L.orgsTitle)}</li></ol></nav>
<main class="orgs">
<header class="orgs-head"><p class="eyebrow">ORGANIZATIONS</p><h1>${esc(L.orgsH1)}</h1><p class="orgs-intro">${esc(L.orgsIntro)}</p>
<nav class="org-toc" aria-label="${esc(L.navLabel)}">${ORG_GROUPS.map(g => `<a href="#g-${g.id}">${esc(g.name[lang])}</a>`).join('')}</nav></header>
${groups}
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title, desc: L.orgsDesc, hrefFor: orgAbs, pathFor: orgPath, ld, ogType: 'website', body });
}

for (const lang of LANGS) {
  for (const s of live) {
    const dir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'services', s.id);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), servicePage(s, lang));
  }
  const odir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'organizations');
  fs.mkdirSync(odir, { recursive: true });
  fs.writeFileSync(path.join(odir, 'index.html'), orgsPage(lang));
}

// SNS 用の画像（node og.js で src/og/ に作る）をそのままコピー
const OG_SRC = path.join(__dirname, 'src/og');
if (fs.existsSync(OG_SRC)) fs.cpSync(OG_SRC, path.join(OUT, 'og'), { recursive: true });

const today = new Date().toISOString().slice(0, 10);
// 1ページ分の <url>。href(l) で各言語版の URL を返す
const sitemapUrls = href => LANGS.map(l => `  <url>
    <loc>${href(l)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map(k => `    <xhtml:link rel="alternate" hreflang="${LANG_TAG[k]}" href="${href(k)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${href(DEFAULT_LANG)}"/>
  </url>`).join('\n');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[sitemapUrls(abs), sitemapUrls(orgAbs), ...live.map(s => sitemapUrls(l => svcAbs(l, s)))].join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`built ${LANGS.length} pages + ${LANGS.length * live.length} service pages + ${LANGS.length} organization pages, ${live.length} services shown (${SERVICES.length - live.length} hidden)`);
