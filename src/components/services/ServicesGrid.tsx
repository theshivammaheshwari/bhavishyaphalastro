"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Gem,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  MAIN_SERVICES,
  ASTRO_CONSULTATION_PACKAGES,
  REMEDIAL_PRODUCTS,
  SITE_CONFIG,
} from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

export function ServicesGrid({
  onOpenBooking,
}: {
  onOpenBooking: (serviceName?: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");

  return (
    <section id="services" className="py-24 relative bg-celestial-950/80 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Consultancy & Remedial Science</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-100 leading-tight">
            Comprehensive Guidance & Sacred Remedies
          </h2>

          <p className="text-sm sm:text-base text-gold-200/70 font-light leading-relaxed">
            Choose from our specialized one-to-one astrology consultancy sessions or explore authenticated, energized Vedic remedial products.
          </p>

          {/* Interactive Category Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-gold-500/20 backdrop-blur-xl mt-4">
            <button
              type="button"
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2.5 rounded-xl font-serif text-xs sm:text-sm font-bold transition-all ${
                activeTab === "services"
                  ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg shadow-wine-900/50 border border-gold-400/40"
                  : "text-gold-200/70 hover:text-gold-200"
              }`}
            >
              Consultancy Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 rounded-xl font-serif text-xs sm:text-sm font-bold transition-all ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg shadow-wine-900/50 border border-gold-400/40"
                  : "text-gold-200/70 hover:text-gold-200"
              }`}
            >
              Remedial Products
            </button>
          </div>
        </div>

        {/* Tab 1: Consultancy Services Content */}
        {activeTab === "services" && (
          <div className="mt-14 space-y-16">
            {/* 4 Primary Service Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MAIN_SERVICES.map((srv, idx) => (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 group flex flex-col shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-celestial-950/30 to-transparent" />
                    {srv.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-gold-400/90 text-celestial-950 font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-lg text-gold-200 group-hover:text-gold-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gold-200/70 mt-2 leading-relaxed flex-1">
                      {srv.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(srv.title)}
                        className="text-xs font-bold text-gold-300 hover:text-gold-100 flex items-center gap-1 group/btn"
                      >
                        <span>Book Session</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <a
                        href={`https://wa.me/919116055424?text=Hello%20Bhavishyaphal%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
                          srv.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* In-Depth Astro Consultation Packages with Official Prices */}
            <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gold-500/15">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                    Astro Consultancy Options
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                    Select Your Focused Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                    Transparent, official fees provided for all specialized life queries.
                  </p>
                </div>

                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {ASTRO_CONSULTATION_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-5 rounded-2xl bg-white/5 border border-gold-500/15 hover:border-gold-400/40 transition-all flex flex-col sm:flex-row gap-4 group"
                  >
                    <div className="relative w-full sm:w-36 h-36 rounded-xl overflow-hidden flex-shrink-0 border border-gold-500/20">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {pkg.priceFormatted && (
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-celestial-950/90 text-gold-300 font-bold text-xs border border-gold-500/30">
                          {pkg.priceFormatted}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-base text-gold-200 group-hover:text-gold-300 transition-colors">
                          {pkg.title}
                        </h4>
                      </div>

                      <p className="text-xs text-gold-200/75 mt-1.5 leading-relaxed">
                        {pkg.description}
                      </p>

                      {pkg.details && (
                        <ul className="mt-2.5 space-y-1">
                          {pkg.details.slice(0, 2).map((det, i) => (
                            <li key={i} className="flex items-center gap-1.5 text-[11px] text-gold-300/80">
                              <CheckCircle2 className="w-3 h-3 text-gold-400 flex-shrink-0" />
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-3.5 flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => onOpenBooking(`${pkg.title} (${pkg.priceFormatted || "Consultation"})`)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-sm"
                        >
                          Book Now
                        </button>

                        <a
                          href={`https://wa.me/919116055424?text=Hello%20Bhavishyaphal%2C%20I%20want%20to%20book%20${encodeURIComponent(
                            pkg.title
                          )}${pkg.priceFormatted ? ` for ${pkg.priceFormatted}` : ""}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gold-300 hover:text-gold-100 hover:bg-white/5 transition-colors border border-gold-500/20"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Remedial Products Content */}
        {activeTab === "products" && (
          <div className="mt-14 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REMEDIAL_PRODUCTS.map((prod, idx) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 group flex flex-col shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-celestial-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-wine-700 text-gold-200 font-bold text-[10px] uppercase tracking-wider border border-gold-400/30">
                      {prod.badge}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-lg text-gold-200 group-hover:text-gold-300 transition-colors">
                      {prod.title}
                    </h3>
                    <span className="text-[11px] text-gold-400 font-medium block mt-0.5">
                      {prod.subtitle}
                    </span>
                    <p className="text-xs text-gold-200/70 mt-2.5 leading-relaxed flex-1">
                      {prod.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(`Order Remedial Product: ${prod.title}`)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-sm"
                      >
                        Order / Enquire
                      </button>

                      <a
                        href={`https://wa.me/919116055424?text=Hello%20Bhavishyaphal%2C%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(
                          prod.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 p-1"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct Link to Sacred Yantras */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-wine-950 via-celestial-900 to-wine-950 border border-gold-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="text-left">
                <span className="text-xs text-gold-400 font-bold uppercase tracking-widest">
                  Featured Vedic Collection
                </span>
                <h3 className="font-serif text-2xl font-bold text-gold-100 mt-1">
                  Consecrated Sacred Yantras & Yantra Pendants
                </h3>
                <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                  15 consecrated Sacred Yantras and 7 Sacred energized Pendants at ₹3,999 each.
                </p>
              </div>

              <a
                href="#sacred-yantras"
                className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl flex-shrink-0 flex items-center gap-2"
              >
                <span>View Full Yantra Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
