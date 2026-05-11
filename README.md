# latent-bridge LP (`/site`)

Latent Bridge のランディングページ + Works ページ群。Next.js (App Router) + TypeScript + Tailwind CSS v4。静的エクスポート (`output: "export"`)。

- **公開URL**: https://latent-bridge.com/site
- **basePath**: `/site` (`next.config.ts`)

## このディレクトリの位置づけ（重要）

このディレクトリ (`platform/web/live-streaming/lp/`) は **モノレポ (`asato99w/latent-bridge`) 内の正本** です。ここで開発・編集します。

- `lp/deploy/` というサブディレクトリが存在する場合、それは **公開リポジトリ (`latent-bridge/site`) のローカルクローン** であり、手元で配信状態を確認するためだけのものです。**編集対象ではありません。** 触る必要はありません。
- `lp/.git` が別リモートを指していることがありますが、それは無関係な残骸です。ファイルの追跡はモノレポ側の git が行っています。

## デプロイの仕組み

```
1. このディレクトリ配下を編集
   ↓
2. モノレポの main に push
   (.github/workflows/sync-lp.yml が platform/web/live-streaming/lp/** の変更を検知)
   ↓
3. sync-lp.yml が latent-bridge/site.git をクローンし、
   lp/ の中身を rsync でミラーして commit & push
   (node_modules/.next/out/scripts/pnpm-lock.yaml は除外、playwright dep も除去)
   ↓
4. latent-bridge/site 側の "Deploy to GitHub Pages" ワークフローが
   ビルド (npm ci && npm run build) して GitHub Pages にデプロイ
   ↓
5. https://latent-bridge.com/site に反映 (数分)
```

つまり **デプロイ作業 = モノレポの main に push するだけ**。`lp/deploy/` で手作業 commit する必要はありません。

### デプロイ手順（実務）

```bash
# モノレポのルートで
git add platform/web/live-streaming/lp/<変更したファイル>
git commit -m "..."
git push origin main
# 以降は sync-lp.yml → latent-bridge/site → GitHub Pages が自動
```

## 開発

```bash
npm install
npm run dev      # http://localhost:3000/site
npm run build    # out/ に静的ファイル生成（デプロイ前のローカル検証用）
npm run lint
```

## 構成

```
app/
  layout.tsx              全体シェル (Zen Maru Gothic フォント)
  page.tsx                トップ (LP本体)
  globals.css
  works/                  実績公開ページ群
    page.tsx                Works 一覧
    layout.tsx
    kotaruru0603/           ケーススタディ (clips / fan-site の詳細)
  proposal/               個別提案ページ群（未掲載・URL直アクセスのみ、noindex）
    lizpechi/page.tsx
components/               共通コンポーネント
data/                     Works のデータ定義 (cases / kotaruru0603 など)
lib/                      ヘルパー
scripts/                  ローカル専用ツール (capture-fan-site 等。sync 時に除外される)
```

## ページ追加時の注意

- **公開実績** → `app/works/<slug>/` に追加し、`data/works/cases.ts` 等にメタデータを登録すると Works 一覧に出る
- **個別提案など未掲載ページ** → `app/proposal/<name>/page.tsx` に作成。`metadata` で `robots: { index: false, follow: false }` を設定し、どこからもリンクしない。URL を相手に直接共有する運用
- `next.config.ts` の `basePath` (`/site`) があるため、内部リンクは `next/link` の `href` に basePath を含めず書く（Next.js が自動で付与）。画像など静的アセットの絶対パスは `NEXT_PUBLIC_BASE_PATH` を前置する

## Next.js のバージョン注意

このプロジェクトの Next.js は新しめで、訓練データと挙動が異なる場合があります。コードを書く前に `node_modules/next/dist/docs/` の該当ガイドを参照してください（`AGENTS.md` 参照）。
