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
| `/` | Home — shows the designed page (see below) |
| `/about` | The same page, reachable directly as "About Us" too |
| `/programs` | Six program cards: Education Support, Higher Education & Careers, Residential Care, Healthcare & Nutrition, Skill Development, Spiritual & Value Education |
| `/impact` | The eight impact stats (animated count-up), a four-step "how change happens" pathway, three testimonials, and the registration badges |
| `/gallery` | Filterable photo grid with a keyboard-friendly lightbox |
| `/news`, `/news/[slug]` | Featured story, story cards and article pages |
| `/get-involved` | Four ways to help and a donate/volunteer contact form (`#donate`) |

Only one page had a design (the "About Us" mockup — hero, Our Story, Mission/Vision/Values, About
the Organisation, Our Impact, Why We Matter, donate CTA). It's used for both `/` and `/about` so
the header nav correctly highlights "Home" for visitors landing on the site, while `/about` still
works as a direct link. The other five pages didn't have a design, so they were built from the
same mission/impact facts already on the About page, in the same visual style — replace their
content in `lib/content-extra.ts` with your own real programs, stories, news and photos whenever
you're ready.

## Structure

```
app/layout.tsx            fonts (Inter + Playfair Display), metadata, shared header/footer
app/page.tsx               Home — renders <AboutContent />
app/about/page.tsx         About Us — renders the same <AboutContent />
app/<route>/page.tsx       one file per other page
app/globals.css            all styles (plain CSS, no Tailwind)
components/AboutContent.tsx the designed page's sections (hero, story, mission/vision/values, ...)
components/                Header, Footer, PageBanner, CtaBanner, ProgramCard, TestimonialCard,
                            GalleryGrid, ContactForm, ScrollEffects, CountUp, icons.tsx, ui.tsx
lib/content.ts              About page data: org details, mission/vision/values, certifications
lib/content-extra.ts        the other pages' data: programs, pathway, testimonials, gallery,
                            news posts, ways to help
lib/nav.ts                  nav links shared by header and footer
public/images/               photos cropped from the design mockup
```

## Notes

- Two icons (the Bharatanatyam dancer and the karate pose in "Our Impact") aren't in the icon
  library used (lucide-react), so they're small custom SVG silhouettes in `components/icons.tsx`.
- Photos in `public/images/` were cropped from the mockup PNG (1024px wide), so they're soft at
  large sizes, and only four exist — they're reused across pages and in the gallery/news/program
  cards. Drop in higher-resolution originals and new photos under the same or new file names to
  sharpen things up and add variety.
- The header's Donate button and the CTA banner's "Donate Now" both link to `/get-involved#donate`.
- The contact form has no backend: it opens the visitor's email app with the message pre-filled.
  Swap `onSubmit` in `components/ContactForm.tsx` for a call to your own API when ready.
- The news articles have no dates (add a `date` to a post in `lib/content-extra.ts` to show one),
  and their content is written from the facts already on the About page — replace with real
  stories whenever you have them.
- Motion: page-load animation on the hero, scroll reveals on every section, a progress bar under
  the header, a back-to-top button, and hover effects on cards/photos/buttons — switched off for
  visitors with "reduce motion" turned on.

## Fixed since the first draft

- The footer's four stat circles (33+ Years of Service, etc.) now lay out in a proper horizontal
  row at every screen size (previously they could wrap into a vertical stack).
- The "Why We Matter" photo no longer crops the "Educate / Empower / Enlighten" text at narrower
  widths — it now keeps its native aspect ratio at every breakpoint instead of being forced into a
  shorter box that cut off the bottom line.
- The site's default page (`/`) now renders directly as Home (nav highlights "Home"), instead of
  redirecting into `/about` (which highlighted "About Us").
