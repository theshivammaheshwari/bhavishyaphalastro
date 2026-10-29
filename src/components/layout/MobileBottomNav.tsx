"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, PhoneCall, ShoppingBag, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { triggerBooking } from "@/lib/booking-trigger";

export function MobileBottomNav({
  onOpenBooking,
}: {
  onOpenBooking?: (serviceName?: string) => void;
}) {
  const pathname = usePathname();

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)");
    } else {
      triggerBooking("All Life Comprehensive Consultancy (₹5,100/-)");
    }
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      href: "/",
      isActive: pathname === "/",
    },
    {
      id: "talk",
      label: "Talk",
      icon: PhoneCall,
      href: "/talk-to-astrologer",
      isActive: pathname === "/talk-to-astrologer",
    },
    {
      id: "kundli",
      label: "Kundli",
      icon: Sparkles,
      href: "/kundli",
      isSpecial: true,
      isActive: pathname ? pathname.startsWith("/kundli") : false,
    },
    {
      id: "yantras",
      label: "Yantras",
      icon: ShoppingBag,
      href: "/yantras",
      isActive: pathname === "/yantras",
    },
    {
      id: "chat",
      label: "Chat",
      icon: MessageCircle,
      href: "/chat-with-astrologer",
      isActive: pathname === "/chat-with-astrologer",
      badge: "Live",
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-celestial-950/95 backdrop-blur-2xl border-t border-gold-500/25 px-2 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[calc(0.4rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          // Special Center Button (Free Kundli Hub)
          if (item.isSpecial) {
            return (
              <Link
                key={item.id}
                href="/kundli"
                className="relative -top-3 flex flex-col items-center group focus:outline-none"
              >
                <div className="w-13 h-13 p-3 rounded-full bg-gradient-to-tr from-astrotalk-yellow via-amber-400 to-amber-300 text-celestial-950 shadow-xl shadow-astrotalk-yellow/40 border-2 border-celestial-950 flex items-center justify-center transform group-active:scale-95 transition-transform animate-pulse">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-bold text-astrotalk-yellow mt-0.5 tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          }

          const buttonContent = (
            <div
              className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all relative ${
                item.isActive
                  ? "text-gold-300 font-bold"
                  : "text-gold-200/60 hover:text-gold-200"
              }`}
            >
              {/* Badge if any */}
              {item.badge && (
                <span className="absolute -top-1 right-1 px-1 py-0.2 rounded-full bg-emerald-500 text-[8px] font-extrabold text-celestial-950">
                  {item.badge}
                </span>
              )}

              <Icon
                className={`w-5 h-5 mb-0.5 transition-transform ${
                  item.isActive ? "scale-110 text-gold-300" : ""
                }`}
              />
              <span className="text-[10px] leading-tight">{item.label}</span>
              {item.isActive && (
                <span className="w-1 h-1 rounded-full bg-gold-400 mt-0.5" />
              )}
            </div>
          );

          return (
            <Link key={item.id} href={item.href} className="focus:outline-none">
              {buttonContent}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
