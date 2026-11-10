"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  slides: ReactNode[];
  label: string;
  interval?: number; // ms; 0 disables autoplay
  className?: string;
};

/**
 * Accessible one-slide-at-a-time carousel: arrows, dots, swipe, keyboard,
 * autoplay that pauses on hover/focus and is off for reduced-motion users.
 */
export default function Slider({ slides, label, interval = 6500, className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (!interval || paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(t);
  }, [interval, paused, count]);

  return (
    <div
      className={`slider ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onPointerDown={(e) => {
        startX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      <div className="slider__viewport">
        <div className="slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className="slider__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Previous slide" onClick={() => go(index - 1)}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" className="slider__arrow slider__arrow--next" aria-label="Next slide" onClick={() => go(index + 1)}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
          <div className="slider__dots" role="group" aria-label="Choose slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? "is-active" : undefined}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
