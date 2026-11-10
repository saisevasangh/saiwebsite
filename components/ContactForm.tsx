"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { EMAIL } from "@/lib/content";
import { INTENTS } from "@/lib/content-extra";

/**
 * There is no backend yet: submitting opens the visitor's email app with the
 * message pre-filled and addressed to the trust. Swap `onSubmit` for a fetch()
 * to your own API route when you are ready.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const intent = String(data.get("intent") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `${intent} — message from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="field">
        <span>I would like to</span>
        <select name="intent" defaultValue={INTENTS[0]}>
          {INTENTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn--maroon btn--lg">
        Send message <Send size={16} aria-hidden="true" />
      </button>
      {sent && (
        <p className="form__note" role="status">
          Your email app should now be open with the message ready to send. If it did not open,
          write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
