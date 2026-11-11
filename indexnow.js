// 使い方: node build.js && npx wrangler deploy && node indexnow.js
// デプロイのあとに、新しいページ・本文が変わったページの URL を IndexNow（https://www.indexnow.org/）にまとめて1回で送る。
// Bing・Yandex・Naver・Seznam などが受け取る。「変わったか」は public/sitemap.xml の各 URL の HTML の本文だけのハッシュ（content-hash.js:
// タイトル・meta description・<main> の文字。上のバー・フッター・関連リンク・スクリプトや CSS・ファイル名は入れない）で判断し、
// 前回送ったときのハッシュ（data/indexnow-cache.json）と比べる。テンプレートだけの変更では送らない。
// サイトマップから消えた URL も送る（検索エンジンが 404 を確かめて外せるように）。
// 送る URL が CAP（200）を超えたら、警告を出して送らない（--all を付けたときだけ送る）。テンプレートの直しで全ページを送ってしまわないように。
// キャッシュの形式（scheme）が古いとき（前の HTML 全体のハッシュ）は、いまのページのハッシュで黙って作り直し、キャッシュに無かった新しい URL と消えた URL だけ送る。
// --seed で、いまの public/ のハッシュでキャッシュを作り直すだけ（何も送らない）。
// キャッシュを書き換えるのは送信が成功（200/202）したときと、作り直し（seed）のときだけ。失敗したら次回また送る。どの結果でも終了コードは 0（デプロイを止めない）。
// INDEXNOW_OFFLINE=1 でとばす。INDEXNOW_DRY_RUN=1 か --dry-run で、送る URL を表示するだけ（送信もキャッシュ更新もしない）
const fs = require('fs');
const path = require('path');
const { contentHash } = require('./content-hash.js');
const { SITE_URL } = require('./src/data.js');

const OUT = path.join(__dirname, 'public');
const CACHE = path.join(__dirname, 'data', 'indexnow-cache.json');
const KEY = fs.readFileSync(path.join(__dirname, 'src/indexnow-key.txt'), 'utf8').trim();
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10000;
const TIMEOUT = 20000;
const DRY = process.env.INDEXNOW_DRY_RUN === '1' || process.argv.includes('--dry-run');
const ALL = process.argv.includes('--all');
const SEED = process.argv.includes('--seed');
const CAP = 200;
// キャッシュのハッシュの形式。content-hash.js の中身を変えたら上げる（上げると次の実行で黙って作り直す）
const SCHEME = 'main-v1';

function readCache() {
  try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return { submittedOn: null, pages: {} }; }
}

function fileFor(url) {
  const p = decodeURIComponent(new URL(url).pathname);
  return path.join(OUT, p.endsWith('/') ? path.join(p, 'index.html') : p);
}

function currentPages() {
  const xml = fs.readFileSync(path.join(OUT, 'sitemap.xml'), 'utf8');
  const pages = {};
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = m[1].trim();
    let html;
    try { html = fs.readFileSync(fileFor(url), 'utf8'); } catch { console.log(`indexnow: no file for ${url} — skipped`); continue; }
    pages[url] = contentHash(html);
  }
  return pages;
}

const MESSAGES = {
  400: 'Bad request — the request body was not accepted',
  403: `Forbidden — the key was not valid: check that ${SITE_URL}/${KEY}.txt is live and contains the key (deploy first)`,
  422: 'Unprocessable — the URLs do not belong to the host, or the key does not match the key file',
  429: 'Too many requests — try again later',
};

