import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import HolisticPanel from "@/components/HolisticPanel";
import JourneySteps from "@/components/JourneySteps";
import PageHero from "@/components/PageHero";
import SkillsAccordion from "@/components/SkillsAccordion";
import { CheckList, ScriptWord, SectionHead } from "@/components/ui";
import { BANK, COMMON_PROGRAM, DETAILS, DONATE_URL, FACTS, FLOORS, TOTALS } from "@/lib/project";
import { rv } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "The Project",
  description:
    "A building that will build 600 futures every year: project details, four skills, holistic approach and how to contribute.",
};

export default function ProjectPage() {
  return (
    <>
      <PageHero
        crumb="The Project"
        title={
          <>
            A Building That Will Build <ScriptWord>600 Futures</ScriptWord> Every Year
          </>
        }
        lead="Start early. Skill early. Earn early. A free, skill-based learning home in Moosapet, Hyderabad for orphan and underprivileged girl children, filling the gap between education and employment."
        media={{ src: "/images/building.jpg", alt: "Architectural render of the 4S School of Excellence building", width: 470, height: 330 }}
      >
        <a href={DONATE_URL} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
          Contribute Now <ArrowRight size={16} aria-hidden="true" />
        </a>
      </PageHero>

      <section className="section page-section">
        <div className="container">
          <ul className="pfacts">
            {FACTS.map((f, i) => (
              <li key={f.label} {...rv("zoom", i)}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section page-section page-section--tint">
        <div className="container">
          <SectionHead kicker="The Project at a Glance" title="Six levels, 23,521 SFT" lead="Cellar + Stilt Floor + Four Upper Floors." />
          <div className="pglance">
            <div className="pstack" {...rv("left")}>
              {FLOORS.map((f) => (
                <div key={f.name} className="pstack__row" style={{ width: `${Math.round((f.sft / 4144) * 100)}%` }}>
                  <span>{f.name}</span>
                  <b>{f.sft.toLocaleString("en-IN")} SFT</b>
                </div>
              ))}
            </div>
            <ul className="pdetails" {...rv("right", 1)}>
              {DETAILS.map(([k, v]) => (
                <li key={k}>
                  <Check size={16} aria-hidden="true" />
                  <span>{k}</span>
                  <b>{v}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section page-section" id="courses">
        <div className="container">
          <SectionHead kicker="Four Skills" title="One Building, Four Skills, Countless Possibilities" lead="An investment in the dreams, dignity and future of 600 underprivileged girls per year." center />
          <SkillsAccordion />
        </div>
      </section>

      <section className="section page-section page-section--tint" id="journey">
        <div className="container">
          <JourneySteps />
        </div>
      </section>

      <section className="section page-section page-section--warm">
        <div className="container split">
          <div className="split__copy" {...rv("up")}>
            <p className="kicker">Common minimum program</p>
            <h2 className="h2 serif">4 Skills. 4 Years. Empowered Futures.</h2>
            <p className="body">
              Girls gain hands-on experience, work on live projects, interact with industry professionals and receive exposure to real-world opportunities.
            </p>
            <CheckList items={COMMON_PROGRAM} tone="maroon" />
          </div>
          <div className="split__copy" {...rv("right", 1)}>
            <HolisticPanel />
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container">
          <SectionHead kicker="Financial Overview" title={<>Per SFT cost: {TOTALS.rate} <span className="pmuted">| {TOTALS.rateUsd}</span></>} lead="Includes construction of all floors, GST, and the required furniture for each floor." />
          <div className="ptable-wrap" {...rv("up")}>
            <table className="ptable">
              <thead>
                <tr><th>Floor</th><th>SFT</th><th>Cost (₹/SFT)</th><th>Total (₹ INR)</th><th>Total (USD approx.)</th></tr>
              </thead>
              <tbody>
                {[...FLOORS].reverse().map((f) => (
                  <tr key={f.name}>
                    <td>{f.name}</td><td>{f.sft.toLocaleString("en-IN")}</td><td>₹ 3,600</td><td>₹ {f.inr}</td><td>$ {f.usd}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr><td>Total</td><td>{TOTALS.sft}</td><td>—</td><td>₹ {TOTALS.inr}</td><td>$ {TOTALS.usd}</td></tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <section className="section page-section page-section--tint" id="contribute">
        <div className="container">
          <SectionHead kicker="Be a Part of This Transformation" title="Make a Lasting Difference" lead="Your support can help build a safe, skill-based learning home for underprivileged girls and give them the opportunity for a brighter, independent future." center />
          <div className="pgive">
            <div className="pgive__card" {...rv("left")}>
              <h3 className="serif">Indian contributions</h3>
              <p>Via Razorpay; eligible for tax benefits under Section 80G.</p>
              <Image src="/images/donate-qr.png" alt="QR code to contribute to 4S School of Excellence" width={180} height={180} />
              <a href={DONATE_URL} className="btn btn--navy" target="_blank" rel="noopener noreferrer">
                Click here to contribute <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="pgive__card" {...rv("right", 1)}>
              <h3 className="serif">Foreign contributions</h3>
              <dl className="pbank">
                {BANK.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <p>
                A postal address and email of the contributor must be filed with the FCRA. Please send them to{" "}
                <a href="mailto:saisevasangh99@gmail.com">saisevasangh99@gmail.com</a>.
              </p>
            </div>
          </div>
          <p className="pcontact">
            Contact: 9989928551/52, 8885530204, 9063442080/88 ·{" "}
            <a href="http://www.saisevasangh.org" target="_blank" rel="noopener noreferrer">www.saisevasangh.org</a>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
