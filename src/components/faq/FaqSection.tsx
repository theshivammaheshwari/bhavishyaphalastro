"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative bg-celestial-950/80 border-t border-gold-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-gold-100">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-sm text-gold-200/70 font-light">
            Everything you need to know about our astrological consultations, accuracy, and remedies.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            // On mobile, hide items beyond index 2 unless showAllFaqs is true
            const isHiddenOnMobile = !showAllFaqs && idx > 2;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl overflow-hidden bg-white/5 border border-gold-500/20 transition-colors",
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-gold-100 hover:text-gold-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-gold-400 transition-transform duration-300",
                      isOpen && "rotate-180 bg-gold-400 text-celestial-950"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-gold-200/80 leading-relaxed font-light border-t border-gold-500/10 pt-3.5 sm:pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobile View All FAQs toggle */}
        <div className="sm:hidden mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowAllFaqs(!showAllFaqs)}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-gold-500/20 text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>{showAllFaqs ? "Show Fewer FAQs" : `View All FAQs (${FAQS.length})`}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
