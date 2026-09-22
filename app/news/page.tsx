import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import { POST_STYLE, POSTS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stories and updates from Sai Seva Sangh.",
};

export default function NewsPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <PageBanner
        crumb="News & Events"
        image="/images/why.jpg"
        alt="A girl in a yellow uniform reading"
        title="News & Events"
        lead="Stories and updates from Sai Seva Sangh: our programs, our students, and the people who support them."
      />

      <section className="page-section">
        <div className="container">
          <article className="featured" {...rv("up")}>
            <div className="featured__media">
              <Image
                src="/images/hero.jpg"
                alt="Four smiling girls in school uniform reading a book together outdoors"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
                className="featured__img"
              />
            </div>
            <div className="featured__body">
              <span className={`chip chip--${POST_STYLE[featured.category].tone}`}>
                {featured.category}
              </span>
              <h2 className="h2 serif">
                <Link href={`/news/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="body">{featured.excerpt}</p>
              <Link href={`/news/${featured.slug}`} className="link-arrow">
                Read the story <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <div className="posts">
            {rest.map((post, idx) => {
              const { tone, icon: Icon } = POST_STYLE[post.category];
              return (
                <article key={post.slug} className="post" {...rv("up", idx)}>
                  <Link
                    href={`/news/${post.slug}`}
                    className={`post__cover post__cover--${tone}`}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <Icon size={36} strokeWidth={1.4} />
                  </Link>
                  <div className="post__body">
                    <span className={`chip chip--${tone}`}>{post.category}</span>
                    <h3 className="serif">
                      <Link href={`/news/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/news/${post.slug}`} className="program__more">
                      Read more <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
