import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Latent Bridge — 配信の届け方をサポート",
  description:
    "配信に集中してもらうために、届け方の部分を引き受けます。切り抜き制作、SNS運用、チャンネル最適化。完全成果報酬。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-zen">{children}</body>
    </html>
  );
}
