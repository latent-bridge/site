export type ClipMetrics = {
  views?: number;
  likes?: number;
  asOf?: string;
};

export type SourceSegment = {
  start: string;
  end: string;
  label?: string;
};

export type ClipSource = {
  videoId: string;
  title: string;
  totalDurationSec?: number;
  segments?: SourceSegment[];
  cutDurationSec?: number;
};

export type ClipSelectionWho = "ruru" | "us" | "collab";

export type ClipTelop = {
  caption: string;
  intent: string;
  imagePath?: string;
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
  outcome: string;
  learnings: string[];
};

export type FanSiteFeature = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  designIntent?: string;
  livePath?: string;
  screenshotPath?: string;
  requestedBy?: string;
};

export type FanSiteInfo = {
  liveUrl: string;
  designName: string;
  designStory?: string;
  features: FanSiteFeature[];
};

export type SiteLink = {
  slug: string;
  title: string;
  description: string;
  url: string;
  screenshotPath?: string;
  authNote?: string;
};

export type SiteGroup = {
  slug: string;
  title: string;
  description?: string;
  detailPath: string;
  links: SiteLink[];
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
  fanSite: FanSiteInfo;
  siteGroups: SiteGroup[];
};
