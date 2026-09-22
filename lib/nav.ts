export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news" },
  { label: "Get Involved", href: "/get-involved" },
] as const;

export function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
