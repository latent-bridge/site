import Link from "next/link";
import { notFound } from "next/navigation";
import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { ShortsEmbed } from "../../../../../components/works/ShortsEmbed";
import { SourceCard } from "../../../../../components/works/SourceCard";
import { TelopList } from "../../../../../components/works/TelopList";
import { MetricsBar } from "../../../../../components/works/MetricsBar";
import { ClipNav } from "../../../../../components/works/ClipNav";

export function generateStaticParams() {
  return kotaruru0603Case.clips.map((c) => ({ slug: c.slug }));
}

const SELECTION_LABEL: Record<string, string> = {
  ruru: "ruruさんが指定",
  us: "こちらで選定",
  collab: "コラボ相手と相談",
};

export default async function ClipDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const clips = kotaruru0603Case.clips;
  const idx = clips.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();

  const clip = clips[idx];
  const prev = idx > 0 ? clips[idx - 1] : undefined;
  const next = idx < clips.length - 1 ? clips[idx + 1] : undefined;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted">
        <Link href="/works" className="hover:text-accent">実績</Link>
        <span className="mx-2">/</span>
        <Link
          href={`/works/${kotaruru0603Case.slug}`}
          className="hover:text-accent"
        >
          {kotaruru0603Case.streamerName}
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/works/${kotaruru0603Case.slug}/clips`}
          className="hover:text-accent"
        >
          切り抜き
        </Link>
        <span className="mx-2">/</span>
        <span>{clip.sequenceNo}本目</span>
      </nav>

      {/* Header */}
      <header className="mt-6">
        <p className="text-xs tracking-wide text-accent">
          切り抜き {String(clip.sequenceNo).padStart(2, "0")} / {String(clips.length).padStart(2, "0")}
        </p>
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight">
          {clip.title}
        </h1>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          公開タイトル: {clip.fullTitle}
        </p>
      </header>

      {/* Hero: short + metrics */}
      <section className="mt-10 grid gap-6 sm:grid-cols-[280px,1fr]">
        <ShortsEmbed videoId={clip.shortVideoId} title={clip.title} />
        <div className="flex flex-col gap-4">
          <MetricsBar metrics={clip.metrics} postedAt={clip.postedAt} />
          <a
            href={`https://www.youtube.com/shorts/${clip.shortVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent self-start"
          >
            YouTube で開く ↗
          </a>
        </div>
      </section>

      {/* Source */}
      <section className="mt-16">
        <h2 className="text-base font-bold">元配信からの切り取り</h2>
        <p className="mt-2 text-xs text-muted">
          配信全体のどこを、どれだけ抽出したか
        </p>
        <div className="mt-5">
          <SourceCard source={clip.source} />
        </div>
      </section>

      {/* Selection */}
      <section className="mt-16">
        <h2 className="text-base font-bold">場面選定の判断</h2>
        <div className="mt-5 rounded-2xl bg-accent-bg/30 p-5">
          <p className="text-xs text-accent font-bold">
            {SELECTION_LABEL[clip.selection.who] ?? "—"}
          </p>
          <p className="mt-3 text-sm leading-loose">
            {clip.selection.reasoning}
          </p>
        </div>
      </section>

      {/* Telops */}
      <section className="mt-16">
        <h2 className="text-base font-bold">テロップ設計</h2>
        <p className="mt-2 text-xs text-muted">
          場面ごとの意図と、それに対するruruさん・視聴者の反応
        </p>
        <div className="mt-5">
          <TelopList telops={clip.telops} />
        </div>
      </section>

      {/* Production notes */}
      <section className="mt-16">
        <h2 className="text-base font-bold">制作のポイント</h2>
        <ul className="mt-5 space-y-3">
          {clip.productionNotes.map((n, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed"
            >
              <span className="flex-shrink-0 text-accent">◎</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Responses */}
      <section className="mt-16">
        <h2 className="text-base font-bold">反応・実績</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {clip.responses.ruru && (
            <div className="rounded-2xl bg-rose-bg/60 p-5">
              <p className="text-xs text-rose font-bold">本人より</p>
              <p className="mt-3 text-sm leading-loose">
                {clip.responses.ruru}
              </p>
            </div>
          )}
          {clip.responses.viewer && (
            <div className="rounded-2xl bg-sage-bg/60 p-5">
              <p className="text-xs text-sage font-bold">視聴者・数字</p>
              <p className="mt-3 text-sm leading-loose">
                {clip.responses.viewer}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Learnings */}
      <section className="mt-16">
        <h2 className="text-base font-bold">この回からの学び</h2>
        <ul className="mt-5 space-y-3">
          {clip.learnings.map((l, i) => (
            <li
              key={i}
              className="rounded-2xl border-l-4 border-accent bg-surface p-4 text-sm leading-loose"
            >
              {l}
            </li>
          ))}
        </ul>
      </section>

      {/* Prev/Next */}
      <section className="mt-16">
        <ClipNav prev={prev} next={next} caseSlug={kotaruru0603Case.slug} />
      </section>

      <nav className="mt-12">
        <Link
          href={`/works/${kotaruru0603Case.slug}/clips`}
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent"
        >
          ← 切り抜き一覧に戻る
        </Link>
      </nav>
    </div>
  );
}
