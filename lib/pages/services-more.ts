import type { PageContent } from "./types";

/**
 * Service pages. Text is assembled from facts already published on the Sai Seva Sangh site
 * (see lib/content.ts and the other lib/pages files). Replace with the live-site wording where needed.
 */

export const SERVICES: PageContent = {
  title: "Our Services",
  lead: "Guided by the motto “Love All, Serve All” — free, holistic care for orphaned and underprivileged girls and destitute women.",
  blocks: [
    { type: "p", text: "For 35 years Sai Seva Sangh has provided quality education, residential care, healthcare, nutrition, skill development and value-based learning, so that every girl can live a self-reliant life with dignity." },
    { type: "h", text: "What we offer" },
    { type: "link", label: "Home for Destitute Ladies (since 1988)", href: "/old-age-home-for-women" },
    { type: "link", label: "Education", href: "/school-for-underprivileged" },
    { type: "link", label: "Community Services", href: "/community-services-3" },
    { type: "link", label: "Nutrition", href: "/nutrition" },
    { type: "link", label: "Healthcare", href: "/healthcare-initiatives" },
    { type: "link", label: "Residential Facilities", href: "/orphanage-for-girls" },
    { type: "link", label: "Day Boarding", href: "/day-boarding" },
    { type: "link", label: "Interns, Residence & Staffs Quarters", href: "/internsresidence-staffs-quarters" },
    { type: "link", label: "Skill Enhancement Program for Destitute Ladies (since 1998)", href: "/skill-enhancement" },
    { type: "link", label: "Success Stories", href: "/success-stories" },
  ],
};

export const EDUCATION: PageContent = {
  title: "Education",
  lead: "Free, value-based education for orphaned and underprivileged girls.",
  blocks: [
    { type: "p", text: "Sai Seva Sangh believes education is the most powerful tool for social change. We provide free education to orphaned and underprivileged girl children from low-income communities and rural backgrounds, combining academic excellence with non-academic learning, life skills, values and character building." },
    { type: "h", text: "Sri Satya Sai Vidya Mandir School" },
    { type: "p", text: "Our school offers free, value-based schooling for girls, with admissions taken on a need-based basis, not on merit. Around 200 students study in Grades 6–10." },
    { type: "link", label: "About the School", href: "/sri-satya-sai-vidya-mandir-school" },
    { type: "link", label: "Admissions", href: "/admissions" },
    { type: "h", text: "Higher education" },
    { type: "p", text: "Over 50 of our girls are pursuing or have completed college and professional studies, supported by the organization." },
    { type: "h", text: "4S School of Excellence" },
    { type: "p", text: "A skill-based model that prepares students for a Career Debut by 18 through digital marketing, creative media, performing arts, nutrition & wellness and essential life skills." },
    { type: "link", label: "Explore 4S School of Excellence", href: "/4s-school-of-excellence" },
  ],
};

export const COMMUNITY: PageContent = {
  title: "Community Services",
  lead: "Reaching beyond our campus to families in need.",
  blocks: [
    { type: "p", text: "Over the years Sai Seva Sangh has expanded its reach to address the educational and developmental needs of children, women and youth from low-income communities, positively impacting thousands of beneficiaries through education, welfare and vocational training programmes." },
    { type: "h", text: "Our community work" },
    { type: "list", items: [
      "Day boarding care for destitute and underprivileged elderly women from nearby slum areas",
      "Vocational and skill training for women and youth",
      "Medical camps and health check-ups",
      "Food and accommodation support",
      "COVID-19 relief efforts",
      "The Seeding Program",
      "Festival celebrations, gifts and shared meals for the wider community",
    ] },
    { type: "link", label: "Social Service events", href: "/social-service" },
    { type: "link", label: "The Seeding Program", href: "/the-seeding-program" },
  ],
};

export const NUTRITION: PageContent = {
  title: "Nutrition",
  lead: "Healthy bodies, ready minds.",
  blocks: [
    { type: "p", text: "Good nutrition is part of every child’s right to learn and grow. Sai Seva Sangh provides nutritious meals to the girls in our care, to day-boarding students and to the elderly women who spend their days on our campus." },
    { type: "h", text: "What we provide" },
    { type: "list", items: [
      "Nutritious meals three times a day on campus",
      "Special festive meals during celebrations",
      "Nutrition & wellness learning at the 4S School — dietetics, yoga and healthy lifestyle practices",
    ] },
    { type: "p", text: "Together with generous donors, we have served over 90,000 meals." },
    { type: "link", label: "Sponsor a meal — Donate", href: "/donate" },
  ],
};

