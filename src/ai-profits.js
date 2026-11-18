// エッセイ ai-company-profits-per-person の数字: data/ai-profits-2026.json（AI関連9社の直近4四半期の純利益・営業利益・時価総額）から計算する。
// 世界の人口は data/billionaires-2026.json（世界銀行 2025年）、1日3.00ドルの物差しと為替（円・元・ルピーなど）と日本の人口は計算機のデータ（src/calc-world.js）。
// 本文・題・要約・出典の {{aip.キー}} / {{aip.キー:書式}} / {{aip.キー@国:書式}}（@国 はその国の通貨に換算）を、src/data.js の読み込み時に
// 言語ごとの数字の書き方で埋める（fill）。NVIDIA などの新しい四半期は data/ai-profits-2026.json を直すだけで、本文・OG 画像・X 画像の数字が変わる。
// check() は build.js が呼ぶ: データの形（4四半期・続いた期間・含み益の四半期の対応）、本文の「ほぼ同じ」などの言い回しの前提、
// 各言語が en と同じキーを使っているか、NVIDIA に左右される数字を手で書いていないか、ar のラテン文字と hi の CJK を確かめる
const AIP = require('../data/ai-profits-2026.json');
const BILL = require('../data/billionaires-2026.json');
const calcWorld = require('./calc-world.js');

const ESSAY_ID = 'ai-company-profits-per-person';
const RATES = [15, 25, 100]; // 利益のうち配る割合（％）
const CAP_RATES = [2.5, 5]; // 時価総額のうち毎年配る割合（％）
const DAY = 864e5;

// 4四半期の合計（US$）。q は companies[].quarters
const sum = (qs, f) => qs.reduce((t, q) => t + (q[f] || 0), 0) * 1e6;

