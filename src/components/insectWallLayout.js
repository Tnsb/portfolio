/** Full-viewport wallpaper: sparse anchors + route jitter (glyphs sit under content via z-index). */

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

/** Four insects, evenly spaced vertically; horizontal placement is fixed in CSS. */
const BASE = [
  { key: "ladybug", t: 16 },
  { key: "dragonfly", t: 36 },
  { key: "firefly", t: 58 },
  { key: "butterfly", t: 78 },
];

const MIN_VERTICAL_GAP = 16;

/**
 * CSS variables on `.insect-decor`: `--wall-{key}-top` (percent strings).
 * Horizontal position uses per-insect gutter fractions in CSS.
 */
export function insectWallVars(pathname) {
  const seed = hashPath(pathname);
  const rand = mulberry32(seed);
  const out = {};
  const placed = [];

  for (let i = 0; i < BASE.length; i++) {
    const jy = (rand() - 0.5) * 8;
    let t = clamp(BASE[i].t + jy, 12, 86);

    for (const prev of placed) {
      if (Math.abs(t - prev) < MIN_VERTICAL_GAP) {
        t = prev + MIN_VERTICAL_GAP;
      }
    }
    t = clamp(t, 12, 86);
    placed.push(t);

    const key = BASE[i].key;
    out[`--wall-${key}-top`] = `${Math.round(t * 10) / 10}%`;
  }

  return out;
}
