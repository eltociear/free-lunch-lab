// 就業者負担軽減支援金のページ（/guides/worker-relief-payment/）の計算機。CLIENT はブラウザで動く ES5 のコードで、build.js も同じコードを vm で動かして
// 最初の状態の HTML を書き出し、ビルド時の照合にも使う。数字は data/worker-relief-2026.json から build.js が D に入れて渡す（このファイルに金額や税率は書かない）
//
// 計算（年額）:
//   支援金 = 1人あたりの最大額（検討中）× 対象になりうる働く大人 + 子ども1人あたりの加算（検討中）× 16歳未満の子ども
//   食料品の消費税の軽減 = 家で食べる食料品の支出（月・税込み）× (いまの税率 − 下げたあとの税率) / (100 + いまの税率) × 12
//     （8% → 1% なら 7/108。税込みの値段が、下がった税率の分だけそのまま下がると仮定）
//   合計 = 支援金 + 軽減
//   比較の行: 全員に月 D.bi 円のベーシックインカム = D.bi × 12 × (働く大人 + 子ども + そのほかの家族)
const vm = require('vm');

const CLIENT = String.raw`
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function fill(t, o) { return String(t).replace(/\{(\w+)\}/g, function (m, k) { return k in o ? o[k] : m; }); }
// ar では数字の並びを LRI/PDI で囲む
function iso(s) { return LANG === 'ar' ? '⁦' + s + '⁩' : String(s); }
function grp(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, D.fmt.sep); }
// 日本語・中国語は「◯万◯円」の形（わが家のBI計算機と同じ）、ほかは「¥n,nnn」「n.nnn yenes」の形
function man(n) { var m = Math.floor(n / 10000), r = n % 10000; return (m ? m + '万' : '') + (r || !m ? r : '') + D.fmt.cur; }
function yen(n) { n = Math.round(Math.abs(n)); return D.fmt.man ? man(n) : fill(D.fmt.yen, { n: iso(grp(n)) }); }
function int(v, lo, hi, d) { v = parseInt(v, 10); return isNaN(v) ? d : Math.max(lo, Math.min(hi, v)); }
var LIM = { w: [0, 10], c: [0, 10], o: [0, 10] };
// URL の ?w=&c=&o=&f= を確かめて状態にする（おかしな値は範囲に収めるか既定に戻す）
function parse(q) {
  var d = D.def;
  return { w: int(q.w, 0, 10, d.w), c: int(q.c, 0, 10, d.c), o: int(q.o, 0, 10, d.o), f: int(q.f, 0, 2000000, d.f) };
}
function query(s) { return 'w=' + s.w + '&c=' + s.c + (s.o ? '&o=' + s.o : '') + '&f=' + s.f; }
function calc(s) {
  var pay = D.perWorker * s.w + D.perChild * s.c;
  var food = Math.round(s.f * 12 * (D.rateNow - D.rateCut) / (100 + D.rateNow));
  return { pay: pay, food: food, total: pay + food, bi: D.bi * 12 * (s.w + s.c + s.o), n: s.w + s.c + s.o };
}
function stepper(f, label, v, hint) {
  return '<div class="hh-st"><span class="hh-st-l" id="wrL' + f + '">' + esc(label) + (hint ? '<small>' + esc(hint) + '</small>' : '') + '</span>'
    + '<span class="hh-st-c" role="group" aria-labelledby="wrL' + f + '">'
    + '<button type="button" class="hh-sb" data-f="' + f + '" data-d="-1" aria-label="' + esc(fill(L.minus, { what: label })) + '"' + (v <= LIM[f][0] ? ' disabled' : '') + '>−</button>'
    + '<output class="hh-sv">' + v + '</output>'
    + '<button type="button" class="hh-sb" data-f="' + f + '" data-d="1" aria-label="' + esc(fill(L.plus, { what: label })) + '"' + (v >= LIM[f][1] ? ' disabled' : '') + '>+</button></span></div>';
}
function controls(s) {
  return '<fieldset class="cx-f"><legend>' + esc(L.family) + '</legend><div class="hh-sts">'
    + stepper('w', L.workers, s.w, L.workersHint)
    + stepper('c', L.kids, s.c, L.kidsHint)
    + stepper('o', L.others, s.o, L.othersHint) + '</div></fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.food) + '</legend>'
    + '<label class="cx-own"><span class="cx-own-l">' + esc(L.foodL) + '</span><span class="cx-own-in"><input class="cx-num" name="f" type="number" inputmode="numeric" min="0" max="2000000" step="1000" value="' + s.f + '"><span class="cx-cur">' + esc(D.fmt.unit) + '</span></span></label>'
    + '<p class="hh-note">' + esc(L.foodHint) + '</p></fieldset>';
}
function row(label, sub, v, cls) {
  return '<div' + (cls ? ' class="' + cls + '"' : '') + '><dt>' + esc(label) + (sub ? '<small>' + sub + '</small>' : '') + '</dt><dd>' + esc(yen(v)) + '</dd></div>';
}
function result(s) {
  var r = calc(s);
  var payF = fill(L.payF, { a: yen(D.perWorker), w: iso(s.w), k: yen(D.perChild), c: iso(s.c) });
  var foodF = fill(L.foodF, { f: yen(s.f), d: iso(D.rateNow - D.rateCut), b: iso(100 + D.rateNow) });
  var biF = fill(L.biF, { m: yen(D.bi), n: iso(r.n) });
  return '<p class="eyebrow">' + esc(L.resEb) + '</p>'
    + '<p class="hh-bk hh-even">' + esc(L.status) + '</p>'
    + '<p class="hh-main"><b id="wrTotal">' + esc(fill(L.year, { n: yen(r.total) })) + '</b></p>'
    + '<p class="hh-rg">' + esc(L.totalSub) + '</p>'
    + '<dl class="hh-brk">'
    + row(L.payH, esc(payF), r.pay)
    + row(L.foodH, esc(foodF), r.food)
    + row(L.totalH, '', r.total, 'net') + '</dl>'
    + '<p class="hh-now">' + esc(L.payNote) + '</p>'
    + '<p class="hh-now">' + esc(L.foodNote) + '</p>'
    + '<h2 class="cx-cmph hh-h">' + esc(L.biH) + '</h2><dl class="hh-brk">' + row(L.biRow, esc(biF), r.bi) + '</dl>'
    + '<p class="hh-now">' + esc(L.biNote) + '</p>';
}
`;

