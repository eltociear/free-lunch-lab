// わが家のBI計算機（/calc/household/）の計算と描画。CLIENT はブラウザで動く ES5 のコードで、build.js も同じコードを vm で動かして
// 最初の状態（エッセイの「夫婦と小学生2人・年収500万円」）の HTML と、エッセイの5つの家計の表を書き出す（ビルド時の照合もこのコード）。
// 数字は HOUSEHOLD（data.js）だけから取る。結果は月額・増税の前。年額 = 月額 × 12
//
// 計算（月額）: BI = 月額 × 大人 + 子どもの額 × 子ども（子どもの額は「大人と同じ」か「原田案の月3万円」）
//   いまの給付 = 児童手当 + 年金 + 生活保護。BI になると児童手当はなくなり、年金は A そのまま / B 基礎年金だけ置き換え（上乗せ部分は残る）/ C すべて置き換え。
//   高所得者の返納（年収1000万円以上の世帯だけ）は「返さない」か「全額返す」。
//   生活保護は A 不足分を補う（新しい保護費 = max(0, いまの給付の合計 − (BI − 返納 + 残る年金))）か B 廃止。
//   差し引き = (BI − 返納 + 残る年金 + 新しい保護費) − (児童手当 + 年金 + 生活保護)
// 「基本の前提」はエッセイの真ん中の前提: 年金 B・生活保護 A・高所得者は全額返す・子どもも同じ額。範囲（前提しだいで）は、
// その家計にかかわる前提の組み合わせ全部の最小と最大
const vm = require('vm');

const BUCKETS = [['big-gain', 'bg'], ['gain', 'g'], ['even', 'e'], ['loss', 'l'], ['big-loss', 'bl']];

