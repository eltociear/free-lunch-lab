// ページの「中身」のハッシュ。IndexNow（indexnow.js）に送るかどうかと、sitemap.xml の lastmod（build.js）の両方がこれで決まる。
// 見るのは <title>・meta description・<main> の本文の文字だけ（<main> のないトップページは <body> から上のバーを除いたもの）。
// サイト共通の部分（上のバー・パンくず・目次などの <nav>、フッター、関連リンクの欄、戻るボタン）、<script>・<style>、
// タグの属性（フォントや画像のファイル名、CSS/JS のハッシュ）、空白の違いは入れない。なのでテンプレートを直しても、本文が同じなら変わらない
const crypto = require('crypto');

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decodeEnt = t => t.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : +e.slice(1)) : ENT[e] ?? m);

// ビルドのたびに変わるだけの部分: オープンソース一覧の「取得日」・スター数・最終コミット日（oss-fetch.js が毎回取り直す）
function stripVolatile(html) {
  return html
    .replace(/<p class="oss-note">(?:(?!<\/p>)[\s\S])*?open-source\.json<\/a><\/p>/g, '<p class="oss-note"></p>')
    .replace(/<dl class="oss-facts">[\s\S]*?<\/dl>/g, dl => dl
      .replace(/<dd>★[^<]*<\/dd>/g, '<dd>★</dd>')
      .replace(/<time datetime="[^"]*">[^<]*<\/time>/g, '<time></time>'));
}

function mainText(html) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  let body = (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/) || [])[1];
  if (body == null) body = ((html.match(/<body\b[^>]*>([\s\S]*)<\/body>/) || [])[1] || '').replace(/<div class="bar">[\s\S]*?<\/details>/, '');
  body = stripVolatile(body)
    .replace(/<script\b[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[\s\S]*?<\/style>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<nav\b[\s\S]*?<\/nav>/g, '')
    .replace(/<footer\b[\s\S]*?<\/footer>/g, '')
    .replace(/<details class="lm"[\s\S]*?<\/details>/g, '')
    .replace(/<section (?:id="related"|class="es-rel")[\s\S]*?<\/section>/g, '')
    .replace(/<p class="(?:related|g-link|org-link|back)\b[^"]*">[\s\S]*?<\/p>/g, '');
  const text = decodeEnt(body.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  return `${decodeEnt(title).trim()}\n${decodeEnt(desc).trim()}\n${text}`;
}

const contentHash = html => crypto.createHash('sha256').update(mainText(html)).digest('hex').slice(0, 16);

module.exports = { contentHash, mainText };
