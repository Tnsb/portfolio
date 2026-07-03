/** Fixed SVG noise texture; respects .film-grain opacity in CSS. */
export function FilmGrain() {
  return (
    <div className="film-grain" aria-hidden>
      <svg
        className="film-grain__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <filter id="portfolio-grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="4"
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix
            in="n"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.43 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#portfolio-grain)" />
      </svg>
    </div>
  );
}
