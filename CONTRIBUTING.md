# Contributing to Free Lunch Lab

Thanks for helping keep the list accurate. Suggestions and corrections are welcome as issues or pull requests.

## Listing criteria

A service is listed only if all of these hold:

1. **No deposits, no promised returns.** It must not require you to deposit or invest money, buy a node or a package, or promise a return. Optional paid tiers are fine if they are disclosed.
2. **No MLM as the main mechanic.** Earning must not depend mainly on recruiting people. If there is a multi-level referral system (rewards from people your referrals bring in), it must be stated plainly in the entry.
3. **Active.** The app or project must be running: recent app updates, recent payouts, ceremonies or releases, and a working official site.
4. **Official sources.** Every claim (what you get, how often, requirements, operator, token and market) must be backed by an official source: the official site, docs, terms, app store listing or official announcement. Third-party information may be used only when it is labeled as such.
5. **Risks and cash-out reality stated.** The entry must say how (and whether) the reward can become real money, at what price and liquidity if it is a token, and the main risks: privacy and data use, biometric data, bandwidth sharing, inflation or unlimited minting, low ratings or credible complaints.
6. **Japan availability only if verified.** "Works from Japan" is written only when it has been confirmed first-hand or by an official source. Otherwise it is marked as unconfirmed.

Basic-income-style schemes (paying you for being a person, or in the future an AI agent) are the focus. A few point and cashback apps are also listed.

## Referral links

Referral links and codes on the site are the maintainer's own. **Pull requests must not add, change or replace referral links or codes.** If a service you suggest has a referral program, add it with `noRef: true` and no `ref`/`code`, and the maintainer will decide what to do.

## How to contribute

- **One service per pull request.** Keep changes focused.
- Edit `src/data.js` only (plus `CATS` or `T` if a new label is truly needed). Run `node build.js`; it regenerates `public/` and the README tables. Do not edit the generated parts of `README.md` by hand.
- Provide text in English at least. Other languages fall back to English; translations into Japanese, Simplified Chinese, Hindi, Spanish, German and Arabic are welcome.
- Set `verify` from the service’s own documentation only (see README); mark a method `"optional": true` if it is not required, and leave the array empty if the method is not stated.
- Set `checked` to the month you verified the entry against official sources, as `"YYYY-MM"` (e.g. `"2026-10"`). It is shown on the site as “Checked Oct 2026”, and the build fails if a visible entry lacks it. Update it only when you actually re-check the facts.
- Write facts, not hype. Date anything that changes (prices, user counts, campaign terms), e.g. "as of Oct 2026".
- List your sources in the pull request description.

To report outdated or wrong information, open an issue with the "Report outdated info" template.

## License of contributions

By contributing, you agree that code contributions are licensed under MIT and content contributions (text in `src/data.js`) under CC BY 4.0, as described in [NOTICE.md](NOTICE.md).
