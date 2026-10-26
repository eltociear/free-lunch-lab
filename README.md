# 不労所得研究所 / Free Lunch Lab

「タダ飯は、ある。」 / There is such a thing as a free lunch.

（2026年10月に「寝てても入金」から改名。URL・ワーカー名・リポジトリ名は変えていない）

ベーシックインカム系アプリと紹介特典をまとめたサイト。英語（`/`）・日本語（`/ja/`）・中国語簡体字（`/zh/`）・ヒンディー語（`/hi/`）・スペイン語（`/es/`）・ドイツ語（`/de/`、「du」で統一）・アラビア語（`/ar/`、右から左）の7ページを静的に生成する。

公開先: https://neteru-nyukin.eltociear.workers.dev

Search Console: [neteru-nyukin.eltociear.workers.dev](https://search.google.com/search-console?resource_id=https%3A%2F%2Fneteru-nyukin.eltociear.workers.dev%2F)（URL プレフィックス、`google-site-verification` メタタグで確認済み）

## 構成

- `src/data.js` … サービス一覧（`SERVICES`）、カテゴリ名、各言語の文言、サイトURL
- `src/template.html` … ページのテンプレート（デザイン・CSS）
- `build.js` … `public/` に7言語の一覧ページ、サービスごとの個別ページ、`sitemap.xml`、`robots.txt` を生成
- `og.js` … SNS シェア用の画像（1200×630）を Chrome で `src/og/` に作る。`build.js` が `public/og/` にコピーする
- `public/` … 生成物（Cloudflare に公開されるフォルダ）

## ページ構成

- 一覧: `/`（英語）、`/ja/`、`/zh/`、`/hi/`、`/es/`、`/de/`、`/ar/`
- 個別ページ: `/services/{id}/`（英語）と `/{lang}/services/{id}/`。表示中のサービス（`ref` があるか `noRef`）ごとに7言語ぶん作る。中身は `SERVICES` のデータだけで、見出しなどの文言は `T` の `svcTitle`・`hGain`・`hAbout`・`hNeed`・`hRelated`・`backList`・`crumbLabel`
- 一覧のカードのサービス名から個別ページへリンクする。`sitemap.xml` には全ページが入る
- UBIの団体・プロジェクト: `/organizations/` と `/{lang}/organizations/`。データは `src/data.js` の `ORGS`（団体）・`ORG_GROUPS`（種類）・`ORG_REGIONS`（地域名）。`svc` にサービスの id を入れると、団体ページからそのサービスの個別ページへ、個別ページから団体へ相互にリンクする。紹介ボタンや sponsored は付けない。海外の一部は [awesome-ubi-organisations](https://github.com/rmharrison/awesome-ubi-organisations)（CC0、2018年）をもとに2026年10月に確認し直したもの
- 入口: 上のナビ（PC）、よくある質問の下のリンク、フッター

## サービスの追加・編集

`src/data.js` の `SERVICES` を編集してからビルドする。

- `code`: 紹介コード（空なら「準備中」と表示）
- `ref`: 紹介リンク。**空のサービスは自動で非表示**
- `cat`: カテゴリ。`crypto-bi`・`app`・`pointsite`・`career`・`exchange`・`finance` に加えて、AIエージェント向けのベーシックインカムが出てきたとき用に `ai-agent`（「AIエージェント向け」/ “For AI agents”、7言語の名前は `CATS` に用意済み）がある。該当するサービスが1件もないカテゴリは絞り込みボタンにもどこにも出ないので、`ai-agent` は最初のサービスに `"cat": "ai-agent"` を付けた時点で自動的に現れる
- `onlyIn`: 特定の国の居住者だけが使えるときに国コード（例 `us`）を入れると、地域表示が「アメリカ在住者向け」などになる（文言は `T` の `only_{国コード}`）。`global` は `false` のまま
- `showCode`: `true` にすると、紹介リンクのボタンに加えてコード欄（コピーボタンつき）も出す。登録時に紹介コードの入力を求めるサービス用
- `noRef`: `true` にすると紹介制度のないサービスとして `ref` が空でも表示する（コード欄なし、ボタンは公式サイトへ）。あとで紹介リンクやコードが手に入ったら `ref` / `code` を入れて `noRef` を外す
- `ja` / `en` / `zh` / `hi` / `es` / `de` / `ar`: 各言語の説明。無い言語は英語で表示

独自ドメインに移したら `SITE_URL` を書き換える（canonical・hreflang・サイトマップに使われる）。

## ビルドと公開

```sh
node og.js      # 見出しや掲載サービスを変えたときだけ（Chrome が必要）
node build.js
npx wrangler deploy
```

## 言語を足すとき

`src/data.js` の `LANGS` と、`T`・`CATS`・各サービス・`NEWS`・`PICKS`・`ORGS`（`desc`/`short`）・`ORG_GROUPS`・`ORG_REGIONS` に言語キーを足し、`build.js` の `LANG_NAMES`・`LANG_TAG`・`OG_LOCALE`・`LANG_FONTS`・`SHARE_ORDER` と `og.js` の `FONTS`・`FACE` にも追加する。`T` のキーが欠けているとビルドが止まる

## X のプロフィール画像

`brand/x/avatar.png`（400×400、円形に切り抜かれる前提）と `brand/x/header.png`（1500×500）は X（[@FreeLunchLab](https://x.com/FreeLunchLab)）用の画像で、サイトには載せない（`public/` の外）。作り直すときは `node brand/x/render.js`（`og.js` と同じく Chrome と、使う文字だけに絞った Google Fonts を埋め込んで描画する）。
