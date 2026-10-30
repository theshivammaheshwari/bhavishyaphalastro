"use client";

import Link from "next/link";
import {
  Sparkles,
  Heart,
  PhoneCall,
  Flame,
  Calendar,
  Award,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

interface AppQuickHubProps {
  onOpenBooking: (serviceName?: string) => void;
}

export function AppQuickHub({ onOpenBooking }: AppQuickHubProps) {
  const quickItems = [
    {
      id: "kundli",
      title: "Free Kundli",
      subtitle: "Janam Kundli",
      icon: Sparkles,
      href: "/kundli",
      badge: "Free",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      gradient: "from-amber-500/20 via-gold-500/20 to-amber-600/10",
      iconColor: "text-gold-300",
    },
    {
      id: "milan",
      title: "Kundli Milan",
      subtitle: "36 Guna Match",
      icon: Heart,
      href: "/kundli?tab=milan",
      badge: "36 Guna",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      gradient: "from-rose-500/20 via-pink-500/20 to-wine-900/20",
      iconColor: "text-rose-300",
    },
    {
      id: "consult",
      title: "Consult Ajay Ji",
      subtitle: "1-on-1 Call",
      icon: PhoneCall,
      action: () => onOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)"),
      badge: "Popular",
      badgeColor: "bg-gold-400/25 text-gold-200 border-gold-400/40",
      gradient: "from-gold-400/25 via-amber-500/20 to-wine-900/30",
      iconColor: "text-gold-300",
    },
    {
      id: "yantras",
      title: "Sacred Yantras",
      subtitle: "Energized",
      icon: Flame,
      href: "#sacred-yantras",
      badge: "Pran Pratishtha",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      gradient: "from-amber-600/20 via-gold-500/15 to-wine-900/20",
      iconColor: "text-amber-400",
    },
    {
      id: "horoscope",
      title: "Daily Rashifal",
      subtitle: "12 Signs",
      icon: Calendar,
      href: "/kundli?tab=horoscope",
      badge: "Today",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      gradient: "from-indigo-500/20 via-purple-500/15 to-wine-900/20",
      iconColor: "text-indigo-300",
    },
    {
      id: "gallery",
      title: "VIP Conclaves",
      subtitle: "Recognitions",
      icon: Award,
      href: "#gallery",
      badge: "National",
      badgeColor: "bg-amber-400/20 text-gold-300 border-gold-400/30",
      gradient: "from-gold-500/20 via-amber-600/15 to-wine-900/20",
      iconColor: "text-gold-300",
    },
    {
      id: "whatsapp",
      title: "Direct WhatsApp",
      subtitle: "Instant Chat",
      icon: MessageCircle,
      externalHref: SITE_CONFIG.whatsappLink,
      badge: "Online",
      badgeColor: "bg-emerald-500/25 text-emerald-300 border-emerald-500/40",
      gradient: "from-emerald-500/20 via-teal-500/15 to-wine-900/20",
      iconColor: "text-emerald-400",
    },
    {
      id: "faq",
      title: "Pricing & FAQs",
      subtitle: "Clear Answers",
      icon: HelpCircle,
      href: "#faq",
      badge: "Help",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      gradient: "from-blue-500/20 via-cyan-500/15 to-wine-900/20",
      iconColor: "text-cyan-300",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-gradient-to-b from-celestial-950 via-celestial-900/90 to-celestial-950 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
        {/* Hub Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
            </span>
            <h2 className="font-serif text-sm sm:text-base font-bold text-gold-100 tracking-wide">
              Quick Astro Hub <span className="text-gold-400/60 font-sans text-xs font-normal">| Explore Services</span>
            </h2>
          </div>

          <Link
            href="/kundli"
            className="text-[11px] sm:text-xs text-gold-300 hover:text-gold-100 flex items-center gap-0.5 font-semibold transition-colors"
          >
            <span>All Tools</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4x2 App Grid on Mobile, 8-col strip on larger screens */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-4">
          {quickItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex flex-col items-center text-center p-2 sm:p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-gold-500/15 hover:border-gold-400/40 transition-all group relative overflow-hidden shadow-sm hover:shadow-gold-500/10">
                {/* Badge */}
                {item.badge && (
                  <span
                    className={`absolute top-1 right-1 sm:top-1.5 sm:right-1.5 px-1.5 py-0.2 rounded-full text-[8px] sm:text-[9px] font-bold border ${item.badgeColor} uppercase tracking-tighter`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Circular App Icon with Glow */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-gold-400/30 flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform shadow-md`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                </div>

                {/* Title */}
                <span className="font-serif text-[11px] sm:text-xs font-bold text-gold-100 group-hover:text-gold-300 transition-colors line-clamp-1 leading-tight">
                  {item.title}
                </span>

                {/* Subtitle */}
                <span className="text-[9px] sm:text-[10px] text-gold-300/60 line-clamp-1 mt-0.5 hidden xs:block">
                  {item.subtitle}
                </span>
              </div>
            );

            if (item.action) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  className="w-full text-left"
                >
                  {content}
                </button>
              );
            }

            if (item.externalHref) {
              return (
                <a
                  key={item.id}
                  href={item.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.id} href={item.href || "/"} className="w-full">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
