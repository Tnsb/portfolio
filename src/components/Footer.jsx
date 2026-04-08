import { IconInline } from "./IconInline.jsx";
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
          <a
            className="footer__link-with-icon link-with-icon"
            href={links.email}
          >
            <IconInline name="email" size={16} />
            {links.emailDisplay}
          </a>
          <a
            className="footer__link-with-icon link-with-icon"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInline name="linkedin" size={16} />
            LinkedIn
          </a>
          <a
            className="footer__link-with-icon link-with-icon"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInline name="github" size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
