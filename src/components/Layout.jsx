import { Outlet } from "react-router-dom";
import { FilmGrain } from "./FilmGrain.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { InsectDecor } from "./InsectDecor.jsx";
import { PointerGlow } from "./PointerGlow.jsx";
import { ReadingProgress } from "./ReadingProgress.jsx";
import { ScrollToHash } from "./ScrollToHash.jsx";

export function Layout() {
  return (
    <>
      <div className="viewport-aurora viewport-aurora--a" aria-hidden />
      <div className="viewport-aurora viewport-aurora--b" aria-hidden />
      <PointerGlow />
      <FilmGrain />
      <InsectDecor />
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <ReadingProgress />
      <ScrollToHash />
      <div className="site-shell">
        <Header />
        <main id="main-content" className="main-shell">
          <div className="page-transition-outlet">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
