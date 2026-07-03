import { PixelCluster } from "./PixelCluster.jsx";

/**
 * Edge-pixel decor for inner pages: one cluster at the top-left and one at
 * the bottom-right, confined to the gutters beside the content column.
 * Pass a distinct `seed` per page so each page gets its own pattern.
 */
export function PagePixels({ seed = 1 }) {
  return (
    <>
      <PixelCluster
        className="page-pixels page-pixels--left"
        origin="top-left"
        seed={seed * 13 + 3}
        cols={11}
        rows={7}
        colors={["#ffc300", "#ffc8e5", "#cc1757"]}
      />
      <PixelCluster
        className="page-pixels page-pixels--right"
        origin="bottom-right"
        seed={seed * 29 + 8}
        cols={14}
        rows={8}
        colors={["#ffc8e5", "#ffc300", "#cc1757"]}
      />
    </>
  );
}
