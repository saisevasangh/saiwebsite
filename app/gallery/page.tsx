import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import GalleryGrid from "@/components/GalleryGrid";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from classrooms, performances and everyday life at Sai Seva Sangh.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        crumb="Gallery"
        image="/images/org.jpg"
        alt="Students smiling in a classroom, working at their desks"
        title="Life at Sai Seva Sangh"
        lead="Classrooms, performances and everyday moments — a look at the life our girls are building, one day at a time."
      />

      <section className="page-section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
