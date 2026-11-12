import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Heart, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/content";
import { DONATE_URL } from "@/lib/project";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support education, health & nutrition and the 4S School of Excellence for orphaned and underprivileged girl children.",
};

/** Online payment page for general giving. Change if you use another link. */
const GENERAL_DONATE_URL = "https://pages.razorpay.com/saisevasangh";
const SKILL_DONATE_URL = "https://rzp.io/rzp/4sschoolofexcellence";

const CAUSES = [
  {
    id: "education",
    title: "Education",
    text: "Free, value-based schooling that gives every girl the confidence and the qualifications to build her own future.",
    points: ["Sponsor a girl child’s education", "Educational material and uniforms", "Teachers’ salaries"],
    image: "/images/building.jpg",
    alt: "Girls studying in a classroom",
    donate: GENERAL_DONATE_URL,
    more: "/school-for-underprivileged",
    cta: "Donate for Education",
  },
  {
    id: "health-nutrition",
    title: "Health & Nutrition",
    text: "Nutritious daily meals and regular healthcare so that no child has to learn on an empty stomach.",
    points: ["Sponsor meals", "Healthcare and medical check-ups", "Power of 10 Club — ₹10 a day or ₹300 a month"],
    image: "/images/why.jpg",
    alt: "Girls sharing a nutritious meal",
    donate: GENERAL_DONATE_URL,
    more: "/nutrition",
    cta: "Donate for Health & Nutrition",
  },
  {
    id: "4s-school",
    title: "4S School of Excellence",
    text: "A building that will build 600 futures every year — a free, skill-based school for orphan and underprivileged girls.",
    points: ["Contribute to the building construction", "Start Early. Skill Early. Earn Early.", "Completion planned for December 2027"],
    image: "/images/4s/building.jpg",
    alt: "Render of the 4S School of Excellence building",
    donate: SKILL_DONATE_URL,
    more: "/project",
    cta: "Contribute to 4S School",
  },
] as const;

/* Self-contained styles, in the site's colours */
const CSS = `
.dn{padding-block:clamp(40px,6vw,80px)}
.dn__list{display:grid;gap:clamp(28px,4vw,48px)}
.dn__card{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:22px;overflow:hidden;background:#fff;box-shadow:0 14px 36px rgba(90,20,20,.09)}
.dn__card:nth-child(even) .dn__media{order:2}
.dn__media{position:relative;min-height:300px;background:var(--maroon-900)}
.dn__img{object-fit:cover}
.dn__body{display:flex;flex-direction:column;justify-content:center;gap:14px;padding:clamp(24px,4vw,48px)}
.dn__num{font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.78rem;color:var(--orange-600);margin:0}
.dn__title{margin:0;color:var(--maroon)}
.dn__text{margin:0;color:var(--text)}
.dn__points{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.dn__points li{display:flex;gap:10px;align-items:flex-start;color:var(--text)}
.dn__points svg{flex:0 0 auto;margin-top:3px;color:var(--orange-600)}
.dn__btns{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:6px}
.dn__more{display:inline-flex;align-items:center;gap:6px;font-weight:600;color:var(--maroon)}
.dn__more:hover{color:var(--orange-600)}
.dn__note{margin-top:clamp(28px,4vw,48px);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 18px;padding:18px 22px;border-radius:16px;background:var(--peach);border:1px solid var(--peach-line);color:var(--maroon-800);text-align:center}
.dn__note svg{color:var(--orange-600)}
.dn__note a{font-weight:700;color:var(--maroon)}
@media (max-width:860px){
  .dn__card{grid-template-columns:1fr}
  .dn__card:nth-child(even) .dn__media{order:0}
  .dn__media{min-height:220px;aspect-ratio:16/9}
}
`;

export default function DonatePage() {
  return (
    <>
      <style>{CSS}</style>
      <PageHero
        crumb="Donate"
        title="Donate"
        lead="Just ₹10 a day or ₹300 a month can transform a girl’s future. Choose where you would like your gift to make a difference."
      />

      <section className="dn">
        <div className="container">
          <div className="dn__list">
            {CAUSES.map((c, i) => (
              <article key={c.id} id={c.id} className="dn__card">
                <div className="dn__media">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    className="dn__img"
                  />
                </div>
                <div className="dn__body">
                  <p className="dn__num">0{i + 1}</p>
                  <h2 className="dn__title serif h2">{c.title}</h2>
                  <p className="dn__text">{c.text}</p>
                  <ul className="dn__points">
                    {c.points.map((p) => (
                      <li key={p}>
                        <Check size={16} aria-hidden="true" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="dn__btns">
                    <a className="btn btn--maroon" href={c.donate} target="_blank" rel="noopener noreferrer">
                      <Heart size={15} fill="currentColor" aria-hidden="true" /> {c.cta}
                    </a>
                    <Link href={c.more} className="dn__more">
                      Learn more <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="dn__note">
            <ShieldCheck size={20} aria-hidden="true" />
            <span>Donations are eligible for 80G tax benefits.</span>
            <span>
              For bank details or help, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{" "}
              <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}