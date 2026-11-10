# Sai Seva Sangh — Next.js site

Responsive Next.js (App Router, TypeScript) build of the "About Us" page design, following the
same structure and conventions as the 4S School of Excellence project.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check:

```bash
npm run build && npm start
```

Requires Node 18.18+ (Node 20+ recommended) and an internet connection the first time
(`next/font` downloads Inter and Playfair Display from Google Fonts).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home page: hero carousel, Power of 10 Club, Latest News, videos, Our Philosophy, Get Involved, Impact Stories, YouTube + Instagram, Google Reviews, Partners, impact counters, Blogs |
| `/about` | About Us (hero, story, mission/vision/values, impact) |
| `/project` | The 4S School of Excellence building project: facts, floors, four skills, holistic development, financials, how to contribute (ported from the 4S project) |
| `/contact-us` | Addresses, phone numbers, emails and map from the live site |
| every other menu link | Placeholder page generated from `lib/nav.ts` by `app/[...slug]/page.tsx`, with a link to the same page on saisevasangh.org |

## Menu

`lib/nav.ts` holds the full menu tree (3 levels) copied from saisevasangh.org. Edit it there; the header
(desktop hover/focus dropdowns, mobile accordion), footer links, search box and placeholder routes all read it.
Items with no `href` are plain group labels, as on the live site.

## Structure

```
app/layout.tsx        fonts (Inter + Playfair Display), metadata, shared header/footer
app/about/page.tsx     the designed page
app/<route>/page.tsx   placeholder pages for the rest of the nav
app/globals.css        all styles (plain CSS, no Tailwind)
components/            Header, Footer, CtaBanner, ScrollEffects, CountUp, icons.tsx
lib/content.ts         organisation details, stats, mission/vision/values, certifications
lib/nav.ts             nav links shared by header and footer
public/images/         photos cropped from the design mockup
```

## Notes

- Only the About Us page had a design. `/` redirects to it, and the other nav items
  (`Our Programs`, `Impact`, `Gallery`, `News & Events`, `Get Involved`) are simple placeholder
  pages using the same header, footer and colors, ready to be replaced once you share a mockup
  for each — the same way the inner pages were added to the 4S project.
- Two icons (the Bharatanatyam dancer and the karate pose in "Our Impact") aren't in the icon
  library used (lucide-react), so they're small custom SVG silhouettes in `components/icons.tsx`.
- Photos in `public/images/` were cropped from the mockup PNG (1024px wide), so they're soft at
  large sizes. Drop in higher-resolution originals under the same file names to sharpen them up.
- The header's Donate button and the CTA banner's "Donate Now" both link to
  `/get-involved#donate`, a placeholder page for now.
- Motion: page-load animation on the hero, scroll reveals on every section, a progress bar under
  the header, a back-to-top button, and hover effects on cards/photos/buttons — same approach as
  the 4S site, and switched off for visitors with "reduce motion" turned on.