export const HEALTHCARE: PageContent = {
  title: "Healthcare",
  lead: "Care that keeps every child and elder well.",
  blocks: [
    { type: "p", text: "Sai Seva Sangh looks after the health of the girls, staff and elderly women who are part of our family, and extends care to the wider community." },
    { type: "h", text: "Healthcare initiatives" },
    { type: "list", items: [
      "Regular medical check-ups for children and elderly women",
      "Medical care and treatment when needed",
      "Medical camps for the community",
      "Hygiene, wellness and yoga practices",
      "Distribution of clothes, blankets and bedsheets",
    ] },
    { type: "link", label: "Medical camps and social service", href: "/social-service" },
  ],
};

export const RESIDENTIAL: PageContent = {
  title: "Residential Facilities",
  lead: "A safe, nurturing home for girls and the people who care for them.",
  blocks: [
    { type: "p", text: "Sai Seva Sangh provides safe residential facilities where girls grow with dignity, confidence and purpose, alongside the staff and interns who support them." },
    { type: "link", label: "Orphanage for Girls", href: "/orphange" },
    { type: "link", label: "Interns, Residence & Staffs Quarters", href: "/internsresidence-staffs-quarters" },
    { type: "link", label: "Day Boarding", href: "/day-boarding" },
  ],
};

export const ORPHANAGE: PageContent = {
  title: "Orphanage for Girls",
  blocks: [
    { type: "p", text: "Sai Seva Sangh offers free residential care to orphaned and underprivileged girls — a safe, loving home with food, clothing, healthcare, schooling and values-based learning, so that they can grow into confident, self-reliant women." },
    { type: "p", text: "Over 250 children are currently in our care. The Sri Satya Sai orphanage has been serving girls for more than two decades." },
    { type: "link", label: "20th Anniversary of SSS Orphanage", href: "/20th-anniversary-of-sss-orphanage" },
    { type: "link", label: "Sponsor a girl", href: "/raise-a-collaboration" },
  ],
};

export const INTERNS_RESIDENCE: PageContent = {
  title: "Interns, Residence & Staffs Quarters",
  lead: "A supportive home for those who serve.",
  blocks: [
    { type: "p", text: "Interns, volunteers and staff are an important part of the Sai Seva Sangh family. Residential quarters on campus let them stay close to the children, share in daily life and give their best to the mission." },
    { type: "p", text: "Several of our own girls return as interns after completing their studies — Navaneetha, for example, is today an intern at the school." },
    { type: "link", label: "Volunteer & internship opportunities", href: "/volunteer" },
  ],
};

export const DAY_BOARDING: PageContent = {
  title: "Day Boarding",
  lead: "Daytime care, with evenings at home.",
  blocks: [
    { type: "p", text: "Sai Seva Sangh’s Day Boarding programme gives daily support to destitute and underprivileged elderly women from nearby slum areas, who spend their days on our peaceful campus and return home to their families in the evening." },
    { type: "list", items: [
      "Nutritious meals three times a day",
      "Regular medical check-ups and health care",
      "Clothes, blankets and bedsheets",
      "Time to relax, interact, and take part in spiritual and cultural programmes",
      "Special celebrations, gifts and festive meals",
    ] },
    { type: "p", text: "Around 25 women help in the kitchen and spend time with the children, becoming an integral part of our extended family." },
    { type: "link", label: "Home for Destitute Ladies", href: "/old-age-home-for-women" },
  ],
};

export const SKILL_ENHANCEMENT: PageContent = {
  title: "Skill Enhancement Program for Destitute Ladies (since 1998)",
  blocks: [
    { type: "p", text: "Since 1998 Sai Seva Sangh has trained destitute and underprivileged women in practical, income-generating skills so they can earn a livelihood and live with self-respect." },
    { type: "p", text: "Together with our community and vocational programmes, more than 10,000 people have benefited from training and community services." },
    { type: "link", label: "Support this programme", href: "/donate" },
    { type: "link", label: "4S School of Excellence", href: "/4s-school-of-excellence" },
  ],
};

export const SUCCESS_STORIES: PageContent = {
  title: "Success Stories",
  lead: "Every girl has a unique potential — these are some who turned challenges into opportunities.",
  blocks: [
    { type: "h", text: "Mounika" },
    { type: "p", text: "Mounika dropped out after 8th class, but her heart was in dance. Sai Seva Sangh enrolled her in classical dance training and guided her to complete her degree. Today she runs her own dance academy in Bangalore and teaches many students." },
    { type: "h", text: "Pabbati Radha" },
    { type: "p", text: "Radha is the eldest of five sisters, and her family could not afford to educate them all. Sai Seva Sangh supported her through nursing studies; she later secured a government nursing job, and the organization also supported her four younger sisters." },
    { type: "h", text: "Navaneetha" },
    { type: "p", text: "After her father passed away, Navaneetha’s mother, a daily wage labourer, could not afford her education. Sai Seva Sangh enrolled her in 1st standard, she completed her B.A., and today she is an intern at the school." },
    { type: "quote", text: "Her success is a reflection of Sai Seva Sangh’s vision – to nurture every child’s unique potential and turn challenges into opportunities." },
  ],
};
