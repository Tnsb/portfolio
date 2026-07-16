import { IconInline } from "../components/IconInline.jsx";
import { writing } from "../data/siteContent.js";

export function BlogsSection() {
  return (
    <section id="blogs" className="container section section--home page--blogs">
      <header className="page-header page-header--blogs">
        <h2 className="section-title">Blogs</h2>
        <p className="page-header__lede">Writing on AI and engineering.</p>
      </header>

      {writing.posts.length > 0 ? (
        <div className="blog-showcase-stack">
          {writing.posts.map((post, i) => (
            <article key={post.id ?? post.href} className="blog-post blog-post--editorial">
              <div
                className={`edu-feature blog-post__sheet${i % 2 === 1 ? " edu-feature--reverse" : ""}`}
              >
                <div className="edu-feature__media edu-feature__media--campus-mat edu-feature__media--blog-mat">
                  {post.coverSrc ? (
                    <div className="edu-photo__frame edu-photo__frame--blog">
                      <img
                        src={post.coverSrc}
                        alt={post.coverAlt ?? ""}
                        width={1019}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                      />
                      {post.readTime ? (
                        <p className="meta-chip edu-feature__place--in-frame">{post.readTime}</p>
                      ) : null}
                    </div>
                  ) : post.readTime ? (
                    <p className="meta-chip">{post.readTime}</p>
                  ) : null}
                </div>
                <div className="edu-feature__body">
                  <p className="edu-feature__eyebrow">Article</p>
                  <h3 className="edu-feature__title">
                    <a
                      className="blog-post__title-link"
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h3>
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
    </section>
  );
}