function compute(D, data = AIP) {
  const W = calcWorld.world(D.CALC);
  const cty = id => { const c = W.find(x => x.id === id); if (!c) throw new Error(`ai-profits: no calculator data for ${id}`); return c; };
  const pop = BILL.worldPopulation.value;
  const yard = W.reduce((t, c) => t + c.pop.all * c.line.monthly * 12 * c.usd, 0); // 211 の国・地域の全員に1日3.00ドルを1年（US$、市場の為替）
  const jp = cty('jp');
  const v = { pop, yard, yardPeople: W.reduce((t, c) => t + c.pop.all, 0), jpPop: jp.pop.all, yen: 1 / jp.usd, yenMarket: data.yenMarket.value };
  const s = {}; // 文字列（日付・URL・名前）
  const warn = [];
  let net = 0, op = 0, pretax = 0, tax = 0, cap = 0, paper = 0;
  for (const c of data.companies) {
    const qs = c.quarters;
    if (qs.length !== 4) warn.push(`${c.id}: ${qs.length} quarters (4 expected)`);
    for (let i = 1; i < qs.length; i++) { const d = (new Date(qs[i].periodEnd) - new Date(qs[i - 1].periodEnd)) / DAY; if (d < 80 || d > 100) warn.push(`${c.id}: quarters ${qs[i - 1].quarter} and ${qs[i].quarter} are ${d} days apart`); }
    for (const f of ['netIncomeUsdM', 'operatingIncomeUsdM', 'pretaxIncomeUsdM', 'incomeTaxUsdM']) if (qs.some(q => typeof q[f] !== 'number')) warn.push(`${c.id}: a quarter has no ${f}`);
    const labels = qs.map(q => q.quarter).join();
    for (const g of [...(c.paperGains || []), ...(c.otherItems || [])]) { const extra = Object.keys(g.byQuarter).filter(k => !labels.split(',').includes(k)); if (extra.length) warn.push(`${c.id}: "${g.item.slice(0, 40)}…" has quarters outside the four (${extra.join(', ')})`); }
    for (const g of c.paperGains || []) if (Object.keys(g.byQuarter).length !== qs.length) warn.push(`${c.id}: "${g.item.slice(0, 40)}…" does not cover all four quarters`);
    const last = qs[qs.length - 1];
    const cn = sum(qs, 'netIncomeUsdM'), co = sum(qs, 'operatingIncomeUsdM');
    const cp = (c.paperGains || []).reduce((t, g) => t + Object.values(g.byQuarter).reduce((a, b) => a + b, 0), 0) * 1e6;
    Object.assign(v, { [`net_${c.id}`]: cn, [`op_${c.id}`]: co, [`cap_${c.id}`]: c.marketCapUsdBn * 1e9, [`paper_${c.id}`]: cp });
    Object.assign(s, { [`thru_${c.id}`]: last.periodEnd, [`from_${c.id}`]: qs[0].periodEnd, [`lastq_${c.id}`]: last.quarter, [`src_${c.id}`]: last.source, [`name_${c.id}`]: c.name });
    if ((c.paperGains || [])[0]) s[`paperSrc_${c.id}`] = c.paperGains[0].source;
    for (const [k, x] of Object.entries(c.facts || {})) if (typeof x === 'number') v[`f_${c.id}_${k}`] = /UsdBn$/.test(k) ? x * 1e9 : /UsdM$/.test(k) ? x * 1e6 : x; else if (typeof x === 'string') s[`f_${c.id}_${k}`] = x;
    net += cn; op += co; pretax += sum(qs, 'pretaxIncomeUsdM'); tax += sum(qs, 'incomeTaxUsdM'); cap += c.marketCapUsdBn * 1e9; paper += cp;
  }
  const ends = data.companies.map(c => c.quarters[c.quarters.length - 1].periodEnd).sort();
  Object.assign(s, { thruMin: ends[0], thruMax: ends[ends.length - 1], marketCapDate: data.marketCapDate, retrieved: data.retrieved, yenMarketDate: data.yenMarket.date });
  v.yenMove = v.yenMarket / v.yen - 1;
  const effTax = tax / pretax;
  const exPaper = net - paper * (1 - effTax); // 含み益を税引き後で除いたおおよその額（会社の発表ではなく、ここでの見積もり）
  Object.assign(v, { n: data.companies.length, net, op, pretax, tax, cap, paper, effTax, exPaper, paperShare: paper / net, opNetGap: Math.abs(op - net) / net, jpOnly: net / jp.pop.all });
  // 1人あたり（年・月）と、全員に1日3ドルの費用に対する割合
  const per = (k, tot) => Object.assign(v, { [`${k}Tot`]: tot, [`${k}PP`]: tot / pop, [`${k}PM`]: tot / pop / 12, [`${k}Yard`]: tot / yard, [`${k}Months`]: tot / yard * 12 });
  for (const r of RATES) { per(`net${r}`, net * r / 100); per(`op${r}`, op * r / 100); }
  per('exPaper', exPaper);
  per('capOnce', cap);
  for (const r of CAP_RATES) per(`cap${String(r).replace('.', '')}`, cap * r / 100);
  // 感度: テスラを足す、SK hynix とサムスン電子を足す（ウォンはサイトの 2025年の世界銀行のレート）
  const T = data.sensitivity.tesla, krw = 1 / cty('kr').usd;
  v.tesla = sum(T.quarters, 'netIncomeUsdM');
  v.korea = data.sensitivity.korea.reduce((t, x) => t + x.quarters.reduce((a, q) => a + q.netIncomeKrwBn, 0) * 1e9 / krw, 0);
  data.sensitivity.korea.forEach((x, i) => { v[`korea${i}`] = x.quarters.reduce((a, q) => a + q.netIncomeKrwBn, 0) * 1e9 / krw; });
  per('withTesla', net + v.tesla);
  per('withKorea', net + v.korea);
  v.tsmcShare = v.net_tsmc / net;
  v.teslaPP = v.tesla / pop;
  return { v, s, W, warn, data };
}

// ---- 言語ごとの数字の書き方
const GROUP = { en: ',', ja: ',', zh: ',', hi: ',', ar: ',', es: '.', de: '.' };
const DEC = { en: '.', ja: '.', zh: '.', hi: '.', ar: '.', es: ',', de: ',' };
function group(lang, int) {
  const g = GROUP[lang];
  if (lang === 'hi') return int.length <= 3 ? int : int.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, g) + g + int.slice(-3); // インド式（2,14,000）
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, g);
}
function num(lang, x, d = 0) {
  const neg = x < 0; const t = Math.abs(x).toFixed(d);
  const [i, f] = t.split('.');
  return (neg ? '−' : '') + group(lang, i) + (f ? DEC[lang] + f : '');
}
const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
  esLong: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
  deLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  enLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
