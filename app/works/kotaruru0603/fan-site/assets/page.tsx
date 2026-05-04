import Link from "next/link";
import { kotaruru0603Case } from "../../../../../data/works/kotaruru0603";
import { asset } from "../../../../../lib/asset";

const ICON_CATEGORIES = [
  {
    name: "はいしん・げーむ",
    count: 10,
    sample: "コントローラー / ディスク / VHS / マイク / ヘッドホン など",
  },
  {
    name: "おしゃべり",
    count: 10,
    sample: "吹き出し / メッセージ / 通知 / リアクション など",
  },
  {
    name: "おうち",
    count: 10,
    sample: "家 / 部屋 / カレンダー / アラーム など",
  },
  {
    name: "たべもの",
    count: 10,
    sample: "おにぎり / コーヒー / 弁当 / おやつ など",
  },
  {
    name: "てんき",
    count: 10,
    sample: "晴れ / くも / 雨 / 星 / 月 など",
  },
  {
    name: "きもち",
    count: 10,
    sample: "ハート / きらきら / びっくり / ぐっとくる など",
  },
  {
    name: "ぜんぶ",
    count: 12,
    sample: "上記全カテゴリの集合表示用",
  },
];

const MASCOTS = [
  { name: "うさぎ", role: "ホーム / ナビ", note: "やわらか・基幹キャラ。サイト全体の顔。" },
  { name: "ねこ", role: "ざつだん / DM", note: "気まぐれ・チル。チャット系の場面で登場。" },
  { name: "くま", role: "メンバー / VIP", note: "どっしり・包容。応援者の象徴。" },
  { name: "ぱんだ", role: "アナウンス", note: "強コントラスト・告知用に視認性が高い。" },
  { name: "きつね", role: "ヒント / 解説", note: "賢く案内役。ヘルプテキストやガイドに登場。" },
  { name: "はむ", role: "アクティビティ", note: "小さい単位の行動 (スタンプ取得など) を表現。" },
  { name: "ぺんぎん", role: "シーズン / イベント", note: "季節モチーフ。期間限定演出で活躍。" },
];

export default function AssetsPage() {
  const c = kotaruru0603Case;
  const group = c.siteGroups.find((g) => g.slug === "assets")!;
  const icons = group.links.find((l) => l.slug === "icons")!;
  const mascots = group.links.find((l) => l.slug === "mascots")!;

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
        <Link
          href={`/works/${c.slug}/fan-site`}
          className="hover:text-accent"
        >
          ファンサイト
        </Link>
        <span className="mx-2">/</span>
        <span>素材</span>
      </nav>

      <header className="mt-6">
        <p className="text-xs tracking-wide text-accent mb-3">Assets</p>
        <h1 className="text-2xl sm:text-3xl font-bold">素材</h1>
        <p className="mt-6 text-sm leading-loose">
          ファンサイト全体で使い回す世界観のパーツです。
          <br />
          アイコンとマスコット、それぞれを配信者ごとに専用で起こすことで「他のサイトに似ていない見た目」を担保しています。
        </p>
      </header>

      {/* Icons section */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-3 mb-4">
          <div>
            <p className="text-xs tracking-wide text-muted">01</p>
            <h2 className="text-lg font-bold">{icons.title}</h2>
          </div>
          <a
            href={icons.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted hover:text-accent"
          >
            実物を開く ↗
          </a>
        </div>

        {icons.screenshotPath && (
          <a
            href={icons.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(icons.screenshotPath)}
              alt={`${icons.title} のスクリーンショット`}
              className="w-full h-auto block"
            />
          </a>
        )}

        <p className="mt-5 text-sm leading-loose">{icons.description}</p>

        <div className="mt-6">
          <p className="text-xs text-muted mb-3">7 カテゴリ × 約 10 アイコン</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ICON_CATEGORIES.map((cat) => (
              <li
                key={cat.name}
                className="rounded-2xl border border-border bg-surface p-4"
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
        </div>

        <div className="mt-6 rounded-2xl bg-accent-bg/30 p-5">
          <p className="text-[11px] text-accent font-bold">どこで使われているか</p>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed">
            <li>アーカイブのカテゴリラベル (ポンコツだいぶ / ゆるげーむ などのファセット)</li>
            <li>スケジュールページのカード (配信ジャンルを一目で示す)</li>
            <li>CHAT のリアクション (きもちカテゴリを感情表示に流用)</li>
            <li>HOME のセクション見出し (おうち・てんきカテゴリで世界観を統一)</li>
          </ul>
        </div>
      </section>

      {/* Mascots section */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-3 mb-4">
          <div>
            <p className="text-xs tracking-wide text-muted">02</p>
            <h2 className="text-lg font-bold">{mascots.title}</h2>
          </div>
          <a
            href={mascots.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted hover:text-accent"
          >
            実物を開く ↗
          </a>
        </div>

        {mascots.screenshotPath && (
          <a
            href={mascots.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(mascots.screenshotPath)}
              alt={`${mascots.title} のスクリーンショット`}
              className="w-full h-auto block"
            />
          </a>
        )}

        <p className="mt-5 text-sm leading-loose">{mascots.description}</p>

        <div className="mt-6">
          <p className="text-xs text-muted mb-3">7 体それぞれの役割</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {MASCOTS.map((m) => (
              <li
                key={m.name}
                className="rounded-2xl border border-border bg-surface p-4"
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
        </div>

        <div className="mt-6 rounded-2xl bg-accent-bg/30 p-5">
          <p className="text-[11px] text-accent font-bold">どこで使われているか</p>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed">
            <li>CHAT の参加者アバター (登録時に動物が割り当たり、サイト内でその動物として表示)</li>
            <li>スタンプカードの来場演出 (ログイン時オーバーレイに動物が登場)</li>
            <li>通知・お知らせの送り手 (メッセージ種類で動物を切替)</li>
            <li>将来の MEMBER tier 表現 (支援レベルにくま / ぺんぎんなど象徴を割当予定)</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-warm-bg/40 p-8">
        <h2 className="text-base font-bold">設計方針</h2>
        <p className="mt-5 text-sm leading-loose">
          線の太さ・角丸・配色をルール化し、アイコンとマスコットが横並びでも違和感が出ないトンマナで統一。
          市販のアセットを混ぜず、案件ごとに専用で起こすことで「他のサイトに似ていない見た目」を担保しています。
        </p>
      </section>

      <nav className="mt-12">
        <Link
          href={`/works/${c.slug}/fan-site`}
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent"
        >
          ← ファンサイトの一覧に戻る
        </Link>
      </nav>
    </div>
  );
}
