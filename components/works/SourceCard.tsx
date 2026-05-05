"use client";

import { useState } from "react";
import type { ClipSource, SourceRange } from "../../data/works/types";

type Props = {
  source: ClipSource;
};

function parseTimeString(s: string): number {
  const parts = s.split(":").map((p) => parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] ?? 0;
}

function formatDuration(totalSec?: number) {
  if (!totalSec) return "—";
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  return h > 0 ? `${h}時間${m}分` : `${m}分`;
}

function rangeDurationLabel(r: SourceRange): string {
  const d = parseTimeString(r.end) - parseTimeString(r.start);
  if (d <= 0) return "—";
  const m = Math.floor(d / 60);
  const s = d % 60;
  return m > 0 ? `${m}分${s.toString().padStart(2, "0")}秒` : `${s}秒`;
}

function youtubeUrlAt(videoId: string, r: SourceRange): string {
  const start = Math.floor(parseTimeString(r.start));
  return `https://www.youtube.com/watch?v=${videoId}&t=${start}s`;
}

function embedSrc(videoId: string, r?: SourceRange): string {
  const base = `https://www.youtube.com/embed/${videoId}?rel=0`;
  if (!r) return base;
  const start = Math.floor(parseTimeString(r.start));
  const end = Math.ceil(parseTimeString(r.end));
  const params: string[] = [];
  if (start > 0) params.push(`start=${start}`);
  if (end > 0 && end > start) params.push(`end=${end}`);
  return params.length > 0 ? `${base}&${params.join("&")}` : base;
}

export function SourceCard({ source }: Props) {
  const ranges = source.ranges ?? [];
  const [activeIdx, setActiveIdx] = useState(0);
  const active = ranges[activeIdx];

  const watchUrl = `https://www.youtube.com/watch?v=${source.videoId}`;
  const totalRangeSec = ranges.reduce((acc, r) => {
    const d = parseTimeString(r.end) - parseTimeString(r.start);
    return acc + (d > 0 ? d : 0);
  }, 0);
  const totalSegments = ranges.reduce(
    (acc, r) => acc + (r.segmentCount ?? 1),
    0,
  );

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted">元配信</p>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm font-bold leading-relaxed hover:text-accent"
          >
            {source.title}
          </a>
        </div>
        <span className="rounded-full bg-accent-bg px-3 py-1 text-[11px] text-accent flex-shrink-0">
          {ranges.length} 範囲 / {totalSegments} カット
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <div>
          <dt className="text-muted">配信全体</dt>
          <dd className="mt-1 font-bold">
            {formatDuration(source.totalDurationSec)}
          </dd>
        </div>
        <div>
          <dt className="text-muted">抽出範囲計</dt>
          <dd className="mt-1 font-bold">
            {totalRangeSec > 0
              ? `${Math.floor(totalRangeSec / 60)}分${(totalRangeSec % 60)
                  .toString()
                  .padStart(2, "0")}秒`
              : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted">完成版尺</dt>
          <dd className="mt-1 font-bold">
            {source.cutDurationSec ? `${source.cutDurationSec}秒` : "—"}
          </dd>
        </div>
      </dl>

      {ranges.length > 0 && (
        <>
          <div
            className="mt-5 relative w-full overflow-hidden rounded-xl bg-black"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              key={activeIdx}
              src={embedSrc(source.videoId, active)}
              title={`${source.title} - range ${activeIdx + 1}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <ol className="mt-4 space-y-2">
            {ranges.map((r, i) => {
              const isActive = i === activeIdx;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`w-full text-left rounded-xl border p-4 transition-colors ${
                      isActive
                        ? "border-accent bg-accent-bg/40"
                        : "border-border bg-background hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-[11px] text-muted font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold tabular-nums">
                          {r.start} → {r.end}
                        </span>
                        <span className="text-[11px] text-muted">
                          ({rangeDurationLabel(r)}
                          {r.segmentCount && r.segmentCount > 1
                            ? ` / ${r.segmentCount} カット`
                            : ""}
                          )
                        </span>
                      </div>
                      <a
                        href={youtubeUrlAt(source.videoId, r)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-accent flex-shrink-0"
                      >
                        YouTube ↗
                      </a>
                    </div>
                    <p className="mt-1.5 text-sm font-bold leading-snug">
                      {r.label}
                    </p>
                    {r.description && (
                      <p className="mt-1.5 text-xs text-muted leading-relaxed">
                        {r.description}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </div>
  );
}
