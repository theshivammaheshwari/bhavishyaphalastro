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
    <footer className="relative bg-stone-100 text-stone-700 border-t border-stone-200 overflow-hidden pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-stone-200">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-sm flex-shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] overflow-hidden flex items-center justify-center p-1">
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
                <span className="font-serif font-bold text-lg text-stone-900 block leading-tight">
                  Bhavishyaphal
                </span>
                <span className="text-xs text-amber-700 uppercase tracking-wider block font-bold">
                  Astrology Services
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-600 leading-relaxed">
              {t.footerDesc}
            </p>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wider relative inline-block">
              {t.consultationsTitle}
              <span className="block h-0.5 w-8 bg-astrotalk-yellow mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/talk-to-astrologer" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navTalk}
                </Link>
              </li>
              <li>
                <Link href="/chat-with-astrologer" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navChat}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navServices}
                </Link>
              </li>
              <li>
                <Link href="/kundli" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navKundli}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navAbout}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sacred Yantras & Proof */}
          <div className="space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wider relative inline-block">
              {t.yantrasServicesTitle}
              <span className="block h-0.5 w-8 bg-astrotalk-yellow mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/yantras" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navYantras} (₹3,999/-)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navGallery}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navReviews}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navContact}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-stone-950 hover:underline transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600 font-bold">›</span> {t.navBlog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wider relative inline-block">
              {t.contactOffice}
              <span className="block h-0.5 w-8 bg-astrotalk-yellow mt-1 rounded-full" />
            </h4>
            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-stone-950 font-bold text-stone-800">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-stone-950">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="pt-2">
                <div className="text-[11px] text-stone-500 font-medium">
                  UPI ID: <span className="font-bold text-stone-800">9116055424@upi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {t.rightsReserved}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-50 transition-colors shadow-sm cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
