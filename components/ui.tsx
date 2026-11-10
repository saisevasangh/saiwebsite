import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { LotusIcon } from "@/components/icons";
import { rv } from "@/lib/reveal";

/** Section heading block used across the inner pages: lotus icon + eyebrow + h2 + lead. */
export function SectionHead({
  kicker,
  title,
  lead,
  center,
}: {
  kicker: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`sec-head${center ? " sec-head--center" : ""}`} {...rv("up")}>
      <LotusIcon size={26} className="sec-head__icon" />
      <p className="eyebrow eyebrow--orange">{kicker}</p>
      <h2 className="h2 serif">{title}</h2>
      {lead && <p className="body">{lead}</p>}
    </div>
  );
}

/** Three short "spark" strokes used as hand-drawn accents. */
export function Sparks({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <path d="M6 30 L15 24" />
      <path d="M16 15 L21 7" />
      <path d="M30 12 L40 10" />
    </svg>
  );
}

/** Small curved hand-drawn arrow. */
export function CurlArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4 C 6 18, 14 26, 32 30" />
      <path d="M25 24 L33 30 L24 35" />
    </svg>
  );
}

/** Accent word with a self-drawing underline (used in headings). */
export function ScriptWord({ children }: { children: ReactNode }) {
  return (
    <span className="script-word">
      {children}
      <svg className="script-word__line" viewBox="0 0 220 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <path d="M2 9 C 60 4, 150 2, 218 3" pathLength={1} />
      </svg>
    </span>
  );
}

/** Tick-mark list. `tone` picks the colour of the round tick. */
export function CheckList({ items, tone }: { items: readonly string[]; tone: "maroon" | "blue" | "purple" }) {
  return (
    <ul className={`checklist checklist--${tone}`}>
      {items.map((item, i) => (
        <li key={item} {...rv("left", i)}>
          <span className="checklist__mark" aria-hidden="true">
            <Check size={11} strokeWidth={3.4} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
