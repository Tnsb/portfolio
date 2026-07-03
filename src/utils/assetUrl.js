/** Prefix public asset paths with Vite base (required for GitHub Pages project sites). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
