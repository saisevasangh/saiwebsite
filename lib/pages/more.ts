import type { Block, PageContent } from "./types";
import { ABOUT_STORY } from "./about";
import { EMAIL, PHONE, ADDRESS, REGISTERED_ADDRESS, REG_NO, NEWSLETTER_VIDEO, FEATURE_VIDEOS, YOUTUBE_VIDEOS, FESTIVAL_VIDEOS, BLOG_POSTS, PHILOSOPHY, STORIES } from "../content";

/**
 * Students, Events, Downloads, Gallery, Press, Blog, legal/policy and extra About pages.
 * Written from facts already on the site (see lib/content.ts); replace with live-site wording where needed.
 */

const links = (items: [string, string][]): Block[] => items.map(([label, href]) => ({ type: "link", label, href }));
const GALLERY_NOTE: Block = { type: "p", text: "Photos and videos from this event are available in our Gallery." };
const GALLERY_LINKS: Block[] = links([["Photo Gallery", "/gallery/photos"], ["Videos", "/videos"]]);

/** A short event page. */
const event = (title: string, text: string, extra: Block[] = []): PageContent => ({
  title,
  blocks: [{ type: "p", text }, ...extra, GALLERY_NOTE, ...GALLERY_LINKS, ...links([["All events", "/events"]])],
});

const celebration = (title: string, what: string) =>
  event(
    title,
    `${what} At Sai Seva Sangh, festivals and national days are celebrated together by the children, staff, volunteers, the elderly women of our day-boarding programme and well-wishers — with cultural programmes, music, dance and shared meals, in keeping with our motto “Love All, Serve All.”`,
  );

const studentVoice = (title: string, who: string): PageContent => ({
  title,
  lead: `${who} share what Sai Seva Sangh means to them.`,
  blocks: [
    { type: "p", text: `Hear ${who.toLowerCase()} speak about life, learning and values at Sai Seva Sangh in our videos.` },
    ...links([["Watch videos", "/videos"], ["Success Stories", "/success-stories"]]),
    { type: "p", text: `Would you like to share your own experience? Write to us at ${EMAIL}.` },
  ],
});

