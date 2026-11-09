// BI計算機の国のデータ: 手で調べた 7 か国（CALC、src/data.js）に、World Bank のデータ（data/countries-worldbank.json、
// scripts/fetch-worldbank.mjs で手で取り直す）の残りの国を足す。7 か国の人口・GDP・予算は CALC のまま（各国の公的統計が優先）。
//
// 最初の金額（World Bank から足した国）: 世界銀行の国際貧困ライン 1日3.00ドル（2021年購買力平価、2025年6月改定）× 365/12 日を、
//   ・家計消費の購買力平価換算係数（PA.NUS.PRVT.PP）が GDP の年の前年以降にあり、物価水準（PPP ÷ 為替）が 0.1〜2.5 に収まればそれで、
//   ・なければ GDP の現地通貨 ÷ 米ドル（同じ年）の為替レートで
//   現地通貨に直し、有効数字2桁に丸める。プリセットはその 0.5・1・2・3・5 倍（有効数字2桁）。
//   7 か国の最初の金額は CALC のまま（編集部が選んだ切りのいい額）。一覧（/calc/countries/）はどの国も貧困ラインでくらべる
const WB = require('../data/countries-worldbank.json');

const POVERTY_LINE = 3; // US$ / 日（2021 PPP）
const DAYS = 365 / 12;
const REGIONS = ['EAS', 'ECS', 'LCN', 'MEA', 'NAC', 'SAS', 'SSF'];
const sig2 = x => Number(x.toPrecision(2));
const ind = (id, iso2) => `https://data.worldbank.org/indicator/${id}?locations=${iso2.toUpperCase()}`;

function lineRule(w) {
  const fx = w.gdp.lcu / w.gdp.usd;
  const p = w.ppp;
  const ok = p && p.year >= w.gdp.year - 1 && p.value / fx > 0.1 && p.value / fx < 2.5;
  return ok ? { how: 'ppp', factor: p.value, year: p.year } : { how: 'fx', factor: fx, year: w.gdp.year };
}

// 政府の数字は、GDP の年から GOV_MAX_AGE 年以内のものだけ使う（それより古い GDP 比は当てにならない）
const GOV_MAX_AGE = 5;
function gov(w) {
  const g = {};
  for (const [k, f] of [['exp', 'expense'], ['rev', 'revenue'], ['tax', 'tax']]) if (w.gov[f] && w.gov[f].year >= w.gdp.year - GOV_MAX_AGE) g[k] = { p: w.gov[f].pctGdp, year: w.gov[f].year };
  return Object.keys(g).length ? g : null;
}

// 全部の国（言語によらない）。curated が先、あとは id 順
function world(CALC) {
  const byId = Object.fromEntries(WB.countries.map(w => [w.id, w]));
  const out = [];
  for (const c of CALC.countries) {
    const w = byId[c.id];
    if (!w) throw new Error(`calc ${c.id}: not in data/countries-worldbank.json`);
    const rule = lineRule(w);
    out.push({ ...c, featured: true, region: w.region, iso3: w.iso3, usd: w.gdp.usd / w.gdp.lcu, ...(c.budget ? {} : gov(w) ? { gov: gov(w) } : {}), line: { ...rule, monthly: sig2(POVERTY_LINE * DAYS * rule.factor) }, wb: w });
  }
  for (const w of WB.countries) {
    if (byId[w.id] && CALC.countries.some(c => c.id === w.id)) continue;
    if (!w.kids) throw new Error(`calc ${w.id}: no children figure in data/countries-worldbank.json`);
    const rule = lineRule(w);
    const def = sig2(POVERTY_LINE * DAYS * rule.factor);
    const presets = [...new Set([0.5, 1, 2, 3, 5].map(k => sig2(def * k)))];
    out.push({
      id: w.id, iso3: w.iso3, currency: w.currency, ...(w.inName ? { inName: w.inName } : {}), name: w.name, cur: w.cur, plain: true,
      presets, def,
      pop: { all: w.pop.value, adults: w.pop.value - w.kids.value, adultAge: 18, kids: w.kids.value, kidAge: 18, src: 'wbPop', year: w.pop.year },
      gdp: { value: w.gdp.lcu, year: w.gdp.year, src: 'wbGdpAll' },
      ...(gov(w) ? { gov: gov(w) } : {}),
      region: w.region, usd: w.gdp.usd / w.gdp.lcu, line: { ...rule, monthly: def }, wb: w,
    });
  }
  return out;
}

// World Bank の出典（国のページのリンク用）
function wbLinks(c) {
  const iso2 = c.id;
  return {
    pop: ind('SP.POP.TOTL', iso2), kids: ind('SP.POP.AG00.FE.IN', iso2), gdp: ind('NY.GDP.MKTP.CN', iso2), gdpUsd: ind('NY.GDP.MKTP.CD', iso2),
    exp: ind('GC.XPN.TOTL.GD.ZS', iso2), rev: ind('GC.REV.XGRT.GD.ZS', iso2), tax: ind('GC.TAX.TOTL.GD.ZS', iso2), ppp: ind('PA.NUS.PRVT.PP', iso2),
    line: 'https://www.worldbank.org/en/news/factsheet/2025/06/05/june-2025-update-to-global-poverty-lines',
  };
}

module.exports = { WB, REGIONS, POVERTY_LINE, DAYS, GOV_MAX_AGE, world, wbLinks };
