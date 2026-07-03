import { useMemo } from "react";

const CELL = 8;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Snowglobe-style dithered pixel blob: squares densest at the `origin`
 * corner, thinning out with random dropout. Deterministic per seed.
 */
export function PixelCluster({
  cols = 16,
  rows = 9,
  colors = ["#ffc300", "#ffc8e5", "#489c66"],
  seed = 7,
  origin = "bottom-left",
  className,
}) {
  const rects = useMemo(() => {
    const rand = mulberry32(seed);
    const out = [];
    const fromLeft = origin.includes("left");
    const fromBottom = origin.includes("bottom");
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const nx = cols > 1 ? x / (cols - 1) : 0;
        const ny = rows > 1 ? y / (rows - 1) : 0;
        const dx = fromLeft ? nx : 1 - nx;
        const dy = fromBottom ? 1 - ny : ny;
        const d = Math.min(1, Math.hypot(dx, dy) / Math.SQRT2);
        const p = Math.pow(1 - d, 2) * 0.9;
        if (rand() < p) {
          // First color dominates; the rest of the palette shares the remainder
          const pick = rand();
          const color =
            pick < 0.55 || colors.length === 1
              ? colors[0]
              : colors[1 + Math.floor(rand() * (colors.length - 1))];
          // Mix of soft-cornered squares and tiny round dots for a cuter, airier feel
          const dot = rand() < 0.32;
          const size = dot ? CELL / 2 : CELL - 1;
          out.push({
            x: x * CELL + (CELL - size) / 2,
            y: y * CELL + (CELL - size) / 2,
            size,
            rx: dot ? size / 2 : 2,
            color,
          });
        }
      }
    }
    return out;
  }, [cols, rows, colors, seed, origin]);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${cols * CELL} ${rows * CELL}`}
      width={cols * CELL}
      height={rows * CELL}
      aria-hidden
    >
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.size}
          height={r.size}
          rx={r.rx}
          fill={r.color}
        />
      ))}
    </svg>
  );
}
