import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="stub">
      <div className="container stub__inner">
        <Images size={40} strokeWidth={1.5} className="stub__icon" aria-hidden="true" />
        <h1 className="h2 serif">Gallery</h1>
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
