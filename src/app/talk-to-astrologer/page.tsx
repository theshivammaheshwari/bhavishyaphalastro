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
  Filter,
  Sparkles,
  Award,
  Clock,
  Languages,
  UserCheck,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

interface AstrologerProfile {
  id: string;
  name: string;
  title: string;
  badge?: string;
  isLead?: boolean;
  avatar: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  skills: string[];
  languages: string[];
  priceFormatted: string;
  priceRaw: number;
  isOnline: boolean;
  specialtyTag: string;
  bio: string;
}

export default function TalkToAstrologerPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedAstrologer, setSelectedAstrologer] = useState("Astrologer Swati Pandey");

  const handleConnect = (astrologerName: string, actionType: "call" | "chat") => {
    setSelectedAstrologer(`${astrologerName} (${actionType.toUpperCase()} Session)`);
    setBookingModalOpen(true);
  };

  const astrologers: AstrologerProfile[] = [
    {
      id: "swati-pandey",
      name: "Astrologer Swati Pandey",
      title: "India's Most Trusted & Accurate Astrologer of the Year",
      badge: "Lead Astrologer • National Awardee",
      isLead: true,
      avatar: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg",
      rating: 4.99,
      reviewsCount: 12540,
      experienceYears: 12,
      skills: ["Vedic Astrology", "KP System", "Kundli Milan", "Lal Kitab Remedies", "Vastu Shastra", "Palmistry"],
      languages: ["Hindi", "English"],
      priceFormatted: "₹5,100 / Full Session",
      priceRaw: 5100,
      isOnline: true,
      specialtyTag: "all",
      bio: "Conferred national honor by Sh Nayan Mongia Ji. Felicitated by Gurudev GD Vashist & Sh Arun Bansal. Trusted by CMs, MPs & celebrities.",
    },
    {
      id: "ramesh-shastri",
      name: "Acharya Ramesh Shastri",
      title: "Senior Vedic & Prashna Kundli Specialist",
      badge: "Vedic Scholar",
      avatar: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-2_59.jpeg",
      rating: 4.97,
      reviewsCount: 8210,
      experienceYears: 15,
      skills: ["Parashari Jyotish", "Prashna Shastra", "Muhurat", "Dosha Nivaran"],
      languages: ["Hindi", "Sanskrit"],
      priceFormatted: "₹2,100 / Session",
      priceRaw: 2100,
      isOnline: true,
      specialtyTag: "life",
      bio: "15+ years in rigorous planetary math and horary astrology for critical life decisions.",
    },
    {
      id: "priya-sharma",
      name: "Acharya Priya Sharma",
      title: "Kundli Milan & Relationship Counselor",
      badge: "Matchmaking Expert",
      avatar: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM_54.jpeg",
      rating: 4.98,
      reviewsCount: 6420,
      experienceYears: 9,
      skills: ["Ashtakoota Milan", "Mangal Dosh", "Marriage Timing", "Navamsha D9"],
      languages: ["Hindi", "English"],
      priceFormatted: "₹1,500 / Session",
      priceRaw: 1500,
      isOnline: true,
      specialtyTag: "marriage",
      bio: "Specialist in 36-Guna matching, Nadi Dosh cancellations, and marital harmony remedies.",
    },
    {
      id: "devendra-kumar",
      name: "Pandit Devendra Kumar",
      title: "Corporate Vastu & Career Astrologer",
      badge: "Vastu Architect",
      avatar: "/images/WhatsApp-Image-2026-08-07-at-2.13.06-PM-1_39.jpeg",
      rating: 4.96,
      reviewsCount: 5930,
      experienceYears: 14,
      skills: ["Commercial Vastu", "10th House Karma Bhava", "Business Expansion", "Litigation"],
      languages: ["Hindi", "English"],
      priceFormatted: "₹2,499 / Session",
      priceRaw: 2499,
      isOnline: true,
      specialtyTag: "career",
      bio: "Advising enterprise founders, corporate offices, and factory setups without demolition.",
    },
    {
      id: "sunita-joshi",
      name: "Dr. Sunita Joshi",
      title: "Vedic Numerologist & Lal Kitab Astrologer",
      badge: "Numerology Master",
      avatar: "/images/WhatsApp-Image-2026-08-07-at-2.13.00-PM-3_49.jpeg",
      rating: 4.97,
      reviewsCount: 7120,
      experienceYears: 11,
      skills: ["Chaldean Numerology", "Mobile Number Correction", "Lal Kitab Remedies", "Gemology"],
      languages: ["Hindi", "English"],
      priceFormatted: "₹1,100 / Session",
      priceRaw: 1100,
      isOnline: true,
      specialtyTag: "numerology",
      bio: "Specialist in destiny number harmonization, auspicious naming, and gemstone energy.",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Astrologers" },
    { id: "marriage", label: "Love & Marriage" },
    { id: "career", label: "Career & Business" },
    { id: "life", label: "Life & Kundli" },
    { id: "numerology", label: "Numerology & Vastu" },
  ];

  const filtered = astrologers.filter((a) => {
    const matchesFilter = activeFilter === "all" || a.specialtyTag === activeFilter || a.isLead;
    const matchesSearch =
      searchQuery === "" ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase());
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
              <span>Verified Astrologers Online Now</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Best Astrologers</span>
            </h1>
            <p className="text-xs sm:text-sm text-gold-200/80 mt-2 max-w-2xl font-sans">
              Connect instantly via confidential phone call or video consultation with Astrologer Swati Pandey and certified Vedic scholars.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search astrologer, skill or problem..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-900/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-astrotalk-yellow text-celestial-950 shadow-lg shadow-astrotalk-yellow/20"
                  : "bg-celestial-900/80 text-gold-200/80 hover:text-white border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Astrologers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-24">
          {filtered.map((astro) => (
            <div
              key={astro.id}
              className={`rounded-3xl p-5 sm:p-6 transition-all relative flex flex-col justify-between ${
                astro.isLead
                  ? "bg-gradient-to-br from-celestial-900 via-celestial-950 to-wine-950/80 border-2 border-astrotalk-yellow/40 shadow-2xl shadow-astrotalk-yellow/10"
                  : "bg-celestial-900/60 border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              <div>
                {/* Top Row: Avatar + Details */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-astrotalk-yellow/40 shadow-md">
                    <Image
                      src={astro.avatar}
                      alt={astro.name}
                      fill
                      className="object-cover"
                    />
                    {astro.isOnline && (
                      <span
                        className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-celestial-950"
                        title="Online Now"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {astro.badge && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow/15 text-astrotalk-yellow text-[10px] font-bold uppercase tracking-wider mb-1">
                        <Award className="w-3 h-3" />
                        <span>{astro.badge}</span>
                      </div>
                    )}

                    <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate">
                      {astro.name}
                    </h3>

                    <p className="text-[11px] text-gold-300/80 line-clamp-1 font-sans">
                      {astro.title}
                    </p>

                    {/* Rating & Orders */}
                    <div className="flex items-center gap-3 text-xs mt-1.5 flex-wrap">
                      <div className="flex items-center gap-1 text-astrotalk-yellow font-bold">
                        <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                        <span>{astro.rating}</span>
                        <span className="text-gold-300/60 text-[11px]">({astro.reviewsCount.toLocaleString("en-IN")})</span>
                      </div>
                      <span className="text-gold-500/40">•</span>
                      <div className="text-gold-200/80 text-[11px] font-medium">
                        {astro.experienceYears} Years Exp
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {astro.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-celestial-950/80 border border-gold-500/15 text-[10px] sm:text-[11px] text-gold-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-[11px] text-gold-300/70 mb-4 font-sans">
                  <Languages className="w-3.5 h-3.5 text-gold-400" />
                  <span>Languages: {astro.languages.join(", ")}</span>
                </div>

                <p className="text-xs text-gold-200/75 line-clamp-2 font-sans mb-4">
                  {astro.bio}
                </p>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-[10px] text-gold-300/60 uppercase tracking-wider">Fee</div>
                  <div className="text-astrotalk-yellow font-serif font-bold text-sm sm:text-base">
                    {astro.priceFormatted}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleConnect(astro.name, "call")}
                    className="px-4 py-2.5 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </button>

                  <a
                    href={`https://wa.me/919116055424?text=${encodeURIComponent(
                      `Hello! I want to start a consultation session with ${astro.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Astrotalk-Style Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-celestial-900/60 border border-gold-500/20 text-center">
          <div className="p-3">
            <ShieldCheck className="w-7 h-7 text-astrotalk-yellow mx-auto mb-2" />
            <h4 className="text-xs sm:text-sm font-bold text-white">100% Privacy</h4>
            <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Encrypted &amp; Confidential</p>
          </div>
          <div className="p-3">
            <UserCheck className="w-7 h-7 text-astrotalk-yellow mx-auto mb-2" />
            <h4 className="text-xs sm:text-sm font-bold text-white">Verified Astrologers</h4>
            <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">National Awarded Experts</p>
          </div>
          <div className="p-3">
            <Zap className="w-7 h-7 text-astrotalk-yellow mx-auto mb-2" />
            <h4 className="text-xs sm:text-sm font-bold text-white">Instant Connection</h4>
            <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Zero Waiting via WhatsApp</p>
          </div>
          <div className="p-3">
            <Award className="w-7 h-7 text-astrotalk-yellow mx-auto mb-2" />
            <h4 className="text-xs sm:text-sm font-bold text-white">Authentic Remedies</h4>
            <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5">Traditional Vedic Methods</p>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedAstrologer}
      />
    </div>
  );
}
