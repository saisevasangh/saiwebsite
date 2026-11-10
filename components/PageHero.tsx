import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CurlArrow, Sparks } from "@/components/ui";

type Media = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** "frame" = rounded photo with coloured shapes behind; "blob" = the organic cut-out portrait. */
  variant?: "frame" | "blob";
};

/** Compact hero used at the top of every inner page. Without `media` it is centred. */
export default function PageHero({
  crumb,
  crumbHref,
  title,
  lead,
  media,
  children,
}: {
  crumb: string;
  crumbHref?: { label: string; href: string };
  title: ReactNode;
  lead: string;
  media?: Media;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${media ? "" : " page-hero--center"}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <Sparks className="deco deco--page" />
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            {crumbHref && (
              <>
                <Link href={crumbHref.href}>{crumbHref.label}</Link>
                <span aria-hidden="true">/</span>
              </>
            )}
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__lead">{lead}</p>
          {children}
        </div>

        {media && media.variant === "blob" && (
          <figure className="page-hero__media page-hero__media--blob">
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              priority
              sizes="(max-width: 900px) 70vw, 34vw"
              className="about__img"
            />
            <figcaption className="note about__note">
              Not just
              <br />
              students,
              <br />
              future creators…
              <CurlArrow className="about__note-arrow" />
            </figcaption>
          </figure>
        )}

        {media && media.variant !== "blob" && (
          <div className="page-hero__media">
            <div className="page-hero__frame">
              <Image
                src={media.src}
                alt={media.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
                className="page-hero__img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
