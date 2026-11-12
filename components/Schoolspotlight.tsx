// import { ArrowRight } from "lucide-react";

// export const SCHOOL_SITE = "https://saiwebsite-zeta.vercel.app/project/";
// export const SCHOOL_VIDEO = "https://www.youtube.com/watch?v=WC6f1zsGX00&t=1s";

// /** YouTube Short: https://www.youtube.com/shorts/oXq3n5CC7Io */
// const SHORT_ID = "oXq3n5CC7Io";
// /** Autoplay needs mute=1 (browser rule). loop needs playlist=<same id>. */
// const SHORT_SRC = `https://www.youtube.com/embed/${SHORT_ID}?autoplay=1&mute=1&loop=1&playlist=${SHORT_ID}&playsinline=1&rel=0`;

// const FACTS = [
//   "Duration: 4 Years",
//   "4 Skills",
//   "Age Group: 14 Years to 18 Years",
//   "One-Year Corporate Exposure",
//   "Only for Orphan & Underprivileged Girl Children",
//   "Totally Free of Cost",
// ];

// /* Self-contained styles so this component works without touching globals.css */
// const CSS = `
// .spot .spot__head{text-align:center;max-width:760px;margin:0 auto clamp(24px,4vw,40px)}
// .spot .spot__head .section-title{margin:0}
// .spot .spot__sub{margin:10px 0 0;color:var(--muted);font-size:1.05rem;text-align:center}
// .spot .spot__grid{display:grid;grid-template-columns:auto 1fr;align-items:stretch;gap:clamp(28px,5vw,64px);width:100%}
// .spot .spot__video{position:relative;width:clamp(240px,22vw,280px);aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:var(--maroon-900);box-shadow:0 18px 44px rgba(92,15,22,.22)}
// .spot .spot__video iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
// .spot .spot__copy{display:flex;flex-direction:column;justify-content:center}
// .spot .spot__big{margin:0 0 18px;font-size:clamp(1.4rem,2.6vw,2rem);line-height:1.25;color:var(--maroon-800)}
// .spot .spot__big em{font-style:normal;color:var(--orange-600)}
// .spot .spot__list{gap:10px;margin-bottom:20px}
// .spot .spot__list li{font-size:1.02rem}
// @media (max-width:860px){
//   .spot .spot__grid{grid-template-columns:1fr}
//   .spot .spot__video{width:min(100%,300px);margin-inline:auto}
// }
// `;

// /** Centred heading + subheading, then vertical video (left) and text + button (right). */
// export default function SchoolSpotlight() {
//   return (
//     <section className="spot" id="4s-school" aria-labelledby="spot-title">
//       <style>{CSS}</style>
//       <div className="container">
//         <div className="spot__head">
//           <h2 id="spot-title" className="section-title serif">
//             New Initiative – 4S School of Excellence
//           </h2>
//           <p className="spot__sub">
//             To create dedicated spaces for practical training and professional development
//           </p>
//         </div>

//         <div className="spot__grid">
//           <div className="spot__video">
//             <iframe
//               src={SHORT_SRC}
//               title="A New Initiative – 4S School of Excellence | Sai Seva Sangh"
//               loading="lazy"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               referrerPolicy="strict-origin-when-cross-origin"
//             />
//           </div>

//           <div className="spot__copy">
//             <p className="spot__big serif">
//               One building. 4 skills. <em>Countless possibilities</em>. 600 futures every year!
//             </p>
//             <ul className="spot__list">
//               {FACTS.map((f) => (
//                 <li key={f}>{f}</li>
//               ))}
//             </ul>
//             <p className="spot__motto">
//               Start Early. Skill Early. <b>Earn Early.</b>
//             </p>
//             <div className="spot__btns">
//               <a className="btn btn--maroon" href={SCHOOL_SITE} target="_blank" rel="noopener noreferrer">
//                 Know more <ArrowRight size={16} aria-hidden="true" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight, Download } from "lucide-react";

export const SCHOOL_SITE = "https://saiwebsite-zeta.vercel.app/project/";
export const SCHOOL_VIDEO = "https://www.youtube.com/watch?v=WC6f1zsGX00&t=1s";
/** Put the file in /public, e.g. public/4s-school-presentation.pdf */
export const SCHOOL_PRESENTATION = "#";

