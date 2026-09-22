import type { ReactNode } from "react";
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
