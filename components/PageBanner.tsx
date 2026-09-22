import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { NAV } from "@/lib/nav";

/** Dark-photo banner used at the top of every inner page, in the About Us hero's style. */
export default function PageBanner({
  crumb,
  image,
  alt,
  title,
  lead,
  children,
}: {
  crumb: string;
  image: string;
  alt: string;
  title: ReactNode;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="ah ah--compact">
      <div className="ah__media">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="ah__img" />
        <div className="ah__scrim" aria-hidden="true" />
      </div>
      <div className="container ah__inner">
        <div className="ah__copy">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/">{NAV[0].label}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1 className="ah__title serif">{title}</h1>
          <span className="ah__rule" aria-hidden="true" />
          <p className="ah__lead">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
