/**
 * Capture screenshots of the live kotaruru0603 fan-site features
 * to use on /works/kotaruru0603/fan-site.
 *
 * Output: public/works/kotaruru0603/fan-site/{slug}.png
 *
 * Run with: npx tsx scripts/capture-fan-site.ts
 */

import { chromium, type Page } from "playwright";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const BASE = "https://kotaruru0603.latent-bridge.com";

type Target = {
  slug: string;
  livePath: string;
  waitMs?: number;
  scrollSelector?: string;
};

const TARGETS: Target[] = [
  { slug: "home", livePath: "/" },
  { slug: "stream", livePath: "/stream" },
  { slug: "archive", livePath: "/archive" },
  { slug: "schedule", livePath: "/schedule" },
  { slug: "chat", livePath: "/chat" },
  // STAMP CARD は HOME 内のセクション。該当要素までスクロールして撮る
  { slug: "stamp-card", livePath: "/", scrollSelector: "[data-section='stamp-card'], h2:has-text('すたんぷかーど'), h2:has-text('STAMP CARD'), section:has(h2:text-matches('スタンプ|STAMP|すたんぷ', 'i'))" },
];

async function captureOne(page: Page, t: Target, outDir: string) {
  const url = `${BASE}${t.livePath}`;
  console.log(`→ ${t.slug}: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
  await page.waitForTimeout(t.waitMs ?? 2500);

  if (t.scrollSelector) {
    const target = page.locator(t.scrollSelector).first();
    await target.waitFor({ state: "attached", timeout: 5_000 }).catch(() => {});
    if ((await target.count()) > 0) {
      const box = await target.boundingBox();
      if (box) {
        // scroll element into the upper third of the viewport
        await page.evaluate((y) => window.scrollTo({ top: y }), box.y - 100);
        await page.waitForTimeout(700);
      } else {
        await target.scrollIntoViewIfNeeded();
      }
    } else {
      console.log(`  selector miss for ${t.slug}, capturing top of page`);
    }
  }

  const out = path.join(outDir, `${t.slug}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(`  saved ${out}`);
}

async function main() {
  const outDir = path.resolve("public/works/kotaruru0603/fan-site");
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });

  for (const t of TARGETS) {
    const page = await ctx.newPage();
    try {
      await captureOne(page, t, outDir);
    } finally {
      await page.close();
    }
  }

  await ctx.close();
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
