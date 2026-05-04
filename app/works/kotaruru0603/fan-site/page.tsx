import Link from "next/link";
import { kotaruru0603Case } from "../../../../data/works/kotaruru0603";
import { asset } from "../../../../lib/asset";

export default function FanSiteHub() {
  const c = kotaruru0603Case;
  const featuresPath = `/works/${c.slug}/fan-site/features`;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <nav className="text-xs text-muted">
        <Link href="/works" className="hover:text-accent">
          実績
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${c.slug}`} className="hover:text-accent">
          {c.streamerName}
        </Link>
        <span className="mx-2">/</span>
        <span>ファンサイト</span>
      </nav>

      <header className="mt-6">
        <p className="text-xs tracking-wide text-accent mb-3">Fan Site</p>
        <h1 className="text-2xl sm:text-3xl font-bold">ファンサイト</h1>
        <p className="mt-6 text-sm leading-loose">
          視聴者向けの本体、配信者向けの管理画面、世界観を支える素材。
          <br />
          ファンサイトを成立させるために用意した 3 つの公開物です。
        </p>
      </header>

      {c.siteGroups.map((group) => (
        <section key={group.slug} className="mt-16">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-bold">{group.title}</h2>
            {group.description && (
              <p className="text-[11px] text-muted">{group.description}</p>
            )}
          </div>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {group.links.map((link) => {
              const isMainSite = link.slug === "fan-site";
              return (
                <li key={link.slug}>
                  <div className="group block overflow-hidden rounded-3xl border border-border bg-surface hover:border-accent transition-colors">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {link.screenshotPath ? (
                        <div className="overflow-hidden bg-warm-bg/30">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={asset(link.screenshotPath)}
                            alt={`${link.title} のスクリーンショット`}
                            className="w-full h-auto block group-hover:opacity-95 transition-opacity"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/10] bg-warm-bg/30" />
                      )}
                    </a>
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-sm font-bold leading-tight">
                          {link.title}
                        </h3>
                        {link.authNote && (
                          <span className="rounded-full bg-warm-bg px-2 py-0.5 text-[10px] text-warm font-bold flex-shrink-0">
                            {link.authNote}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-xs text-muted leading-relaxed">
                        {link.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                        {isMainSite && (
                          <Link
                            href={featuresPath}
                            className="text-[11px] text-accent font-bold hover:underline"
                          >
                            機能の詳細を見る →
                          </Link>
                        )}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-accent break-all hover:underline"
                        >
                          {link.url} ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <nav className="mt-16">
        <Link
          href={`/works/${c.slug}`}
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent"
        >
          ← {c.streamerName} のケースに戻る
        </Link>
      </nav>
    </div>
  );
}
