import AboutContent from "@/components/AboutContent";
import { ORG_NAME, TAGLINE } from "@/lib/content";

// No separate Home design has been provided yet, so the home page shows the
// same content as About Us (this is the only page that's been designed).
// It renders directly here — rather than redirecting — so the header nav
// correctly highlights "Home" for visitors landing on "/".
export const metadata = {
  title: `${ORG_NAME} — ${TAGLINE}`,
};

export default function HomePage() {
  return <AboutContent />;
}
