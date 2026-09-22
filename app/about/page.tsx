import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sai Seva Sangh is a registered charitable organization working with girl children from low-income communities & orphans in the field of education, empowering women since 33 years.",
};

export default function AboutPage() {
  return <AboutContent />;
}
