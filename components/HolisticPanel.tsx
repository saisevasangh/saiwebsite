import { HOLISTIC } from "@/lib/content";
import { rv } from "@/lib/reveal";

/** Peach "Holistic Development" panel. `wide` lays the four items out in one row. */
export default function HolisticPanel({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`holistic${wide ? " holistic--wide" : ""}`} {...rv("right", 2)}>
      <h2 className="holistic__title serif">Holistic Development</h2>
      <div className="holistic__grid">
        {HOLISTIC.map(({ title, text, icon: Icon, tone }) => (
          <article key={title} className={`hitem hitem--${tone}`}>
            <span className="hitem__icon">
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
