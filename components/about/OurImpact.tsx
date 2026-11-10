import { Users } from "lucide-react";
import CountUp from "@/components/CountUp";
import { DanceIcon, KarateIcon, LotusIcon } from "@/components/icons";
import { IMPACT_STATS, GLANCE_STATS, PROGRAMME_HIGHLIGHTS } from "@/lib/content";
import { rv } from "@/lib/reveal";

export default function OurImpact() {
  return (
    <section className="impact">
      <div className="container">
        <div className="impact__head" {...rv("up")}>
          <span className="impact__kicker">
            <Users size={20} strokeWidth={1.8} aria-hidden="true" />
            <LotusIcon size={18} />
          </span>
          <h2 className="h2 serif">Our Impact</h2>
          <p className="body">Changing Lives, Building Futures</p>
        </div>

        {/* <ul className="impact__grid">
          {IMPACT_STATS.map(({ value, label, note, icon }, idx) => {
            const Icon = icon === "dance" ? DanceIcon : icon === "karate" ? KarateIcon : icon;
            return (
              <li key={label} className="impact-card" {...rv("up", idx)}>
                <span className="impact-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <strong className="serif">
                  <CountUp value={value} />
                </strong>
                <span className="impact-card__label">{label}</span>
                {note && <span className="impact-card__note">({note})</span>}
              </li>
            );
          })}
        </ul> */}

        {/* 35 Years of Impact at a Glance */}
        <div className="glance" {...rv("up")}>
          <h3 className="glance__title">35 Years of Impact at a Glance</h3>
          <ul className="glance__grid">
            {GLANCE_STATS.map(({ value, label, note, accent }, idx) => (
              <li key={label} className="glance__cell" {...rv("up", idx)}>
                <strong className={`serif glance__value${accent ? " glance__value--gold" : ""}`}>
                  <CountUp value={value} />
                </strong>
                <span className="glance__label">
                  {label}
                  {note && <> ({note})</>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Programme Highlights */}
        <div className="highlights">
          <h3 className="highlights__title serif" {...rv("up")}>
            Programme Highlights — Academic Year 2025–2026
          </h3>
          <p className="body highlights__intro" {...rv("up")}>
            This year, Sai Seva Sangh has continued to expand its reach and deepen its impact
            across multiple dimensions of education and skill development:
          </p>
          <ul className="highlights__grid">
            {PROGRAMME_HIGHLIGHTS.map(({ value, label }, idx) => (
              <li key={label} className="highlight" {...rv("up", idx % 2)}>
                <strong className="serif highlight__value">
                  <CountUp value={value} />
                </strong>
                <span className="highlight__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}