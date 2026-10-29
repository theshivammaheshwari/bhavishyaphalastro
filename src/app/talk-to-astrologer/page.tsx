"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  Star,
  ShieldCheck,
  CheckCircle,
  Search,
  Sparkles,
  Award,
  Clock,
  Languages,
  CheckCircle2,
  Calendar,
  Lock,
  ArrowRight,
  HelpCircle,
  Zap,
} from "lucide-react";
import { SITE_CONFIG, ASTRO_CONSULTATION_PACKAGES, MAIN_SERVICES, ServiceItem } from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

export default function TalkToAstrologerPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState("All Life Comprehensive Consultancy (₹5,100/-)");

  const handleBookSession = (sessionTitle: string, price?: number) => {
    const formatted = price ? `${sessionTitle} (₹${price.toLocaleString("en-IN")}/-)` : sessionTitle;
    setSelectedSession(formatted);
    setBookingModalOpen(true);
  };

  const consultationSessions: ServiceItem[] = [
    ...ASTRO_CONSULTATION_PACKAGES,
    ...MAIN_SERVICES,
  ];

  const filterTabs = [
    { id: "all", label: "All Sessions" },
    { id: "life", label: "Horoscope & Life" },
    { id: "marriage", label: "Love & Marriage" },
    { id: "career", label: "Career & Finance" },
    { id: "vastu", label: "Vastu & Palmistry" },
  ];

  const filteredSessions = consultationSessions.filter((s) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "life" && (s.id === "all-life" || s.id === "gemstone" || s.id === "astro-consultancy")) ||
      (activeFilter === "marriage" && (s.id === "kundli-milan" || s.id === "marriage-time" || s.id === "child-birth")) ||
      (activeFilter === "career" && (s.id === "career-business" || s.id === "litigation" || s.id === "education")) ||
      (activeFilter === "vastu" && (s.id === "vastu-consultancy" || s.id === "palmistry" || s.id === "numerology"));

    const matchesSearch =
      searchQuery === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Talk to Astrologer</span>
        </nav>

        {/* Top Header / Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-gold-500/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Astrologer Swati Pandey Available for Direct Calls</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Astrologer Swati Pandey</span>
            </h1>
            <p className="text-xs sm:text-sm text-gold-200/80 mt-2 max-w-2xl font-sans">
              Connect directly via confidential 1-on-1 voice or video call. India&apos;s Most Trusted &amp; Accurate Astrologer of the Year • Conferred by Sh Nayan Mongia Ji.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic (e.g. Marriage, Career)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-900/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
            />
          </div>
        </div>

        {/* Featured Astrologer Lead Profile Card */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-celestial-900 via-celestial-950 to-wine-950/80 border-2 border-astrotalk-yellow/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar & Badges */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-astrotalk-yellow shadow-2xl flex-shrink-0">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt="Astrologer Swati Pandey"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-celestial-950 animate-pulse" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-astrotalk-yellow text-celestial-950 text-xs font-bold uppercase tracking-wide mb-2 shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  <span>National Awardee</span>
                </span>
                <h2 className="font-serif text-2xl font-bold text-white">Astrologer Swati Pandey</h2>
                <p className="text-xs text-gold-300/80 mt-0.5">Founder &amp; Principal Astrologer</p>
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2 text-xs mt-2 text-astrotalk-yellow font-bold">
                  <Star className="w-4 h-4 fill-astrotalk-yellow stroke-none" />
                  <span>4.99 ★</span>
                  <span className="text-gold-300/60 font-normal">(12,500+ Verified Consultations)</span>
                </div>
              </div>
            </div>

            {/* Middle: Credentials & Bio */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-celestial-950/80 border border-gold-500/15">
                <p className="text-xs sm:text-sm text-gold-200/90 leading-relaxed font-sans">
                  Honored with the <strong>&quot;India&apos;s Most Trusted &amp; Accurate Astrologer of the Year&quot;</strong> award by former Indian cricketer <strong>Sh Nayan Mongia Ji</strong>. Conferred Vedic Excellence by <strong>Gurudev GD Vashist Ji</strong> and <strong>Sh Arun Bansal Ji</strong>. Trusted by CMs, MPs, business leaders, and clients across 28+ countries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-gold-200/90 font-sans">
                <div className="p-3 rounded-xl bg-celestial-900/60 border border-gold-500/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>100% Confidential 1-on-1</span>
                </div>
                <div className="p-3 rounded-xl bg-celestial-900/60 border border-gold-500/10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>12+ Years Experience</span>
                </div>
                <div className="p-3 rounded-xl bg-celestial-900/60 border border-gold-500/10 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>Hindi &amp; English</span>
                </div>
                <div className="p-3 rounded-xl bg-celestial-900/60 border border-gold-500/10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>Sattvic Lal Kitab Remedies</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Vedic Astrology", "KP System", "Kundli Milan", "Lal Kitab Remedies", "Vastu Shastra", "Palmistry", "Numerology"].map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-celestial-950 border border-gold-500/15 text-[11px] text-gold-200 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Instant Call CTA Box */}
            <div className="lg:col-span-3 p-6 rounded-2xl bg-celestial-950/90 border border-astrotalk-yellow/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[10px] text-gold-300/60 uppercase tracking-widest font-bold">
                  Direct Line
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow mt-0.5">
                  {SITE_CONFIG.phone}
                </div>
                <p className="text-[11px] text-gold-300/70 mt-1">
                  Connect on phone or WhatsApp audio/video call instantly.
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Direct: +91 91160 55424</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Audio/Video</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleBookSession("All Life Comprehensive Consultancy (₹5,100/-)")}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gold-200 bg-white/5 border border-gold-500/20 hover:bg-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-astrotalk-yellow" />
                  <span>Book Scheduled Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Sessions Selection */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Choose Your Consultation Session
              </h2>
              <p className="text-xs sm:text-sm text-gold-300/70 mt-1 font-sans">
                Every session is conducted personally and confidentially with Astrologer Swati Pandey.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-astrotalk-yellow text-celestial-950 shadow-md shadow-astrotalk-yellow/20"
                      : "bg-celestial-900/80 text-gold-300/80 hover:text-white border border-gold-500/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="rounded-3xl p-6 bg-celestial-900/60 border border-gold-500/20 hover:border-astrotalk-yellow/40 hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-astrotalk-yellow/15 text-astrotalk-yellow text-[10px] font-bold uppercase tracking-wider">
                      {session.badge || "Personal Session"}
                    </span>
                    {session.priceFormatted && (
                      <span className="font-serif text-base font-bold text-astrotalk-yellow">
                        {session.priceFormatted}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-astrotalk-yellow transition-colors mb-2">
                    {session.title}
                  </h3>

                  <p className="text-xs text-gold-200/80 leading-relaxed font-sans mb-4">
                    {session.description}
                  </p>

                  {session.details && (
                    <ul className="space-y-1.5 mb-5 text-[11px] text-gold-300/80 font-sans">
                      {session.details.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-astrotalk-yellow flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-gold-500/15 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleBookSession(session.title, session.price)}
                    className="flex-1 py-2.5 px-3 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Talk / Book</span>
                  </button>

                  <a
                    href={`https://wa.me/919116055424?text=${encodeURIComponent(`Hello Astrologer Swati Pandey! I want to consult for: ${session.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Direct Consultation Works */}
        <div className="my-16 p-8 rounded-3xl bg-celestial-950/80 border border-gold-500/20">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white text-center mb-8">
            How Direct Consultation with Astrologer Swati Pandey Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-celestial-900/60 border border-gold-500/15 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-celestial-950 font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-serif text-sm font-bold text-white mb-1">Select Consultation</h3>
              <p className="text-xs text-gold-300/80 font-sans">
                Choose your specific area of concern (All Life, Kundli Milan, Marriage, Career, or Vastu).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-celestial-900/60 border border-gold-500/15 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-celestial-950 font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-serif text-sm font-bold text-white mb-1">Share Birth Details</h3>
              <p className="text-xs text-gold-300/80 font-sans">
                Provide your accurate Date of Birth, Birth Time, and Birth Place for precision chart calculation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-celestial-900/60 border border-gold-500/15 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-celestial-950 font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-serif text-sm font-bold text-white mb-1">Live 1-on-1 Call</h3>
              <p className="text-xs text-gold-300/80 font-sans">
                Speak directly with Astrologer Swati Pandey on phone or video call and receive actionable Lal Kitab remedies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedSession}
      />
    </div>
  );
}
