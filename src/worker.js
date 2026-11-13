// サイトの前に置く小さな Worker。ページの表示を Workers Analytics Engine に1件ずつ記録してから、静的ファイル（public/）をそのまま返す。
// 記録するのは パス・言語・?s=N（X の投稿ごとの印）・参照元のホスト名・ボットらしいかどうか だけ。
// IP アドレス、ユーザーエージェントの文字列、Cookie、参照元のパスやクエリは記録しない。
// フォントや画像などはこの Worker を通らない（wrangler.jsonc の run_worker_first で、ページのパスだけ通す）
// 記録は2種類（blob6）: 'srv' は HTML を返したときにサーバー側で数えたもの（クローラーも入る）。
// 'js' はページの小さなスクリプト（build.js の beacon）が、見えているページで本物の操作があったときに POST /b で送ったもの（人の閲覧の目安）
import CARDS from './calc-cards.json';
import QZ_CARDS from './shindan-cards.json';
import HH_CARDS from './household-cards.json';
const LANGS = new Set(['ja', 'zh', 'hi', 'es', 'de', 'ar']);
const BOT = /bot|crawl|spider|slurp|preview|fetch|monitor|headless|lighthouse|curl|wget|python|httpclient|java\/|go-http|node/i;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/b') return beacon(request, env, url);
    const res = await env.ASSETS.fetch(request);
    // 末尾の / がない URL（/ja → /ja/ など）には静的ファイル側が 307 を返す。検索エンジン向けに 301 にそろえる（クエリはそのまま）。
    // 存在しないパスはリダイレクトされず、そのまま 404 になる。リダイレクトはページの表示として数えない
    if ((res.status === 307 || res.status === 308) && !url.pathname.endsWith('/')) {
      let to = null;
      try { to = new URL(res.headers.get('location') || '', url); } catch {}
      if (to && to.origin === url.origin && to.pathname === url.pathname + '/') {
        to.search = url.search;
        return new Response(null, { status: 301, headers: { location: to.pathname + to.search } });
      }
    }
    try {
      const type = res.headers.get('content-type') || '';
      if (request.method === 'GET' && res.status === 200 && type.startsWith('text/html') && env.PAGEVIEWS) {
        const first = url.pathname.split('/')[1];
        const lang = LANGS.has(first) ? first : 'en';
        const s = (url.searchParams.get('s') || '').slice(0, 16).replace(/[^\w-]/g, '');
        let ref = '';
        try { const r = new URL(request.headers.get('referer') || ''); ref = r.host === url.host ? 'self' : r.host; } catch {}
        const bot = BOT.test(request.headers.get('user-agent') || '') ? '1' : '0';
        // blob1 パス, blob2 言語, blob3 s, blob4 参照元ホスト, blob5 ボット(1/0), blob6 記録の種類（srv）, double1 件数
        env.PAGEVIEWS.writeDataPoint({ indexes: [lang], blobs: [url.pathname.slice(0, 200), lang, s, ref.slice(0, 100), bot, 'srv'], doubles: [1] });
      }
    } catch {}
    if (EMBED_PATH.test(url.pathname)) return framable(res);
    return calcCard(request, url, res) || shindanCard(request, url, res) || householdCard(request, url, res) || res;
  },
};

// POST /b: ページのビーコン。中身は {p: パス, l: 言語, s: ?s= の印, r: 参照元ホスト か 'self'}（JSON、600 バイトまで）。
// 同じオリジンからの送信だけ受け、パスはページの形（/a/b/）で実在する HTML のときだけ、言語はパスの言語と一致するときだけ記録する。
// 1リクエストで1件だけ。どの結果でも 204 を返す（キャッシュしない）。記録の列の意味はサーバー側の記録と同じで、blob6 = 'js'
const PAGE_PATH = /^\/(?:[a-z0-9-]{1,80}\/){0,4}$/;
const HOST = /^[a-z0-9-]{1,63}(?:\.[a-z0-9-]{1,63})*(?::\d{1,5})?$/i;
const MARK = /^[\w-]{0,16}$/;
const NO_STORE = { 'cache-control': 'no-store' };
async function beacon(request, env, url) {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { allow: 'POST', ...NO_STORE } });
  const done = new Response(null, { status: 204, headers: NO_STORE });
  try {
    const h = request.headers, origin = h.get('origin'), site = h.get('sec-fetch-site');
    if (origin && origin !== url.origin) return done;
    if (site && site !== 'same-origin') return done;
    if (!origin && !site) { let ro = ''; try { ro = new URL(h.get('referer') || '').origin; } catch {} if (ro !== url.origin) return done; }
    if (Number(h.get('content-length') || 0) > 600) return done;
    const text = await request.text();
    if (text.length > 600) return done;
    const d = JSON.parse(text);
    if (!d || typeof d !== 'object') return done;
    const { p, l, s = '', r = '' } = d;
    if (typeof p !== 'string' || p.length > 200 || !PAGE_PATH.test(p)) return done;
    const first = p.split('/')[1];
    const lang = LANGS.has(first) ? first : 'en';
    if (l !== lang || typeof s !== 'string' || !MARK.test(s) || typeof r !== 'string' || r.length > 100) return done;
    const ref = r === '' || r === 'self' ? r : r.toLowerCase() === url.host ? 'self' : HOST.test(r) ? r.toLowerCase() : null;
    if (ref === null) return done;
    // 実在するページか（静的ファイルに聞くだけ。これ自体は記録しない）
    const page = await env.ASSETS.fetch(new Request(url.origin + p, { method: 'HEAD' }));
    if (page.status !== 200 || !(page.headers.get('content-type') || '').startsWith('text/html')) return done;
    const bot = BOT.test(h.get('user-agent') || '') ? '1' : '0';
    if (env.PAGEVIEWS) env.PAGEVIEWS.writeDataPoint({ indexes: [lang], blobs: [p, lang, s, ref, bot, 'js'], doubles: [1] });
  } catch {}
  return done;
}

