import { TransitionLink } from "../components/TransitionLink.jsx";
import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { links, skillGroups } from "../data/siteContent.js";

const heroTags = ["AI engineering", "Agents & production ML", "Shipping real systems"];

export function Home() {
  return (
    <>
      <DocumentTitle title="Home" />
      <section className="hero">
        <div className="hero__layout">
          <h1 className="hero__name">
            <span className="hero__name-first">Tina</span>
            <span className="hero__name-last">Sibbal</span>
          </h1>
          <figure className="hero__photo">
            <img
              src="/images/tina-hero.png"
              alt="Tina Sibbal outdoors with the San Francisco Bay and Golden Gate Bridge in the background"
              width={1600}
              height={1200}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
          <div className="hero__rest">
            <p className="hero__tagline">
              M.S. in Artificial Intelligence at <strong>Carnegie Mellon</strong>. Before that, senior software engineer
              at <strong>Trackonomy</strong> (data pipelines, APIs, and customer-facing tools for logistics).
            </p>

            <div className="hero-focus" role="group" aria-label="Focus areas">
              <p className="hero-focus__line">
                <span className="hero-focus__lead">Focus</span>
                <span className="hero-focus__keywords">{heroTags.join(" · ")}</span>
              </p>
            </div>

            <div className="hero__actions">
              <TransitionLink className="btn btn--primary" to="/contact">
                Say hello
              </TransitionLink>
              <a className="btn btn--ghost" href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title section-title--indexed">Explore</h2>
        <p className="section-intro">About, experience, education, and projects.</p>
        <div className="card-grid card-grid--home">
          <TransitionLink className="card card--link" to="/about">
            <h3>About</h3>
            <span className="card__cta">Read more</span>
          </TransitionLink>
          <TransitionLink className="card card--link" to="/experience">
            <h3>Experience</h3>
            <p>Trackonomy, UC Davis IT, and SacHacks.</p>
            <span className="card__cta">See roles</span>
          </TransitionLink>
          <TransitionLink className="card card--link" to="/education">
            <h3>Education</h3>
            <p>CMU M.S. in AI and UC Davis B.S. in CSE.</p>
            <span className="card__cta">View schools</span>
          </TransitionLink>
          <TransitionLink className="card card--link" to="/projects">
            <h3>Projects</h3>
            <p>Course and side projects with links to repos.</p>
            <span className="card__cta">Browse projects</span>
          </TransitionLink>
        </div>
      </section>

      <section className="section section--tight container">
        <h2 className="section-title section-title--indexed">Skills at a glance</h2>
        <div className="skills-preview">
          {skillGroups.map((g) => (
            <div key={g.label} className="skills-preview__item">
              <h3>{g.label}</h3>
              <p>{g.items}</p>
            </div>
          ))}
        </div>
        <p className="muted footer-note">
          <TransitionLink to="/experience">Experience</TransitionLink>,{" "}
          <TransitionLink to="/education">Education</TransitionLink>,{" "}
          <TransitionLink to="/projects">Projects</TransitionLink>.
        </p>
      </section>
    </>
  );
}
