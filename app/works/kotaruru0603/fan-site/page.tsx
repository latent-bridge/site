import Link from "next/link";
import { kotaruru0603Case } from "../../../../data/works/kotaruru0603";
import { asset } from "../../../../lib/asset";

export default function FanSiteHub() {
  const c = kotaruru0603Case;

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
          ファンサイトを成立させるために用意した 3 つの分類です。
          <br />
          それぞれをクリックすると、その分類の説明ページに進めます。
        </p>
      </header>

      <ul className="mt-12 space-y-6">
        {c.siteGroups.map((group) => {
          const previewLink = group.links[0];
          return (
            <li key={group.slug}>
              <Link
                href={group.detailPath}
                className="group block overflow-hidden rounded-3xl border border-border bg-surface hover:border-accent transition-colors"
              >
                <div className="grid sm:grid-cols-[1fr,1.2fr] gap-0">
                  {previewLink?.screenshotPath && (
                    <div className="overflow-hidden bg-warm-bg/30 sm:order-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(previewLink.screenshotPath)}
                        alt={`${group.title} のプレビュー`}
                        className="w-full h-full object-cover block group-hover:opacity-95 transition-opacity"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:order-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] text-muted">{group.description}</p>
                      <h3 className="mt-2 text-lg font-bold">{group.title}</h3>
                      <p className="mt-3 text-xs text-muted leading-relaxed">
                        {group.links.length > 1
                          ? group.links.map((l) => l.title).join(" / ")
                          : group.links[0]?.description}
                      </p>
                    </div>
                    <p className="mt-6 text-xs text-accent font-bold group-hover:underline">
                      紹介を見る →
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

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
