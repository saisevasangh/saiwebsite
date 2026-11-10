import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, EMAIL, PHONE, PHONE_HREF, REGISTERED_ADDRESS } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.0578805216448!2d78.42986488448443!3d17.467537271535786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91aa7f49d715%3A0x5d9e0778e2a55fe9!2sSri%20Satya%20Sai%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1667566350847!5m2!1sen!2sin";

const PEOPLE = [
  { role: "Secretary — Aruna Pradeep", note: "General administration, donations and service requests", phone: "+919989928551", label: "(+91) 99899 28551" },
  { role: "Sri Satya Sai Vidya Mandir School — T. Bharathi, Principal", phone: "+919000792820", label: "(+91) 9000792820" },
  { role: "Warden (girls’ home)", phone: "+919989928552", label: "(+91) 9989928552 | (+91) 9000266088" },
];

export default function ContactPage() {
  return (
    <section className="contact section">
      <div className="container">
        <h1 className="h2 serif section-title">Contact Us</h1>
        <div className="contact__grid">
          <div className="contact__cards">
            <article>
              <h2>
                <MapPin size={18} aria-hidden="true" /> Corresponding address
              </h2>
              <p>{ADDRESS}</p>
              <p>
                <Phone size={14} aria-hidden="true" /> <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>
              </p>
              <p>
                <Mail size={14} aria-hidden="true" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </article>
            <article>
              <h2>
                <MapPin size={18} aria-hidden="true" /> Registered address
              </h2>
              <p>{REGISTERED_ADDRESS}</p>
            </article>
            {PEOPLE.map((p) => (
              <article key={p.role}>
                <h2>{p.role}</h2>
                {p.note && <p>{p.note}</p>}
                <p>
                  <Phone size={14} aria-hidden="true" /> <a href={`tel:${p.phone}`}>{p.label}</a>
                </p>
              </article>
            ))}
          </div>
          <div className="contact__map">
            <iframe src={MAP} title="Map: Sai Seva Sangh, Moosapet, Hyderabad" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}
