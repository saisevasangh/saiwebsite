import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import ProgramCard from "@/components/ProgramCard";
import { SectionHead } from "@/components/ui";
import { ORG_NAME } from "@/lib/content";
import { PROGRAMS } from "@/lib/content-extra";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Education, residential care, healthcare & nutrition, skill development and spiritual education for orphaned and underprivileged girls.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        crumb="Our Programs"
        image="/images/hero.jpg"
        alt="Four smiling girls in school uniform reading a book together outdoors"
        title="Our Programs"
        lead={`Quality education, residential care, healthcare, nutrition, skill development and spiritual & value-based learning — everything a girl needs to lead a self-reliant life, provided by ${ORG_NAME} completely free of cost.`}
      />

      <section className="page-section">
        <div className="container">
          <SectionHead
            kicker="What we offer"
            title="Six programs, one goal"
            lead="Every girl in our care moves through these programs at her own pace, from her first day at school to her first day at work."
          />
          <div className="programs__grid">
            {PROGRAMS.map((program, idx) => (
              <ProgramCard key={program.slug} program={program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
