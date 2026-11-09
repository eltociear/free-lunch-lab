// BI計算機（/calc/）の計算と描画。CLIENT はブラウザで動く ES5 のコードで、build.js も同じコードを vm で動かして
// 最初の状態（言語ごとの既定の国・全員・既定の月額）の HTML を書き出す。JS が無くても最初の結果は読める
// 数字は CALC（data.js）だけから取る。年額 = 人数 × 月額 × 12
const vm = require('vm');

const CLIENT = String.raw`
var WHO = ['all', 'adults', 'kids'];
// 国のページ（/calc/{国}/）では、その国に固定する（URL に c= を入れない）。ほかのページと build.js の vm では null
var PAGE_C;
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function fill(t, o) { return t.replace(/\{(\w+)\}/g, function (m, k) { return k in o ? o[k] : m; }); }
function nf(n, o) { return new Intl.NumberFormat(LOC, o).format(n); }
function units() { return L.calcUnits.split('|').map(function (x) { var p = x.split(':'); return [+p[0], p[1]]; }); }
// 大きな数は「44.2兆」「4.17 trillion」のように有効数字3桁 + 単位。単位より小さければ null
function withUnit(n) {
  var u = units();
  for (var i = 0; i < u.length; i++) if (n >= u[i][0]) return { n: nf(n / u[i][0], { maximumSignificantDigits: 3 }), unit: u[i][1] };
  return null;
}
var TIGHT = L.calcMoney.indexOf('{n}{unit}') >= 0;
// World Bank から足した国（c.plain）は、小さな金額も記号でなく「240 Brazilian reals」のように通貨名で書く（記号はフォントにない字が多い）
function money(n, c) {
  var w = withUnit(n);
  if (w) return fill(L.calcMoney, { n: w.n, unit: w.unit, cur: c.cur[LANG] });
  if (c.plain) return fill(L.calcMoneyPlain, { n: nf(n, { maximumFractionDigits: n % 1 ? 2 : 0 }), cur: c.cur[LANG] });
  return nf(n, { style: 'currency', currency: c.currency, currencyDisplay: 'narrowSymbol', maximumFractionDigits: n % 1 ? 2 : 0 });
}
function num(n) {
  var w = withUnit(n);
  return w ? w.n + (TIGHT ? '' : ' ') + w.unit : nf(n);
}
function people(n) { return fill(L.calcPeople, { n: num(n) }); }
// 米ドル換算（GDP の米ドル ÷ 現地通貨、同じ年）。c.usd がなければ null
function usd(n, c) {
  if (!c.usd || c.currency === 'USD') return null;
  return money(n * c.usd, { currency: 'USD', cur: (function () { var o = {}; o[LANG] = L.calcUsdCur; return o; })() });
}
function pct(r) {
  return nf(r, r < 0.1 ? { style: 'percent', maximumSignificantDigits: 2 } : r < 1 ? { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 } : { style: 'percent', maximumFractionDigits: 0 });
}
function country(id) { for (var i = 0; i < D.countries.length; i++) if (D.countries[i].id === id) return D.countries[i]; return null; }
// URL の ?c=&w=&m= を確かめて状態にする。おかしな値は既定に戻す
function parse(q) {
  var c = (PAGE_C && country(PAGE_C)) || country(q.c) || country(D.defaults[LANG]);
  var w = WHO.indexOf(q.w) >= 0 ? q.w : 'all';
  var m = parseFloat(q.m);
  if (!(m > 0 && m <= 1e9)) m = c.def;
  return { c: c.id, w: w, m: Math.round(m * 100) / 100 };
}
function query(s) { return (PAGE_C ? '' : 'c=' + s.c + '&') + 'w=' + s.w + '&m=' + s.m; }
function compute(s) {
  var c = country(s.c), p = c.pop;
  var n = s.w === 'adults' ? p.adults : s.w === 'kids' ? p.kids : p.all;
  var total = n * s.m * 12;
  var rows = [];
  if (c.budget) {
    rows.push({ label: L.calcCmpBudget, r: total / c.budget.total, year: D.sources[c.budget.src].year });
    rows.push({ label: L.calcCmpSocial, r: total / c.budget.social, year: D.sources[c.budget.src].year });
    rows.push({ label: L.calcCmpTax, r: total / c.budget.tax, year: D.sources[c.budget.src].year });
  } else if (c.gov) {
    // World Bank の中央政府の数字（その年の GDP 比）を、最新の GDP にかけてくらべる
    [['exp', L.calcCmpGovExp], ['rev', L.calcCmpGovRev], ['tax', L.calcCmpGovTax]].forEach(function (g) {
      var x = c.gov[g[0]];
      if (x) rows.push({ label: g[1], r: total / (c.gdp.value * x.p / 100), year: String(x.year) });
    });
  }
  rows.push({ label: L.calcCmpGdp, r: total / c.gdp.value, year: String(c.gdp.year) });
  var who = s.w === 'adults' ? fill(L.calcShareAdults, { age: p.adultAge }) : s.w === 'kids' ? fill(L.calcShareKids, { age: p.kidAge }) : L.calcShareAll;
  // シェアの文は国をまたいで比べられるよう GDP 比だけを書く（予算との比は画面とカードに出す）
  var share = fill(L.calcShare, { country: (c.inName && c.inName[LANG]) || c.name[LANG], who: who, amount: money(s.m, c), total: money(total, c), pct: pct(total / c.gdp.value) });
  return { c: c, n: n, total: total, rows: rows, share: share };
}
// シェア用の URL（?s=calc で X などからの訪問を数える）と、X に入れる文（結果の文・問いかけ・URL・ハッシュタグ1つ）
function shareUrl(s, url) { return url + '?' + query(s) + '&s=calc'; }
function shareText(s, url) {
  var share = compute(s).share;
  return share + (/[。？！]$/.test(share) ? '' : ' ') + L.calcAsk + '\n' + shareUrl(s, url) + ' ' + L.calcTag;
}
function whoLabel(w, c) { return w === 'adults' ? fill(L.calcWhoAdults, { age: c.pop.adultAge }) : w === 'kids' ? fill(L.calcWhoKids, { age: c.pop.kidAge }) : L.calcWhoAll; }
// 結果カード（og.js が作る画像と、Worker が差し替える og:title / og:description）の文字
function card(s) {
  var r = compute(s), c = r.c, f = fill(L.calcFormula, { people: people(r.n), amount: money(s.m, c) });
  return { title: r.share, desc: f + ' ' + L.calcAsk, total: money(r.total, c), formula: f, place: c.name[LANG], who: whoLabel(s.w, c), rows: r.rows.map(function (x) { return [x.label, pct(x.r)]; }) };
}
function chip(name, value, label, on) {
  return '<label class="cx-chip"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (on ? ' checked' : '') + '><span>' + esc(label) + '</span></label>';
}
// 国: 手で調べた国（featured）はチップ、全部の国は地域ごとのプルダウン（D.groups、build.js が言語ごとに並べる）
function controls(s) {
  var c = country(s.c), n = 0;
  var opts = (D.groups || []).map(function (g) {
    n += g.ids.length;
    return '<optgroup label="' + esc(g.label) + '">' + g.ids.map(function (id) { var x = country(id); return '<option value="' + id + '"' + (id === s.c ? ' selected' : '') + '>' + esc(x.name[LANG]) + '</option>'; }).join('') + '</optgroup>';
  }).join('');
  var feat = D.countries.filter(function (x) { return x.featured; });
  var on = feat.some(function (x) { return x.id === s.c; });
  return '<fieldset class="cx-f"><legend>' + esc(L.calcCountry) + '</legend><div class="cx-chips">' + feat.map(function (x) { return chip('c', x.id, x.name[LANG], x.id === s.c); }).join('') + '</div>'
    + (opts ? '<select class="cx-sel' + (on ? '' : ' on') + '" name="c" aria-label="' + esc(fill(L.calcOther, { n: n })) + '"><option value=""' + (on ? ' selected' : '') + '>' + esc(fill(L.calcOther, { n: n })) + '</option>' + opts + '</select>' : '') + '</fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.calcWho) + '</legend><div class="cx-chips">' + WHO.map(function (w) { return chip('w', w, whoLabel(w, c), w === s.w); }).join('') + '</div></fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.calcAmount) + '</legend><div class="cx-chips">' + c.presets.map(function (v) { return chip('m', v, money(v, c), v === s.m); }).join('') + '</div>'
    + '<label class="cx-own"><span class="cx-own-l">' + esc(L.calcCustom) + '</span><span class="cx-own-in"><input class="cx-num" id="cxNum" type="number" inputmode="decimal" min="0" max="1000000000" step="any" value="' + s.m + '"><span class="cx-cur">' + esc(c.currency) + '</span></span></label></fieldset>';
}
function result(s, url) {
  var r = compute(s), c = r.c;
  var x = 'https://x.com/intent/post?text=' + encodeURIComponent(shareText(s, url));
  return '<p class="eyebrow">' + esc(L.calcResultEb) + '</p>'
    + '<p class="cx-total" id="cxTotal">' + esc(money(r.total, c)) + '</p>'
    + (usd(r.total, c) ? '<p class="cx-usd">' + esc(fill(L.calcUsd, { usd: usd(r.total, c) })) + '</p>' : '')
    + '<p class="cx-formula">' + fill(esc(L.calcFormula), { people: '<bdi>' + esc(people(r.n)) + '</bdi>', amount: '<bdi>' + esc(money(s.m, c)) + '</bdi>' }) + '</p>'
    + '<h2 class="cx-cmph">' + esc(L.calcCmpH) + '</h2>'
    + '<ul class="cx-rows">' + r.rows.map(function (row) {
      return '<li><div class="cx-row"><span>' + esc(row.label) + ' <small>(' + esc(row.year) + ')</small></span><b><bdi>' + esc(pct(row.r)) + '</bdi></b></div><span class="cx-bar" aria-hidden="true"><i style="width:' + Math.min(100, row.r * 100).toFixed(1) + '%"></i></span></li>';
    }).join('') + '</ul>'
    + (D.base && PAGE_C !== c.id ? '<p class="cx-cty"><a href="' + D.base + c.id + '/">' + esc(fill(L.calcCtyLink, { country: c.name[LANG] })) + '</a></p>' : '')
    + '<div class="qz-acts cx-acts"><a class="btn solid qz-x" id="cxX" href="' + esc(x) + '" target="_blank" rel="noopener">' + esc(L.calcShareX) + '</a>'
    + '<button class="btn line cx-copy" type="button" id="cxCopy" data-url="' + esc(shareUrl(s, url)) + '">' + esc(L.copyLink) + '</button></div>'
    + '<p class="cx-copied" id="cxCopied" role="status" aria-live="polite"></p>';
}
`;

