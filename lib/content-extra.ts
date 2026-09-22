/**
 * Content for the pages beyond About Us: Our Programs, Impact, Gallery,
 * News & Events, Get Involved. Kept separate from content.ts (the About Us
 * data) so each file stays a manageable size.
 */
import {
  BookHeart,
  BookOpen,
  Compass,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartPulse,
  Home as HomeIcon,
  Megaphone,
  Sparkles,
  UtensilsCrossed,
  Users,
} from "lucide-react";
/* ------------------------------- Programs -------------------------------- */

type Program = {
  slug: string;
  title: string;
  icon: typeof BookOpen;
  image: string;
  alt: string;
  summary: string;
  description: string;
  stat?: { value: string; label: string };
};

export const PROGRAMS: Program[] = [
  {
    slug: "education-support",
    title: "Education Support",
    icon: BookOpen,
    image: "/images/org.jpg",
    alt: "Students smiling in a classroom, working at their desks",
    summary: "Free schooling, tuition and study support from Grade 6 onward.",
    description:
      "Every girl we support receives free, quality schooling from Grade 6 through Grade 10, along with tuition support, study materials and mentoring so she can keep pace at school and go on to higher studies.",
    stat: { value: "200+", label: "in school education" },
  },
  {
    slug: "higher-education-careers",
    title: "Higher Education & Careers",
    icon: GraduationCap,
    image: "/images/story.jpg",
    alt: "Sai Seva Sangh students and staff posing together in traditional dress",
    summary: "College scholarships and career guidance beyond Grade 10.",
    description:
      "Girls who complete school are supported through college and vocational training, with scholarships, career counselling and mentorship to help them choose and pursue a path they are excited about.",
    stat: { value: "50+", label: "in higher education" },
  },
  {
    slug: "residential-care",
    title: "Residential Care",
    icon: HomeIcon,
    image: "/images/hero.jpg",
    alt: "Four smiling girls in school uniform reading a book together outdoors",
    summary: "A safe, family-like home for orphaned and underprivileged girls.",
    description:
      "For girls with nowhere else to turn, we provide safe residential care in a family-like environment, with house parents, structure and the stability every child needs to grow up feeling secure.",
  },
  {
    slug: "healthcare-nutrition",
    title: "Healthcare & Nutrition",
    icon: HeartPulse,
    image: "/images/why.jpg",
    alt: "A girl in a yellow uniform reading",
    summary: "Regular checkups and nutritious meals, every single day.",
    description:
      "Regular health checkups, preventive care and nutritious daily meals ensure every girl in our care is healthy enough to learn, play and grow. We serve tens of thousands of meals every year.",
    stat: { value: "90,000", label: "meals served" },
  },
  {
    slug: "skill-development",
    title: "Skill Development",
    icon: Sparkles,
    image: "/images/story.jpg",
    alt: "Sai Seva Sangh students in traditional dress after a performance",
    summary: "Bharatanatyam, Carnatic music and self-defence training.",
    description:
      "Beyond academics, girls train in classical Bharatanatyam dance and Carnatic music, and learn self-defence through our Sri Satya Sai Karate-Do program, building discipline, confidence and talents they can carry for life.",
    stat: { value: "115+", label: "in dance, music & karate" },
  },
  {
    slug: "spiritual-value-education",
    title: "Spiritual & Value Education",
    icon: BookHeart,
    image: "/images/org.jpg",
    alt: "Students smiling in a classroom",
    summary: "Character, compassion and values woven into everyday life.",
    description:
      "Alongside their studies, girls take part in spiritual and value-based learning rooted in compassion, integrity and service, helping them grow into confident, grounded young women.",
  },
];

/* --------------------------------- Impact --------------------------------- */

export const PATHWAY = [
  {
    title: "Identify & Enrol",
    text: "We reach orphaned and underprivileged girls in low-income and rural communities and welcome them in, free of cost.",
    icon: Compass,
  },
  {
    title: "Educate & Nurture",
    text: "Free schooling, residential care, healthcare and nutrition give every girl a stable foundation to grow from.",
    icon: BookOpen,
  },
  {
    title: "Empower & Guide",
    text: "Skill development and spiritual & value education build the confidence and character to match her ability.",
    icon: Sparkles,
  },
  {
    title: "Launch Self-Reliant Futures",
    text: "Higher education and career guidance carry her into a self-reliant, independent life of her own choosing.",
    icon: GraduationCap,
  },
] as const;

export const TESTIMONIALS = [
  {
    image: "/images/story.jpg",
    alt: "Sai Seva Sangh students and staff posing together in traditional dress",
    quote:
      "Sai Seva Sangh didn't just educate me, it gave me a family. I am the first person in my family to go to college, and now I want to become a teacher so I can do the same for other girls.",
    name: "A student, Higher Education program",
  },
  {
    image: "/images/org.jpg",
    alt: "Students smiling in a classroom, working at their desks",
    quote:
      "Every meal, every lesson, every kind word here has told me I matter. I used to be shy in class. Now I help younger girls with their homework.",
    name: "A student, School Education program",
  },
  {
    image: "/images/why.jpg",
    alt: "A girl in a yellow uniform reading",
    quote:
      "As a house parent, I've watched girls arrive frightened and unsure, and leave years later confident, capable, and ready for the world. That change is what keeps us going.",
    name: "A staff member, Residential Care",
  },
] as const;

/* -------------------------------- Gallery ---------------------------------- */

export type GalleryCategory = "Education" | "Culture & Arts" | "Campus Life";

