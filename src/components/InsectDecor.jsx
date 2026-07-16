import { useEffect, useMemo, useRef } from "react";
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

const BUGS = [
  { key: "ladybug", className: "insect-decor__svg--ladybug", Glyph: LadybugGlyph, baseRot: 0 },
  { key: "dragonfly", className: "insect-decor__svg--dragonfly", Glyph: DragonflyGlyph, baseRot: 0 },
  { key: "butterfly", className: "insect-decor__svg--butterfly", Glyph: ButterflyGlyph, baseRot: -16 },
  { key: "firefly", className: "insect-decor__svg--firefly", Glyph: FireflyGlyph, baseRot: -8 },
];

const FLEE_RADIUS = 100;
const FLEE_FORCE = 1.6;
const SPRING = 0.07;
const DAMPING = 0.78;
const MAX_OFFSET = 28;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Interactive wallpaper bugs: they skitter away from your cursor,
 * and a click "catches" them — they pop and respawn jittered.
 */
export function InsectDecor() {
  const { pathname } = useLocation();
  const route = insectRouteClass(pathname);
  const wallStyle = useMemo(() => insectWallVars(pathname), [pathname]);
  const rootRef = useRef(null);
  const bugRefs = useRef({});
  const stateRef = useRef(
    Object.fromEntries(
      BUGS.map((b) => [
        b.key,
        { x: 0, y: 0, vx: 0, vy: 0, rot: 0, scale: 1, caughtUntil: 0 },
      ]),
    ),
  );
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const bugs = stateRef.current;
    const homes = {};
    let raf = 0;

    const measureHomes = () => {
      for (const meta of BUGS) {
        const el = bugRefs.current[meta.key];
        const s = bugs[meta.key];
        if (!el || !s) continue;
        // Temporarily zero offset to read resting spot
        const prevX = el.style.getPropertyValue("--bug-x");
        const prevY = el.style.getPropertyValue("--bug-y");
        el.style.setProperty("--bug-x", "0px");
        el.style.setProperty("--bug-y", "0px");
        const rect = el.getBoundingClientRect();
        homes[meta.key] = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        if (prevX) el.style.setProperty("--bug-x", prevX);
        if (prevY) el.style.setProperty("--bug-y", prevY);
      }
    };

    const onMove = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      pointerRef.current.active = false;
    };

    const tick = () => {
      const ptr = pointerRef.current;
      const now = performance.now();

      for (const meta of BUGS) {
        const el = bugRefs.current[meta.key];
        const s = bugs[meta.key];
        const home = homes[meta.key];
        if (!el || !s || !home) continue;

        if (s.caughtUntil && now < s.caughtUntil) {
          el.style.setProperty("--bug-x", `${s.x}px`);
          el.style.setProperty("--bug-y", `${s.y}px`);
          el.style.setProperty("--bug-rot", `${s.rot}deg`);
          el.style.setProperty("--bug-scale", String(s.scale));
          continue;
        }

        if (s.caughtUntil && now >= s.caughtUntil) {
          s.caughtUntil = 0;
          s.x = (Math.random() - 0.5) * 36;
          s.y = (Math.random() - 0.5) * 36;
          s.vx = 0;
          s.vy = 0;
          s.scale = 1;
          el.classList.remove("is-caught");
          measureHomes();
        }

        const cx = home.x + s.x;
        const cy = home.y + s.y;

        if (ptr.active) {
          const dx = cx - ptr.x;
          const dy = cy - ptr.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < FLEE_RADIUS) {
            const strength = ((FLEE_RADIUS - dist) / FLEE_RADIUS) * FLEE_FORCE;
            s.vx += (dx / dist) * strength;
            s.vy += (dy / dist) * strength;
          }
        }

        s.vx += -s.x * SPRING;
        s.vy += -s.y * SPRING;
        s.vx *= DAMPING;
        s.vy *= DAMPING;
        s.x += s.vx;
        s.y += s.vy;

        const mag = Math.hypot(s.x, s.y);
        if (mag > MAX_OFFSET) {
          s.x = (s.x / mag) * MAX_OFFSET;
          s.y = (s.y / mag) * MAX_OFFSET;
        }

        s.rot = s.vx * 4 + s.vy * 2;
        el.style.setProperty("--bug-x", `${s.x.toFixed(2)}px`);
        el.style.setProperty("--bug-y", `${s.y.toFixed(2)}px`);
        el.style.setProperty("--bug-rot", `${s.rot.toFixed(2)}deg`);
        el.style.setProperty("--bug-scale", "1");
      }

      raf = requestAnimationFrame(tick);
    };

    measureHomes();
    // Homes settle after first paint / land animation
    const settle = window.setTimeout(measureHomes, 80);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measureHomes);
    raf = requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(settle);
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measureHomes);
    };
  }, [pathname]);

  const catchBug = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (prefersReducedMotion()) return;

    const s = stateRef.current[key];
    const el = bugRefs.current[key];
    if (!s || !el || s.caughtUntil) return;

    s.caughtUntil = performance.now() + 700;
    s.scale = 0;
    s.vx = (Math.random() - 0.5) * 18;
    s.vy = -8 - Math.random() * 10;
    s.x += s.vx;
    s.y += s.vy;
    s.rot = (Math.random() - 0.5) * 80;
    el.classList.add("is-caught");
    el.style.setProperty("--bug-scale", "0");
  };

  return (
    <div
      ref={rootRef}
      className={`insect-decor insect-decor--route-${route} insect-decor--bug-mode`}
      style={wallStyle}
      aria-hidden
    >
      {BUGS.map(({ key, className, Glyph, baseRot }) => (
        <button
          key={key}
          type="button"
          className={`insect-decor__hit ${className}`}
          style={{ "--bug-base-rot": `${baseRot}deg` }}
          tabIndex={-1}
          onClick={catchBug(key)}
          ref={(node) => {
            bugRefs.current[key] = node;
          }}
        >
          <Glyph className="insect-decor__svg" />
        </button>
      ))}
    </div>
  );
}
