"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { isActive, NAV } from "@/lib/nav";
import { ORG_NAME, TAGLINE } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label={`${ORG_NAME} — home`}>
          <Image src="/images/logo.png" alt="" width={44} height={44} priority className="brand__logo" />
          <span className="brand__text">
            <strong>{ORG_NAME}</strong>
            <small>{TAGLINE}</small>
          </span>
        </Link>

        <nav id="primary-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Primary">
          <ul>
            {NAV.map((item) => {
              const active = isActive(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? "is-active" : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/get-involved#donate" className="btn btn--maroon nav__cta">
            <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
          </Link>
        </nav>

        <Link href="/get-involved#donate" className="btn btn--maroon header__cta">
          <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
