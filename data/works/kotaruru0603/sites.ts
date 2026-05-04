import type { SiteGroup } from "../types";

export const siteGroups: SiteGroup[] = [
  {
    slug: "fan-site",
    title: "ファンサイト",
    description: "視聴者向けの常設サイト",
    links: [
      {
        slug: "fan-site",
        title: "ruruのポンコツ部屋",
        description:
          "HOME / STREAM / ARCHIVE / SCHEDULE / CHAT / STAMP CARD を備えた視聴者向けファンサイト本体。",
        url: "https://kotaruru0603.latent-bridge.com/",
        detailPath: "/works/kotaruru0603/fan-site/features",
        screenshotPath: "/works/kotaruru0603/sites/fan-site.png",
      },
    ],
  },
  {
    slug: "admin",
    title: "管理画面",
    description: "配信者専用の運営ダッシュボード",
    links: [
      {
        slug: "admin",
        title: "kotaruru0603 admin",
        description:
          "配信者本人がスケジュール・アーカイブメタデータ・チャット運営などを編集する管理画面。視聴者からは見えないクローズドな URL に分離。",
        url: "https://admin.kotaruru0603.latent-bridge.com/",
        detailPath: "/works/kotaruru0603/fan-site/admin",
        screenshotPath: "/works/kotaruru0603/sites/admin.png",
        authNote: "認証必須 (配信者本人のみ)",
      },
    ],
  },
  {
    slug: "assets",
    title: "素材",
    description: "ファンサイト全体で使い回す世界観のパーツ",
    links: [
      {
        slug: "icons",
        title: "アイコン集",
        description:
          "「はいしん・げーむ・おしゃべり・たべもの・てんき・きもち・ぜんぶ」など、もちもち世界観に合わせて手作りした 72 アイコン。サイト各所のラベル・カードで使用。",
        url: "https://kotaruru0603.latent-bridge.com/icons/",
        detailPath: "/works/kotaruru0603/fan-site/icons",
        screenshotPath: "/works/kotaruru0603/sites/icons.png",
      },
      {
        slug: "mascots",
        title: "動物部屋",
        description:
          "うさぎ・ねこ・くま・ぱんだ・きつね・はむ・ぺんぎんの 7 体のマスコット。チャット参加者・支援tier・通知などに割り当てて使う、世界観の中核キャラクター集。",
        url: "https://kotaruru0603.latent-bridge.com/mascots/",
        detailPath: "/works/kotaruru0603/fan-site/mascots",
        screenshotPath: "/works/kotaruru0603/sites/mascots.png",
      },
    ],
  },
];
