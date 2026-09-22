import { Instagram as InstagramIcon, Linkedin as LinkedinIcon, Facebook as FacebookIcon } from "lucide-react";

/** Bharatanatyam dancer pose, drawn as a simple filled silhouette. */
export function DanceIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.2a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Z" />
      <path d="M12.6 6.4c-.5-.2-1.1-.1-1.5.3l-2 2c-.2.2-.3.4-.4.7l-.7 2.6c-.1.5.2 1 .7 1.1.5.1 1-.2 1.1-.7l.6-2.3.9-.9-.6 3.5-3.6 4.6a1 1 0 1 0 1.6 1.2l2.7-3.5.9 3.9a1 1 0 0 0 1.9-.5l-1-4.5.9-3.6 1.3 2.6c.1.3.4.5.6.6l3 1a1 1 0 0 0 .6-1.9l-2.6-.9-1.7-3.4c-.2-.4-.5-.7-.9-.8l-2.8-1Z" />
    </svg>
  );
}

/** Karate kick pose, drawn as a simple filled silhouette. */
export function KarateIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.3 2.1a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Z" />
      <path d="M9.6 6.3c-.5 0-.9.3-1.1.7L6.9 10c-.1.3-.2.6-.1.9l.7 3a1 1 0 0 0 1.9-.4l-.6-2.6.6-1.3.2 2.7c0 .3.1.6.3.8l3.6 3.9a1 1 0 0 0 1.5-1.3l-2.6-2.9.2-3.5 1.8 1.6.9 3.1a1 1 0 0 0 1.9-.6l-1-3.4c-.1-.3-.3-.6-.5-.8l-2.9-2.5c-.3-.3-.7-.4-1.1-.4l-2.7.1Z" />
      <path d="M8.1 14.9 5 17.6a1 1 0 0 0 1.3 1.5l3.4-3-1.6-1.2Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24 24 0 0 1 0-10 3 3 0 0 1 2.1-2.1 62 62 0 0 1 15 0A3 3 0 0 1 21.9 7a24 24 0 0 1 0 10 3 3 0 0 1-2.1 2.1 62 62 0 0 1-15 0A3 3 0 0 1 2.5 17Z" />
      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}

export function XIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
    </svg>
  );
}

export const SOCIAL_ICON_MAP = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  x: XIcon,
} as const;

/** Small lotus-flower mark used as a section kicker icon throughout the site. */
export function LotusIcon({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4c1.6 2.6 2.4 5 2.4 7.4S16 16 16 16s-2.4-2.2-2.4-4.6S14.4 6.6 16 4Z"
        fill="currentColor"
      />
      <path
        d="M6.5 9c2.9.6 5 1.8 6.6 3.6 1.6 1.8 2.2 3.4 2.2 3.4s-2.3.6-4.6-.5C8.4 14.4 6.9 12.3 6.5 9Z"
        fill="currentColor"
        opacity=".85"
      />
      <path
        d="M25.5 9c-.4 3.3-1.9 5.4-4.2 6.5-2.3 1.1-4.6.5-4.6.5s.6-1.6 2.2-3.4C20.5 10.8 22.6 9.6 25.5 9Z"
        fill="currentColor"
        opacity=".85"
      />
      <path
        d="M16 16c2.6 1 4.6 2.6 5.9 4.9 1.3 2.3 1.6 4.3 1.6 4.3s-2.6-.2-5-1.9c-2.3-1.7-3.5-3.8-3.5-3.8s-1.2 2.1-3.5 3.8c-2.4 1.7-5 1.9-5 1.9s.3-2 1.6-4.3C9.4 18.6 11.4 17 16 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
