import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "lizpechiさんへのご提案 — Latent Bridge",
  description: "口頭でのご説明と合わせてご参照ください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LizpechiProposalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <p className="text-xs tracking-wide text-accent mb-3">Proposal</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed">
          lizpechiさん側の
          <br className="sm:hidden" />
          保護の内容
        </h1>
        <p className="mt-6 text-sm text-muted leading-loose">
          口頭でのご説明と合わせてご参照ください。
          <br />
          名義はこちらでお預かりさせていただきたいというお願いに対し、lizpechiさん側を守る仕組みをこの3点に集約しています。
        </p>
      </header>

      {/* Section 1: lizpechiさん主導のチャンネル */}
      <section className="mt-16">
        <p className="text-xs tracking-wide text-muted mb-4">1</p>
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold leading-relaxed">
            lizpechiさん主導のチャンネル
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed">
            <li>本チャンネルはlizpechiさんを専属の出演者として運営します。</li>
            <li>
              チャンネルの方向性（企画・コンセプト・ブランド・雰囲気等）はlizpechiさんが決定します。
            </li>
            <li>
              我々は編集・運営・配信オペレーション等の実装側として支援する立場です。
            </li>
            <li>
              以下については、必ずlizpechiさんの書面同意を取ります：
              <ul className="mt-3 ml-1 space-y-2 text-muted">
                <li>・ 他演者の登用、出演比率の意図的な低減</li>
                <li>・ ブランド・名称・コンセプトの本質的な変更</li>
                <li>・ チャンネル方向性に関わる重要な意思決定</li>
              </ul>
            </li>
          </ul>
          <p className="mt-8 text-sm text-accent leading-relaxed">
            → 我々は実装、lizpechiさんが方針、という役割分担です。
          </p>
        </div>
      </section>

      {/* Section 2: 業務不履行 → 自動譲渡 */}
      <section className="mt-8">
        <p className="text-xs tracking-wide text-muted mb-4">2</p>
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold leading-relaxed">
            我々が義務を果たさない場合
            <br className="sm:hidden" />
            <span className="text-muted"> → </span>
            自動的にチャンネルが戻る
          </h2>
          <p className="mt-6 text-sm leading-relaxed">
            以下のいずれかが継続した場合、無償でチャンネルがlizpechiさんに譲渡されます：
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            <li>・ 動画投稿の継続的な停止</li>
            <li>・ 月の最低投稿本数を継続的に下回ること</li>
            <li>・ 収益分配の支払い遅延</li>
            <li>
              ・
              上記「lizpechiさん主導」に基づく義務違反（他演者の無断起用、方向性の無断変更等）
            </li>
            <li>・ 運営側の解散・破産・事業停止</li>
            <li>・ その他、運営側の責任範囲での重大な不履行</li>
          </ul>
          <div className="mt-6 space-y-1 text-xs text-muted leading-relaxed">
            <p>
              ※ 一定の改善期間（30日程度）を経ても解消されない場合に発動します。
            </p>
            <p>※ 不可抗力（YouTubeアカウント停止等）は除外します。</p>
          </div>
          <p className="mt-8 text-sm text-accent leading-relaxed">
            → 我々が手を抜けば、構造的にチャンネルが戻る仕組みです。
          </p>
        </div>
      </section>

      {/* Section 3: 収益分配 */}
      <section className="mt-8">
        <p className="text-xs tracking-wide text-muted mb-4">3</p>
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <h2 className="text-lg sm:text-xl font-bold leading-relaxed">
              収益分配
            </h2>
            <span className="rounded-full bg-accent-bg px-3 py-1 text-[11px] text-accent">
              案・調整中
            </span>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted">
                  <th className="py-3 pr-4 font-normal">段階</th>
                  <th className="py-3 pr-4 text-right font-normal">演者</th>
                  <th className="py-3 text-right font-normal">運営</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="py-3 pr-4">立ち上げ期</td>
                  <td className="py-3 pr-4 text-right font-bold">50%</td>
                  <td className="py-3 text-right text-muted">50%</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-3 pr-4">拡大期</td>
                  <td className="py-3 pr-4 text-right font-bold">60%</td>
                  <td className="py-3 text-right text-muted">40%</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-3 pr-4">成長期</td>
                  <td className="py-3 pr-4 text-right font-bold">75%</td>
                  <td className="py-3 text-right text-muted">25%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">成熟期</td>
                  <td className="py-3 pr-4 text-right font-bold">90%</td>
                  <td className="py-3 text-right text-muted">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-muted leading-relaxed">
            ※
            各段階を区切る基準は、月間収益額および登録者数を指標として設定します。具体的な数値は、本人の規模感・コスト試算を踏まえて協議の上で確定します。
          </p>
          <p className="mt-8 text-sm text-accent leading-relaxed">
            → 成長と共にlizpechiさんの取り分が大きくなる設計です。
          </p>
        </div>
      </section>

      {/* 補足 */}
      <section className="mt-8">
        <p className="text-xs tracking-wide text-muted mb-4">補足</p>
        <div className="rounded-3xl border border-border bg-accent-bg/20 p-6 sm:p-8">
          <ul className="space-y-3 text-sm leading-relaxed text-muted">
            <li>
              ・
              個人ブランド（名前・声・配信元活動・SNS等）はlizpechiさんに完全帰属します。
            </li>
            <li>・ その他の細部は契約書段階で詳細化します。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
