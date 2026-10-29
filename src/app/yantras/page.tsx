"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  MessageCircle,
  Sparkles,
  Compass,
  Shield,
  CheckCircle2,
  Search,
  ArrowRight,
  Flame,
  Award,
} from "lucide-react";
import { SACRED_YANTRAS, YantraItem, SITE_CONFIG } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";
import { YantraOrderModal } from "@/components/yantras/YantraOrderModal";
import { useLanguage } from "@/context/LanguageContext";

export default function YantrasPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "yantra" | "pendant">("all");
  const [search, setSearch] = useState("");
  const [selectedYantra, setSelectedYantra] = useState<YantraItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleBuy = (item: YantraItem) => {
    setSelectedYantra(item);
    setOrderModalOpen(true);
  };

  const filteredItems = SACRED_YANTRAS.filter((item) => {
    const matchesFilter = filter === "all" || item.type === filter;
    const matchesSearch =
      search === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.deity.toLowerCase().includes(search.toLowerCase()) ||
      item.benefits.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navYantras}</span>
        </nav>

        {/* Hero Section (Light Theme) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Consecrated Sacred Energy Store</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight mb-4">
            {t.yantrasHeroTitle}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-medium">
            {t.yantrasHeroSub}
          </p>

          {/* Consecration Guarantee Box */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-stone-800 max-w-2xl mx-auto flex items-center justify-center gap-2 font-medium">
            <Flame className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>{t.yantrasFixedPriceNotice}</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {t.filterAllYantras}
            </button>
            <button
              type="button"
              onClick={() => setFilter("yantra")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                filter === "yantra"
                  ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {t.filterWallYantras}
            </button>
            <button
              type="button"
              onClick={() => setFilter("pendant")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                filter === "pendant"
                  ? "bg-astrotalk-yellow text-stone-950 shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {t.filterPendants}
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={language === "hi" ? "यंत्र या लाभ खोजें..." : "Search Yantra or deity..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm"
            />
          </div>
        </div>

        {/* Yantras Grid (Light Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-stone-50 p-4 border-b border-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow text-stone-950 text-xs font-serif font-bold shadow-xs">
                    ₹{item.price.toLocaleString("en-IN")}/-
                  </span>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[10px] font-bold uppercase border border-stone-200">
                    {item.type}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-base text-stone-950 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-800 font-bold mt-0.5">
                      {item.deity}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                    {item.benefits}
                  </p>

                  <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-[11px] font-medium text-stone-700 font-mono line-clamp-1">
                    🪔 {item.mantra}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleBuy(item)}
                  className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{t.orderYantraBtn}</span>
                </button>

                <a
                  href={`https://wa.me/919116055424?text=${encodeURIComponent(`Hello Astrologer Swati Pandey! I want to order consecrated: ${item.title} (₹3,999)`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center justify-center"
                  title="Order on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Vedic Pran Pratishtha Process Details */}
        <div className="rounded-3xl p-8 bg-white border border-stone-200 shadow-sm">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 text-center mb-4">
            {language === "hi" ? "3-दिवसीय वैदिक प्राण प्रतिष्ठा अनुष्ठान" : "3-Day Vedic Pran Pratishtha Ritual Process"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 text-center max-w-2xl mx-auto mb-8 font-medium">
            {language === "hi"
              ? "हमारे यहां बिना प्राण-प्रतिष्ठा के कोई भी यंत्र नहीं भेजा जाता। प्रत्येक यंत्र आपके नाम और गोत्र से सिद्ध होकर सकारात्मक ऊर्जा प्रसारित करता है।"
              : "Every sacred instrument undergoes an authentic 3-day Vedic consecration ritual led by learned scholars under the supervision of Astrologer Swati Pandey."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-serif font-bold text-sm text-stone-950 mb-1">
                {language === "hi" ? "नाम व गोत्र संकल्प" : "Sankalpa in Your Name"}
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                {language === "hi" ? "आपकी कुंडली के नक्षत्र व गोत्र का संकल्प लेकर यंत्र पर वैदिक मंत्रों की आहुति दी जाती है।" : "Consecration begins with personalized Sankalpa invoking your Gotra, Nakshatra, and spiritual purpose."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-serif font-bold text-sm text-stone-950 mb-1">
                {language === "hi" ? "11,000 बीज मंत्र जाप" : "11,000 Beej Mantra Japa"}
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                {language === "hi" ? "संबंधित देवी-देवता के विशिष्ट बीज मंत्रों द्वारा यंत्र की ज्यामिति को जागृत किया जाता है।" : "Specific divine Beej Mantras are chanted over 3 continuous days to awaken the sacred sacred geometry."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-astrotalk-yellow text-stone-950 font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-serif font-bold text-sm text-stone-950 mb-1">
                {language === "hi" ? "सुरक्षित होम डिलीवरी" : "Express Home Delivery"}
              </h3>
              <p className="text-xs text-stone-600 font-medium">
                {language === "hi" ? "गंगाजल व चंदन से अभिमंत्रित करके स्थापना विधि के साथ सुरक्षित आपके पते पर भेजा जाता है।" : "Dispatched securely in tamper-evident packaging with sacred installation guidelines and auspicious Muhurat."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yantra Order Modal */}
      <YantraOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        yantra={selectedYantra}
      />
    </div>
  );
}
