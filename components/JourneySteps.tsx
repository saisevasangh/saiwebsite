// import type { CSSProperties } from "react";
// import { Trophy } from "lucide-react";
// import { JOURNEY, JOURNEY_TITLE } from "@/lib/project";
// import { rv } from "@/lib/reveal";

// /** The 4-step staircase: skill training at 14 → career debut at 18 → higher education or entrepreneurship. */
// export default function JourneySteps() {
//   return (
//     <div className="journey">
//       <h3 className="journey__title serif" {...rv("up")}>{JOURNEY_TITLE}</h3>
//       <ol className="journey__steps">
//         {JOURNEY.map((s) => (
//           <li key={s.step} className="jstep" data-reveal="up" style={{ "--c": s.color, "--i": s.step - 1 } as CSSProperties}>
//             <div className="jstep__block">
//               {s.step === 4 && <Trophy size={34} className="jstep__trophy" aria-hidden="true" />}
//               <span>STEP {s.step}</span>
//             </div>
//             <p>{s.text}</p>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

import type { CSSProperties } from "react";
import Image from "next/image";
import { JOURNEY, JOURNEY_TITLE } from "@/lib/project";
import { rv } from "@/lib/reveal";

// natural sizes of the box images, so they keep their proportions
const BOX = [
  { src: "/images/journey/step-1.png", w: 650, h: 460 },
  { src: "/images/journey/step-2.png", w: 640, h: 500 },
  { src: "/images/journey/step-3.png", w: 630, h: 565 },
  { src: "/images/journey/step-4.png", w: 625, h: 670 },
] as const;

/** 4-step staircase: skill training at 14 → career debut at 18 → higher education or entrepreneurship. */
export default function JourneySteps() {
  return (
    <div className="journey">
      <h3 className="journey__title serif" {...rv("up")}>{JOURNEY_TITLE}</h3>

      <ol className="journey__steps">
        {JOURNEY.map((s) => {
          const box = BOX[s.step - 1];
          return (
            <li
              key={s.step}
              className="jstep"
              data-reveal="up"
              style={{ "--c": s.color, "--i": s.step - 1 } as CSSProperties}
            >
              <div className="jstep__stage">
                <div className="jstep__box">
                  <Image src={box.src} alt="" width={box.w} height={box.h} sizes="(max-width: 700px) 45vw, 22vw" />
                  <span className="jstep__label">STEP {s.step}</span>

                  {s.step === 1 && (
                    <Image className="jstep__girl" src="/images/journey/girl.png" alt="" width={540} height={700} />
                  )}
                  {s.step === 4 && (
                    <Image className="jstep__cup" src="/images/journey/trophy.png" alt="" width={205} height={315} />
                  )}
                </div>
              </div>
              <p className="jstep__text">{s.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}