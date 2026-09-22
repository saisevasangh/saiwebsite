"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/content-extra";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);
  const current = openIndex !== null ? items[openIndex] : null;
  const isOpen = openIndex !== null;

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastFocus.current?.focus();
    };
  }, [isOpen, step]);

  return (
    <>
      <div className="gfilters" role="group" aria-label="Filter photos">
        {["All", ...GALLERY_CATEGORIES].map((c) => (
          <button
            key={c}
            type="button"
            className={`gfilter${filter === c ? " is-active" : ""}`}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="gallery" key={filter}>
        {items.map((item, i) => (
          <li key={item.src + item.caption} className="gitem">
            <button
              type="button"
              className="gtile"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpenIndex(i);
              }}
              aria-label={`Open photo: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="gtile__img"
              />
              <span className="gtile__cap">
                <small>{item.category}</small>
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpenIndex(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox__btn lightbox__close"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
          >
            <X size={22} />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__btn lightbox__prev"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__next"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src + current.caption}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              className="lightbox__img"
            />
            <figcaption>
              {current.caption}
              <span>
                {(openIndex ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
