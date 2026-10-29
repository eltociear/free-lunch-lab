// 使い方: node liveness.js  →  src/data.js の SERVICES（掲載中サービス）の official URL を実際に叩いて、
// 生きているか／リンクが切れたか／「確認月(checked)」が古くなっていないかを点検し、data/liveness-cache.json に保存する。
// これは awesome-molt-ecosystem 側の scripts/liveness_recheck.py と対になる点検: あちらは「死んだ」ものの復活を、
// こちらは「生きている」はずのものの死とリンク腐りを拾う。ネットワークエラーはビルドを止めない（ゲートにしない）。
// LIVENESS_OFFLINE=1 で取得をとばす。403/429 は「ボット拒否」であって死ではない、という扱いは Python 側と同じ。
const fs = require('fs');
const path = require('path');
const { SERVICES } = require('./src/data.js');

const CACHE = path.join(__dirname, 'data', 'liveness-cache.json');
const TIMEOUT = 15000;
const TRIES = 2;                 // この環境は接続が時々切れるので best-of-N
const STALE_MONTHS = 4;          // 「確認月」がこれより古ければ再確認を促す

// 000(接続不可) / 404 / 5xx = 死。403・429 はボット拒否でページは在る。
function isDead(code) { return code === 0 || code === 404 || (code >= 500 && code <= 599); }

async function hit(url) {
  try {
    const res = await fetch(url, {
      method: 'GET', redirect: 'follow',
      headers: { 'User-Agent': 'free-lunch-lab-liveness (+https://github.com/eltociear/free-lunch-lab)' },
      signal: AbortSignal.timeout(TIMEOUT),
    });
    return res.status;
  } catch { return 0; }  // タイムアウト/DNS失敗など = 0（接続不可）
}

async function status(url) {
  // 生きた答え(2xx/3xx か 403/429)が出たら即確定。死に見えるときだけ再試行。
  let best = 0;
  for (let i = 0; i < TRIES; i++) {
    const code = await hit(url);
    if (!isDead(code)) return code;
    if (best === 0) best = code;
  }
  return best;
}

function monthsSince(checked) {
  // checked は "2026-10" 形式。欠けていれば null。
  const m = /^(\d{4})-(\d{2})/.exec(checked || '');
  if (!m) return null;
  const then = new Date(Number(m[1]), Number(m[2]) - 1, 1);
  const now = new Date();
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
}

async function main() {
  const cache = { checkedOn: new Date().toISOString(), services: {} };
  if (process.env.LIVENESS_OFFLINE === '1') {
    console.log('LIVENESS_OFFLINE=1 — skip');
    return;
  }
  const targets = SERVICES.filter(s => s.official && /^https?:\/\//.test(s.official));
  const results = await Promise.all(targets.map(async s => {
    const code = await status(s.official);
    return { id: s.id, name: s.name, url: s.official, code, checked: s.checked, stale: monthsSince(s.checked) };
  }));

  const dead = [], stale = [];
  for (const r of results) {
    cache.services[r.id] = { code: r.code, url: r.url, checked: r.checked };
    if (isDead(r.code)) dead.push(r);
    else if (r.stale != null && r.stale >= STALE_MONTHS) stale.push(r);
  }

  console.log(`\n=== Free Lunch Lab liveness: ${results.length} listed service(s) ===`);
  if (dead.length) {
    console.log(`>>> DEAD — listed live, now unreachable (${dead.length}): verify, then move to GRAVE or fix the link`);
    for (const r of dead.sort((a, b) => a.name.localeCompare(b.name))) {
      console.log(`    ${String(r.code).padStart(3)}  ${r.name}  (${r.url})`);
    }
  }
  if (stale.length) {
    console.log(`>>> STALE — "checked" ${STALE_MONTHS}+ months old (${stale.length}): re-verify the facts and bump the date`);
    for (const r of stale.sort((a, b) => b.stale - a.stale)) {
      console.log(`    ${r.checked}  (${r.stale}mo)  ${r.name}`);
    }
  }
  console.log(`unchanged: ${results.length - dead.length - stale.length} live & fresh (403/429 counted live — a refused bot, not a gone page)`);

  try {
    fs.mkdirSync(path.dirname(CACHE), { recursive: true });
    fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
    console.log(`wrote ${path.relative(__dirname, CACHE)}`);
  } catch (e) { console.log(`cache write skipped: ${e.message}`); }

  // ゲートにしない: 死リンクがあっても終了コードは 0（ビルド/デプロイを止めない）。
}

main().catch(e => { console.error('liveness error (ignored):', e.message); });