const CLIENT = String.raw`
var BK = { 'big-gain': 'bg', gain: 'g', even: 'e', loss: 'l', 'big-loss': 'bl' };
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function fill(t, o) { return String(t).replace(/\{(\w+)\}/g, function (m, k) { return k in o ? o[k] : m; }); }
// ar では、数字の並び（符号つき）を LRI/PDI で囲む
function iso(s) { return LANG === 'ar' ? '⁦' + s + '⁩' : String(s); }
function grp(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, D.fmt.sep); }
// 日本語・中国語は「9万7279円」の形、ほかは「¥97,279」「97.279 yenes」の形
function man(n) { var m = Math.floor(n / 10000), r = n % 10000; return (m ? m + '万' : '') + (r || !m ? r : '') + D.fmt.cur; }
function yen(n) { n = Math.round(Math.abs(n)); return D.fmt.man ? man(n) : fill(D.fmt.yen, { n: iso(grp(n)) }); }
function sgn(n) {
  n = Math.round(n);
  var s = n > 0 ? '+' : n < 0 ? '−' : '±', a = Math.abs(n);
  if (D.fmt.man) return s + man(a);
  if (LANG === 'ar') return fill(D.fmt.yen, { n: iso(s + grp(a)) });
  return s + fill(D.fmt.yen, { n: grp(a) });
}
function opts(k) { return String(L[k]).split('|'); }
function int(v, lo, hi, d) { v = parseInt(v, 10); return isNaN(v) ? d : Math.max(lo, Math.min(hi, v)); }
// URL の ?a=&c=… を確かめて状態にする。おかしな値は範囲に収めるか既定に戻す。a= があれば、書いていない子どもの数は0
function parse(q) {
  var d = D.def, a = int(q.a, 1, 10, d.a), some = q.a != null;
  return {
    a: a, u: int(q.u, 0, Math.min(a - 1, 6), 0), k: int(q.k, 0, 6, some ? 0 : d.k), c: int(q.c, 0, 8, some ? 0 : d.c), i: int(q.i, 0, D.income.length - 1, d.i),
    p: int(q.p, 0, 4, 0), pb: int(q.pb, 0, 1000000, D.pen.full), pu: int(q.pu, 0, 1000000, 0),
    h: String(q.h) === '1' ? 1 : 0, hs: int(q.hs, 0, 2000000, D.hogo.def),
    m: D.amounts.indexOf(+q.m) >= 0 ? +q.m : d.m,
    sp: /^[ABC]$/.test(q.sp || '') ? q.sp : 'B', sh: q.sh === 'B' ? 'B' : 'A', sc: String(q.sc) === '0' ? 0 : String(q.sc) === '1' ? 1 : -1, sk: String(q.sk) === '1' ? 1 : 0
  };
}
function query(s) {
  return 'a=' + s.a + (s.u ? '&u=' + s.u : '') + (s.k ? '&k=' + s.k : '') + '&c=' + s.c + '&i=' + s.i
    + (s.p ? '&p=' + s.p + (s.p === 4 ? '&pb=' + s.pb + '&pu=' + s.pu : '') : '') + (s.h ? '&h=1&hs=' + s.hs : '') + '&m=' + s.m
    + (s.sp !== 'B' ? '&sp=' + s.sp : '') + (s.sh !== 'A' ? '&sh=' + s.sh : '') + (s.sc >= 0 ? '&sc=' + s.sc : '') + (s.sk ? '&sk=1' : '');
}
// 年金 [基礎年金, 厚生年金の上乗せ部分]（月額の合計）
function pension(s) {
  var P = D.pen;
  return s.p === 1 ? [P.full, 0] : s.p === 2 ? [2 * P.full, 0] : s.p === 3 ? [P.coupleBasic, P.coupleUpper] : s.p === 4 ? [s.pb, s.pu] : [0, 0];
}
// 児童手当（2026年度）: 22歳の年度末までの子を年上から数えて3人目以降は第3子の額。大学生年代の子は数えるだけ（手当はない）
function jidou(s) {
  var J = D.jidou, n = s.u, sum = 0, i;
  for (i = 0; i < s.c; i++) { n++; sum += n >= 3 ? J.third : J.from3; }
  for (i = 0; i < s.k; i++) { n++; sum += n >= 3 ? J.third : J.under3; }
  return sum;
}
function high(s) { return D.income[s.i] >= D.high; }
function kids(s) { return s.k + s.c; }
// その家計にかかわる前提（null はかかわらない）
function dims(s) {
  var P = pension(s);
  return { p: P[0] + P[1] > 0 ? ['A', 'B', 'C'] : null, h: s.h ? ['A', 'B'] : null, c: high(s) ? [0, 1] : null, k: kids(s) > 0 && s.m > D.kidAlt ? [0, 1] : null };
}
function chosen(s) {
  var x = dims(s);
  return { p: s.sp, h: s.sh, c: x.c ? (s.sc < 0 ? 1 : s.sc) : 0, k: x.k ? s.sk : 0 };
}
function calc(s, o) {
  var pen = pension(s), P = pen[0] + pen[1], C = jidou(s), S = s.h ? s.hs : 0;
  var km = o.k ? Math.min(s.m, D.kidAlt) : s.m, bi = s.m * s.a + km * kids(s);
  var claw = o.c ? bi : 0, keep = o.p === 'A' ? P : o.p === 'B' ? pen[1] : 0;
  var other = bi - claw + keep, before = S + P + C;
  var hogo = s.h && o.h === 'A' ? Math.max(0, before - other) : 0;
  return { bi: bi, km: km, claw: claw, jidou: C, P: P, pen: P - keep, S: S, hogo: hogo - S, net: other + hogo - before, now: before };
}
function range(s) {
  var x = dims(s), base = chosen(s), lo = null, hi = null;
  function each(keys, o) {
    if (!keys.length) { var n = calc(s, o).net; lo = lo === null || n < lo ? n : lo; hi = hi === null || n > hi ? n : hi; return; }
    var k = keys[0], rest = keys.slice(1);
    if (!x[k]) { each(rest, o); return; }
    x[k].forEach(function (v) { var p = {}; for (var j in o) p[j] = o[j]; p[k] = v; each(rest, p); });
  }
  each(['p', 'h', 'c', 'k'], base);
  return { min: lo, max: hi };
}
function bucket(n) { return n >= 100000 ? 'big-gain' : n >= 10000 ? 'gain' : n > -10000 ? 'even' : n > -50000 ? 'loss' : 'big-loss'; }
// 範囲の書き方はエッセイの表と同じ: どちらもプラスなら小さい方から（+18万〜+26万）、マイナスを含むなら大きい方から（+14万〜−9万7279）
function rangeText(g) { return g.min >= 0 ? fill(L.hhRange, { a: sgn(g.min), b: sgn(g.max) }) : fill(L.hhRange, { a: sgn(g.max), b: sgn(g.min) }); }
function who(s) {
  var n = s.a + kids(s);
  return [n === 1 ? L.hhWho1 : fill(L.hhWho, { n: iso(n) }), s.h ? L.hhWhoHogo : fill(L.hhWhoInc, { inc: opts('hhInc')[s.i] })].join(L.hhSep);
}
function summary(s) {
  var r = calc(s, chosen(s)), g = range(s);
  return { r: r, g: g, b: bucket(r.net) };
}
// シェア用の URL（?r= は OG 画像の区分、?s=hh-share で X などからの訪問を数える）と、X に入れる文（結果の文・URL・ハッシュタグ1つ）
function shareUrl(s, url) { return url + '?' + query(s) + '&r=' + summary(s).b + '&s=hh-share'; }
function shareHead(s) {
  var x = summary(s);
  return fill(x.g.min === x.g.max ? L.hhShare1 : L.hhShare, { amount: yen(s.m), year: sgn(12 * x.r.net), who: who(s), range: rangeText(x.g) });
}
function shareText(s, url) { return shareHead(s) + '\n' + shareUrl(s, url) + ' ' + L.calcTag; }
// シェア用の画像（canvas）の文字
function card(s, url) {
  var x = summary(s);
  return { eb: fill(L.hhCardEb, { amount: yen(s.m) }), big: fill(L.hhYear, { n: sgn(12 * x.r.net) }), month: fill(L.hhMonth, { n: sgn(x.r.net) }),
    range: x.g.min === x.g.max ? '' : L.hhRangeL + ' ' + fill(L.hhMonth, { n: rangeText(x.g) }), who: who(s), bucket: L['hhB_' + BK[x.b]], neg: x.r.net <= -10000,
    note: L.hhCardNote, brand: L.brandPlain, title: L.hhTitle, yours: L.hhYours, host: url.replace(/^https?:\/\//, '') };
}

function chip(name, value, label, on) {
  return '<label class="cx-chip"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (on ? ' checked' : '') + '><span>' + esc(label) + '</span></label>';
}
function stepper(f, label, v, lo, hi, hint, sub) {
  return '<div class="hh-st' + (sub ? ' hh-st-sub' : '') + '"><span class="hh-st-l" id="hhL' + f + '">' + esc(label) + (hint ? '<small>' + esc(hint) + '</small>' : '') + '</span>'
    + '<span class="hh-st-c" role="group" aria-labelledby="hhL' + f + '">'
    + '<button type="button" class="hh-sb" data-f="' + f + '" data-d="-1" aria-label="' + esc(fill(L.hhMinus, { what: label })) + '"' + (v <= lo ? ' disabled' : '') + '>−</button>'
    + '<output class="hh-sv">' + v + '</output>'
    + '<button type="button" class="hh-sb" data-f="' + f + '" data-d="1" aria-label="' + esc(fill(L.hhPlus, { what: label })) + '"' + (v >= hi ? ' disabled' : '') + '>+</button></span></div>';
}
function num(name, label, v) {
  return '<label class="cx-own"><span class="cx-own-l">' + esc(label) + '</span><span class="cx-own-in"><input class="cx-num" name="' + name + '" type="number" inputmode="numeric" min="0" max="2000000" step="1" value="' + v + '"><span class="cx-cur">' + esc(D.fmt.unit) + '</span></span></label>';
}
function paren(t) { return fill(D.fmt.paren, { x: t }); }
function controls(s) {
  var P = D.pen, pl = opts('hhPen');
  var penLabel = [pl[0], pl[1] + paren(yen(P.full)), pl[2] + paren(yen(2 * P.full)), pl[3] + paren(yen(P.coupleBasic + P.coupleUpper)), pl[4]];
  return '<fieldset class="cx-f"><legend>' + esc(L.hhFamily) + '</legend><div class="hh-sts">'
    + stepper('a', L.hhAdults, s.a, 1, 10)
    + stepper('u', L.hhStudents, s.u, 0, Math.min(s.a - 1, 6), L.hhStudentsHint, true)
    + stepper('k', L.hhKids0, s.k, 0, 6)
    + stepper('c', L.hhKids1, s.c, 0, 8) + '</div></fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.hhIncome) + '</legend><div class="cx-chips">' + opts('hhInc').map(function (t, i) { return chip('i', i, t, i === s.i); }).join('') + '</div><p class="hh-note">' + esc(L.hhIncomeNote) + '</p></fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.hhPension) + '</legend><div class="cx-chips">' + penLabel.map(function (t, i) { return chip('p', i, t, i === s.p); }).join('') + '</div>'
    + (s.p === 4 ? '<div class="hh-in">' + num('pb', L.hhPenBasic, s.pb) + num('pu', L.hhPenUpper, s.pu) + '</div>' : '') + '</fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.hhHogo) + '</legend><div class="cx-chips">' + opts('hhHogoOpts').map(function (t, i) { return chip('h', i, t, i === s.h); }).join('') + '</div>'
    + (s.h ? '<div class="hh-in">' + num('hs', L.hhHogoAmt, s.hs) + '<p class="hh-note">' + esc(L.hhHogoNote) + '</p></div>' : '') + '</fieldset>'
    + '<fieldset class="cx-f"><legend>' + esc(L.hhAmount) + '</legend><div class="cx-chips">' + D.amounts.map(function (m) { return chip('m', m, yen(m) + (m === D.takenaka ? ' · ' + L.hhAmtTak : ''), m === s.m); }).join('') + '</div></fieldset>';
}
function row(label, sub, v, cls) {
  return '<div' + (cls ? ' class="' + cls + '"' : '') + '><dt>' + esc(label) + (sub ? '<small>' + sub + '</small>' : '') + '</dt><dd>' + esc(sgn(v)) + '</dd></div>';
}
var SCN = [['p', 'hhScnPen', 'hhPenScn', ['A', 'B', 'C'], 'B', 'sp'], ['h', 'hhScnHogo', 'hhHogoScn', ['A', 'B'], 'A', 'sh'], ['c', 'hhScnClaw', 'hhClawScn', [0, 1], 1, 'sc'], ['k', 'hhScnKid', 'hhKidScn', [0, 1], 0, 'sk']];
function scenarios(s) {
  var x = dims(s), o = chosen(s), out = '';
  SCN.forEach(function (d) {
    if (!x[d[0]]) return;
    var names = opts(d[2]);
    out += '<fieldset><legend>' + esc(L[d[1]]) + '</legend><div class="hh-opt">' + d[3].map(function (v, i) {
      var p = {}; for (var j in o) p[j] = o[j]; p[d[0]] = v;
      return '<label class="hh-o"><input type="radio" name="' + d[5] + '" value="' + v + '"' + (o[d[0]] === v ? ' checked' : '') + '><span><span>' + esc(names[i]) + (v === d[4] ? '<small>' + esc(L.hhBase) + '</small>' : '') + '</span><b>' + esc(fill(L.hhMonth, { n: sgn(calc(s, p).net) })) + '</b></span></label>';
    }).join('') + '</div></fieldset>';
  });
  return out ? '<h2 class="cx-cmph hh-h">' + esc(L.hhScnH) + '</h2><p class="hh-note">' + esc(L.hhScnP) + '</p><div class="hh-scn">' + out + '</div>' : '';
}
function result(s, url, js) {
  var x = summary(s), r = x.r, g = x.g, nk = kids(s);
  var f = nk ? fill(L.hhBrkBiF, { a: iso(s.a), am: yen(s.m), k: iso(nk), km: yen(r.km) }) : fill(L.hhBrkBiA, { a: iso(s.a), am: yen(s.m) });
  var now = [[L.hhNowJidou, r.jidou], [L.hhNowPen, r.P], [L.hhNowHogo, r.S]].filter(function (v) { return v[1] > 0; }).map(function (v) { return esc(v[0]) + ' <bdi>' + esc(yen(v[1])) + '</bdi>'; });
  var fund = D.fund[s.m];
  var out = '<p class="eyebrow">' + esc(L.hhResEb) + '</p>'
    + '<p class="hh-bk hh-' + x.b + '">' + esc(L['hhB_' + BK[x.b]]) + '<span>' + esc(L['hhBs_' + BK[x.b]]) + '</span></p>'
    + '<p class="hh-main' + (r.net <= -10000 ? ' neg' : '') + '"><b id="hhNet">' + esc(fill(L.hhMonth, { n: sgn(r.net) })) + '</b></p>'
    + '<p class="hh-yr">' + esc(fill(L.hhYear, { n: sgn(12 * r.net) })) + '</p>'
    + (g.min !== g.max ? '<p class="hh-rg">' + esc(L.hhRangeL) + ' <b>' + esc(fill(L.hhMonth, { n: rangeText(g) })) + '</b></p>' : '')
    + '<h2 class="cx-cmph hh-h">' + esc(L.hhBrkH) + '</h2><dl class="hh-brk">'
    + row(L.hhBrkBi, esc(f), r.bi)
    + (r.claw ? row(L.hhBrkClaw, '', -r.claw) : '')
    + (r.jidou ? row(L.hhBrkJidou, '', -r.jidou) : '')
    + (r.pen ? row(L.hhBrkPen, '', -r.pen) : '')
    + (s.h ? row(L.hhBrkHogo, '', r.hogo) : '')
    + row(L.hhBrkNet, '', r.net, 'net') + '</dl>'
    + '<p class="hh-now">' + esc(L.hhNowH) + D.fmt.colon + (now.length ? now.join(' · ') : esc(L.hhNone)) + '</p>'
    + scenarios(s)
    + '<p class="hh-fund"><b>' + esc(L.hhFundH) + '</b> ' + (s.m === D.takenaka ? '' : esc(fill(L.hhFund, { amount: yen(s.m), total: fund.total, pct: fund.pct })) + ' ') + esc(L.hhFund7) + '<br>' + esc(L.hhTax) + '</p>';
  if (!js) return out;
  var x2 = 'https://x.com/intent/post?text=' + encodeURIComponent(shareText(s, url));
  var su = shareUrl(s, url);
  var second = LANG === 'ja' ? ['LINE', 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(su)] : ['WhatsApp', 'https://wa.me/?text=' + encodeURIComponent(shareHead(s) + '\n' + su)];
  return out + '<div class="hh-share"><h2 class="cx-cmph hh-h">' + esc(L.hhShareH) + '</h2>'
    + '<figure class="hh-card"><canvas id="hhCv" width="1200" height="630" role="img" aria-label="' + esc(shareHead(s)) + '"></canvas></figure>'
    + '<div class="qz-acts hh-acts"><button class="btn solid qz-x" type="button" id="hhImg">' + esc(L.hhSaveImg) + '</button>'
    + '<a class="btn shr-o" id="hhX" href="' + esc(x2) + '" target="_blank" rel="noopener">' + esc(L.hhShareX) + '</a>'
    + '<a class="btn shr-o" href="' + esc(second[1]) + '" target="_blank" rel="noopener">' + iso(second[0]) + '</a>'
    + '<button class="btn shr-o" type="button" id="hhCopy" data-url="' + esc(su) + '">' + esc(L.copyLink) + '</button></div></div>';
}
`;

