// 「Listed on Free Lunch Lab」バッジの SVG（build.js が public/badge/ に書き出す）
// 外部フォントは使わず、shields.io と同じく Verdana 系のフォントを指定し、文字幅は下の表から計算して textLength で固定する
// （Verdana がなく DejaVu Sans などで描かれても、幅がずれない）

// Verdana の文字幅（100px あたり、U+0020〜U+007E）。ヘッドレス Chrome の canvas.measureText で測った値
const W = {
  normal: [35,39,46,82,64,108,73,27,45,45,64,82,36,45,36,45,64,64,64,64,64,64,64,64,64,64,45,45,82,82,82,55,100,68,69,70,77,63,57,78,75,42,45,69,56,84,75,79,60,79,70,68,62,73,68,99,69,62,69,45,45,45,82,64,64,60,62,52,62,60,35,62,63,27,34,59,27,97,63,61,62,62,43,52,39,63,59,82,59,59,53,63,45,63,82],
  bold: [34,40,59,87,71,127,86,33,54,54,71,87,36,48,36,69,71,71,71,71,71,71,71,71,71,71,40,40,87,87,87,62,96,78,76,72,83,68,65,81,84,55,56,77,64,95,85,85,73,85,78,71,68,81,76,113,76,74,69,54,69,54,87,71,71,67,70,59,70,66,42,70,71,34,40,67,34,106,71,69,70,70,50,59,46,71,65,98,67,65,60,71,54,71,87],
};
// 文字列の幅（px、小数1桁）。表にない文字は M の幅で見積もる
function textWidth(str, size, weight = 'normal') {
  let w = 0;
  for (const ch of str) {
    const c = ch.codePointAt(0);
    w += c >= 32 && c < 127 ? W[weight][c - 32] : W[weight][77 - 32];
  }
  return Math.round(w * size) / 100;
}

const FONT = 'Verdana,DejaVu Sans,Geneva,sans-serif';
const LABEL = 'Listed on Free Lunch Lab';
const r1 = n => Math.round(n * 10) / 10;
const xesc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const open = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${LABEL}"><title>${LABEL}</title>`;
// サイトの「もらえる」グラデーション（黄→青緑）
const GRAD = '<linearGradient id="a" x2="1" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#6CF0B0"/></linearGradient>';

// 小さな弁当箱（アバターと同じ配色）。15×12 の箱を (x, y) に s 倍で置く
const bento = (x, y, s = 1) => `<g transform="translate(${x} ${y})${s === 1 ? '' : ` scale(${s})`}"><rect width="15" height="12" rx="2.6" fill="url(#a)"/><rect x="1.1" y="1.1" width="12.8" height="9.8" rx="1.6" fill="#141A3A"/><rect x="1.8" y="1.8" width="6.1" height="8.4" rx=".9" fill="#F6F2E6"/><circle cx="4.85" cy="6" r="1.45" fill="#E8505B"/><rect x="8.6" y="1.8" width="4.6" height="3.9" rx=".6" fill="#FFD66B"/><rect x="8.6" y="6.3" width="4.6" height="3.9" rx=".6" fill="#1B6B52"/><circle cx="10.2" cy="8.3" r="1.15" fill="#6CF0B0"/><circle cx="12.1" cy="7.7" r=".85" fill="#3FCF92"/></g>`;

