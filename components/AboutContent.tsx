import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target, Users } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import CountUp from "@/components/CountUp";
import { DanceIcon, KarateIcon, LotusIcon } from "@/components/icons";
import {
  CERTIFICATIONS,
  IMPACT_STATS,
  MVV,
  ORG_NAME,
  REG_NO,
  VALUES,
} from "@/lib/content";
import { rv } from "@/lib/reveal";

const MVV_ICONS = { target: Target, eye: Eye } as const;

export default function AboutContent() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------ */}
      <section className="ah">
        <div className="ah__media">
          <Image
            src="/images/hero.jpg"
            alt="Five smiling schoolgirls reading a book together outdoors"
            fill
            priority
            sizes="100vw"
            className="ah__img"
          />
          <div className="ah__scrim" aria-hidden="true" />
        </div>
        <div className="container ah__inner">
          <div className="ah__copy">
            <p className="eyebrow eyebrow--gold">About Us</p>
            <h1 className="ah__title serif">
              Nurturing Girls
              <br />
              Building a Brighter
              <br />
              Tomorrow
            </h1>
            <span className="ah__rule" aria-hidden="true" />
            <p className="ah__lead">
              {ORG_NAME} is a registered charitable organization working with girl children from
              low-income communities &amp; orphans in the field of education thereby empowering
              women since 33 years.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------ STORY ------------------------------ */}
      <section className="story section">
        <div className="container story__grid">
          <div className="story__copy" {...rv("up")}>
            <LotusIcon size={30} className="story__icon" />
            <h2 className="h2 serif">Our Story</h2>
            <p className="body">
              {ORG_NAME} was founded with a simple yet profound vision – to bring hope, education
              and opportunity to every girl child, especially those from underprivileged
              communities and orphanages. What began 33 years ago as a small initiative has grown
              into a committed movement, transforming thousands of young lives through holistic
              support and value-based education.
            </p>
            <Link href="/about#our-journey" className="btn btn--gold">
              Our Journey <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <figure className="story__figure" {...rv("zoom", 1)}>
            <Image
              src="/images/story.jpg"
              alt="Sai Seva Sangh students and staff posing together in traditional dress"
              fill
              sizes="(max-width: 900px) 80vw, 32vw"
              className="story__img"
            />
          </figure>

          <blockquote className="story__quote" {...rv("right", 2)}>
            <span className="story__quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>Every girl has a dream. Our mission is to give her the opportunity to achieve it.</p>
            <span className="story__quote-mark story__quote-mark--end" aria-hidden="true">
              &rdquo;
            </span>
          </blockquote>
        </div>
      </section>

      {/* -------------------------- MISSION / VISION ------------------------ */}
      <section className="mvv">
        <div className="container mvv__grid">
          {MVV.map(({ title, icon, text }, idx) => {
            const Icon = MVV_ICONS[icon];
            return (
              <div key={title} className="mvv__item" {...rv("up", idx)}>
                <span className="mvv__icon">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="serif">{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}

          <div className="mvv__item" {...rv("up", 2)}>
            <span className="mvv__icon">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2 3 6.5v4c0 5.4 3.6 10.1 9 11.5 5.4-1.4 9-6.1 9-11.5v-4L12 2Z" />
              </svg>
            </span>
            <h3 className="serif">Our Values</h3>
            <ul className="mvv__values">
              {VALUES.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------- ORGANISATION --------------------------- */}
      <section className="org section">
        <div className="container org__grid">
          <figure className="org__figure" {...rv("left")}>
            <Image
              src="/images/org.jpg"
              alt="Students smiling in a classroom, working at their desks"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              className="org__img"
            />
          </figure>

          <div className="org__copy" {...rv("up", 1)}>
            <span className="org__kicker">
              <Users size={22} strokeWidth={1.8} aria-hidden="true" />
              <h2 className="h2 serif">About the Organisation</h2>
            </span>
            <p className="body">
              {ORG_NAME} is a <strong>registered</strong> charitable trust in Moosapet, Hyderabad.
              With over 33 years of <strong>dedicated service</strong>, we support orphaned and
              underprivileged girls from low-income and rural backgrounds through free education,
              residential care, healthcare, nutrition, skill development and spiritual &amp; value
              education.
            </p>
            <ul className="badges">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="badge">
                  <strong>{c}</strong>
                  <span>Registered</span>
                </li>
              ))}
              <li className="badge badge--reg">
                <strong>Reg. No.</strong>
                <span>{REG_NO}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------ IMPACT ------------------------------ */}
      <section className="impact">
        <div className="container">
          <div className="impact__head" {...rv("up")}>
            <span className="impact__kicker">
              <Users size={20} strokeWidth={1.8} aria-hidden="true" />
              <LotusIcon size={18} />
            </span>
            <h2 className="h2 serif">Our Impact</h2>
            <p className="body">Changing Lives, Building Futures</p>
          </div>

          <ul className="impact__grid">
            {IMPACT_STATS.map(({ value, label, note, icon }, idx) => {
              const Icon = icon === "dance" ? DanceIcon : icon === "karate" ? KarateIcon : icon;
              return (
                <li key={label} className="impact-card" {...rv("up", idx)}>
                  <span className="impact-card__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <strong className="serif">
                    <CountUp value={value} />
                  </strong>
                  <span className="impact-card__label">{label}</span>
                  {note && <span className="impact-card__note">({note})</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------------------------- WHY WE MATTER -------------------------- */}
      <section className="why section">
        <div className="container why__grid">
          <figure className="why__figure" {...rv("left")}>
            <Image
              src="/images/why.jpg"
              alt="A girl in a yellow uniform reading, with the words Educate, Empower, Enlighten overlaid"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="why__img"
            />
          </figure>

          <div className="why__copy" {...rv("up", 1)}>
            <LotusIcon size={26} className="why__icon" />
            <h2 className="h2 serif">Why We Matter</h2>
            <p className="body">
              We believe that education is not just about academics, but about building
              confidence, character and the skills to create a better future. Every girl we
              support today becomes a role model for tomorrow, creating a ripple effect of change
              in her family, community and society.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
