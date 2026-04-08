import { DocumentTitle } from "../components/DocumentTitle.jsx";
import { IconInline } from "../components/IconInline.jsx";
import { writing } from "../data/siteContent.js";

export function Blogs() {
  return (
    <>
      <DocumentTitle title="Blogs" />
      <div className="container page page--blogs">
        <header className="page-header page-header--blogs">
          <h1>Blogs</h1>
          <p className="page-header__lede">Writing on AI and engineering.</p>
        </header>

        {writing.posts.length > 0 ? (
          <div className="blog-showcase-stack">
            {writing.posts.map((post, i) => (
              <article
                key={post.id ?? post.href}
                className="blog-post blog-post--editorial"
              >
                <div
                  className={`edu-feature blog-post__sheet${i % 2 === 1 ? " edu-feature--reverse" : ""}`}
                >
                  <div className="edu-feature__media">
                    {post.coverSrc ? (
                      <img
                        src={post.coverSrc}
                        alt={post.coverAlt ?? ""}
                        width={1200}
                        height={675}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    ) : null}
                    <div className="edu-feature__media-shade" aria-hidden />
                    {post.readTime ? (
                      <p className="edu-feature__place">{post.readTime}</p>
                    ) : null}
                  </div>
                  <div className="edu-feature__body">
                    <p className="edu-feature__eyebrow">Article</p>
                    <h2 className="edu-feature__title">
                      <a
                        className="blog-post__title-link"
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.title}
                      </a>
                    </h2>
                    {post.summary ? (
                      <p className="edu-feature__degree blog-post__summary">{post.summary}</p>
                    ) : null}
                    {post.date ? (
                      <p className="edu-feature__notes blog-post__date">{post.date}</p>
                    ) : null}
                    <p className="blog-post__cta">
                      <a
                        className="link-with-icon"
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconInline name="medium" size={17} />
                        <span>Read on Medium ↗</span>
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted about-writing__empty">
            Article links will appear here as they are published.
          </p>
        )}
      </div>
    </>
  );
}
