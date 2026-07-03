import { useLocation, Outlet } from "react-router-dom";
import { FilmGrain } from "./FilmGrain.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { InsectDecor } from "./InsectDecor.jsx";
import { PointerGlow } from "./PointerGlow.jsx";
import { ReadingProgress } from "./ReadingProgress.jsx";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="viewport-aurora viewport-aurora--a" aria-hidden />
      <div className="viewport-aurora viewport-aurora--b" aria-hidden />
      <PointerGlow />
      <FilmGrain />
      <InsectDecor key={pathname} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ReadingProgress />
      <div className="site-shell">
        <Header />
        <main id="main-content" className="main-shell">
          <div key={pathname} className="page-transition-outlet">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