// ブラウザ側: 入力のたびに結果・シェアの画像・URL を書き換える
const BOOT = String.raw`
(function(){
  var form = document.getElementById('hh'), ctl = document.getElementById('hhCtl'), res = document.getElementById('hhRes'), live = document.getElementById('hhLive'), url = form.getAttribute('data-url');
  var q = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) try { q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); } catch (e) {} });
  var s = parse(q), mark = /^[\w-]{1,16}$/.test(q.s || '') ? q.s : '';
  var touch = window.matchMedia && matchMedia('(pointer:coarse)').matches;
  function focusKey() {
    var a = document.activeElement;
    if (!a || !form.contains(a) && !res.contains(a)) return null;
    if (a.name) return '[name="' + a.name + '"]' + (a.type === 'radio' ? '[value="' + a.value + '"]' : '');
    if (a.getAttribute('data-f')) return '[data-f="' + a.getAttribute('data-f') + '"][data-d="' + a.getAttribute('data-d') + '"]';
    return a.id ? '#' + a.id : null;
  }
  function draw(all, quiet) {
    var k = focusKey();
    if (all) ctl.innerHTML = controls(s);
    res.innerHTML = result(s, url, true);
    if (k) { var el = document.querySelector(k); if (el && el.disabled) el = el.parentNode.querySelector('.hh-sb:not([disabled])'); if (el) el.focus(); }
    paint();
    if (!quiet) { try { history.replaceState(null, '', location.pathname + '?' + query(s) + '&r=' + summary(s).b + (mark ? '&s=' + mark : '')); } catch (e) {} live.textContent = shareHead(s); }
  }
  // シェア用の画像（1200x630）。字はページのフォント（サブセット）で描くので、使う字の読み込みを待ってから描く
  function paint() {
    var cv = document.getElementById('hhCv');
    if (!cv || !cv.getContext) return;
    var c = card(s, url), F = '"' + D.font + '",sans-serif', all = [c.eb, c.big, c.month, c.range, c.who, c.bucket, c.note, c.brand, c.title, c.yours, c.host].join('');
    var ready = document.fonts && document.fonts.load ? Promise.all(['700 40px ' + F, '400 30px ' + F, '900 30px "FLL Logo",' + F].map(function (f) { return document.fonts.load(f, all); })) : Promise.resolve();
    ready.then(go, go);
    function go() {
      var x = cv.getContext('2d'), W = 1200, H = 630, rtl = LANG === 'ar', x0 = rtl ? W - 72 : 72, max = W - 144;
      var bg = x.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#0A0F24'); bg.addColorStop(1, '#121741'); x.fillStyle = bg; x.fillRect(0, 0, W, H);
      var gl = x.createRadialGradient(rtl ? 140 : W - 140, 0, 0, rtl ? 140 : W - 140, 0, 700); gl.addColorStop(0, 'rgba(59,42,134,.9)'); gl.addColorStop(1, 'rgba(59,42,134,0)'); x.fillStyle = gl; x.fillRect(0, 0, W, H);
      x.fillStyle = 'rgba(255,255,255,.75)';
      for (var i = 0; i < 46; i++) { var sx = (i * 263) % W, sy = (i * 151) % H; x.beginPath(); x.arc(sx, sy, i % 3 ? 1 : 1.6, 0, 7); x.fill(); }
      var mx = rtl ? 150 : W - 150; x.fillStyle = '#FFE7A3'; x.beginPath(); x.arc(mx, 118, 64, 0, 7); x.fill(); x.fillStyle = '#10153A'; x.beginPath(); x.arc(mx + (rtl ? -30 : 30), 96, 60, 0, 7); x.fill();
      x.direction = rtl ? 'rtl' : 'ltr'; x.textAlign = rtl ? 'right' : 'left'; x.textBaseline = 'alphabetic';
      function fit(t, w, size, min, weight, fam) { var n = size; do { x.font = weight + ' ' + n + 'px ' + (fam || F); if (x.measureText(t).width <= w) break; n -= 2; } while (n > min); return n; }
      function text(t, y, size, min, weight, color, w, fam) { if (!t) return; fit(t, w || max, size, min, weight, fam); x.fillStyle = color; x.fillText(t, x0, y, w || max); }
      fit(c.brand, 400, 30, 20, 900, '"FLL Logo",' + F); x.fillStyle = '#FFD66B'; x.fillText(c.brand, x0, 92); var bw = x.measureText(c.brand).width;
      x.font = '700 24px ' + F; x.fillStyle = '#A9B2D8'; x.fillText(c.title, rtl ? x0 - bw - 18 : x0 + bw + 18, 92, 560 - bw);
      text(c.eb, 180, 42, 24, 700, '#EEF1FF', 860);
      text(c.big, 304, 124, 56, 700, c.neg ? '#FF8A7A' : '#FFD66B');
      text(c.month, 368, 40, 22, 700, '#EEF1FF');
      text(c.range, 416, 31, 18, 400, '#C9D0EE');
      text(c.who, 462, 31, 18, 400, '#C9D0EE');
      fit(c.bucket, 520, 30, 20, 700); var tw = x.measureText(c.bucket).width, pw = tw + 48, px = rtl ? x0 - pw : x0;
      x.fillStyle = c.neg ? '#FF6E61' : '#FFD66B'; x.beginPath(); if (x.roundRect) x.roundRect(px, 506, pw, 52, 26); else x.rect(px, 506, pw, 52); x.fill();
      x.fillStyle = c.neg ? '#2A0B07' : '#141A3A'; x.fillText(c.bucket, rtl ? x0 - 24 : x0 + 24, 542);
      x.font = '700 28px ' + F; x.fillStyle = '#FFD66B'; x.textAlign = rtl ? 'left' : 'right'; x.fillText(c.yours, rtl ? 72 : W - 72, 542, 420);
      x.textAlign = rtl ? 'right' : 'left'; fit(c.note + '  ·  ' + c.host, max, 22, 14, 400); x.fillStyle = '#A9B2D8'; x.fillText(c.note + '  ·  ' + c.host, x0, 598, max);
    }
  }
  function say(m) { var t = document.getElementById('toast'); if (!t) return; t.textContent = m; t.hidden = false; clearTimeout(say.t); say.t = setTimeout(function () { t.hidden = true; }, 1800); }
  function saveImg() {
    var cv = document.getElementById('hhCv');
    if (!cv || !cv.toBlob) return;
    cv.toBlob(function (b) {
      if (!b) return;
      var f = null; try { f = new File([b], D.file, { type: 'image/png' }); } catch (e) {}
      if (touch && f && navigator.canShare && navigator.canShare({ files: [f] })) { navigator.share({ files: [f], text: shareText(s, url) }).catch(function () {}); return; }
      var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = D.file; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.parentNode.removeChild(a); }, 1000);
    }, 'image/png');
  }
  ctl.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.hh-sb') : null;
    if (!b || b.disabled) return;
    var f = b.getAttribute('data-f'), d = +b.getAttribute('data-d'), lim = { a: [1, 10], u: [0, Math.min(s.a - 1, 6)], k: [0, 6], c: [0, 8] }[f];
    s[f] = Math.max(lim[0], Math.min(lim[1], s[f] + d));
    if (f === 'a') s.u = Math.min(s.u, Math.max(0, Math.min(s.a - 1, 6)));
    draw(true);
  });
  form.addEventListener('change', function (e) {
    var t = e.target;
    if (t.type !== 'radio') return;
    if (t.name === 'i' || t.name === 'p' || t.name === 'h' || t.name === 'm') { s[t.name] = +t.value; draw(true); }
  });
  form.addEventListener('input', function (e) {
    var t = e.target;
    if (t.type !== 'number') return;
    var v = parseInt(t.value, 10);
    if (isNaN(v) || v < 0 || v > 2000000) return;
    s[t.name] = v; draw(false);
  });
  res.addEventListener('change', function (e) {
    var t = e.target;
    if (t.type !== 'radio') return;
    if (t.name === 'sp' || t.name === 'sh') s[t.name] = t.value;
    if (t.name === 'sc') s.sc = +t.value === 1 ? -1 : 0;
    if (t.name === 'sk') s.sk = +t.value;
    draw(false);
  });
  res.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('button') : null;
    if (!t) return;
    if (t.id === 'hhImg') saveImg();
    if (t.id === 'hhCopy') { var u = t.getAttribute('data-url'); try { navigator.clipboard.writeText(u).then(function () { say(L.linkCopied); }, function () { prompt('', u); }); } catch (err) { prompt('', u); } }
  });
  form.classList.add('on');
  draw(true, !location.search);
})();
`;

