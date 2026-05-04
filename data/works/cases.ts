import type { CaseSummary } from "./types";
import { kotaruru0603Case } from "./kotaruru0603";

export const cases: CaseSummary[] = [kotaruru0603Case];

export const caseBySlug = (slug: string): CaseSummary | undefined =>
  cases.find((c) => c.slug === slug);