// ブラウザ側: 入力のたびに結果と URL を書き換える
const BOOT = String.raw`
(function(){
  var form = document.getElementById('wr'), ctl = document.getElementById('wrCtl'), res = document.getElementById('wrRes'), live = document.getElementById('wrLive');
  var q = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) try { q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); } catch (e) {} });
  var s = parse(q), mark = /^[\w-]{1,32}$/.test(q.s || '') ? q.s : '';
  function draw(all, quiet) {
    var a = document.activeElement, k = a && ctl.contains(a) && a.getAttribute('data-f') ? '[data-f="' + a.getAttribute('data-f') + '"][data-d="' + a.getAttribute('data-d') + '"]' : null;
    if (all) ctl.innerHTML = controls(s);
    res.innerHTML = result(s);
    if (k) { var el = ctl.querySelector(k); if (el && el.disabled) el = el.parentNode.querySelector('.hh-sb:not([disabled])'); if (el) el.focus(); }
    if (!quiet) { try { history.replaceState(null, '', location.pathname + '?' + query(s) + (mark ? '&s=' + mark : '') + location.hash); } catch (e) {} live.textContent = fill(L.year, { n: yen(calc(s).total) }); }
  }
  ctl.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.hh-sb') : null;
    if (!b || b.disabled) return;
    var f = b.getAttribute('data-f');
    s[f] = Math.max(LIM[f][0], Math.min(LIM[f][1], s[f] + (+b.getAttribute('data-d'))));
    draw(true);
  });
  form.addEventListener('input', function (e) {
    var t = e.target;
    if (t.name !== 'f') return;
    var v = parseInt(t.value, 10);
    if (t.value === '') v = 0;
    if (isNaN(v) || v < 0 || v > 2000000) return;
    s.f = v; draw(false);
  });
  form.classList.add('on');
  draw(true, !/[?&](w|c|o|f)=/.test(location.search));
})();
`;

// build.js 用: 言語ごとに1つの vm（ブラウザと同じコード）
function context(lang, D, L) {
  const ctx = vm.createContext({ D, L, LANG: lang });
  vm.runInContext(CLIENT, ctx);
  const call = (fn, ...args) => { ctx.__a = JSON.parse(JSON.stringify(args)); return JSON.parse(JSON.stringify(vm.runInContext(`${fn}.apply(null, __a)`, ctx))); };
  return {
    parse: q => call('parse', q),
    controls: s => call('controls', s),
    result: s => call('result', s),
    calc: s => call('calc', s),
    query: s => call('query', s),
    yen: n => call('yen', n),
  };
}
module.exports = { CLIENT, BOOT, context };
