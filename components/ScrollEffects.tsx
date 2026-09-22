"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Site-wide scroll behaviour:
 *  - reveals every [data-reveal] element as it enters the viewport (with a
 *    scroll-position fallback so nothing can stay stuck at opacity 0)
 *  - exposes --scroll-progress (0–1) for the progress bar in the header
 *  - toggles html[data-scrolled] so the header can gain a shadow
 *  - shows a "back to top" button
 * Skipped for visitors who prefer reduced motion; content is fully visible
 * without JavaScript.
 */
export default function ScrollEffects() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pending = new Set<HTMLElement>();
    const timers: number[] = [];
    let io: IntersectionObserver | undefined;

    const reveal = (el: HTMLElement) => {
      if (!pending.delete(el)) return;
      io?.unobserve(el);
      el.classList.add("is-in");
      timers.push(window.setTimeout(() => el.classList.remove("reveal-init", "is-in"), 1600));
    };

    const checkPending = () => {
      const vh = window.innerHeight;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(el);
      });
    };

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(max > 0 ? Math.min(y / max, 1) : 0));
      if (y > 8) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
      setShowTop(y > 700);
      checkPending();
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    if (!reduce) {
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) reveal(entry.target as HTMLElement);
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
        );
      }
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.remove("reveal-init", "is-in");
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) return;
        el.classList.add("reveal-init");
        pending.add(el);
        io?.observe(el);
      });
      timers.push(window.setTimeout(checkPending, 1200));
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
      pending.clear();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return (
    <button
      type="button"
      className={`to-top${showTop ? " is-visible" : ""}`}
      aria-label="Back to top"
      aria-hidden={!showTop}
      tabIndex={showTop ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
