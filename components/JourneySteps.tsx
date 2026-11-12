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
  { src: "/images/journey/step-1.png", w: 650, h: 458 },
  { src: "/images/journey/step-2.png", w: 642, h: 496 },
  { src: "/images/journey/step-3.png", w: 637, h: 562 },
  { src: "/images/journey/step-4.png", w: 628, h: 667 },
] as const;

/* Front face of each box (px on the box images): only the "STEP N" label lives here now. */
const FACE_TOP = 175;
const FACE_BOTTOM = 36;

const CSS = `
.journey .journey__steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:none;column-gap:0;row-gap:0;max-width:1100px;margin-inline:auto;padding:0;list-style:none}

/* each step = box on top, description underneath */
.journey .jstep{position:relative;display:flex;flex-direction:column;grid-row:auto}
.journey .jstep + .jstep{margin-left:-6%}
.journey .jstep__stage{flex:1;display:flex;align-items:flex-end;padding-top:70px}

.journey .jstep__box{position:relative;width:100%;container-type:inline-size}

/* label centred on the front face of the box */
.journey .jstep__content{
  position:absolute;left:30%;right:6%;
  top:calc(var(--top) * 100%);
  bottom:calc(var(--bot) * 100%);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;
}
.journey .jstep__label{position:static;transform:none;font-family:var(--font-serif);font-weight:800;
  font-size:8cqw;line-height:1;letter-spacing:.06em;color:var(--maroon-900);text-shadow:0 1px 0 rgba(255,255,255,.55)}

/* description sits in the white space below the boxes, same row for all 4 */
.journey .jstep__text{
  margin:18px auto 0;
  padding-inline:8%;
  max-width:26ch;
  text-align:center;
  font-weight:800;line-height:1.35;
  font-size:clamp(.8rem,.55rem+.5vw,1.05rem);
  color:var(--maroon-900);
  text-wrap:balance;
}

.journey .jstep__girl{position:absolute;left:70%;bottom:79%;width:56%}

/* trophy sits on top of the step-4 lid, centred */
.journey .jstep__cup{position:absolute;left:50%;bottom:88%;width:34%;transform:translateX(-50%);z-index:2;pointer-events:none}

@media (max-width:700px){
  .journey .journey__steps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:24px}
  .journey .jstep + .jstep{margin-left:-6%}
  .journey .jstep:nth-child(3){margin-left:0}
  .journey .jstep__girl{left:62%;width:60%}
  .journey .jstep__stage{padding-top:48px}
  .journey .jstep__text{font-size:.8rem;margin-top:12px}
}
`;

/** 4-step staircase: skill training at 14 → career debut at 18 → higher education or entrepreneurship. */
export default function JourneySteps() {
  return (
    <div className="journey">
      <style>{CSS}</style>
      <h3 className="journey__title serif" {...rv("up")}>{JOURNEY_TITLE}</h3>

      <ol className="journey__steps">
        {JOURNEY.map((s) => {
          const box = BOX[s.step - 1];
          return (
            <li
              key={s.step}
              className="jstep"
              data-reveal="up"
              style={
                {
                  "--c": s.color,
                  "--i": s.step - 1,
                  "--top": (FACE_TOP / box.h).toFixed(4),
                  "--bot": (FACE_BOTTOM / box.h).toFixed(4),
                } as CSSProperties
              }
            >
              <div className="jstep__stage">
                <div className="jstep__box">
                  <Image src={box.src} alt="" width={box.w} height={box.h} sizes="(max-width: 700px) 45vw, 22vw" />
                  <div className="jstep__content">
                    <span className="jstep__label">STEP {s.step}</span>
                  </div>

                  {s.step === 1 && (
                    <Image className="jstep__girl" src="/images/journey/girl.png" alt="" width={554} height={691} />
                  )}
                  {s.step === 4 && (
                    <Image className="jstep__cup" src="/images/journey/trophy.png" alt="" width={209} height={313} />
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