export const GALLERY_CATEGORIES: GalleryCategory[] = ["Education", "Culture & Arts", "Campus Life"];

export const GALLERY = [
  {
    src: "/images/hero.jpg",
    alt: "Four smiling girls in school uniform reading a book together outdoors",
    width: 1258,
    height: 360,
    category: "Education" as GalleryCategory,
    caption: "Reading together after school",
  },
  {
    src: "/images/org.jpg",
    alt: "Students smiling in a classroom, working at their desks",
    width: 652,
    height: 350,
    category: "Education" as GalleryCategory,
    caption: "A classroom at Sai Seva Sangh",
  },
  {
    src: "/images/story.jpg",
    alt: "Sai Seva Sangh students and staff posing together in traditional dress",
    width: 580,
    height: 288,
    category: "Culture & Arts" as GalleryCategory,
    caption: "Bharatanatyam students with their teacher",
  },
  {
    src: "/images/why.jpg",
    alt: "A girl in a yellow uniform reading, with the words Educate, Empower, Enlighten overlaid",
    width: 832,
    height: 240,
    category: "Campus Life" as GalleryCategory,
    caption: "Educate. Empower. Enlighten.",
  },
] as const;

/* -------------------------------- News ------------------------------------ */

export type PostCategory = "Impact" | "Programs" | "Community" | "Milestone";

export const POST_STYLE: Record<PostCategory, { tone: string; icon: typeof BookOpen }> = {
  Impact: { tone: "maroon", icon: Sparkles },
  Programs: { tone: "orange", icon: BookOpen },
  Community: { tone: "gold", icon: Handshake },
  Milestone: { tone: "rose", icon: GraduationCap },
};

export const POSTS: {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  date?: string;
  body: string[];
}[] = [
  {
    slug: "33-years-of-service",
    title: "33 years of Love All, Serve All",
    category: "Milestone",
    excerpt:
      "What began as a small initiative has grown into a movement that has changed thousands of young lives.",
    body: [
      "Sai Seva Sangh was founded with a simple yet profound vision: to bring hope, education and opportunity to every girl child, especially those from underprivileged communities and orphanages.",
      "What began 33 years ago as a small initiative has grown into a committed movement, transforming thousands of young lives through holistic support and value-based education. Today, more than 2,000 girls have passed through our programs, and over 250 currently call Sai Seva Sangh home.",
    ],
  },
  {
    slug: "from-classroom-to-college",
    title: "From classroom to college: our higher education program",
    category: "Programs",
    excerpt: "More than 50 of our girls are now pursuing higher education and vocational training.",
    body: [
      "Free schooling is only the first step. Girls who complete Grade 10 at Sai Seva Sangh are supported through college and vocational training with scholarships, career counselling and mentorship.",
      "More than 50 girls are currently in higher education, pursuing everything from teaching and nursing to design and business, each one the first in her family to study this far.",
    ],
  },
  {
    slug: "dance-music-karate",
    title: "Beyond the classroom: dance, music and self-defence",
    category: "Programs",
    excerpt: "45 Bharatanatyam dancers, 30 Carnatic musicians and 40 karate trainees, and counting.",
    body: [
      "Education at Sai Seva Sangh goes beyond textbooks. 45 girls currently train in classical Bharatanatyam dance and 30 in Carnatic music, building discipline, expression and confidence on stage.",
      "Through our Sri Satya Sai Karate-Do program, 40 girls train in self-defence, with 10 competing at a shooting level. Every skill learned here is a skill she carries for life.",
    ],
  },
  {
    slug: "90000-meals-served",
    title: "90,000 meals and counting",
    category: "Impact",
    excerpt: "A good meal is often the difference between a girl staying in school and dropping out.",
    body: [
      "Nutrition is easy to overlook and impossible to do without. Every girl in our care receives regular, nutritious meals, alongside healthcare checkups that catch problems before they become crises.",
      "Last year alone, our kitchens served over 90,000 meals. It's not a headline number, but it's the quiet foundation that makes everything else, school, sport, music, possible.",
    ],
  },
  {
    slug: "how-your-csr-helps",
    title: "How a corporate CSR partnership helps a girl finish school",
    category: "Community",
    excerpt:
      "40+ industry and community partners help fund education, healthcare and skill development each year.",
    body: [
      "Sai Seva Sangh is registered under 12A, 80G, CSR and FCRA, which means individuals and companies alike can support our work in a fully transparent, tax-compliant way.",
      "CSR partnerships fund everything from a year of school fees to a new set of instruments for our Carnatic music program. If your organisation is looking for a CSR partner, we would love to talk.",
    ],
  },
];

/* ----------------------------- Get Involved -------------------------------- */

export const WAYS = [
  {
    title: "Sponsor a Girl's Education",
    text: "Cover a year of schooling, residential care or higher education for one girl.",
    icon: HandCoins,
    tone: "maroon",
  },
  {
    title: "Corporate CSR Partnership",
    text: "Registered under 12A, 80G, CSR and FCRA — partner with us in a fully transparent way.",
    icon: Handshake,
    tone: "orange",
  },
  {
    title: "Volunteer With Us",
    text: "Teach a class, run a workshop, or mentor a girl through her studies.",
    icon: Users,
    tone: "gold",
  },
  {
    title: "Spread the Word",
    text: "Tell a friend, a school or a company about Sai Seva Sangh. Every introduction helps.",
    icon: Megaphone,
    tone: "rose",
  },
] as const;

export const INTENTS = [
  "Sponsor a girl's education",
  "Corporate CSR partnership",
  "Volunteer my time",
  "General donation",
  "Something else",
];
