export const DONATE_URL = "https://linktr.ee/acc.saisevasangh99";

export const FLOORS = [
  { name: "Fourth Floor", sft: 3897, inr: "1,40,29,200", usd: "148,086" },
  { name: "Third Floor", sft: 3897, inr: "1,40,29,200", usd: "148,086" },
  { name: "Second Floor", sft: 3897, inr: "1,40,29,200", usd: "148,086" },
  { name: "First Floor", sft: 3897, inr: "1,40,29,200", usd: "148,086" },
  { name: "Stilt Floor", sft: 3789, inr: "1,36,40,400", usd: "143,982" },
  { name: "Cellar", sft: 4144, inr: "1,49,18,400", usd: "157,472" },
] as const;

export const TOTALS = { sft: "23,521", inr: "8,46,75,600", usd: "893,768", rate: "₹3,600", rateUsd: "$38" };

export const FACTS = [
  { label: "Duration", value: "4 Years" },
  { label: "Age group", value: "14–18 years" },
  { label: "Annual impact", value: "600 girls" },
  { label: "Corporate exposure", value: "1 Year" },
  { label: "Cost to students", value: "Free" },
  { label: "Completion", value: "Dec 2027" },
] as const;

export const DETAILS = [
  ["Project", "4S School of Excellence"],
  ["Location", "Moosapet, Hyderabad"],
  ["Structure", "Approved by GHMC"],
  ["Configuration", "Cellar + Stilt + 4 upper floors (6 levels)"],
  ["Total built-up area", "23,521 SFT"],
  ["Scheduled completion", "December 2027"],
] as const;

export type Course = {
  id: string;
  /** Short label shown on the collapsed strip. */
  label: string;
  title: string;
  image: string;
  alt: string;
  accent: string;
  tagline?: string;
  /** Add the fields below to fill in a course; anything left out is simply not shown. */
  diploma?: string;
  skillSet?: string;
  duration?: string[];
  partners?: string;
  marketFee?: string;
  careers?: string[];
  placement?: string;
};

export const COURSES: Course[] = [
  {
    id: "digital-marketing",
    label: "Digital Marketing & Cybersecurity",
    title: "Digital Marketing & Cybersecurity",
    image: "/images/program-digital.jpg",
    alt: "Students working on laptops",
    accent: "#730f1b",
    tagline: "Details for this course will be added soon.",
  },
  {
    id: "animation",
    label: "Motion Graphics & Graphic Designing",
    title: "Motion Graphics & Graphic Designing",
    image: "/images/program-animation.jpg",
    alt: "A student creating digital artwork",
    accent: "#5b3fc4",
    diploma: "AI Driven Diploma in Animation for 50 Students",
    skillSet: "Graphic Designing, VFX, 3D modeling, Photo and Video Editing.",
    duration: ["4 Years", "3 Years Class Room Training", "6 Months Internship", "6 Months Industrial Training Program"],
    partners: "CG Creed, HAMSTECH, JNAFAU",
    marketFee: "1,50,000",
    careers: [
      "Media & Entertainment Companies",
      "Advertising & Creative Agencies",
      "Digital Marketing & IT Companies",
      "Educational Institutions & E-Learning Platforms",
      "Production Studios & Freelancing",
      "Entrepreneurship",
    ],
    placement: "3 to 5 Lakhs Per Annum",
  },
  {
    id: "performing-arts",
    label: "Performing Arts (Dance & Music)",
    title: "Performing Arts (Dance & Music)",
    image: "/images/program-arts.jpg",
    alt: "Students performing classical dance",
    accent: "#e5533f",
    diploma: "Diploma in Performing Arts for 50 Students",
    skillSet: "Bharatanatyam, Carnatic Music, Make UP & Costume Designing and Musical Instruments.",
    duration: ["4 Years", "4 Years Class Room Training", "Stage Performances"],
    partners: "Varna Arts Academy, Bridge Academy, Tyagaraja Music College",
    marketFee: "2,50,000",
    careers: [
      "Cultural academies & International Schools as Dance & Music Teachers",
      "Film and TV industry",
      "Event management companies",
      "Recording studios",
      "Theatre groups",
      "Eligible for Bachelor of Performing Arts (BPA)",
    ],
    placement: "5 to 6 Lakhs Per Annum",
  },
  {
    id: "nutrition",
    label: "Nutrition & Hospitality",
    title: "Nutrition & Hospitality",
    image: "/images/program-wellness.jpg",
    alt: "Students learning nutrition and hospitality",
    accent: "#2e9c62",
    diploma: "Diploma in Nutrition & Dietetics for 50 Students",
    skillSet: "Understanding human physiology, disease and Diet Menu Planning. Cooking and serving, Primary Health Care.",
    duration: ["4 Years", "3 Years Class Room Training", "1 Year Internship"],
    partners: "Nutriline - The Wellness Centre, NIN (National Institute of Nutrition), Home Science College of HYD",
    marketFee: "2,00,000",
    careers: [
      "Health & wellness centers",
      "Fitness studios",
      "Hospitals & nutrition clinics",
      "Food & beverage companies",
      "Old age homes and wellness resorts",
    ],
    placement: "3 to 4 Lakhs Per Annum",
  },
];

export const JOURNEY_TITLE = "Empowering 200 Beneficiaries Annually at Zero Fees";

export const JOURNEY = [
  { step: 1, text: "Skill training begins at 14 years.", color: "#c2307a" },
  { step: 2, text: "4-year program with professional training.", color: "#2a2a4a" },
  { step: 3, text: "Career debut, by the age of 18 years.", color: "#2fa9b0" },
  { step: 4, text: "Opportunities to pursue either higher education or entrepreneurship independently.", color: "#e5533f" },
] as const;

export const COMMON_PROGRAM = [
  "Public Speaking, Presentation Skills & Behavioral Etiquette",
  "Artificial Intelligence",
  "Introduction to Basic Accounts & Financial Management",
  "Time Management & Self-Discipline",
] as const;

export const BANK = [
  ["Account Name", "SAI SEVA SANGH"],
  ["Account No", "40133602723"],
  ["Bank Name", "State Bank of India"],
  ["Branch Name", "New Delhi Main Branch"],
  ["IFSC Code", "SBIN0000691"],
  ["SWIFT", "SBININBB104"],
] as const;
