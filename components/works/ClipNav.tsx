import Link from "next/link";
import type { Clip } from "../../data/works/types";

type Props = {
  prev?: Clip;
  next?: Clip;
  caseSlug: string;
};

export function ClipNav({ prev, next, caseSlug }: Props) {
  return (
    <nav className="grid grid-cols-2 gap-3 text-sm">
      {prev ? (
        <Link
          href={`/works/${caseSlug}/clips/${prev.slug}`}
          className="rounded-2xl border border-border bg-surface p-4 hover:border-accent hover:bg-accent-bg/30 transition-colors"
        >
          <p className="text-[11px] text-muted">前のクリップ ({prev.sequenceNo}本目)</p>
          <p className="mt-1 font-bold leading-tight">{prev.title}</p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/works/${caseSlug}/clips/${next.slug}`}
          className="rounded-2xl border border-border bg-surface p-4 text-right hover:border-accent hover:bg-accent-bg/30 transition-colors"
        >
          <p className="text-[11px] text-muted">次のクリップ ({next.sequenceNo}本目)</p>
          <p className="mt-1 font-bold leading-tight">{next.title}</p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
