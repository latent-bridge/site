import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { SitePageShell } from "../../../../../components/works/SitePageShell";

const CATEGORIES = [
  { name: "はいしん・げーむ", count: 10, sample: "コントローラー / ディスク / VHS / マイク / ヘッドホン など" },
  { name: "おしゃべり", count: 10, sample: "吹き出し / メッセージ / 通知 / リアクション など" },
  { name: "おうち", count: 10, sample: "家 / 部屋 / カレンダー / アラーム など" },
  { name: "たべもの", count: 10, sample: "おにぎり / コーヒー / 弁当 / おやつ など" },
  { name: "てんき", count: 10, sample: "晴れ / くも / 雨 / 星 / 月 など" },
  { name: "きもち", count: 10, sample: "ハート / きらきら / びっくり / ぐっとくる など" },
  { name: "ぜんぶ", count: 12, sample: "上記全カテゴリの集合表示用" },
];

export default function IconsPage() {
  const c = kotaruru0603Case;
  const link = c.siteGroups
    .flatMap((g) => g.links)
    .find((l) => l.slug === "icons")!;

  return (
    <SitePageShell
      caseSlug={c.slug}
      streamerName={c.streamerName}
      groupTitle="素材 / アイコン集"
      title="アイコン集"
      category="Assets"
      tagline="もちもち世界観に合わせて手作りした 72 個のアイコン。サイト各所のラベル・カードで一貫したトーンを作るための共通部品です。"
      liveUrl={link.url}
      liveLabel="アイコン集を開く"
      heroPath={link.screenshotPath}
    >
      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-1">Categories</h2>
        <p className="text-base font-bold">7 カテゴリ × 約 10 アイコン</p>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          配信中の場面・チャットの感情・サイト内の場所など、ファンサイトで頻出する文脈ごとに揃えています。
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <li
              key={cat.name}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">{cat.name}</h3>
                <span className="text-[11px] text-muted">{cat.count} 点</span>
              </div>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {cat.sample}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-accent-bg/30 p-8">
        <h2 className="text-base font-bold">どこで使われているか</h2>
        <ul className="mt-5 space-y-3 text-sm leading-loose">
          <li>
            <span className="font-bold">アーカイブのカテゴリラベル</span> — 「ポンコツだいぶ」「ゆるげーむ」などのファセットに対応するアイコン
          </li>
          <li>
            <span className="font-bold">スケジュールページのカード</span> — 配信内容のジャンルを一目で示す
          </li>
          <li>
            <span className="font-bold">CHAT のリアクション</span> — きもちカテゴリのアイコンを感情表示として使用
          </li>
          <li>
            <span className="font-bold">HOME のセクション見出し</span> — おうち・てんきカテゴリで世界観を統一
          </li>
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-warm-bg/40 p-8">
        <h2 className="text-base font-bold">設計方針</h2>
        <p className="mt-5 text-sm leading-loose">
          線の太さ・角丸・配色をルール化し、どのアイコンを並べても揃って見えるよう統一。
          市販のアイコンセットを混ぜず、案件ごとに専用で起こすことで「他のサイトに似ていない見た目」を担保しています。
        </p>
      </section>
    </SitePageShell>
  );
}
