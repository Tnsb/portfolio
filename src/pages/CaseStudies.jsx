import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { TransitionLink } from "../components/TransitionLink.jsx";
import { caseStudies } from "../data/caseStudies.js";

export function CaseStudies() {
  return (
    <>
      <DocumentTitle title="Case Studies" />
      <div className="container page page--case-studies">
        <header className="page-header page-header--case-studies">
          <h1>Case Studies</h1>
          <p className="page-header__lede">
            Product case studies: taking AI products from 0 → 1.
          </p>
        </header>

        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <TransitionLink
              key={cs.slug}
              to={`/case-studies/${cs.slug}`}
              className="card card--case-study"
            >
              <p className="case-study-card__eyebrow meta-chip">{cs.eyebrow}</p>
              <h2 className="case-study-card__title">
                {cs.logoSrc ? (
                  <img
                    className="case-study-card__logo"
                    src={cs.logoSrc}
                    alt=""
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                {cs.name}
              </h2>
              <p className="case-study-card__tagline">{cs.tagline}</p>
              <p className="case-study-card__summary">{cs.summary}</p>
              <span className="case-study-card__cta">
                Read the case study →
              </span>
            </TransitionLink>
          ))}
        </div>
      </div>
    </>
  );
}
