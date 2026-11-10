import Image from "next/image";
import { LotusIcon } from "@/components/icons";
import { rv } from "@/lib/reveal";

export default function WhyWeMatter() {
  return (
    <section className="why section">
      <div className="container why__grid">
        <figure className="why__figure" {...rv("left")}>
          <Image
            src="/images/why.jpg"
            alt="A girl in a yellow uniform reading, with the words Educate, Empower, Enlighten overlaid"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="why__img"
          />
        </figure>

        <div className="why__copy" {...rv("up", 1)}>
          <LotusIcon size={26} className="why__icon" />
          <h2 className="h2 serif">Why We Matter</h2>
          <p className="body">
            We believe that education is not just about academics, but about building
            confidence, character and the skills to create a better future. Every girl we
            support today becomes a role model for tomorrow, creating a ripple effect of change
            in her family, community and society.
          </p>
        </div>
      </div>
    </section>
  );
}
