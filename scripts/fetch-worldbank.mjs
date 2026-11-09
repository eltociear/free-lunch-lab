// 使い方: node scripts/fetch-worldbank.mjs
// BI計算機（/calc/）の国のデータを World Bank API（api.worldbank.org/v2、CC BY 4.0）から取り、data/countries-worldbank.json に保存する。
// ビルドのたびには動かさない（手で動かして、差分を確かめてからコミットする）。
// ・国は World Bank の国メタデータで region が Aggregates でないもの（地域や所得グループの集計は除く）
// ・指標ごとに、いちばん新しい空でない年の値と、その年を持つ。GDP は現地通貨と米ドルがそろう最新年
// ・子ども（18歳未満）は、年齢別人口（SP.POP.AG00〜AG17 の男女、国連 WPP にもとづく）の合計。大人 = 総人口 − 子ども
// ・政府の歳出・歳入・税収は GDP 比（.GD.ZS）で持つ（通貨のデノミや物価の年のずれに左右されないように）。現地通貨の額（.CN）も記録だけしておく
// ・国名・通貨名は 7 言語を Intl.DisplayNames / Intl.NumberFormat（Node の ICU）で作り、読みにくいものだけ下の OVERRIDE で直す
// ・人口か GDP がない国は入れない
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'data', 'countries-worldbank.json');
const API = 'https://api.worldbank.org/v2';
const LANGS = ['ja', 'en', 'zh', 'hi', 'es', 'de', 'ar'];
const FROM = 2015; // これより古い値は使わない
const GDP_MIN = 2020; // GDP がこれより古い国は入れない（南スーダン 2015・イエメン 2018 のように、その後の通貨の暴落で比べられなくなる）

const IND = {
  pop: 'SP.POP.TOTL',
  pop0014: 'SP.POP.0014.TO',
  gdpLcu: 'NY.GDP.MKTP.CN',
  gdpUsd: 'NY.GDP.MKTP.CD',
  fx: 'PA.NUS.FCRF',
  ppp: 'PA.NUS.PRVT.PP',
  expPct: 'GC.XPN.TOTL.GD.ZS',
  revPct: 'GC.REV.XGRT.GD.ZS',
  taxPct: 'GC.TAX.TOTL.GD.ZS',
  expLcu: 'GC.XPN.TOTL.CN',
  revLcu: 'GC.REV.XGRT.CN',
  taxLcu: 'GC.TAX.TOTL.CN',
};
const AGES = Array.from({ length: 18 }, (_, i) => String(i).padStart(2, '0'));
const AGE_IND = AGES.flatMap(a => [`SP.POP.AG${a}.FE.IN`, `SP.POP.AG${a}.MA.IN`]);

