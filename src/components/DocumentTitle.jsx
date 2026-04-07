import { useEffect } from "react";

export function DocumentTitle({ title, suffix = "Tina Sibbal" }) {
  useEffect(() => {
    const full = title ? `${title} · ${suffix}` : suffix;
    document.title = full;
  }, [title, suffix]);
  return null;
}
