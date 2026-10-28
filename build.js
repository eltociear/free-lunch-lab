// 使い方: node build.js  →  public/ に全言語の一覧ページ（/ と /{lang}/）、サービスごとの個別ページ（services/{id}/）、sitemap.xml, robots.txt を生成
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const { SITE_URL, LANGS, DEFAULT_LANG, SERVICES, PICKS, NEWS, CATS, T, ORGS, ORG_GROUPS, ORG_REGIONS, ORG_PREVIEW, GRAVE, VERIFY, VERIFY_ORDER, TIMELINE, ESSAYS } = require('./src/data.js');

const OUT = path.join(__dirname, 'public');
const template = fs.readFileSync(path.join(__dirname, 'src/template.html'), 'utf8');
const LANG_NAMES = { en: 'EN', ja: '日本語', zh: '中文', hi: 'हिन्दी', es: 'Español', de: 'Deutsch', ar: 'العربية' };
const LANG_TAG = { en: 'en', ja: 'ja', zh: 'zh-Hans', hi: 'hi', es: 'es', de: 'de', ar: 'ar' }; // html lang / hreflang
const OG_LOCALE = { en: 'en_US', ja: 'ja_JP', zh: 'zh_CN', hi: 'hi_IN', es: 'es_ES', de: 'de_DE', ar: 'ar_AR' };
const RTL = new Set(['ar']);
// 共通: 見出しの Dela Gothic One と数字の DotGothic16。本文フォントは言語ごと
const BASE_FONTS = 'family=Dela+Gothic+One&family=DotGothic16';
const LANG_FONTS = {
  en: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  ja: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  es: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  de: 'family=Zen+Kaku+Gothic+New:wght@400;500;700',
  zh: 'family=Noto+Sans+SC:wght@400;500;700;900',
  hi: 'family=Noto+Sans+Devanagari:wght@400;500;700',
  ar: 'family=Noto+Kufi+Arabic:wght@700&family=Noto+Sans+Arabic:wght@400;500;700',
};
const fontsUrl = l => `https://fonts.googleapis.com/css2?${BASE_FONTS}&${LANG_FONTS[l]}&display=swap`;

