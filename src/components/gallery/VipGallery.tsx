"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, FileText, Sparkles, HeartHandshake, Eye } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/site-data";
import { ImageLightbox } from "./ImageLightbox";

export function VipGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryItem["category"] | "all">("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"carousel" | "grid">("carousel");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative bg-celestial-950/90 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Honors, VIP Clients & Conclaves</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gold-100 leading-tight">
            Moments of Distinction & Recognition
          </h2>

          <p className="text-xs sm:text-base text-gold-200/70 font-light leading-relaxed">
            Explore authentic photographic milestones—including state dignitary meetings, national award ceremonies, celebrity client consultations, and media coverage.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:pt-4 max-w-full overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              All Moments ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("awards")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === "awards"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Awards (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("clients")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === "clients"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Clients (5)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("articles")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === "articles"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Press (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("astrologers")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === "astrologers"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Astrologers (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("social")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeCategory === "social"
                  ? "bg-gold-400 text-celestial-950 shadow-md"
                  : "bg-white/5 text-gold-200/80 hover:bg-white/10"
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Social (5)</span>
            </button>
          </div>

          {/* Mobile View Toggle & Swipe Hint */}
          <div className="sm:hidden flex items-center justify-between text-[11px] text-gold-400/80 pt-2 px-1">
            <span>
              {mobileView === "carousel" ? "Swipe to view photos →" : `${filteredItems.length} photos`}
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

        {/* Gallery Container: Carousel or Grid on Mobile, 4-col Grid on Desktop */}
        <div
          className={
            mobileView === "carousel"
              ? "flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 mt-8 sm:mt-14 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
              : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-14"
          }
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.07 }}
              onClick={() => setSelectedItemIndex(idx)}
              className={`rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 shadow-xl transition-all duration-300 group cursor-pointer flex flex-col ${
                mobileView === "carousel" ? "w-[75vw] max-w-[280px] sm:w-auto flex-shrink-0 snap-center" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-celestial-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />

                {item.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-celestial-950/80 text-gold-300 font-bold text-[10px] uppercase tracking-wider border border-gold-500/30 backdrop-blur-sm">
                    {item.badge}
                  </span>
                )}

                <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-celestial-950/90 text-gold-300 flex items-center justify-center border border-gold-500/40 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-serif font-bold text-xs sm:text-sm text-gold-200 group-hover:text-gold-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gold-300/70 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={selectedItem}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
