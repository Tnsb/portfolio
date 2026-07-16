import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSectionSpy } from "../hooks/useSectionSpy.js";

const nav = [
  { id: "top", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "blogs", label: "Blogs" },
];

function headerOffsetPx() {
  const header = document.querySelector(".site-header");
  if (header) {
    return Math.ceil(header.getBoundingClientRect().height);
  }
  const fallback = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
  );
  return Number.isFinite(fallback) && fallback > 10 ? fallback : 86;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - headerOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";
  const sectionIds = useMemo(() => nav.map(({ id }) => id), []);
  const spyId = useSectionSpy(sectionIds, onHome);
  const activeId = onHome
    ? spyId
    : pathname.startsWith("/case-studies")
      ? "case-studies"
      : "";

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

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setOpen(false);

    if (!onHome) {
      navigate(id === "top" ? "/" : `/#${id}`);
      return;
    }

    scrollToSection(id);
    history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-nav-shell">
          <nav className="site-nav site-nav--desktop" aria-label="Primary">
            {nav.map(({ id, label }) => (
              <a
                key={id}
                href={id === "top" ? "#top" : `#${id}`}
                className={activeId === id ? "site-nav__link is-active" : "site-nav__link"}
                onClick={handleNavClick(id)}
              >
                {label}
              </a>
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
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile primary">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={id === "top" ? "#top" : `#${id}`}
              className={activeId === id ? "mobile-nav__link is-active" : "mobile-nav__link"}
              onClick={handleNavClick(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
