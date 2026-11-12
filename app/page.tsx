// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarDays,
//   ExternalLink,
//   FileText,
//   GraduationCap,
//   Heart,
//   HeartHandshake,
//   Instagram,
//   Users,
// } from "lucide-react";
// import { AboutOrganisation, MissionVision, OurImpact } from "@/components/about";
// import Accordion from "@/components/Accordion";
// import CountUp from "@/components/CountUp";
// import LiteYouTube from "@/components/LiteYouTube";
// import ReviewsCarousel from "@/components/ReviewsCarousel";
// import Slider from "@/components/Slider";
// import VideoGrid from "@/components/VideoGrid";
// import {
//   BLOG_POSTS,
//   FEATURE_VIDEOS,
//   FESTIVAL_VIDEOS,
//   GET_INVOLVED_CARDS,
//   GET_INVOLVED_TEXT,
//   GOOGLE_REVIEWS_URL,
//   HERO_SLIDES,
//   HOME_INTRO,
//   HOME_STATS,
//   NEWSLETTER_VIDEO,
//   ORG_NAME,
//   PARTNERS,
//   PHILOSOPHY,
//   POWER_OF_10,
//   REVIEWS,
//   STORIES,
//   TAGLINE,
//   YOUTUBE_CHANNEL,
//   YOUTUBE_VIDEOS,
// } from "@/lib/content";
// import { rv } from "@/lib/reveal";
// import SchoolSpotlight from "@/components/Schoolspotlight";

// export const metadata: Metadata = {
//   title: { absolute: `${ORG_NAME} — 35 Years of Humble Service | ${TAGLINE}` },
//   description:
//     "Sai Seva Sangh is a registered charitable organization in Hyderabad providing free residential care and education for orphaned and underprivileged girls for 35 years.",
// };

// const STAT_ICONS = { hand: HeartHandshake, book: BookOpen, cap: GraduationCap, users: Users } as const;

// function PhilosophyContent({ id }: { id: string }) {
//   const item = PHILOSOPHY.find((p) => p.id === id)!;
//   return (
//     <>
//       {"body" in item &&
//         item.body?.map((b) => (
//           <p key={b.heading}>
//             <strong>{b.heading}:</strong> {b.text}
//           </p>
//         ))}
//       {"intro" in item && item.intro && <p>{item.intro}</p>}
//       {"list" in item && item.list && (
//         <ol className="acc__list">
//           {item.list.map((l) => (
//             <li key={l}>{l}</li>
//           ))}
//         </ol>
//       )}
//     </>
//   );
// }

// export default function HomePage() {
//   const heroSlides = HERO_SLIDES.map((s) =>
//     s.image ? (
//       <div className="hslide hslide--image" key={s.title}>
//         <Image src={s.image} alt={s.alt ?? s.title} width={1600} height={600} sizes="100vw" priority className="hslide__img" />
//       </div>
//     ) : (
//       <div className="hslide hslide--text" key={s.title}>
//         <h2 className="serif">{s.title}</h2>
//         <p>{s.text}</p>
//         {s.cta && (
//           <Link href={s.cta.href} className="btn btn--gold">
//             {s.cta.label} <ArrowRight size={16} aria-hidden="true" />
//           </Link>
//         )}
//       </div>
//     ),
//   );

//   const storySlides = STORIES.map((s) => (
//     <article className="story-card" key={s.name}>
//       <div className="story-card__copy">
//         <h3 className="serif">Student beneficiary – {s.name}</h3>
//         <ol>
//           {s.points.map((p) => (
//             <li key={p}>{p}</li>
//           ))}
//         </ol>
//       </div>
//       <div className="story-card__photo">
//         {s.image ? (
//           <Image src={s.image} alt={`${s.name}, student beneficiary`} width={325} height={472} sizes="(max-width: 700px) 60vw, 325px" />
//         ) : (
//           <span className="story-card__initial" aria-hidden="true">
//             {s.name.charAt(0)}
//           </span>
//         )}
//       </div>
//     </article>
//   ));

