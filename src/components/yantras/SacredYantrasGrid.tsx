"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Sparkles, Compass, Shield } from "lucide-react";
import { SACRED_YANTRAS, YantraItem } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";

export function SacredYantrasGrid({
  onBuyYantra,
}: {
  onBuyYantra: (yantra: YantraItem) => void;
}) {
  const [filter, setFilter] = useState<"all" | "yantra" | "pendant">("all");
  const [mobileView, setMobileView] = useState<"carousel" | "grid">("carousel");

  const filteredItems = SACRED_YANTRAS.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="sacred-yantras" className="py-16 sm:py-24 relative bg-celestial-950 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Consecrated Vedic Geometries</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gold-100 leading-tight">
            Sacred Yantras & Yantra Pendants
          </h2>

          <p className="text-xs sm:text-base text-gold-200/70 font-light leading-relaxed">
            Every Yantra and Sacred Pendant is consecrated with authentic Vedic Pran Pratishtha rituals by our scholars before dispatch. Fixed at an accessible single price of <strong className="text-gold-300 font-semibold">₹3,999/-</strong> each.
          </p>

          {/* Filter Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-gold-500/20 backdrop-blur-md mt-2 sm:mt-4 max-w-full overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                filter === "all"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "text-gold-200/70 hover:text-gold-200"
              }`}
            >
              All Items ({SACRED_YANTRAS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("yantra")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                filter === "yantra"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "text-gold-200/70 hover:text-gold-200"
              }`}
            >
              Wall / Altar (13)
            </button>
            <button
              type="button"
              onClick={() => setFilter("pendant")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                filter === "pendant"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "text-gold-200/70 hover:text-gold-200"
              }`}
            >
              Pendants (7)
            </button>
          </div>

          {/* Mobile View Toggle & Swipe Hint */}
          <div className="sm:hidden flex items-center justify-between text-[11px] text-gold-400/80 pt-2 px-1">
            <span>
              {mobileView === "carousel" ? "Swipe to browse items →" : `${filteredItems.length} items`}
            </span>
            <button
              type="button"
              onClick={() => setMobileView(mobileView === "carousel" ? "grid" : "carousel")}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-gold-500/20 text-gold-300 font-semibold"
            >
              {mobileView === "carousel" ? "Switch to 2-Col Grid" : "Switch to Swipe View"}
            </button>
          </div>
        </div>

        {/* Yantras Container: Carousel or Grid on Mobile, 4-col Grid on Desktop */}
        <div
          className={
            mobileView === "carousel"
              ? "flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 mt-8 sm:mt-14 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
              : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-14"
          }
        >
          {filteredItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
              className={`rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 shadow-xl transition-all duration-300 flex flex-col group ${
                mobileView === "carousel" ? "w-[72vw] max-w-[260px] sm:w-auto flex-shrink-0 snap-center" : ""
              }`}
            >
              {/* Media Card */}
              <div className="relative aspect-square overflow-hidden bg-white/5 p-4 flex items-center justify-center border-b border-gold-500/15">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={280}
                  height={280}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-celestial-950/90 text-gold-300 font-bold text-[11px] border border-gold-500/30">
                  {formatCurrency(item.price)}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-sm sm:text-base text-gold-200 group-hover:text-gold-300 transition-colors text-center line-clamp-1">
                  {item.title}
                </h3>

                <span className="text-[11px] text-gold-400/80 text-center block mt-1 font-medium">
                  {item.deity}
                </span>

                <p className="text-[11px] text-gold-200/70 mt-2.5 line-clamp-2 leading-relaxed text-center">
                  {item.benefits}
                </p>

                {/* Actions */}
                <div className="mt-auto pt-4 space-y-2">
                  <button
                    type="button"
                    onClick={() => onBuyYantra(item)}
                    className="w-full py-2.5 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-md shadow-gold-500/20 flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order Now ({formatCurrency(item.price)})</span>
                  </button>

                  <a
                    href={`https://wa.me/919116055424?text=Hello%20Bhavishyaphal%20Astrology%20Services%2C%20I%20want%20to%20order%20the%20consecrated%20${encodeURIComponent(
                      item.title
                    )}%20for%20${encodeURIComponent(formatCurrency(item.price))}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl text-[11px] font-semibold text-gold-300 hover:text-gold-100 hover:bg-white/5 border border-gold-500/20 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note at Bottom */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-gold-500/15 max-w-3xl mx-auto text-center text-xs text-gold-200/70 leading-relaxed">
          <strong className="text-gold-300 font-semibold block sm:inline">Gotra & Name Consecration:</strong>{" "}
          Each yantra order includes personalized Vedic Pran Pratishtha energization performed specifically with your Name, Gotra and Nakshatra before secure dispatch.
        </div>
      </div>
    </section>
  );
}
