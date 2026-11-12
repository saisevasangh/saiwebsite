import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  { title: "Education", href: "/school-for-underprivileged", image: "/images/education.jpeg" },
  { title: "Residential Facility", href: "/orphanage-for-girls", image: "/images/Residentialfacility.jpeg" },
  { title: "Skill Development", href: "/project", image: "/images/Skillsdevelopment.jpeg" },
  { title: "Community Services", href: "/community-services-3", image: "/images/communityservices.jpeg" },
];

export default function OurPrograms() {
  return (
    <section className="progs" aria-labelledby="progs-title">
      <div className="container">
        <div className="progs__head">
          <span className="eyebrow eyebrow--orange">What we do</span>
          <h2 id="progs-title" className="section-title serif">Our Programs</h2>
        </div>
        <ul className="progs__grid">
          {PROGRAMS.map((p) => (
            <li key={p.title}>
              <Link href={p.href} className="progs__card">
                <div className="progs__media">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 560px) 50vw, 25vw"
                    className="progs__img"
                  />
                </div>
                <span className="progs__label">
                  {p.title} <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}