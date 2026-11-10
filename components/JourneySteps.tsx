import type { CSSProperties } from "react";
import { Trophy } from "lucide-react";
import { JOURNEY, JOURNEY_TITLE } from "@/lib/project";
import { rv } from "@/lib/reveal";

/** The 4-step staircase: skill training at 14 → career debut at 18 → higher education or entrepreneurship. */
export default function JourneySteps() {
  return (
    <div className="journey">
      <h3 className="journey__title serif" {...rv("up")}>{JOURNEY_TITLE}</h3>
      <ol className="journey__steps">
        {JOURNEY.map((s) => (
          <li key={s.step} className="jstep" data-reveal="up" style={{ "--c": s.color, "--i": s.step - 1 } as CSSProperties}>
            <div className="jstep__block">
              {s.step === 4 && <Trophy size={34} className="jstep__trophy" aria-hidden="true" />}
              <span>STEP {s.step}</span>
            </div>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
