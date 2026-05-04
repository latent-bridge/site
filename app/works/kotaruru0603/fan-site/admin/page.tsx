import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { asset } from "../../../../../lib/asset";
import { SitePageShell } from "../../../../../components/works/SitePageShell";

const FEATURES: {
  slug: string;
  title: string;
  summary: string;
  description: string;
  screenshotPath: string;
}[] = [
  {
    slug: "live",
    title: "ライブ配信",
    summary: "YouTube の配信をサイトの「LIVE NOW」へ即時切替",
    description:
      "ボタンひとつで配信中状態に切替、動画 ID は YouTube Data API から自動取得。OFFLINE 復帰や見守り (途中切れ検知) もこの画面で完結します。",
    screenshotPath: "/works/kotaruru0603/admin/live.png",
  },
  {
    slug: "schedule",
    title: "スケジュール",
    summary: "今日から 14 日間の配信予定を週ビューで編集",
    description:
      "タイトル・時刻・ノートに加え、カテゴリタグ (ゲーム / おしゃべり / おはなし / コラボ / おやすみ) と自由タグ、アイコン選択まで 1 行で入力。視聴者向け SCHEDULE ページに即反映されます。",
    screenshotPath: "/works/kotaruru0603/admin/schedule.png",
  },
  {
    slug: "archive",
    title: "アーカイブ",
    summary: "YouTube から取得した動画にカテゴリ・タグを後付け",
    description:
      "ピン留め・非表示・カテゴリ/タグの編集 (タイトル / サムネは YouTube 側で管理)。1 件ごとに「ぽんこつだいぶ」「ぽんこつさむらい」「ゆるげーむ」などの本人語彙ファセットを当てて、視聴者向け ARCHIVE の棚を整えます。",
    screenshotPath: "/works/kotaruru0603/admin/archive.png",
  },
  {
    slug: "chat",
    title: "チャット",
    summary: "ファンサイト内チャットのモデレーション",
    description:
      "投稿一覧から削除・非表示・元に戻す。配信者本人 (ruru) と運営 (LatentBridge) の発言は色分け表示で区別され、誰がいつ何を発言したかが一覧で追えます。",
    screenshotPath: "/works/kotaruru0603/admin/chat.png",
  },
  {
    slug: "stamps",
    title: "スタンプ",
    summary: "ファン参加状況・連続獲得・人気度の分析",
    description:
      "参加者数・今日アクティブ・累計スタンプ・完成カードのサマリ、日別の参加者推移グラフ、上位ファン (累計 / 完成 / 連続 / 最長 / 最終来訪) のランキング、完成カード分布を一画面で把握。配信者と運営が「誰が来てくれているか」を共通言語で見られる場所です。",
    screenshotPath: "/works/kotaruru0603/admin/stamps.png",
  },
];

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
    >
      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-1">Capabilities</h2>
        <p className="text-base font-bold">管理画面でできること</p>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          5 つのタブを行き来しながら、ファンサイトの中身を配信者自身が更新できます。
        </p>

        <ol className="mt-10 space-y-12">
          {FEATURES.map((f, i) => (
            <li key={f.slug}>
              <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-start">
                <div className="md:order-1">
                  <a
                    href={`${link.url.replace(/\/$/, "")}/${f.slug === "live" ? "" : f.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(f.screenshotPath)}
                      alt={`${f.title} のスクリーンショット`}
                      className="w-full h-auto block"
                    />
                  </a>
                </div>

                <div className="md:order-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-xs text-accent font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-relaxed text-foreground/80">
                    {f.summary}
                  </p>
                  <p className="mt-3 text-sm leading-loose">{f.description}</p>
                </div>
              </div>
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
            認証は admin URL に到達した時点でログイン要求 (Cookie ベースのセッション)。視聴者には admin URL を共有しないため、外部からは存在を意識しないまま動作します。
          </p>
        </div>
      </section>
    </SitePageShell>
  );
}
