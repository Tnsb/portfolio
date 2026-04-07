import { TransitionLink } from "./TransitionLink.jsx";
import { links } from "../data/siteContent.js";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <p className="footer__note">
          © {year} Tina Sibbal
        </p>
        <div className="footer__links">
          <TransitionLink to="/contact">Contact</TransitionLink>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
