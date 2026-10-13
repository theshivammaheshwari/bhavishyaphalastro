"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Award,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Stars,
  Compass,
  ArrowRight,
  Hand,
  Home,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { HeroCosmicWheel } from "./HeroCosmicWheel";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection({ onOpenBooking }: { onOpenBooking: (serviceName?: string) => void }) {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-8 sm:pt-14 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-wine-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* National Recognition Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <Award className="w-4 h-4 text-gold-400" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gold-100 leading-[1.12] tracking-tight">
              {t.heroTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 drop-shadow-[0_2px_15px_rgba(244,200,102,0.3)]">
                {t.heroTitle2}
              </span>{" "}
              {t.heroTitle3}
            </h1>

            {/* Subtitle */}
            <p className="text-gold-200/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {t.heroSub}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking("All Life Comprehensive Consultancy")}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.heroCtaBook}</span>
              </button>

              <Link
                href="/kundli"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-gold-200 bg-white/5 hover:bg-gold-500/15 border border-gold-500/30 backdrop-blur-md hover:border-gold-400/60 transition-all flex items-center gap-2"
              >
                <Stars className="w-4 h-4 text-gold-400" />
                <span>{t.heroCtaKundli}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-gold-500/15 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gold-200/70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Private & Confidential</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>No Fear-Based Predictions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Global Video & Phone Sessions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Rotating Celestial Wheel Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <HeroCosmicWheel />
          </motion.div>
        </div>

        {/* 4 Pillars Summary Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-3 rounded-2xl bg-gradient-to-r from-wine-950/80 via-celestial-900/80 to-wine-950/80 border border-gold-500/20 backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          <div className="p-4 rounded-xl bg-white/5 border border-gold-500/10 hover:border-gold-400/30 transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Stars className="w-5 h-5" />
            </div>
            <div>
              <strong className="font-serif font-bold text-sm text-gold-200 block">
                Vedic Astrology
              </strong>
              <span className="text-xs text-gold-300/70 block mt-0.5 leading-snug">
                Birth-chart decoding & Dasha timelines for all life questions.
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-gold-500/10 hover:border-gold-400/30 transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <strong className="font-serif font-bold text-sm text-gold-200 block">
                KP Astrology
              </strong>
              <span className="text-xs text-gold-300/70 block mt-0.5 leading-snug">
                Pinpoint mathematical timing of events & sub-lord precision.
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-gold-500/10 hover:border-gold-400/30 transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Hand className="w-5 h-5" />
            </div>
            <div>
              <strong className="font-serif font-bold text-sm text-gold-200 block">
                Palmistry & Numbers
              </strong>
              <span className="text-xs text-gold-300/70 block mt-0.5 leading-snug">
                Mount analysis, lines & Chaldean vibration alignment.
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-gold-500/10 hover:border-gold-400/30 transition-all flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <strong className="font-serif font-bold text-sm text-gold-200 block">
                Vastu Consultancy
              </strong>
              <span className="text-xs text-gold-300/70 block mt-0.5 leading-snug">
                Harmonizing living and business spaces without demolition.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
