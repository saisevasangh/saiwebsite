/**
 * Site navigation, mirroring https://saisevasangh.org.
 * Items may nest up to three levels. An item without `href` is a plain
 * group label (the live site has no page for it). Pages that are not
 * designed yet are served by app/[...slug]/page.tsx.
 */
export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "The Founder & The Team", href: "/the-founder-the-team" },
      { label: "Vision and Mission", href: "/vision-and-mission" },
      { label: "History", href: "/history" },
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Values", href: "/our-values" },
      { label: "Admissions", href: "/admissions" },
      // { label: "4S School Of Excellence", href: "/4s-school-of-excellence" },
      // { label: "4S School Of Excellence", href: "/4s-school-of-excellence" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Home for Destitute Ladies (since 1988)", href: "/old-age-home-for-women" },
      {
        label: "Education",
        href: "/school-for-underprivileged",
        children: [
          { label: "Sri Satya Sai Vidya Mandir School", href: "/sri-satya-sai-vidya-mandir-school" },
        ],
      },
      { label: "Community Services", href: "/community-services-3" },
      { label: "Nutrition", href: "/nutrition" },
      { label: "Healthcare", href: "/healthcare-initiatives" },
      {
        label: "Residential Facilities",
        href: "/orphanage-for-girls",
        children: [
          { label: "Orphanage for Girls", href: "/orphange" },
          { label: "Interns, Residence & Staffs Quarters", href: "/internsresidence-staffs-quarters" },
          { label: "Day Boarding", href: "/day-boarding" },
        ],
      },
      { label: "Skill Enhancement Program for Destitute Ladies (since 1998)", href: "/skill-enhancement" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    label: "Students",
    href: "/students-corner",
    children: [
      { label: "Students Corner", href: "/students-corner" },
      { label: "Students' Works", href: "/students-works" },
      { label: "Alumni Testimonials", href: "/alumni-testimonials" },
      { label: "Students Talk", href: "/students-talk" },
      { label: "Parents Talk", href: "/parents" },
      { label: "Teachers Talk", href: "/teachers-talk" },
      { label: "Guest Talk", href: "/guest-talk" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Academic Activities",
        children: [
          {
            label: "Workshops and Seminars",
            href: "/workshops-and-seminars",
            children: [{ label: "Cybercrime Workshop", href: "/cybercrime-workshop" }],
          },
          { label: "Educational Tours", href: "/educational-tours" },
          { label: "Sports", href: "/sports" },
          { label: "Competitions", href: "/competitions" },
          { label: "Inspiring Awards", href: "/inspiring-awards" },
        ],
      },
      {
        label: "Celebrations",
        href: "/celebrations",
        children: [
          { label: "35th Anniversary", href: "/35th-anniversary" },
          { label: "Independence Day", href: "/independence-day-celebrations" },
          { label: "Teacher's Day", href: "/teachers-day-celebrations" },
          { label: "Vinayaka Chaturthi", href: "/vinayaka-chaturthi-celebrations" },
          { label: "Gandhi Jayanthi", href: "/gandhi-jayanthi" },
          { label: "Dussehra", href: "/dussehra" },
          { label: "Sri Sathya Sai Baba Birthday", href: "/sri-sathya-sai-baba-birthday-celebrations" },
          { label: "Ramzan", href: "/ramzan-celebrations" },
          { label: "Christmas", href: "/christmas" },
          { label: "Sankranthi", href: "/sankranthi" },
          { label: "Republic Day", href: "/republic-day-celebrations" },
          { label: "Children's Day", href: "/childrens-day-celebrations" },
          { label: "Diwali", href: "/diwali" },
          { label: "Amanda Eisel CEO of Zelis", href: "/amanda-eisel-ceo-of-zelis" },
          { label: "20th Anniversary of SSS Orphanage", href: "/20th-anniversary-of-sss-orphanage" },
          { label: "Shivaratri Celebrations", href: "/shivaratri-celebrations" },
        ],
      },
      {
        label: "Social Service",
        href: "/social-service",
        children: [
          { label: "Medical Camps", href: "/medical-camps" },
          { label: "Food and Accommodation", href: "/food-and-accommodation" },
          { label: "COVID-19 Relief Efforts", href: "/covid-19-relief-efforts" },
          { label: "The Seeding Program", href: "/the-seeding-program" },
        ],
      },
      {
        label: "35th Anniversary",
        href: "/35th-anniversary",
        children: [
          { label: "Honorable Guest Speeches", href: "/honorable-guest-speeches" },
          { label: "Student Dance Programs", href: "/student-dance-programs" },
          { label: "Jabardast Show", href: "/jabardast-show" },
          { label: "Mangli Performance", href: "/mangli-performance" },
        ],
      },
    ],
  },
  { label: "Press Release", href: "/press-release" },
  {
    label: "Get Involved",
    children: [
      { label: "Raise a Collaboration", href: "/raise-a-collaboration" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    label: "Downloads",
    children: [
      { label: "Accreditation & Recognitions", href: "/accreditation-recognitions" },
      { label: "Presentations", href: "/presentations" },
      { label: "Annual Reports", href: "/annual-reports" },
      { label: "Newsletters", href: "/newsletters" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Blog", href: "/blog" },
   { label: "Awards & Recognition", href: "/#" },
  { label: "Contact Us", href: "/contact-us" },
];

/** Policy pages linked from the footer. */
export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Volunteer Code of Conduct", href: "/volunteer-code-of-conduct" },
  { label: "Media Consent Policy", href: "/media-consent-policy" },
];

export function isActive(href: string | undefined, pathname: string) {
  if (!href) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** True if this item or any descendant matches the current path. */
export function isBranchActive(item: NavItem, pathname: string): boolean {
  return isActive(item.href, pathname) || !!item.children?.some((c) => isBranchActive(c, pathname));
}

export type FlatNav = { label: string; href: string; trail: string[] };

/** Every linkable page with its breadcrumb, de-duplicated by href. */
export function flattenNav(items: NavItem[] = [...NAV, ...LEGAL_LINKS], trail: string[] = []): FlatNav[] {
  const out: FlatNav[] = [];
  const seen = new Set<string>();
  const walk = (list: NavItem[], parents: string[]) => {
    for (const item of list) {
      if (item.href && !seen.has(item.href)) {
        seen.add(item.href);
        out.push({ label: item.label, href: item.href, trail: parents });
      }
      if (item.children) walk(item.children, [...parents, item.label]);
    }
  };
  walk(items, trail);
  return out;
}

/** Main items shown in the footer's Quick Links. */
export function footerLinks(): { label: string; href: string }[] {
  return NAV.map((item) => {
    const href = item.href ?? item.children?.find((c) => c.href)?.href;
    return href ? { label: item.label, href } : null;
  }).filter((x): x is { label: string; href: string } => x !== null);
}
