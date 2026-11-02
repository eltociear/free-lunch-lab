// サイトの前に置く小さな Worker。ページの表示を Workers Analytics Engine に1件ずつ記録してから、静的ファイル（public/）をそのまま返す。
// 記録するのは パス・言語・?s=N（X の投稿ごとの印）・参照元のホスト名・ボットらしいかどうか だけ。
// IP アドレス、ユーザーエージェントの文字列、Cookie、参照元のパスやクエリは記録しない。
// フォントや画像などはこの Worker を通らない（wrangler.jsonc の run_worker_first で、ページのパスだけ通す）
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
    return res;
  },
};
