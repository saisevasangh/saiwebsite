"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "sss-cookie-consent";
type Choice = "accepted" | "declined";

/**
 * Cookie notice with Accept / Decline. The choice is remembered in
 * localStorage and can be changed from the round button bottom-left.
 */
export default function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Choice | null;
      if (saved === "accepted" || saved === "declined") setChoice(saved);
      else setOpen(true);
    } catch {
      setOpen(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.setAttribute("data-cookie-open", "");
    else root.removeAttribute("data-cookie-open");
    return () => root.removeAttribute("data-cookie-open");
  }, [open]);

  const decide = (c: Choice) => {
    setChoice(c);
    setOpen(false);
    try {
      localStorage.setItem(KEY, c);
    } catch {
      /* private mode: choice just lasts for this visit */
    }
  };

  if (!ready) return null;

  return open ? (
    <div className="cookie" role="dialog" aria-labelledby="cookie-title" aria-live="polite">
      <h2 id="cookie-title">
        <Cookie size={18} aria-hidden="true" /> We use cookies
      </h2>
      <p>
        We use cookies to make this website work and to understand how it is used, so we can
        improve it. Read our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="cookie__actions">
        <button type="button" className="btn btn--maroon" onClick={() => decide("accepted")}>
          Accept
        </button>
        <button type="button" className="btn btn--ghost" onClick={() => decide("declined")}>
          Decline
        </button>
      </div>
    </div>
  ) : (
    <button
      type="button"
      className="cookie-reopen"
      aria-label={`Cookie settings (currently ${choice ?? "not set"})`}
      onClick={() => setOpen(true)}
    >
      <Cookie size={20} aria-hidden="true" />
    </button>
  );
}
