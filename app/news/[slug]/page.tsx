import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import { POST_STYLE, POSTS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const { tone } = POST_STYLE[post.category];

  return (
    <>
      <PageBanner
        crumb={post.title}
        image="/images/story.jpg"
        alt="Sai Seva Sangh students and staff posing together in traditional dress"
        title={post.title}
        lead={post.excerpt}
      >
        <p className="post-meta">
          <span className={`chip chip--${tone}`}>{post.category}</span>
          {post.date && <time>{post.date}</time>}
        </p>
      </PageBanner>

      <section className="page-section">
        <div className="container">
          <div className="prose" {...rv("up")}>
            {post.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <Link href="/news" className="link-arrow">
              <ArrowLeft size={15} aria-hidden="true" /> Back to News &amp; Events
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="container">
          <h2 className="h2 serif related__title">More stories</h2>
          <div className="posts posts--3">
            {related.map((p, idx) => {
              const s = POST_STYLE[p.category];
              const Icon = s.icon;
              return (
                <article key={p.slug} className="post" {...rv("up", idx)}>
                  <Link
                    href={`/news/${p.slug}`}
                    className={`post__cover post__cover--${s.tone}`}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <Icon size={36} strokeWidth={1.4} />
                  </Link>
                  <div className="post__body">
                    <span className={`chip chip--${s.tone}`}>{p.category}</span>
                    <h3 className="serif">
                      <Link href={`/news/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <Link href={`/news/${p.slug}`} className="program__more">
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
