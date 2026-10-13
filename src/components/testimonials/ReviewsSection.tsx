"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-celestial-950 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-100 leading-tight">
            What Clients Appreciate Most
          </h2>

          <p className="text-sm sm:text-base text-gold-200/70 font-light leading-relaxed">
            Real stories from individuals, families, and business owners who sought clarity during life-defining choices.
          </p>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex sm:hidden items-center justify-between text-[11px] text-gold-400/80 px-1 mt-6 -mb-4">
          <span>Client Stories</span>
          <span>Swipe reviews →</span>
        </div>

        <div className="flex sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-14 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[84vw] max-w-[340px] sm:w-auto flex-shrink-0 snap-center p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 shadow-xl backdrop-blur-xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-400/25 group-hover:text-gold-400/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-gold-100/90 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wine-700 to-gold-600 text-gold-100 font-bold text-xs flex items-center justify-center flex-shrink-0 border border-gold-400/40">
                  {t.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <strong className="text-xs sm:text-sm font-bold text-gold-200">
                      {t.name}
                    </strong>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-gold-400/80 block">
                    {t.role} • {t.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
