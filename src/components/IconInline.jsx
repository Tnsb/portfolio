import { assetUrl } from "../utils/assetUrl.js";

const IDS = {
  github: "github-icon",
  medium: "medium-icon",
  linkedin: "linkedin-icon",
  email: "mail-icon",
};

/**
 * Sprite from `/icons.svg`. Symbols use fill `currentColor`.
 */
export function IconInline({ name, className = "", size = 16 }) {
  const id = IDS[name];
  if (!id) return null;
  return (
    <svg
      className={`icon-inline ${className}`.trim()}
      width={size}
      height={size}
      aria-hidden
      focusable="false"
    >
      <use href={`${assetUrl("/icons.svg")}#${id}`} />
    </svg>
  );
}