async function main() {
  if (process.env.INDEXNOW_OFFLINE === '1') { console.log('INDEXNOW_OFFLINE=1 — skip'); return; }
  const cache = readCache();
  const pages = currentPages();
  const writeCache = next => {
    try {
      fs.mkdirSync(path.dirname(CACHE), { recursive: true });
      fs.writeFileSync(CACHE, JSON.stringify(next, null, 1) + '\n');
      console.log(`wrote ${path.relative(__dirname, CACHE)}`);
    } catch (e) { console.log(`indexnow: cache write skipped: ${e.message}`); }
  };
  if (SEED) {
    console.log(`indexnow: --seed — cache rebuilt from the current public/ (${Object.keys(pages).length} URLs), nothing submitted`);
    if (!DRY) writeCache({ scheme: SCHEME, submittedOn: cache.submittedOn || null, pages });
    return;
  }
  // 古い形式のキャッシュ: 本文が前回送ったときから変わったかは確かめられないので、キャッシュにあった URL はいまのハッシュで黙って登録し直す
  const migrate = cache.scheme !== SCHEME && Object.keys(cache.pages).length > 0;
  if (migrate) {
    const next = { scheme: SCHEME, submittedOn: cache.submittedOn, pages: {} };
    for (const u of Object.keys(pages)) if (u in cache.pages) next.pages[u] = pages[u];
    // 消えた URL は古いハッシュのまま残しておき、下で「消えた」として送る
    for (const u of Object.keys(cache.pages)) if (!(u in pages)) next.pages[u] = cache.pages[u];
    console.log(`indexnow: cache was in an older format; re-seeded ${Object.keys(pages).filter(u => u in cache.pages).length} known URL(s) silently (content hash ${SCHEME})`);
    cache.scheme = SCHEME; cache.pages = next.pages;
    if (!DRY) writeCache(next);
  }
  const changed = Object.keys(pages).filter(u => cache.pages[u] !== pages[u]);
  const removed = Object.keys(cache.pages).filter(u => !(u in pages));
  const urlList = [...changed, ...removed];
  const first = !cache.submittedOn;
  console.log(`indexnow: ${Object.keys(pages).length} URL(s) in the sitemap; ${changed.length} new or changed, ${removed.length} removed${first ? ' (first run: everything)' : ''}`);
  if (!urlList.length) { console.log('indexnow: nothing to submit'); return; }
  if (urlList.length > CAP && !ALL) {
    console.log(`indexnow: WARNING: ${urlList.length} URLs would be submitted, over the safety cap of ${CAP}. Nothing sent. If the main content of that many pages really changed, run: node indexnow.js --all`);
    for (const u of urlList.slice(0, 10)) console.log(`    ${u}`);
    if (urlList.length > 10) console.log(`    … and ${urlList.length - 10} more (node indexnow.js --dry-run lists them all)`);
    return;
  }
  const send = urlList.slice(0, MAX_URLS);
  if (urlList.length > MAX_URLS) console.log(`indexnow: ${urlList.length} URLs exceed the ${MAX_URLS} limit; sending the first ${MAX_URLS}, the rest next run`);

  if (DRY) {
    console.log('indexnow: dry run — would submit:');
    for (const u of send) console.log(`    ${u}`);
    return;
  }

  // 鍵ファイルが公開されていなければ送っても 403 になるので、先に確かめる
  const keyUrl = `${SITE_URL}/${KEY}.txt`;
  try {
    const r = await fetch(keyUrl, { signal: AbortSignal.timeout(TIMEOUT) });
    const body = r.ok ? (await r.text()).trim() : '';
    if (body !== KEY) { console.log(`indexnow: key file ${keyUrl} is not live (HTTP ${r.status}) — deploy first; nothing sent, will retry next run`); return; }
  } catch (e) { console.log(`indexnow: could not reach ${keyUrl} (${e.message}) — nothing sent, will retry next run`); return; }

  const host = new URL(SITE_URL).host;
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'User-Agent': 'free-lunch-lab-indexnow' },
      body: JSON.stringify({ host, key: KEY, keyLocation: keyUrl, urlList: send }),
      signal: AbortSignal.timeout(TIMEOUT),
    });
  } catch (e) { console.log(`indexnow: request failed (${e.message}) — will retry next run`); return; }

  if (res.status !== 200 && res.status !== 202) {
    const text = (await res.text().catch(() => '')).slice(0, 300);
    // 新しい鍵は IndexNow 側が鍵ファイルを確かめ終わるまで 403 SiteVerificationNotCompleted になる（しばらく待てば通る）
    const why = /SiteVerificationNotCompleted/.test(text) ? 'Forbidden — IndexNow has not finished verifying the key file yet (normal for a new key); run again later' : MESSAGES[res.status] || 'unexpected response';
    console.log(`indexnow: HTTP ${res.status} — ${why}${text ? `: ${text}` : ''}; cache not updated, will retry next run`);
    return;
  }
  console.log(`indexnow: HTTP ${res.status} — submitted ${send.length} URL(s)`);

  // 送れた分だけキャッシュに反映する（上限で残った分は次回に回る）
  const sent = new Set(send);
  const next = { scheme: SCHEME, submittedOn: new Date().toISOString().slice(0, 10), pages: {} };
  for (const u of Object.keys(cache.pages)) if (!sent.has(u) && u in pages) next.pages[u] = cache.pages[u];
  for (const u of send) if (u in pages) next.pages[u] = pages[u];
  writeCache(next);
}

// ゲートにしない: どんな失敗でも終了コードは 0
main().catch(e => { console.error('indexnow error (ignored):', e.message); });
