export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-accent-soft/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] left-[5%] w-64 h-64 bg-warm/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[30%] w-48 h-48 bg-rose/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-xl">
          <p className="text-accent text-sm tracking-wide mb-8">
            Latent Bridge
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-relaxed tracking-tight">
            あなたの配信、
            <br />
            届くべき人に
            <br />
            ちゃんと届いていますか？
          </h1>
          <p className="mt-8 text-base text-muted leading-loose max-w-sm mx-auto">
            配信の中身には自信がある。
            <br />
            でも届け方がわからない。
            <br />
            その部分を、あなたの代わりに引き受けます。
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 px-7 py-3.5 bg-accent text-white text-sm rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            ちょっと話してみる
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-warm-bg/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
            こんなこと、ありませんか？
          </h2>
          <div className="space-y-3">
            {[
              "配信は頑張ってるのに、新しいリスナーが増えない",
              "SNSの運用、つい後回しにしちゃう",
              "切り抜き作りたいけど、時間がない…",
              "何をすれば伸びるのか、情報が多すぎてわからない",
              "配信以外のことに手が回りきらない",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-surface rounded-2xl"
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-rose-bg text-rose rounded-full text-sm">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold">
              配信に集中してもらうために、
              <br />
              周りのことを引き受けます
            </h2>
            <p className="mt-3 text-sm text-muted">
              あなたがやらなくていいことを、こちらでやります
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "✂️",
                title: "切り抜き制作",
                desc: "配信のハイライトを切り抜いてShorts / TikTokに投稿します",
                bg: "bg-rose-bg",
              },
              {
                icon: "📣",
                title: "SNS運用サポート",
                desc: "配信告知の作成、投稿タイミング、プロフィールの整備",
                bg: "bg-accent-bg",
              },
              {
                icon: "⚙️",
                title: "チャンネル設定の最適化",
                desc: "タグ・カテゴリ・概要欄など、見落としがちな部分を改善",
                bg: "bg-sage-bg",
              },
              {
                icon: "🛒",
                title: "コンテンツ販売の立ち上げ",
                desc: "BOOTH等での販売ページ構築、商品説明文の作成",
                bg: "bg-warm-bg",
              },
              {
                icon: "💬",
                title: "コミュニティの初期構築",
                desc: "Discordサーバーの設計と構築をお手伝い",
                bg: "bg-sky-bg",
              },
              {
                icon: "💡",
                title: "情報提供",
                desc: "あなたの状況に合った選択肢と、必要な情報を共有します",
                bg: "bg-accent-bg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-surface rounded-2xl border border-border hover:shadow-sm transition-shadow duration-300"
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 flex items-center justify-center ${item.bg} rounded-xl text-lg`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stance */}
      <section className="py-20 px-6 bg-accent-bg/40">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
            事務所でもコンサルでもありません
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "あなたの活動を尊重します",
                sub: "こちらが方向性を決めることはしません",
              },
              {
                text: "「こうすべき」とは言いません",
                sub: "「こういう選択肢がありますよ」をお伝えします",
              },
              {
                text: "あなたの負担は増やしません",
                sub: "やることが減る方向で関わります",
              },
              {
                text: "配信の中身には触れません",
                sub: "届け方の部分だけをサポートします",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-5 bg-surface rounded-2xl">
                <span className="flex-shrink-0 mt-0.5 text-accent text-lg">
                  ◎
                </span>
                <div>
                  <p className="font-bold text-sm">{item.text}</p>
                  <p className="mt-1 text-xs text-muted">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold">完全成果報酬です</h2>
          <div className="mt-8 p-8 bg-surface rounded-3xl border border-border">
            <p className="text-4xl font-bold text-accent">¥0</p>
            <p className="mt-1 text-xs text-muted">初期費用・月額費用</p>
            <div className="w-12 h-px bg-border mx-auto my-5" />
            <p className="text-sm leading-loose">
              成果が出た場合のみ、
              <br />
              成果に応じた報酬をいただきます
            </p>
            <p className="mt-4 text-xs text-muted leading-relaxed">
              ※「成果」の定義は事前にすり合わせます
              <br />
              （フォロワー増加、視聴者数、売上など）
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 bg-warm-bg/30">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            まずは気軽にどうぞ
          </h2>
          <p className="mt-3 text-sm text-muted">
            配信のこと、届け方のこと、なんでも大丈夫です
          </p>
          <a
            href="https://x.com/LatentB3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X で話してみる
          </a>
          <p className="mt-5 text-xs text-muted">
            DMでお気軽に。売り込みはしません
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border">
        <p className="text-center text-xs text-muted/50">Latent Bridge</p>
      </footer>
    </div>
  );
}
