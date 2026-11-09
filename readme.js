// 使い方: node readme.js  →  README.md の自動生成ブロック（バッジ・サービス表・団体一覧・オープンソース一覧・エッセイ一覧）を src/data.js から作り直す
// build.js の最後でも呼ばれるので、ふだんは node build.js だけでよい
const fs = require('fs');
const path = require('path');
const { SITE_URL, SERVICES, CATS, T, ORGS, ORG_GROUPS, ORG_REGIONS, OSS_GROUPS, ESSAYS, OPEN_DATA, GUIDES = [], QUIZ, CALC } = require('./src/data.js');
const { servicesFor } = require('./src/shindan.js');
const { ossProjects, DORMANT_MONTHS } = require('./src/oss.js');

const README = path.join(__dirname, 'README.md');
const live = SERVICES.filter(s => s.ref || s.noRef); // サイトに表示しているものだけ
const cell = s => String(s).replace(/[⁦-⁩]/g, '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const region = s => (s.onlyIn ? T.en['only_' + s.onlyIn] : s.global ? 'Global (海外OK)' : 'Japan only');

function servicesTable() {
  const rows = live.map(s => `| [${cell(s.nameEn || s.name)}](${SITE_URL}/services/${s.id}/) | ${cell(CATS.en[s.cat])} | ${cell((s.en || {}).gain || '')} | ${cell(region(s))} | ${s.checked} |`);
  return [
    `${live.length} services are listed on the site. Each name links to its page on the site (in English; every page is also available in 6 more languages).`,
    '',
    '| Service | Category | What you get | Region | Checked |',
    '| --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}

function badges() {
  const b = (label, msg, color, link) => `[![${label}](https://img.shields.io/badge/${encodeURIComponent(label).replace(/-/g, '--')}-${encodeURIComponent(msg).replace(/-/g, '--')}-${color})](${link})`;
  return [
    b('services', String(live.length), 'e8590c', `${SITE_URL}/`),
    b('languages', '7', '1c7ed6', `${SITE_URL}/`),
    b('code', 'MIT', '2f9e44', 'LICENSE'),
    b('content', 'CC BY 4.0', '2f9e44', 'NOTICE.md'),
    b('live site', 'free lunch lab', '212529', `${SITE_URL}/`),
  ].join('\n');
}

function orgsList() {
  return ORG_GROUPS.map(g => {
    const items = ORGS.filter(o => o.group === g.id).map(o => {
      const meta = [o.region && ORG_REGIONS[o.region].en, o.year && `founded ${o.year}`].filter(Boolean).join(', ');
      return `- [${cell(o.name)}](${o.url})${meta ? ` (${meta})` : ''}`;
    });
    return `**${g.name.en}**\n\n${items.join('\n')}`;
  }).join('\n\n') + `\n\nFull list with descriptions: ${SITE_URL}/organizations/`;
}

// オープンソース一覧（awesome-list として読めるよう、グループごとの表に）。数値は data/open-source-cache.json から
function ossList() {
  const { projects, fetchedOn } = ossProjects();
  const tables = OSS_GROUPS.map(g => {
    const rows = projects.filter(p => p.group === g.id).map(p => {
      const svc = p.svc && live.find(s => s.id === p.svc);
      const name = `[${cell(p.name)}](${p.url})${p.dormant ? ' 💤' : ''}${p.archived ? ' (archived)' : ''}`;
      const desc = cell(p.desc.en) + (svc ? ` ([on the site](${SITE_URL}/services/${svc.id}/))` : '');
      return `| ${name} | ${desc} | ${cell(p.language || '')} | ${cell(p.license || 'unknown')} | ${p.stars ?? ''} | ${p.lastCommit || ''} |`;
    });
    return rows.length ? [`**${g.name.en}**`, '', '| Project | What it is | Language | License | Stars | Last commit |', '| --- | --- | --- | --- | --- | --- |', ...rows].join('\n') : '';
  }).filter(Boolean);
  return [
    `${projects.length} open-source projects. 💤 = dormant (no commit in over ${DORMANT_MONTHS} months). Stars and last commit dates are fetched from GitHub and GitLab on every build${fetchedOn ? ` (last fetched ${fetchedOn})` : ''}.`,
    '',
    tables.join('\n\n'),
    '',
    `Full list in 7 languages: ${SITE_URL}/open-source/ · JSON: [\`data/open-source.json\`](data/open-source.json)`,
    ...(OPEN_DATA.length ? ['', dataTable()] : []),
  ].join('\n');
}

// ベーシックインカム社会実験の公開データ（GitHub からは取らない。data.js に書いた内容だけ）
function dataTable() {
  const access = { open: 'Open download', registration: 'Free registration', restricted: 'Restricted (application)' };
  const rows = OPEN_DATA.map(x => `| [${cell(x.name.en)}](${x.url}) | ${cell(x.country.en)} | ${cell(x.years || '')} | ${x.n ?? ''} | ${cell(x.includes.en)} | ${cell(x.archive)} | ${access[x.access]} |`);
  return [
    `**Basic income experiment data** (${OPEN_DATA.length} datasets and replication packages; links go to each archive's landing page)`,
    '',
    '| Experiment | Country | Years | n | What\'s in it | Archive | Access |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
    '',
    `On the site: ${SITE_URL}/open-source/#data · JSON: [\`data/open-data.json\`](data/open-data.json)`,
  ].join('\n');
}

// エッセイ一覧（新しい順のまま）
function essaysList() {
  return ESSAYS.map(e => `- [${cell(e.title.en)}](${SITE_URL}/essays/${e.id}/) (${e.date}): ${cell(e.desc.en)}`).join('\n') + `\n\nEach essay is available in 7 languages. All essays: ${SITE_URL}/essays/`;
}

// ガイド一覧（最終更新日つき）
function guidesList() {
  return GUIDES.map(g => `- [${cell(g.en.title)}](${SITE_URL}/guides/${g.id}/) (updated ${g.updated}; [日本語](${SITE_URL}/ja/guides/${g.id}/)): ${cell(g.en.desc)}`).join('\n') + '\n\nEach guide is available in 7 languages and has an update log at the bottom.'
    + (QUIZ ? `\n\n**[${cell(T.en.shindanTitle)}](${SITE_URL}/shindan/)** ([日本語: ${cell(T.ja.shindanTitle)}](${SITE_URL}/ja/shindan/)): ${cell(T.en.shindanDesc)} Result types, with the number of matching services picked from \`src/data.js\` on every build: ${QUIZ.types.map(t => `[${cell(t.name.en)}](${SITE_URL}/shindan/${t.id}/) (${servicesFor(t, live).length})`).join(', ')}.` : '')
    + (CALC ? `\n\n**[${cell(T.en.calcTitle)}](${SITE_URL}/calc/)** ([日本語: ${cell(T.ja.calcTitle)}](${SITE_URL}/ja/calc/)): ${cell(T.en.calcDesc)} Featured countries with national figures: ${CALC.countries.map(c => cell(c.name.en)).join(', ')}; their population, budget and GDP figures live in \`CALC\` in \`src/data.js\` with their source URLs and years: ${Object.values(CALC.sources).map(x => `[${cell(x.en.split('. ')[0])}](${x.url}) (${x.year})`).join('; ')}. Every other country and territory comes from World Bank data in [\`data/countries-worldbank.json\`](data/countries-worldbank.json) (fetched by hand with \`node scripts/fetch-worldbank.mjs\`), with its own page at \`/calc/{country id}/\` and a [comparison table](${SITE_URL}/calc/countries/) of the yearly cost of paying everyone the World Bank's $3.00-a-day poverty line, as a share of GDP (the default amount for World Bank countries; also as [\`data/countries.json\`](data/countries.json)).` : '');
}

function replaceBlock(text, name, body) {
  const start = `<!-- ${name}:start (generated by readme.js, do not edit) -->`;
  const end = `<!-- ${name}:end -->`;
  const re = new RegExp(`<!-- ${name}:start[^>]*-->[\\s\\S]*?<!-- ${name}:end -->`);
  if (!re.test(text)) throw new Error(`README.md is missing the ${name} markers`);
  return text.replace(re, `${start}\n${body}\n${end}`);
}

function updateReadme() {
  const before = fs.readFileSync(README, 'utf8');
  let after = replaceBlock(before, 'badges', badges());
  after = replaceBlock(after, 'services', servicesTable());
  after = replaceBlock(after, 'organizations', orgsList());
  after = replaceBlock(after, 'open-source', ossList());
  after = replaceBlock(after, 'essays', essaysList());
  after = replaceBlock(after, 'guides', guidesList());
  if (after !== before) fs.writeFileSync(README, after);
  return after !== before;
}

module.exports = { updateReadme };
if (require.main === module) console.log(updateReadme() ? 'README.md updated' : 'README.md already up to date');
