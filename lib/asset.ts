/**
 * Prepend the build-time basePath to a public asset path.
 *
 * Static export builds inline NEXT_PUBLIC_BASE_PATH (set in next.config.ts)
 * so this works in both server components and client components.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
