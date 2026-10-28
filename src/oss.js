// オープンソース一覧: data.js の OSS（手で選んだリスト）と data/open-source-cache.json（ビルド時に取った数値）を合わせる
// dormant（休眠）は「最終コミットがビルド時点から12か月より前」で自動判定する
const fs = require('fs');
const path = require('path');
const { OSS } = require('./data.js');

const CACHE = path.join(__dirname, '..', 'data', 'open-source-cache.json');
const DORMANT_MONTHS = 12;

function readCache() {
  try { return JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { return { fetchedOn: null, repos: {} }; }
}

function ossProjects(now = new Date()) {
  const cache = readCache();
  const cutoff = new Date(now);
  cutoff.setUTCMonth(cutoff.getUTCMonth() - DORMANT_MONTHS);
  const cutoffIso = cutoff.toISOString().slice(0, 10);
  const projects = OSS.map(p => {
    const m = cache.repos[`${p.host}:${p.repo}`] || {};
    const license = m.license ? m.license : p.licenseNote || null;
    return {
      ...p,
      url: p.url || `https://${p.host}/${p.repo}`,
      stars: m.stars ?? null,
      lastCommit: m.lastCommit || null,
      archived: !!m.archived,
      license,
      language: m.language || null,
      dormant: !!(m.lastCommit && m.lastCommit < cutoffIso),
    };
  });
  return { projects, fetchedOn: cache.fetchedOn, cutoff: cutoffIso };
}

module.exports = { ossProjects, DORMANT_MONTHS };
