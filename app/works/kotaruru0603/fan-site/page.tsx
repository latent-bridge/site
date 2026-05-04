import Link from "next/link";
import { kotaruru0603Case } from "../../../../data/works/kotaruru0603";

export default function FanSiteShowcase() {
  const c = kotaruru0603Case;
  const f = c.fanSite;

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
        <span>ファンサイト構築</span>
      </nav>

      <header className="mt-6">
        <p className="text-xs tracking-wide text-accent mb-3">Fan Site</p>
        <h1 className="text-2xl sm:text-3xl font-bold">ファンサイト構築</h1>
        <p className="mt-6 text-sm leading-loose">
          視聴者の「いつものたまり場」を、配信者ごとに最適化して用意します。
          <br />
          応援動線を内側に持ち、手数料を抑えながら配信者の収益に繋げる構造です。
        </p>

        <a
          href={f.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-white hover:opacity-90 transition-opacity"
        >
          実際のサイトを開く ↗
        </a>
        <p className="mt-3 text-[11px] text-muted">
          {f.liveUrl} ・ デザイン: {f.designName}
        </p>
      </header>

      {/* Why */}
      <section className="mt-16 rounded-3xl bg-warm-bg/40 p-8">
        <h2 className="text-base font-bold">なぜファンサイトを作るのか</h2>
        <div className="mt-5 space-y-4 text-sm leading-loose">
          <p>
            <span className="font-bold">手数料の構造を変える</span>
            ：YouTube
            のスーパーチャットはアプリ経由だと Apple/Google で 30% 抜かれ、
            さらに YouTube 手数料が引かれます。視聴者が払った金額の半分も配信者に届きません。
          </p>
          <p>
            ファンサイト経由の決済なら手数料は 3% 程度。
            残りを「配信者への分配」「運営費用」「視聴者への還元」の原資として再分配できます。
          </p>
          <p>
            <span className="font-bold">場所を作る</span>
            ：YouTube のチャットは流れていくだけ、Twitter は外に開きすぎ。
            配信者ごとに「ここに来れば最新情報がある」場所が必要です。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-1">Features</h2>
        <p className="text-base font-bold">機能ごとの作り込み</p>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          配信者の世界観に合わせて見た目を変えつつ、
          中の機能は積み重ねた共通土台を使い回しています。
        </p>

        <ol className="mt-8 space-y-6">
          {f.features.map((feat, i) => (
            <li
              key={feat.slug}
              className="rounded-3xl border border-border bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-accent font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold">{feat.title}</h3>
                </div>
                {feat.livePath && (
                  <a
                    href={`${f.liveUrl.replace(/\/$/, "")}${feat.livePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-accent flex-shrink-0"
                  >
                    実際の画面 ↗
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm font-bold leading-relaxed text-foreground/80">
                {feat.summary}
              </p>
              <p className="mt-3 text-sm leading-loose">{feat.description}</p>
              {feat.designIntent && (
                <div className="mt-4 rounded-2xl bg-accent-bg/30 p-4">
                  <p className="text-[11px] text-accent font-bold">設計意図</p>
                  <p className="mt-2 text-xs leading-relaxed">
                    {feat.designIntent}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Design selection story */}
      {f.designStory && (
        <section className="mt-16">
          <h2 className="text-xs tracking-wide text-muted mb-1">Design</h2>
          <p className="text-base font-bold">デザインは配信者と一緒に選ぶ</p>
          <p className="mt-5 rounded-3xl border-l-4 border-accent bg-surface p-6 text-sm leading-loose">
            {f.designStory}
          </p>
        </section>
      )}

      {/* Back to case */}
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
