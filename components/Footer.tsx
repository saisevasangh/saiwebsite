import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Globe, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, EMAIL, FOOTER_STATS, ORG_NAME, PHONE, SOCIALS, TAGLINE, WEBSITE } from "@/lib/content";
import { SOCIAL_ICON_MAP } from "@/components/icons";
import { NAV } from "@/lib/nav";
import { rv } from "@/lib/reveal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand" {...rv("up")}>
          <Link href="/" className="footer__brand" aria-label={`${ORG_NAME} — home`}>
            <Image src="/images/logo.png" alt="" width={40} height={40} className="footer__logo" />
            <span>
              <strong>{ORG_NAME}</strong>
              <small>{TAGLINE}</small>
            </span>
          </Link>
          <ul className="footer__stats">
            {FOOTER_STATS.map(({ value, label }) => (
              <li key={label}>
                <span className="footer__stat-ring">{value}</span>
                <span className="footer__stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="footer__col" {...rv("up", 1)}>
          <h2>Quick Links</h2>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col" {...rv("up", 2)}>
          <h2>Get In Touch</h2>
          <ul className="footer__contact">
            <li>
              <MapPin size={15} aria-hidden="true" /> {ADDRESS}
            </li>
            <li>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <Phone size={15} aria-hidden="true" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={15} aria-hidden="true" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={`https://${WEBSITE}`}>
                <Globe size={15} aria-hidden="true" /> {WEBSITE}
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            {SOCIALS.map(({ label, icon, href }) => {
              const Icon = typeof icon === "string" ? SOCIAL_ICON_MAP[icon] : icon;
              return (
                <li key={label}>
                  <a href={href} aria-label={label}>
                    <Icon size={13} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {new Date().getFullYear()} {ORG_NAME}. All Rights Reserved.</p>
          <p className="footer__motto">
            <span aria-hidden="true" />
            {TAGLINE}.<span aria-hidden="true" />
          </p>
          <a href="#top" className="footer__top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
