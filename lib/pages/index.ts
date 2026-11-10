import type { PageContent } from "./types";
import { MORE_PAGES } from "./more";
import { FOUNDER_TEAM } from "./team";
import { COLLABORATION, VOLUNTEER } from "./involved";
import { FOUR_S, VIDYA_MANDIR, OLD_AGE_HOME } from "./services";
import { SERVICES, EDUCATION, COMMUNITY, NUTRITION, HEALTHCARE, RESIDENTIAL, ORPHANAGE, INTERNS_RESIDENCE, DAY_BOARDING, SKILL_ENHANCEMENT, SUCCESS_STORIES } from "./services-more";
import { VISION_MISSION, ADMISSIONS } from "./about-more";

/** Content copied from https://saisevasangh.org, keyed by the route in lib/nav.ts. */
export const PAGES: Record<string, PageContent> = {
  ...MORE_PAGES,
  "/services": SERVICES,
  "/school-for-underprivileged": EDUCATION,
  "/community-services-3": COMMUNITY,
  "/nutrition": NUTRITION,
  "/healthcare-initiatives": HEALTHCARE,
  "/orphanage-for-girls": RESIDENTIAL,
  "/orphange": ORPHANAGE,
  "/internsresidence-staffs-quarters": INTERNS_RESIDENCE,
  "/day-boarding": DAY_BOARDING,
  "/skill-enhancement": SKILL_ENHANCEMENT,
  "/success-stories": SUCCESS_STORIES,
  "/the-founder-the-team": FOUNDER_TEAM,
  "/vision-and-mission": VISION_MISSION,
  "/admissions": ADMISSIONS,
  "/raise-a-collaboration": COLLABORATION,
  "/volunteer": VOLUNTEER,
  "/old-age-home-for-women": OLD_AGE_HOME,
  "/4s-school-of-excellence": FOUR_S,
  "/sri-satya-sai-vidya-mandir-school": VIDYA_MANDIR,
};