const live = SERVICES.filter(s => s.ref || s.noRef); // 紹介リンクがあるもの（と紹介制度のない noRef）だけ表示
// 表示するサービスには「最終確認月」（checked: "YYYY-MM"）が必須
for (const s of live) if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(s.checked || '')) throw new Error(`${s.id}: checked ("YYYY-MM") is missing or invalid`);
// 確認月を言語に合わせて表示（en は Oct 2026、ほかは各言語の月名）
function checkedLine(s, lang) {
  const [y, m] = s.checked.split('-').map(Number);
  const date = new Intl.DateTimeFormat(LANG_TAG[lang], { year: 'numeric', month: lang === 'en' ? 'short' : 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, 1)));
  return `<p class="checked"><time datetime="${s.checked}">${esc(T[lang].checkedOn.replace('{date}', date))}</time></p>`;
}
const urlPath = l => (l === DEFAULT_LANG ? '/' : `/${l}/`);
const abs = l => SITE_URL + urlPath(l);
// サービスごとの個別ページ: /services/{id}/（英語）と /{lang}/services/{id}/
const svcPath = (l, s) => `${urlPath(l)}services/${s.id}/`;
const svcAbs = (l, s) => SITE_URL + svcPath(l, s);
// UBIの団体・プロジェクト: /organizations/ と /{lang}/organizations/
const orgPath = l => `${urlPath(l)}organizations/`;
const orgAbs = l => SITE_URL + orgPath(l);
// 終了したサービスの墓場: /graveyard/ と /{lang}/graveyard/
const gravePath = l => `${urlPath(l)}graveyard/`;
const graveAbs = l => SITE_URL + gravePath(l);
// RSS フィード: /feed.xml と /{lang}/feed.xml
const feedPath = l => `${urlPath(l)}feed.xml`;
const feedAbs = l => SITE_URL + feedPath(l);
// エッセイ: /essays/ と /essays/{id}/（言語ごとに接頭辞）
const essaysPath = l => `${urlPath(l)}essays/`;
const essaysAbs = l => SITE_URL + essaysPath(l);
const essayPath = (l, e) => `${essaysPath(l)}${e.id}/`;
const essayAbs = (l, e) => SITE_URL + essayPath(l, e);
const longDate = (iso, lang) => new Intl.DateTimeFormat(LANG_TAG[lang], { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
// ベーシックインカム社会実験の年表: /timeline/ と /{lang}/timeline/
const tlPath = l => `${urlPath(l)}timeline/`;
const tlAbs = l => SITE_URL + tlPath(l);
// 認証方法ごとのページ: /verify/{method}/。必須・任意あわせて2件以上あるものだけ作る
const verifyPath = (l, m) => `${urlPath(l)}verify/${m}/`;
const verifyAbs = (l, m) => SITE_URL + verifyPath(l, m);
const byMethod = m => ({
  req: live.filter(s => (s.verify || []).some(v => v.method === m && !v.optional)),
  opt: live.filter(s => (s.verify || []).some(v => v.method === m && v.optional)),
});
const verifyPages = VERIFY_ORDER.filter(m => { const b = byMethod(m); return b.req.length + b.opt.length >= 2; });
for (const s of live) for (const v of (s.verify || [])) if (!VERIFY[v.method]) throw new Error(`${s.id}: unknown verify method ${v.method}`);
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
${checkedLine(s, lang)}
${slip(s, L)}
</article>`;
}

// カードと個別ページで共通の部品
const ava = (s, name) => `<span class="ava" aria-hidden="true" dir="auto">${esc(mono(s, name))}</span>`;
const tags = (s, L) => `<div class="tags">${isNew(s) ? '<span class="new">NEW</span>' : ''}${s.ease >= 5 ? `<span class="max">${esc(L.badgeMax)}</span>` : ''}<span class="type ${s.type}">${esc(s.type === 'loop' ? L.tagLoop : L.tagOnce)}</span></div>`;
function meta(s, lang) {
  const L = T[lang];
  return `<div class="meta"><span class="ease"><span>${esc(L.ease)}</span>${meter(s.ease)}</span><span class="region${s.global ? ' world' : ''}"><span class="vh">${esc(L.region)}: </span>${esc(s.onlyIn ? L['only_' + s.onlyIn] : s.global ? L.global : L.jp)}</span>${trust(s, lang)}</div>`;
}
function slip(s, L) {
  const has = !!s.code;
  // 紹介リンクがあるものはコード欄・コピーボタンを出さない。codeOnly はリンクが公式ページだけなのでコードを出す
  // noRef は紹介制度がないのでコード欄も出さない
  // showCode: true は、紹介リンクに加えて登録時にコード入力も求められるサービス（アプリストア経由だとリンクが効かないことがある）
  const showCode = (!s.ref && !s.noRef) || s.codeOnly || s.showCode;
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
  hi: ['wa', 'x', 'tg', 'fb'], es: ['wa', 'x', 'fb', 'tg'], de: ['wa', 'x', 'fb', 'tg'], ar: ['wa', 'x', 'tg', 'fb'],
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
<link rel="alternate" type="application/rss+xml" title="${esc(L.title)} RSS" href="${feedAbs(lang)}">
<meta name="google-site-verification" content="n5VlzRi2FPlfwdfg9RcoApbpTtxkHIoB2ws5jWbPF9s">
${alts}
<link rel="alternate" hreflang="x-default" href="${abs(DEFAULT_LANG)}">
<meta property="og:site_name" content="${esc(L.brandPlain)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(L.metaDesc)}">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(L.metaDesc)}">
<meta property="og:url" content="${abs(lang)}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta property="og:image" content="${SITE_URL}/og/${lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FreeLunchLab">
<meta name="twitter:image" content="${SITE_URL}/og/${lang}.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script type="application/ld+json">${JSON.stringify(siteLd(lang))}</script>`;
}

// サイト全体の WebSite / Organization（X アカウントを sameAs に）
function siteLd(lang) {
  const L = T[lang];
  return {
    '@context': 'https://schema.org', '@type': 'WebSite', name: L.brandPlain, url: abs(lang), inLanguage: LANG_TAG[lang],
    publisher: { '@type': 'Organization', name: 'Free Lunch Lab', url: abs(DEFAULT_LANG), sameAs: ['https://x.com/FreeLunchLab', 'https://github.com/eltociear/free-lunch-lab'] },
  };
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
    brandSub: L.brandSub ? `<small dir="auto">${esc(L.brandSub)}</small>` : '',
    orgsPreview: ORG_PREVIEW.map(id => ORGS.find(o => o.id === id)).filter(Boolean).map(o => `<li><a href="organizations/#org-${o.id}" dir="auto">${esc(o.name)}</a><span>${esc(o.region ? ORG_REGIONS[o.region][lang] : '')}</span><p>${esc((o.short || o.desc)[lang] || (o.short || o.desc).en)}</p></li>`).join(''),
    orgsBtn: esc(L.orgsSecBtn.replace('{n}', ORGS.length)),
    verifyBlock: verifyPages.map(m => { const b = byMethod(m); return `<a href="verify/${m}/" dir="auto">${esc(VERIFY[m].name[lang])}<span>${b.req.length + b.opt.length}</span></a>`; }).join(''),
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
.detail h1{font-size:clamp(1.6rem,5vw,2.3rem);line-height:1.3;overflow-wrap:break-word;hyphens:auto}
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
.vmain{max-width:1080px;margin-inline:auto}
.vsec{padding-top:28px}
.vsec h2{font-size:1.15rem;display:flex;align-items:center;gap:10px;margin-bottom:14px}
.vsec h2 .dot{font-size:.85rem;color:var(--muted);font-weight:400}
.verify-line{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:.82rem}
.verify-line b{font-size:.72rem;color:var(--muted);margin-inline-end:4px}
.verify-line a,.verify-line span{padding:2px 10px;border-radius:999px;border:1px solid var(--line);text-decoration:none;color:var(--ink);background:var(--surface)}
.verify-line a:hover{border-color:var(--accent);color:var(--accent)}
.vother{margin-top:28px}
.essay{max-width:720px;margin-inline:auto}
.byline{font-size:.84rem;color:var(--muted)}
.essay-body{display:grid;gap:16px;margin-top:12px}
.essay-body p{font-size:1rem;line-height:1.95}
.essay-body h2{font-family:var(--f-body);font-weight:700;font-size:1.2rem;margin-top:14px}
.essay-body .op{padding-inline-start:14px;border-inline-start:3px solid var(--gold)}
.op-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.06em;padding:0 8px;border-radius:999px;background:color-mix(in srgb,var(--gold) 22%,transparent);color:var(--ink);margin-inline-end:8px;vertical-align:.1em}
.fnref a{text-decoration:none;font-weight:700;padding-inline:1px}
.fn{margin-top:32px;padding-top:16px;border-top:1px solid var(--line)}
.fn h2{font-size:1rem;margin-bottom:8px}
.fn ol{margin:0;padding-inline-start:22px;display:grid;gap:6px;font-size:.84rem;overflow-wrap:anywhere}
.fnback{text-decoration:none;margin-inline-start:4px}
.tl{list-style:none;margin:16px 0 0;padding:0;position:relative}
.tl::before{content:"";position:absolute;top:6px;bottom:6px;inset-inline-start:7px;width:2px;background:linear-gradient(var(--accent),var(--gold));opacity:.6}
.tl-item{position:relative;padding-inline-start:30px;padding-bottom:22px}
.tl-item::before{content:"";position:absolute;inset-inline-start:0;top:4px;width:16px;height:16px;border-radius:50%;background:var(--surface);border:3px solid var(--accent)}
.tl-crypto::before{border-color:#7C5CFF}.tl-gov::before{border-color:#2F7BEA}.tl-ngo::before{border-color:#1FB57A}.tl-private::before{border-color:#F08A24}
.tl-when{font-size:1rem;color:var(--accent);margin-bottom:6px}
.tl-card{padding:16px;border:1px solid var(--line);border-radius:14px;background:var(--surface);display:grid;gap:6px;box-shadow:var(--shadow)}
.tl-type{justify-self:start;font-size:.7rem;font-weight:700;padding:1px 9px;border-radius:999px;border:1px solid var(--line);color:var(--muted)}
.tl-card h2{font-family:var(--f-body);font-weight:700;font-size:1.08rem;overflow-wrap:anywhere}
.tl-place{font-size:.8rem;color:var(--muted)}
.tl-card dl{margin:4px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:.86rem;line-height:1.7}
.tl-card dt{color:var(--muted);font-size:.74rem;padding-top:.15em;white-space:nowrap}
.tl-card dd{margin:0;min-width:0;overflow-wrap:anywhere}
.tl-links{font-size:.8rem}.tl-links span{color:var(--muted)}
.tl-more{margin-top:24px;font-size:.92rem}
@media (max-width:520px){.tl-card dl{grid-template-columns:1fr}.tl-card dt{padding-top:6px}}
.graves{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:14px}
.grave{display:flex;gap:14px;align-items:flex-start;padding:18px;border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--surface) 70%,transparent)}
.tomb{flex:none;color:var(--muted);margin-top:2px}
.grave-body{min-width:0;display:grid;gap:8px}
.grave h2{font-family:var(--f-body);font-weight:700;font-size:1.08rem;overflow-wrap:anywhere}
.grave dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:.88rem;line-height:1.7}
.grave dt{color:var(--muted);font-size:.76rem;padding-top:.15em;white-space:nowrap}
.grave dd{margin:0;min-width:0;overflow-wrap:anywhere}
@media (max-width:520px){.grave dl{grid-template-columns:1fr}.grave dt{padding-top:6px}}
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
${checkedLine(s, lang)}
${(s.verify || []).length ? `<p class="verify-line"><b>${esc(L.verifyLabel)}</b>${s.verify.map(v => { const nm = esc(VERIFY[v.method].name[lang]) + (v.optional ? (lang === 'ja' || lang === 'zh' ? `（${esc(L.verifyOpt)}）` : ` (${esc(L.verifyOpt)})`) : ''); return verifyPages.includes(v.method) ? `<a href="${verifyPath(lang, v.method)}" dir="auto">${nm}</a>` : `<span dir="auto">${nm}</span>`; }).join('')}</p>` : ''}
${slip(s, L)}
${org ? `<p class="org-link">${esc(L.orgsRelated)}: <a href="${orgPath(lang)}#org-${org.id}">${esc(org.name)}</a> <span>(${esc(L.orgsTitle)})</span></p>` : ''}
</article>
<section id="related">
  <div class="sec-head"><h2>${esc(L.hRelated)}</h2></div>
  <div class="rel-grid">${rel}</div>
