import Link from "next/link";

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-full">
      <header className="border-b border-border bg-surface/60 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xs tracking-wide text-accent">
            Latent Bridge
          </Link>
          <Link href="/works" className="text-xs font-bold">
            実績
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="py-6 px-6 border-t border-border">
        <p className="text-center text-xs text-muted/50">Latent Bridge</p>
      </footer>
    </div>
  );
}
