import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CelestialBackground } from "@/components/layout/CelestialBackground";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SITE_CONFIG } from "@/lib/site-data";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavishyaphalastro.online"),
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.founderTitle}`,
  description:
    "India's leading Vedic astrology platform by Astrologer Swati Pandey. Accurate birth-chart readings, Kundli matching, KP astrology, Vastu, Palmistry, and energized Sacred Yantras.",
  keywords: [
    "Astrology",
    "Vedic Astrology",
    "Astrologer Swati Pandey",
    "Bhavishyaphal",
    "Kundli",
    "Kundli Milan",
    "Horoscope",
    "Sacred Yantra",
    "Shri Yantra",
    "Vastu Shastra",
    "KP Astrology",
    "Palmistry",
  ],
  authors: [{ name: SITE_CONFIG.founder }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhavishyaphalastro.online",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.founder}`,
    description:
      "Vedic wisdom and modern clarity. Personalized astrological consultations, birth chart calculations, and sacred energized remedies.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg",
        width: 800,
        height: 800,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: "Vedic Astrology & Sacred Yantras by Astrologer Swati Pandey",
    images: ["/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"],
  },
  icons: {
    icon: "/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${manrope.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-celestial-950 text-gold-100 flex flex-col font-sans antialiased selection:bg-gold-400 selection:text-celestial-950">
        <CelestialBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