</section>
<p class="back"><a class="btn line" href="${home}#list">${rtl ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  const script = copyScript(L);
  return shell(lang, { title, desc, hrefFor: l => svcAbs(l, s), pathFor: l => svcPath(l, s), ld, ogType: 'article', body, script, pr: true });
}
function copyScript(L) {
  const i18n = { copied: L.copied, selected: L.selected };
  return `<script>
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
<link rel="alternate" type="application/rss+xml" title="${esc(L.title)} RSS" href="${feedAbs(lang)}">
${alts}
<link rel="alternate" hreflang="x-default" href="${hrefFor(DEFAULT_LANG)}">
<meta property="og:site_name" content="${esc(L.brandPlain)}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta property="og:image" content="${SITE_URL}/og/${lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FreeLunchLab">
<meta name="twitter:image" content="${SITE_URL}/og/${lang}.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fontsUrl(lang)}">
<style>${CSS}${DETAIL_CSS}</style>
</head>
<body>
<div class="bar">
  <div class="bar-in">
    <a class="brand" href="${home}">${L.brand}${L.brandSub ? `<small dir="auto">${esc(L.brandSub)}</small>` : ''}</a>
    <nav class="nav" aria-label="${esc(L.navLabel)}"><a href="${home}#list">${esc(L.navList)}</a><a href="${home}#how">${esc(L.navHow)}</a><a href="${home}#faq">${esc(L.navFaq)}</a></nav>
    <div class="lang" role="group" aria-label="${esc(L.langLabel)}">${LANGS.map(l => `<a href="${pathFor(l)}" hreflang="${LANG_TAG[l]}" lang="${LANG_TAG[l]}"${RTL.has(l) ? ' dir="rtl"' : ''}${l === lang ? ' aria-current="page"' : ''}>${LANG_NAMES[l]}</a>`).join('')}</div>
  </div>
</div>
<div class="wrap">
${pr ? `<p class="pr"><b>PR</b><span>${L.pr}</span></p>\n` : ''}${body}
</div>
<footer class="foot-band detail-foot"><div class="wrap foot"><span>${esc(L.foot)}</span><a class="xlink" href="https://x.com/FreeLunchLab" target="_blank" rel="me noopener" aria-label="X: @FreeLunchLab"><svg class="xicon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg><span dir="ltr">@FreeLunchLab</span></a><a class="xlink" href="https://github.com/eltociear/free-lunch-lab" target="_blank" rel="me noopener" aria-label="GitHub: ${esc(L.ghLabel)}"><svg class="xicon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span>${esc(L.ghLabel)}</span></a><a class="xlink" href="${feedPath(lang)}" aria-label="${esc(L.rssLabel)}"><svg class="xicon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M2 2.5A11.5 11.5 0 0 1 13.5 14h-2A9.5 9.5 0 0 0 2 4.5zm0 4A7.5 7.5 0 0 1 9.5 14h-2A5.5 5.5 0 0 0 2 8.5zM3.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg><span>RSS</span></a><a href="${essaysPath(lang)}">${esc(L.essaysTitle)}</a><span class="dot">${esc(L.brandPlain)}</span></div></footer>
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
<p class="tl-more"><a href="${tlPath(lang)}">${esc(L.tlLink)} →</a></p>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title, desc: L.orgsDesc, hrefFor: orgAbs, pathFor: orgPath, ld, ogType: 'website', body });
}

// ---- エッセイ（/essays/{id}/）。[n] は脚注、o は「意見」の段落
function essayPage(e, lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const ttl = e.title[lang] || e.title.en;
  const desc = e.desc[lang] || e.desc.en;
  const url = essayAbs(lang, e);
  const fn = t => esc(t).replace(/\[(\d+)\]/g, (_, n) => `<sup class="fnref"><a href="#fn-${n}" id="ref-${n}">${n}</a></sup>`);
  const blocks = (e.blocks[lang] || e.blocks.en).map(([k, t]) => k === 'h' ? `<h2>${esc(t)}</h2>` : k === 'o' ? `<p class="op"><span class="op-tag">${esc(L.essayOpinion)}</span>${fn(t)}</p>` : `<p>${fn(t)}</p>`).join('\n');
  const sources = e.sources.map(s => `<li id="fn-${s.n}"><a href="${esc(s.url)}" target="_blank" rel="noopener" dir="auto">${esc(s.label)}</a>${s.url2 ? ` · <a href="${esc(s.url2)}" target="_blank" rel="noopener" dir="ltr">${esc(new URL(s.url2).hostname.replace(/^www\./, ''))}</a>` : ''} <a class="fnback" href="#ref-${s.n}" aria-label="↩">↩</a></li>`).join('');
  const ld = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: L.essaysTitle, item: essaysAbs(lang) },
      { '@type': 'ListItem', position: 3, name: ttl, item: url } ] },
    { '@context': 'https://schema.org', '@type': 'Article', headline: ttl, description: desc, inLanguage: LANG_TAG[lang], datePublished: e.date, dateModified: e.date,
      author: { '@type': 'Organization', name: 'Free Lunch Lab', url: abs(DEFAULT_LANG) }, publisher: { '@type': 'Organization', name: 'Free Lunch Lab', url: abs(DEFAULT_LANG) },
      mainEntityOfPage: url, image: `${SITE_URL}/og/${lang}.png` },
  ];
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li><a href="${essaysPath(lang)}">${esc(L.essaysTitle)}</a></li><li aria-current="page">${esc(ttl)}</li></ol></nav>
<main class="essay">
<article>
<header class="orgs-head"><p class="eyebrow">ESSAY</p><h1>${esc(ttl)}</h1><p class="byline">${esc(L.essayBy)} · <time datetime="${e.date}">${esc(L.essayPublished)} ${esc(longDate(e.date, lang))}</time></p></header>
<div class="essay-body">${blocks}</div>
<section class="fn"><h2>${esc(L.essaySources)}</h2><ol>${sources}</ol></section>
</article>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title: `${ttl} | ${L.title}`, desc, hrefFor: l => essayAbs(l, e), pathFor: l => essayPath(l, e), ld, ogType: 'article', body });
}
function essaysIndex(lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const ld = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
    { '@type': 'ListItem', position: 2, name: L.essaysTitle, item: essaysAbs(lang) } ] };
  const items = ESSAYS.map(e => `<li class="org"><div class="org-head"><a class="org-name essay-link" href="${essayPath(lang, e)}">${esc(e.title[lang] || e.title.en)}</a><span class="org-meta"><time datetime="${e.date}">${esc(longDate(e.date, lang))}</time></span></div><p>${esc(e.desc[lang] || e.desc.en)}</p></li>`).join('');
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li aria-current="page">${esc(L.essaysTitle)}</li></ol></nav>
<main class="orgs"><header class="orgs-head"><p class="eyebrow">ESSAYS</p><h1>${esc(L.essaysTitle)}</h1></header><ul class="org-list">${items}</ul>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p></main>`;
  return shell(lang, { title: `${L.essaysTitle} | ${L.title}`, desc: ESSAYS.map(e => e.desc[lang] || e.desc.en).join(' ').slice(0, 160), hrefFor: essaysAbs, pathFor: essaysPath, ld, ogType: 'website', body });
}

