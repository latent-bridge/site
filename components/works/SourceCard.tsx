import type { ClipSource } from "../../data/works/types";

type Props = {
  source: ClipSource;
};

function formatDuration(totalSec?: number) {
  if (!totalSec) return "—";
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  return h > 0 ? `${h}時間${m}分` : `${m}分`;
}

export function SourceCard({ source }: Props) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${source.videoId}`;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-xs text-muted">元配信</p>
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-sm font-bold leading-relaxed hover:text-accent"
      >
        {source.title}
      </a>

      <dl className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <div>
          <dt className="text-muted">配信全体</dt>
          <dd className="mt-1 font-bold">{formatDuration(source.totalDurationSec)}</dd>
        </div>
        <div>
          <dt className="text-muted">切り取り範囲</dt>
          <dd className="mt-1 font-bold">
            {source.range ? `${source.range.start} → ${source.range.end}` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-muted">完成版尺</dt>
          <dd className="mt-1 font-bold">
            {source.cutDurationSec ? `${source.cutDurationSec}秒` : "—"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
