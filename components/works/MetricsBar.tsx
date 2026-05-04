import type { ClipMetrics } from "../../data/works/types";

type Props = {
  metrics: ClipMetrics;
  postedAt: string;
};

function formatNumber(n?: number) {
  if (n === undefined) return "—";
  return n.toLocaleString("ja-JP");
}

export function MetricsBar({ metrics, postedAt }: Props) {
  return (
    <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface p-5 text-center">
      <div>
        <dt className="text-xs text-muted">投稿日</dt>
        <dd className="mt-1 text-sm font-bold">{postedAt}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">再生数</dt>
        <dd className="mt-1 text-sm font-bold">{formatNumber(metrics.views)}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">高評価</dt>
        <dd className="mt-1 text-sm font-bold">{formatNumber(metrics.likes)}</dd>
      </div>
      {metrics.asOf && (
        <p className="col-span-3 text-[10px] text-muted/70">
          ※ {metrics.asOf} 時点
        </p>
      )}
    </dl>
  );
}
