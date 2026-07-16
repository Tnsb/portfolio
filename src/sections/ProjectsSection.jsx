import { Link } from "react-router-dom";
import { IconInline } from "../components/IconInline.jsx";
import { projects } from "../data/siteContent.js";

function projectHref(p) {
  const github = p.links?.find((L) => L.label === "GitHub");
  if (github) return { href: github.href, external: true, label: "GitHub" };
  if (p.caseStudySlug) {
    return { href: `/case-studies/${p.caseStudySlug}`, external: false, label: "Case study" };
  }
  return null;
}

export function ProjectsSection() {
  return (
    <section id="projects" className="container section section--home">
      <header className="page-header">
        <h2 className="section-title">Projects</h2>
      </header>

      <div className="project-grid">
        {projects.map((p) => {
          const mockupContain = Boolean(p.mockupNatural || p.mockupContain);
          const link = projectHref(p);

          return (
            <article key={p.id} className="card card--project">
              {p.mockupSrc ? (
                <figure
                  className={`project-mockup${mockupContain ? " project-mockup--contain" : ""}`}
                  style={p.mockupBg ? { "--project-mockup-bg": p.mockupBg } : undefined}
                >
                  <img
                    src={p.mockupSrc}
                    alt={p.mockupAlt ?? ""}
                    {...(mockupContain ? {} : { width: 1200, height: 675 })}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ) : null}

              <div className="project-card__meta">
                <h3 className="card__title">{p.name}</h3>
                <span className="project-tag meta-chip">{p.tag}</span>
                {link ? (
                  link.external ? (
                    <a
                      className="project-card__repo"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconInline name="github" size={15} />
                      <span>GitHub</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link className="project-card__repo" to={link.href}>
                      <span>{link.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  )
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