// ブラウザ側: 選ぶたびに結果と URL を書き換える
const BOOT = String.raw`
(function(){
  var form = document.getElementById('cx'), ctl = document.getElementById('cxCtl'), res = document.getElementById('cxRes'), url = form.getAttribute('data-url');
  PAGE_C = form.getAttribute('data-c') || null;
  var q = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
  var s = parse(q);
  function draw(all) {
    if (all) ctl.innerHTML = controls(s);
    res.innerHTML = result(s, url);
    try { history.replaceState(null, '', location.pathname + '?' + query(s)); } catch (e) {}
  }
  if (location.search) draw(true);
  form.addEventListener('change', function (e) {
    var t = e.target;
    if (t.name === 'c') {
      var c = country(t.value);
      if (!c) return;
      // 国のページでは、その国のページへ移る（配る相手はそのまま）
      if (PAGE_C) { if (c.id !== PAGE_C) location.href = D.base + c.id + '/' + (s.w === 'all' ? '' : '?w=' + s.w); return; }
      var sel = t.tagName === 'SELECT';
      s = { c: c.id, w: s.w, m: c.def }; draw(true);
      var r = sel ? ctl.querySelector('select[name=c]') : ctl.querySelector('input[name=c]:checked'); if (r) r.focus();
    }
    else if (t.name === 'w') { s.w = t.value; draw(false); }
    else if (t.name === 'm') { s.m = +t.value; document.getElementById('cxNum').value = s.m; draw(false); }
  });
  // リンクをコピー（クリップボードが使えなければ、選んで写せるように出す）
  res.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('#cxCopy') : null;
    if (!b) return;
    var u = b.getAttribute('data-url'), out = document.getElementById('cxCopied');
    function done() { out.textContent = L.linkCopied; }
    function fallback() { try { prompt('', u); } catch (err) {} }
    try { navigator.clipboard.writeText(u).then(done, fallback); } catch (err) { fallback(); }
  });
  form.addEventListener('input', function (e) {
    if (e.target.id !== 'cxNum') return;
    var v = parseFloat(e.target.value);
    if (!(v > 0 && v <= 1e9)) return;
    s.m = Math.round(v * 100) / 100;
    [].forEach.call(ctl.querySelectorAll('input[name=m]'), function (r) { r.checked = +r.value === s.m; });
    draw(false);
  });
})();
`;

