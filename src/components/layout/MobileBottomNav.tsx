"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, PhoneCall, ShoppingBag, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function MobileBottomNav({
  onOpenBooking,
}: {
  onOpenBooking?: (serviceName?: string) => void;
}) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    {
      id: "home",
      label: t.navHome,
      icon: Home,
      href: "/",
      isActive: pathname === "/",
    },
    {
      id: "talk",
      label: t.navTalk.split(" ")[0] || "Talk",
      icon: PhoneCall,
      href: "/talk-to-astrologer",
      isActive: pathname === "/talk-to-astrologer",
    },
    {
      id: "kundli",
      label: t.navKundli,
      icon: Sparkles,
      href: "/kundli",
      isSpecial: true,
      isActive: pathname ? pathname.startsWith("/kundli") : false,
    },
    {
      id: "yantras",
      label: t.navYantras.split(" ")[0] || "Yantras",
      icon: ShoppingBag,
      href: "/yantras",
      isActive: pathname === "/yantras",
    },
    {
      id: "chat",
      label: t.navChat.split(" ")[0] || "Chat",
      icon: MessageCircle,
      href: "/chat-with-astrologer",
      isActive: pathname === "/chat-with-astrologer",
      badge: "Live",
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/98 backdrop-blur-md border-t border-stone-200 px-2 py-1 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.4rem+env(safe-area-inset-bottom))]"
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
                <div className="w-13 h-13 p-3 rounded-full bg-astrotalk-yellow text-stone-950 shadow-md border-2 border-white flex items-center justify-center transform group-active:scale-95 transition-transform animate-pulse">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-bold text-amber-800 mt-0.5 tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          }

          const buttonContent = (
            <div
              className={cn(
                "flex flex-col items-center py-1 px-2 rounded-xl transition-all relative",
                item.isActive
                  ? "text-amber-700 font-bold"
                  : "text-stone-600 hover:text-stone-900"
              )}
            >
              {/* Badge if any */}
              {item.badge && (
                <span className="absolute -top-1 right-0.5 px-1 py-0.2 rounded-full bg-emerald-500 text-[8px] font-extrabold text-white">
                  {item.badge}
                </span>
              )}

              <Icon
                className={cn(
                  "w-5 h-5 mb-0.5 transition-transform",
                  item.isActive ? "scale-110 text-amber-600" : ""
                )}
              />
              <span className="text-[10px] leading-tight line-clamp-1">{item.label}</span>
              {item.isActive && (
                <span className="w-1 h-1 rounded-full bg-amber-600 mt-0.5" />
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