// ---- ベーシックインカム社会実験の年表（/timeline/）。縦のタイムライン（RTLでは左右が反転）
function timelinePage(lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const title = `${L.tlTitle} | ${L.title}`;
  const TYPE = { gov: L.tlGov, ngo: L.tlNgo, private: L.tlPrivate, crypto: L.tlCrypto };
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: L.tlTitle, item: tlAbs(lang) },
    ],
  };
  const t = (o) => (o[lang] || o.en);
  const items = TIMELINE.map(i => {
    const links = [];
    const svc = i.svc && live.find(x => x.id === i.svc);
    if (svc) links.push(`<a href="${svcPath(lang, svc)}">${esc(sName(svc, lang))}</a>`);
    const org = i.org && ORGS.find(o => o.id === i.org);
    if (org) links.push(`<a href="${orgPath(lang)}#org-${org.id}">${esc(L.orgsTitle)}: ${esc(org.name)}</a>`);
    if (i.grave) links.push(`<a href="${gravePath(lang)}#grave-${i.grave}">${esc(L.graveTitle)}</a>`);
    return `<li class="tl-item tl-${i.type}" id="tl-${i.id}"><div class="tl-when"><span class="dot" dir="ltr">${esc(i.years)}</span></div><div class="tl-card"><p class="tl-type">${esc(TYPE[i.type])}</p><h2 dir="auto">${esc(i.name)}</h2><p class="tl-place">${esc(t(i.place))}</p>
<dl><dt>${esc(L.tlWho)}</dt><dd>${esc(t(i.who))}</dd><dt>${esc(L.tlPaid)}</dt><dd>${esc(t(i.paid))}</dd>${t(i.result) ? `<dt>${esc(L.tlResult)}</dt><dd>${esc(t(i.result))}</dd>` : ''}<dt>${esc(L.tlSource)}</dt><dd><a href="${esc(i.source)}" target="_blank" rel="noopener" dir="ltr">${esc(new URL(i.source).hostname.replace(/^www\./, ''))}</a></dd></dl>${links.length ? `<p class="tl-links"><span>${esc(L.tlOnSite)}:</span> ${links.join(' · ')}</p>` : ''}</div></li>`;
  }).join('\n');
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li aria-current="page">${esc(L.tlTitle)}</li></ol></nav>
<main class="orgs">
<header class="orgs-head"><p class="eyebrow">TIMELINE</p><h1>${esc(L.tlTitle)}</h1><p class="orgs-intro">${esc(L.tlIntro)}</p></header>
<ol class="tl">${items}</ol>
<p class="tl-more"><a href="${orgPath(lang)}">${esc(L.orgsTitle)}</a> · <a href="${gravePath(lang)}">${esc(L.graveTitle)}</a></p>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title, desc: L.tlDesc, hrefFor: tlAbs, pathFor: tlPath, ld, ogType: 'website', body });
}

