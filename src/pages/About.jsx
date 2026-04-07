import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { hobbies, writing } from "../data/siteContent.js";

export function About() {
  return (
    <>
      <DocumentTitle title="About" />
      <div className="container page">
        <header className="page-header">
          <h1>About</h1>
        </header>

        <div className="prose">
          <p>
            M.S. Artificial Intelligence candidate at Carnegie Mellon. Previously{" "}
            <strong className="nowrap">Trackonomy</strong> as Senior Software Engineer, focused on ingestion
            pipelines, APIs, and data access for last-mile logistics and device telemetry. Work emphasized reliable
            messaging, database performance and safe schema change, and observability suitable for production incident
            response.
          </p>
          <p>
            Served as primary software counterpart to the company&apos;s largest enterprise account (Fortune 50
            logistics): delivery planning, launch coordination, and executive-facing reviews alongside hands-on
            engineering. Primary stack: TypeScript, Node.js, React, PostgreSQL, and Azure Service Bus; database
            consolidation and migration work included explicit rollback planning and cutover discipline.
          </p>
          <p>
            Current academic and project interests center on{" "}
            <strong>agentic systems, production ML, and evaluation</strong>: drift and monitoring, curated test and judge
            workflows, and human-in-the-loop design where appropriate.
          </p>

          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Writing</h2>
          <p>{writing.intro}</p>
          {writing.mediumUrl ? (
            <p>
              <a href={writing.mediumUrl} target="_blank" rel="noopener noreferrer">
                Medium profile
              </a>
            </p>
          ) : null}
          {writing.posts.length > 0 ? (
            <ul>
              {writing.posts.map((post) => (
                <li key={post.href}>
                  <a href={post.href} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                  {post.date ? <span className="about-writing__date"> · {post.date}</span> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted about-writing__empty">
              Article links will appear here as they are published.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
