// import type { Metadata } from "next";
// import Image from "next/image";
// import { ArrowRight, Check } from "lucide-react";
// import CtaBanner from "@/components/CtaBanner";
// import HolisticPanel from "@/components/HolisticPanel";
// import JourneySteps from "@/components/JourneySteps";
// import PageHero from "@/components/PageHero";
// import SkillsAccordion from "@/components/SkillsAccordion";
// import { CheckList, ScriptWord, SectionHead } from "@/components/ui";
// import { BANK, COMMON_PROGRAM, DETAILS, DONATE_URL, FACTS, FLOORS, TOTALS } from "@/lib/project";
// import { rv } from "@/lib/reveal";

// export const metadata: Metadata = {
//   title: "The Project",
//   description:
//     "A building that will build 600 futures every year: project details, four skills, holistic approach and how to contribute.",
// };

// export default function ProjectPage() {
//   return (
//     <>
//       <PageHero
//         crumb="The Project"
//         title={
//           <>
//             A Building That Will Build <ScriptWord>600 Futures</ScriptWord> Every Year
//           </>
//         }
//         lead="Start early. Skill early. Earn early. A free, skill-based learning home in Moosapet, Hyderabad for orphan and underprivileged girl children, filling the gap between education and employment."
//         media={{ src: "/images/building.jpg", alt: "Architectural render of the 4S School of Excellence building", width: 470, height: 330 }}
//       >
//         <a href={DONATE_URL} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
//           Contribute Now <ArrowRight size={16} aria-hidden="true" />
//         </a>
//       </PageHero>

//       <section className="section page-section">
//         <div className="container">
//           <ul className="pfacts">
//             {FACTS.map((f, i) => (
//               <li key={f.label} {...rv("zoom", i)}>
//                 <strong>{f.value}</strong>
//                 <span>{f.label}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <section className="section page-section page-section--tint">
//         <div className="container">
//           <SectionHead kicker="The Project at a Glance" title="Six levels, 23,521 SFT" lead="Cellar + Stilt Floor + Four Upper Floors." />
//           <div className="pglance">
//             <div className="pstack" {...rv("left")}>
//               {FLOORS.map((f) => (
//                 <div key={f.name} className="pstack__row" style={{ width: `${Math.round((f.sft / 4144) * 100)}%` }}>
//                   <span>{f.name}</span>
//                   <b>{f.sft.toLocaleString("en-IN")} SFT</b>
//                 </div>
//               ))}
//             </div>
//             <ul className="pdetails" {...rv("right", 1)}>
//               {DETAILS.map(([k, v]) => (
//                 <li key={k}>
//                   <Check size={16} aria-hidden="true" />
//                   <span>{k}</span>
//                   <b>{v}</b>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="section page-section" id="courses">
//         <div className="container">
//           <SectionHead kicker="Four Skills" title="One Building, Four Skills, Countless Possibilities" lead="An investment in the dreams, dignity and future of 600 underprivileged girls per year." center />
//           <SkillsAccordion />
//         </div>
//       </section>

//       <section className="section page-section page-section--tint" id="journey">
//         <div className="container">
//           <JourneySteps />
//         </div>
//       </section>

//       <section className="section page-section page-section--warm">
//         <div className="container split">
//           <div className="split__copy" {...rv("up")}>
//             <p className="kicker">Common minimum program</p>
//             <h2 className="h2 serif">4 Skills. 4 Years. Empowered Futures.</h2>
//             <p className="body">
//               Girls gain hands-on experience, work on live projects, interact with industry professionals and receive exposure to real-world opportunities.
//             </p>
//             <CheckList items={COMMON_PROGRAM} tone="maroon" />
//           </div>
//           <div className="split__copy" {...rv("right", 1)}>
//             <HolisticPanel />
//           </div>
//         </div>
//       </section>

//       <section className="section page-section">
//         <div className="container">
//           <SectionHead kicker="Financial Overview" title={<>Per SFT cost: {TOTALS.rate} <span className="pmuted">| {TOTALS.rateUsd}</span></>} lead="Includes construction of all floors, GST, and the required furniture for each floor." />
//           <div className="ptable-wrap" {...rv("up")}>
//             <table className="ptable">
//               <thead>
//                 <tr><th>Floor</th><th>SFT</th><th>Cost (₹/SFT)</th><th>Total (₹ INR)</th><th>Total (USD approx.)</th></tr>
//               </thead>
//               <tbody>
//                 {[...FLOORS].reverse().map((f) => (
//                   <tr key={f.name}>
//                     <td>{f.name}</td><td>{f.sft.toLocaleString("en-IN")}</td><td>₹ 3,600</td><td>₹ {f.inr}</td><td>$ {f.usd}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr><td>Total</td><td>{TOTALS.sft}</td><td>—</td><td>₹ {TOTALS.inr}</td><td>$ {TOTALS.usd}</td></tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       </section>

