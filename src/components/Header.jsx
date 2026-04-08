import { useEffect, useState } from "react";
import { LadybugGlyph } from "./InsectDecor.jsx";
import { TransitionNavLink } from "./TransitionNavLink.jsx";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/blogs", label: "Blogs" },
];

function navClass({ isActive }) {
  return isActive ? "site-nav__link is-active" : "site-nav__link";
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-nav-shell">
          <span className="site-nav-shell__mark site-nav-shell__mark--ladybug" aria-hidden>
            <LadybugGlyph className="site-nav-shell__mark-svg site-nav-shell__mark-svg--ladybug" />
          </span>

          <nav className="site-nav site-nav--desktop" aria-label="Primary">
            {nav.map(({ to, label, end }) => (
              <TransitionNavLink key={to} to={to} end={end} className={navClass}>
                {label}
              </TransitionNavLink>
            ))}
          </nav>

          <span className="site-nav-shell__mark site-nav-shell__mark--butterfly" aria-hidden>
            <svg className="site-nav-shell__mark-svg" viewBox="0 0 52 36" width="20" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.05"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M26 4v28M26 6C17 2 6 5 4.5 15.5c-.8 5.5 6.2 9.5 12.5 8C23.5 22 25 16 25.5 11M26 6c9-4 20-1 21.5 9.5c.8 5.5-6.2 9.5-12.5 8C28.5 22 27 16 26.5 11"
              />
            </svg>
          </span>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg
                className="nav-toggle__svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="nav-toggle__svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M5 8h14M5 12h14M5 16h14"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile primary">
          {nav.map(({ to, label, end }) => (
            <TransitionNavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "mobile-nav__link is-active" : "mobile-nav__link"
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </TransitionNavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
