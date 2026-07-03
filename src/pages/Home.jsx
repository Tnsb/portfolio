import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { IconInline } from "../components/IconInline.jsx";
import { PixelCluster } from "../components/PixelCluster.jsx";
import { links } from "../data/siteContent.js";

const heroTags = ["AI engineering", "Agents & production ML", "Shipping real systems"];

export function Home() {
  return (
    <>
      <DocumentTitle title="Home" />
      <section className="hero">
        <PixelCluster
          className="hero__pixels hero__pixels--right"
          origin="bottom-right"
          seed={11}
          colors={["#ffc8e5", "#ffc300", "#cc1757"]}
        />
        <PixelCluster
          className="hero__pixels hero__pixels--left"
          origin="top-left"
          seed={4}
          cols={11}
          rows={7}
          colors={["#ffc300", "#ffc8e5", "#cc1757"]}
        />
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
              M.S. in Artificial Intelligence at <strong>Carnegie Mellon</strong>, currently building{" "}
              <strong>
                <a href="https://github.com/Tnsb/vantage" target="_blank" rel="noopener noreferrer">
                  Vantage
                </a>
              </strong>
              , a simulation layer that forecasts the revenue impact of AI customer agents. Before that, senior software
              engineer at <strong>Trackonomy</strong>, a unicorn IoT logistics startup (last-mile visibility, APIs, and
              customer-facing tools).
            </p>

            <div className="hero-focus" role="group" aria-label="Focus areas">
              <p className="hero-focus__line">
                <span className="hero-focus__lead">Focus</span>
                <span className="hero-focus__keywords">{heroTags.join(" · ")}</span>
              </p>
            </div>

            <div className="hero__actions">
              <a className="btn btn--primary link-with-icon" href={links.email}>
                <IconInline name="email" size={18} />
                {links.emailDisplay}
              </a>
              <a
                className="btn btn--ghost link-with-icon"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInline name="github" size={18} />
                GitHub
              </a>
              <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