//       <section className="section page-section page-section--tint" id="contribute">
//         <div className="container">
//           <SectionHead kicker="Be a Part of This Transformation" title="Make a Lasting Difference" lead="Your support can help build a safe, skill-based learning home for underprivileged girls and give them the opportunity for a brighter, independent future." center />
//           <div className="pgive">
//             <div className="pgive__card" {...rv("left")}>
//               <h3 className="serif">Indian contributions</h3>
//               <p>Via Razorpay; eligible for tax benefits under Section 80G.</p>
//               <Image src="/images/donate-qr.png" alt="QR code to contribute to 4S School of Excellence" width={180} height={180} />
//               <a href={DONATE_URL} className="btn btn--navy" target="_blank" rel="noopener noreferrer">
//                 Click here to contribute <ArrowRight size={16} aria-hidden="true" />
//               </a>
//             </div>
//             <div className="pgive__card" {...rv("right", 1)}>
//               <h3 className="serif">Foreign contributions</h3>
//               <dl className="pbank">
//                 {BANK.map(([k, v]) => (
//                   <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
//                 ))}
//               </dl>
//               <p>
//                 A postal address and email of the contributor must be filed with the FCRA. Please send them to{" "}
//                 <a href="mailto:saisevasangh99@gmail.com">saisevasangh99@gmail.com</a>.
//               </p>
//             </div>
//           </div>
//           <p className="pcontact">
//             Contact: 9989928551/52, 8885530204, 9063442080/88 ·{" "}
//             <a href="http://www.saisevasangh.org" target="_blank" rel="noopener noreferrer">www.saisevasangh.org</a>
//           </p>
//         </div>
//       </section>

//       <CtaBanner />
//     </>
//   );
// }
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Presentation } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import HolisticPanel from "@/components/HolisticPanel";
import JourneySteps from "@/components/JourneySteps";
import SkillsAccordion from "@/components/SkillsAccordion";
import { CheckList, SectionHead } from "@/components/ui";
import { BANK, COMMON_PROGRAM, DETAILS, DONATE_URL, FACTS, FLOORS, TOTALS } from "@/lib/project";
import { rv } from "@/lib/reveal";
import SftContribute from "@/components/SftContribute";

/** Put your presentation in /public/docs (a PDF opens right in the browser). */
const PPT_URL = "/docs/4S-School-of-Excellence.pdf";
const VIDEO_ID = "WC6f1zsGX00";
/** Autoplay needs mute=1 (browser rule). loop needs playlist=<same id>. */
const VIDEO_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0`;
/** Hero background banner (in /public/images). */
const HERO_BG = "/images/building.jpg";

const CSS = `
/* hero: banner image behind, light veil on top so the text stays readable */
.ph{position:relative;isolation:isolate;overflow:hidden;padding-block:clamp(40px,6vw,80px);background:#fdf3f2}
.ph__bg{position:absolute;inset:0;z-index:-2}
.ph__veil{position:absolute;inset:0;z-index:-1;background:
  linear-gradient(180deg,rgba(253,252,250,0) 70%,#fdfcfa 100%),
  linear-gradient(90deg,rgba(253,243,242,.96) 0%,rgba(253,243,242,.86) 45%,rgba(253,243,242,.5) 100%)}
.ph__grid{display:grid;grid-template-columns:1.05fr 1fr;gap:clamp(28px,5vw,64px);align-items:center}
.ph__title{margin:0 0 16px;font-size:clamp(1.7rem,3.6vw,2.7rem);line-height:1.18;color:var(--maroon)}
.ph__sub{margin:0 0 16px;font-size:clamp(1.25rem,2.4vw,1.7rem);font-weight:700}
.ph__sub mark{background:linear-gradient(transparent 52%,rgba(246,182,32,.6) 52%);color:var(--maroon-800);padding:0 6px;margin-left:-6px}
.ph__lead{margin:0 0 24px;color:var(--text);font-size:1.05rem;max-width:34rem}
.ph__btns{display:flex;flex-wrap:wrap;gap:12px}
.ph__video{position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:var(--maroon-900);box-shadow:0 20px 48px rgba(92,15,22,.25)}
.ph__video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
@media (max-width:860px){
  .ph__grid{grid-template-columns:1fr}
  .ph__veil{background:
    linear-gradient(180deg,rgba(253,252,250,0) 80%,#fdfcfa 100%),
    rgba(253,243,242,.9)}
}

/* section headings: no star icon; stack + details aligned at the top and the same width */
.page-section .sec-head__icon{display:none}
.pglance{align-items:start}
.pstack{justify-items:stretch}
.pstack__row{width:100% !important;min-width:0}

.pqr{width:fit-content;margin:6px 0 18px;padding:10px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 8px 22px rgba(90,20,20,.1)}
.pqr img{display:block;width:200px;height:auto;border-radius:10px}
`;

export const metadata: Metadata = {
  title: "The Project",
  description:
    "A building that will build 600 futures every year: project details, four skills, holistic approach and how to contribute.",
};

export default function ProjectPage() {
  return (
    <>
      <style>{CSS}</style>
      <section className="ph">
        <div className="ph__bg" aria-hidden="true">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="ph__veil" aria-hidden="true" />

        <div className="container ph__grid">
          <div className="ph__copy" {...rv("up")}>
            <h1 className="ph__title serif">
              A New Initiative of Sai Seva Sangh to Create Practical Training and Professional Development
            </h1>
            <p className="ph__sub serif">
              <mark>Start early. Skill early. Earn early.</mark>
            </p>
            <p className="ph__lead">
              A free, skill-based learning home in Moosapet, Hyderabad for orphan and underprivileged girl children,
              filling the gap between education and employment.
            </p>
            <div className="ph__btns">
              <a href={PPT_URL} className="btn btn--maroon" target="_blank" rel="noopener noreferrer">
                <Presentation size={16} aria-hidden="true" /> View Presentation
              </a>
              <a href={DONATE_URL} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
                Contribute Now <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="ph__video" {...rv("right", 1)}>
            <div className="ph__video" {...rv("right", 1)}>
              <iframe
                src={VIDEO_SRC}
                title="4S School of Excellence video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section className="section page-section" id="sft">
        <div className="container" {...rv("up")}>
          <SftContribute href={DONATE_URL} rateInr={3600} rateUsd={38} />
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
              <div className="pqr"><Image src="/images/donate-qr-clean.png" alt="QR code to contribute to 4S School of Excellence" width={200} height={200} /></div>
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