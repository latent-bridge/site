type Props = {
  videoId: string;
  title?: string;
};

export function ShortsEmbed({ videoId, title }: Props) {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-md" style={{ aspectRatio: "9 / 16" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title ?? "YouTube short"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
