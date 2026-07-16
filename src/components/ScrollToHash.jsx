import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return undefined;

    const id = hash.replace(/^#/, "");
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = window.scrollY + el.getBoundingClientRect().top - headerOffsetPx();
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    const timer = window.setTimeout(scrollToTarget, 40);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
