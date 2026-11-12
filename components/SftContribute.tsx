"use client";

import { useState } from "react";
import { ArrowRight, Heart, Minus, Plus } from "lucide-react";

const CSS = `
.sft{position:relative;overflow:hidden;border-radius:24px;padding:clamp(24px,4vw,44px);background:linear-gradient(135deg,var(--maroon-900),var(--maroon) 60%,#8b2a1c);color:#fff;box-shadow:0 22px 50px rgba(92,15,22,.28)}
.sft::after{content:"";position:absolute;right:-60px;top:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(246,182,32,.35),transparent 70%);pointer-events:none}
.sft__grid{position:relative;display:grid;grid-template-columns:1.1fr 1fr;gap:clamp(24px,4vw,48px);align-items:center}
.sft__kicker{margin:0 0 6px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.78rem;color:var(--gold)}
.sft__title{margin:0 0 10px;color:#fff;font-size:clamp(1.5rem,3vw,2.2rem);line-height:1.2}
.sft__title em{font-style:normal;color:var(--gold)}
.sft__lead{margin:0 0 22px;color:#fbe9e9}
.sft__label{display:block;margin-bottom:8px;font-size:.85rem;font-weight:600;color:#fbe9e9}
.sft__stepper{display:inline-flex;align-items:center;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);overflow:hidden}
.sft__stepper button{display:grid;place-items:center;width:48px;height:48px;border:0;background:transparent;color:#fff;cursor:pointer;transition:background .2s}
.sft__stepper button:hover{background:rgba(255,255,255,.18)}
.sft__stepper input{width:96px;height:48px;border:0;background:transparent;color:#fff;text-align:center;font-size:1.3rem;font-weight:700;font-family:inherit;appearance:textfield;-moz-appearance:textfield}
.sft__stepper input::-webkit-outer-spin-button,.sft__stepper input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.sft__stepper input:focus{outline:2px solid var(--gold);outline-offset:-2px}
.sft__unit{margin-left:12px;font-weight:700;color:var(--gold)}
.sft__chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.sft__chip{padding:8px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-weight:600;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.sft__chip:hover{border-color:var(--gold)}
.sft__chip.is-on{background:var(--gold);border-color:var(--gold);color:var(--maroon-900)}
.sft__card{border-radius:20px;padding:clamp(20px,3vw,30px);background:#fff;color:var(--text);text-align:center;box-shadow:0 14px 34px rgba(0,0,0,.25)}
.sft__small{margin:0;font-size:.85rem;color:var(--muted)}
.sft__total{margin:4px 0 2px;font-size:clamp(2rem,4.5vw,3rem);line-height:1.1;color:var(--maroon)}
.sft__usd{margin:0 0 14px;font-weight:600;color:var(--orange-600)}
.sft__calc{margin:0 0 18px;font-size:.9rem;color:var(--muted)}
.sft__btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px 20px;border-radius:999px;background:linear-gradient(180deg,var(--gold),var(--gold-600));color:var(--maroon-900);font-weight:800;box-shadow:0 10px 24px rgba(0,0,0,.25);transition:transform .2s ease}
.sft__btn:hover{transform:translateY(-2px)}
.sft__note{margin:14px 0 0;font-size:.8rem;color:var(--muted)}
@media (max-width:860px){.sft__grid{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){.sft__btn,.sft__stepper button,.sft__chip{transition:none}}
`;

const MAX = 23521; // total built-up area, SFT
const CHIPS = [1, 5, 10, 25, 50, 100];

export default function SftContribute({
  rateInr = 3600,
  rateUsd = 38,
  href,
}: {
  rateInr?: number;
  rateUsd?: number;
  href: string;
}) {
  const [sft, setSft] = useState(1);
  const set = (n: number) => setSft(Math.min(MAX, Math.max(1, Math.round(n) || 1)));
  const inr = (n: number) => n.toLocaleString("en-IN");

  return (
    <div className="sft">
      <style>{CSS}</style>
      <div className="sft__grid">
        <div>
          <p className="sft__kicker">Every square foot counts</p>
          <h3 className="sft__title serif">
            Contribute <em>1 SFT</em> or multiples of SFT
          </h3>
          <p className="sft__lead">
            Every square foot you contribute is a giant step towards a future.
          </p>

          <label className="sft__label" htmlFor="sft-input">
            How many square feet would you like to contribute?
          </label>
          <div>
            <div className="sft__stepper">
              <button type="button" aria-label="Decrease square feet" onClick={() => set(sft - 1)}>
                <Minus size={18} aria-hidden="true" />
              </button>
              <input
                id="sft-input"
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX}
                value={sft}
                onChange={(e) => set(Number(e.target.value))}
              />
              <button type="button" aria-label="Increase square feet" onClick={() => set(sft + 1)}>
                <Plus size={18} aria-hidden="true" />
              </button>
            </div>
            <span className="sft__unit">SFT</span>
          </div>
          <div className="sft__chips" role="group" aria-label="Quick amounts">
            {CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                className={`sft__chip${sft === c ? " is-on" : ""}`}
                onClick={() => set(c)}
              >
                {c} SFT
              </button>
            ))}
          </div>
        </div>

        <div className="sft__card" aria-live="polite">
          <p className="sft__small">Your contribution</p>
          <p className="sft__total serif">₹ {inr(sft * rateInr)}</p>
          <p className="sft__usd">≈ $ {inr(sft * rateUsd)}</p>
          <p className="sft__calc">
            {inr(sft)} SFT × ₹ {inr(rateInr)} per SFT
          </p>
          <a className="sft__btn" href={href} target="_blank" rel="noopener noreferrer">
            <Heart size={16} fill="currentColor" aria-hidden="true" /> Contribute now <ArrowRight size={16} aria-hidden="true" />
          </a>
          <p className="sft__note">Eligible for tax benefits under Section 80G.</p>
        </div>
      </div>
    </div>
  );
}