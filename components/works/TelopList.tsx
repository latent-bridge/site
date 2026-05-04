import type { ClipTelop } from "../../data/works/types";

type Props = {
  telops: ClipTelop[];
};

export function TelopList({ telops }: Props) {
  return (
    <ol className="space-y-4">
      {telops.map((t, i) => (
        <li
          key={i}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-accent-bg text-accent text-xs font-bold">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-sm font-bold leading-relaxed">
                {t.caption}
              </p>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {t.intent}
              </p>
              {t.imagePath && (
                <div className="mt-3 overflow-hidden rounded-xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.imagePath}
                    alt={t.caption}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
