import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import { SectionHead } from "@/components/ui";
import { EMAIL, ORG_NAME } from "@/lib/content";
import { WAYS } from "@/lib/content-extra";
import { rv } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Sponsor a girl's education, partner with us through CSR, volunteer, or donate to Sai Seva Sangh.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageBanner
        crumb="Get Involved"
        image="/images/why.jpg"
        alt="A girl in a yellow uniform reading"
        title="Together, Let's Make Education a Winning Game for All"
        lead={`Every opportunity at ${ORG_NAME} is free of cost. Your support is what makes that possible — here are a few ways to help.`}
      />

      <section className="page-section">
        <div className="container">
          <SectionHead kicker="Ways to help" title="Choose how you'd like to give" />
          <div className="ways">
            {WAYS.map(({ title, text, icon: Icon, tone }, idx) => (
              <article key={title} className="way" {...rv("up", idx)}>
                <span className={`way__icon way__icon--${tone}`}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="page-section page-section--warm">
        <div className="container contact">
          <div className="contact__info" {...rv("up")}>
            <p className="eyebrow eyebrow--orange">Talk to us</p>
            <h2 className="h2 serif">We would love to hear from you</h2>
            <p className="body">
              Tell us how you would like to help — sponsor a student, partner as a CSR donor,
              volunteer your time, or simply ask a question. We will get back to you by email.
            </p>
            <a href={`mailto:${EMAIL}`} className="contact__mail">
              <span>
                <Mail size={18} aria-hidden="true" />
              </span>
              {EMAIL}
            </a>
          </div>
          <div className="contact__card" {...rv("right", 1)}>
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