//   return (
//     <>
//       {/* ------------------------------ HERO ------------------------------ */}
//        <section className="home-hero">
//         <Slider slides={heroSlides} label="Highlights" className="slider--hero" adaptive />
//         <div className="container home-hero__intro" {...rv("up")}>
//           <Image src="/images/logo.png" alt="" width={56} height={45} className="home-hero__logo" />
//           <h1 className="serif">{HOME_INTRO.title}</h1>
// <p className="home-hero__sub serif">{HOME_INTRO.subtitle}</p>
// <AboutOrganisation />
//           {/* {HOME_INTRO.lines.map((l) => (
//             <p key={l} className="body">
//               {l}
//             </p>
//           ))} */}
//           {/* <AboutOrganisation /> */}
//           <Link href="/donate" className="btn btn--maroon btn--lg">
//             <Heart size={16} fill="currentColor" aria-hidden="true" /> Donate
//           </Link>
//         </div>
//       </section>
//       <section>
//         <MissionVision />
//         <OurImpact />
//       </section>
      

//       {/* ------------------------- POWER OF 10 CLUB ------------------------ */}
//       {/* <section className="p10 section" id="power-of-10">
//         <div className="container p10__card">
//           <div className="p10__badge" {...rv("left")}>
//             <Image src={POWER_OF_10.badge} alt="Power of 10 Club badge" width={195} height={195} />
//           </div>
//           <div className="p10__copy" {...rv("up", 1)}>
//             <h2 className="serif">“Power of 10 Club”</h2>
//             <p>{POWER_OF_10.intro}</p>
//             <p className="p10__hl">✨ {POWER_OF_10.highlight}</p>
//             <p>{POWER_OF_10.join}</p>
//             <p className="p10__close">
//               {POWER_OF_10.close[0]}
//               <br />
//               <strong>{POWER_OF_10.close[1]}</strong>
//             </p>
//             <div className="p10__actions">
//               <Link href="/donate" className="btn btn--maroon">
//                 Donate
//               </Link>
//               <Link href="/raise-a-collaboration" className="btn btn--gold">
//                 Know more
//               </Link>
//             </div>
//           </div>
//           <div className="p10__video" {...rv("right", 2)}>
//             <LiteYouTube id={POWER_OF_10.video} title="Power of 10 Club | Sai Seva Sangh" />
//           </div>
//         </div>
//       </section> */}

//       <section>
//         <SchoolSpotlight />
//       </section>

//       {/* -------------------------- LATEST NEWS --------------------------- */}
//       <section className="news section" id="latest-news">
//         <div className="container">
//           <h2 className="h2 serif section-title" {...rv("up")}>
//             Latest News/Activities
//           </h2>
//           <div className="news__grid">
//             <article className="news-card" {...rv("up", 1)}>
//               <FileText size={44} strokeWidth={1.4} aria-hidden="true" />
//               <h3>Newsletters</h3>
//               <p>Read our latest newsletter and catch up on everything happening at Sai Seva Sangh.</p>
//               <Link href="/newsletters" className="btn btn--gold">
//                 Know more <ArrowRight size={16} aria-hidden="true" />
//               </Link>
//             </article>
//             <div {...rv("up", 2)}>
//               <LiteYouTube id={NEWSLETTER_VIDEO.id} title={NEWSLETTER_VIDEO.title} />
//             </div>
//           </div>
//           <div className="center">
//             <Link href="/events" className="btn btn--gold">
//               Know more <ArrowRight size={16} aria-hidden="true" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* <section className="section section--tight">
//         <div className="container two-up">
//           {FEATURE_VIDEOS.map((v, i) => (
//             <div key={v.id} {...rv("up", i)}>
//               <LiteYouTube id={v.id} title={v.title} />
//             </div>
//           ))}
//         </div>
//       </section> */}

//       {/* ---------------------- PHILOSOPHY + GET INVOLVED ------------------ */}
//       {/* <section className="phil section" id="philosophy">
//         <div className="container phil__grid">
//           <div {...rv("left")}>
//             <h2 className="h2 h2--caps serif">Our Philosophy</h2>
//             <Accordion
//               items={PHILOSOPHY.map((p) => ({
//                 id: p.id,
//                 title: p.title,
//                 content: <PhilosophyContent id={p.id} />,
//               }))}
//             />
//           </div>
//           <div {...rv("right", 1)}>
//             <h2 className="h2 h2--caps serif">Get Involved</h2>
//             <p className="body">{GET_INVOLVED_TEXT}</p>
//           </div>
//         </div>
//       </section> */}

