import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { projects, links } from "../data/siteContent.js";

export function Projects() {
  return (
    <>
      <DocumentTitle title="Projects" />
      <div className="container page">
        <header className="page-header">
          <h1>Projects</h1>
          <p className="page-header__lede">
            Repositories linked on each card. Full list:{" "}
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </header>

        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.id} className="card card--project">
              <h2 className="card__title">{p.name}</h2>
              <p className="project-tag">{p.tag}</p>
              <p>{p.body}</p>
              <p className="muted small">{p.extra}</p>
              {p.links?.length ? (
                <p className="project-card__links">
                  {p.links.map((L) => (
                    <a
                      key={L.href + L.label}
                      className="project-card__link"
                      href={L.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {L.label} ↗
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
