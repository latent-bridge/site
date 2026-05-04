export type ClipMetrics = {
  views?: number;
  likes?: number;
  asOf?: string;
};

export type ClipSource = {
  videoId: string;
  title: string;
  totalDurationSec?: number;
  range?: { start: string; end: string };
  cutDurationSec?: number;
};

export type ClipSelectionWho = "ruru" | "us" | "collab";

export type ClipTelop = {
  caption: string;
  intent: string;
  imagePath?: string;
};

export type ClipResponses = {
  ruru?: string;
  viewer?: string;
};

export type Clip = {
  slug: string;
  sequenceNo: number;
  title: string;
  fullTitle: string;
  postedAt: string;
  shortVideoId: string;
  source: ClipSource;
  metrics: ClipMetrics;
  selection: {
    who: ClipSelectionWho;
    reasoning: string;
  };
  telops: ClipTelop[];
  productionNotes: string[];
  responses: ClipResponses;
  learnings: string[];
};

export type CaseSummary = {
  slug: string;
  streamerName: string;
  streamerHandle: string;
  domain: string;
  startedAt: string;
  status: string;
  description: string;
  clips: Clip[];
};
