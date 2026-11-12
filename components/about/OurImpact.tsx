// import { Users } from "lucide-react";
// import CountUp from "@/components/CountUp";
// import { DanceIcon, KarateIcon, LotusIcon } from "@/components/icons";
// import { IMPACT_STATS, GLANCE_STATS, PROGRAMME_HIGHLIGHTS } from "@/lib/content";
// import { rv } from "@/lib/reveal";

// export default function OurImpact() {
//   return (
//     <section className="impact">
//       <div className="container">
//         <div className="impact__head" {...rv("up")}>
//           <span className="impact__kicker">
//             <Users size={20} strokeWidth={1.8} aria-hidden="true" />
//             <LotusIcon size={18} />
//           </span>
//           <h2 className="h2 serif">Our Impact</h2>
//           <p className="body">Changing Lives, Building Futures</p>
//         </div>

       

//         {/* 35 Years of Impact at a Glance */}
//         <div className="glance" {...rv("up")}>
//           <h3 className="glance__title">35 Years of Impact at a Glance</h3>
//           <ul className="glance__grid">
//             {GLANCE_STATS.map(({ value, label, note, accent }, idx) => (
//               <li key={label} className="glance__cell" {...rv("up", idx)}>
//                 <strong className={`serif glance__value${accent ? " glance__value--gold" : ""}`}>
//                   <CountUp value={value} />
//                 </strong>
//                 <span className="glance__label">
//                   {label}
//                   {note && <> ({note})</>}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Programme Highlights */}
//         <div className="highlights">
//           <h3 className="highlights__title serif" {...rv("up")}>
//             Programme Highlights — Academic Year 2025–2026
//           </h3>
//           <p className="body highlights__intro" {...rv("up")}>
//             This year, Sai Seva Sangh has continued to expand its reach and deepen its impact
//             across multiple dimensions of education and skill development:
//           </p>
//           <ul className="highlights__grid">
//             {PROGRAMME_HIGHLIGHTS.map(({ value, label }, idx) => (
//               <li key={label} className="highlight" {...rv("up", idx % 2)}>
//                 <strong className="serif highlight__value">
//                   <CountUp value={value} />
//                 </strong>
//                 <span className="highlight__label">{label}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Users } from "lucide-react";
import CountUp from "@/components/CountUp";
import { LotusIcon } from "@/components/icons";
import { PROGRAMME_HIGHLIGHTS } from "@/lib/content";
import { rv } from "@/lib/reveal";

/* Self-contained styles in the site's own colours (maroon / orange / peach).
   They override the old blue "glance" + "highlights" rules without editing globals.css. */
const CSS = `
.impact .impact__head{text-align:center}
.impact .impact__head .impact__kicker{justify-content:center}

.impact .glance{margin-top:2.5rem;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 10px 28px rgba(90,20,20,.08)}
.impact .glance__title{margin:0;padding:.95rem 1rem;text-align:center;color:#fff;background:var(--maroon);font-size:1rem;letter-spacing:.08em;text-transform:uppercase}
.impact .glance__grid{display:grid;grid-template-columns:1fr 1fr;margin:0;padding:0;list-style:none}
.impact .glance__main,.impact .glance__alumni{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.impact .glance__main{padding:1.6rem 1rem;background:var(--peach);border-right:1px solid var(--line);gap:.35rem}
.impact .glance__alumni{background:#fff}
.impact .glance__top{width:100%;padding:1.2rem 1rem;display:flex;flex-direction:column;align-items:center;gap:.35rem;border-bottom:1px solid var(--line);background:var(--pink-tint)}
.impact .glance__split{width:100%;display:grid;grid-template-columns:1fr 1fr}
.impact .glance__half{padding:1.1rem 1rem;display:flex;flex-direction:column;align-items:center;gap:.3rem}
.impact .glance__half + .glance__half{border-left:1px solid var(--line)}
.impact .glance__value{font-size:clamp(1.9rem,3.4vw,2.6rem);line-height:1.1;color:var(--maroon)}
.impact .glance__value--big{font-size:clamp(2.4rem,5vw,3.6rem)}
.impact .glance__value--gold{color:var(--orange-600)}
.impact .glance__label{font-size:.92rem;color:var(--text);text-align:center}

.impact .highlights__title{color:var(--maroon);border-bottom:1px solid var(--orange)}
.impact .highlights__grid{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
.impact .highlight{border-bottom-color:var(--line)}
.impact .highlight:nth-child(odd){border-right-color:var(--line)}
.impact .highlight__value{background:var(--peach);color:var(--maroon);border-right-color:var(--line)}

@media (max-width:640px){
  .impact .glance__grid{grid-template-columns:1fr}
  .impact .glance__main{border-right:0;border-bottom:1px solid var(--line)}
  .impact .highlight:nth-child(odd){border-right:0}
}
`;

export default function OurImpact() {
  return (
    <section className="impact">
      <style>{CSS}</style>
      <div className="container">
        <div className="impact__head" {...rv("up")}>
          {/* <span className="impact__kicker">
            <Users size={20} strokeWidth={1.8} aria-hidden="true" />
            <LotusIcon size={18} />
          </span> */}
          <h2 className="h2 serif">Our Impact</h2>
          <p className="body">Changing Lives, Building Futures</p>
        </div>

        {/* 35 Years of Impact at a Glance */}
        <div className="glance" {...rv("up")}>
          <h3 className="glance__title">35 Years of Impact at a Glance</h3>
          <div className="glance__grid">
            <div className="glance__main">
              <strong className="serif glance__value glance__value--big">
                <CountUp value="35,000+" />
              </strong>
              <span className="glance__label">Students Supported (1988–2024)</span>
            </div>

            <div className="glance__alumni">
              <div className="glance__top">
                <strong className="serif glance__value">
                  <CountUp value="3,000+" />
                </strong>
                <span className="glance__label">Alumni</span>
              </div>
              <div className="glance__split">
                <div className="glance__half">
                  <strong className="serif glance__value glance__value--gold">
                    <CountUp value="75%" />
                  </strong>
                  <span className="glance__label">Alumni as Entrepreneurs</span>
                </div>
                <div className="glance__half">
                  <strong className="serif glance__value">
                    <CountUp value="25%" />
                  </strong>
                  <span className="glance__label">Homemakers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programme Highlights */}
        <div className="highlights">
          <h3 className="highlights__title serif" {...rv("up")}>
            Programme Highlights — Academic Year 2025–2026
          </h3>
          <p className="body highlights__intro" {...rv("up")}>
            This year, Sai Seva Sangh has continued to expand its reach and deepen its impact
            across multiple dimensions of education and skill development:
          </p>
          <ul className="highlights__grid">
            {PROGRAMME_HIGHLIGHTS.map(({ value, label }, idx) => (
              <li key={label} className="highlight" {...rv("up", idx % 2)}>
                <strong className="serif highlight__value">
                  <CountUp value={value} />
                </strong>
                <span className="highlight__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}