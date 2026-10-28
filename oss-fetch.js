// 使い方: node oss-fetch.js  →  src/data.js の OSS（オープンソース一覧）のスター数・最終コミット日・アーカイブ状態・ライセンス・言語を
// GitHub / GitLab の API から取り、data/open-source-cache.json に保存する。build.js の最初でも呼ばれる。
// ネットワークエラーやレート制限のときは、そのリポジトリだけ前回のキャッシュを残す（ビルドは止めない）。OSS_OFFLINE=1 で取得をとばす
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { OSS } = require('./src/data.js');

const CACHE = path.join(__dirname, 'data', 'open-source-cache.json');
const TIMEOUT = 10000;

function readCache() {
  try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return { fetchedOn: null, repos: {} }; }
}

function githubToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try { return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 5000 }).trim() || null; } catch { return null; }
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': 'free-lunch-lab-build', ...headers }, signal: AbortSignal.timeout(TIMEOUT) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

// GitLab のライセンス key（agpl-3.0 など）を SPDX 風の表記にそろえる
const SPDX = { 'agpl-3.0': 'AGPL-3.0', 'gpl-3.0': 'GPL-3.0', 'gpl-2.0': 'GPL-2.0', 'lgpl-3.0': 'LGPL-3.0', 'mit': 'MIT', 'apache-2.0': 'Apache-2.0', 'mpl-2.0': 'MPL-2.0', 'bsd-3-clause': 'BSD-3-Clause', 'isc': 'ISC' };

async function fromGithub(repo, token) {
  const h = { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) };
  const r = await getJson(`https://api.github.com/repos/${repo}`, h);
  const c = await getJson(`https://api.github.com/repos/${repo}/commits?per_page=1&sha=${encodeURIComponent(r.default_branch)}`, h);
  const spdx = r.license && r.license.spdx_id;
  return {
    stars: r.stargazers_count,
    lastCommit: (c[0] && c[0].commit && c[0].commit.committer && c[0].commit.committer.date) || r.pushed_at,
    archived: !!r.archived,
    license: spdx && spdx !== 'NOASSERTION' ? spdx : null,
    language: r.language || null,
  };
}

async function fromGitlab(host, repo) {
  const base = `https://${host}/api/v4/projects/${encodeURIComponent(repo)}`;
  const p = await getJson(`${base}?license=true`);
  const c = await getJson(`${base}/repository/commits?per_page=1&ref_name=${encodeURIComponent(p.default_branch)}`);
  let language = null;
  try { const l = await getJson(`${base}/languages`); language = Object.entries(l).sort((a, b) => b[1] - a[1])[0]?.[0] || null; } catch {}
  const key = p.license && p.license.key;
  return {
    stars: p.star_count,
    lastCommit: (c[0] && (c[0].committed_date || c[0].created_at)) || p.last_activity_at,
    archived: !!p.archived,
    license: key ? SPDX[key] || key.toUpperCase() : null,
    language,
  };
}

async function fetchAll() {
  const cache = readCache();
  const out = { fetchedOn: cache.fetchedOn, repos: { ...cache.repos } };
  if (process.env.OSS_OFFLINE) return { cache: out, ok: 0, failed: [] };
  const token = githubToken();
  let ok = 0;
  const failed = [];
  await Promise.all(OSS.map(async p => {
    const key = `${p.host}:${p.repo}`;
    try {
      const m = p.host === 'github.com' ? await fromGithub(p.repo, token) : await fromGitlab(p.host, p.repo);
      m.lastCommit = new Date(m.lastCommit).toISOString().slice(0, 10);
      out.repos[key] = m;
      ok++;
    } catch (e) {
      failed.push(`${key} (${e.message})`);
    }
  }));
  // data.js から消したリポジトリはキャッシュからも消す
  const keep = new Set(OSS.map(p => `${p.host}:${p.repo}`));
  for (const k of Object.keys(out.repos)) if (!keep.has(k)) delete out.repos[k];
  out.repos = Object.fromEntries(Object.entries(out.repos).sort(([a], [b]) => (a < b ? -1 : 1)));
  if (ok) out.fetchedOn = new Date().toISOString().slice(0, 10);
  const txt = JSON.stringify(out, null, 2) + '\n';
  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  let before = null;
  try { before = fs.readFileSync(CACHE, 'utf8'); } catch {}
  if (txt !== before) fs.writeFileSync(CACHE, txt);
  return { cache: out, ok, failed };
}

module.exports = { fetchAll, CACHE };
if (require.main === module) {
  fetchAll().then(({ ok, failed }) => {
    console.log(`open-source metadata: ${ok}/${OSS.length} fetched${failed.length ? `, kept cache for ${failed.join(', ')}` : ''}`);
  }).catch(e => { console.warn('open-source metadata: fetch skipped,', e.message); });
}
