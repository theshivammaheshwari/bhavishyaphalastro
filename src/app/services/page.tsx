"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  PhoneCall,
  MessageCircle,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
  Filter,
} from "lucide-react";
import { ASTRO_CONSULTATION_PACKAGES, MAIN_SERVICES, SITE_CONFIG, ServiceItem } from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("All Life Comprehensive Consultancy (₹5,100/-)");

  const handleOpenBooking = (serviceTitle: string, price?: number) => {
    const formatted = price ? `${serviceTitle} (₹${price.toLocaleString("en-IN")}/-)` : serviceTitle;
    setSelectedService(formatted);
    setBookingModalOpen(true);
  };

  const categories = [
    { id: "all", label: "All Consultations" },
    { id: "life", label: "Life & Destiny" },
    { id: "marriage", label: "Marriage & Matchmaking" },
    { id: "career", label: "Career & Business" },
    { id: "vastu", label: "Vastu & Palmistry" },
  ];

  // Helper categorization
  const isMatchCategory = (item: ServiceItem) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "life") return item.id === "all-life" || item.id === "gemstone" || item.id === "astro-consultancy";
    if (activeCategory === "marriage") return item.id === "kundli-milan" || item.id === "marriage-time";
    if (activeCategory === "career") return item.id === "career-business" || item.id === "education" || item.id === "litigation";
    if (activeCategory === "vastu") return item.id === "vastu-consultancy" || item.id === "palmistry" || item.id === "numerology";
    return true;
  };

  const allServices: ServiceItem[] = [
    ...ASTRO_CONSULTATION_PACKAGES,
    ...MAIN_SERVICES,
  ];

  const filteredServices = allServices.filter(isMatchCategory);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Consultation Packages</span>
        </nav>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Consultation Suite</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Specialized Astrological <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Consultation Packages</span>
          </h1>
          <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-sans">
            Personalized, 1-on-1 confidential consultations with Astrologer Swati Pandey. Transparent pricing, authentic mathematical birth-chart calculations, and practical remedial solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-astrotalk-yellow text-celestial-950 shadow-lg shadow-astrotalk-yellow/20"
                  : "bg-celestial-900/80 text-gold-200/80 hover:text-white border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/40 hover:shadow-2xl hover:shadow-black/60 transition-all flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-celestial-950/40 to-transparent" />
                
                {service.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-astrotalk-yellow text-celestial-950 text-[10px] font-bold uppercase tracking-wide shadow-md">
                    {service.badge}
                  </span>
                )}

                {service.price && (
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-celestial-950/90 border border-astrotalk-yellow/30 backdrop-blur-md">
                    <span className="text-astrotalk-yellow font-serif font-bold text-sm sm:text-base">
                      ₹{service.price.toLocaleString("en-IN")}/-
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-astrotalk-yellow transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-200/80 font-sans leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.details && (
                    <ul className="space-y-1.5 mb-6 text-xs text-gold-300/90 font-sans">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-astrotalk-yellow flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-gold-500/15 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking(service.title, service.price)}
                    className="flex-1 py-3 px-4 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Book Session</span>
                  </button>

                  <a
                    href={`https://wa.me/919116055424?text=${encodeURIComponent(
                      `Hello Astrologer Swati Pandey, I would like to book the "${service.title}" consultation.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 transition-colors flex items-center justify-center"
                    title="Quick WhatsApp Booking"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Vedic Consultation Workflow */}
        <section className="mb-16 sm:mb-24 p-6 sm:p-10 rounded-3xl bg-celestial-900/60 border border-gold-500/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-widest">
              Seamless Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              How Your Consultation Works
            </h2>
            <p className="text-xs sm:text-sm text-gold-300/70 mt-2">
              From birth details to personalized remedial guidance in 5 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Select Package", desc: "Choose your focus area (All Life, Marriage, Career, Vastu, etc.)" },
              { step: "02", title: "Share Birth Data", desc: "Provide accurate Date, Time & Place of Birth for planetary mapping" },
              { step: "03", title: "Deep Analysis", desc: "Astrologer Swati Pandey computes D1, D9, D10 charts & Dasha transits" },
              { step: "04", title: "Live Consultation", desc: "Direct 1-on-1 Call or WhatsApp Video session with in-depth answers" },
              { step: "05", title: "Remedial Plan", desc: "Receive practical mantras, gemstone advice, and Lal Kitab remedies" },
            ].map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-celestial-950/80 border border-gold-500/15 relative">
                <span className="text-2xl font-serif font-extrabold text-astrotalk-yellow/30 mb-2 block">
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{st.title}</h4>
                <p className="text-xs text-gold-300/70 leading-relaxed font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Connect Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-celestial-900 via-celestial-950 to-wine-950 p-8 sm:p-12 border border-gold-500/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need Help Choosing the Right Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-gold-300/80 mt-1 max-w-xl font-sans">
              Speak directly with our consultation desk on WhatsApp or Phone to guide you to the exact service suited for your current life situation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-celestial-900 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-200 hover:text-white transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-astrotalk-yellow" />
              <span>Call +91 91160 55424</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-celestial-950 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
