import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { PagePixels } from "../components/PagePixels.jsx";
import { jobs } from "../data/siteContent.js";

export function Experience() {
  return (
    <>
      <DocumentTitle title="Experience" />
      <div className="container page">
        <PagePixels seed={1} />
        <header className="page-header">
          <h1>Experience</h1>
        </header>

        <div className="experience-grid">
          {jobs.map((job) => (
            <article key={job.id} className="card card--experience">
              <header className="card__top">
                <div className="experience__brand">
                  {job.logoUrl && job.orgUrl ? (
                    <a
                      className="experience__logo-link"
                      href={job.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${job.org} (opens in new tab)`}
                    >
                      <img
                        className="experience__logo"
                        src={job.logoUrl}
                        alt=""
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  ) : null}
                  <div>
                    <h2 className="card__title">{job.title}</h2>
                    <p className="card__meta">
                      <strong>
                        {job.orgUrl ? (
                          <a href={job.orgUrl} target="_blank" rel="noopener noreferrer">
                            {job.org}
                          </a>
                        ) : (
                          job.org
                        )}
                      </strong>
                      <span className="muted"> · {job.tagline}</span>
                    </p>
                  </div>
                </div>
                <p className="card__facts">
                  <span className="card__period">{job.period}</span>
                  <span className="card__loc muted">{job.location}</span>
                </p>
              </header>
              <p className="card__expanded">{job.expanded}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
