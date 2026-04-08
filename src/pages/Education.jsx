import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { education } from "../data/siteContent.js";

export function Education() {
  return (
    <>
      <DocumentTitle title="Education" />
      <div className="container page page--education">
        <header className="page-header page-header--education">
          <h1>Education</h1>
        </header>

        <div className="edu-showcase-stack">
          {education.map((e, i) => {
            const ph = e.campusPhoto;
            const srcSet =
              ph.src960 && ph.src1920 ? `${ph.src960} 960w, ${ph.src1920} 1920w` : undefined;
            const src = ph.src1920 ?? ph.src;
            return (
              <article
                key={e.school}
                className={`edu-feature${i % 2 === 1 ? " edu-feature--reverse" : ""}`}
              >
                <div className="edu-feature__media">
                  <img
                    src={src}
                    srcSet={srcSet}
                    sizes={srcSet ? "(min-width: 56rem) 44vw, 100vw" : undefined}
                    alt={ph.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={900}
                    height={1200}
                  />
                  <div className="edu-feature__media-shade" aria-hidden />
                  <p className="edu-feature__place">{e.place}</p>
                </div>
                <div className="edu-feature__body">
                  <p className="edu-feature__eyebrow">{e.time}</p>
                  <h2 className="edu-feature__title">{e.school}</h2>
                  <p className="edu-feature__degree">{e.detail}</p>
                  {e.notes ? <p className="edu-feature__notes">{e.notes}</p> : null}
                  {e.coursework?.length ? (
                    <div className="edu-feature__coursework">
                      <h3 className="edu-feature__cw-heading">Relevant coursework</h3>
                      <ul className="edu-feature__cw-list">
                        {e.coursework.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </>
  );
}
