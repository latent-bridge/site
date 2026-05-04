import Link from "next/link";
import { kotaruru0603Case } from "../../../../data/works/kotaruru0603";

export default function ClipsIndex() {
  const c = kotaruru0603Case;
  const totalViews = c.clips.reduce(
    (acc, clip) => acc + (clip.metrics.views ?? 0),
    0,
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <nav className="text-xs text-muted">
        <Link href="/works" className="hover:text-accent">
          実績
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${c.slug}`} className="hover:text-accent">
          {c.streamerName}
        </Link>
        <span className="mx-2">/</span>
        <span>切り抜き制作</span>
      </nav>

      <header className="mt-6">
        <p className="text-xs tracking-wide text-accent mb-3">Clips</p>
        <h1 className="text-2xl sm:text-3xl font-bold">切り抜き制作</h1>
        <p className="mt-6 text-sm leading-loose">
          元配信のどこを切り取り、テロップをどう設計したか。
          <br />
          1本ずつ「場面選定の判断」「テロップの意図」「反応」を公開しています。
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">本数</dt>
            <dd className="mt-1 font-bold">{c.clips.length} 本</dd>
          </div>
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">累計再生</dt>
            <dd className="mt-1 font-bold">
              {totalViews.toLocaleString("ja-JP")}
            </dd>
          </div>
          <div className="rounded-xl bg-accent-bg/40 p-3">
            <dt className="text-muted">最新投稿</dt>
            <dd className="mt-1 font-bold">
              {c.clips[c.clips.length - 1]?.postedAt}
            </dd>
          </div>
        </dl>
      </header>

      <section className="mt-12">
        <h2 className="text-xs tracking-wide text-muted mb-4">時系列</h2>
        <ol className="space-y-4">
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
                  {clip.postedAt} ・ {clip.source.cutDurationSec ?? "—"}秒 ・ 再生{" "}
                  {clip.metrics.views?.toLocaleString("ja-JP") ?? "—"}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
