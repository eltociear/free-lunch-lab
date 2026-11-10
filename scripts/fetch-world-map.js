// 使い方（ビルドのたびには動かさない。地図を作り直すときだけ手で動かし、差分を確かめてからコミットする）:
//   mkdir /tmp/mapdeps && (cd /tmp/mapdeps && npm i d3-geo@3 topojson-client@3 world-atlas@2 i18n-iso-countries@7)
//   NODE_PATH=/tmp/mapdeps/node_modules node scripts/fetch-world-map.js
// 世界地図（/calc/map/ とエッセイの塗り分け地図）の国の形を、world-atlas の countries-110m（Natural Earth、パブリックドメイン）から
// Equal Earth 図法で投影した SVG の path にして data/world-map.json に保存する。build.js は d3 なしでこの JSON だけを読む。
// ・国の照合は ISO 3166-1 の数字コード → 2文字コード（i18n-iso-countries）。数字コードのない Kosovo は xk
// ・N. Cyprus と Somaliland は、データ（World Bank）の数え方にあわせて Cyprus（cy）と Somalia（so）の形に含める
// ・南極は描かない
// ・110m に形のない小さな国・地域のうち data/countries.json にあるものは、countries-50m の形の重心に点（dots）を置く
const fs = require('fs');
const path = require('path');
const d3 = require('d3-geo');
const topo = require('topojson-client');
const iso = require('i18n-iso-countries');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'world-map.json');
const W = 1000;
const MERGE = { 'N. Cyprus': 'cy', Somaliland: 'so', Kosovo: 'xk' };
const ids = new Set(require(path.join(ROOT, 'data', 'countries.json')).countries.map(c => c.id));

const t110 = require('world-atlas/countries-110m.json');
const t50 = require('world-atlas/countries-50m.json');
const code = g => MERGE[g.properties.name] || (g.id ? (iso.numericToAlpha2(g.id) || '').toLowerCase() : '');
const geos = t110.objects.countries.geometries.filter(g => code(g) !== 'aq');
const fc = { type: 'FeatureCollection', features: geos.map(g => topo.feature(t110, g)) };
const proj = d3.geoEqualEarth().fitWidth(W, fc);
const [[, y0], [, y1]] = d3.geoPath(proj).bounds(fc);
proj.translate([proj.translate()[0], proj.translate()[1] - y0 + 2]);
const H = Math.ceil(y1 - y0 + 4);
const geoPath = d3.geoPath(proj).digits(1);

// 同じ国（合わせたもの）の path はつなげる
const shapes = new Map();
for (const g of geos) {
  const id = code(g);
  if (!id) throw new Error(`no code for ${g.properties.name}`);
  const d = geoPath(topo.feature(t110, g));
  if (!d) continue;
  shapes.set(id, (shapes.get(id) || '') + d);
}
const dots = [];
for (const g of t50.objects.countries.geometries) {
  const id = g.id ? (iso.numericToAlpha2(g.id) || '').toLowerCase() : '';
  if (!id || shapes.has(id) || !ids.has(id) || dots.some(x => x.id === id)) continue;
  const f = topo.feature(t50, g);
  // いちばん大きい部分の重心（海外の島がある国でも本体に点を置く）
  const parts = f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates.map(c => ({ type: 'Polygon', coordinates: c })) : [f.geometry];
  const main = parts.reduce((a, b) => (d3.geoArea(b) > d3.geoArea(a) ? b : a));
  const [x, y] = proj(d3.geoCentroid(main));
  dots.push({ id, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
}
const out = {
  source: 'world-atlas 2 (countries-110m, countries-50m for dot positions), from Natural Earth (public domain)',
  sourceUrl: 'https://github.com/topojson/world-atlas',
  license: 'Public domain (Natural Earth)',
  projection: 'Equal Earth',
  width: W, height: H,
  shapes: [...shapes].sort(([a], [b]) => (a < b ? -1 : 1)).map(([id, d]) => ({ id, d })),
  dots: dots.sort((a, b) => (a.id < b.id ? -1 : 1)),
};
fs.writeFileSync(OUT, JSON.stringify(out) + '\n');
console.log(`data/world-map.json: ${out.shapes.length} shapes, ${out.dots.length} dots, ${W}x${H}, ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB`);
const missing = [...ids].filter(id => !shapes.has(id) && !dots.some(x => x.id === id));
if (missing.length) console.log(`not on the map: ${missing.join(' ')}`);
