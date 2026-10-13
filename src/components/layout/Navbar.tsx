"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Instagram,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Award,
  Users,
  FileText,
  HeartHandshake,
  Stars,
  MessageCircle,
  Languages,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change or ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setGalleryDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notice / Contact Bar */}
      <div className="bg-gradient-to-r from-wine-950 via-wine-900 to-celestial-950 text-gold-200 text-xs py-1.5 px-4 border-b border-gold-500/15">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-gold-500/40 hidden sm:inline">•</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors text-[11px] sm:text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden md:flex items-center gap-1 text-gold-300/80 text-[11px]">
              <Sparkles className="w-3 h-3 text-gold-400 animate-pulse" />
              <span>{t.topNotice}</span>
            </span>

            {/* Quick Language Toggle in Topbar */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/10 hover:bg-gold-400/20 text-gold-300 border border-gold-400/30 text-[11px] font-bold transition-all cursor-pointer"
              title="Switch Language / भाषा बदलें"
            >
              <Languages className="w-3 h-3 text-gold-400" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 text-gold-300" />
              </a>
              <a
                href={SITE_CONFIG.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Google Business Profile"
              >
                <span className="text-[10px] font-bold text-gold-300">G</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          "transition-all duration-300 border-b backdrop-blur-xl",
          isScrolled
            ? "bg-celestial-950/95 border-gold-500/20 shadow-2xl shadow-black/40 py-2"
            : "bg-celestial-950/85 border-gold-500/15 py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 xl:gap-4">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group relative flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl p-0.5 bg-gradient-to-br from-gold-400 via-amber-500 to-wine-600 shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow">
              <div className="w-full h-full bg-celestial-950 rounded-[14px] overflow-hidden flex items-center justify-center p-1 relative">
                <Image
                  src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
                  alt="Bhavishyaphal Logo"
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Peacock feather decorative flair */}
              <div className="absolute -top-3 -right-2 w-6 h-6 pointer-events-none transform -rotate-12">
                <Image
                  src="/images/852738ad7f6dcfe2def660e224bf795a-Photoroom_34.png"
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg xl:text-xl text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-amber-200 tracking-wide leading-tight">
                Bhavishyaphal
              </span>
              <span className="text-[9px] sm:text-[10px] text-gold-300/70 tracking-widest uppercase font-medium">
                Astrology Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Unified baseline alignment */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-wrap justify-center">
            <li>
              <Link
                href="/"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navHome}
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navAbout}
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navServices}
              </Link>
            </li>
            <li>
              <Link
                href="/#sacred-yantras"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navYantras}
              </Link>
            </li>
            <li>
              <Link
                href="/kundli"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-gold-300 bg-gold-500/10 border border-gold-500/25 hover:bg-gold-500/20 transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm shadow-gold-500/10"
              >
                <Stars className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: "12s" }} />
                <span>{t.navKundli}</span>
              </Link>
            </li>

            {/* Gallery Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setGalleryDropdownOpen(true)}
              onMouseLeave={() => setGalleryDropdownOpen(false)}
            >
              <button
                type="button"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-1"
                aria-expanded={galleryDropdownOpen}
              >
                <span>{t.navGallery}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 text-gold-400",
                    galleryDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {galleryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-celestial-900/98 backdrop-blur-2xl border border-gold-500/25 shadow-2xl shadow-black/80 py-2 z-50"
                  >
                    <Link
                      href="/#gallery-awards"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-gold-200 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setGalleryDropdownOpen(false)}
                    >
                      <Award className="w-4 h-4 text-gold-400" />
                      <span>{t.galleryAwards}</span>
                    </Link>
                    <Link
                      href="/#gallery-clients"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-gold-200 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setGalleryDropdownOpen(false)}
                    >
                      <Users className="w-4 h-4 text-gold-400" />
                      <span>{t.galleryClients}</span>
                    </Link>
                    <Link
                      href="/#gallery-articles"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-gold-200 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setGalleryDropdownOpen(false)}
                    >
                      <FileText className="w-4 h-4 text-gold-400" />
                      <span>{t.galleryPress}</span>
                    </Link>
                    <Link
                      href="/#gallery-astrologers"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-gold-200 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setGalleryDropdownOpen(false)}
                    >
                      <Sparkles className="w-4 h-4 text-gold-400" />
                      <span>{t.galleryAstrologers}</span>
                    </Link>
                    <Link
                      href="/#gallery-social"
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-gold-200 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setGalleryDropdownOpen(false)}
                    >
                      <HeartHandshake className="w-4 h-4 text-gold-400" />
                      <span>{t.gallerySocial}</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href="/#reviews"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navReviews}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navBlog}
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-gold-100/90 hover:text-gold-300 hover:bg-white/5 transition-colors inline-flex items-center justify-center"
              >
                {t.navContact}
              </Link>
            </li>
          </ul>

          {/* Right Action: Language Toggle + Ganesh Emblem + Book Consultation Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Language Switcher in Main Nav */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-gold-500/15 text-gold-300 border border-gold-500/25 text-xs font-semibold transition-all cursor-pointer shadow-sm"
              title="Switch Language / भाषा बदलें"
            >
              <Languages className="w-3.5 h-3.5 text-gold-400" />
              <span className={language === "en" ? "font-bold text-gold-100" : "text-gold-400/60"}>
                EN
              </span>
              <span className="text-gold-500/40">/</span>
              <span className={language === "hi" ? "font-bold text-gold-100" : "text-gold-400/60"}>
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
                className="object-contain filter drop-shadow-[0_2px_8px_rgba(229,184,105,0.3)]"
              />
            </div>

            {/* CTA Button */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-xl font-semibold text-xs text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-md shadow-gold-500/25 hover:shadow-gold-500/40 transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-950 fill-emerald-950" />
              <span>{t.bookConsultation}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-wine-900/60 border border-gold-500/30 text-gold-300 flex items-center justify-center hover:bg-wine-800 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-celestial-950/98 backdrop-blur-2xl border-b border-gold-500/25 px-4 py-5 shadow-2xl overflow-hidden"
          >
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between p-3 mb-3 rounded-2xl bg-white/5 border border-gold-500/20">
              <span className="text-xs font-semibold text-gold-300 flex items-center gap-2">
                <Languages className="w-4 h-4 text-gold-400" />
                <span>भाषा चुनें / Select Language:</span>
              </span>
              <div className="inline-flex p-0.5 rounded-xl bg-celestial-900 border border-gold-500/30">
                <button
                  type="button"
                  onClick={() => toggleLanguage()}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === "en"
                      ? "bg-gold-400 text-celestial-950"
                      : "text-gold-300 hover:text-gold-100"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => toggleLanguage()}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === "hi"
                      ? "bg-gold-400 text-celestial-950"
                      : "text-gold-300 hover:text-gold-100"
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navHome}
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navAbout}
              </Link>
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navServices}
              </Link>
              <Link
                href="/#sacred-yantras"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navYantras}
              </Link>
              <Link
                href="/kundli"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-300 bg-gold-500/15 border border-gold-500/30 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Stars className="w-4 h-4 text-gold-400" />
                  <span>{t.navKundli}</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-400 text-celestial-950 font-bold uppercase">
                  Free
                </span>
              </Link>
              <Link
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navGallery}
              </Link>
              <Link
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navReviews}
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navBlog}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gold-100 hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              >
                {t.navContact}
              </Link>

              <div className="pt-3 mt-2 border-t border-gold-500/20 flex flex-col gap-2.5">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl font-bold text-sm text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.bookConsultation}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full text-center py-2.5 rounded-xl font-semibold text-xs text-gold-200 border border-gold-500/30 flex items-center justify-center gap-2 hover:bg-white/5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Direct Call: {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
