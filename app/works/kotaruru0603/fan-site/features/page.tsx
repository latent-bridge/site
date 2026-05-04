import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { asset } from "../../../../../lib/asset";
import { SitePageShell } from "../../../../../components/works/SitePageShell";

export default function FanSiteMain() {
  const c = kotaruru0603Case;
  const f = c.fanSite;

  return (
    <SitePageShell
      caseSlug={c.slug}
      streamerName={c.streamerName}
      groupTitle="ファンサイト本体"
      title="ファンサイト本体"
      category="Features"
      tagline="視聴者の「いつものたまり場」を、配信者ごとに最適化して用意する場所。応援動線を内側に持ち、手数料を抑えながら配信者の収益に繋げる構造です。"
      liveUrl={f.liveUrl}
      liveLabel="ファンサイトを開く"
    >
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

        <ol className="mt-10 space-y-12">
          {f.features.map((feat, i) => {
            const isUnimplemented = !feat.screenshotPath;
            return (
              <li key={feat.slug}>
                <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-start">
                  <div className="md:order-1">
                    {feat.screenshotPath ? (
                      <a
                        href={
                          feat.livePath
                            ? `${f.liveUrl.replace(/\/$/, "")}${feat.livePath}`
                            : f.liveUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(feat.screenshotPath)}
                          alt={`${feat.title} のスクリーンショット`}
                          className="w-full h-auto block"
                        />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-border bg-warm-bg/30 p-12 text-center min-h-[260px]">
                        <div>
                          <p className="text-xs text-muted font-bold tracking-wide">
                            COMING SOON
                          </p>
                          <p className="mt-2 text-xs text-muted">
                            この機能はまだ実装されていません
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:order-2">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-xs text-accent font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold">{feat.title}</h3>
                      {isUnimplemented && (
                        <span className="rounded-full bg-warm-bg px-2 py-0.5 text-[10px] text-warm font-bold">
                          予定
                        </span>
                      )}
                      {feat.requestedBy && (
                        <span className="rounded-full bg-rose-bg px-2 py-0.5 text-[10px] text-rose font-bold">
                          {feat.requestedBy}さんの要望
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm font-bold leading-relaxed text-foreground/80">
                      {feat.summary}
                    </p>
                    <p className="mt-3 text-sm leading-loose">
                      {feat.description}
                    </p>
                    {feat.designIntent && (
                      <div className="mt-4 rounded-2xl bg-accent-bg/30 p-4">
                        <p className="text-[11px] text-accent font-bold">
                          設計意図
                        </p>
                        <p className="mt-2 text-xs leading-relaxed">
                          {feat.designIntent}
                        </p>
                      </div>
                    )}
                    {feat.livePath && feat.screenshotPath && (
                      <a
                        href={`${f.liveUrl.replace(/\/$/, "")}${feat.livePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex text-[11px] text-accent"
                      >
                        実際の画面を開く ↗
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
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
    </SitePageShell>
  );
}
