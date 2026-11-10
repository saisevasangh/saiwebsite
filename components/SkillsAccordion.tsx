"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, Briefcase, ChevronDown, Clock, Handshake, Lightbulb, Wallet, X } from "lucide-react";
import { COURSES } from "@/lib/project";

/**
 * Expandable skills: click a skill to open it (desktop: the others collapse into
 * vertical strips; mobile: a stacked accordion). Edit the details in lib/project.ts.
 */
export default function SkillsAccordion() {
  const [open, setOpen] = useState<number | null>(null); // null = four plain cards

  return (
    <div className={`skills${open === null ? " skills--idle" : ""}`}>
      {COURSES.map((c, i) => {
        const isOpen = open === i;
        return (
          <article key={c.id} className={`skill${isOpen ? " is-open" : ""}`} style={{ "--accent": c.accent } as CSSProperties}>
            {open === null && (
              <button
                type="button"
                className="skill__card"
                aria-expanded={false}
                aria-controls={`skill-${c.id}`}
                onClick={() => setOpen(i)}
              >
                <span className="skill__card-media">
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 900px) 50vw, 25vw" className="program__img" />
                </span>
                <span className="skill__card-title serif">{c.title}</span>
                <span className="skill__card-more">
                  View details <ArrowRight size={14} aria-hidden="true" />
                </span>
              </button>
            )}
            <button
              type="button"
              className="skill__tab"
              aria-expanded={isOpen}
              aria-controls={`skill-${c.id}`}
              id={`skill-tab-${c.id}`}
              onClick={() => setOpen(i)}
            >
              <span className="skill__num">0{i + 1}</span>
              <span className="skill__label">{c.label}</span>
              <ChevronDown size={18} className="skill__chev" aria-hidden="true" />
            </button>

            {isOpen && (
              <div className="skill__panel" id={`skill-${c.id}`} role="region" aria-labelledby={`skill-tab-${c.id}`}>
                <div className="skill__media">
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 900px) 100vw, 30vw" className="program__img" />
                  <h3 className="skill__media-title serif">{c.title}</h3>
                </div>

                <div className="skill__body">
                  <button type="button" className="skill__close" aria-label="Close details" onClick={() => setOpen(null)}>
                    <X size={18} aria-hidden="true" />
                  </button>
                  <h3 className="skill__title serif">{c.diploma ?? c.title}</h3>
                  {c.tagline && <p className="skill__tagline">{c.tagline}</p>}

                  <div className="skill__grid">
                    {c.skillSet && (
                      <section className="skill__box skill__box--wide">
                        <h4><Lightbulb size={16} aria-hidden="true" /> Skill set</h4>
                        <p>{c.skillSet}</p>
                      </section>
                    )}
                    {c.duration && (
                      <section className="skill__box">
                        <h4><Clock size={16} aria-hidden="true" /> Course duration</h4>
                        <ul>{c.duration.map((d) => <li key={d}>{d}</li>)}</ul>
                      </section>
                    )}
                    {c.partners && (
                      <section className="skill__box">
                        <h4><Handshake size={16} aria-hidden="true" /> Partners</h4>
                        <p>{c.partners}</p>
                      </section>
                    )}
                    {c.marketFee && (
                      <section className="skill__box skill__box--fee">
                        <h4><Wallet size={16} aria-hidden="true" /> Course fee</h4>
                        <p className="skill__fee-market">In market: ₹{c.marketFee}</p>
                        <p className="skill__fee-zero">4S offers it at <strong>Zero Fee</strong></p>
                      </section>
                    )}
                    {c.careers && (
                      <section className="skill__box skill__box--wide">
                        <h4><Briefcase size={16} aria-hidden="true" /> Career opportunities</h4>
                        <ul className="skill__chips">{c.careers.map((x) => <li key={x}>{x}</li>)}</ul>
                      </section>
                    )}
                  </div>

                  {c.placement && (
                    <p className="skill__placement">
                      Placement assurance for every student: <strong>{c.placement}</strong>
                    </p>
                  )}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
