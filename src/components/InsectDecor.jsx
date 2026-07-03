import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { insectWallVars } from "./insectWallLayout.js";

function insectRouteClass(pathname) {
  if (!pathname || pathname === "/") return "home";
  const seg = pathname.replace(/^\//, "").split("/")[0];
  if (
    seg === "experience" ||
    seg === "education" ||
    seg === "projects" ||
    seg === "blogs" ||
    seg === "case-studies"
  )
    return seg;
  return "home";
}

/* Pixel-art insects drawn from the same blocks/palette as the PixelCluster decor.
   Map legend: K ink · M magenta · Y yellow · P pink · "." empty */
const PX = 4;

const PIXEL_COLORS = {
  K: "#131210",
  M: "#cc1757",
  Y: "#ffc300",
  P: "#ffc8e5",
};

function PixelGlyph({ map, className }) {
  const w = map[0].length * PX;
  const h = map.length * PX;
  return (
    <svg className={className} viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden>
      {map.flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x * PX}
              y={y * PX}
              width={PX}
              height={PX}
              fill={PIXEL_COLORS[ch]}
            />
          ),
        ),
      )}
    </svg>
  );
}

const LADYBUG_MAP = [
  ".K.....K.",
  "..K...K..",
  "...KKK...",
  "..KKKKK..",
  ".MMMKMMM.",
  "MMKMKMKMM",
  "MMMMKMMMM",
  "MKMMKMMKM",
  ".MMMKMMM.",
  "..MM.MM..",
];

/* Dragonfly modeled on the Vantage logomark: two round eyes, a wide
   double wing pair, and a long straight tail. */
const DRAGONFLY_MAP = [
  "...KK...KK...",
  "...KK...KK...",
  "......K......",
  "PPPPPPKPPPPPP",
  "PPPPPPKPPPPPP",
  ".YYYYYKYYYYY.",
  "..YYY.K.YYY..",
  "......K......",
  "......K......",
  "......K......",
  "......K......",
  "......K......",
];

const BUTTERFLY_MAP = [
  ".K.......K.",
  "..K.....K..",
  ".MMM.K.MMM.",
  "MMYMMKMMYMM",
  "MMMMMKMMMMM",
  ".PPPPKPPPP.",
  ".PPPPKPPPP.",
  "..PPPKPPP..",
  "....PKP....",
];

/* Firefly: the compact winged bug (small wings, bright tail-end glow). */
const FIREFLY_MAP = [
  "...K...K...",
  "....K.K....",
  ".....K.....",
  "PPPPPKPPPPP",
  "YPPPPKPPPPY",
  ".YYYYKYYYY.",
  ".....K.....",
  ".....K.....",
  ".....Y.....",
  ".....Y.....",
];

export function LadybugGlyph({ className }) {
  return <PixelGlyph map={LADYBUG_MAP} className={className} />;
}

export function DragonflyGlyph({ className }) {
  return <PixelGlyph map={DRAGONFLY_MAP} className={className} />;
}

export function ButterflyGlyph({ className }) {
  return <PixelGlyph map={BUTTERFLY_MAP} className={className} />;
}

function FireflyGlyph({ className }) {
  return <PixelGlyph map={FIREFLY_MAP} className={className} />;
}

/**
 * Wallpaper: one each — ladybug, dragonfly, butterfly, firefly —
 * hugging the viewport edges. Kept sparse so the paper stays calm.
 * Home gets just a couple so the hero stays clean.
 */
export function InsectDecor() {
  const { pathname } = useLocation();
  const route = insectRouteClass(pathname);
  const wallStyle = useMemo(() => insectWallVars(pathname), [pathname]);
  const isHome = route === "home";

  return (
    <div className={`insect-decor insect-decor--route-${route}`} style={wallStyle} aria-hidden>
      <LadybugGlyph className="insect-decor__svg insect-decor__svg--ladybug" />
      {!isHome && <DragonflyGlyph className="insect-decor__svg insect-decor__svg--dragonfly" />}
      {!isHome && <ButterflyGlyph className="insect-decor__svg insect-decor__svg--butterfly" />}
      <FireflyGlyph className="insect-decor__svg insect-decor__svg--firefly" />
    </div>
  );
}
