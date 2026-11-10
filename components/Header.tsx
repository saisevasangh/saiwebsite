"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Heart, Mail, Menu, Phone, Search, X } from "lucide-react";
import { flattenNav, isBranchActive, NAV, type NavItem } from "@/lib/nav";
import { EMAIL, ORG_NAME, PHONE, PHONE_HREF } from "@/lib/content";

/** One menu entry, recursive. Desktop opens on hover/focus (CSS); mobile uses the toggle state. */
function NavNode({
  item,
  depth,
  id,
  pathname,
  expanded,
  toggle,
}: {
  item: NavItem;
  depth: number;
  id: string;
  pathname: string;
  expanded: Set<string>;
  toggle: (id: string) => void;
}) {
  const hasKids = !!item.children?.length;
  const isOpen = expanded.has(id);
  const active = isBranchActive(item, pathname);
  const Chevron = depth === 0 ? ChevronDown : ChevronRight;
  const cls = [
    "nav__item",
    `nav__item--d${depth}`,
    hasKids && "has-sub",
    isOpen && "is-expanded",
    active && "is-active",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={cls}>
      <div className="nav__row">
        {item.href ? (
          <Link
            href={item.href}
            className="nav__link"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
            {hasKids && <Chevron size={13} className="nav__chev" aria-hidden="true" />}
          </Link>
        ) : hasKids ? (
          <button
            type="button"
            className="nav__link nav__link--btn"
            aria-expanded={isOpen}
            onClick={() => toggle(id)}
          >
            {item.label}
            <Chevron size={13} className="nav__chev" aria-hidden="true" />
          </button>
        ) : (
          <span className="nav__link nav__link--plain">{item.label}</span>
        )}
        {hasKids && item.href && (
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
            onClick={() => toggle(id)}
          >
            <ChevronDown size={18} aria-hidden="true" />
          </button>
        )}
      </div>
      {hasKids && (
        <ul className="nav__sub">
          {item.children!.map((child, i) => (
            <NavNode
              key={`${id}-${i}`}
              item={child}
              depth={depth + 1}
              id={`${id}-${i}`}
              pathname={pathname}
              expanded={expanded}
              toggle={toggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [searching, setSearching] = useState(false);
  const [dismissed, setDismissed] = useState(false); // hides desktop hover menus right after a click
  const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const pages = useMemo(() => flattenNav(), []);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return pages
      .filter((p) => `${p.label} ${p.trail.join(" ")}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [pages, query]);

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  useEffect(() => {
    setOpen(false);
    setSearching(false);
    setQuery("");
    setExpanded(new Set());
    setDismissed(true);
  }, [pathname]);

  // Close everything when a menu link is clicked (also when the target is the current page,
  // where the pathname doesn't change), and when tapping/clicking outside the header.
  const closeAll = () => {
    setOpen(false);
    setSearching(false);
    setExpanded(new Set());
    setDismissed(true);
    (document.activeElement as HTMLElement | null)?.blur?.();
  };

  useEffect(() => {
    const onDown = (e: Event) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearching(false);
        setExpanded(new Set());
      }
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  // Close the mobile panel if the window grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open && !searching) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearching(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, searching]);

  useEffect(() => {
    if (searching) searchRef.current?.focus();
  }, [searching]);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <span className="topbar__label">Call Us Today!</span>
          <a href={`tel:${PHONE_HREF}`}>
            <Phone size={13} aria-hidden="true" /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="topbar__mail">
            <Mail size={13} aria-hidden="true" /> {EMAIL}
          </a>
        </div>
      </div>

      <header className="site-header" ref={headerRef}>
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label={`${ORG_NAME} — home`}>
            <Image src="/images/logo.png" alt={ORG_NAME} width={112} height={50} priority className="brand__logo" />
          </Link>

          <nav
            id="primary-nav"
            className={`nav${open ? " is-open" : ""}${dismissed ? " is-dismissed" : ""}`}
            aria-label="Primary"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) closeAll();
            }}
            onMouseLeave={() => setDismissed(false)}
          >
            <ul className="nav__list">
              {NAV.map((item, i) => (
                <NavNode
                  key={item.label}
                  item={item}
                  depth={0}
                  id={`n${i}`}
                  pathname={pathname}
                  expanded={expanded}
                  toggle={toggle}
                />
              ))}
            </ul>
            <Link href="/donate" className="btn btn--maroon nav__cta">
              <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
            </Link>
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="icon-btn"
              aria-label={searching ? "Close search" : "Search"}
              aria-expanded={searching}
              onClick={() => {
                setSearching((v) => !v);
                setOpen(false);
              }}
            >
              {searching ? <X size={18} /> : <Search size={18} />}
            </button>
            <Link href="/donate" className="btn btn--maroon header__cta">
              <Heart size={15} fill="currentColor" aria-hidden="true" /> Donate
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="primary-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => {
                setOpen((v) => !v);
                setSearching(false);
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {searching && (
          <div className="search">
            <form
              className="search__form"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                if (results[0]) router.push(results[0].href);
              }}
            >
              <Search size={18} aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages — e.g. Donate, Diwali, Nutrition"
                aria-label="Search pages"
              />
            </form>
            {query.trim() && (
              <ul className="search__results">
                {results.length ? (
                  results.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} onClick={closeAll}>
                        <strong>{r.label}</strong>
                        {r.trail.length > 0 && <small>{r.trail.join(" › ")}</small>}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="search__empty">No matching pages.</li>
                )}
              </ul>
            )}
          </div>
        )}
      </header>
    </>
  );
}