// ISO 3166-1 alpha-2 → World Bank が GDP を出している現地通貨（ISO 4217）。パナマは米ドル（バルボアは等価で紙幣がない）。
// World Bank の現地通貨がその国の法定通貨と違うものに合わせてある: ブルガリアは 2026 年のユーロ導入で系列ごとユーロに換算済み、
// リベリアとヨルダン川西岸・ガザは米ドル建て（GDP の現地通貨 ÷ 米ドルがちょうど 1）
const CURRENCY = {
  AD: 'EUR', AE: 'AED', AF: 'AFN', AG: 'XCD', AL: 'ALL', AM: 'AMD', AO: 'AOA', AR: 'ARS', AS: 'USD', AT: 'EUR', AU: 'AUD', AW: 'AWG', AZ: 'AZN',
  BA: 'BAM', BB: 'BBD', BD: 'BDT', BE: 'EUR', BF: 'XOF', BG: 'EUR', BH: 'BHD', BI: 'BIF', BJ: 'XOF', BM: 'BMD', BN: 'BND', BO: 'BOB', BR: 'BRL',
  BS: 'BSD', BT: 'BTN', BW: 'BWP', BY: 'BYN', BZ: 'BZD', CA: 'CAD', CD: 'CDF', CF: 'XAF', CG: 'XAF', CH: 'CHF', CI: 'XOF', CL: 'CLP', CM: 'XAF',
  CN: 'CNY', CO: 'COP', CR: 'CRC', CU: 'CUP', CV: 'CVE', CW: 'XCG', CY: 'EUR', CZ: 'CZK', DE: 'EUR', DJ: 'DJF', DK: 'DKK', DM: 'XCD', DO: 'DOP',
  DZ: 'DZD', EC: 'USD', EE: 'EUR', EG: 'EGP', ER: 'ERN', ES: 'EUR', ET: 'ETB', FI: 'EUR', FJ: 'FJD', FM: 'USD', FO: 'DKK', FR: 'EUR', GA: 'XAF',
  GB: 'GBP', GD: 'XCD', GE: 'GEL', GH: 'GHS', GI: 'GIP', GL: 'DKK', GM: 'GMD', GN: 'GNF', GQ: 'XAF', GR: 'EUR', GT: 'GTQ', GU: 'USD', GW: 'XOF',
  GY: 'GYD', HK: 'HKD', HN: 'HNL', HR: 'EUR', HT: 'HTG', HU: 'HUF', ID: 'IDR', IE: 'EUR', IL: 'ILS', IM: 'GBP', IN: 'INR', IQ: 'IQD', IR: 'IRR',
  IS: 'ISK', IT: 'EUR', JG: 'GBP', JM: 'JMD', JO: 'JOD', JP: 'JPY', KE: 'KES', KG: 'KGS', KH: 'KHR', KI: 'AUD', KM: 'KMF', KN: 'XCD', KP: 'KPW',
  KR: 'KRW', KW: 'KWD', KY: 'KYD', KZ: 'KZT', LA: 'LAK', LB: 'LBP', LC: 'XCD', LI: 'CHF', LK: 'LKR', LR: 'USD', LS: 'LSL', LT: 'EUR', LU: 'EUR',
  LV: 'EUR', LY: 'LYD', MA: 'MAD', MC: 'EUR', MD: 'MDL', ME: 'EUR', MF: 'EUR', MG: 'MGA', MH: 'USD', MK: 'MKD', ML: 'XOF', MM: 'MMK', MN: 'MNT',
  MO: 'MOP', MP: 'USD', MR: 'MRU', MT: 'EUR', MU: 'MUR', MV: 'MVR', MW: 'MWK', MX: 'MXN', MY: 'MYR', MZ: 'MZN', NA: 'NAD', NC: 'XPF', NE: 'XOF',
  NG: 'NGN', NI: 'NIO', NL: 'EUR', NO: 'NOK', NP: 'NPR', NR: 'AUD', NZ: 'NZD', OM: 'OMR', PA: 'USD', PE: 'PEN', PF: 'XPF', PG: 'PGK', PH: 'PHP',
  PK: 'PKR', PL: 'PLN', PR: 'USD', PS: 'USD', PT: 'EUR', PW: 'USD', PY: 'PYG', QA: 'QAR', RO: 'RON', RS: 'RSD', RU: 'RUB', RW: 'RWF', SA: 'SAR',
  SB: 'SBD', SC: 'SCR', SD: 'SDG', SE: 'SEK', SG: 'SGD', SI: 'EUR', SK: 'EUR', SL: 'SLE', SM: 'EUR', SN: 'XOF', SO: 'SOS', SR: 'SRD', SS: 'SSP',
  ST: 'STN', SV: 'USD', SX: 'XCG', SY: 'SYP', SZ: 'SZL', TC: 'USD', TD: 'XAF', TG: 'XOF', TH: 'THB', TJ: 'TJS', TL: 'USD', TM: 'TMT', TN: 'TND',
  TO: 'TOP', TR: 'TRY', TT: 'TTD', TV: 'AUD', TZ: 'TZS', UA: 'UAH', UG: 'UGX', US: 'USD', UY: 'UYU', UZ: 'UZS', VC: 'XCD', VE: 'VES', VG: 'USD',
  VI: 'USD', VN: 'VND', VU: 'VUV', WS: 'WST', XK: 'EUR', YE: 'YER', ZA: 'ZAR', ZM: 'ZMW', ZW: 'ZWG',
};