//       <section className="gi section section--tight" id="get-involved">
//         <h2 className="h2 h2--caps serif">Get Involved</h2>
//             <p className="body">{GET_INVOLVED_TEXT}</p>
//         <div className="container gi__grid">
//           {GET_INVOLVED_CARDS.map((c, i) => {
//             const Icon = c.icon === "users" ? Users : HeartHandshake;
//             return (
//               <article className="gi-card" key={c.title} {...rv("up", i)}>
//                 <h3>
//                   <Icon size={22} aria-hidden="true" /> {c.title} –
//                 </h3>
//                 <p>
//                   {c.text} {"strong" in c && <strong>{c.strong}</strong>}
//                 </p>
//                 <Link href={c.href} className="gi-card__img">
//                   <Image src={c.image} alt={c.alt} width={600} height={450} sizes="(max-width: 800px) 92vw, 520px" />
//                 </Link>
//                 <Link href={c.href} className="btn btn--gold">
//                   Know more
//                 </Link>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* ------------------------- IMPACT STORIES ------------------------- */}
//       <section className="stories section" id="impact-stories">
//         <div className="container">
//           <h2 className="h2 serif section-title" {...rv("up")}>
//             Impact Stories
//           </h2>
//           <Slider slides={storySlides} label="Impact stories" interval={9000} className="slider--stories" />
//           <div className="center">
//             <Link href="/donate" className="btn btn--maroon">
//               <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ------------------------ VIDEOS & INSTAGRAM ---------------------- */}
//       {/* <section className="section section--tight">
//         <div className="container two-up">
//           {FESTIVAL_VIDEOS.map((v, i) => (
//             <div key={v.id} {...rv("up", i)}>
//               <LiteYouTube id={v.id} title={v.title} />
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section social" id="videos">
//         <div className="container">
//           <h2 className="sub-title" {...rv("up")}>
//             YouTube Videos
//           </h2>
//           <VideoGrid videos={YOUTUBE_VIDEOS} channel={YOUTUBE_CHANNEL} />

//           <h2 className="sub-title sub-title--gap" id="instagram" {...rv("up")}>
//             Instagram @saisevasangh
//           </h2>
//           <div className="insta" {...rv("up", 1)}>
//             <iframe
//               src="https://www.instagram.com/saisevasangh/embed"
//               title="Sai Seva Sangh on Instagram"
//               loading="lazy"
//               scrolling="no"
//             />
//           </div>
//           <div className="center">
//             <a className="btn btn--maroon" href="https://www.instagram.com/saisevasangh/" target="_blank" rel="noopener noreferrer">
//               <Instagram size={16} aria-hidden="true" /> Follow on Instagram
//             </a>
//           </div>
//         </div>
//       </section> */}

//       {/* --------------------------- REVIEWS ------------------------------ */}
//       {/* <section className="section section--tight" id="reviews">
//         <div className="container">
//           <h2 className="sub-title sub-title--gold" {...rv("up")}>
//             Google Reviews
//           </h2>
//           <ReviewsCarousel reviews={REVIEWS} />
//           <div className="center">
//             <a className="link-arrow" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
//               Read all reviews on Google <ExternalLink size={14} aria-hidden="true" />
//             </a>
//           </div>
//         </div>
//       </section> */}

//       {/* ---------------------------- PARTNERS ---------------------------- */}
//       <section className="section section--tight" id="partners">
//   <div className="container">
//     <h2 className="sub-title sub-title--gold" {...rv("up")}>
//       Our Partners
//     </h2>
//   </div>

//   <div className="marquee" {...rv("up", 1)} aria-label="Our partners">
//     <ul className="marquee__track">
//       {/* list is rendered twice so the loop has no gap; the copy is hidden from screen readers */}
//       {[...PARTNERS, ...PARTNERS].map((p, i) => (
//         <li key={`${p.name}-${i}`} aria-hidden={i >= PARTNERS.length}>
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img src={p.logo} alt={i < PARTNERS.length ? p.name : ""} loading="lazy" />
//         </li>
//       ))}
//     </ul>
//   </div>
// </section>

