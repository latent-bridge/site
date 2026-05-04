import Link from "next/link";
import { kotaruru0603Case } from "../../../data/works/kotaruru0603";

export default function KotaruRu0603Case() {
  const c = kotaruru0603Case;
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
            <dt className="text-muted">クリップ</dt>
            <dd className="mt-1 font-bold">{c.clips.length} 本</dd>
          </div>
        </dl>
      </header>

      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold">切り抜き制作</h2>
          <p className="text-xs text-muted">
            時系列 ({c.clips.length} 本)
          </p>
        </div>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          1本ずつ、元配信のどこをどう切り取り、テロップをどう設計したかを公開しています。
        </p>

        <ol className="mt-8 space-y-4">
          {c.clips.map((clip) => (
            <li key={clip.slug}>
              <Link
                href={`/works/${c.slug}/clips/${clip.slug}`}
                className="block rounded-3xl border border-border bg-surface p-6 hover:border-accent hover:bg-accent-bg/20 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-accent font-bold">
                    {String(clip.sequenceNo).padStart(2, "0")}
                  </span>
                  <p className="text-base font-bold leading-tight">
                    {clip.title}
                  </p>
                </div>
                <p className="mt-2 text-[11px] text-muted">
                  {clip.postedAt} ・ {clip.source.cutDurationSec ?? "—"}秒 ・ 再生 {clip.metrics.views?.toLocaleString("ja-JP") ?? "—"}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 rounded-3xl bg-warm-bg/40 p-6">
        <h2 className="text-base font-bold">ファンサイト</h2>
        <p className="mt-3 text-xs leading-relaxed">
          切り抜き制作の延長で、応援動線を内側に持つファンサイトを構築しました。
          MOCHI HOUSE / もちもち デザインで実装中。
        </p>
        <a
          href={c.domain}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs text-accent font-bold"
        >
          {c.domain} ↗
        </a>
      </section>
    </div>
  );
}
