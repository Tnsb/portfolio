import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { IconInline } from "../components/IconInline.jsx";
import { projects } from "../data/siteContent.js";

export function Projects() {
  return (
    <>
      <DocumentTitle title="Projects" />
      <div className="container page">
        <header className="page-header">
          <h1>Projects</h1>
        </header>

        <div className="project-grid">
          {projects.map((p) => {
            const mockupContain = Boolean(p.mockupNatural || p.mockupContain);
            return (
            <article key={p.id} className="card card--project">
              {p.mockupSrc ? (
                <figure
                  className={`project-mockup${mockupContain ? " project-mockup--contain" : ""}`}
                  style={
                    p.mockupBg ? { "--project-mockup-bg": p.mockupBg } : undefined
                  }
                >
                  <img
                    src={p.mockupSrc}
                    alt={p.mockupAlt ?? ""}
                    {...(mockupContain
                      ? {}
                      : { width: 1200, height: 675 })}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ) : null}
              <h2 className="card__title">{p.name}</h2>
              <p className="project-tag meta-chip">{p.tag}</p>
              <p>{p.body}</p>
              {p.extra ? <p className="muted small">{p.extra}</p> : null}
              {p.links?.length ? (
                <p className="project-card__links">
                  {p.links.map((L) => (
                    <a
                      key={L.href + L.label}
                      className={
                        L.label === "GitHub"
                          ? "project-card__link project-card__link--icon-only link-with-icon"
                          : "project-card__link"
                      }
                      href={L.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...(L.label === "GitHub"
                        ? {
                            "aria-label": `${p.name} on GitHub (opens in new tab)`,
                          }
                        : {})}
                    >
                      {L.label === "GitHub" ? (
                        <IconInline name="github" size={20} />
                      ) : (
                        <>
                          {L.label} ↗
                        </>
                      )}
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
