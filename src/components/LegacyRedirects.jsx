import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const legacySectionPaths = {
  experience: "experience",
  education: "education",
  projects: "projects",
  blogs: "blogs",
  about: "blogs",
};

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

function scrollToHash(id) {
  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - headerOffsetPx();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  }, 60);
}

export function LegacySectionRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const segment = pathname.split("/").filter(Boolean).pop() ?? "";
  const hash = legacySectionPaths[segment];

  useEffect(() => {
    navigate("/", { replace: true });
    if (hash) scrollToHash(hash);
  }, [hash, navigate, pathname]);

  return null;
}

export function LegacyHashRedirect({ hash }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
    if (hash) scrollToHash(hash);
  }, [hash, navigate]);

  return null;
}
