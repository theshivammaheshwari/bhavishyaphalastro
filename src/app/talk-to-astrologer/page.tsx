"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  Star,
  ShieldCheck,
  Search,
  Sparkles,
  Award,
  Clock,
  Languages,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { SITE_CONFIG, ASTRO_CONSULTATION_PACKAGES, MAIN_SERVICES, ServiceItem } from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

export default function TalkToAstrologerPage() {
  const { t, language } = useLanguage();
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
    { id: "all", label: t.filterAll },
    { id: "life", label: t.filterLife },
    { id: "marriage", label: t.filterMarriage },
    { id: "career", label: t.filterCareer },
    { id: "vastu", label: t.filterVastu },
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
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navTalk}</span>
        </nav>

        {/* Top Header / Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.talkPageBadge}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
              {t.talkPageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl font-sans font-medium">
              {t.talkPageSub}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchTopicPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Featured Astrologer Lead Profile Card (Light Theme) */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar & Badges */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-stone-200 shadow-lg flex-shrink-0 bg-stone-100">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt={language === "hi" ? "आचार्य अजय कुमार अग्रवाल" : "Astrologer Ajay Kumar Agarwal"}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-astrotalk-yellow text-stone-950 text-xs font-bold uppercase tracking-wide mb-2 shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.nationalAwardee}</span>
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-950">
                  {language === "hi" ? "आचार्य अजय कुमार अग्रवाल" : "Astrologer Ajay Kumar Agarwal"}
                </h2>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">{t.founderPrincipal}</p>
                <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2 text-xs mt-2 text-amber-700 font-bold">
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                  <span>4.99 ★</span>
                  <span className="text-stone-500 font-normal">({t.statReadings} {t.statReadingsLabel})</span>
                </div>
              </div>
            </div>

            {/* Middle: Credentials & Bio */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans font-medium">
                  {language === "hi"
                    ? "पूर्व भारतीय क्रिकेटर श्री नयन मोंगिया जी द्वारा 'वर्ष की सर्वाधिक विश्वसनीय एवं सटीक ज्योतिषी' से सम्मानित। गुरुदेव जी.डी. वशिष्ठ जी एवं श्री अरुण बंसल जी द्वारा सम्मानित। उपमुख्यमंत्री प्रेम बैरवा, पूर्व मुख्यमंत्री अशोक गहलोत, राजनेताओं एवं 28+ देशों के हजारों संतुष्ट जातकों का विश्वास।"
                    : "Honored with the 'India's Most Trusted & Accurate Astrologer of the Year' award by former Indian cricketer Sh Nayan Mongia Ji. Conferred Vedic Excellence by Gurudev GD Vashist Ji and Sh Arun Bansal Ji. Trusted by CMs, MPs, business leaders, and clients across 28+ countries."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-sans font-medium">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Confidential 1-on-1</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>12+ Years Experience</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Hindi &amp; English</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Sattvic Lal Kitab Remedies</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Vedic Astrology", "KP System", "Kundli Milan", "Lal Kitab Remedies", "Vastu Shastra", "Palmistry", "Numerology"].map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-[11px] text-stone-800 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Instant Call CTA Box */}
            <div className="lg:col-span-3 p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between space-y-4 shadow-sm">
              <div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                  {t.directLineTitle}
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950 mt-0.5">
                  {SITE_CONFIG.phone}
                </div>
                <p className="text-[11px] text-stone-600 mt-1 font-medium">
                  {t.directLineSub}
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.directCallBtn}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 hover:bg-emerald-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{t.whatsappAudioVideoBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleBookSession("All Life Comprehensive Consultancy (₹5,100/-)")}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.bookSlotBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Sessions Selection */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                {t.chooseSessionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans font-medium">
                {t.chooseSessionSub}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                      : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
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
                className="rounded-3xl p-6 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                      {session.badge || "Personal Session"}
                    </span>
                    {session.priceFormatted && (
                      <span className="font-serif text-base font-bold text-stone-950">
                        {session.priceFormatted}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors mb-2">
                    {session.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4 font-medium">
                    {session.description}
                  </p>

                  {session.details && (
                    <ul className="space-y-1.5 mb-5 text-[11px] text-stone-600 font-sans">
                      {session.details.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleBookSession(session.title, session.price)}
                    className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{t.callNow}</span>
                  </button>

                  <a
                    href={`https://wa.me/919116055424?text=${encodeURIComponent(language === "hi" ? `नमस्कार आचार्य अजय कुमार अग्रवाल जी! मैं परामर्श लेना चाहता हूँ: ${session.title}` : `Hello Astrologer Ajay Kumar Agarwal! I want to consult for: ${session.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.chatNow}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Direct Consultation Works (Light Theme) */}
        <div className="my-16 p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 text-center mb-8">
            {t.howItWorksTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3 shadow-xs">
                {t.step1Num}
              </div>
              <h3 className="font-serif text-sm font-bold text-stone-950 mb-1">{t.step1Title}</h3>
              <p className="text-xs text-stone-600 font-sans font-medium">
                {t.step1Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3 shadow-xs">
                {t.step2Num}
              </div>
              <h3 className="font-serif text-sm font-bold text-stone-950 mb-1">{t.step2Title}</h3>
              <p className="text-xs text-stone-600 font-sans font-medium">
                {t.step2Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3 shadow-xs">
                {t.step3Num}
              </div>
              <h3 className="font-serif text-sm font-bold text-stone-950 mb-1">{t.step3Title}</h3>
              <p className="text-xs text-stone-600 font-sans font-medium">
                {t.step3Desc}
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
