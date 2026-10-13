"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Quick contact actions" className="fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-celestial-900/90 hover:bg-celestial-800 text-gold-300 border border-gold-500/30 shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-gold-500/20"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Phone Call */}
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-xl shadow-amber-600/30 flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Call Bhavishyaphal Astrology"
        title="Direct Call"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat Button with Ping Indicator */}
      <div className="relative group">
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-celestial-950"></span>
        </span>

        <a
          href={SITE_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>

        {/* Floating Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-celestial-900/95 backdrop-blur-md border border-gold-500/30 shadow-xl text-xs font-semibold text-gold-200 whitespace-nowrap pointer-events-none">
          <span>Chat on WhatsApp</span>
        </div>
      </div>
    </aside>
  );
}
