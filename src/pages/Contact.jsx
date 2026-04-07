import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { links } from "../data/siteContent.js";

export function Contact() {
  return (
    <>
      <DocumentTitle title="Contact" />
      <div className="container page page--narrow">
        <header className="page-header">
          <h1>Contact</h1>
          <p className="page-header__lede">Email, LinkedIn, or GitHub.</p>
        </header>

        <div className="contact-card card">
          <ul className="contact-list">
            <li>
              <span className="contact-list__label">Email</span>
              <a href={links.email}>tsibbal@gmail.com</a>
            </li>
            <li>
              <span className="contact-list__label">Andrew ID</span>
              <a href={links.emailAndrew}>tsibbal@andrew.cmu.edu</a>
            </li>
            <li>
              <span className="contact-list__label">LinkedIn</span>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/tinasibbal
              </a>
            </li>
            <li>
              <span className="contact-list__label">GitHub</span>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                github.com/Tnsb
              </a>
            </li>
          </ul>

          <div className="action-row" style={{ marginTop: "1.25rem" }}>
            <a className="btn btn--primary" href={links.email}>
              Email me
            </a>
            <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
