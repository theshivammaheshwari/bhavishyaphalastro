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
  Flame,
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
  const { t } = useLanguage();
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

  // Quick Service Hub Items (Astrotalk Reference Style)
  const quickHubItems = [
    {
      title: "Talk to Astrologer",
      subtitle: "Call Live",
      icon: PhoneCall,
      href: "/talk-to-astrologer",
      badge: "Online",
      badgeColor: "bg-emerald-500 text-celestial-950",
      gradient: "from-astrotalk-yellow/20 via-amber-500/15 to-transparent",
    },
    {
      title: "Chat with Astrologer",
      subtitle: "Instant Q&A",
      icon: MessageCircle,
      href: "/chat-with-astrologer",
      badge: "Fast",
      badgeColor: "bg-astrotalk-yellow text-celestial-950",
      gradient: "from-emerald-500/20 via-teal-500/15 to-transparent",
    },
    {
      title: "Free Kundli",
      subtitle: "Janam Kundli",
      icon: Sparkles,
      href: "/kundli",
      badge: "Free",
      badgeColor: "bg-astrotalk-yellow text-celestial-950",
      gradient: "from-amber-400/20 via-gold-500/15 to-transparent",
    },
    {
      title: "Kundli Matching",
      subtitle: "36 Guna Milan",
      icon: Heart,
      href: "/kundli?tab=milan",
      badge: "Accurate",
      badgeColor: "bg-rose-500 text-white",
      gradient: "from-rose-500/20 via-pink-500/15 to-transparent",
    },
    {
      title: "Daily Horoscope",
      subtitle: "12 Rashis",
      icon: Compass,
      href: "/kundli?tab=horoscope",
      badge: "Daily",
      badgeColor: "bg-blue-500 text-white",
      gradient: "from-blue-500/20 via-indigo-500/15 to-transparent",
    },
    {
      title: "Sacred Yantras",
      subtitle: "₹3,999 Consecrated",
      icon: ShoppingBag,
      href: "/yantras",
      badge: "Energized",
      badgeColor: "bg-astrotalk-yellow text-celestial-950",
      gradient: "from-amber-500/20 via-orange-500/15 to-transparent",
    },
    {
      title: "All Packages",
      subtitle: "8 Life Suites",
      icon: Calendar,
      href: "/services",
      badge: "Popular",
      badgeColor: "bg-purple-500 text-white",
      gradient: "from-purple-500/20 via-pink-500/15 to-transparent",
    },
    {
      title: "VIP Gallery",
      subtitle: "National Honors",
      icon: Award,
      href: "/gallery",
      badge: "Verified",
      badgeColor: "bg-astrotalk-yellow text-celestial-950",
      gradient: "from-gold-400/20 via-amber-600/15 to-transparent",
    },
  ];

  // Preview items
  const featuredYantras = SACRED_YANTRAS.slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  return (
    <div className="flex flex-col gap-0 font-sans">
      {/* 1. Astrotalk-Style Announcement Ticker */}
      <div className="bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-astrotalk-yellow text-celestial-950 py-2 px-4 text-xs font-bold text-center border-b border-amber-400/40 shadow-sm flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
        <span>Astrologer Swati Pandey is Online Now for 1-on-1 Voice &amp; Video Consultations</span>
        <span className="hidden sm:inline">•</span>
        <Link href="/talk-to-astrologer" className="underline font-extrabold hover:text-black">
          Connect in 60 Seconds &rarr;
        </Link>
      </div>

      {/* 2. Astrotalk-Inspired Modern Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-celestial-950 via-celestial-900 to-celestial-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>India&apos;s Most Trusted &amp; Accurate Astrologer</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-4">
                Know Your Future. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">
                  Transform Your Destiny.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gold-200/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans mb-8">
                Personalized Vedic Astrology consultations led by <strong>Astrologer Swati Pandey</strong>. Conferred national honor by <strong>Sh Nayan Mongia Ji</strong>. Get mathematical precision, KP Horary clarity, and authentic Lal Kitab remedies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
                <Link
                  href="/talk-to-astrologer"
                  className="px-6 py-3.5 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to Astrologer</span>
                </Link>

                <Link
                  href="/chat-with-astrologer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-celestial-900/90 border border-astrotalk-yellow/40 hover:border-astrotalk-yellow hover:bg-celestial-850 flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat with Astrologer</span>
                </Link>

                <Link
                  href="/kundli"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gold-300 bg-white/5 border border-gold-500/20 hover:bg-white/10 flex items-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-astrotalk-yellow" />
                  <span>Free Janam Kundli</span>
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold-500/15 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">12,500+</div>
                  <div className="text-[11px] text-gold-300/70">Consultations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">4.99 ★</div>
                  <div className="text-[11px] text-gold-300/70">Client Rating</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">28+</div>
                  <div className="text-[11px] text-gold-300/70">Global Countries</div>
                </div>
              </div>
            </div>

            {/* Right Card: Astrologer Swati Pandey Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-astrotalk-yellow/40 shadow-2xl shadow-black/80 group">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt="Astrologer Swati Pandey - India's Most Trusted Astrologer"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-celestial-950/20 to-transparent" />

                {/* Floating Online Beacon */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-celestial-950/90 border border-emerald-500/40 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online Now</span>
                </div>

                {/* Floating National Award Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-astrotalk-yellow text-celestial-950 font-bold text-[10px] uppercase shadow-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>National Awardee</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-celestial-950/95 border border-astrotalk-yellow/30 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                      Astrologer Swati Pandey
                    </h3>
                    <div className="flex items-center gap-1 text-astrotalk-yellow text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                      <span>4.99</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gold-300/80 mb-3 line-clamp-1">
                    Vedic • KP System • Lal Kitab • Vastu • Palmistry
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                      className="flex-1 py-2 px-3 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </button>
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Astrotalk-Style Quick Service Action Hub */}
      <section className="py-8 bg-celestial-900/60 border-y border-gold-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold text-gold-300 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-astrotalk-yellow" />
              <span>Explore Astrological Services &amp; Tools</span>
            </h2>
            <Link href="/services" className="text-xs text-astrotalk-yellow font-semibold hover:underline">
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {quickHubItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`p-3.5 rounded-2xl bg-gradient-to-b ${item.gradient} bg-celestial-950/80 border border-gold-500/20 hover:border-astrotalk-yellow/50 transition-all group flex flex-col items-center text-center relative overflow-hidden`}
                >
                  <span
                    className={`absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded-full text-[8px] font-extrabold uppercase ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-celestial-900 border border-gold-500/25 flex items-center justify-center text-astrotalk-yellow mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-astrotalk-yellow transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-gold-300/60 mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Astrotalk-Style "Talk to Astrologer" Showcase Preview */}
      <section className="py-14 sm:py-20 bg-celestial-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Live Consultations
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                Talk to Certified Vedic Astrologers
              </h2>
              <p className="text-xs sm:text-sm text-gold-300/70 mt-1 max-w-xl font-sans">
                Connect with verified astrological experts for marriage, career, finance, and health dilemmas.
              </p>
            </div>

            <Link
              href="/talk-to-astrologer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-xs sm:text-sm font-bold text-astrotalk-yellow hover:bg-astrotalk-yellow hover:text-celestial-950 transition-colors w-fit"
            >
              <span>View All Astrologers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Astrologers 2-Card Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lead Astrologer Card */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-celestial-900 via-celestial-950 to-wine-950/80 border-2 border-astrotalk-yellow/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-astrotalk-yellow shadow-md flex-shrink-0">
                    <Image
                      src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                      alt="Astrologer Swati Pandey"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-celestial-950" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow/15 text-astrotalk-yellow text-[10px] font-bold uppercase tracking-wider mb-1">
                      <Award className="w-3 h-3" />
                      <span>National Awardee • Lead</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">Astrologer Swati Pandey</h3>
                    <p className="text-xs text-gold-300/80">India&apos;s Most Trusted Astrologer of the Year</p>
                    <div className="flex items-center gap-2 text-xs mt-1 text-astrotalk-yellow font-bold">
                      <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                      <span>4.99 ★</span>
                      <span className="text-gold-300/60 font-normal">(12,500+ Consultations)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Vedic Jyotish", "KP System", "Kundli Milan", "Lal Kitab", "Vastu"].map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-celestial-950 border border-gold-500/15 text-[11px] text-gold-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-gold-300/60 uppercase">Session Rate</div>
                  <div className="text-astrotalk-yellow font-serif font-bold text-base">₹5,100 / Session</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                    className="px-4 py-2 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </button>
                  <Link
                    href="/chat-with-astrologer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat Now</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Senior Acharya Card */}
            <div className="rounded-3xl p-6 bg-celestial-900/60 border border-gold-500/20 hover:border-gold-500/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-gold-500/30 flex-shrink-0">
                    <Image
                      src="/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-2_59.jpeg"
                      alt="Acharya Ramesh Shastri"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-celestial-950" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <span>Senior Vedic Scholar</span>
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">Acharya Ramesh Shastri</h3>
                    <p className="text-xs text-gold-300/80">Senior Vedic &amp; Prashna Specialist</p>
                    <div className="flex items-center gap-2 text-xs mt-1 text-astrotalk-yellow font-bold">
                      <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                      <span>4.97 ★</span>
                      <span className="text-gold-300/60 font-normal">(8,200+ Consultations)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Parashari Jyotish", "Prashna Shastra", "Muhurat", "Dosha Remedies"].map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-celestial-950 border border-gold-500/15 text-[11px] text-gold-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-gold-300/60 uppercase">Session Rate</div>
                  <div className="text-astrotalk-yellow font-serif font-bold text-base">₹2,100 / Session</div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/talk-to-astrologer"
                    className="px-4 py-2 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 shadow-md flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </Link>
                  <Link
                    href="/chat-with-astrologer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Free Vedic Astrology Suite Banner (`/kundli`) */}
      <section className="py-10 bg-gradient-to-r from-wine-950/90 via-celestial-900/90 to-wine-950/90 border-y border-gold-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-astrotalk-yellow/15 border border-astrotalk-yellow/40 text-astrotalk-yellow flex items-center justify-center flex-shrink-0 animate-pulse">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-astrotalk-yellow bg-astrotalk-yellow/10 px-2 py-0.5 rounded-full">
                100% Free Computational Engine
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-1">
                Interactive 7-in-1 Vedic Janma Kundli &amp; Horoscope
              </h3>
              <p className="text-xs text-gold-300/80 font-sans mt-0.5">
                Generate North-Indian diamond birth chart, 36-Point Guna Milan, and daily planetary transit predictions.
              </p>
            </div>
          </div>

          <Link
            href="/kundli"
            className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 shadow-xl shadow-astrotalk-yellow/20 flex-shrink-0 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
          >
            <span>Open Vedic Kundli Suite</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. About Astrologer Swati Pandey Spotlight */}
      <section className="py-14 sm:py-20 bg-celestial-950/70 border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt="National Award by Sh Nayan Mongia Ji"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-astrotalk-yellow text-celestial-950 font-bold text-[10px] uppercase">
                    National Award
                  </span>
                  <p className="text-white font-serif font-bold text-sm mt-1">
                    India&apos;s Most Trusted Astrologer Award
                  </p>
                  <p className="text-gold-300/80 text-[11px]">
                    Conferred by Ex-Indian Cricketer &amp; Coach Sh Nayan Mongia Ji
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Vedic Rigor • Modern Clarity
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 mb-4">
                Guided by Truth. Honored by Legends.
              </h2>
              <p className="text-xs sm:text-sm text-gold-200/80 font-sans leading-relaxed mb-4">
                Astrologer Swati Pandey brings over 12+ years of Vedic study, blessed by masters including <strong>Gurudev GD Vashist Ji</strong> and All India Federation of Astrologers Societies Chairman <strong>Sh Arun Bansal Ji</strong>.
              </p>
              <p className="text-xs sm:text-sm text-gold-200/80 font-sans leading-relaxed mb-6">
                From Deputy Chief Ministers and Members of Parliament to Miss India titleholders and families across 28+ countries, her readings empower clients with actionable clarity, not fear.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-celestial-900 border border-gold-500/30 text-xs sm:text-sm font-bold text-white hover:border-astrotalk-yellow transition-all"
                >
                  <span>Read Full Biography &amp; Recognitions</span>
                  <ArrowRight className="w-4 h-4 text-astrotalk-yellow" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-astrotalk-yellow text-celestial-950 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-colors cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bestselling Consecrated Sacred Yantras Preview */}
      <section className="py-14 sm:py-20 bg-celestial-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Pran Pratishtha Energized
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                Sacred Consecrated Yantras &amp; Pendants
              </h2>
              <p className="text-xs sm:text-sm text-gold-300/70 mt-1 max-w-xl font-sans">
                Each piece receives 3 days of personalized Vedic Pran Pratishtha performed in your Name, Gotra &amp; Nakshatra before dispatch. Fixed ₹3,999/- flat rate.
              </p>
            </div>

            <Link
              href="/yantras"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-xs sm:text-sm font-bold text-astrotalk-yellow hover:bg-astrotalk-yellow hover:text-celestial-950 transition-colors w-fit"
            >
              <span>Explore All 22 Sacred Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredYantras.map((yantra) => (
              <div
                key={yantra.id}
                className="rounded-3xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/40 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square bg-celestial-950 p-4 flex items-center justify-center">
                    <Image
                      src={yantra.image}
                      alt={yantra.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-celestial-950/80 border border-gold-500/30 text-[9px] font-bold text-gold-200 uppercase">
                      {yantra.type === "yantra" ? "Wall Yantra" : "Pendant"}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="text-[10px] font-bold text-astrotalk-yellow uppercase mb-0.5">
                      Deity: {yantra.deity}
                    </div>
                    <h4 className="font-serif text-sm font-bold text-white group-hover:text-astrotalk-yellow transition-colors line-clamp-1 mb-1">
                      {yantra.title}
                    </h4>
                    <p className="text-[11px] text-gold-300/70 line-clamp-2 font-sans">
                      {yantra.benefits}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-gold-500/10 flex items-center justify-between gap-2">
                  <span className="text-astrotalk-yellow font-serif font-bold text-sm">₹3,999/-</span>
                  <button
                    type="button"
                    onClick={() => handleBuyYantra(yantra)}
                    className="px-3.5 py-1.5 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow to-amber-400 hover:from-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIP Gallery Preview */}
      <section className="py-14 sm:py-20 bg-celestial-900/60 border-t border-gold-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Photographic Hall of Fame
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                VIP Dignitaries &amp; National Conclaves
              </h2>
              <p className="text-xs sm:text-sm text-gold-300/70 mt-1 max-w-xl font-sans">
                Moments with ministers, sports icons, Bollywood filmmakers, and national astrological leaders.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-200 hover:text-white hover:border-astrotalk-yellow transition-colors w-fit"
            >
              <span>Explore Full 24+ Gallery</span>
              <ArrowRight className="w-4 h-4 text-astrotalk-yellow" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredGallery.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="rounded-2xl bg-celestial-950 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/50 transition-all group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-white group-hover:text-astrotalk-yellow transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gold-300/70 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Verified Client Testimonials Preview */}
      <section className="py-14 sm:py-20 bg-celestial-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Real Client Feedback
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                Trusted by Thousands Worldwide
              </h2>
              <p className="text-xs sm:text-sm text-gold-300/70 mt-1 max-w-xl font-sans">
                Read authentic reviews from individuals and families whose lives gained direction through Swati Ji&apos;s guidance.
              </p>
            </div>

            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-xs sm:text-sm font-bold text-astrotalk-yellow hover:bg-astrotalk-yellow hover:text-celestial-950 transition-colors w-fit"
            >
              <span>Read 2,500+ Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl p-6 bg-celestial-900/60 border border-gold-500/20 hover:border-astrotalk-yellow/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-astrotalk-yellow mb-3">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gold-100/90 leading-relaxed font-sans italic mb-4">
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-gold-500/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-astrotalk-yellow to-amber-500 text-celestial-950 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {rev.avatar}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-white truncate">{rev.name}</h5>
                    <p className="text-[10px] text-gold-300/70 truncate">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. The 4 Vedic Guarantees Strip */}
      <section className="py-12 bg-celestial-900/80 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <ShieldCheck className="w-8 h-8 text-astrotalk-yellow mx-auto mb-2" />
              <h4 className="text-xs sm:text-sm font-bold text-white">100% Confidential</h4>
              <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Strict privacy protocols</p>
            </div>
            <div className="p-3">
              <Award className="w-8 h-8 text-astrotalk-yellow mx-auto mb-2" />
              <h4 className="text-xs sm:text-sm font-bold text-white">National Awardee</h4>
              <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Honored by Sports &amp; Vedic icons</p>
            </div>
            <div className="p-3">
              <Sparkles className="w-8 h-8 text-astrotalk-yellow mx-auto mb-2" />
              <h4 className="text-xs sm:text-sm font-bold text-white">Authentic Vedic Math</h4>
              <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">KP &amp; Parashari exact computations</p>
            </div>
            <div className="p-3">
              <CheckCircle2 className="w-8 h-8 text-astrotalk-yellow mx-auto mb-2" />
              <h4 className="text-xs sm:text-sm font-bold text-white">No Fear-Mongering</h4>
              <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Only empowering practical remedies</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. High-Converting Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-celestial-900 via-celestial-950 to-wine-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for Definitive Answers to Life&apos;s Big Questions?
          </h2>
          <p className="text-xs sm:text-base text-gold-200/80 max-w-2xl mx-auto font-sans mb-8">
            Speak directly with Astrologer Swati Pandey. Get clarity on marriage compatibility, career growth, financial milestones, and health remedies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
              className="px-8 py-3.5 rounded-xl font-serif text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Your Consultation (₹5,100/-)</span>
            </button>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Connect</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking / Checkout Modal for Consultations */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      {/* Dedicated Fullscreen Yantra Order Modal */}
      <YantraOrderModal
        isOpen={yantraModalOpen}
        onClose={() => setYantraModalOpen(false)}
        yantra={selectedYantra}
      />
    </div>
  );
}
