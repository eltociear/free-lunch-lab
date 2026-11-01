// サイトの前に置く小さな Worker。ページの表示を Workers Analytics Engine に1件ずつ記録してから、静的ファイル（public/）をそのまま返す。
// 記録するのは パス・言語・?s=N（X の投稿ごとの印）・参照元のホスト名・ボットらしいかどうか だけ。
// IP アドレス、ユーザーエージェントの文字列、Cookie、参照元のパスやクエリは記録しない。
// フォントや画像などはこの Worker を通らない（wrangler.jsonc の run_worker_first で、ページのパスだけ通す）
const LANGS = new Set(['ja', 'zh', 'hi', 'es', 'de', 'ar']);
const BOT = /bot|crawl|spider|slurp|preview|fetch|monitor|headless|lighthouse|curl|wget|python|httpclient|java\/|go-http|node/i;

export default {
  async fetch(request, env, ctx) {
    const res = await env.ASSETS.fetch(request);
    try {
      const url = new URL(request.url);
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
