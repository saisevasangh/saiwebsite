/**
 * All page text and data lives here so pages stay small.
 * Edit copy, add/remove stats, or swap image paths (files in /public/images).
 */
import {
  BookOpen,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Music2,
  Target,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export const ORG_NAME = "Sai Seva Sangh";
export const TAGLINE = "Love All, Serve All";
export const EMAIL = "info@saisevasangh.org";
export const PHONE = "+91 40 2377 2788";
export const ADDRESS = "Moosapet, Hyderabad, India";
export const WEBSITE = "www.saisevasangh.org";
export const REG_NO = "1961/88";

export const SOCIALS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "X", icon: "x", href: "#" },
] as const;

export const FOOTER_STATS = [
  { value: "33+", label: "Years of Service" },
  { value: "2,000+", label: "Beneficiaries" },
  { value: "50+", label: "Higher Education" },
  { value: "250+", label: "Current Children" },
] as const;

export const MVV = [
  {
    title: "Our Mission",
    icon: "target",
    text: "To provide quality education, residential care, healthcare, nutrition, skill development and spiritual & value-based learning to orphaned and underprivileged girls, empowering them to lead a self-reliant life.",
  },
  {
    title: "Our Vision",
    icon: "eye",
    text: "To create a society where every girl is educated, empowered and enlightened, realising her potential and contributing to a better tomorrow.",
  },
] as const;

export const VALUES = ["Compassion", "Integrity", "Excellence", "Service", "Empowerment"];

export const CERTIFICATIONS = ["12A", "80G", "CSR", "FCRA"];

/** "dance" and "karate" render as custom silhouette icons — see components/icons.tsx. */
export type ImpactIcon = LucideIcon | "dance" | "karate";

export const IMPACT_STATS: { value: string; label: string; note?: string; icon: ImpactIcon }[] = [
  { value: "2,000+", label: "Beneficiaries", note: "Latest CSR Update", icon: Users },
  { value: "200+", label: "School Education", note: "Grades 6–10", icon: BookOpen },
  { value: "50+", label: "Higher Education", note: "College & Beyond", icon: GraduationCap },
  { value: "90,000", label: "Meals Served", icon: Utensils },
  { value: "45", label: "Bharatanatyam Dancers", icon: "dance" },
  { value: "30", label: "Carnatic Musicians", icon: Music2 },
  { value: "40", label: "Karate Trainees", icon: "karate" },
  { value: "10", label: "Shooters", note: "Sri Satya Sai Karate-Do", icon: Target },
];