export const MORE_PAGES: Record<string, PageContent> = {
  // "/donate": {
  //   title: "Donate",
  //   lead: "Just ₹10 a day or ₹300 a month can transform a girl’s future.",
  //   blocks: [
  //     { type: "p", text: "Your gift gives an orphaned or underprivileged girl free education, a safe home, nutritious meals, healthcare and the skills to live a self-reliant life. Donations are eligible for 80G tax benefits." },
  //     { type: "h", text: "Ways to give" },
  //     { type: "list", items: ["Power of 10 Club — ₹10 a day or ₹300 a month", "Sponsor a girl child", "Sponsor meals, educational material or teachers’ salaries", "Support capital expenditure"] },
  //     ...links([["See all ways to collaborate", "/raise-a-collaboration"], ["Volunteer", "/volunteer"]]),
  //     { type: "p", text: `To donate or ask for bank details, write to ${EMAIL} or call ${PHONE}.` },
  //   ],
  // },
  /* ---------------- About extras ---------------- */
  "/history": {
    title: "History",
    lead: "From 26 children in a slum classroom to a home and school for over 250 girls.",
    blocks: ABOUT_STORY.blocks.filter((b) => b.type !== "quote"),
  },
  "/who-we-are": {
    title: "Who We Are",
    lead: "A registered charitable organization guided by the motto “Love All, Serve All.”",
    blocks: [
      { type: "p", text: `Sai Seva Sangh (Reg. No. ${REG_NO}) was founded in August 1988 by alumni of Sri Sathya Sai Institute of Higher Learning, Puttaparthi, who pledged to give back to society what they themselves received — a free, value-based education.` },
      { type: "p", text: "For over 35 years we have empowered orphaned and underprivileged girl children from low-income communities and rural backgrounds, with free education, safe residential care, healthcare, nutrition, skill development and values-based learning." },
      { type: "h", text: "Our recognitions" },
      { type: "list", items: ["12A", "80G", "CSR", "FCRA"] },
      { type: "h", text: "Find us" },
      { type: "p", text: `Campus: ${ADDRESS}` },
      { type: "p", text: `Registered office: ${REGISTERED_ADDRESS}` },
      ...links([["The Founder & The Team", "/the-founder-the-team"], ["Vision and Mission", "/vision-and-mission"], ["Our Values", "/our-values"], ["History", "/history"]]),
    ],
  },
  "/our-values": {
    title: "Our Values",
    lead: "Human values nurtured at five levels of the child.",
    blocks: [
      { type: "list", items: PHILOSOPHY.find((p) => p.id === "values")!.list as unknown as string[] },
      { type: "p", text: "Across everything we do we are guided by compassion, integrity, excellence, service and empowerment." },
      { type: "h", text: "Our objectives" },
      { type: "list", items: PHILOSOPHY.find((p) => p.id === "objectives")!.list as unknown as string[] },
      { type: "quote", text: "True education teaches the heart to feel, the mind to think and the hands to serve" },
    ],
  },
  "/annual-reports": {
    title: "Annual Reports",
    lead: "Our work and accounts, shared openly.",
    blocks: [
      { type: "p", text: `Sai Seva Sangh is a registered charitable organization (Reg. No. ${REG_NO}) holding 12A, 80G, CSR and FCRA registrations. To request annual reports and audited statements, please write to ${EMAIL} or call ${PHONE}.` },
      ...links([["Accreditation & Recognitions", "/accreditation-recognitions"], ["Newsletters", "/newsletters"]]),
    ],
  },

  /* ---------------- Students ---------------- */
  "/students-corner": {
    title: "Students Corner",
    lead: "Where our girls learn, create and shine.",
    blocks: [
      { type: "p", text: "Students at Sri Satya Sai Vidya Mandir learn academics alongside art, dance, music and sports. About 200 girls study in Grades 6–10, and over 50 are in higher education." },
      { type: "list", items: ["45 Bharatanatyam dancers", "30 Carnatic musicians", "40 karate trainees", "10 shooters — Sri Satya Sai Karate-Do"] },
      ...links([["Students' Works", "/students-works"], ["Alumni Testimonials", "/alumni-testimonials"], ["Students Talk", "/students-talk"], ["Parents Talk", "/parents"], ["Teachers Talk", "/teachers-talk"], ["Guest Talk", "/guest-talk"]]),
    ],
  },
  "/students-works": {
    title: "Students' Works",
    lead: "Creativity from our classrooms and studios.",
    blocks: [
      { type: "p", text: "Our students express themselves through dance, music, art, public speaking and creative media, including the Digital Marketing and Animation & Creative Media tracks of the 4S School of Excellence." },
      ...links([["4S School of Excellence", "/4s-school-of-excellence"], ["Photo Gallery", "/gallery/photos"], ["Videos", "/videos"]]),
    ],
  },
  "/alumni-testimonials": {
    title: "Alumni Testimonials",
    lead: "Girls who grew up at Sai Seva Sangh, and where they are now.",
    blocks: STORIES.flatMap((s): Block[] => [{ type: "h", text: s.name }, ...s.points.map((t): Block => ({ type: "p", text: t }))]),
  },
  "/students-talk": studentVoice("Students Talk", "Our students"),
  "/parents": studentVoice("Parents Talk", "Parents and guardians"),
  "/teachers-talk": studentVoice("Teachers Talk", "Our teachers"),
  "/guest-talk": studentVoice("Guest Talk", "Guests and visitors"),

  /* ---------------- Events ---------------- */
  "/events": {
    title: "Events",
    lead: "Learning, celebration and service, all year round.",
    blocks: [
      { type: "h", text: "Academic Activities" },
      ...links([["Workshops and Seminars", "/workshops-and-seminars"], ["Educational Tours", "/educational-tours"], ["Sports", "/sports"], ["Competitions", "/competitions"], ["Inspiring Awards", "/inspiring-awards"]]),
      { type: "h", text: "Celebrations" },
      ...links([["All celebrations", "/celebrations"]]),
      { type: "h", text: "Social Service" },
      ...links([["Social Service", "/social-service"]]),
      { type: "h", text: "35th Anniversary" },
      ...links([["35th Anniversary", "/35th-anniversary"]]),
    ],
  },
  "/workshops-and-seminars": event("Workshops and Seminars", "Workshops and seminars bring experts and volunteers to our campus to build life skills, awareness and confidence in our girls — from public speaking and leadership to digital safety.", [
    ...links([["Cybercrime Workshop", "/cybercrime-workshop"]]),
  ]),
  "/cybercrime-workshop": event("Cybercrime Workshop", "A workshop to make our students aware of online risks and safe digital habits, so they can use technology with confidence and care."),
  "/educational-tours": event("Educational Tours", "Educational tours and picnics widen our children’s world, letting them see places, institutions and industries beyond the campus."),
  "/sports": event("Sports", "Sport builds confidence, discipline and teamwork. Our students train in karate (Sri Satya Sai Karate-Do) and shooting, and take part in games and annual sports activities."),
  "/competitions": event("Competitions", "Our girls take part in dance, music, art, elocution and sports competitions, building confidence and discovering their talents."),
  "/inspiring-awards": event("Inspiring Awards", "Recognition for our girls, our team and our supporters. In September 2025, C. Aruna Pradeep, Secretary of Sai Seva Sangh, received the Global Women Inspiration Award as Women Changemaker in Social Impact."),
  "/celebrations": {
    title: "Celebrations",
    lead: "Festivals and national days, celebrated as one family.",
    blocks: links([
      ["35th Anniversary", "/35th-anniversary"], ["Independence Day", "/independence-day-celebrations"], ["Teacher's Day", "/teachers-day-celebrations"],
      ["Vinayaka Chaturthi", "/vinayaka-chaturthi-celebrations"], ["Gandhi Jayanthi", "/gandhi-jayanthi"], ["Dussehra", "/dussehra"],
      ["Sri Sathya Sai Baba Birthday", "/sri-sathya-sai-baba-birthday-celebrations"], ["Ramzan", "/ramzan-celebrations"], ["Christmas", "/christmas"],
      ["Sankranthi", "/sankranthi"], ["Republic Day", "/republic-day-celebrations"], ["Children's Day", "/childrens-day-celebrations"], ["Diwali", "/diwali"],
      ["Amanda Eisel, CEO of Zelis", "/amanda-eisel-ceo-of-zelis"], ["20th Anniversary of SSS Orphanage", "/20th-anniversary-of-sss-orphanage"], ["Shivaratri Celebrations", "/shivaratri-celebrations"],
    ]),
  },
  "/independence-day-celebrations": celebration("Independence Day", "Independence Day, 15 August, is marked with the flag hoisting, patriotic songs and cultural performances."),
  "/teachers-day-celebrations": celebration("Teacher's Day", "On 5 September our students honour their teachers with songs, dances and gifts of gratitude."),
  "/vinayaka-chaturthi-celebrations": celebration("Vinayaka Chaturthi", "Vinayaka Chaturthi is celebrated with prayers, bhajans and puja to Lord Ganesha."),
  "/gandhi-jayanthi": celebration("Gandhi Jayanthi", "On 2 October we remember Mahatma Gandhi’s message of truth, non-violence and service."),
  "/dussehra": celebration("Dussehra", "Dussehra celebrates the victory of good over evil, with prayers and festive programmes."),
  "/sri-sathya-sai-baba-birthday-celebrations": celebration("Sri Sathya Sai Baba Birthday", "Our inspiration, Bhagawan Sri Sathya Sai Baba, was born on 23 November. The day is marked with prayers, bhajans, service and a shared meal."),
  "/ramzan-celebrations": celebration("Ramzan", "Ramzan (Eid) is celebrated in the spirit of unity of all faiths."),
  "/christmas": celebration("Christmas", "Christmas is celebrated with carols, a cultural programme and festive treats."),
  "/sankranthi": celebration("Sankranthi", "Sankranthi, the harvest festival, brings rangoli, kite flying, traditional food and celebration."),
  "/republic-day-celebrations": celebration("Republic Day", "Republic Day, 26 January, is celebrated with the flag hoisting and patriotic performances."),
  "/childrens-day-celebrations": celebration("Children's Day", "Children’s Day, 14 November, is a special day of games, performances and treats for our girls."),
  "/diwali": celebration("Diwali", "Diwali, the festival of lights, brings lamps, rangoli, sweets and new clothes for every child."),
  "/shivaratri-celebrations": celebration("Shivaratri", "Maha Shivaratri is observed with prayer, chanting and an all-night vigil."),
  "/amanda-eisel-ceo-of-zelis": event("Amanda Eisel, CEO of Zelis", "Amanda Eisel, CEO of Zelis, visited Sai Seva Sangh, met our girls and saw our programmes at first hand."),
  "/20th-anniversary-of-sss-orphanage": event("20th Anniversary of SSS Orphanage", "The Sri Sathya Sai Deenajanoddharana Pathakam orphanage, begun in 2005 after a student lost her family in a fire, completed twenty years of caring for girls who had nowhere else to go."),
  "/social-service": {
    title: "Social Service",
    lead: "Serving the wider community.",
    blocks: [
      { type: "p", text: "Beyond our campus, Sai Seva Sangh serves the community through medical camps, food and accommodation support, relief work and sustainability programmes." },
      ...links([["Medical Camps", "/medical-camps"], ["Food and Accommodation", "/food-and-accommodation"], ["COVID-19 Relief Efforts", "/covid-19-relief-efforts"], ["The Seeding Program", "/the-seeding-program"]]),
    ],
  },
  "/medical-camps": event("Medical Camps", "Free medical camps with voluntary doctors bring check-ups and medicines to children, elderly women and families in the surrounding communities."),
  "/food-and-accommodation": event("Food and Accommodation", "Sai Seva Sangh provides meals and shelter to those in need — over 90,000 meals have been served so far."),
  "/covid-19-relief-efforts": event("COVID-19 Relief Efforts", "During the COVID-19 pandemic Sai Seva Sangh supported families with food, essentials and care."),
  "/the-seeding-program": event("The Seeding Program", "The Seeding Program plants the seeds of a greener, more self-reliant future in our community."),
  "/35th-anniversary": {
    title: "35th Anniversary",
    lead: "Three and a half decades of love, care and service to the girl child.",
    blocks: [
      { type: "p", text: "Sai Seva Sangh celebrated 35 years of service with speeches from honourable guests, student dance programmes and entertainment." },
      ...links([["Honorable Guest Speeches", "/honorable-guest-speeches"], ["Student Dance Programs", "/student-dance-programs"], ["Jabardast Show", "/jabardast-show"], ["Mangli Performance", "/mangli-performance"]]),
      ...GALLERY_LINKS,
    ],
  },
  "/honorable-guest-speeches": event("Honorable Guest Speeches", "Distinguished guests spoke at our 35th anniversary about the work of Sai Seva Sangh and the importance of educating the girl child."),
  "/student-dance-programs": event("Student Dance Programs", "Our students — including Bharatanatyam dancers — performed classical and folk dances at the 35th anniversary."),
  "/jabardast-show": event("Jabardast Show", "The Jabardast comedy troupe entertained guests at the 35th anniversary celebrations."),
  "/mangli-performance": event("Mangli Performance", "Singer Mangli performed at the 35th anniversary celebrations."),

  /* ---------------- Press, downloads, media ---------------- */
  "/press-release": {
    title: "Press Release",
    blocks: [
      { type: "h", text: "Global Women Inspiration Award – 2025" },
      { type: "p", text: "C. Aruna Pradeep, Secretary of Sai Seva Sangh, was honoured as Women Changemaker in Social Impact on 20th September 2025." },
      { type: "h", text: "Hon. Governor Shri Jishnu Dev Varma visits Sai Seva Sangh" },
      { type: "video", id: FEATURE_VIDEOS[1].id, title: FEATURE_VIDEOS[1].title },
      { type: "p", text: `Media enquiries: ${EMAIL} · ${PHONE}` },
    ],
  },
  "/accreditation-recognitions": {
    title: "Accreditation & Recognitions",
    blocks: [
      { type: "p", text: `Sai Seva Sangh is a registered charitable organization, Reg. No. ${REG_NO}.` },
      { type: "list", items: ["12A", "80G", "CSR", "FCRA", "Sri Satya Sai Vidya Mandir School — recognized by the Government of Telangana (1999)"] },
      { type: "p", text: `Copies of certificates are available on request: ${EMAIL}.` },
    ],
  },
  "/presentations": {
    title: "Presentations",
    blocks: [
      { type: "p", text: `For our organisation presentation and partnership decks, please write to ${EMAIL}.` },
      ...links([["Raise a Collaboration", "/raise-a-collaboration"]]),
    ],
  },
  "/newsletters": {
    title: "Newsletters",
    blocks: [
      { type: "video", id: NEWSLETTER_VIDEO.id, title: NEWSLETTER_VIDEO.title },
      { type: "p", text: `To receive our newsletter, write to ${EMAIL}.` },
    ],
  },
  "/gallery": {
    title: "Gallery",
    blocks: [{ type: "p", text: "Moments from our school, home and events." }, ...links([["Photos", "/gallery/photos"], ["Videos", "/videos"]])],
  },
  "/gallery/photos": {
    title: "Photos",
    blocks: [
      {
        type: "gallery",
        images: ABOUT_STORY.blocks.filter((b): b is Extract<Block, { type: "img" }> => b.type === "img").map((b) => b.src).concat([
          "https://saisevasangh.org/wp-content/uploads/2026/01/vision-and-Mission.jpeg",
          "https://saisevasangh.org/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-03-at-2.58.49-PM.jpeg",
        ]),
      },
      ...links([["Videos", "/videos"]]),
    ],
  },
  "/videos": {
    title: "Videos",
    blocks: [...FEATURE_VIDEOS, NEWSLETTER_VIDEO, ...FESTIVAL_VIDEOS, ...YOUTUBE_VIDEOS].map((v): Block => ({ type: "video", id: v.id, title: v.title })),
  },
  "/blog": {
    title: "Blog",
    blocks: BLOG_POSTS.flatMap((p): Block[] => [{ type: "h", text: p.title }, { type: "p", text: `${p.day} ${p.month} ${p.year}` }]),
  },

  /* ---------------- Legal / policy ---------------- */
  "/privacy-policy": policy("Privacy Policy", [
    ["Information we collect", "We collect the details you give us when you donate, volunteer, subscribe or contact us — such as name, phone, email and address — and basic technical data about visits to this website."],
    ["How we use it", "To process donations and issue receipts, respond to enquiries, share updates about our work, and meet legal obligations. We never sell your personal data."],
    ["Children’s data", "We protect the privacy and safety of the children in our care; see our Media Consent Policy."],
    ["Your rights", `You may ask to access, correct or delete your information at any time by writing to ${EMAIL}.`],
  ]),
  "/terms-and-conditions": policy("Terms & Conditions", [
    ["Use of this website", "The content on this website is for general information about Sai Seva Sangh. Please do not copy or reuse text, images or videos without permission."],
    ["Donations", "Donations are voluntary and used for the charitable purposes of Sai Seva Sangh. Eligible donations receive an 80G receipt."],
    ["Changes", "We may update these terms from time to time; the current version is always published on this page."],
  ]),
  "/disclaimer": policy("Disclaimer", [
    ["General", "We take care to keep this website accurate and current, but make no warranty of completeness. Figures such as beneficiary numbers are updated periodically."],
    ["External links", "We are not responsible for the content of external websites linked from this site."],
  ]),
  "/cookie-policy": policy("Cookie Policy", [
    ["What are cookies", "Small files stored on your device to help a website work and to understand how it is used."],
    ["Your choice", "When you first visit, you can Accept or Decline cookies. Your choice is remembered on your device, and you can change it at any time with the cookie button at the bottom-left of the page."],
  ]),
  "/volunteer-code-of-conduct": policy("Volunteer Code of Conduct", [
    ["Child safety first", "Treat every child with respect and dignity. Never be alone with a child, and never share photos of children without approval."],
    ["Conduct", "Be punctual, dress modestly, follow staff guidance, and keep to the values of Love All, Serve All."],
    ["Confidentiality", "Do not share personal details of children, residents or staff."],
    ["Questions", `Contact ${EMAIL} or ${PHONE}.`],
  ]),
  "/media-consent-policy": policy("Media Consent Policy", [
    ["Why it matters", "The children in our care are vulnerable. Photographs, videos and stories are shared only with the consent of Sai Seva Sangh and, where applicable, the child’s guardian."],
    ["For visitors and media", "Please obtain permission before photographing or recording children, and do not post identifying details on social media."],
    ["Withdrawing consent", `Write to ${EMAIL} and we will remove the material where possible.`],
  ]),
};

function policy(title: string, sections: [string, string][]): PageContent {
  return {
    title,
    lead: "Last updated: November 2026",
    blocks: [
      ...sections.flatMap(([h, t]): Block[] => [{ type: "h", text: h }, { type: "p", text: t }]),
      { type: "p", text: `Sai Seva Sangh, ${REGISTERED_ADDRESS}. Questions: ${EMAIL}.` },
    ],
  };
}