const LOCALE = { en: 'en', ja: 'ja', zh: 'zh-Hans', hi: 'hi-u-nu-latn', es: 'es', de: 'de', ar: 'ar-u-nu-latn' };
// build.js 用: 言語ごとに1つの vm（ブラウザと同じコード）
function context(lang, D, L) {
  const ctx = vm.createContext({ D, L, LANG: lang });
  vm.runInContext(CLIENT, ctx);
  const call = (fn, ...args) => { ctx.__a = JSON.parse(JSON.stringify(args)); return vm.runInContext(`${fn}.apply(null, __a)`, ctx); };
  return {
    parse: q => call('parse', q),
    controls: s => call('controls', s),
    result: (s, url) => call('result', s, url, false),
    summary: s => JSON.parse(vm.runInContext(`JSON.stringify(summary(${JSON.stringify(s)}))`, ctx)),
    calc: (s, o) => JSON.parse(JSON.stringify(call('calc', s, o))),
    chosen: s => JSON.parse(JSON.stringify(call('chosen', s))),
    query: s => call('query', s),
    sgn: n => call('sgn', n),
    yen: n => call('yen', n),
    rangeText: g => call('rangeText', g),
    shareText: (s, url) => call('shareText', s, url),
    shareHead: s => call('shareHead', s),
  };
}
module.exports = { CLIENT, BOOT, LOCALE, BUCKETS, context };
