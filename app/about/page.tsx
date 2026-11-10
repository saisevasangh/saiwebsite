import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageBlocks from "@/components/PageBlocks";
import { ABOUT_STORY } from "@/lib/pages/about";
import {
  AboutHero,
  OurStory,
  MissionVision,
  AboutOrganisation,
  OurImpact,
  WhyWeMatter,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sai Seva Sangh is a registered charitable organization working with girl children from low-income communities & orphans in the field of education, empowering women since 33 years.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <AboutOrganisation />
      <OurImpact />
      <WhyWeMatter />

      <section className="page-article" id="our-journey">
        <div className="container page-article__inner">
          <h2 className="h2 serif page-article__title">Our Journey</h2>
          <PageBlocks blocks={ABOUT_STORY.blocks} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
