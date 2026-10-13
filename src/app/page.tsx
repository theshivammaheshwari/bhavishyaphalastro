"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { SacredYantrasGrid } from "@/components/yantras/SacredYantrasGrid";
import { VipGallery } from "@/components/gallery/VipGallery";
import { ReviewsSection } from "@/components/testimonials/ReviewsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { BookingSection } from "@/components/booking/BookingSection";
import { BookingModal } from "@/components/booking/BookingModal";
import { YantraOrderModal } from "@/components/yantras/YantraOrderModal";
import { YantraItem } from "@/lib/site-data";
import Link from "next/link";
import { Stars, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
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

  return (
    <div className="flex flex-col gap-0">
      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. Interactive Kundli Hub Banner */}
      <section className="py-8 bg-gradient-to-r from-wine-950/90 via-celestial-900/90 to-wine-950/90 border-y border-gold-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-300 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Stars className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-100">
                {t.bannerTitle}
              </h3>
              <p className="text-xs text-gold-300/80">
                {t.bannerSub}
              </p>
            </div>
          </div>

          <Link
            href="/kundli"
            className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 flex-shrink-0 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
          >
            <span>{t.bannerCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. About Astrologer & Recognitions */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* 4. Consultancy Services & Remedial Products */}
      <ServicesGrid onOpenBooking={handleOpenBooking} />

      {/* 5. Consecrated Sacred Yantras Catalog */}
      <SacredYantrasGrid onBuyYantra={handleBuyYantra} />

      {/* 6. VIP Gallery & Conclave Moments */}
      <VipGallery />

      {/* 7. Client Reviews */}
      <ReviewsSection />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Direct Contact & Booking Form */}
      <BookingSection />

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
