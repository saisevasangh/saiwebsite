import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollEffects from "@/components/ScrollEffects";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ORG_NAME, TAGLINE } from "@/lib/content";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${ORG_NAME} — ${TAGLINE}`,
    template: `%s | ${ORG_NAME}`,
  },
  description:
    "Sai Seva Sangh is a registered charitable organization working with girl children from low-income communities & orphans in the field of education, empowering women since 33 years.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#730f1b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body id="top">
        <Header />
        <ScrollEffects />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
