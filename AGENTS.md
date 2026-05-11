<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy

このディレクトリはモノレポ内の正本。デプロイは **モノレポの main に push するだけ**（`.github/workflows/sync-lp.yml` が `latent-bridge/site` に同期 → GitHub Pages）。`deploy/` サブディレクトリは公開リポジトリのローカルクローンで、編集対象ではない。詳細は `README.md`。
