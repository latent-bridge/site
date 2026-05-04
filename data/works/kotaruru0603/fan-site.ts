import type { FanSiteInfo } from "../types";

export const fanSite: FanSiteInfo = {
  liveUrl: "https://kotaruru0603.latent-bridge.com/",
  designName: "MOCHI HOUSE / もちもち",
  designStory:
    "最初の提案は MIDNIGHT OPS (ダーク × ネオンミント) でしたが、ruruさんに「あくまで一案」と伝えた上で別方向性のデザインギャラリーを提示。ruruさん自身が「【もちもち】が凄く好み」と選定し、雰囲気はそのまま、中の言葉 (もちもち→ぽんこつ/ruru) は本人提案で差し込み。デザインも中身も配信者と一緒に育てる構造にしています。",
  features: [
    {
      slug: "home",
      title: "HOME",
      summary: "配信者の世界観を最初の3秒で伝える入口",
      description:
        "ヒーロー、自己紹介、最近のスタッツ、次の配信までのカウントダウン。視聴者が「いつ来てもまず最新情報がある」状態にしておく場所。",
      designIntent:
        "サイトに来た人が「次に何が起きるか」を最短で掴めるよう、ライブ予定とスケジュールを上部に固定。固定客の習慣形成に効きます。",
      livePath: "/",
    },
    {
      slug: "stream",
      title: "STREAM",
      summary: "ライブ視聴 + チャット同居の専用画面",
      description:
        "YouTube ライブ埋め込みと、サイト内チャットを同じ画面に並べた配信視聴ページ。配信者ID(ruru)発言は色分けで強調。Discord 連携も将来的に同居予定。",
      designIntent:
        "「ライブを見る」と「ファン同士で盛り上がる」を1画面に統合。YouTube だけでは流れていく会話を、配信者ごとの場所に蓄積させる狙い。",
      livePath: "/stream",
    },
    {
      slug: "archive",
      title: "ARCHIVE",
      summary: "ゲーム別・コラボ別にキュレーションされたアーカイブ",
      description:
        "YouTube Data API で自動収集した動画に、配信者と相談しながらカテゴリ・タグ・コラボ情報・配色を後付け。「ポンコツだいぶ」「ポンコツさむらい」などの本人語彙でファセットを切れる。",
      designIntent:
        "通常の YouTube チャンネルでは埋もれる過去配信を、世界観に沿った棚として再編成。新規視聴者の入り口として機能させる。",
      livePath: "/archive",
    },
    {
      slug: "schedule",
      title: "SCHEDULE",
      summary: "週/月切替の配信予定カレンダー",
      description:
        "配信者が予定を更新すると、視聴者は週ビューで直近の予定を、月ビューで全体感を確認できる。Google カレンダー等との連携も拡張可能。",
      designIntent:
        "「次にいつ来れば配信に立ち会えるか」を視聴者に明示する。固定客のリピート動機を作る最重要動線。",
      livePath: "/schedule",
    },
    {
      slug: "chat",
      title: "CHAT",
      summary: "ファン同士の常設チャット",
      description:
        "配信外の時間帯でも、視聴者同士が話せる場所。配信者の発言は色分けで識別され、Discord サーバーともマッピングして両側から見える設計を予定。",
      designIntent:
        "「配信者と視聴者」「視聴者同士」の関係を、配信時間外にも持続させる。ファンコミュニティの厚みを作る装置。",
      livePath: "/chat",
    },
    {
      slug: "member",
      title: "MEMBER (支援)",
      summary: "Stripe 直決済で手数料を最小化した支援動線",
      description:
        "アプリ経由のスーパーチャットだと Apple/Google 30% + YouTube 手数料で実質半分しか配信者に届かない。ファンサイト経由なら決済手数料 3% 程度に抑え、残りを配信者と運営の分配原資にできる。",
      designIntent:
        "「視聴者の応援が届く割合を増やす」が一次目的。料率の透明性を持たせ、初期は収益分配 (固定費 0)、ブレイクイーブン後にプラットフォーム手数料へ移行する想定。",
      livePath: "/",
    },
  ],
};
