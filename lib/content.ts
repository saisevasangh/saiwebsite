/**
 * All page text and data lives here so pages stay small.
 * Edit copy, add/remove stats, or swap image paths (files in /public/images).
 */
import {
  BookOpen,
  Brain,
  Facebook,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Instagram,
  Linkedin,
  MessageSquare,
  Music2,
  Settings,
  Star,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export const ORG_NAME = "Sai Seva Sangh";
export const TAGLINE = "Love All, Serve All";
export const EMAIL = "saisevasangh99@gmail.com";
export const PHONE = "(+91) 9989928552 / 551";
export const PHONE_HREF = "+919989928552";
export const ADDRESS =
  "Door No# 5-240/2, Behind Sriramulu Theatre, HP Road, Moosapet, Hyderabad – 500018";
export const REGISTERED_ADDRESS =
  "Sri Sathya Sai Sthiranilaym, Plot No. 99, Road No. 12, V.V. Nagar Colony, Kukatpally, Hyderabad – 500 072";
export const WEBSITE = "www.saisevasangh.org";
export const REG_NO = "1961/88";

export const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/UCiY6sVOWhmqG49DycYoHM9w";



export const FRAMEWORK = [
  {
    title: "Skills",
    text: "Building practical expertise for real-world careers.",
    detail:
      "Hands-on training in digital, creative, performing and wellness fields, so every student leaves able to do something they can earn from.",
    icon: Settings,
    tone: "blue",
  },
  {
    title: "Systems Thinking",
    text: "Developing problem-solving and analytical abilities.",
    detail:
      "Students learn to break real problems into parts, see how the parts connect and design solutions, the same habit that entrepreneurs rely on.",
    icon: Brain,
    tone: "purple",
  },
  {
    title: "Service Mindset",
    text: "Creating socially responsible and community-focused leaders.",
    detail:
      "Learning is tied to community. Students are encouraged to use what they build to help the people around them.",
    icon: HeartHandshake,
    tone: "green",
  },
  {
    title: "Self-Leadership",
    text: "Instilling confidence, discipline, and personal accountability.",
    detail:
      "Confidence, discipline and accountability are practised every day, not just talked about.",
    icon: UserRound,
    tone: "orange",
  },
] as const;

export const CAREER_POINTS = [
  "Launch entrepreneurial ventures",
  "Work as freelancers and skilled professionals",
  "Participate in internships and industry-linked projects",
  "Develop income-generating capabilities",
  "Build confidence through real-world experience",
];

export const SOCIALS = [
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/saisevasangh999/" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/saisevasangh/" },
  { label: "YouTube", icon: "youtube", href: YOUTUBE_CHANNEL },
  { label: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/company/saisevasangh" },
  { label: "X", icon: "x", href: "https://twitter.com/SaiSevaSangh99" },
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


/* ==========================================================================
   Home page content (mirrors https://saisevasangh.org)
   ========================================================================== */

export const HOME_INTRO = {
  title: "35 Years of Humble Service",
  subtitle:
    "Free Residential Care, Education and AI driven skill development for Orphaned and Underprivileged Girls",
  lines: [
    `Sai Seva Sangh is a registered charitable organization (Reg. No. ${REG_NO}) guided by the motto “Love All, Serve All.”`,
    "For the past 35 years, the organization has been dedicated to empowering orphaned and underprivileged girl children from low-income communities and rural backgrounds. We provide free, holistic education along with safe residential facilities, focusing on skill development and creating a nurturing environment that enables girls to grow with dignity, confidence and purpose.",
  ],
};

/** Hero carousel. Slide 1 is the award banner; swap `image` for real banners as they are supplied. */
export type HeroSlide = {
  title: string;
  text: string;
  cta?: { label: string; href: string };
  image?: string;
  alt?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Global Women Inspiration Award – 2025",
    text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, honoured as Women Changemaker in Social Impact on 20th September 2025.",
    image: "/images/sliders/one.jpg",
    alt: "Global Women Inspiration Award 2025 — Women Changemaker in Social Impact, C. Aruna Pradeep, Secretary, Sai Seva Sangh",
  },
  {
    title: "Global Women Inspiration Award – 2025",
    text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, honoured as Women Changemaker in Social Impact on 20th September 2025.",
    image: "/images/sliders/two.jpg",
    alt: "Global Women Inspiration Award 2025 — Women Changemaker in Social Impact, C. Aruna Pradeep, Secretary, Sai Seva Sangh",
  },
  {
    title: "Global Women Inspiration Award – 2025",
    text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, honoured as Women Changemaker in Social Impact on 20th September 2025.",
    image: "/images/sliders/three.jpg",
    alt: "Global Women Inspiration Award 2025 — Women Changemaker in Social Impact, C. Aruna Pradeep, Secretary, Sai Seva Sangh",
  },
  {
    title: "Global Women Inspiration Award – 2025",
    text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, honoured as Women Changemaker in Social Impact on 20th September 2025.",
    image: "/images/sliders/four.png",
    alt: "Global Women Inspiration Award 2025 — Women Changemaker in Social Impact, C. Aruna Pradeep, Secretary, Sai Seva Sangh",
  },
  {
    title: "Global Women Inspiration Award – 2025",
    text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, honoured as Women Changemaker in Social Impact on 20th September 2025.",
    image: "/images/sliders/five.png",
    alt: "Global Women Inspiration Award 2025 — Women Changemaker in Social Impact, C. Aruna Pradeep, Secretary, Sai Seva Sangh",
  },
  
];

export const POWER_OF_10 = {
  badge: "/images/power10-badge.png",
  video: "fimC5zhgGv0",
  intro: "we are thrilled to introduce the Power of 10 Club — a dynamic fundraising campaign that empowers individuals like you to become catalysts for real, lasting change.",
  highlight: "“Just ₹10 a day or ₹300 a month” can transform a girl’s future by giving her access to education, care, and opportunity.",
  join: "By joining the Power of 10 Club, you’re not just donating — you’re becoming part of a movement that uplifts lives and inspires hope.",
  close: ["Together, we don’t just make a difference —", "we create momentum."],
};

export const NEWSLETTER_VIDEO = { id: "wdWB7eWbcBg", title: "Sai Seva Sangh | December 2025 Newsletter" };

export const FEATURE_VIDEOS = [
  { id: "HrIWsviWkuk", title: "From Sai Seva Sangh to Dance Stardom: The Inspiring Journey" },
  { id: "Ek-LaZxWKOE", title: "Hon. Governor Shri Jishnu Dev Varma Visits Sai Seva Sangh" },
];

export const PHILOSOPHY = [
  {
    id: "commitment",
    title: "Our Commitment",
    body: [
      {
        heading: "Vision",
        text: "To empower children through integral education, combining academic and non-academic learning, nurturing confidence, self-esteem and values — and to empower destitute women through shelter and skill development.",
      },
      {
        heading: "Mission",
        text: "To enable a brighter and empowered future for girl children and women from low-income communities by providing free education, residential care, skill development, values-based learning and continuous support.",
      },
    ],
  },
  {
    id: "objectives",
    title: "Our Objectives",
    list: [
      "Stress the importance of education and regular school attendance.",
      "Provide holistic learning for underprivileged children.",
      "Build confidence in children through art, dance and sports.",
      "Provide a path to employment.",
      "Care for elderly women.",
      "Provide vocational training for special children.",
    ],
  },
  {
    id: "values",
    title: "Our Values",
    intro: "Human values nurtured at five levels of the child:",
    list: ["Physical", "Intellectual", "Emotional", "Psychological", "Spiritual"],
  },
];

export const GET_INVOLVED_TEXT =
  "Sai Seva Sangh strongly believes that education has the power to transform lives. We want to ensure that every child, regardless of their social and economic background, has access to quality education, enjoys learning and makes progress towards discovering true potential and realizing their dreams.";

export const GET_INVOLVED_CARDS = [
  {
    title: "Be a Volunteer",
    text: "Education is the best gift one can give to a child.",
    strong: "Support us",
    image: "/images/volunteer.jpg",
    alt: "You can make a difference: weekend volunteering, weekday volunteering, celebrating special occasions, educational tours and picnics, seva vacation and internship",
    href: "/volunteer",
    icon: "users",
  },
  {
    title: "Raise a Collaboration",
    text: "Invest in girl child education",
    image: "/images/collaborate.jpg",
    alt: "Ways of collaboration: sponsorship for each unit, educational material, sponsor a girl child, teachers' salaries, meals, Power of 10 Club, capital expenditure",
    href: "/raise-a-collaboration",
    icon: "hand",
  },
] as const;

export type Story = {
  name: string;
  image?: string;
  points: string[];
};

export const STORIES: Story[] = [
  {
    name: "Mounika",
    image: "/images/mounika.jpg",
    points: [
      "Mounika’s journey is a true example of how Sai Seva Sangh transforms lives. Though she had to drop out after 8th class due to lack of interest in academics, her heart was filled with passion for dance.",
      "Recognizing her hidden talent, Sai Seva Sangh stood by her side, enrolling her in classical dance training while also guiding her to complete her degree.",
      "With this support, Mounika not only rediscovered her confidence but also built a bright future.",
      "Today, she is in Bangalore, running her own dance academy and teaching many students.",
      "Her success is a reflection of Sai Seva Sangh’s vision – to nurture every child’s unique potential and turn challenges into opportunities.",
    ],
  },
  {
    name: "Pabbati Radha",
    points: [
      "Radha is the eldest of five sisters, and her family could not afford to educate all of them.",
      "Sai Seva Sangh supported her through nursing studies.",
      "She later secured a government nursing job.",
      "The organization also supported her four younger sisters.",
    ],
  },
  {
    name: "Navaneetha",
    points: [
      "After Navaneetha’s father passed away, her mother, a daily wage labourer, could not afford her education.",
      "Sai Seva Sangh enrolled her in 1st standard.",
      "She completed her B.A. degree.",
      "Today she is an intern at the school.",
    ],
  },
];

export const YOUTUBE_VIDEOS = [
  { id: "FbcpC0OVJ_M", title: "Sai Seva Sangh on YouTube" },
  { id: "1iqvazb71kM", title: "Sai Seva Sangh on YouTube" },
  { id: "qdzVJcCS-W8", title: "Sai Seva Sangh on YouTube" },
  { id: "xStVS2HbA7A", title: "Sai Seva Sangh on YouTube" },
  { id: "ZHNPp0HbNSk", title: "Sai Seva Sangh on YouTube" },
  { id: "2kCpd-AZvck", title: "Sai Seva Sangh on YouTube" },
  { id: "5LH32xjUAVw", title: "Sai Seva Sangh on YouTube" },
  { id: "G4ffmi45LvY", title: "Sai Seva Sangh on YouTube" },
];

export const FESTIVAL_VIDEOS = [
  { id: "gGsEJOQZYiA", title: "Labour Day | Sai Seva Sangh" },
  { id: "g-IQ6WFh6jU", title: "Friendship Day | Sai Seva Sangh" },
];

export const REVIEWS = [
  { name: "PEDDABAI RAJAREDDY", text: "Exallent organisation" },
  { name: "Patlavath Govind" },
  { name: "Mullangi Nagireddy" },
  { name: "Porva Sai Deepthi" },
  { name: "sake madhavi", text: "Verry good" },
  { name: "Narukudu Anusha" },
  { name: "vamsipriya Potipireddy", text: "dance performance was excellent" },
  { name: "Anji Anji" },
  { name: "Sumanth Nani", text: "Performance of the students and the music Is good" },
  { name: "samba ms" },
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Sai+Seva+Sangh+Moosapet+Hyderabad+reviews";

/** Logos live in /public/images/partners. Change ".png" below if your files use another extension. */
export const PARTNERS = [
  { name: "Partner", logo: "/images/partners/one.webp" }, // one: rename once you know who it is
  { name: "Hope for Humanity", logo: "/images/partners/two.webp" },
  { name: "State Bank of India", logo: "/images/partners/three.jpg" },
  { name: "GlobalData", logo: "/images/partners/four.jpg" },
  { name: "Supergas", logo: "/images/partners/five.jpg" },
  { name: "Rise Against Hunger", logo: "/images/partners/six.jpg" },
  { name: "Indian Oil", logo: "/images/partners/seven.jpg" },
  { name: "Varma Steels", logo: "/images/partners/eight.png" },
  { name: "Tircon Capacitors", logo: "/images/partners/nine.png" },
  { name: "Worley", logo: "/images/partners/ten.jpg" },
  { name: "Zelis", logo: "/images/partners/eleven.jpg" },
];

export const HOME_STATS = [
  { value: "18,000", label: "Beneficiaries impacted so far", icon: "hand" },
  { value: "90%", label: "Students securing above 60% in SSC over the last 20 years", icon: "book" },
  { value: "2,000", label: "Students supported to continue higher education over the last 20 years", icon: "cap" },
  { value: "10,000", label: "Community services and vocational training", icon: "users" },
] as const;

export const BLOG_POSTS = [
  {
    day: "16",
    month: "Jul",
    year: "2026",
    title: "Access USA Leadership Workshop at Sai Seva Sangh: Empowering Future Leaders Through Public Speaking (2026)",
    href: "/blog",
  },
  {
    day: "5",
    month: "Jun",
    year: "2026",
    title: "4S School of Excellence: Empowering Girls Through Skill-Based Education in 2026",
    href: "/blog",
  },
  {
    day: "28",
    month: "May",
    year: "2026",
    title: "Building Strong Bridges: The Role of Care & Connect Teams Between NGOs and CSR in 2026",
    href: "/blog",
  },
  {
    day: "12",
    month: "May",
    year: "2026",
    title: "Love All, Serve All: How Sai Seva Sangh Transforms Lives Through Compassion and Service",
    href: "/blog",
  },
];


/* ==========================================================================
   Impact tables (About / Home "Our Impact" section)
   ========================================================================== */

export const GLANCE_STATS: { value: string; label: string; note?: string; accent?: boolean }[] = [
  { value: "2,000+", label: "Students Supported", note: "1988–2024" },
  { value: "75%", label: "Alumni Employed Professionally" },
  { value: "20%", label: "Alumni as Entrepreneurs", accent: true },
  { value: "5%", label: "Homemakers", note: "Many Income-Generating" },
];

export const PROGRAMME_HIGHLIGHTS = [
  { value: "200", label: "Students in School Education" },
  { value: "50", label: "Students in Higher Education" },
  { value: "90,000+", label: "Nutritious Meals Served" },
  { value: "45", label: "Classical Dancers Trained" },
  { value: "30", label: "Musicians Trained" },
  { value: "40", label: "Karate Trainees" },
  { value: "10", label: "Young Shooters Trained" },
  { value: "35", label: "Digital Marketing & Design" },
  { value: "25", label: "Photography & Video Editing" },
  { value: "52", label: "Event Management" },
  { value: "30", label: "Reiki Level 1 Certified" },
  { value: "33", label: "Class 10 Board Exam Students" },
];

/* ==========================================================================
   Holistic development panel (used on /project)
   ========================================================================== */

export const HOLISTIC = [
  { title: "Character Building", text: "Discipline, responsibility, and ethical values.", icon: Star, tone: "red" },
  { title: "Communication", text: "Public speaking, collaboration, and leadership skills.", icon: MessageSquare, tone: "purple" },
  { title: "Adaptability", text: "Preparing students for a rapidly evolving world.", icon: TrendingUp, tone: "green" },
  { title: "Social Responsibility", text: "Developing compassionate and community-minded leaders.", icon: HandHeart, tone: "orange" },
] as const;