// ---- 認証方法ごとのページ（/verify/{method}/）。カードは一覧と同じ部品を使う。必須を先、任意を後に
function verifyPage(m, lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const V = VERIFY[m];
  const title = `${V.title[lang]} | ${L.title}`;
  const { req, opt } = byMethod(m);
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: V.name[lang], item: verifyAbs(lang, m) },
    ],
  };
  const section = (h, list) => list.length ? `<section class="vsec"><h2>${esc(h)}<span class="dot">${list.length}</span></h2><div class="grid">${list.map(s => card(s, lang)).join('\n')}</div></section>` : '';
  const others = verifyPages.filter(x => x !== m).map(x => `<a href="${verifyPath(lang, x)}" dir="auto">${esc(VERIFY[x].name[lang])}</a>`).join('');
  const intro = V.intro[lang] || V.intro.en;
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li aria-current="page">${esc(V.name[lang])}</li></ol></nav>
<main class="vmain">
<header class="orgs-head"><p class="eyebrow">VERIFICATION</p><h1>${esc(V.title[lang])}</h1>${intro ? `<p class="orgs-intro">${esc(intro)}</p>` : ''}</header>
${section(L.verifyReqH, req)}
${section(L.verifyOptH, opt)}
<nav class="vchips vother" aria-label="${esc(L.verifyAll)}">${others}</nav>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title, desc: (intro || V.title[lang]).slice(0, 160), hrefFor: l => verifyAbs(l, m), pathFor: l => verifyPath(l, m), ld, ogType: 'website', body, script: copyScript(L), pr: true });
}

