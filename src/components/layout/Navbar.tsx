"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Sparkles,
  ChevronDown,
  Globe,
  MessageCircle,
  Stars,
  Instagram,
  ShoppingBag,
  Award,
  BookOpen,
  HelpCircle,
  Languages,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [consultationsOpen, setConsultationsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setConsultationsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.navHome },
    { href: "/about", label: t.navAbout },
    { href: "/talk-to-astrologer", label: t.navTalk },
    { href: "/chat-with-astrologer", label: t.navChat },
    { href: "/services", label: t.navServices },
    { href: "/kundli", label: t.navKundli, highlight: true },
    { href: "/yantras", label: t.navYantras },
    { href: "/gallery", label: t.navGallery },
    { href: "/reviews", label: t.navReviews },
    { href: "/contact", label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 font-sans shadow-sm">
      {/* Top Notification & Contact Bar */}
      <div className="bg-amber-50/90 text-stone-800 border-b border-amber-200/70 py-1.5 px-4 sm:px-6 text-xs transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 text-stone-900 hover:text-amber-700 transition-colors font-semibold text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-stone-300 hidden sm:inline">•</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1.5 text-stone-700 hover:text-stone-900 transition-colors text-[11px] sm:text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden md:flex items-center gap-1 text-stone-700 font-medium text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
              <span>{t.topNotice}</span>
            </span>

            {/* Quick Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-amber-100 text-stone-900 border border-amber-300 text-[11px] font-bold shadow-sm transition-all cursor-pointer"
              title="Switch Language / भाषा बदलें"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white hover:bg-amber-100 border border-stone-200 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 text-stone-700" />
              </a>
              <a
                href={SITE_CONFIG.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white hover:bg-amber-100 border border-stone-200 flex items-center justify-center transition-colors"
                aria-label="Google Business Profile"
              >
                <span className="text-[10px] font-bold text-stone-700">G</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean Light Theme) */}
      <nav
        className={cn(
          "transition-all duration-300 border-b bg-white/95 backdrop-blur-md",
          isScrolled
            ? "border-stone-200 shadow-md py-2.5"
            : "border-stone-200/80 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 xl:gap-4">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group relative flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl p-0.5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-sm flex-shrink-0">
              <div className="w-full h-full bg-white rounded-[14px] overflow-hidden flex items-center justify-center p-1 relative">
                <Image
                  src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
                  alt="Bhavishyaphal Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Peacock feather decorative flair */}
              <div className="absolute -top-2 -right-2 w-5 h-5 pointer-events-none transform -rotate-12">
                <Image
                  src="/images/852738ad7f6dcfe2def660e224bf795a-Photoroom_34.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg xl:text-xl text-stone-900 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">
                Bhavishyaphal
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-700 tracking-wider uppercase font-bold">
                Astrology Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-stone-700 text-xs xl:text-sm font-medium">
            <li>
              <Link
                href="/"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navHome}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/about"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navAbout}
              </Link>
            </li>

            {/* Consultations Dropdown */}
            <li className="relative group">
              <button
                type="button"
                onClick={() => setConsultationsOpen(!consultationsOpen)}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1 font-medium cursor-pointer",
                  pathname === "/talk-to-astrologer" || pathname === "/chat-with-astrologer" || pathname === "/services"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                <span>{t.consultationsTitle}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-600" />
              </button>

              <div className="absolute top-full left-0 mt-1 w-60 rounded-2xl bg-white border border-stone-200 shadow-xl py-2 z-50 hidden group-hover:block animate-fadeIn">
                <Link
                  href="/talk-to-astrologer"
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-stone-800 hover:text-stone-950 hover:bg-amber-50 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>{t.navTalk}</span>
                </Link>
                <Link
                  href="/chat-with-astrologer"
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-stone-800 hover:text-stone-950 hover:bg-amber-50 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{t.navChat}</span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-stone-800 hover:text-stone-950 hover:bg-amber-50 transition-colors font-medium"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{t.navServices}</span>
                </Link>
              </div>
            </li>

            {/* Free Kundli Hub Highlight Link */}
            <li>
              <Link
                href="/kundli"
                className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold text-stone-900 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                <span>{t.navKundli}</span>
              </Link>
            </li>

            <li>
              <Link
                href="/yantras"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/yantras"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navYantras}
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/gallery"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navGallery}
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/reviews"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navReviews}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors font-medium",
                  pathname === "/contact"
                    ? "text-stone-950 font-bold bg-amber-100/60"
                    : "hover:text-stone-950 hover:bg-stone-100"
                )}
              >
                {t.navContact}
              </Link>
            </li>
          </ul>

          {/* Right Action: Language Switcher + Book Consultation */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-900 border border-stone-200 text-xs font-bold transition-all cursor-pointer shadow-sm"
              title="Switch Language / भाषा बदलें"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span className={language === "en" ? "font-bold text-amber-800" : "text-stone-500"}>
                EN
              </span>
              <span className="text-stone-400">/</span>
              <span className={language === "hi" ? "font-bold text-amber-800" : "text-stone-500"}>
                हिन्दी
              </span>
            </button>

            {/* Auspicious Ganesha Emblem */}
            <div className="hidden xl:block w-9 h-9 relative opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/53fdbd0797322c9a2280321b51cd5548-2-Photoroom_35.png"
                alt="Shri Ganesh"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Call / WhatsApp CTA Button */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-800 fill-emerald-800" />
              <span>{t.bookConsultation}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-br from-amber-400 to-amber-600 flex-shrink-0">
                    <div className="w-full h-full bg-white rounded-[10px] overflow-hidden flex items-center justify-center p-1">
                      <Image
                        src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
                        alt="Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-stone-900 block leading-tight">
                      Bhavishyaphal
                    </span>
                    <span className="text-[10px] text-amber-700 tracking-wider uppercase font-bold">
                      Astrology Services
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center hover:bg-stone-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher inside Drawer */}
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-amber-700" />
                  <span>Language / भाषा:</span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => language !== "en" && toggleLanguage()}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-bold transition-all",
                      language === "en"
                        ? "bg-stone-900 text-white shadow-sm"
                        : "bg-white text-stone-700 hover:bg-stone-100"
                    )}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => language !== "hi" && toggleLanguage()}
                    className={cn(
                      "px-3 py-1 rounded-lg text-xs font-bold transition-all",
                      language === "hi"
                        ? "bg-amber-600 text-white shadow-sm"
                        : "bg-white text-stone-700 hover:bg-stone-100"
                    )}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              {/* Drawer Links */}
              <ul className="space-y-1.5 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-colors",
                        pathname === link.href
                          ? "bg-amber-100/70 text-stone-950 font-bold"
                          : link.highlight
                          ? "bg-astrotalk-yellow text-stone-950 font-bold shadow-sm"
                          : "text-stone-800 hover:bg-stone-100"
                      )}
                    >
                      <span>{link.label}</span>
                      {link.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-stone-950 text-white text-[10px] font-bold">
                          Free
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callNow}: {SITE_CONFIG.phone}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.whatsappNow}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