// shields.io の flat 形式に近い 20px のバッジ。左に弁当と「Free Lunch Lab」、右に「listed」
function flat(theme = 'dark') {
  const dark = theme === 'dark';
  const left = 'Free Lunch Lab', right = 'listed';
  const lw = textWidth(left, 11), rw = textWidth(right, 11);
  const L = Math.ceil(5 + 15 + 4 + lw + 6), R = Math.ceil(6 + rw + 6), Wd = L + R;
  return open(Wd, 20)
    + `<defs>${GRAD}<linearGradient id="s" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${Wd}" height="20" rx="3"/></clipPath></defs>`
    + `<g clip-path="url(#r)"><rect width="${L}" height="20" fill="${dark ? '#141A3A' : '#F6F2E6'}"/><rect x="${L}" width="${R}" height="20" fill="url(#a)"/><rect width="${Wd}" height="20" fill="url(#s)"/></g>`
    + (dark ? '' : `<rect x=".5" y=".5" width="${Wd - 1}" height="19" rx="2.5" fill="none" stroke="#141A3A" stroke-opacity=".18"/>`)
    + bento(5, 4)
    + `<g font-family="${FONT}" font-size="11" text-rendering="geometricPrecision"><text x="24" y="14" fill="${dark ? '#EEF1FF' : '#18213B'}" textLength="${r1(lw)}" lengthAdjust="spacingAndGlyphs">${left}</text><text x="${L + 6}" y="14" fill="#141A3A" textLength="${r1(rw)}" lengthAdjust="spacingAndGlyphs">${right}</text></g></svg>`;
}

// サイト向けの大きめのカード（240×60）。弁当、「LISTED ON」「Free Lunch Lab」、キャッチコピー
function card(theme = 'dark', tagline = 'There is such a thing as a free lunch.') {
  const dark = theme === 'dark';
  const w = 240, h = 60, x = 66, avail = w - x - 10;
  const fit = (s, size, weight) => { const tw = textWidth(s, size, weight); return tw <= avail ? [size, tw] : [r1(size * avail / tw), avail]; };
  const [s1, w1] = fit('LISTED ON', 8, 'bold');
  const [s2, w2] = fit('Free Lunch Lab', 15, 'bold');
  const [s3, w3] = fit(tagline, 8.5, 'normal');
  const stars = dark ? [[200, 9, .8], [226, 20, .6], [150, 7, .5], [232, 47, .7], [58, 9, .5]].map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" opacity=".7"/>`).join('') : '';
  return open(w, h)
    + `<defs>${GRAD}<linearGradient id="b" x2="0" y2="1"><stop offset="0" stop-color="${dark ? '#121741' : '#FFFFFF'}"/><stop offset="1" stop-color="${dark ? '#0A0F24' : '#F3EFE4'}"/></linearGradient></defs>`
    + `<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="10" fill="url(#b)" stroke="url(#a)" stroke-width="2"/>${stars}`
    + bento(12, 12, 2.95)
    + `<g font-family="${FONT}" text-rendering="geometricPrecision">`
    + `<text x="${x}" y="19" font-size="${s1}" font-weight="bold" fill="${dark ? '#A9B2D8' : '#56627A'}" textLength="${r1(w1)}" lengthAdjust="spacingAndGlyphs">LISTED ON</text>`
    + `<text x="${x}" y="36" font-size="${s2}" font-weight="bold" fill="${dark ? '#FFD66B' : '#141A3A'}" textLength="${r1(w2)}" lengthAdjust="spacingAndGlyphs">Free Lunch Lab</text>`
    + `<text x="${x}" y="49" font-size="${s3}" fill="${dark ? '#CFD6FF' : '#56627A'}" textLength="${r1(w3)}" lengthAdjust="spacingAndGlyphs">${xesc(tagline)}</text></g></svg>`;
}

// public/badge/ に置くファイル（名前 → [SVG, 幅, 高さ]）
function badgeFiles() {
  const dims = s => s.match(/width="(\d+)" height="(\d+)"/).slice(1).map(Number);
  const files = { 'listed.svg': flat('dark'), 'listed-light.svg': flat('light'), 'listed-card.svg': card('dark'), 'listed-card-light.svg': card('light') };
  return Object.fromEntries(Object.entries(files).map(([f, svg]) => {
    if (Buffer.byteLength(svg) > 3072) throw new Error(`badge/${f} is over 3KB`);
    return [f, { svg, width: dims(svg)[0], height: dims(svg)[1] }];
  }));
}

module.exports = { badgeFiles, textWidth, LABEL };
