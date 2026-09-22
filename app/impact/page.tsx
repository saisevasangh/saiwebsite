import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import TestimonialCard from "@/components/TestimonialCard";
import { DanceIcon, KarateIcon } from "@/components/icons";
import { SectionHead } from "@/components/ui";
import { CERTIFICATIONS, IMPACT_STATS, ORG_NAME, REG_NO } from "@/lib/content";
import { PATHWAY, TESTIMONIALS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "2,000+ beneficiaries, 90,000 meals served and 50+ girls in higher education — changing lives, building futures.",
};

export default function ImpactPage() {
  return (
    <>
      <PageBanner
        crumb="Impact"
        image="/images/story.jpg"
        alt="Sai Seva Sangh students and staff posing together in traditional dress"
        title="Changing Lives, Building Futures"
        lead={`For 33 years, ${ORG_NAME} has been turning hope into opportunity for orphaned and underprivileged girls. Here is what that looks like in numbers, and in their own words.`}
      />

      <section className="page-section">
        <div className="container">
          <ul className="bigstats bigstats--8">
            {IMPACT_STATS.map(({ value, label, note, icon }, idx) => {
              const Icon = icon === "dance" ? DanceIcon : icon === "karate" ? KarateIcon : icon;
              return (
                <li key={label} className="bigstat" {...rv("up", idx)}>
                  <span className="bigstat__icon">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <strong className="serif">
                    <CountUp value={value} />
                  </strong>
                  <span className="bigstat__label">{label}</span>
                  {note && <span className="bigstat__note">({note})</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="page-section page-section--warm">
        <div className="container">
          <SectionHead
            kicker="How change happens"
            title="From learning to earning"
            lead="Every girl follows the same path, at her own pace."
          />
          <ol className="pathway">
            {PATHWAY.map((step, idx) => (
              <li key={step.title} className="pathway__step" {...rv("up", idx)}>
                <span className="pathway__num" aria-hidden="true">
                  {idx + 1}
                </span>
                <h3 className="serif">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHead
            kicker="In their words"
            title="Real Dreams. Real Journeys."
            lead="Hear from the students and staff who live this impact every day."
          />
          <div className="testimonials">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={t.name} testimonial={t} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="container">
          <SectionHead kicker="Accountability" title="Registered, transparent, accountable" />
          <ul className="badges">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="badge">
                <strong>{c}</strong>
                <span>Registered</span>
              </li>
            ))}
            <li className="badge badge--reg">
              <strong>Reg. No.</strong>
              <span>{REG_NO}</span>
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
