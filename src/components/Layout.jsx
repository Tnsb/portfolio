import { useLocation, Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="viewport-aurora viewport-aurora--a" aria-hidden />
      <div className="viewport-aurora viewport-aurora--b" aria-hidden />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="main-shell">
        <div key={pathname} className="page-transition-outlet">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
