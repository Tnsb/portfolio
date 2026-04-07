import { useEffect, useState } from "react";
import { TransitionLink } from "./TransitionLink.jsx";
import { TransitionNavLink } from "./TransitionNavLink.jsx";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
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
        <TransitionLink to="/" className="site-logo">
          Tina Sibbal
        </TransitionLink>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {nav.map(({ to, label, end }) => (
            <TransitionNavLink key={to} to={to} end={end} className={navClass}>
              {label}
            </TransitionNavLink>
          ))}
        </nav>

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
