"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { GalleryItem } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";

export function ImageLightbox({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-gold-300 border border-gold-500/30 flex items-center justify-center transition-colors z-50"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-gold-300 border border-gold-500/30 hidden sm:flex items-center justify-center transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-gold-300 border border-gold-500/30 hidden sm:flex items-center justify-center transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
        >
          <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border border-gold-500/30 bg-celestial-950 shadow-2xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-4 text-center max-w-2xl px-4">
            {item.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-400/20 text-gold-300 text-[10px] font-bold uppercase tracking-wider border border-gold-500/30 mb-2">
                <Award className="w-3 h-3 text-gold-400" />
                {item.badge}
              </span>
            )}
            <h3 className="font-serif font-bold text-base sm:text-lg text-gold-100">
              {item.title}
            </h3>
            <p className="text-xs text-gold-300/80 mt-1">
              {item.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
