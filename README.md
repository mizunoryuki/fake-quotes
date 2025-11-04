# fake-quotes

シンプルな「名言 / 出典」ジェネレーター React アプリケーション。
Vite + React + TypeScript で構成され、生成API（外部 Worker / サーバー）へリクエストして画像を作成・ダウンロードできます。

## デプロイ先

Cloudflare pagesでデプロイしています。
https://fake-quotes.pages.dev/

## 概要

このプロジェクトはフロントエンド（Vite）でユーザーが「名言」や「出典」を入力し、外部APIに投げて候補を生成するフローを持ちます。
生成された候補はカード一覧として表示され、画像化してダウンロードできます。

一部サーバー側（生成エンジン）は Cloudflare Worker や独自サーバー経由で提供される想定です。フロントエンドは環境変数 `VITE_API_URL` を参照して API にリクエストします。

## 必要なもの
- Node.js（推奨: 18+）
- pnpm

## セットアップ（ローカル開発）

1. 依存インストール

```bash
pnpm install
```

2. 環境変数（プロジェクトルートに `.env`）

フロントエンドから外部APIを直接呼ぶ場合は `VITE_API_URL` を設定してください。

指定していない場合は、Nodeサーバーが指定される。

`.env` を変更した場合は Dev サーバーの再起動が必要です。

1. 開発サーバー起動

```bash
pnpm run dev
```

ブラウザで http://localhost:5173 を開いて動作を確認します。

## 主要コマンド

- ビルド(フロントエンドのみ):

```bash
pnpm run build
```

- 静的プレビュー (Vite):

```bash
pnpm run preview
```

## API エンドポイント

フロントエンドは以下の形で生成APIに POST します。

- path: `/api/generate`（`VITE_API_URL` が設定されていれば `VITE_API_URL + /api/generate` を使います）
- body: `{ mode: "quote" | "author", inputText: string }`

modeはinputされたテキストの種類を指定しています。
modeがquoteなら、inputの値として言葉を指定している。この時、APIから返される値は著者や出典。
modeがsourceなら、inputの値として著者や出典している。この時、APIから返される値は言葉。

## サーバーのセットアップ

ローカル環境で開発する場合は

`pnpm run build:server`によりtsファイルをjsに変換して、サーバーを立ち上げるようにしてください。