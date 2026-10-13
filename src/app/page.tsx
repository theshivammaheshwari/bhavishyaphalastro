"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AppQuickHub } from "@/components/home/AppQuickHub";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { SacredYantrasGrid } from "@/components/yantras/SacredYantrasGrid";
import { VipGallery } from "@/components/gallery/VipGallery";
import { ReviewsSection } from "@/components/testimonials/ReviewsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { BookingSection } from "@/components/booking/BookingSection";
import { BookingModal } from "@/components/booking/BookingModal";
import { YantraItem } from "@/lib/site-data";
import Link from "next/link";
import { Stars, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "All Life Comprehensive Consultancy (₹5,100/-)"
  );

  useEffect(() => {
    const handleGlobalBooking = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        setSelectedService(customEvent.detail.service);
      }
      setBookingModalOpen(true);
    };

    window.addEventListener("open-booking-modal", handleGlobalBooking);
    return () => window.removeEventListener("open-booking-modal", handleGlobalBooking);
  }, []);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleBuyYantra = (yantra: YantraItem) => {
    setSelectedService(`Sacred Yantra Order: ${yantra.title} (₹${yantra.price}/-)`);
    setBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-0">
      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. App-Style Quick Action Hub */}
      <AppQuickHub onOpenBooking={handleOpenBooking} />

      {/* 3. Interactive Kundli Hub Banner */}
      <section className="py-8 bg-gradient-to-r from-wine-950/90 via-celestial-900/90 to-wine-950/90 border-y border-gold-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/20 border border-gold-400/40 text-gold-300 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Stars className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-100">
                Generate Your Vedic Kundli & Match Horoscopes Online
              </h3>
              <p className="text-xs text-gold-300/80">
                Explore our free 7-in-1 calculator hub: Birth Charts, 36-Point Guna Milan, Daily Horoscopes & Numerology.
              </p>
            </div>
          </div>

          <Link
            href="/kundli"
            className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 flex-shrink-0 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
          >
            <span>Launch Kundli Hub</span>
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

      {/* Booking / Checkout Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
