import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3 } from "lucide-react";

export const metadata: Metadata = { title: "Impact" };

export default function ImpactPage() {
  return (
    <section className="stub">
      <div className="container stub__inner">
        <BarChart3 size={40} strokeWidth={1.5} className="stub__icon" aria-hidden="true" />
        <h1 className="h2 serif">Impact</h1>
        <p className="body">
          This page hasn&apos;t been designed yet. Share a mockup for it and it will be built in
          the same style as the About Us page.
        </p>
        <Link href="/about" className="link-arrow">
          <ArrowLeft size={15} aria-hidden="true" /> Back to About Us
        </Link>
      </div>
    </section>
  );
}