function date(lang, iso, f) {
  const [y, m, d] = iso.split('-').map(Number);
  const day = String(d);
  if (lang === 'ja' || lang === 'zh') return f === 'my' ? `${y}年${m}月` : `${y}年${m}月${d}日`;
  const mo = f === 'my' ? (MONTHS[lang + 'Long'] || MONTHS[lang])[m - 1] : (MONTHS[lang + 'Long'] || MONTHS[lang])[m - 1];
  const short = MONTHS[lang][m - 1];
  if (f === 'mys') return `${short} ${y}`; // 表に使う短い形
  if (f === 'my') return lang === 'es' ? `${mo} de ${y}` : `${mo} ${y}`;
  if (lang === 'es') return `${day} de ${mo} de ${y}`;
  if (lang === 'de') return `${day}. ${mo} ${y}`;
  return `${day} ${mo} ${y}`;
}
// ar の「ドル」: 数（整数部）の下2桁で名詞の形を変える（3〜10 は複数、11〜99 は対格の単数、それ以外は単数）
function arDollar(x) {
  const n = Math.floor(Math.abs(x)) % 100;
  if (Math.floor(Math.abs(x)) === 2) return 'دولاران';
  return n >= 3 && n <= 10 ? 'دولارات' : n >= 11 ? 'دولارًا' : 'دولار';
}
// 書式: jman（日本語の万）, int（四捨五入）, r10（10の位まで）, d1/d2（小数）, tn1/tn2（兆）, bn/bn1（10億）, oku（億）, man（万）, lakh1（10万、小数1桁）, m2（100万、小数2桁）, pct/pct1（割合を％の数に）, my/mys/dmy（日付）, raw
function format(lang, x, f = 'int') {
  if (typeof x === 'string') return f === 'raw' ? x : date(lang, x, f);
  if (f === 'jman') { // 日本語の「万」: 100万以上は万の位まで（128万）、10万以上は千の位まで（45万6,000）、1万以上は百の位まで（1万9,100）、それ未満は十の位まで（1,600）
    const r = x >= 1e6 ? Math.round(x / 1e4) * 1e4 : x >= 1e5 ? Math.round(x / 1e3) * 1e3 : x >= 1e4 ? Math.round(x / 100) * 100 : Math.round(x / 10) * 10;
    const man = Math.floor(r / 1e4), rest = r % 1e4;
    return (man ? `${group(lang, String(man))}万` : '') + (rest ? group(lang, String(rest)) : '');
  }
  const F = {
    int: [1, 0], r10: [1, 0, 10], r100: [1, 0, 100], d1: [1, 1], d2: [1, 2], tn1: [1e12, 1], tn2: [1e12, 2], bn: [1e9, 0], bn1: [1e9, 1], bn2: [1e9, 2], oku: [1e8, 0], oku1: [1e8, 1], oku2: [1e8, 2], man: [1e4, 0], lakh1: [1e5, 1], m1: [1e6, 1], m2: [1e6, 2], pct: [0.01, 0], pct1: [0.01, 1],
  }[f];
  if (!F) throw new Error(`ai-profits: unknown format ${f}`);
  const y = x / F[0];
  return num(lang, F[2] ? Math.round(y / F[2]) * F[2] : y, F[1]);
}
const TOKEN = /\{\{aip\.([A-Za-z0-9_]+)(?:@([a-z]{2}))?(?::([a-z0-9]+))?(?::(ard))?\}\}/g;
function render(lang, R, key, cc, f, ard) {
  let x = key in R.v ? R.v[key] : R.s[key];
  if (x === undefined) throw new Error(`ai-profits: unknown key ${key}`);
  if (cc) { const c = R.W.find(y => y.id === cc); if (!c) throw new Error(`ai-profits: no currency for ${cc}`); x = x / c.usd; }
  const out = format(lang, x, f || (typeof x === 'string' ? 'raw' : 'int'));
  return ard ? `${out} ${arDollar(typeof x === 'number' ? x / ({ tn1: 1e12, tn2: 1e12, bn: 1e9, bn1: 1e9 }[f] || 1) : 0)}` : out;
}

