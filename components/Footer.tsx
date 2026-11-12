import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Award, BadgeCheck, FileText, Globe, HandHeart, Handshake, Mail, MapPin, Phone, Stamp } from "lucide-react";
import { ADDRESS, EMAIL, ORG_NAME, PHONE, PHONE_HREF, SOCIALS, TAGLINE, WEBSITE } from "@/lib/content";
import { SOCIAL_ICON_MAP } from "@/components/icons";
import { footerLinks, LEGAL_LINKS } from "@/lib/nav";
import { rv } from "@/lib/reveal";

/** Point each href at the certificate PDF / page (e.g. "/docs/80g.pdf" or "/downloads"). */
const CERTIFICATES = [
  { label: "80G Certificate", icon: HandHeart, href: "/docs/80G_SAI SEVA SANGH.pdf" },
  { label: "Registration", icon: Stamp, href: "/docs/Sai Seva Sangh _ Society RegistrationPapers.pdf" },
  { label: "CSR Certificate", icon: Handshake, href: "/docs/CSR Form_Sai Seva Sangh.pdf" },
  { label: "FCRA", icon: Globe, href: "/docs/FCRA Renewal-Certificate_2016.pdf" },
  { label: "12A", icon: BadgeCheck, href: "/docs/12A_SAI SEVA SANGH.pdf" },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3805.8126490517334!2d78.42976!3d17.468679000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91aa7f49d715%3A0x5d9e0778e2a55fe9!2sSri%20Satya%20Sai%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1794463131617!5m2!1sen!2sin";

/* Self-contained styles for the new certificate badges, map and "Follow Us" heading */
const CSS = `
.footer__certs{list-style:none;margin:18px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.footer__cert{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 8px;text-align:center;border:1px solid rgba(255,255,255,.28);border-radius:14px;background:rgba(255,255,255,.06);color:#f6dede;font-size:.78rem;font-weight:600;line-height:1.3;transition:transform .2s ease,background .2s ease,border-color .2s ease}
.footer__cert:hover,.footer__cert:focus-visible{transform:translateY(-3px);background:rgba(255,255,255,.12);border-color:var(--gold);color:#fff}
.footer__cert-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;border:1.5px solid var(--gold);color:var(--gold)}
.footer__follow{margin:20px 0 10px;font-size:.95rem}
.footer__map{margin-top:20px;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.25);line-height:0}
.footer__map iframe{display:block;width:100%;height:210px;border:0}
@media (prefers-reduced-motion:reduce){.footer__cert{transition:none}}
`;

export default function Footer() {
  return (
    <footer className="footer">
      <style>{CSS}</style>
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand" {...rv("up")}>
          <Link href="/" className="footer__brand" aria-label={`${ORG_NAME} — home`}>
            <Image src="/images/logo.png" alt="" width={112} height={50} className="footer__logo" />
            <span>
              <strong>{ORG_NAME}</strong>
              <small>{TAGLINE}</small>
            </span>
          </Link>
          <ul className="footer__certs">
            {CERTIFICATES.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <Link href={href} className="footer__cert">
                  <span className="footer__cert-icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="footer__col" {...rv("up", 1)}>
          <h2>Quick Links</h2>
          <ul>
            {footerLinks().map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col" {...rv("up", 2)}>
          <h2>Contact Us</h2>
          <ul className="footer__contact">
            <li>
              <MapPin size={15} aria-hidden="true" /> {ADDRESS}
            </li>
            <li>
              <a href={`tel:${PHONE_HREF}`}>
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

          <h2 className="footer__follow">Follow Us</h2>
          <ul className="footer__social">
            {SOCIALS.map(({ label, icon, href }) => {
              const Icon = typeof icon === "string" ? SOCIAL_ICON_MAP[icon] : icon;
              return (
                <li key={label}>
                  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon size={13} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="footer__map">
            <iframe
              src={MAP_SRC}
              title="Sri Satya Sai Vidya Mandir on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <nav className="footer__legal" aria-label="Policies">
        <ul className="container">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href!}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

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




