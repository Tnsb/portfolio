/** Full-viewport wallpaper: even ~3×3 grid + route jitter (center column included; glyphs sit under content via z-index). */

function hashPath(pathname) {
  let h = 2166136261;
  const s = pathname || "/";
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}

/** Nine anchor points: corners, edges, and center — spread across the whole viewport. */
const BASE = [
  { l: 11, t: 13 },
  { l: 50, t: 11 },
  { l: 88, t: 14 },
  { l: 12, t: 48 },
  { l: 50, t: 52 },
  { l: 87, t: 46 },
  { l: 13, t: 82 },
  { l: 51, t: 78 },
  { l: 86, t: 84 },
];

const KEYS = [
  "ember-a",
  "ember-b",
  "ladybug",
  "ladybug-b",
  "dragonfly",
  "dragonfly-sm",
  "butterfly",
  "butterfly-b",
  "firefly",
];

/**
 * CSS variables on `.insect-decor`: `--wall-{key}-left`, `--wall-{key}-top` (percent strings).
 */
export function insectWallVars(pathname) {
  const seed = hashPath(pathname);
  const rand = mulberry32(seed);
  const out = {};

  for (let i = 0; i < 9; i++) {
    const jx = (rand() - 0.5) * 10;
    const jy = (rand() - 0.5) * 12;
    const l = clamp(BASE[i].l + jx, 4, 96);
    const t = clamp(BASE[i].t + jy, 8, 92);
    const key = KEYS[i];
    out[`--wall-${key}-left`] = `${Math.round(l * 10) / 10}%`;
    out[`--wall-${key}-top`] = `${Math.round(t * 10) / 10}%`;
  }

  return out;
}
