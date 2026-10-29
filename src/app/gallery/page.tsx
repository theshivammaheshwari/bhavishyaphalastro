"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  FileText,
  Sparkles,
  HeartHandshake,
  Eye,
  ArrowRight,
  PhoneCall,
  Calendar,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/site-data";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryItem["category"] | "all">("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

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

  const categories = [
    { id: "all", label: `All Moments (${GALLERY_ITEMS.length})`, icon: Sparkles },
    { id: "awards", label: "National Awards", icon: Award },
    { id: "clients", label: "Distinguished Clients", icon: HeartHandshake },
    { id: "astrologers", label: "Astrological Conclaves", icon: Users },
    { id: "social", label: "Social & Political Dignitaries", icon: Users },
    { id: "articles", label: "Press & Articles", icon: FileText },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">VIP Gallery</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Official Recognitions &amp; VIP Moments</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Moments of Distinction <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">&amp; National Honor</span>
          </h1>

          <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-sans">
            Photographic proof of authentic milestones — national awards presented by celebrated sports personalities, meetings with Deputy Chief Ministers, MPs, Bollywood filmmakers, and prestigious conclaves.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-astrotalk-yellow text-celestial-950 shadow-lg shadow-astrotalk-yellow/20 font-bold"
                    : "bg-celestial-900/80 text-gold-200/80 hover:text-white border border-gold-500/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-celestial-900/60 border border-gold-500/20 hover:border-astrotalk-yellow/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />

                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow text-celestial-950 text-[10px] font-bold uppercase tracking-wider shadow">
                    {item.badge}
                  </span>
                )}

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-celestial-950/80 backdrop-blur-md flex items-center justify-center text-astrotalk-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-astrotalk-yellow transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gold-300/70 line-clamp-2 font-sans leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to consult */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-celestial-900 via-celestial-950 to-wine-950 border border-gold-500/25 text-center max-w-3xl mx-auto">
          <Award className="w-10 h-10 text-astrotalk-yellow mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Experience National Award-Winning Astrological Guidance
          </h3>
          <p className="text-xs sm:text-sm text-gold-200/80 mb-6 font-sans">
            Schedule your confidential 1-on-1 birth chart reading directly with Astrologer Swati Pandey.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-serif text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 transition-all"
          >
            <span>View All Consultation Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <ImageLightbox
          item={selectedItem}
          onClose={() => setSelectedItemIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