// ---- 終了したサービスの墓場（/graveyard/）。終了が確かめられたものだけ。紹介ボタンや sponsored は付けない
const TOMB = '<svg class="tomb" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 30V13a8 8 0 0 1 16 0v17zm2-2h12V13a6 6 0 0 0-12 0zm5-15h2v3h3v2h-3v6h-2v-6h-3v-2h3zM4 30h24v2H4z"/></svg>';
function graveyardPage(lang) {
  const L = T[lang];
  const home = urlPath(lang);
  const title = `${L.graveTitle} | ${L.title}`;
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.brandPlain, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: L.graveTitle, item: graveAbs(lang) },
    ],
  };
  const rows = GRAVE.map(g => {
    const svc = g.svc && live.find(x => x.id === g.svc);
    return `<li class="grave" id="grave-${g.id}">${TOMB}<div class="grave-body"><h2 dir="auto">${esc(g.name)}</h2>
<dl><dt>${esc(L.graveWhat)}</dt><dd>${esc(g.what[lang] || g.what.en)}</dd><dt>${esc(L.graveEnded)}</dt><dd><time datetime="${esc(g.endedOn)}">${esc(g.ended[lang] || g.ended.en)}</time></dd><dt>${esc(L.graveWhy)}</dt><dd>${esc(g.why[lang] || g.why.en)}</dd><dt>${esc(L.graveSource)}</dt><dd><a href="${esc(g.source)}" target="_blank" rel="noopener" dir="auto">${esc(g.sourceLabel)}</a></dd></dl>${svc ? `<a class="org-svc" href="${svcPath(lang, svc)}">${esc(L.graveOnSite)}: ${esc(sName(svc, lang))}</a>` : ''}</div></li>`;
  }).join('\n');
  const body = `<nav class="crumbs" aria-label="${esc(L.crumbLabel)}"><ol><li><a href="${home}">${esc(L.brandPlain)}</a></li><li aria-current="page">${esc(L.graveTitle)}</li></ol></nav>
<main class="orgs">
<header class="orgs-head"><p class="eyebrow" dir="ltr">R.I.P.</p><h1>${esc(L.graveTitle)}</h1><p class="orgs-intro">${esc(L.graveIntro)}</p></header>
<ul class="graves">${rows}</ul>
<p class="back"><a class="btn line" href="${home}#list">${RTL.has(lang) ? '→' : '←'} ${esc(L.backList)}</a></p>
</main>`;
  return shell(lang, { title, desc: L.graveDesc, hrefFor: graveAbs, pathFor: gravePath, ld, ogType: 'website', body });
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
  const gdir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'graveyard');
  fs.mkdirSync(gdir, { recursive: true });
  fs.writeFileSync(path.join(gdir, 'index.html'), graveyardPage(lang));
  const edir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'essays');
  fs.mkdirSync(edir, { recursive: true });
  fs.writeFileSync(path.join(edir, 'index.html'), essaysIndex(lang));
  for (const e of ESSAYS) {
    fs.mkdirSync(path.join(edir, e.id), { recursive: true });
    fs.writeFileSync(path.join(edir, e.id, 'index.html'), essayPage(e, lang));
  }
  const tdir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'timeline');
  fs.mkdirSync(tdir, { recursive: true });
  fs.writeFileSync(path.join(tdir, 'index.html'), timelinePage(lang));
  for (const m of verifyPages) {
    const vdir = path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'verify', m);
    fs.mkdirSync(vdir, { recursive: true });
    fs.writeFileSync(path.join(vdir, 'index.html'), verifyPage(m, lang));
  }
}

// SNS 用の画像（node og.js で src/og/ に作る）をそのままコピー
const OG_SRC = path.join(__dirname, 'src/og');
if (fs.existsSync(OG_SRC)) fs.cpSync(OG_SRC, path.join(OUT, 'og'), { recursive: true });

