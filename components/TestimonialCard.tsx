import Image from "next/image";
import type { TESTIMONIALS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

type Testimonial = (typeof TESTIMONIALS)[number];

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <article className="testimonial" {...rv("up", index)}>
      <div className="testimonial__media">
        <Image
          src={testimonial.image}
          alt={testimonial.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 30vw"
          className="testimonial__img"
        />
      </div>
      <div className="testimonial__body">
        <span className="testimonial__mark" aria-hidden="true">
          &ldquo;
        </span>
        <p className="testimonial__quote">{testimonial.quote}</p>
        <p className="testimonial__name">{testimonial.name}</p>
      </div>
    </article>
  );
}
