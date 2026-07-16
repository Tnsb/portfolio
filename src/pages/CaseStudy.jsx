import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { TransitionLink } from "../components/TransitionLink.jsx";
import { caseStudies } from "../data/caseStudies.js";

function BackLink() {
  return (
    <TransitionLink className="case-study__back" to="/#case-studies">
      ← Back to case studies
    </TransitionLink>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <Navigate to="/#case-studies" replace />;

  return (
    <>
      <DocumentTitle title={`${study.name} · Case Study`} />
      <div className="container page page--case-study">
        <BackLink />

        <header className="page-header case-study__header">
          <h1 className="case-study__title">
            {study.logoSrc ? (
              <img
                className="case-study__logo"
                src={study.logoSrc}
                alt={study.logoAlt ?? ""}
                width={40}
                height={40}
                decoding="async"
              />
            ) : null}
            {study.name}
          </h1>
          <p className="page-header__lede case-study__tagline">{study.tagline}</p>
          {study.eyebrow ? (
            <p className="case-study-article__eyebrow meta-chip">{study.eyebrow}</p>
          ) : null}
        </header>

        {study.heroSrc ? (
          <figure className="case-study__hero">
            <img
              src={study.heroSrc}
              alt={study.heroAlt ?? ""}
              loading="eager"
              decoding="async"
            />
          </figure>
        ) : null}

        <div className="case-study__body">
          {study.sections.map((section, i) => (
            <section key={section.label} className="case-study-section">
              <p className="case-study-section__label meta-chip">
                {String(i + 1).padStart(2, "0")} · {section.label}
              </p>
              {section.paragraphs.map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
              {section.decisions ? (
                <ul className="case-study-section__decisions">
                  {section.decisions.map((d) => (
                    <li key={d.title}>
                      <strong>{d.title}</strong> {d.text}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {study.repoUrl ? (
          <p className="case-study__repo">
            <a href={study.repoUrl} target="_blank" rel="noopener noreferrer">
              View the repo on GitHub ↗
            </a>
          </p>
        ) : null}

        <div className="case-study__footer">
          <BackLink />
        </div>
      </div>
    </>
  );
}
