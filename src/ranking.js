// 換金のしやすさランキング（/ranking/）の点数とグループ。サービスのデータ（trust・ease・inviteOnly・checked・warning）だけから計算する。
// build.js（ページ）・og.js（シェア画像）・brand/x/infographics/render.js（X の画像）が同じ結果を使う
// 点数（100点満点）:
//   換金（trust.cash）: あり 40 / 条件つき 20 / なし・未確認 0
//   値段がわかるか（trust.price）: 市場価格あり、または暗号資産ではない（na: 円やポイントでもらう）15 / 一部 8 / なし・未確認 0
//   運営元（trust.operator）: 公開 15 / 一部 8 / 不明 0
//   ラク度（ease 1〜5）× 3（最大 15）
//   招待なしで始められる（inviteOnly でない）10
//   最終確認（checked）が、掲載中でいちばん新しい確認月から FRESH_MONTHS か月以内 5
// グループ: 換金が「あり」→ easy（受給者に選ばれたらもらえるもの isSelected は cond）、「条件つき」→ cond、抽選型（isRaffle）→ raffle、「なし・未確認」→ hard。warning（強い注意書き）のあるものは点数にかかわらず hard。
// 並びはグループの順、グループの中は点数の高い順、同点は掲載順（SERVICES の順）
const POINTS = {
  cash: { yes: 40, partial: 20, no: 0, unknown: 0 },
  price: { yes: 15, na: 15, partial: 8, no: 0, unknown: 0 },
  operator: { yes: 15, partial: 8, no: 0, unknown: 0 },
  easePer: 3,
  noInvite: 10,
  fresh: 5,
};
const FRESH_MONTHS = 3;
// 抽選型: 当選した人だけが受け取るもの。換金が「あり」でも、ほとんどの人は何も受け取れないので easy には入れず、別のグループ raffle に。
// 英語の説明（en.note に raffle / lottery、または en.gain に "if you win"）で見分ける
const TIERS = ['easy', 'cond', 'raffle', 'hard'];
const isSelected = s => /\bif you are (chosen|selected)\b/i.test((s.en || {}).gain || '');
const isRaffle = s => /\b(raffle|lottery)\b/i.test((s.en || {}).note || '') || /\bif you win\b/i.test((s.en || {}).gain || '');
const MAX = POINTS.cash.yes + POINTS.price.yes + POINTS.operator.yes + 5 * POINTS.easePer + POINTS.noInvite + POINTS.fresh;
const mIdx = ym => { const [y, m] = ym.split('-').map(Number); return y * 12 + m - 1; };
const hasWarning = s => Object.values(s).some(v => v && typeof v === 'object' && typeof v.warning === 'string' && v.warning);
function score(s, newest) {
  const t = s.trust || {};
  const parts = {
    cash: POINTS.cash[t.cash] || 0,
    price: POINTS.price[t.price] || 0,
    operator: POINTS.operator[t.operator] || 0,
    ease: Math.max(0, Math.min(5, s.ease || 0)) * POINTS.easePer,
    invite: s.inviteOnly ? 0 : POINTS.noInvite,
    fresh: mIdx(newest) - mIdx(s.checked) <= FRESH_MONTHS ? POINTS.fresh : 0,
  };
  return { total: Object.values(parts).reduce((a, b) => a + b, 0), parts };
}
function tierOf(s) {
  if (hasWarning(s)) return 'hard';
  const c = (s.trust || {}).cash;
  if ((c === 'yes' || c === 'partial') && isRaffle(s)) return 'raffle';
  // 受給者に「選ばれたら」もらえるもの（順番待ちなど）は、換金が「あり」でも easy にしない。登録しても受け取れる保証がないため
  // （例: Dotare は 2026年10月24日時点で登録者147人に対し受給者2人）。英語の en.gain の "if you are chosen" で見分ける
  if (c === 'yes' && isSelected(s)) return 'cond';
  return c === 'yes' ? 'easy' : c === 'partial' ? 'cond' : 'hard';
}
// live: 表示中のサービス（SERVICES の順）。[{ s, rank, tier, total, parts }] を順位の順で返す
function ranking(live) {
  const newest = live.map(s => s.checked).sort().pop();
  return live.map((s, i) => ({ s, i, tier: tierOf(s), ...score(s, newest) }))
    .sort((a, b) => TIERS.indexOf(a.tier) - TIERS.indexOf(b.tier) || b.total - a.total || a.i - b.i)
    .map(({ i, ...x }, n) => ({ ...x, rank: n + 1 }));
}
module.exports = { POINTS, FRESH_MONTHS, TIERS, MAX, score, tierOf, ranking, hasWarning, isRaffle, isSelected };
