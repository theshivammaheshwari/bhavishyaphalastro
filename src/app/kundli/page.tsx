"use client";

import { useState } from "react";
import Link from "next/link";
import { KundliHub } from "@/components/kundli/KundliHub";
import { BookingModal } from "@/components/booking/BookingModal";
import { Stars, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function KundliPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Detailed Kundli Interpretation (₹51/-)");

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Stars className="w-3.5 h-3.5 text-amber-600" />
            <span>7-in-1 Vedic Astrology Suite</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-950 leading-tight">
            Personalized Vedic Astrology Guidance & Calculator Hub
          </h1>

          <p className="text-xs sm:text-base text-stone-600 font-medium leading-relaxed">
            Generate your authentic North-Indian birth chart, evaluate marriage compatibility through 36-point Guna Milan, track daily sign transits, and discover lucky cosmic elements.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> No Google Places API required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-600" /> 100% Free Initial Chart
            </span>
          </div>
        </div>

        {/* The 7-in-1 Tool Hub */}
        <KundliHub onOpenBooking={handleOpenBooking} />

        {/* Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          initialService={selectedService}
        />
      </div>
    </div>
  );
}
