// タダ飯診断（QUIZ in data.js）の、タイプとサービスの対応。build.js と og.js の両方で使う
// match の条件はすべて AND。サービスの cat / ease / verify / trust / warning などのデータから毎回選び直すので、サービスを足せば結果も自動で増える
//   ids: この id だけ / excludeIds: この id は除く / cat: カテゴリのどれか / easeMin: ラク度の下限
//   anyVerify: 必須（optional でない）の認証にどれかを含む / noVerify: 必須の認証にどれも含まない
//   cash / operator: trust の値のどれか / noWarning: どの言語にも warning がない
const required = s => (s.verify || []).filter(v => !v.optional).map(v => v.method);
function matches(s, m) {
  if (m.ids && !m.ids.includes(s.id)) return false;
  if (m.excludeIds && m.excludeIds.includes(s.id)) return false;
  if (m.cat && !m.cat.includes(s.cat)) return false;
  if (m.easeMin && !(s.ease >= m.easeMin)) return false;
  if (m.anyVerify && !required(s).some(x => m.anyVerify.includes(x))) return false;
  if (m.noVerify && required(s).some(x => m.noVerify.includes(x))) return false;
  if (m.cash && !m.cash.includes((s.trust || {}).cash)) return false;
  if (m.operator && !m.operator.includes((s.trust || {}).operator)) return false;
  if (m.noWarning && Object.values(s).some(v => v && typeof v === 'object' && v.warning)) return false;
  return true;
}
const servicesFor = (type, live) => live.filter(s => matches(s, type.match));
module.exports = { servicesFor };
