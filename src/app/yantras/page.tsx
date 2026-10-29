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
  const { t } = useLanguage();
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
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Sacred Yantras &amp; Pendants</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consecrated Sacred Energy Store</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Pran Pratishtha Energized <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Sacred Yantras</span>
          </h1>

          <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-sans">
            Every sacred Yantra and Pendant undergoes an authentic 3-day Vedic Pran Pratishtha ritual performed personally in the buyer&apos;s <strong>Name, Gotra, and Nakshatra</strong> by Astrologer Swati Pandey before dispatch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gold-300">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-astrotalk-yellow" /> 100% Pure Asthadhatu &amp; Brass</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-astrotalk-yellow" /> 3-Day Vedic Pran Pratishtha</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-astrotalk-yellow" /> Fixed ₹3,999/- Across All Yantras</span>
          </div>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gold-500/15">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {[
              { id: "all", label: `All Items (${SACRED_YANTRAS.length})` },
              { id: "yantra", label: `Wall / Altar Yantras (15)` },
              { id: "pendant", label: `Sacred Pendants (7)` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-astrotalk-yellow text-celestial-950 shadow-lg shadow-astrotalk-yellow/20"
                    : "bg-celestial-900/80 text-gold-200/80 hover:text-white border border-gold-500/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Yantra or Deity..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-celestial-900/80 border border-gold-500/25 text-xs text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
            />
          </div>
        </div>

        {/* Yantras Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 sm:mb-24">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/40 hover:shadow-2xl hover:shadow-black/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-celestial-950 p-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-celestial-950/80 border border-gold-500/30 text-[10px] font-bold text-gold-200 uppercase tracking-wider backdrop-blur-md">
                    {item.type === "yantra" ? "Wall Yantra" : "Pendant"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <div className="text-[10px] font-bold text-astrotalk-yellow uppercase tracking-widest mb-1">
                    Deity: {item.deity}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-astrotalk-yellow transition-colors line-clamp-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gold-200/80 line-clamp-2 font-sans mb-3 leading-relaxed">
                    {item.benefits}
                  </p>

                  <div className="p-2.5 rounded-xl bg-celestial-950/70 border border-gold-500/10 text-[11px] text-gold-300/80 space-y-1 mb-3 font-sans">
                    <div className="flex items-center gap-1.5 text-astrotalk-yellow">
                      <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Direction: {item.placement}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-4 sm:p-5 pt-0 border-t border-gold-500/10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-gold-300/60 uppercase">Price</div>
                  <div className="text-astrotalk-yellow font-serif font-bold text-base">
                    ₹{item.price.toLocaleString("en-IN")}/-
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleBuy(item)}
                  className="px-4 py-2.5 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pran Pratishtha Ritual Explanation */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-celestial-900/90 via-celestial-950 to-wine-950/80 border border-gold-500/25">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                Ancient Vedic Consecration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                What is 3-Day Vedic Pran Pratishtha?
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/85 leading-relaxed font-sans mb-4">
                A Yantra without consecration is merely etched metal. In the ancient Agama and Tantra Shastras, <strong>Pran Pratishtha</strong> is the sacred invocation through which universal divine cosmic vibrations are infused into the geometric nodes of the Yantra.
              </p>
              <ul className="space-y-2 text-xs text-gold-300 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-astrotalk-yellow" />
                  <span>Panchamrit Abhishekam and sacred herbal purification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-astrotalk-yellow" />
                  <span>11,000 Vedic Beej Mantra recitations in buyer&apos;s Name &amp; Gotra</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-astrotalk-yellow" />
                  <span>Sealed in ceremonial protective packaging before delivery</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-celestial-950/80 border border-gold-500/20 text-center">
              <ShoppingBag className="w-10 h-10 text-astrotalk-yellow mx-auto mb-3" />
              <h4 className="font-serif text-lg font-bold text-white mb-1">
                Custom Yantra Orders on WhatsApp
              </h4>
              <p className="text-xs text-gold-300/80 font-sans mb-4">
                Have specific planetary doshas or need guidance on which Yantra will resolve your current career or marriage obstacles?
              </p>
              <a
                href={`https://wa.me/919116055424?text=${encodeURIComponent(
                  "Hello Astrologer Swati Pandey, I would like guidance on ordering a consecrated sacred Yantra."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-celestial-950 text-xs sm:text-sm font-bold shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Astrologer for Yantra Guidance</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <YantraOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        yantra={selectedYantra}
      />
    </div>
  );
}
