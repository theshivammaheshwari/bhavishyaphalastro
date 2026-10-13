"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, MapPin, Sparkles, MessageCircle, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-celestial-950 via-[#12061f] to-[#08020e] text-gold-200/80 border-t border-gold-500/20 overflow-hidden pt-16 pb-8">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gold-500/15">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-gold-400 via-amber-500 to-wine-600 shadow-lg shadow-gold-500/20 flex-shrink-0">
                <div className="w-full h-full bg-celestial-950 rounded-[14px] overflow-hidden flex items-center justify-center p-1">
                  <Image
                    src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
                    alt="Bhavishyaphal"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-gold-300 block">
                  Bhavishyaphal
                </span>
                <span className="text-xs text-gold-400/80 uppercase tracking-widest block font-medium">
                  Astrology Services
                </span>
              </div>
            </Link>

            <p className="text-xs text-gold-200/70 leading-relaxed">
              Founded by <strong className="text-gold-300 font-semibold">{SITE_CONFIG.founder}</strong>, recognized nationally as <span className="text-gold-300">{SITE_CONFIG.founderTitle}</span>. Bringing Vedic science, KP precision, and empowering remedies to seekers worldwide.
            </p>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>WhatsApp Instant Connect</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider relative inline-block">
              Astrology Services
              <span className="block h-0.5 w-8 bg-gold-400 mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> All Life Comprehensive Reading
                </Link>
              </li>
              <li>
                <Link href="/kundli" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Kundli Milan & Guna Milan
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Marriage Timing & Soulmate
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Career, Job vs Business
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Child Birth Timing & Muhurat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Vastu Consultancy & Feng Shui
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Palmistry & Numerology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sacred Yantras & Hub */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider relative inline-block">
              Sacred Products & Hub
              <span className="block h-0.5 w-8 bg-gold-400 mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#sacred-yantras" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Consecrated Shri Yantra (₹3,999)
                </Link>
              </li>
              <li>
                <Link href="/#sacred-yantras" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Kubera & Mahalakshmi Yantras
                </Link>
              </li>
              <li>
                <Link href="/#sacred-yantras" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Energized Sacred Pendants
                </Link>
              </li>
              <li>
                <Link href="/kundli" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Free Kundli Generator
                </Link>
              </li>
              <li>
                <Link href="/kundli" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> 36-Point Guna Milan Match
                </Link>
              </li>
              <li>
                <Link href="/kundli" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Daily 12-Zodiac Horoscope
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-400">›</span> Astrology Research Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider relative inline-block">
              Connect With Us
              <span className="block h-0.5 w-8 bg-gold-400 mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase">Phone & WhatsApp</span>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-gold-200 hover:text-gold-400 transition-colors font-medium">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase">Email Address</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-gold-200 hover:text-gold-400 transition-colors font-medium">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase">Instagram Profile</span>
                  <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="text-gold-200 hover:text-gold-400 transition-colors font-medium">
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase">Location</span>
                  <span className="text-gold-200/90">{SITE_CONFIG.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gold-400/60">
          <p>© {new Date().getFullYear()} Bhavishyaphal Astrology Services. {t.rightsReserved}</p>

          <div className="flex items-center gap-6">
            <span>Confidential & Ethical Consultations</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gold-300 hover:text-gold-100 transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>{language === "hi" ? "ऊपर जाएं" : "Back to Top"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
