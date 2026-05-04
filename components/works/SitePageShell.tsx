import Link from "next/link";
import type { ReactNode } from "react";
import { asset } from "../../lib/asset";

type Props = {
  caseSlug: string;
  streamerName: string;
  groupTitle: string;
  title: string;
  tagline: string;
  category?: string;
  liveUrl: string;
  liveLabel?: string;
  authNote?: string;
  heroPath?: string;
  children: ReactNode;
};

export function SitePageShell({
  caseSlug,
  streamerName,
  groupTitle,
  title,
  tagline,
  category,
  liveUrl,
  liveLabel = "実物を開く",
  authNote,
  heroPath,
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="text-xs text-muted">
        <Link href="/works" className="hover:text-accent">
          実績
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${caseSlug}`} className="hover:text-accent">
          {streamerName}
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/works/${caseSlug}/fan-site`}
          className="hover:text-accent"
        >
          ファンサイト
        </Link>
        <span className="mx-2">/</span>
        <span>{groupTitle}</span>
      </nav>

      <header className="mt-6">
        {category && (
          <p className="text-xs tracking-wide text-accent mb-3">{category}</p>
        )}
        <div className="flex flex-wrap items-baseline gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          {authNote && (
            <span className="rounded-full bg-warm-bg px-2.5 py-1 text-[11px] text-warm font-bold">
              {authNote}
            </span>
          )}
        </div>
        <p className="mt-6 text-sm leading-loose">{tagline}</p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-bold hover:border-accent hover:text-accent transition-colors"
        >
          {liveLabel} ↗
        </a>
        <p className="mt-3 text-[11px] text-muted break-all">{liveUrl}</p>

        {heroPath && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(heroPath)}
              alt={`${title} のスクリーンショット`}
              className="w-full h-auto block"
            />
          </div>
        )}
      </header>

      {children}

      <section className="mt-16 rounded-3xl bg-accent-bg/30 p-6 text-center">
        <p className="text-xs text-muted mb-3">実際に動かしてみる</p>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold text-white hover:opacity-90 transition-opacity"
        >
          {liveLabel} ↗
        </a>
      </section>

      <nav className="mt-12">
        <Link
          href={`/works/${caseSlug}/fan-site`}
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent"
        >
          ← ファンサイトの一覧に戻る
        </Link>
      </nav>
    </div>
  );
}
