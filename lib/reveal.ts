import type { CSSProperties } from "react";

/**
 * Spread onto any element to make it fade/slide in when it scrolls into view.
 * `i` is a stagger index (each step adds a short delay).
 * Handled by components/ScrollEffects.tsx, styled at the bottom of globals.css.
 */
export const rv = (kind: "up" | "left" | "right" | "zoom" | "clip" = "up", i = 0) => ({
  "data-reveal": kind,
  style: { "--i": i } as CSSProperties,
});
