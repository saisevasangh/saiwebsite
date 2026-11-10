import { Eye, Target } from "lucide-react";
import { MVV, VALUES } from "@/lib/content";
import { rv } from "@/lib/reveal";

const MVV_ICONS = { target: Target, eye: Eye } as const;

export default function MissionVision() {
  return (
    <section className="mvv">
      <div className="container mvv__grid">
        {MVV.map(({ title, icon, text }, idx) => {
          const Icon = MVV_ICONS[icon];
          return (
            <div key={title} className="mvv__item" {...rv("up", idx)}>
              <span className="mvv__icon">
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="serif">{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}

        <div className="mvv__item" {...rv("up", 2)}>
          <span className="mvv__icon">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2 3 6.5v4c0 5.4 3.6 10.1 9 11.5 5.4-1.4 9-6.1 9-11.5v-4L12 2Z" />
            </svg>
          </span>
          <h3 className="serif">Our Values</h3>
          <ul className="mvv__values">
            {VALUES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
