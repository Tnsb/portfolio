import { useEffect, useState } from "react";

/**
 * Pick the nav section whose top is nearest just under the sticky header.
 * Near the top of the page, prefer the first id ("top"/Home).
 */
export function useSectionSpy(sectionIds, enabled = true) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!enabled || !sectionIds.length) return undefined;

    const read = () => {
      const header = document.querySelector(".site-header");
      const offsetPx = header
        ? Math.ceil(header.getBoundingClientRect().height) + 8
        : 94;

      if (window.scrollY < 80) {
        setActiveId(sectionIds[0]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offsetPx <= 1) {
          current = id;
        }
      }
      setActiveId(current);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [sectionIds, enabled]);

  return enabled ? activeId : "";
}
