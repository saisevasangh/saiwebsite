import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { rv } from "@/lib/reveal";

/** Gold "Together, let's make education a winning game for all!" banner. */
export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__deco cta__deco--a" aria-hidden="true" />
      <div className="cta__deco cta__deco--b" aria-hidden="true" />
      <div className="container cta__inner" {...rv("up")}>
        <p className="cta__text">Together, let&apos;s make education a winning game for all!</p>
        <Link href="/get-involved#donate" className="btn btn--maroon btn--lg">
          Donate Now <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
