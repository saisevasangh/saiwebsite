"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = { name: string; text?: string };

/** Horizontally scrollable (swipe on touch, arrows on desktop) review cards. */
export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 260), behavior: "smooth" });
  };

  return (
    <div className="reviews">
      <button type="button" className="reviews__arrow" aria-label="Previous reviews" onClick={() => scrollBy(-1)}>
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <ul className="reviews__track" ref={ref} tabIndex={0} aria-label="Google reviews">
        {reviews.map((r) => (
          <li key={r.name} className="review">
            <div className="review__head">
              <span className="review__avatar" aria-hidden="true">{r.name.trim().charAt(0).toUpperCase()}</span>
              <div>
                <strong>{r.name}</strong>
                <small>Google review</small>
              </div>
            </div>
            <div className="review__stars" role="img" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            {r.text && <p>{r.text}</p>}
          </li>
        ))}
      </ul>
      <button type="button" className="reviews__arrow" aria-label="Next reviews" onClick={() => scrollBy(1)}>
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