// ICU の名前のうち、本文に入れると読みにくいもの（「Congo - Kinshasa」「中華人民共和国香港特別行政区」など）だけ直す
const OVERRIDE = {
  CD: { en: 'DR Congo', ja: 'コンゴ民主共和国', hi: 'कांगो लोकतांत्रिक गणराज्य', de: 'DR Kongo', ar: 'الكونغو الديمقراطية' },
  CG: { en: 'Republic of the Congo', ja: 'コンゴ共和国', hi: 'कांगो गणराज्य', es: 'República del Congo', de: 'Republik Kongo', ar: 'جمهورية الكونغو' },
  MM: { ja: 'ミャンマー', hi: 'म्यांमार', es: 'Myanmar', ar: 'ميانمار', en: 'Myanmar' },
  TL: { ar: 'تيمور الشرقية' },
  PS: { en: 'West Bank and Gaza', ja: 'ヨルダン川西岸・ガザ', zh: '约旦河西岸和加沙', hi: 'पश्चिमी तट और गाज़ा', es: 'Cisjordania y Gaza', de: 'Westjordanland und Gaza', ar: 'الضفة الغربية وقطاع غزة' },
  JG: { en: 'Channel Islands', ja: 'チャンネル諸島', zh: '海峡群岛', hi: 'चैनल द्वीपसमूह', es: 'Islas del Canal', de: 'Kanalinseln', ar: 'جزر القنال' },
};
// 地名に定冠詞が付く国（en は「in the …」、de は与格「in der / den / dem …」）。CALC の inName と同じ使い方
const IN_NAME = {
  en: { AE: 'the United Arab Emirates', BS: 'the Bahamas', CF: 'the Central African Republic', CD: 'the DR Congo', CG: 'the Republic of the Congo', DO: 'the Dominican Republic', GB: 'the United Kingdom', GM: 'the Gambia', KM: 'the Comoros', KY: 'the Cayman Islands', MH: 'the Marshall Islands', MV: 'the Maldives', MP: 'the Northern Mariana Islands', NL: 'the Netherlands', PH: 'the Philippines', SB: 'the Solomon Islands', TC: 'the Turks and Caicos Islands', VG: 'the British Virgin Islands', VI: 'the US Virgin Islands', FO: 'the Faroe Islands', JG: 'the Channel Islands', PS: 'the West Bank and Gaza', CZ: 'Czechia', FM: 'Micronesia' },
  de: { AE: 'den Vereinigten Arabischen Emiraten', BS: 'den Bahamas', CF: 'der Zentralafrikanischen Republik', CD: 'der DR Kongo', CG: 'der Republik Kongo', DO: 'der Dominikanischen Republik', GB: 'dem Vereinigten Königreich', IQ: 'dem Irak', IR: 'dem Iran', KM: 'den Komoren', KY: 'den Kaimaninseln', LB: 'dem Libanon', MH: 'den Marshallinseln', MN: 'der Mongolei', MV: 'den Malediven', MP: 'den Nördlichen Marianen', NL: 'den Niederlanden', NE: 'dem Niger', OM: 'dem Oman', PH: 'den Philippinen', SB: 'den Salomonen', SC: 'den Seychellen', SD: 'dem Sudan', SS: 'dem Südsudan', SK: 'der Slowakei', CH: 'der Schweiz', TD: 'dem Tschad', TR: 'der Türkei', UA: 'der Ukraine', YE: 'dem Jemen', XK: 'dem Kosovo', TC: 'den Turks- und Caicosinseln', VG: 'den Britischen Jungferninseln', VI: 'den Amerikanischen Jungferninseln', FO: 'den Färöern', JG: 'den Kanalinseln', PS: 'dem Westjordanland und Gaza', FM: 'Mikronesien' },
};

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function get(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': 'free-lunch-lab/1.0 (+https://github.com/eltociear/free-lunch-lab)' } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const j = await r.json();
      if (!Array.isArray(j) || (j[0] && j[0].message)) throw new Error(JSON.stringify(j[0] && j[0].message));
      return j;
    } catch (e) { if (i === 3) throw new Error(`${url}: ${e.message}`); await sleep(1500 * (i + 1)); }
  }
}
// 指標の全データ（国・集計すべて、FROM 年以降）→ iso3 → [{year, value}]（新しい順、空は除く）
async function series(id) {
  const out = {};
  let page = 1, pages = 1, updated = null;
  do {
    const [h, rows] = await get(`${API}/country/all/indicator/${id}?format=json&per_page=20000&date=${FROM}:2030&page=${page}`);
    pages = h.pages; updated = h.lastupdated || updated;
    for (const r of rows || []) if (r.value != null) (out[r.countryiso3code] = out[r.countryiso3code] || []).push({ year: +r.date, value: r.value });
  } while (++page <= pages);
  for (const k in out) out[k].sort((a, b) => b.year - a.year);
  return { data: out, updated };
}
const latest = (s, iso3) => (s.data[iso3] || [])[0] || null;
const at = (s, iso3, year) => (s.data[iso3] || []).find(x => x.year === year) || null;

