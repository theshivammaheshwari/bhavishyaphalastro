"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("All Life Comprehensive Consultancy (₹5,100/-)");

  const handleOpenBooking = (serviceTitle: string, price?: number) => {
    const formatted = price ? `${serviceTitle} (₹${price.toLocaleString("en-IN")}/-)` : serviceTitle;
    setSelectedService(formatted);
    setBookingModalOpen(true);
  };

  const categories = [
    { id: "all", label: t.allConsultationsTab },
    { id: "life", label: t.lifeDestinyTab },
    { id: "marriage", label: t.marriageMatchmakingTab },
    { id: "career", label: t.careerBusinessTab },
    { id: "vastu", label: t.vastuPalmistryTab },
  ];

  // Helper categorization
  const isMatchCategory = (item: ServiceItem) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "life") return item.id === "all-life" || item.id === "gemstone" || item.id === "astro-consultancy";
    if (activeCategory === "marriage") return item.id === "kundli-milan" || item.id === "marriage-time" || item.id === "child-birth";
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
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navServices}</span>
        </nav>

        {/* Hero Banner (Light Theme) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Vedic Consultation Suite</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight mb-4">
            {t.servicesHeroTitle}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-medium">
            {t.servicesHeroSub}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-astrotalk-yellow text-stone-950 text-[10px] font-bold uppercase tracking-wide shadow-sm">
                      {service.badge}
                    </span>
                  )}

                  {service.priceFormatted && (
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 text-stone-950 font-serif font-bold text-xs shadow-sm">
                      {service.priceFormatted}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-stone-950 group-hover:text-amber-800 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-5 font-medium">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  {service.details && (
                    <ul className="space-y-2 mb-4 text-xs text-stone-700 font-sans font-medium">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 border-t border-stone-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(service.title, service.price)}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.bookThisSessionBtn}</span>
                </button>

                <a
                  href={`https://wa.me/919116055424?text=${encodeURIComponent(language === "hi" ? `नमस्कार आचार्य अजय कुमार अग्रवाल जी! मैं बुक करना चाहता हूँ: ${service.title}` : `Hello Astrologer Ajay Kumar Agarwal! I want to book: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="rounded-3xl p-8 bg-amber-50/70 border border-amber-200 shadow-sm text-center max-w-4xl mx-auto">
          <Award className="w-10 h-10 text-amber-700 mx-auto mb-3" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 mb-2">
            {language === "hi" ? "100% व्यक्तिगत एवं गोपनीय परामर्श" : "100% Personalized & Confidential Consultations"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
            {language === "hi"
              ? "प्रत्येक सत्र सीधे आचार्य अजय कुमार अग्रवाल द्वारा लिया जाता है। किसी भी प्रकार के भय या अंधविश्वास के बिना केवल व्यावहारिक लाल किताब व वैदिक उपाय।"
              : "Every session is conducted personally by Astrologer Ajay Kumar Agarwal. Experience genuine horary mathematical accuracy, empathetic clarity, and authentic Vedic remedies."}
          </p>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
