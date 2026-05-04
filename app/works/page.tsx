import Link from "next/link";
import { cases } from "../../data/works/cases";

export default function WorksIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="text-center">
        <p className="text-xs tracking-wide text-accent mb-4">Works</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed">
          実際の制作物と、
          <br />
          その背景を
          <br className="sm:hidden" />
          公開しています
        </h1>
        <p className="mt-6 text-sm text-muted leading-loose">
          配信者ごとに「何を、なぜ、どう作ったか」を1案件ずつ記録しています。
          <br />
          お会いした方には、これを見ながら30分で全部お話しします。
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-4">Cases</h2>
        <ul className="space-y-4">
          {cases.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/works/${c.slug}`}
                className="block rounded-3xl border border-border bg-surface p-6 hover:border-accent hover:bg-accent-bg/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted">@{c.streamerHandle}</p>
                    <p className="mt-1 text-lg font-bold">{c.streamerName}</p>
                  </div>
                  <span className="rounded-full bg-accent-bg px-3 py-1 text-[11px] text-accent">
                    {c.status}
                  </span>
                </div>
                <p className="mt-3 text-xs text-muted leading-relaxed">
                  {c.description}
                </p>
                <p className="mt-4 text-[11px] text-muted">
                  開始: {c.startedAt} ・ クリップ {c.clips.length} 本
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent"
        >
          ← Latent Bridge トップに戻る
        </Link>
      </nav>
    </div>
  );
}