// 埋め込み用の計算機（/embed/calc/、/{lang}/embed/calc/）だけは、どのサイトの iframe にも入れてよい。
// サイトのほかのページには X-Frame-Options も frame-ancestors も付けていないが、念のためここで外してから frame-ancestors * を付ける。
// 検索には出さない（ページの meta robots と同じ noindex, follow をヘッダーでも）
const EMBED_PATH = /^\/(?:(?:ja|zh|hi|es|de|ar)\/)?embed\/calc\/$/;
function framable(res) {
  const r = new Response(res.body, res);
  r.headers.delete('x-frame-options');
  r.headers.set('content-security-policy', 'frame-ancestors *');
  r.headers.set('x-robots-tag', 'noindex, follow');
  return r;
}

// BI計算機の結果カード: /calc/?c=jp&w=all&m=30000 のように、og.js が画像を作った組み合わせなら
// og:image・twitter:image・og:title・og:description をその結果のものに書き換える（X などのリンクのプレビュー用）。
// それ以外（パラメータなし・自由な金額・おかしな値）は元のページのまま
const SITE = 'https://neteru-nyukin.eltociear.workers.dev';
// 国のページ（/calc/jp/?w=all&m=30000）は、パスの国で同じカードを探す（7 か国だけ。ほかの国はページのままの計算機の画像）
const CALC_PATH = /^\/(?:(ja|zh|hi|es|de|ar)\/)?calc\/(?:([a-z]{2})\/)?$/;
function calcCard(request, url, res) {
  const m = request.method === 'GET' && res.status === 200 && url.search ? url.pathname.match(CALC_PATH) : null;
  if (!m) return null;
  const lang = m[1] || 'en';
  const q = url.searchParams, amount = Number(q.get('m'));
  const id = `${m[2] || q.get('c')}-${q.get('w')}-${amount}`;
  const hit = Object.prototype.hasOwnProperty.call(CARDS[lang] || {}, id) ? CARDS[lang][id] : null;
  if (!hit) return res;
  return swapMeta(res, `${SITE}/og/calc/${lang}/${id}.jpg`, hit[0], hit[1]);
}

// タダ飯診断の結果のシェア: /shindan/?r={type}&s=wa のように（s は経路の印。古いリンクの s=shindan も同じ）、r が og.js がカードを作ったタイプなら
// その結果カード（/og/shindan/{lang}/{type}.jpg）に差し替える。ページの中身（診断）と canonical はそのまま。r がおかしければ元のページのまま
const QZ_PATH = /^\/(?:(ja|zh|hi|es|de|ar)\/)?shindan\/$/;
function shindanCard(request, url, res) {
  const m = request.method === 'GET' && res.status === 200 && url.search ? url.pathname.match(QZ_PATH) : null;
  if (!m) return null;
  const lang = m[1] || 'en', id = url.searchParams.get('r') || '';
  const hit = Object.prototype.hasOwnProperty.call(QZ_CARDS[lang] || {}, id) ? QZ_CARDS[lang][id] : null;
  if (!hit) return res;
  return swapMeta(res, `${SITE}/og/shindan/${lang}/${id}.jpg`, hit[0], hit[1]);
}

// わが家のBI計算機の結果のシェア: /calc/household/?a=…&r={区分}&s=hh-share のように、r が og.js がカードを作った区分
// （big-gain / gain / even / loss / big-loss）なら、その区分のカード（/og/hh/{lang}/{区分}.jpg）に差し替える。
// 区分は URL だけで決まる（同じ URL なら同じ中身）。ページの中身と canonical はそのまま。r がなければ・おかしければ元のページのまま
const HH_PATH = /^\/(?:(ja|zh|hi|es|de|ar)\/)?calc\/household\/$/;
function householdCard(request, url, res) {
  const m = request.method === 'GET' && res.status === 200 && url.search ? url.pathname.match(HH_PATH) : null;
  if (!m) return null;
  const lang = m[1] || 'en', id = url.searchParams.get('r') || '';
  const hit = Object.prototype.hasOwnProperty.call(HH_CARDS[lang] || {}, id) ? HH_CARDS[lang][id] : null;
  if (!hit) return res;
  return swapMeta(res, `${SITE}/og/hh/${lang}/${id}.jpg`, hit[0], hit[1]);
}

function swapMeta(res, image, title, desc) {
  const set = v => ({ element(el) { el.setAttribute('content', v); } });
  const out = new HTMLRewriter()
    .on('meta[property="og:image"]', set(image))
    .on('meta[name="twitter:image"]', set(image))
    .on('meta[property="og:title"]', set(title))
    .on('meta[name="twitter:title"]', set(title))
    .on('meta[property="og:description"]', set(desc))
    .on('meta[name="twitter:description"]', set(desc))
    .transform(res);
  // 中身が元のファイルと変わるので、静的ファイルの ETag は付けない
  const r = new Response(out.body, out);
  r.headers.delete('etag');
  return r;
}
