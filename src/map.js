// 世界の塗り分け地図: 全員に1日3.00ドル（貧困ライン）を1年配ったときの額が、その国の政府の税収の何％か。
// 形は data/world-map.json（scripts/fetch-world-map.js で world-atlas から作った Equal Earth の SVG path）。d3 は使わない。
// build.js（/calc/map/ とエッセイ）、og.js（OG 画像）、brand/x/infographics/render.js（X の画像）が同じ関数で描く。
//
// 比べる税収（base）: governmentUsedInCalculator の税収（GDP 比、GDP の年から5年以内）→ なければ歳入 →
//   国の予算を持つ国（日本）はその税収（租税及印紙収入）。どれもなければ「データなし」
const MAP = require('../data/world-map.json');

// 色: 1色相（アンバー）の明→暗。サイトの暗い面（--paper #0E1320）で最も暗い段も 2.5:1。データなしは灰色に斜線
// （dataviz の validate_palette.js --ordinal: 暗い面・明るい面とも合格）
const BINS = [
  { max: 0.10, dark: '#FFE9C2', light: '#E6A35C' },
  { max: 0.25, dark: '#FFC266', light: '#D9822F' },
  { max: 0.50, dark: '#F0952A', light: '#B8641C' },
  { max: 1.00, dark: '#CF6E14', light: '#8F4A12' },
  { max: Infinity, dark: '#8C3F06', light: '#5A2A06' },
];
const NONE = 5;
const binOf = r => (r == null ? NONE : BINS.findIndex(b => (b.max === 1 ? r <= 1 : r < b.max)));

// CALC_WORLD の国ごとの数字。gdp と tax は比（0.0209 = 2.09%）
function rows(world) {
  return world.map(c => {
    const cost = c.pop.all * c.line.monthly * 12;
    const gdp = cost / c.gdp.value;
    let base = null;
    if (c.gov && c.gov.tax) base = { k: 'tax', share: c.gov.tax.p / 100, year: c.gov.tax.year };
    else if (c.gov && c.gov.rev) base = { k: 'rev', share: c.gov.rev.p / 100, year: c.gov.rev.year };
    else if (c.budget && c.budget.tax) base = { k: 'budget', share: c.budget.tax / c.gdp.value, year: null };
    const tax = base ? gdp / base.share : null;
    return { id: c.id, c, cost, gdp, base, tax, bin: binOf(tax) };
  });
}
const counts = list => BINS.map((_, i) => list.filter(r => r.bin === i).length).concat(list.filter(r => r.bin === NONE).length);

// 色の変数（.wmap の中だけで使う）。dark はサイト（暗い面）、light は明るい面に置くとき用
const tokens = (mode = 'dark') => BINS.map((b, i) => `--wm-${i}:${b[mode]}`).join(';') + (mode === 'dark'
  ? ';--wm-none:#2E364A;--wm-hatch:#4A5571;--wm-edge:#0E1320;--wm-hi:#EEF1FF'
  : ';--wm-none:#E4E1DA;--wm-hatch:#B9B4A8;--wm-edge:#FFFFFF;--wm-hi:#1A2240');
const CSS = `.wmap,.wm-sw{${tokens('dark')}}
.wmap.wm-light{${tokens('light')}}
.wmap svg{display:block;width:100%;height:auto}
.wmap path,.wmap circle{stroke:var(--wm-edge);stroke-width:.5;stroke-linejoin:round}
.wmap circle{stroke-width:.8}
${BINS.map((_, i) => `.wmap .b${i},.wm-sw.b${i}{fill:var(--wm-${i});background:var(--wm-${i})}`).join('\n')}
.wmap .b5{fill:url(#wmHatch)}
.wm-sw.b5{background:repeating-linear-gradient(45deg,var(--wm-none) 0 3px,var(--wm-hatch) 3px 5px)}
.wmap .wm-i path:hover,.wmap .wm-i circle:hover,.wmap .wm-i .on{stroke:var(--wm-hi);stroke-width:1.2}
.wm-sw{display:inline-block;width:1.1em;height:.8em;border-radius:2px;flex:none}`;

// SVG。tip(row|null, id) が文字を返せば国ごとに <title> を付ける（ページ用）。OG・X の画像では付けない
function svg({ list, tip = null, label = '', labelId = 'wmT', cls = '' }) {
  const by = Object.fromEntries(list.map(r => [r.id, r]));
  const t = (id) => { if (!tip) return ''; const s = tip(by[id] || null, id); return s ? `<title>${esc(s)}</title>` : ''; };
  const binC = id => (by[id] ? by[id].bin : NONE);
  const shapes = MAP.shapes.map(s => `<path class="b${binC(s.id)}" data-id="${s.id}" d="${s.d}">${t(s.id)}</path>`).join('');
  const dots = MAP.dots.map(d => `<circle class="b${binC(d.id)}" data-id="${d.id}" cx="${d.x}" cy="${d.y}" r="3">${t(d.id)}</circle>`).join('');
  return `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 ${MAP.width} ${MAP.height}" width="${MAP.width}" height="${MAP.height}"${label ? ` role="img" aria-labelledby="${labelId}"` : ' aria-hidden="true"'} focusable="false">${label ? `<title id="${labelId}">${esc(label)}</title>` : ''}<defs><pattern id="wmHatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><rect width="5" height="5" style="fill:var(--wm-none)"/><rect width="1.6" height="5" style="fill:var(--wm-hatch)"/></pattern></defs><g>${shapes}</g><g>${dots}</g></svg>`;
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

module.exports = { MAP, BINS, NONE, binOf, rows, counts, CSS, tokens, svg };
