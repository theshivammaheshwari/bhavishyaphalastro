"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroCosmicWheel() {
  const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const nakshatraNames = [
    "Ashwini", "Rohini", "Pushya", "Magha", "Chitra", "Swati",
    "Anuradha", "Mula", "Shravana", "Dhanishta", "Revati", "Uttara"
  ];

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] flex items-center justify-center select-none pointer-events-none">
      {/* Outer Glowing Nebular Halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-wine-600/20 via-gold-500/15 to-celestial-700/25 blur-3xl animate-pulse-slow" />

      {/* Outermost Ring: Constellations & Degrees */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 sm:inset-4 rounded-full border border-gold-500/25 border-dashed"
      >
        {zodiacSymbols.map((sym, idx) => {
          const angle = (idx * 30 * Math.PI) / 180;
          const radius = 46; // percentage
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <span
              key={idx}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-gold-300/80 font-serif text-sm sm:text-base font-bold drop-shadow-[0_0_8px_rgba(244,200,102,0.6)]"
            >
              {sym}
            </span>
          );
        })}
      </motion.div>

      {/* Middle Ring: Nakshatras (Reverse Spin) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 sm:inset-16 rounded-full border border-gold-400/30"
      >
        {nakshatraNames.map((nak, idx) => {
          const angle = (idx * 30 * Math.PI) / 180;
          const radius = 45; // percentage
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <span
              key={idx}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-[9px] sm:text-[10px] text-gold-200/60 font-medium tracking-widest uppercase hidden sm:inline-block"
            >
              {nak}
            </span>
          );
        })}
      </motion.div>

      {/* Inner Geometry: Vedic Square / North-Indian Diamond Chart Lines */}
      <div className="absolute inset-20 sm:inset-28 rounded-full border border-gold-500/20 bg-celestial-950/60 backdrop-blur-sm flex items-center justify-center">
        {/* Diamond Chart Outline */}
        <div className="w-3/4 h-3/4 border border-gold-400/40 rotate-45 transform" />
        <div className="absolute w-3/4 h-3/4 border border-wine-500/30" />
      </div>

      {/* Center Sacred Emblem Medallion */}
      <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-gold-400 via-amber-300 to-wine-600 shadow-2xl shadow-gold-500/40 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-celestial-950 p-2 overflow-hidden flex items-center justify-center relative">
          <Image
            src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
            alt="Bhavishyaphal Medallion"
            width={110}
            height={110}
            className="object-contain w-full h-full rounded-full filter drop-shadow-[0_0_12px_rgba(244,200,102,0.4)]"
          />

          {/* Golden Om / Sun Overlay */}
          <div className="absolute inset-0 bg-gold-400/10 pointer-events-none rounded-full" />
        </div>
      </div>
    </div>
  );
}
