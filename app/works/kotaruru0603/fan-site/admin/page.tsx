import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { SitePageShell } from "../../../../../components/works/SitePageShell";

export default function AdminPage() {
  const c = kotaruru0603Case;
  const link = c.siteGroups
    .flatMap((g) => g.links)
    .find((l) => l.slug === "admin")!;

  return (
    <SitePageShell
      caseSlug={c.slug}
      streamerName={c.streamerName}
      groupTitle="管理画面"
      title="管理画面"
      category="Admin"
      tagline="配信者本人だけが触れる運営ダッシュボード。視聴者向けサイトの中身を、配信者のペースで更新できる場所を独立 URL に分離しています。"
      liveUrl={link.url}
      liveLabel="管理画面を開く"
      authNote={link.authNote}
      heroPath={link.screenshotPath}
    >
      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-1">Capabilities</h2>
        <p className="text-base font-bold">管理画面でできること</p>

        <ol className="mt-6 space-y-4">
          {[
            {
              title: "スケジュール編集",
              body: "視聴者向け SCHEDULE ページに反映される配信予定をフォームから入力。週/月ビューに自動で展開されます。",
            },
            {
              title: "アーカイブのキュレーション",
              body: "YouTube Data API で自動収集された動画に、カテゴリ・タグ・コラボ情報・配色を後付け。「ポンコツだいぶ」など本人語彙でファセットを切れます。",
            },
            {
              title: "チャット運営",
              body: "ファン同士の常設チャットのモデレーション、ピン留め、ルール変更。Discord 連携時は両側から見えるよう同期する想定。",
            },
            {
              title: "プロフィール / お知らせ更新",
              body: "HOME のプロフィール文・スタッツ・カウントダウンの素材を編集。新コラボや新ゲームに合わせて即時反映できます。",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-accent font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-loose">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 rounded-3xl bg-warm-bg/40 p-8">
        <h2 className="text-base font-bold">なぜ独立 URL に分けるのか</h2>
        <div className="mt-5 space-y-4 text-sm leading-loose">
          <p>
            視聴者向けサイトと管理画面は<strong>関心が違う</strong>ため、URL とデザインを完全に分離しています。
            視聴者が誤って管理画面に辿り着かない設計と、配信者が日常的に触る場所として迷わない設計の両立が目的です。
          </p>
          <p>
            認証は admin URL に到達した時点でログイン要求。視聴者には admin URL を共有しないため、外部からは存在を意識しないまま動作します。
          </p>
        </div>
      </section>
    </SitePageShell>
  );
}