// D（src/data.js の中身）の文字列のうち {{aip.…}} を埋める。言語は道のりにある言語コード（title.ja や blocks.ar）で決め、なければ en（出典など）
let LAST = null;
function fill(D) {
  const R = compute(D);
  // 埋める前のエッセイ（check で使う）: 言語ごとの題・要約・本文と、出典（en として）
  const E0 = D.ESSAYS.find(x => x.id === ESSAY_ID);
  const raw = {};
  if (E0) for (const l of D.LANGS) raw[l] = [E0.title[l], E0.desc[l], ...(E0.blocks[l] || []).map(b => b[1]), ...(l === 'en' ? E0.sources.flatMap(x => [x.label, x.url]) : [])].filter(Boolean);
  const walk = (o, lang, path) => {
    for (const k of Object.keys(o)) {
      const l = D.LANGS.includes(k) ? k : lang;
      if (typeof o[k] === 'string') { if (o[k].includes('{{aip.')) { o[k] = o[k].replace(TOKEN, (_, key, cc, f, ard) => render(l, R, key, cc, f, ard)); if (o[k].includes('{{aip.')) throw new Error(`ai-profits: bad token in ${path}.${k}: ${o[k].match(/\{\{aip\.[^}]*\}\}/)[0]}`); } }
      else if (o[k] && typeof o[k] === 'object') walk(o[k], l, `${path}.${k}`);
    }
  };
  walk(D, 'en', '');
  LAST = { R, raw };
  return D;
}

// NVIDIA の四半期を変えると動く数字（キー）: NVIDIA の4四半期の数字を 1.37 倍にして計算し直し、値が変わるものを集める
function nvidiaKeys(D) {
  const d = JSON.parse(JSON.stringify(AIP));
  const n = d.companies.find(c => c.id === 'nvda');
  for (const q of n.quarters) for (const f of ['netIncomeUsdM', 'operatingIncomeUsdM', 'pretaxIncomeUsdM', 'incomeTaxUsdM']) q[f] *= 1.37;
  for (const g of n.paperGains || []) { for (const k of Object.keys(g.byQuarter)) g.byQuarter[k] *= 1.37; g.source += 'x'; }
  n.quarters[3].periodEnd = '2026-10-25'; n.quarters[3].source = 'x';
  for (const [k, x] of Object.entries(n.facts)) if (typeof x === 'number') n.facts[k] = x * 1.37; else n.facts[k] = x + 'x';
  const a = compute(D), b = compute(D, d);
  return new Set([...Object.keys(a.v).filter(k => Math.abs(a.v[k] - b.v[k]) > 1e-9 * Math.max(1, Math.abs(a.v[k]))), ...Object.keys(a.s).filter(k => a.s[k] !== b.s[k])]);
}

