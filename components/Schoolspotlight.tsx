"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

export const SCHOOL_SITE = "http://localhost:3000/4s-school-of-excellence/";
export const SCHOOL_VIDEO = "https://www.youtube.com/watch?v=WC6f1zsGX00&t=1s";

const DEFAULT_SLIDES = [
  { src: "/images/4s/building.jpg", alt: "Render of the 4S School of Excellence building" },
  { src: "/images/4s/program-digital.jpg", alt: "Students working on laptops" },
  { src: "/images/4s/program-arts.jpg", alt: "Students performing classical dance" },
  { src: "/images/4s/program-animation.jpg", alt: "A student creating digital artwork" },
  { src: "/images/4s/program-wellness.jpg", alt: "Students learning nutrition and hospitality" },
];

const FACTS = [
  "Duration: 4 Years",
  "4 Skills",
  "Age Group: 14 Years to 18 Years",
  "One-Year Corporate Exposure",
  "Only for Orphan & Underprivileged Girl Children",
  "Totally Free of Cost",
];

/** Left: image slider. Right: content + buttons to the website and the video. */
export default function SchoolSpotlight({
  slides = DEFAULT_SLIDES,
  interval = 4500,
}: {
  slides?: { src: string; alt: string }[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % n), interval);
    return () => window.clearInterval(t);
  }, [paused, n, interval]);

  return (
    <section className="spot" id="4s-school" aria-labelledby="spot-title">
      <div className="container spot__grid">
        <div
          className="spot__slider"
          role="group"
          aria-roledescription="carousel"
          aria-label="4S School of Excellence photos"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {slides.map((s, k) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className={`spot__img${k === i ? " is-on" : ""}`}
              aria-hidden={k !== i}
              priority={k === 0}
            />
          ))}
          <button type="button" className="spot__nav spot__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" className="spot__nav spot__nav--next" onClick={() => go(1)} aria-label="Next photo">
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <div className="spot__dots">
            {slides.map((s, k) => (
              <button
                key={s.src}
                type="button"
                className={k === i ? "is-on" : ""}
                onClick={() => setI(k)}
                aria-label={`Show photo ${k + 1}`}
                aria-current={k === i}
              />
            ))}
          </div>
        </div>

        <div className="spot__copy">
          <p className="spot__kicker">Sai Seva Sangh</p>
          <h2 id="spot-title" className="h2 serif spot__title">
            4S School of Excellence
          </h2>
          <p className="spot__tag">Filling the gap between education and the employment potential.</p>
          <p className="spot__big serif">
            A building that will build <em>600 futures</em> every year!
          </p>
          <ul className="spot__list">
            {FACTS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="spot__motto">
            Start Early. Skill Early. <b>Earn Early.</b>
          </p>
          <div className="spot__btns">
            <a className="btn btn--maroon" href={SCHOOL_SITE} target="_blank" rel="noopener noreferrer">
              Know more <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--gold" href={SCHOOL_VIDEO} target="_blank" rel="noopener noreferrer">
              <Play size={16} aria-hidden="true" /> Watch video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}