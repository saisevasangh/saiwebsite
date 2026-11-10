import { PHONE_HREF } from "@/lib/content";

/** Floating "chat on WhatsApp" button (bottom-right on every page). */
export default function WhatsAppButton() {
  const number = PHONE_HREF.replace(/\D/g, "");
  const text = encodeURIComponent("Hello Sai Seva Sangh, I would like to know more.");
  return (
    <a
      className="wa"
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sai Seva Sangh on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.18 1.6 6L4 28l7.17-1.88a12 12 0 0 0 4.86 1.02h.01C22.66 27.14 28 21.75 28 15.12 28 8.45 22.68 3 16.04 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-4.26 1.12 1.14-4.15-.24-.38a9.84 9.84 0 0 1-1.52-5.27c0-5.45 4.45-9.88 9.92-9.88 2.65 0 5.14 1.03 7.01 2.9a9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.45 9.86-9.54 9.86Zm5.43-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
