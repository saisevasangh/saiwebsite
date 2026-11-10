import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LotusIcon } from "@/components/icons";
import { ORG_NAME } from "@/lib/content";
import { rv } from "@/lib/reveal";

export default function OurStory() {
  return (
    <section className="story section">
      <div className="container story__grid">
        <div className="story__copy" {...rv("up")}>
          <LotusIcon size={30} className="story__icon" />
          <h2 className="h2 serif">Our Story</h2>
          <p className="body">
            {ORG_NAME} was founded with a simple yet profound vision – to bring hope, education
            and opportunity to every girl child, especially those from underprivileged
            communities and orphanages. What began 33 years ago as a small initiative has grown
            into a committed movement, transforming thousands of young lives through holistic
            support and value-based education.
          </p>
          <Link href="/about#our-journey" className="btn btn--gold">
            Our Journey <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <figure className="story__figure" {...rv("zoom", 1)}>
          <Image
            src="/images/story.jpg"
            alt="Sai Seva Sangh students and staff posing together in traditional dress"
            fill
            sizes="(max-width: 900px) 80vw, 32vw"
            className="story__img"
          />
        </figure>

        <blockquote className="story__quote" {...rv("right", 2)}>
          <span className="story__quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p>Every girl has a dream. Our mission is to give her the opportunity to achieve it.</p>
          <span className="story__quote-mark story__quote-mark--end" aria-hidden="true">
            &rdquo;
          </span>
        </blockquote>
      </div>
    </section>
  );
}