/** YouTube Short: https://www.youtube.com/shorts/oXq3n5CC7Io */
const SHORT_ID = "oXq3n5CC7Io";
/** Autoplay needs mute=1 (browser rule). loop needs playlist=<same id>. */
const SHORT_SRC = `https://www.youtube.com/embed/${SHORT_ID}?autoplay=1&mute=1&loop=1&playlist=${SHORT_ID}&playsinline=1&rel=0`;

const FACTS = [
  "Duration: 4 Years",
  "4 Skills",
  "Age Group: 14 Years to 18 Years",
  "One-Year Corporate Exposure",
  "Only for Orphan & Underprivileged Girl Children",
  "Totally Free of Cost",
];

/* Self-contained styles so this component works without touching globals.css */
const CSS = `
.spot .spot__head{text-align:center;max-width:760px;margin:0 auto clamp(24px,4vw,40px)}
.spot .spot__head .section-title{margin:0}
.spot .spot__sub{margin:10px 0 0;color:var(--muted);font-size:1.05rem;text-align:center}
.spot .spot__grid{display:grid;grid-template-columns:auto 1fr;align-items:stretch;gap:clamp(28px,5vw,64px);width:100%}
.spot .spot__video{position:relative;width:clamp(240px,22vw,280px);aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:var(--maroon-900);box-shadow:0 18px 44px rgba(92,15,22,.22)}
.spot .spot__video iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
.spot .spot__copy{display:flex;flex-direction:column;justify-content:center}
.spot .spot__big{margin:0 0 18px;font-size:clamp(1.4rem,2.6vw,2rem);line-height:1.25;color:var(--maroon-800)}
.spot .spot__big em{font-style:normal;color:var(--orange-600)}
.spot .spot__list{gap:10px;margin-bottom:20px}
.spot .spot__list li{font-size:1.02rem}
.spot .spot__btns{display:flex;flex-wrap:wrap;align-items:center;gap:12px}
.spot .spot__btns .btn{display:inline-flex;align-items:center;gap:8px}
.spot .spot__btns .btn--outline{
  padding:.8rem 1.4rem;
  background:transparent;
  color:var(--maroon-800);
  font-weight:600;
  text-decoration:none;
  border:2px solid var(--maroon-800);
  border-radius:999px;
  transition:background .2s ease,color .2s ease,transform .2s ease;
}
.spot .spot__btns .btn--outline:hover{background:var(--maroon-800);color:#fff;transform:translateY(-2px)}
.spot .spot__btns .btn--outline:focus-visible{outline:3px solid rgba(92,15,22,.35);outline-offset:3px}
@media (max-width:860px){
  .spot .spot__grid{grid-template-columns:1fr}
  .spot .spot__video{width:min(100%,300px);margin-inline:auto}
}
`;

/** Centred heading + subheading, then vertical video (left) and text + buttons (right). */
export default function SchoolSpotlight() {
  return (
    <section className="spot" id="4s-school" aria-labelledby="spot-title">
      <style>{CSS}</style>
      <div className="container">
        <div className="spot__head">
          <h2 id="spot-title" className="section-title serif">
            New Initiative – 4S School of Excellence
          </h2>
          <p className="spot__sub">
            To create dedicated spaces for practical training and professional development
          </p>
        </div>

        <div className="spot__grid">
          <div className="spot__video">
            <iframe
              src={SHORT_SRC}
              title="A New Initiative – 4S School of Excellence | Sai Seva Sangh"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="spot__copy">
            <p className="spot__big serif">
              One building. 4 skills. <em>Countless possibilities</em>. 600 futures every year!
            </p>
            <ul className="spot__list">
              {FACTS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="spot__motto">
              Start Early. Skill Early. <b>Earn Early.</b>
            </p>
            <div className="spot__btns">
              <a className="btn btn--maroon" href={SCHOOL_SITE} target="_blank" rel="noopener noreferrer">
                Know more <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="btn btn--outline"
                href={SCHOOL_PRESENTATION}
                download="4S-School-of-Excellence-Presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} aria-hidden="true" /> Brochure 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}