function names(iso2) {
  const out = {}, cur = {};
  for (const l of LANGS) {
    const dn = new Intl.DisplayNames([l], { type: 'region' }), ds = new Intl.DisplayNames([l], { type: 'region', style: 'short' });
    let n = (OVERRIDE[iso2] && OVERRIDE[iso2][l]) || (['HK', 'MO'].includes(iso2) ? ds.of(iso2) : dn.of(iso2));
    if (l === 'en') n = n.replace(/ & /g, ' and ');
    if (l === 'hi' || l === 'ar') n = n.replace(/\s*[-–]\s*/g, ' - ').replace(/ - /g, ' ');
    out[l] = n;
  }
  return out;
}
function curNames(code) {
  const out = {};
  for (const l of LANGS) {
    let n = new Intl.NumberFormat(l, { style: 'currency', currency: code, currencyDisplay: 'name' }).formatToParts(1000).filter(p => p.type === 'currency').map(p => p.value).join('').trim();
    if (l === 'ja') n = n.replace(/([゠-ヿ]) (?=[゠-ヿ])/g, '$1・').replace(/ /g, '');
    if (l === 'de') n = n.replace(/^([A-ZÄÖÜ][\p{L}-]*ische?)(?= )/u, w => w[0].toLowerCase() + w.slice(1));
    if (l === 'en') n = n.replace(/ & /g, ' and ');
    out[l] = n;
  }
  return out;
}

