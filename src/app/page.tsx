"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  Sparkles,
  Star,
  Award,
  ShieldCheck,
  ArrowRight,
  Compass,
  CheckCircle2,
  Calendar,
  Heart,
  ShoppingBag,
  Eye,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import {
  SITE_CONFIG,
  SACRED_YANTRAS,
  GALLERY_ITEMS,
  TESTIMONIALS,
  ASTRO_CONSULTATION_PACKAGES,
  YantraItem,
} from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { YantraOrderModal } from "@/components/yantras/YantraOrderModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "All Life Comprehensive Consultancy (₹5,100/-)"
  );
  const [yantraModalOpen, setYantraModalOpen] = useState(false);
  const [selectedYantra, setSelectedYantra] = useState<YantraItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleBuyYantra = (yantra: YantraItem) => {
    setSelectedYantra(yantra);
    setYantraModalOpen(true);
  };

  // Quick Service Hub Items
  const quickHubItems = [
    {
      title: t.quickTalkTitle,
      subtitle: t.quickTalkSub,
      icon: PhoneCall,
      href: "/talk-to-astrologer",
      badge: "Online",
      badgeColor: "bg-emerald-600 text-white",
      bgHover: "hover:border-amber-400 hover:bg-amber-50/50",
    },
    {
      title: t.quickChatTitle,
      subtitle: t.quickChatSub,
      icon: MessageCircle,
      href: "/chat-with-astrologer",
      badge: "Fast",
      badgeColor: "bg-emerald-600 text-white",
      bgHover: "hover:border-emerald-400 hover:bg-emerald-50/50",
    },
    {
      title: t.quickKundliTitle,
      subtitle: t.quickKundliSub,
      icon: Sparkles,
      href: "/kundli",
      badge: "Free",
      badgeColor: "bg-amber-500 text-stone-950",
      bgHover: "hover:border-amber-400 hover:bg-amber-50/50",
    },
    {
      title: t.quickMatchingTitle,
      subtitle: t.quickMatchingSub,
      icon: Heart,
      href: "/kundli?tab=milan",
      badge: "36 Guna",
      badgeColor: "bg-rose-500 text-white",
      bgHover: "hover:border-rose-400 hover:bg-rose-50/50",
    },
    {
      title: t.quickHoroscopeTitle,
      subtitle: t.quickHoroscopeSub,
      icon: Compass,
      href: "/kundli?tab=horoscope",
      badge: "Daily",
      badgeColor: "bg-blue-600 text-white",
      bgHover: "hover:border-blue-400 hover:bg-blue-50/50",
    },
    {
      title: t.quickYantrasTitle,
      subtitle: t.quickYantrasSub,
      icon: ShoppingBag,
      href: "/yantras",
      badge: "₹3,999",
      badgeColor: "bg-amber-600 text-white",
      bgHover: "hover:border-amber-400 hover:bg-amber-50/50",
    },
    {
      title: t.quickPackagesTitle,
      subtitle: t.quickPackagesSub,
      icon: Calendar,
      href: "/services",
      badge: "8 Suites",
      badgeColor: "bg-purple-600 text-white",
      bgHover: "hover:border-purple-400 hover:bg-purple-50/50",
    },
    {
      title: t.quickGalleryTitle,
      subtitle: t.quickGallerySub,
      icon: Award,
      href: "/gallery",
      badge: "VIP",
      badgeColor: "bg-stone-900 text-white",
      bgHover: "hover:border-stone-400 hover:bg-stone-50/50",
    },
  ];

  // Preview items
  const featuredYantras = SACRED_YANTRAS.slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  return (
    <div className="flex flex-col gap-0 font-sans bg-[#FAFAF8] text-stone-900">
      {/* 1. Astrotalk-Style Announcement Ticker (Light Theme) */}
      <div className="bg-astrotalk-yellow text-stone-950 py-2.5 px-4 text-xs font-bold text-center border-b border-amber-300 shadow-sm flex items-center justify-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
        <span>{t.tickerText}</span>
        <span className="hidden sm:inline">•</span>
        <Link href="/talk-to-astrologer" className="underline font-extrabold hover:text-black">
          {t.tickerCta}
        </Link>
      </div>

      {/* 2. Hero Section (Clean Light Theme) */}
      <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>{t.heroBadge}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.15] mb-4">
                {t.heroTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900">
                  {t.heroTitle2}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans mb-8">
                {t.heroSub}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
                <Link
                  href="/talk-to-astrologer"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md shadow-amber-300/40 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.heroCtaTalk}</span>
                </Link>

                <Link
                  href="/chat-with-astrologer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-stone-900 bg-white border border-stone-300 hover:border-amber-400 hover:bg-amber-50/50 flex items-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{t.heroCtaChat}</span>
                </Link>

                <Link
                  href="/kundli"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-stone-700 bg-stone-100 border border-stone-200 hover:bg-stone-200 flex items-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{t.heroCtaKundli}</span>
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950">12,500+</div>
                  <div className="text-[11px] text-stone-600 font-medium">{t.statReadingsLabel}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-amber-700">4.99 ★</div>
                  <div className="text-[11px] text-stone-600 font-medium">{t.statAccuracyLabel}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950">28+</div>
                  <div className="text-[11px] text-stone-600 font-medium">{t.statDignitariesLabel}</div>
                </div>
              </div>
            </div>

            {/* Right Card: Astrologer Swati Pandey Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl group bg-white">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt="Astrologer Swati Pandey"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                {/* Floating Online Beacon */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-500 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-emerald-700 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.onlineNow}</span>
                </div>

                {/* Floating National Award Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-astrotalk-yellow text-stone-950 font-bold text-[10px] uppercase shadow-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.nationalAwardee}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-stone-200 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-950">
                      Astrologer Swati Pandey
                    </h3>
                    <div className="flex items-center gap-1 text-amber-700 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                      <span>4.99</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-600 mb-3 line-clamp-1 font-medium">
                    Vedic Jyotish • KP System • Lal Kitab • Vastu • Palmistry
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                      className="flex-1 py-2 px-3 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{t.callNow}</span>
                    </button>
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.chatNow}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Service Action Hub (Light Theme) */}
      <section className="py-8 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.quickHubTitle}</span>
            </h2>
            <Link href="/services" className="text-xs text-amber-700 font-bold hover:underline">
              {t.viewAllServices}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {quickHubItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`p-3.5 rounded-2xl bg-white border border-stone-200 ${item.bgHover} transition-all group flex flex-col items-center text-center relative overflow-hidden shadow-sm hover:shadow-md`}
                >
                  <span
                    className={`absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded-full text-[8px] font-extrabold uppercase ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-0.5 line-clamp-1 font-medium">
                    {item.subtitle}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Direct Consultations Showcase (Light Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                {t.consultationSectionTag}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
                {t.consultationSectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl font-sans font-medium">
                {t.consultationSectionSub}
              </p>
            </div>

            <Link
              href="/talk-to-astrologer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-xs sm:text-sm font-bold text-stone-900 hover:bg-astrotalk-yellow transition-colors w-fit shadow-sm"
            >
              <span>{t.exploreAllModes}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2-Card Consultation Modes Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mode 1: Voice & Video Call */}
            <div className="rounded-3xl p-6 bg-stone-50 border border-stone-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-astrotalk-yellow shadow-md flex-shrink-0">
                    <Image
                      src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                      alt="Voice & Video Call"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <Award className="w-3 h-3 text-amber-700" />
                      <span>{t.mode1Badge}</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-950">{t.mode1Title}</h3>
                    <p className="text-xs text-stone-600 font-medium">{t.mode1Desc}</p>
                    <div className="flex items-center gap-2 text-xs mt-1 text-amber-700 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                      <span>4.99 ★</span>
                      <span className="text-stone-500 font-normal">(12,500+ Consultations)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["All Life Horoscope", "Kundli Milan", "Career & Business", "Lal Kitab", "Vastu"].map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] text-stone-700 font-medium shadow-2xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-stone-500 uppercase font-medium">{t.startingFrom}</div>
                  <div className="text-stone-950 font-serif font-bold text-base">₹1,100 - ₹5,100</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                    className="px-4 py-2 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{t.callNow}</span>
                  </button>
                  <Link
                    href="/talk-to-astrologer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 flex items-center gap-1.5"
                  >
                    <span>{t.viewSessions}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mode 2: Instant WhatsApp Chat */}
            <div className="rounded-3xl p-6 bg-stone-50 border border-stone-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-md flex-shrink-0">
                    <Image
                      src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                      alt="WhatsApp Chat"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <MessageCircle className="w-3 h-3 text-emerald-700" />
                      <span>{t.mode2Badge}</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-950">{t.mode2Title}</h3>
                    <p className="text-xs text-stone-600 font-medium">{t.mode2Desc}</p>
                    <div className="flex items-center gap-2 text-xs mt-1 text-emerald-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.mode2ReplyTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Specific Question", "Gemstone Advice", "Quick Remedy", "Compatibility", "Muhurat"].map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-stone-200 text-[11px] text-stone-700 font-medium shadow-2xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-stone-500 uppercase font-medium">Mode</div>
                  <div className="text-emerald-700 font-serif font-bold text-base">Direct WhatsApp</div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/chat-with-astrologer"
                    className="px-4 py-2 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-sm flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.startChat}</span>
                  </Link>
                  <a
                    href={SITE_CONFIG.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 hover:bg-emerald-200 flex items-center gap-1.5"
                  >
                    <span>{t.whatsappNow}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Free Vedic Janma Kundli Banner (Light Theme) */}
      <section className="py-10 bg-amber-50/80 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-astrotalk-yellow border border-amber-300 text-stone-950 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                {t.freeKundliBadge}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-950 mt-1">
                {t.freeKundliTitle}
              </h3>
              <p className="text-xs text-stone-600 font-sans mt-0.5 font-medium">
                {t.freeKundliDesc}
              </p>
            </div>
          </div>

          <Link
            href="/kundli"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md flex-shrink-0 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
          >
            <span>{t.freeKundliCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Sacred Yantras Showcase Preview (Light Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                {t.navYantras}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
                {t.featuredYantrasTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl font-sans font-medium">
                {t.featuredYantrasSub}
              </p>
            </div>

            <Link
              href="/yantras"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-xs sm:text-sm font-bold text-stone-900 hover:bg-astrotalk-yellow transition-colors w-fit shadow-sm"
            >
              <span>{t.viewAllYantras}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredYantras.map((yantra) => (
              <div
                key={yantra.id}
                className="rounded-3xl bg-stone-50 border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-white p-3">
                    <Image
                      src={yantra.image}
                      alt={yantra.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow text-stone-950 text-[10px] font-bold uppercase shadow-sm">
                      ₹{yantra.price.toLocaleString("en-IN")}/-
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif font-bold text-base text-stone-950 mb-1 line-clamp-1">
                      {yantra.title}
                    </h3>
                    <p className="text-xs text-amber-800 font-semibold mb-2">
                      {yantra.deity}
                    </p>
                    <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                      {yantra.benefits}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleBuyYantra(yantra)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t.orderYantraBtn}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIP Gallery Preview (Light Theme) */}
      <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                {t.navGallery}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
                {t.featuredGalleryTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl font-sans font-medium">
                {t.featuredGallerySub}
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm font-bold text-stone-900 hover:bg-astrotalk-yellow transition-colors w-fit shadow-sm"
            >
              <span>{t.viewAllPhotos}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md bg-white block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-xs sm:text-sm line-clamp-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-amber-200/90 line-clamp-1 mt-0.5 font-medium">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Preview (Light Theme) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                {t.navReviews}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
                {t.featuredReviewsTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl font-sans font-medium">
                {t.featuredReviewsSub}
              </p>
            </div>

            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-xs sm:text-sm font-bold text-stone-900 hover:bg-astrotalk-yellow transition-colors w-fit shadow-sm"
            >
              <span>{t.viewAllReviews}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl p-6 bg-stone-50 border border-stone-200 hover:border-amber-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-sans mb-4 italic font-medium">
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xs text-stone-950">{rev.name}</h3>
                    <p className="text-[10px] text-stone-500">{rev.location}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      {/* Yantra Order Modal */}
      <YantraOrderModal
        isOpen={yantraModalOpen}
        onClose={() => setYantraModalOpen(false)}
        yantra={selectedYantra}
      />
    </div>
  );
}
