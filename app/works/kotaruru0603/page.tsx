import Link from "next/link";
import { kotaruru0603Case } from "../../../data/works/kotaruru0603";

export default function KotaruRu0603Case() {
  const c = kotaruru0603Case;
  const totalViews = c.clips.reduce(
    (acc, clip) => acc + (clip.metrics.views ?? 0),
    0,
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-xs tracking-wide text-accent mb-3">Case</p>
        <h1 className="text-2xl sm:text-3xl font-bold">{c.streamerName}</h1>
        <p className="mt-1 text-xs text-muted">@{c.streamerHandle}</p>
        <p className="mt-6 text-sm leading-loose">{c.description}</p>
        <dl className="mt-6 grid grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">開始日</dt>
            <dd className="mt-1 font-bold">{c.startedAt}</dd>
          </div>
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">ステータス</dt>
            <dd className="mt-1 font-bold">{c.status}</dd>
          </div>
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">納品物</dt>
            <dd className="mt-1 font-bold">2 領域</dd>
          </div>
        </dl>
      </header>

      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-4">Deliverables</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* 切り抜き制作 */}
          <Link
            href={`/works/${c.slug}/clips`}
            className="group block rounded-3xl border border-border bg-surface p-6 hover:border-accent hover:bg-accent-bg/20 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <p className="text-2xl">✂️</p>
              <span className="text-[11px] text-muted">
                {c.clips.length} 本
              </span>
            </div>
            <h3 className="mt-4 text-base font-bold">切り抜き制作</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              元配信からどこをどう切り取り、テロップをどう設計したか。1本ずつ詳細に公開しています。
            </p>
            <p className="mt-4 text-[11px] text-muted">
              累計再生 {totalViews.toLocaleString("ja-JP")} ・ 最新 {c.clips[c.clips.length - 1]?.postedAt}
            </p>
            <p className="mt-3 text-xs text-accent group-hover:underline">
              詳細を見る →
            </p>
          </Link>

          {/* ファンサイト構築 */}
          <Link
            href={`/works/${c.slug}/fan-site`}
            className="group block rounded-3xl border border-border bg-surface p-6 hover:border-accent hover:bg-accent-bg/20 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <p className="text-2xl">🏠</p>
              <span className="text-[11px] text-muted">
                {c.siteGroups.length} グループ
              </span>
            </div>
            <h3 className="mt-4 text-base font-bold">ファンサイト構築</h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              視聴者向けの本体、配信者向けの管理画面、世界観を支える素材。応援動線を内側に持つ場所を、配信者ごとに最適化して用意します。
            </p>
            <p className="mt-4 text-[11px] text-muted">
              {c.siteGroups.map((g) => g.title).join(" / ")}
            </p>
            <p className="mt-3 text-xs text-accent group-hover:underline">
              詳細を見る →
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
