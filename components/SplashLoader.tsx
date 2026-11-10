"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_MS = 900; // show the logo animation at least this long
const FADE_MS = 500;

/**
 * Full-screen logo splash shown on the first load of the site (a full page load,
 * not on in-app navigation). Fades out once the page has loaded.
 */
export default function SplashLoader() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

  useEffect(() => {
    const start = performance.now();
    let t1 = 0;
    let t2 = 0;
    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      t1 = window.setTimeout(() => {
        setPhase("fade");
        t2 = window.setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`splash${phase === "fade" ? " splash--out" : ""}`} role="status" aria-label="Loading Sai Seva Sangh">
      <div className="splash__logo">
        <span className="splash__ring" aria-hidden="true" />
        <Image src="/images/logo.png" alt="" width={84} height={67} priority />
      </div>
      <p className="splash__name serif">Sai Seva Sangh</p>
      <p className="splash__tag">Love All, Serve All</p>
      <span className="splash__bar" aria-hidden="true" />
    </div>
  );
}
