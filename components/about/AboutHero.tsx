import Image from "next/image";
import { ORG_NAME } from "@/lib/content";

export default function AboutHero() {
  return (
    <section className="ah">
      <div className="ah__media">
        <Image
          src="/images/hero.jpg"
          alt="Five smiling schoolgirls reading a book together outdoors"
          fill
          priority
          sizes="100vw"
          className="ah__img"
        />
        <div className="ah__scrim" aria-hidden="true" />
      </div>
      <div className="container ah__inner">
        <div className="ah__copy">
          <p className="eyebrow eyebrow--gold">About Us</p>
          <h1 className="ah__title serif">
            Nurturing Girls
            <br />
            Building a Brighter
            <br />
            Tomorrow
          </h1>
          <span className="ah__rule" aria-hidden="true" />
          <p className="ah__lead">
            {ORG_NAME} is a registered charitable organization working with girl children from
            low-income communities &amp; orphans in the field of education thereby empowering
            women since 33 years.
          </p>
        </div>
      </div>
    </section>
  );
}
