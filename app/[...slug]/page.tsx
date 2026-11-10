import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronRight, FileText } from "lucide-react";
import { flattenNav } from "@/lib/nav";
import { PAGES } from "@/lib/pages";
import PageBlocks from "@/components/PageBlocks";

/**
 * Placeholder for every menu page that isn't designed yet (see lib/nav.ts).
 * Pages with their own route (/about, /gallery, /contact-us, …) win over this.
 */
const DESIGNED = new Set(["/", "/about", "/contact-us", "/programs", "/impact", "/news", "/get-involved"]);
const LIVE_SITE = "https://saisevasangh.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return flattenNav()
    .filter((p) => !DESIGNED.has(p.href))
    .map((p) => ({ slug: p.href.split("/").filter(Boolean) }));
}

async function find(params: Promise<{ slug: string[] }>) {
  const { slug } = await params;
  const href = `/${slug.join("/")}`;
  return flattenNav().find((p) => p.href === href);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const page = await find(params);
  return { title: PAGES[page?.href ?? ""]?.title ?? page?.label ?? "Page" };
}

export default async function NavPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const page = await find(params);
  if (!page) notFound();
  const content = PAGES[page.href];

  if (content) {
    return (
      <article className="page-article">
        <div className="container page-article__inner">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/">Home</Link>
            {page.trail.map((t) => (
              <span key={t}>
                <ChevronRight size={13} aria-hidden="true" /> {t}
              </span>
            ))}
          </nav>
          <h1 className="h2 serif page-article__title">{content.title}</h1>
          {content.lead && <p className="page-article__lead">{content.lead}</p>}
          {content.hero && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="page-article__hero" src={content.hero} alt="" />
          )}
          <PageBlocks blocks={content.blocks} />
        </div>
      </article>
    );
  }

  return (
    <section className="stub stub--page">
      <div className="container stub__inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {page.trail.map((t) => (
            <span key={t}>
              <ChevronRight size={13} aria-hidden="true" /> {t}
            </span>
          ))}
        </nav>
        <FileText size={40} strokeWidth={1.5} className="stub__icon" aria-hidden="true" />
        <h1 className="h2 serif">{page.label}</h1>
        <p className="body">
          This page is part of the site menu but its content hasn&apos;t been built in this version yet.
        </p>
        <div className="stub__actions">
          <Link href="/" className="btn btn--maroon">
            <ArrowLeft size={15} aria-hidden="true" /> Back to Home
          </Link>
          <a href={`${LIVE_SITE}${page.href}/`} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
            View on saisevasangh.org <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
