// サイトの前に置く小さな Worker。ページの表示を Workers Analytics Engine に1件ずつ記録してから、静的ファイル（public/）をそのまま返す。
// 記録するのは パス・言語・?s=N（X の投稿ごとの印）・参照元のホスト名・ボットらしいかどうか だけ。
// IP アドレス、ユーザーエージェントの文字列、Cookie、参照元のパスやクエリは記録しない。
// フォントや画像などはこの Worker を通らない（wrangler.jsonc の run_worker_first で、ページのパスだけ通す）
import CARDS from './calc-cards.json';
import QZ_CARDS from './shindan-cards.json';
const LANGS = new Set(['ja', 'zh', 'hi', 'es', 'de', 'ar']);
const BOT = /bot|crawl|spider|slurp|preview|fetch|monitor|headless|lighthouse|curl|wget|python|httpclient|java\/|go-http|node/i;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
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
        // blob1 パス, blob2 言語, blob3 s, blob4 参照元ホスト, blob5 ボット(1/0), double1 件数
        env.PAGEVIEWS.writeDataPoint({ indexes: [lang], blobs: [url.pathname.slice(0, 200), lang, s, ref.slice(0, 100), bot], doubles: [1] });
      }
    } catch {}
    return calcCard(request, url, res) || shindanCard(request, url, res) || res;
  },
};

// BI計算機の結果カード: /calc/?c=jp&w=all&m=30000 のように、og.js が画像を作った組み合わせなら
// og:image・twitter:image・og:title・og:description をその結果のものに書き換える（X などのリンクのプレビュー用）。
// それ以外（パラメータなし・自由な金額・おかしな値）は元のページのまま
const SITE = 'https://neteru-nyukin.eltociear.workers.dev';
const CALC_PATH = /^\/(?:(ja|zh|hi|es|de|ar)\/)?calc\/$/;
function calcCard(request, url, res) {
  const m = request.method === 'GET' && res.status === 200 && url.search ? url.pathname.match(CALC_PATH) : null;
  if (!m) return null;
  const lang = m[1] || 'en';
  const q = url.searchParams, amount = Number(q.get('m'));
  const id = `${q.get('c')}-${q.get('w')}-${amount}`;
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
