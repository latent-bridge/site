import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { SitePageShell } from "../../../../../components/works/SitePageShell";

const MASCOTS = [
  { name: "うさぎ", role: "ホーム / ナビ", note: "やわらか・基幹キャラ。サイト全体の顔。" },
  { name: "ねこ", role: "ざつだん / DM", note: "気まぐれ・チル。チャット系の場面で登場。" },
  { name: "くま", role: "メンバー / VIP", note: "どっしり・包容。応援者の象徴。" },
  { name: "ぱんだ", role: "アナウンス", note: "強コントラスト・告知用に視認性が高い。" },
  { name: "きつね", role: "ヒント / 解説", note: "賢く案内役。ヘルプテキストやガイドに登場。" },
  { name: "はむ", role: "アクティビティ", note: "小さい単位の行動 (スタンプ取得など) を表現。" },
  { name: "ぺんぎん", role: "シーズン / イベント", note: "季節モチーフ。期間限定演出で活躍。" },
];

export default function MascotsPage() {
  const c = kotaruru0603Case;
  const link = c.siteGroups
    .flatMap((g) => g.links)
    .find((l) => l.slug === "mascots")!;

  return (
    <SitePageShell
      caseSlug={c.slug}
      streamerName={c.streamerName}
      groupTitle="素材 / 動物部屋"
      title="動物部屋 (マスコット)"
      category="Assets"
      tagline="ぽんこつべやの世界観の中核を支える 7 体のマスコット。チャット参加者・支援tier・通知などに割り当てて、ファンサイト全体の登場人物として機能させます。"
      liveUrl={link.url}
      liveLabel="動物部屋を開く"
      heroPath={link.screenshotPath}
    >
      <section className="mt-16">
        <h2 className="text-xs tracking-wide text-muted mb-1">Cast</h2>
        <p className="text-base font-bold">7 体それぞれの役割</p>
        <p className="mt-3 text-xs text-muted leading-relaxed">
          ただのマスコット集合ではなく、サイト内のシーンごとに「どの動物を出すか」を決めて運用しています。
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {MASCOTS.map((m) => (
            <li
              key={m.name}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">{m.name}</h3>
                <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] text-accent font-bold">
                  {m.role}
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed">{m.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-accent-bg/30 p-8">
        <h2 className="text-base font-bold">どこで使われているか</h2>
        <ul className="mt-5 space-y-3 text-sm leading-loose">
          <li>
            <span className="font-bold">CHAT の参加者アバター</span> — 視聴者は登録時に動物が割り当たり、サイト内でその動物として表示される
          </li>
          <li>
            <span className="font-bold">スタンプカードの来場演出</span> — ログイン時オーバーレイに動物が登場
          </li>
          <li>
            <span className="font-bold">通知・お知らせの送り手</span> — メッセージの種類に応じて動物が変わる
          </li>
          <li>
            <span className="font-bold">将来の MEMBER tier 表現</span> — 支援レベルごとにくま / ぺんぎんなど象徴を割り当てる予定
          </li>
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-warm-bg/40 p-8">
        <h2 className="text-base font-bold">設計方針</h2>
        <p className="mt-5 text-sm leading-loose">
          顔の輪郭・目の形・色味を共通化し、横並びで「同じ部屋の住人」と感じられるトンマナで統一。
          一体だけ浮かないよう、配色も世界観の主要 4 色から選んでいます。
        </p>
      </section>
    </SitePageShell>
  );
}