// build.js から: 警告の文の配列を返す（ar・hi の文字の決まりに反していたら止める）
function check(D, ESSAY_LINK) {
  const out = [];
  const e = D.ESSAYS.find(x => x.id === ESSAY_ID);
  if (!e || !LAST) return out;
  const { R, raw } = LAST;
  out.push(...R.warn.map(w => `data/ai-profits-2026.json: ${w}`));
  for (const [k, t] of e.blocks.ar) if (k !== 't' && /[A-Za-z$]/.test(t.replace(ESSAY_LINK, '$1').replace(/⁦[^⁩]*⁩/g, ''))) throw new Error(`${ESSAY_ID}.ar: Latin text outside LRI/PDI: ${t.slice(0, 60)}`);
  for (const t of [e.title.ar, e.desc.ar]) if (/[A-Za-z$]/.test(t.replace(/⁦[^⁩]*⁩/g, ''))) throw new Error(`${ESSAY_ID}.ar: Latin text outside LRI/PDI in title/desc`);
  for (const [, t] of e.blocks.hi) if (/[\u3000-\u9fff\u2066-\u2069]/.test(t)) throw new Error(`${ESSAY_ID}.hi: CJK or isolate characters`);
  // 本文の言い回しの前提（数字が変わって外れたら直す）
  const V = R.v;
  if (V.opNetGap > 0.08) out.push(`the essay says operating profit gives almost the same answer as net profit, but they now differ by ${(V.opNetGap * 100).toFixed(1)}%`);
  if (!(V.paperShare > 0.1 && V.paperShare < 0.5)) out.push(`paper gains are now ${(V.paperShare * 100).toFixed(1)}% of net profit; check the wording of the paper-gains section`);
  if (!(V.net100Yard < 1 && V.cap5Yard < 1)) out.push('a scenario now covers all of the $3-a-day line; the essay says none does');
  if (!(V.capOnceMonths > 60)) out.push('the market-value one-off now pays less than five years of the $3-a-day line; the essay says more than five');
  // en の会社の表を計算し直す（9社の行と合計の行: 純利益・営業利益・時価総額、10億ドル）。ほかの言語は、表の数と行の数、「全員に1日3ドル」の割合の列が en と同じか
  const tbl = e.blocks.en.find(([k, t]) => k === 't' && t.startsWith('Company'));
  if (!tbl) out.push(`${ESSAY_ID}: the company table is missing in en`);
  else {
    const rows = tbl[1].split('\n').slice(1).map(r => r.split(' | '));
    const want = [...R.data.companies.map(c => [c.id, format('en', R.s[`thru_${c.id}`], 'mys'), ...['net', 'op', 'cap'].map(f => format('en', V[`${f}_${c.id}`], 'bn'))]), ['total', '–', ...['net', 'op', 'cap'].map(f => format('en', V[f], 'bn'))]];
    if (rows.length !== want.length) out.push(`${ESSAY_ID}: the en company table has ${rows.length} rows, the data ${want.length}`);
    rows.forEach((r, i) => { const w = want[i]; if (w && r.slice(1).join(' | ') !== w.slice(1).join(' | ')) out.push(`${ESSAY_ID}: en company table row ${i + 1} (${r[0]}) is ${r.slice(1).join(' / ')}, the data gives ${w.slice(1).join(' / ')}`); });
  }
  const tables = l => e.blocks[l].filter(([k]) => k === 't').map(([, t]) => t.split('\n').map(r => r.split(' | ')));
  const enT = tables('en');
  for (const l of D.LANGS) if (l !== 'en') {
    const t = tables(l);
    if (t.length !== enT.length || t.some((x, i) => x.length !== enT[i].length)) { out.push(`${ESSAY_ID}.${l}: tables differ from en in number or rows`); continue; }
    enT.forEach((x, i) => { if (!/Share of \$3 a day/.test(x[0][x[0].length - 1])) return; const dig = y => y.slice(1).map(r => r[r.length - 1].replace(/\D/g, '')).join('/'); if (dig(t[i]) !== dig(x)) out.push(`${ESSAY_ID}.${l}: table ${i + 1}: the $3-a-day shares (${dig(t[i])}) differ from en (${dig(x)})`); });
  }
  // 期限を過ぎても未発表の四半期が入っていない
  const P = R.data.pending;
  if (P && Date.now() > new Date(P.due).getTime()) { const c = R.data.companies.find(x => x.id === P.company); if (!c.quarters.some(q => q.quarter === P.quarter)) out.push(`${c.name} ${P.quarter} was due ${P.due}: add it to data/ai-profits-2026.json (see "update") and set "pending" to null`); else out.push('data/ai-profits-2026.json: the pending quarter is in; set "pending" to null'); }
  // 各言語が en と同じキーを使っているか（手で数字を書いた言語がないか）
  const keys = l => { const m = {}; for (const t of raw[l] || []) for (const [, k] of t.matchAll(TOKEN)) m[k] = (m[k] || 0) + 1; return m; };
  const en = keys('en');
  for (const l of D.LANGS) if (l !== 'en') { const m = keys(l); const miss = Object.keys(en).filter(k => !m[k] && !/^(src|paperSrc|lastq)_/.test(k)); if (miss.length) out.push(`${ESSAY_ID}.${l}: does not use ${miss.join(', ')} (en does); a number may be typed by hand`); }
  // NVIDIA に左右される数字を手で書いていないか: 埋めた結果と同じ数字の文字列が、埋める前の本文（{{…}} を除く）にあれば知らせる
  const dep = nvidiaKeys(D);
  for (const l of D.LANGS) {
    const lit = new Set();
    for (const t of raw[l] || []) for (const [, key, cc, f] of t.matchAll(TOKEN)) if (dep.has(key) && key in R.v) { const x = render(l, R, key, cc, f); if (x.replace(/\D/g, '').length >= 3) lit.add(x); }
    const text = (raw[l] || []).join('\n').replace(TOKEN, ' ');
    // 配る割合（15・25・100％、2.5・5％）は本文に手で書く決まりなので、同じ数字になった値（例: £100）は数えない
    const rates = new Set([...RATES, ...CAP_RATES].map(r => format(l, r, Number.isInteger(r) ? 'int' : 'd1')));
    const hit = [...lit].filter(x => !rates.has(x)).filter(x => new RegExp(`(^|[^\\d.,])${x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d]|[.,]\\d)`).test(text));
    if (hit.length) out.push(`${ESSAY_ID}.${l}: ${hit.join(', ')} typed by hand (it depends on NVIDIA's quarters; use the {{aip.…}} token)`);
  }
  return out;
}

const result = () => LAST && LAST.R;
module.exports = { compute, fill, check, format, render, result, nvidiaKeys, ESSAY_ID, RATES, CAP_RATES };
