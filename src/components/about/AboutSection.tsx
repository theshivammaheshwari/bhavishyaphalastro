"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Check, ShieldCheck, HeartHandshake, PhoneCall, Sparkles, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export function AboutSection({ onOpenBooking }: { onOpenBooking: (serviceName?: string) => void }) {
  const [expandedMobile, setExpandedMobile] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-20 relative bg-celestial-950/60 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Visual Montage of Dignitaries & Astrologer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-3.5 relative">
              {/* Main Featured Photo */}
              <div className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl shadow-black/60 group">
                <Image
                  src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                  alt="India's Most Trusted Astrologer of the Year Award by Ex Indian Cricketer Sh Nayan Mongia Ji"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-400 text-celestial-950 font-bold text-[10px] uppercase">
                    National Award
                  </span>
                  <p className="text-gold-100 font-serif font-bold text-xs sm:text-sm mt-1">
                    India&apos;s Most Trusted Astrologer Award
                  </p>
                  <p className="text-gold-300/80 text-[11px]">
                    Conferred by Ex Indian Cricketer & Coach Sh Nayan Mongia Ji
                  </p>
                </div>
              </div>

              {/* Secondary Photos: Always visible on desktop, toggleable on mobile */}
              <div className={`${expandedMobile ? "contents" : "hidden sm:contents"}`}>
                {/* Secondary Photo 1: Dy CM Prem Bairwa */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold-500/20 group">
                  <Image
                    src="/images/WhatsApp-Image-2026-08-07-at-2.13.05-PM-1_37.jpeg"
                    alt="With Deputy Chief Minister Rajasthan Sh Prem Bairwa Ji"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] text-gold-200 font-medium">
                    Dy CM Prem Bairwa Ji
                  </span>
                </div>

                {/* Secondary Photo 2: Celebrity Astrologer Shailender Pandey */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold-500/20 group">
                  <Image
                    src="/images/WhatsApp-Image-2026-08-07-at-2.13.06-PM-2_36.jpeg"
                    alt="With Celebrity Astrologer Sh Shailender Pandey Ji"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] text-gold-200 font-medium">
                    Sh Shailender Pandey Ji
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-gradient-to-br from-wine-900 to-celestial-900 border border-gold-400/40 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gold-400 text-celestial-950 font-serif font-extrabold text-base sm:text-lg flex items-center justify-center">
                ★
              </div>
              <div>
                <strong className="block text-[11px] sm:text-xs font-bold text-gold-200">
                  Respected by Leaders
                </strong>
                <span className="text-[9px] sm:text-[10px] text-gold-400/80">
                  Judges, Ministers & Public Icons
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gold-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Bhavishyaphal Astrology</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-gold-100 mt-2 leading-tight">
                Traditional Vedic Wisdom With Practical Clarity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-light">
              Led by <strong className="text-gold-300 font-semibold">{SITE_CONFIG.founder}</strong>, Bhavishyaphal combines classical Vedic horoscopes, KP timing calculations, and Vastu principles with modern psychological guidance.
            </p>

            {/* Collapsible Mobile Content */}
            <div className={`${expandedMobile ? "block" : "hidden sm:block"} space-y-4`}>
              <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-light">
                Every consultation is strictly private and centers on empowering your decision-making. We never use fear-based tactics or superstitious remedies. Instead, we reveal realistic planetary timing and grounded solutions.
              </p>

              {/* Checklist of 4 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-gold-500/15 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold-200">Personal One-to-One Session</h4>
                    <p className="text-[11px] text-gold-300/70 mt-0.5">Direct discussion with Astrologer Swati Pandey.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-gold-500/15 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold-200">Complete Privacy & Trust</h4>
                    <p className="text-[11px] text-gold-300/70 mt-0.5">Your personal questions remain 100% confidential.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-gold-500/15 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold-200">Clear & Practical Remedies</h4>
                    <p className="text-[11px] text-gold-300/70 mt-0.5">Simple mantras, donations, and consecrated yantras.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-gold-500/15 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold-200">Proven Track Record</h4>
                    <p className="text-[11px] text-gold-300/70 mt-0.5">Awarded by cricket icons, gurus & state ministers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Expand / Collapse Button */}
            <div className="sm:hidden pt-1">
              <button
                type="button"
                onClick={() => setExpandedMobile(!expandedMobile)}
                className="w-full py-2 px-3 rounded-xl bg-white/5 border border-gold-500/20 text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{expandedMobile ? "Show Less" : "Read Full Story & Honors (4 Pillars)"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedMobile ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking("All Life Comprehensive Consultancy")}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-lg shadow-gold-500/25 transition-all"
              >
                Schedule A Private Session
              </button>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gold-200 border border-gold-500/30 hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Call +91 91160 55424</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
