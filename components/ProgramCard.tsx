import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { PROGRAMS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

type Program = (typeof PROGRAMS)[number];

export default function ProgramCard({ program, index }: { program: Program; index: number }) {
  const { slug, title, icon: Icon, image, alt, summary, description, stat } = program;
  return (
    <article id={slug} className="program" {...rv("up", index)} style={{ "--i": index } as CSSProperties}>
      <div className="program__media">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="program__img"
        />
        <span className="program__badge">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </div>
      <div className="program__body">
        <h3 className="serif">{title}</h3>
        <p className="program__summary">{summary}</p>
        <p className="program__desc">{description}</p>
        {stat && (
          <p className="program__stat">
            <strong>{stat.value}</strong> {stat.label}
          </p>
        )}
        <Link href="/get-involved#donate" className="program__more">
          Support this program <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
