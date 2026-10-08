# 寝てても入金 / Paid While You Sleep

ベーシックインカム系アプリと紹介特典をまとめた1ページサイト。日本語・English・हिन्दी に対応（URL末尾 `#ja` `#en` `#hi` で言語指定）。

- サイト本体: `public/index.html`（HTML・CSS・JS を1ファイルに収録）
- 公開先: Cloudflare（`wrangler.jsonc` の `assets.directory` が `public`）

## サービスの追加・編集

`public/index.html` の `SERVICES` 配列を編集する。

- `code`: 紹介コード（空なら「準備中」と表示）
- `ref`: 紹介リンク（空なら公式サイトへのリンクになる）
- 紹介リンク未設定のサービスは `/* 紹介リンク未設定のため非表示 ... */` でコメントアウトしてある

## デプロイ

```sh
npx wrangler deploy
```