// ---- RSS 2.0（更新履歴 NEWS から）。guid は日付と英語の文から作るので、文が変わらないかぎり毎回同じ
const xesc = t => String(t).replace(/[\u2066-\u2069]/g, '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
function newsLink(n, lang) {
  const en = n.en || '';
  if (/essay/i.test(en)) return essayAbs(lang, ESSAYS[0]);
  if (/timeline/i.test(en)) return tlAbs(lang);
  if (/verification method/i.test(en)) return verifyAbs(lang, 'world-id');
  if (/graveyard/i.test(en)) return graveAbs(lang);
  if (/organizations/i.test(en)) return orgAbs(lang);
  if (/German version/i.test(en)) return abs('de');
  const svc = live.slice().sort((a, b) => (b.nameEn || b.name).length - (a.nameEn || a.name).length)
    .find(x => en.includes((x.nameEn || x.name).split(' (')[0]) || en.includes(x.name.split('（')[0]));
  if (svc) return svcAbs(lang, svc);
  return abs(lang);
}
function feedXml(lang) {
  const L = T[lang];
  const items = NEWS.map(n => {
    const title = n[lang] || n.en;
    const link = newsLink(n, lang);
    const guid = 'news-' + n.date + '-' + crypto.createHash('sha1').update(n.date + '|' + n.en).digest('hex').slice(0, 12);
    const svc = live.find(x => link === svcAbs(lang, x));
    const desc = svc ? `${title}: ${(svc[lang] || svc.en).gain}` : title;
    return `    <item>
      <title>${xesc(title)}</title>
      <link>${xesc(link)}</link>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${new Date(n.date + 'T00:00:00Z').toUTCString()}</pubDate>
      <description>${xesc(desc)}</description>
    </item>`;
  }).join('\n');
  const last = new Date((NEWS[0] || { date: '2026-01-01' }).date + 'T00:00:00Z').toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xesc(L.title)}</title>
    <link>${xesc(abs(lang))}</link>
    <description>${xesc(L.metaDesc)}</description>
    <language>${LANG_TAG[lang]}</language>
    <lastBuildDate>${last}</lastBuildDate>
    <atom:link href="${xesc(feedAbs(lang))}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}
for (const lang of LANGS) fs.writeFileSync(path.join(OUT, lang === DEFAULT_LANG ? '' : lang, 'feed.xml'), feedXml(lang));

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
${[sitemapUrls(abs), sitemapUrls(orgAbs), sitemapUrls(graveAbs), sitemapUrls(tlAbs), sitemapUrls(essaysAbs), ...ESSAYS.map(e => sitemapUrls(l => essayAbs(l, e))), ...verifyPages.map(m => sitemapUrls(l => verifyAbs(l, m))), ...live.map(s => sitemapUrls(l => svcAbs(l, s)))].join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
// ---- オープンデータ: 表示中のサービスと墓場を JSON で。data/（リポジトリに入れる）と public/（サイトで配る）の両方へ
// generatedAt は確認月の最新値にして、中身が変わらないかぎり再ビルドで差分が出ないようにする
const clean = t => String(t).replace(/[\u2066-\u2069\u200e\u200f\u202a-\u202e]/g, '');
const DATA_LICENSE = 'CC BY 4.0 (referral links excluded)';
const REGION = s => (s.onlyIn ? `only-${s.onlyIn}` : s.global ? 'global' : 'japan-only');
const byId = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
const latest = [...live.map(s => s.checked)].sort().pop();
const servicesJson = {
  name: 'Free Lunch Lab services',
  description: 'Apps and projects that pay you basic income just for existing, as listed on Free Lunch Lab. Hidden entries are excluded.',
  source: SITE_URL + '/',
  repository: 'https://github.com/eltociear/free-lunch-lab',
  license: DATA_LICENSE,
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  generatedAt: latest,
  languages: LANGS,
  count: live.length,
  services: live.slice().sort(byId).map(s => ({
    id: s.id,
    name: clean(s.nameEn || s.name),
    nameJa: s.name,
    category: s.cat,
    categoryName: clean(CATS.en[s.cat]),
    payout: s.type,
    officialUrl: s.official,
    referral: s.ref || s.code ? { url: s.ref || null, code: s.code || null, note: "Maintainer's referral link; not covered by the content license" } : null,
    region: REGION(s),
    availableFromJapan: !s.onlyIn,
    verify: (s.verify || []).map(v => ({ method: v.method, optional: !!v.optional })),
    trust: s.trust || null,
    ease: s.ease ?? null,
    added: s.added || null,
    checked: s.checked,
    pageUrl: svcAbs(DEFAULT_LANG, s),
    pageUrls: Object.fromEntries(LANGS.map(l => [l, svcAbs(l, s)])),
    descriptions: Object.fromEntries(LANGS.filter(l => s[l]).map(l => [l, Object.fromEntries(['gain', 'note', 'need', 'caution'].filter(k => s[l][k]).map(k => [k, clean(s[l][k])]))])),
  })),
};
const graveJson = {
  name: 'Free Lunch Lab graveyard',
  description: 'Basic-income-style programs that have ended, each with an official or credible source.',
  source: graveAbs(DEFAULT_LANG),
  repository: 'https://github.com/eltociear/free-lunch-lab',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  generatedAt: [...GRAVE.map(g => g.endedOn)].sort().pop() || null,
  count: GRAVE.length,
  graveyard: GRAVE.slice().sort(byId).map(g => ({
    id: g.id,
    name: clean(g.name),
    endedOn: g.endedOn,
    sourceUrl: g.source,
    sourceLabel: clean(g.sourceLabel),
    pageUrl: graveAbs(DEFAULT_LANG) + '#grave-' + g.id,
    serviceId: g.svc || null,
    descriptions: Object.fromEntries(LANGS.map(l => [l, Object.fromEntries(['what', 'ended', 'why'].filter(k => g[k] && g[k][l]).map(k => [k, clean(g[k][l])]))])),
  })),
};
const DATA_DIR = path.join(__dirname, 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });
for (const [file, obj] of [['services.json', servicesJson], ['graveyard.json', graveJson]]) {
  const txt = JSON.stringify(obj, null, 2) + '\n';
  fs.writeFileSync(path.join(DATA_DIR, file), txt);
  fs.writeFileSync(path.join(OUT, file), txt);
}

// ---- llms.txt / llms-full.txt（llmstxt.org の形式）。英語のみ、絶対 URL。日付は確認月の最新値なので再ビルドで差分が出ない
const REPO_URL = 'https://github.com/eltociear/free-lunch-lab';
const md = t => clean(t).replace(/\s+/g, ' ').trim();
const mdLink = t => md(t).replace(/[[\]]/g, '');
const firstSentence = t => { const m = md(t).match(/^.*?[.!?](?=\s|$)/); return m ? m[0].replace(/[.!?]$/, '') : md(t); };
const regionEn = s => s.onlyIn ? `${T.en['only_' + s.onlyIn]}, not available from Japan` : s.global ? 'available in Japan and worldwide' : 'Japan only';
const verifyEn = s => (s.verify || []).length ? s.verify.map(v => md(VERIFY[v.method].name.en) + (v.optional ? ' (optional)' : '')).join(', ') : 'not specified';
const llmsHead = full => `# Free Lunch Lab

> Free Lunch Lab ("There is such a thing as a free lunch.") is a curated directory of apps and projects that pay you a basic income or rewards just for existing: crypto UBI, passive apps, cashback and more. Every entry links to its official source and has a "last checked" month, and the risks and cautions are listed next to the rewards. The site is available in ${LANGS.length} languages (${LANGS.join(', ')}).

- Referral links: some sign-up links are the maintainer's referral links. They are marked in the data (\`referral\` in services.json)${full ? ' and labelled "Referral link" below' : ''}; official URLs are always given too.
- License: content is CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/), referral links excluded.
- Data last checked: ${latest}
- ${full ? `Short index: ${SITE_URL}/llms.txt` : `Full text: ${SITE_URL}/llms-full.txt`}
`;
const llmsTxt = `${llmsHead(false)}
## Data

- [services.json](${SITE_URL}/services.json): all visible services as JSON, with descriptions in every language, region, verification, trust check and referral info
- [graveyard.json](${SITE_URL}/graveyard.json): ended basic-income-style programs, each with a source
${LANGS.map(l => `- [RSS feed (${l})](${feedAbs(l)}): update log in ${LANG_NAMES[l] === 'EN' ? 'English' : LANG_NAMES[l]}`).join('\n')}

## Services

${live.map(s => `- [${mdLink(s.nameEn || s.name)}](${svcAbs(DEFAULT_LANG, s)}): ${md(s.en.gain)}. ${firstSentence(s.en.note)} (${md(CATS.en[s.cat])}; ${regionEn(s)}; verification: ${verifyEn(s)})`).join('\n')}

## Guides

${verifyPages.map(m => `- [${mdLink(VERIFY[m].title.en)}](${verifyAbs(DEFAULT_LANG, m)}): services that use ${md(VERIFY[m].name.en)}`).join('\n')}
- [${md(T.en.orgsH1)}](${orgAbs(DEFAULT_LANG)}): ${md(T.en.orgsDesc)}
- [${md(T.en.tlTitle)}](${tlAbs(DEFAULT_LANG)}): ${md(T.en.tlDesc)}
- [${md(T.en.graveTitle)}](${graveAbs(DEFAULT_LANG)}): ${md(T.en.graveDesc)}
${ESSAYS.map(e => `- [Essay: ${mdLink(e.title.en)}](${essayAbs(DEFAULT_LANG, e)}): ${md(e.desc.en)}`).join('\n')}

## Other languages

${LANGS.filter(l => l !== DEFAULT_LANG).map(l => `- [${LANG_NAMES[l]}](${abs(l)})`).join('\n')}

## Optional

- [GitHub repository](${REPO_URL}): source code and data
- [X: @FreeLunchLab](https://x.com/FreeLunchLab)
- [CONTRIBUTING](${REPO_URL}/blob/main/CONTRIBUTING.md): how to suggest or correct a service
`;
const TRUSTK = [['cash', 'Cash out'], ['price', 'Market price'], ['operator', 'Public operator']];
const svcFull = s => {
  const d = s.en;
  const trustLine = s.trust ? TRUSTK.filter(([k]) => s.trust[k] && s.trust[k] !== 'na').map(([k, n]) => `${n}: ${T.en[TV[s.trust[k]]]}`).join('; ') : '';
  return [
    `### ${md(s.nameEn || s.name)}`,
    '',
    `- Page: ${svcAbs(DEFAULT_LANG, s)}`,
    `- Category: ${md(CATS.en[s.cat])}`,
    `- Payout: ${s.type === 'loop' ? 'recurring' : 'one-time'}`,
    `- Region: ${regionEn(s)}`,
    `- Verification: ${verifyEn(s)}`,
    ...(trustLine ? [`- Trust check: ${trustLine}`] : []),
    `- Last checked: ${s.checked}`,
    `- Official URL: ${s.official}`,
    ...(s.ref ? [`- Referral link (maintainer's own referral; not covered by the content license): ${s.ref}`] : []),
    ...(s.code ? [`- Referral code (maintainer's own): ${s.code}`] : []),
    '',
    md(d.note),
    '',
    `What you get: ${md(d.gain)}`,
    '',
    `What you need: ${md(d.need)}`,
    ...(d.caution ? ['', `Cautions: ${md(d.caution)}`] : []),
  ].join('\n');
};
const essayFull = e => [
  `### ${md(e.title.en)}`,
  '',
  `- Page: ${essayAbs(DEFAULT_LANG, e)}`,
  `- Published: ${e.date}`,
  '',
  ...e.blocks.en.map(([k, t]) => k === 'h' ? `#### ${md(t)}` : k === 'o' ? `Opinion: ${md(t)}` : md(t)).flatMap(x => [x, '']),
  'Sources:',
  '',
  ...e.sources.map(s => `${s.n}. ${md(s.label)}: ${s.url}${s.url2 ? ` (also ${s.url2})` : ''}`),
].join('\n');
const graveFull = g => [
  `### ${md(g.name)}`,
  '',
  `- Ended: ${g.endedOn}`,
  `- Source: ${md(g.sourceLabel)}, ${g.source}`,
  `- Page: ${graveAbs(DEFAULT_LANG)}#grave-${g.id}`,
  ...['what', 'ended', 'why'].filter(k => g[k] && g[k].en).flatMap(k => ['', `${{ what: 'What it was', ended: 'Ended', why: 'Why' }[k]}: ${md(g[k].en)}`]),
].join('\n');
const llmsFull = `${llmsHead(true)}
## Services

${live.map(svcFull).join('\n\n')}

## Essays

${ESSAYS.map(essayFull).join('\n\n')}

## Graveyard

${md(T.en.graveIntro)}

${GRAVE.map(graveFull).join('\n\n')}
`;
for (const [file, txt] of [['llms.txt', llmsTxt], ['llms-full.txt', llmsFull]]) {
  if (/[⁦-⁩‎‏‪-‮]/.test(txt)) throw new Error(`${file}: bidi control characters left`);
  fs.writeFileSync(path.join(OUT, file), txt);
}
// Cloudflare の静的アセットは .txt を charset なしの text/plain で返すので、_headers で utf-8 を明示する（_headers 自体は配信されない）
fs.writeFileSync(path.join(OUT, '_headers'), ['/llms.txt', '/llms-full.txt'].map(p => `${p}\n  Content-Type: text/plain; charset=utf-8\n`).join(''));

// README.md のサービス表・団体一覧も同期する
require('./readme.js').updateReadme();
console.log(`built ${LANGS.length} pages + ${LANGS.length * live.length} service pages + ${LANGS.length} organization pages, ${live.length} services shown (${SERVICES.length - live.length} hidden)`);
