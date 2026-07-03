import { useId, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { insectWallVars } from "./insectWallLayout.js";

function insectRouteClass(pathname) {
  if (!pathname || pathname === "/") return "home";
  const seg = pathname.replace(/^\//, "").split("/")[0];
  if (seg === "experience" || seg === "education" || seg === "projects" || seg === "blogs") return seg;
  return "home";
}

/** Minimal firefly: glow + arcs in magenta ink (gradient id unique per instance). */
function FireflyGlyph({ className }) {
  const gradId = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 40 40" width="40" height="40" aria-hidden>
      <circle cx="14" cy="22" r="3.4" fill={`url(#${gradId})`} opacity="0.92" />
      <circle cx="12.8" cy="21" r="1.15" fill="#f6cbe0" opacity="0.85" />
      <path
        d="M17 22c6-1 12 0 18 4"
        fill="none"
        stroke="#cc1757"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M22 12c2 3 1 7-2 9"
        fill="none"
        stroke="#cc1757"
        strokeWidth="0.82"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <radialGradient id={gradId} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f6cbe0" stopOpacity="0.96" />
          <stop offset="50%" stopColor="#e0357a" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#cc1757" stopOpacity="0.85" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LadybugGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" width="48" height="48">
      <ellipse cx="24" cy="30" rx="14" ry="16" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path d="M24 17v26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="24" cy="13" rx="8" ry="6.5" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path d="M18 9.5L15.5 5M30 9.5L32.5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="14" cy="4" r="1.5" fill="currentColor" />
      <circle cx="34" cy="4" r="1.5" fill="currentColor" />
      <circle cx="17" cy="26" r="2.2" fill="currentColor" opacity="0.4" />
      <circle cx="31" cy="26" r="2.2" fill="currentColor" opacity="0.4" />
      <circle cx="18.5" cy="34" r="1.7" fill="currentColor" opacity="0.4" />
      <circle cx="29.5" cy="34" r="1.7" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function ButterflyGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 52 44" width="52" height="44">
      <path
        d="M26 6v32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M26 8C18 4 8 6 6 16c-1 6 6 10 12 9 6-1 8-7 8-13M26 8c8-4 18-2 20 8 1 6-6 10-12 9-6-1-8-7-8-13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinejoin="round"
      />
      <path
        d="M26 22c-7 2-12 7-11 14 1 5 6 6 11 2M26 22c7 2 12 7 11 14-1 5-6 6-11 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinejoin="round"
        opacity="0.92"
      />
      <circle cx="26" cy="5" r="1.25" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function DragonflyGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 40" width="64" height="40">
      <path
        d="M32 8c-8 4-14 12-14 20 M32 8c8 4 14 12 14 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="20" rx="3" ry="14" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 6v-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="32" cy="2.5" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/**
 * Wallpaper: one each — ladybug, dragonfly, butterfly, firefly —
 * plus a single ember spark. Kept sparse so the paper stays calm.
 * Skipped entirely on the home page so the hero stays clean.
 */
export function InsectDecor() {
  const { pathname } = useLocation();
  const route = insectRouteClass(pathname);
  const wallStyle = useMemo(() => insectWallVars(pathname), [pathname]);

  if (route === "home") return null;

  return (
    <div className={`insect-decor insect-decor--route-${route}`} style={wallStyle} aria-hidden>
      <span className="insect-decor__ember insect-decor__ember--a" />
      <LadybugGlyph className="insect-decor__svg insect-decor__svg--ladybug" />
      <DragonflyGlyph className="insect-decor__svg insect-decor__svg--dragonfly" />
      <ButterflyGlyph className="insect-decor__svg insect-decor__svg--butterfly" />
      <FireflyGlyph className="insect-decor__svg insect-decor__svg--firefly" />
    </div>
  );
}