const LOCALE = { en: 'en', ja: 'ja', zh: 'zh-Hans', hi: 'hi-u-nu-latn', es: 'es', de: 'de', ar: 'ar-u-nu-latn' };
// build.js 用: その言語の最初の状態の HTML
function initial(lang, CALC, L, url, pageC = null) {
  const ctx = vm.createContext({ D: CALC, L, LANG: lang, LOC: LOCALE[lang], PAGE_C: pageC });
  vm.runInContext(CLIENT, ctx);
  const s = vm.runInContext('parse({})', ctx);
  ctx.__s = s; ctx.__u = url;
  return { controls: vm.runInContext('controls(__s)', ctx), result: vm.runInContext('result(__s, __u)', ctx), compute: q => { ctx.__q = q; return vm.runInContext('(function(){var r=compute(parse(__q));return {total:r.total,n:r.n,share:r.share,rows:r.rows.map(function(x){return [x.label,x.r,pct(x.r)]}),money:money(r.total,r.c)}})()', ctx); } };
}
// X の文字数（twitter-text の重み）: U+0000-10FF と一部の句読点は1、それ以外（CJK・絵文字など）は2、URL は23
const URL_RE = /https?:\/\/\S+/g;
function weighted(text) {
  let n = 0;
  for (const ch of text.replace(URL_RE, '')) { const c = ch.codePointAt(0); n += c <= 4351 || (c >= 8192 && c <= 8205) || (c >= 8208 && c <= 8223) || (c >= 8242 && c <= 8247) ? 1 : 2; }
  return n + (text.match(URL_RE) || []).length * 23;
}
// 結果カードを作る組み合わせ: 国 × 配る相手 × 国ごとのプリセット金額
const WHO = ['all', 'adults', 'kids'];
const cardId = s => `${s.c}-${s.w}-${s.m}`;
// その言語の全カードの文字と、X に入れる文。build.js（文字数の確認・Worker 用の JSON・フォントの文字）と og.js（画像）が使う
function cards(lang, CALC, L, url) {
  const ctx = vm.createContext({ D: CALC, L, LANG: lang, LOC: LOCALE[lang] });
  vm.runInContext(CLIENT, ctx);
  const out = [];
  for (const c of CALC.countries) for (const w of WHO) for (const m of c.presets) {
    ctx.__s = { c: c.id, w, m }; ctx.__u = url;
    out.push({ s: ctx.__s, id: cardId(ctx.__s), ...JSON.parse(vm.runInContext('JSON.stringify(card(__s))', ctx)), text: vm.runInContext('shareText(__s, __u)', ctx) });
  }
  return out;
}
// build.js 用: 言語ごとに1つの vm で、国のページの HTML と文の数字を作る（initial と同じコード）
function context(lang, CALC, L) {
  const ctx = vm.createContext({ D: CALC, L, LANG: lang, LOC: LOCALE[lang], PAGE_C: null });
  vm.runInContext(CLIENT, ctx);
  const call = (fn, ...args) => { ctx.__a = args; return vm.runInContext(`${fn}.apply(null, __a)`, ctx); };
  return {
    page(id, url) { ctx.PAGE_C = id; const s = call('parse', {}); const out = { s, controls: call('controls', s), result: call('result', s, url) }; ctx.PAGE_C = null; return out; },
    total: (id, w, m) => { ctx.PAGE_C = null; return call('compute', { c: id, w, m }).total; },
    money: (n, id) => call('money', n, call('country', id)),
    usd: (n, id) => call('usd', n, call('country', id)),
    num: n => call('num', n),
    pct: r => call('pct', r),
  };
}
module.exports = { CLIENT, BOOT, LOCALE, initial, context, cards, cardId, weighted };
