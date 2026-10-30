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
  const { t, language } = useLanguage();
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
    { id: "all", label: language === "hi" ? `सभी तस्वीरें (${GALLERY_ITEMS.length})` : `All Moments (${GALLERY_ITEMS.length})`, icon: Sparkles },
    { id: "awards", label: language === "hi" ? "राष्ट्रीय सम्मान व पुरस्कार" : "National Awards", icon: Award },
    { id: "clients", label: language === "hi" ? "विशिष्ट अतिथि एवं जातक" : "Distinguished Clients", icon: HeartHandshake },
    { id: "astrologers", label: language === "hi" ? "ज्योतिष महासम्मेलन" : "Astrological Conclaves", icon: Users },
    { id: "social", label: language === "hi" ? "सामाजिक व राजनीतिक हस्तियां" : "Social & Political Dignitaries", icon: Users },
    { id: "articles", label: language === "hi" ? "प्रेस एवं मीडिया कवरेज" : "Press & Articles", icon: FileText },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navGallery}</span>
        </nav>

        {/* Hero Section (Light Theme) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>National Recognitions &amp; Public Trust</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight mb-4">
            {language === "hi" ? "वीआईपी गैलरी एवं राष्ट्रीय सम्मान" : "VIP Dignitaries & National Awards Gallery"}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-medium">
            {language === "hi"
              ? "क्रिकेट हस्तियों, वरिष्ठ मंत्रियों, मुख्यमंत्रियों, बॉलीवुड निर्देशकों एवं राष्ट्रीय ज्योतिष सम्मेलनों में आचार्य अजय कुमार अग्रवाल के सम्मानित क्षण।"
              : "Moments of recognition featuring Deputy CM Prem Bairwa, cricket icon Sh Nayan Mongia Ji, former CM Ashok Gehlot, Bollywood luminaries, and grand astrological conclaves."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Light Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>

                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow text-stone-950 text-[10px] font-bold uppercase shadow-xs">
                    {item.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-sm line-clamp-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-amber-200 line-clamp-2 mt-0.5 font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
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
