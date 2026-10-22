# Paid While You Sleep / 寝てても入金 / 躺着也到账 / सोते हुए भी कमाई / Cobra mientras duermes / دخل وأنت نائم

ベーシックインカム系アプリと紹介特典をまとめたサイト。英語（`/`）・日本語（`/ja/`）・中国語簡体字（`/zh/`）・ヒンディー語（`/hi/`）・スペイン語（`/es/`）・アラビア語（`/ar/`、右から左）の6ページを静的に生成する。

公開先: https://neteru-nyukin.eltociear.workers.dev

Search Console: [neteru-nyukin.eltociear.workers.dev](https://search.google.com/search-console?resource_id=https%3A%2F%2Fneteru-nyukin.eltociear.workers.dev%2F)（URL プレフィックス、`google-site-verification` メタタグで確認済み）

## 構成

- `src/data.js` … サービス一覧（`SERVICES`）、カテゴリ名、各言語の文言、サイトURL
- `src/template.html` … ページのテンプレート（デザイン・CSS）
- `build.js` … `public/` に6言語のページ、`sitemap.xml`、`robots.txt` を生成
- `og.js` … SNS シェア用の画像（1200×630）を Chrome で `src/og/` に作る。`build.js` が `public/og/` にコピーする
- `public/` … 生成物（Cloudflare に公開されるフォルダ）

## サービスの追加・編集

`src/data.js` の `SERVICES` を編集してからビルドする。

- `code`: 紹介コード（空なら「準備中」と表示）
- `ref`: 紹介リンク。**空のサービスは自動で非表示**
- `noRef`: `true` にすると紹介制度のないサービスとして `ref` が空でも表示する（コード欄なし、ボタンは公式サイトへ）。あとで紹介リンクやコードが手に入ったら `ref` / `code` を入れて `noRef` を外す
- `ja` / `en` / `zh` / `hi` / `es` / `ar`: 各言語の説明。無い言語は英語で表示

独自ドメインに移したら `SITE_URL` を書き換える（canonical・hreflang・サイトマップに使われる）。

## ビルドと公開

```sh
node og.js      # 見出しや掲載サービスを変えたときだけ（Chrome が必要）
node build.js
npx wrangler deploy
```