const main = async () => {
  const [, meta] = await get(`${API}/country?format=json&per_page=400`);
  const countries = meta.filter(c => c.region && c.region.id && c.region.value.trim() !== 'Aggregates');
  const S = {};
  for (const [k, id] of Object.entries(IND)) { process.stdout.write(`${id} `); S[k] = await series(id); }
  const AGE = {};
  for (const id of AGE_IND) { process.stdout.write('.'); AGE[id] = await series(id); }
  console.log();
  const out = [], dropped = [];
  for (const c of countries) {
    const iso2 = c.iso2Code, iso3 = c.id;
    const pop = latest(S.pop, iso3);
    // GDP は現地通貨と米ドルが同じ年にそろう最新年（そろわなければ現地通貨だけ）
    const lcu = S.gdpLcu.data[iso3] || [];
    const pair = lcu.find(x => at(S.gdpUsd, iso3, x.year)) || null;
    const gdp = pair ? { lcu: pair.value, usd: at(S.gdpUsd, iso3, pair.year).value, year: pair.year } : lcu[0] ? { lcu: lcu[0].value, usd: null, year: lcu[0].year } : null;
    if (!pop || !gdp || gdp.year < GDP_MIN || !CURRENCY[iso2]) { dropped.push(`${iso2} ${c.name} (${!pop ? 'no population' : !gdp ? 'no GDP' : gdp.year < GDP_MIN ? `latest GDP is ${gdp.year}` : 'no currency'})`); continue; }
    // 18歳未満: 総人口と同じ年の年齢別人口（36 指標）がそろっていれば合計する
    let kids = null;
    const parts = AGE_IND.map(id => at(AGE[id], iso3, pop.year));
    if (parts.every(Boolean)) kids = { value: parts.reduce((n, x) => n + x.value, 0), year: pop.year, method: 'single-age' };
    const p14 = latest(S.pop0014, iso3);
    const fiscal = k => { const x = latest(S[k + 'Pct'], iso3); if (!x) return null; const v = at(S[k + 'Lcu'], iso3, x.year); return { pctGdp: +x.value.toFixed(3), lcu: v ? v.value : null, year: x.year }; };
    const fx = latest(S.fx, iso3), ppp = latest(S.ppp, iso3);
    out.push({
      id: iso2.toLowerCase(), iso3, wbName: c.name, region: c.region.id, income: c.incomeLevel ? c.incomeLevel.id : null,
      currency: CURRENCY[iso2],
      name: names(iso2), cur: curNames(CURRENCY[iso2]),
      ...(IN_NAME.en[iso2] || IN_NAME.de[iso2] ? { inName: Object.fromEntries(['en', 'de'].filter(l => IN_NAME[l][iso2]).map(l => [l, IN_NAME[l][iso2]])) } : {}),
      pop: { value: pop.value, year: pop.year },
      kids,
      pop0014: p14 ? { value: p14.value, year: p14.year } : null,
      gdp,
      fx: fx ? { value: fx.value, year: fx.year } : null,
      ppp: ppp ? { value: ppp.value, year: ppp.year } : null,
      gov: { expense: fiscal('exp'), revenue: fiscal('rev'), tax: fiscal('tax') },
    });
  }
  out.sort((a, b) => a.id.localeCompare(b.id));
  const ind = Object.fromEntries(Object.entries(IND).map(([k, id]) => [id, { field: k, url: `https://data.worldbank.org/indicator/${id}`, api: `${API}/country/all/indicator/${id}?format=json`, lastUpdated: S[k].updated }]));
  const doc = {
    note: 'Generated by scripts/fetch-worldbank.mjs. Do not edit by hand; re-run the script to refresh.',
    source: 'World Bank, World Development Indicators and Health Nutrition and Population Statistics (api.worldbank.org/v2)',
    license: 'CC BY 4.0 (World Bank data), https://datacatalog.worldbank.org/public-licenses#cc-by',
    retrieved: new Date().toISOString().slice(0, 10),
    fromYear: FROM,
    methods: {
      latest: 'Each field holds the latest non-empty year since ' + FROM + ' for that indicator, with its year.',
      dropped: 'Economies with no total population, no GDP, or a latest GDP older than ' + GDP_MIN + ' are left out (listed in dropped).',
      gdp: 'GDP (current LCU, NY.GDP.MKTP.CN) and GDP (current US$, NY.GDP.MKTP.CD) from the latest year in which both exist.',
      kids: 'Children = under 18: the sum of single-year age populations 0 to 17, female and male (SP.POP.AG00.FE.IN ... SP.POP.AG17.MA.IN, based on UN World Population Prospects), for the same year as total population. Adults (18+) = total population minus children.',
      gov: 'Government expense, revenue (excluding grants) and tax revenue as % of GDP (GC.XPN.TOTL.GD.ZS, GC.REV.XGRT.GD.ZS, GC.TAX.TOTL.GD.ZS), central government, latest year; the LCU amount for that year is kept for reference. null when the World Bank has no value since ' + FROM + '.',
      names: 'Country and currency names from Intl.DisplayNames / Intl.NumberFormat (Node ICU ' + process.versions.icu + ', CLDR ' + process.versions.cldr + '), with a few hand overrides.',
    },
    indicators: { ...ind, 'SP.POP.AGxx.FE.IN / SP.POP.AGxx.MA.IN (xx = 00-17)': { field: 'kids', url: 'https://data.worldbank.org/indicator/SP.POP.AG00.FE.IN', lastUpdated: AGE[AGE_IND[0]].updated } },
    dropped,
    count: out.length,
    countries: out,
  };
  fs.writeFileSync(OUT, JSON.stringify(doc, null, 1) + '\n');
  console.log(`wrote ${OUT}: ${out.length} countries; dropped ${dropped.length}: ${dropped.join('; ')}`);
  const noKids = out.filter(c => !c.kids).map(c => c.id);
  if (noKids.length) console.log(`no single-age data (children unknown): ${noKids.join(' ')}`);
};
main().catch(e => { console.error(e); process.exit(1); });