//       {/* ------------------------------ STATS ----------------------------- */}
//       <section className="join" id="join">
//         <div className="container">
//           <h2 className="join__title" {...rv("up")}>
//             Join <span>{ORG_NAME}</span> to express love and support the noble cause
//           </h2>
//           <p className="join__sub" {...rv("up", 1)}>
//             Become A Part of Service to the Humanity Forever.
//           </p>
//           <div className="join__actions" {...rv("up", 2)}>
//             <Link href="/raise-a-collaboration" className="btn btn--gold">
//               Sponsor
//             </Link>
//             <Link href="/volunteer" className="btn btn--gold">
//               Volunteer
//             </Link>
//           </div>
//           <ul className="join__stats">
//             {HOME_STATS.map((s, i) => {
//               const Icon = STAT_ICONS[s.icon];
//               return (
//                 <li key={s.label} {...rv("up", i)}>
//                   <Icon size={30} aria-hidden="true" />
//                   <strong>
//                     <CountUp value={s.value} />
//                   </strong>
//                   <span>{s.label}</span>
//                 </li>
//               );
//             })}
//           </ul>
//           <Link href="/donate" className="btn btn--gold btn--lg">
//             Donate
//           </Link>
//         </div>
//       </section>

//       {/* ------------------------------ BLOGS ----------------------------- */}
//       <section className="blogs section" id="blogs">
//         <div className="container">
//           <h2 className="h2 serif section-title" {...rv("up")}>
//             Blogs
//           </h2>
//           <ul className="blogs__list">
//             {BLOG_POSTS.map((b, i) => (
//               <li key={b.title} className="blog" {...rv("up", i)}>
//                 <div className="blog__date" aria-hidden="true">
//                   <strong>{b.day}</strong>
//                   <span>{b.month}</span>
//                   <small>{b.year}</small>
//                 </div>
//                 <div className="blog__body">
//                   <h3>
//                     <Link href={b.href}>{b.title}</Link>
//                   </h3>
//                   <p>
//                     <CalendarDays size={13} aria-hidden="true" />{" "}
//                     <time>{`${b.month} ${b.day}, ${b.year}`}</time> · Sai Seva Sangh
//                   </p>
//                 </div>
//                 <Link href={b.href} className="link-arrow blog__more" aria-label={`Read more: ${b.title}`}>
//                   Read more <ArrowRight size={14} aria-hidden="true" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="center">
//             <Link href="/blog" className="btn btn--gold">
//               All posts <ArrowRight size={16} aria-hidden="true" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, FileText, GraduationCap, Heart, HeartHandshake, HomeIcon, Users } from "lucide-react";
import { AboutOrganisation, MissionVision, OurImpact } from "@/components/about";
import CountUp from "@/components/CountUp";
import LiteYouTube from "@/components/LiteYouTube";

import Slider from "@/components/Slider";
import {
  BLOG_POSTS,
  GET_INVOLVED_CARDS,
  GET_INVOLVED_TEXT,
  HERO_SLIDES,
  HOME_INTRO,
  HOME_STATS,
  NEWSLETTER_VIDEO,
  ORG_NAME,
  PARTNERS,
  STORIES,
  TAGLINE,
  INSTITUTIONS_TEXT,
  INSTITUTION_CARDS,
  
} from "@/lib/content";
import { rv } from "@/lib/reveal";
import SchoolSpotlight from "@/components/Schoolspotlight";
import OurPrograms from "@/components/OurPrograms";
import BuildingCta from "@/components/Buildingcta";

export const metadata: Metadata = {
  title: { absolute: `${ORG_NAME} — 35 Years of Humble Service | ${TAGLINE}` },
  description:
    "Sai Seva Sangh is a registered charitable organization in Hyderabad providing free residential care and education for orphaned and underprivileged girls for 35 years.",
};

const STAT_ICONS = { hand: HeartHandshake, book: BookOpen, cap: GraduationCap, users: Users } as const;

