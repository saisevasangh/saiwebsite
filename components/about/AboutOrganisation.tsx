// import { Users } from "lucide-react";
// import { CERTIFICATIONS, REG_NO } from "@/lib/content";
// import { rv } from "@/lib/reveal";

// /** About the Organisation: looping Governor's-visit video + summary + registration badges. Used on Home and About. */
// export default function AboutOrganisation() {
//   return (
//     <section className="org section">
//       <div className="container org__grid">
//         <figure className="org__figure" {...rv("left")}>
//           <iframe
//   src="https://www.youtube.com/embed/Ek-LaZxWKOE?autoplay=1&mute=1&loop=1&playlist=Ek-LaZxWKOE&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
//   title="About the Organisation"
//   className="org__video"
//   loading="lazy"
//   allow="autoplay; encrypted-media"
// />
//         </figure>

//         <div className="org__copy" {...rv("up", 1)}>
//           {/* <span className="org__kicker">
//             <Users size={22} strokeWidth={1.8} aria-hidden="true" />
//             <h2 className="h2 serif">About the Organisation</h2>
//           </span> */}

//           <p className="body" style={{ textAlign: "justify" }}>
//   For the past <strong>35 years</strong>, the organization has been dedicated
//   to empowering orphaned and underprivileged girl children from low-income
//   communities and rural backgrounds. We provide{" "}
//   <strong>free, holistic education</strong> along with safe residential
//   facilities, focusing on skill development and creating a nurturing
//   environment that enables girls to grow with{" "}
//   <strong>dignity, confidence and purpose</strong>.
// </p>

//           <ul className="badges">
//             {CERTIFICATIONS.map((c) => (
//               <li key={c} className="badge">
//                 <strong>{c}</strong>
//                 <span>Registered</span>
//               </li>
//             ))}
//             <li className="badge badge--reg">
//               <strong>Reg. No.</strong>
//               <span>{REG_NO}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { CERTIFICATIONS, REG_NO } from "@/lib/content";
// import { rv } from "@/lib/reveal";

// /** About the Organisation: video + summary on top, full-width registration cards below. Used on Home and About. */
// export default function AboutOrganisation() {
//   return (
//     <section className="org section">
//       <div className="container">
//         <div className="org__grid">
//           <figure className="org__figure" {...rv("left")}>
//             <iframe
//               src="https://www.youtube.com/embed/Ek-LaZxWKOE?autoplay=1&mute=1&loop=1&playlist=Ek-LaZxWKOE&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
//               title="About the Organisation"
//               className="org__video"
//               loading="lazy"
//               allow="autoplay; encrypted-media"
//             />
//           </figure>

//           <div className="org__copy" {...rv("up", 1)}>
//             <p className="body" style={{ textAlign: "justify" }}>
//               For over <strong>four decades</strong>, the organization has been dedicated to empowering orphaned and
//               underprivileged girl children from low-income communities and rural backgrounds. We provide{" "}
//               <strong>free, holistic education</strong> along with safe residential facilities with nutrition and health care, focusing on skill
//               development and creating a nurturing environment that enables girls to grow with{" "}
//               <strong>dignity, confidence and purpose</strong>.
//             </p>
//           </div>
//         </div>

//         <ul className="badges badges--row" {...rv("up", 2)}>
//           {CERTIFICATIONS.map((c) => (
//             <li key={c} className="badge">
//               <strong>{c}</strong>
//               <span>Registered</span>
//             </li>
//           ))}
//           <li className="badge badge--reg">
//             <strong>Reg. No.</strong>
//             <span>{REG_NO}</span>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

import { CERTIFICATIONS, REG_NO, BROCHURE_URL } from "@/lib/content";
import { rv } from "@/lib/reveal";

/** About the Organisation: video + summary on top, full-width registration cards below. Used on Home and About. */
export default function AboutOrganisation() {
  return (
    <section className="org section">
      <div className="container">
        <div className="org__grid">
          <figure className="org__figure" {...rv("left")}>
            <iframe
              src="https://www.youtube.com/embed/Ek-LaZxWKOE?autoplay=1&mute=1&loop=1&playlist=Ek-LaZxWKOE&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
              title="About the Organisation"
              className="org__video"
              loading="lazy"
              allow="autoplay; encrypted-media"
            />
          </figure>

          <div className="org__copy" {...rv("up", 1)}>
            <p className="body" style={{ textAlign: "justify" }}>
              For more than <strong>35 years</strong>, the organization has been dedicated to empowering orphaned and
              underprivileged girl children from low-income communities and rural backgrounds. We provide{" "}
              <strong>free, holistic education</strong> along with safe residential facilities with nutrition and health care, focusing on skill
              development and creating a nurturing environment that enables girls to grow with{" "}
              <strong>dignity, confidence and purpose</strong>.
            </p>

           
          </div>
        </div>

        <ul className="badges badges--row" {...rv("up", 2)}>
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

 <a
              href={BROCHURE_URL}
              download="Organisation-Brochure.pdf"
              className="org__download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Brochure
            </a>

      </div>
    </section>
  );
}