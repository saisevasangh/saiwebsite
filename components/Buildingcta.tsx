import Image from "next/image";
import Link from "next/link";
import { Building2, Heart } from "lucide-react";

/** Change this to your payment / donation page (or an external payment link). */
const PAYMENT_HREF = "https://rzp.io/rzp/4sschoolofexcellence";

/* Self-contained styles: no changes to globals.css needed */
const CSS = `
.bcta{position:relative;isolation:isolate;overflow:hidden;color:#fff;text-align:center;padding-block:clamp(64px,9vw,120px)}
.bcta__bg{object-fit:cover;z-index:-2}
.bcta::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(135deg,rgba(92,15,22,.92),rgba(115,15,27,.78) 55%,rgba(217,123,41,.55))}
.bcta__inner{width:min(100% - 40px,820px);margin-inline:auto}
.bcta__badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:rgba(246,182,32,.18);border:1px solid rgba(246,182,32,.6);color:var(--gold);font-weight:700;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase}
.bcta__title{margin:18px 0 12px;font-size:clamp(1.9rem,5vw,3.4rem);line-height:1.15;color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.35)}
.bcta__title em{font-style:normal;color:var(--gold)}
.bcta__text{margin:0 auto 30px;max-width:620px;font-size:clamp(1rem,1.6vw,1.2rem);color:#fbe9e9}
.bcta__btn{position:relative;display:inline-flex;align-items:center;gap:10px;padding:16px 34px;border-radius:999px;background:linear-gradient(180deg,var(--gold),var(--gold-600));color:var(--maroon-900);font-weight:800;font-size:1.05rem;box-shadow:0 12px 30px rgba(0,0,0,.35);transition:transform .2s ease,box-shadow .2s ease}
.bcta__btn:hover,.bcta__btn:focus-visible{transform:translateY(-3px) scale(1.03);box-shadow:0 18px 38px rgba(0,0,0,.45)}
.bcta__btn::after{content:"";position:absolute;inset:0;border-radius:inherit;border:2px solid var(--gold);animation:bctaPulse 2s ease-out infinite}
@keyframes bctaPulse{0%{transform:scale(1);opacity:.9}100%{transform:scale(1.25,1.6);opacity:0}}
@media (prefers-reduced-motion:reduce){.bcta__btn,.bcta__btn::after{transition:none;animation:none}}
`;

export default function BuildingCta() {
  return (
    <section className="bcta" aria-labelledby="bcta-title">
      <style>{CSS}</style>
      <Image src="/images/building.jpg" alt="" fill sizes="100vw" className="bcta__bg" />
      <div className="bcta__inner">
        <span className="bcta__badge">
          <Building2 size={16} aria-hidden="true" /> 4S School of Excellence
        </span>
        <h2 id="bcta-title" className="bcta__title serif">
          Be a part of <em>building construction</em>
        </h2>
        <p className="bcta__text">
          Every contribution lays a brick towards a school that will shape the futures of girls who need it most.
        </p>
        <Link href={PAYMENT_HREF} className="bcta__btn">
          <Heart size={18} fill="currentColor" aria-hidden="true" /> Click here for payment
        </Link>
      </div>
    </section>
  );
}