export default function HomePage() {
  const heroSlides = HERO_SLIDES.map((s) =>
    s.image ? (
      <div className="hslide hslide--image" key={s.title}>
        <Image src={s.image} alt={s.alt ?? s.title} width={1600} height={600} sizes="100vw" priority className="hslide__img" />
      </div>
    ) : (
      <div className="hslide hslide--text" key={s.title}>
        <h2 className="serif">{s.title}</h2>
        <p>{s.text}</p>
        {s.cta && (
          <Link href={s.cta.href} className="btn btn--gold">
            {s.cta.label} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    ),
  );

  const storySlides = STORIES.map((s) => (
    <article className="story-card" key={s.name}>
      <div className="story-card__copy">
        <h3 className="serif">Student beneficiary – {s.name}</h3>
        <ol>
          {s.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      </div>
      <div className="story-card__photo">
        {s.image ? (
          <Image src={s.image} alt={`${s.name}, student beneficiary`} width={325} height={472} sizes="(max-width: 700px) 60vw, 325px" />
        ) : (
          <span className="story-card__initial" aria-hidden="true">
            {s.name.charAt(0)}
          </span>
        )}
      </div>
    </article>
  ));

  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <Slider slides={heroSlides} label="Highlights" className="slider--hero" adaptive />
        <div className="container home-hero__intro" {...rv("up")}>
          <Image src="/images/logo.png" alt="" width={56} height={45} className="home-hero__logo" />
          <h1 className="serif">{HOME_INTRO.title}</h1>
          <p className="home-hero__sub serif">{HOME_INTRO.subtitle}</p>
          <AboutOrganisation />
          {/* <Link href="/donate" className="btn btn--maroon btn--lg">
            <Heart size={16} fill="currentColor" aria-hidden="true" /> Donate
          </Link> */}
        </div>
      </section>

      {/* MISSION, VISION */}
      <MissionVision />
      {/* OUR PROGRAM */}
      <OurPrograms />
        {/* 4S SCHOOL OF EXCELLENCE (renders its own <section>) */}
      <SchoolSpotlight />
      {/*  Building CTA */}
      <BuildingCta />
      {/*  IMPACT */}
      <OurImpact />
      {/* IMPACT STORIES */}
      <section className="stories section" id="impact-stories">
        <div className="container">
          <h2 className="h2 serif section-title" {...rv("up")}>
            Impact Stories
          </h2>
          <Slider slides={storySlides} label="Impact stories" interval={9000} className="slider--stories" />
          <div className="center">
            <Link href="/donate" className="btn btn--maroon">
              <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
            </Link>
          </div>
        </div>
      </section>
    

      {/* LATEST NEWS */}
      <section className="news section" id="latest-news">
        <div className="container">
          <h2 className="h2 serif section-title" {...rv("up")}>
            Latest News/Activities
          </h2>
          <div className="news__grid">
            <article className="news-card" {...rv("up", 1)}>
              <FileText size={44} strokeWidth={1.4} aria-hidden="true" />
              <h3>Newsletters</h3>
              <p>Read our latest newsletter and catch up on everything happening at Sai Seva Sangh.</p>
              <Link href="/newsletters" className="btn btn--gold">
                Know more <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
            <div {...rv("up", 2)}>
              <LiteYouTube id={NEWSLETTER_VIDEO.id} title={NEWSLETTER_VIDEO.title} />
            </div>
          </div>
          <div className="center">
            <Link href="/events" className="btn btn--gold">
              Know more <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    {/* RESIDENTIAL + SCHOOL (side by side) */}
{/* <section className="gi section section--tight" id="our-institutions">
  <div className="container">
    <h2 className="h2 serif section-title" {...rv("up")}>
      Our Institutions
    </h2>
    
  </div>

  <div className="container gi__grid">
    {INSTITUTION_CARDS.map((c, i) => {
      const Icon = c.icon === "home" ? HomeIcon : GraduationCap;
      return (
        <article className="gi-card" key={c.title} id={c.id} {...rv("up", i)}>
          <h3>
            <Icon size={22} aria-hidden="true" /> {c.title} –
          </h3>
          <p>
            {c.text} {"strong" in c && <strong>{c.strong}</strong>}
          </p>
          <Link href={c.href} className="gi-card__img">
            <Image src={c.image} alt={c.alt} width={600} height={450} sizes="(max-width: 800px) 92vw, 520px" />
          </Link>
          <Link href={c.href} className="btn btn--gold">
            Know more
          </Link>
        </article>
      );
    })}
  </div>
</section> */}

      {/* GET INVOLVED */}
      <section className="gi section section--tight" id="get-involved">
        <div className="container">
          <h2 className="h2 serif section-title" {...rv("up")}>
             Get Involved
          </h2>
          <p className="body" style={{ marginBottom: "20px" }}>{GET_INVOLVED_TEXT}</p>
        </div>
        <div className="container gi__grid">
          {GET_INVOLVED_CARDS.map((c, i) => {
            const Icon = c.icon === "users" ? Users : HeartHandshake;
            return (
              <article className="gi-card" key={c.title} {...rv("up", i)}>
                <h3>
                  <Icon size={22} aria-hidden="true" /> {c.title} –
                </h3>
                <p>
                  {c.text} {"strong" in c && <strong>{c.strong}</strong>}
                </p>
                <Link href={c.href} className="gi-card__img">
                  <Image src={c.image} alt={c.alt} width={600} height={450} sizes="(max-width: 800px) 92vw, 520px" />
                </Link>
                <Link href={c.href} className="btn btn--gold">
                  Know more
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      

      {/* PARTNERS */}
      <section className="section section--tight" id="partners">
        <div className="container">
          <h2 className="sub-title sub-title--gold" {...rv("up")}>
            Our Partners
          </h2>
        </div>
        <div className="marquee" {...rv("up", 1)} aria-label="Our partners">
          <ul className="marquee__track">
            {/* rendered twice so the loop has no gap; the copy is hidden from screen readers */}
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <li key={`${p.name}-${i}`} aria-hidden={i >= PARTNERS.length}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={i < PARTNERS.length ? p.name : ""} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JOIN + STATS */}
      {/* <section className="join" id="join">
        <div className="container">
          <h2 className="join__title" {...rv("up")}>
            Join <span>{ORG_NAME}</span> to express love and support the noble cause
          </h2>
          <p className="join__sub" {...rv("up", 1)}>
            Become A Part of Service to the Humanity Forever.
          </p>
          <div className="join__actions" {...rv("up", 2)}>
            <Link href="/raise-a-collaboration" className="btn btn--gold">
              Sponsor
            </Link>
            <Link href="/volunteer" className="btn btn--gold">
              Volunteer
            </Link>
          </div>
          <ul className="join__stats">
            {HOME_STATS.map((s, i) => {
              const Icon = STAT_ICONS[s.icon];
              return (
                <li key={s.label} {...rv("up", i)}>
                  <Icon size={30} aria-hidden="true" />
                  <strong>
                    <CountUp value={s.value} />
                  </strong>
                  <span>{s.label}</span>
                </li>
              );
            })}
          </ul>
          <Link href="/donate" className="btn btn--gold btn--lg">
            Donate
          </Link>
        </div>
      </section> */}

      {/* BLOGS */}
      <section className="blogs section" id="blogs">
        <div className="container">
          <h2 className="h2 serif section-title" {...rv("up")}>
            Blogs
          </h2>
          <ul className="blogs__list">
            {BLOG_POSTS.map((b, i) => (
              <li key={b.title} className="blog" {...rv("up", i)}>
                <div className="blog__date" aria-hidden="true">
                  <strong>{b.day}</strong>
                  <span>{b.month}</span>
                  <small>{b.year}</small>
                </div>
                <div className="blog__body">
                  <h3>
                    <Link href={b.href}>{b.title}</Link>
                  </h3>
                  <p>
                    <CalendarDays size={13} aria-hidden="true" /> <time>{`${b.month} ${b.day}, ${b.year}`}</time> · Sai Seva Sangh
                  </p>
                </div>
                <Link href={b.href} className="link-arrow blog__more" aria-label={`Read more: ${b.title}`}>
                  Read more <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="center">
            <Link href="/blog" className="btn btn--gold">
              All posts <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}