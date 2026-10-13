"use client";

import { useState, useEffect } from "react";
import {
  X,
  ArrowLeft,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  QrCode,
  CheckCircle,
  Sparkles,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { ASTRO_CONSULTATION_PACKAGES, SITE_CONFIG } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

export function BookingModal({
  isOpen,
  onClose,
  initialService = "All Life Comprehensive Consultancy (₹5,100/-)",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    dob: "",
    birthTime: "",
    birthPlace: "",
    preferredDate: "",
    consultationMode: "Video Call (WhatsApp / Google Meet)",
    questions: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showUpiQr, setShowUpiQr] = useState(false);

  const { language, t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#f4c866", "#ef6c14", "#6d0909", "#ffffff"],
        });
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = `*New Consultation Booking Request*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*DOB:* ${encodeURIComponent(formData.dob)}%0A*Time:* ${encodeURIComponent(formData.birthTime)}%0A*Place:* ${encodeURIComponent(formData.birthPlace)}%0A*Preferred Mode:* ${encodeURIComponent(formData.consultationMode)}%0A*Questions:* ${encodeURIComponent(formData.questions)}`;
    return `https://wa.me/919116055424?text=${text}`;
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsFullscreen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleResetAndClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full bg-celestial-950 border border-gold-500/30 shadow-2xl transition-all duration-300 flex flex-col ${
            isFullscreen
              ? "fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none z-50 overflow-y-auto"
              : "max-w-2xl max-h-[92vh] rounded-3xl overflow-y-auto"
          }`}
        >
          {/* Top Bar with Prominent Back Button & Fullscreen */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-celestial-900/95 backdrop-blur-md border-b border-gold-500/25">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 font-semibold text-xs transition-colors"
            >
              <span>{language === "hi" ? "← वापस जाएं (Back)" : "← Back / Close"}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gold-300 border border-gold-500/20 text-xs font-medium transition-colors"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isFullscreen ? "Standard" : "Fullscreen"}</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-rose-500/20 text-gold-300 hover:text-rose-300 border border-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex-1">
            {!submitted ? (
              <div>
                <div className="space-y-1 mb-6">
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold-400 font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.bookingBadge}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100">
                    {t.bookingTitle}
                  </h3>
                  <p className="text-xs text-gold-200/70">
                    {t.bookingSub}
                  </p>
                </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Phone / WhatsApp <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Consultation Service <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-900 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                    >
                      <option value="All Life Comprehensive Consultancy (₹5,100/-)">
                        1. All Life Comprehensive Reading (₹5,100/-)
                      </option>
                      <option value="Kundli Milan — Bride & Groom (₹2,100/-)">
                        2. Kundli Milan — Bride & Groom (₹2,100/-)
                      </option>
                      <option value="Marriage Time Prediction (₹1,500/-)">
                        3. Marriage Time & Soulmate Prediction (₹1,500/-)
                      </option>
                      <option value="Child Birth Time Prediction (₹3,100/-)">
                        4. Child Birth Time Prediction & Muhurat (₹3,100/-)
                      </option>
                      <option value="Education Consultancy (₹1,100/-)">
                        5. Education & Stream Selection (₹1,100/-)
                      </option>
                      <option value="Career & Business Guidance (₹2,499/-)">
                        6. Career & Business Direction (₹2,499/-)
                      </option>
                      <option value="Litigation & Legal Matters (₹2,499/-)">
                        7. Litigation & Legal Matters (₹2,499/-)
                      </option>
                      <option value="Gem Stone Recommendation (₹1,100/-)">
                        8. Certified Gem Stone Recommendation (₹1,100/-)
                      </option>
                      <option value="Vastu Consultancy">Vastu Consultancy</option>
                      <option value="Palmistry Reading">Palmistry (Hastrekha) Reading</option>
                      <option value="Sacred Yantra Order (₹3,999/-)">Sacred Yantra Order (₹3,999/-)</option>
                    </select>
                  </div>
                </div>

                {/* Birth Details: Date, Time, Place */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-gold-500/15 space-y-3">
                  <span className="text-[11px] font-bold text-gold-300 uppercase tracking-wider block">
                    Vedic Birth Details (For Chart Generation)
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-gold-300/90 font-medium mb-1">
                        Date of Birth <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-900 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gold-300/90 font-medium mb-1">
                        Birth Time <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.birthTime}
                        onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-900 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gold-300/90 font-medium mb-1">
                        Birth City / Place <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.birthPlace}
                        onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                        placeholder="e.g. Jaipur, Rajasthan"
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Mode & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={formData.consultationMode}
                      onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-900 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                    >
                      <option value="Video Call (WhatsApp / Google Meet)">
                        Video Call (WhatsApp / Google Meet)
                      </option>
                      <option value="Voice Call (Phone / WhatsApp)">
                        Voice Call (Phone / WhatsApp)
                      </option>
                      <option value="In-Person Office Session (Jaipur)">
                        In-Person Office Session (Jaipur)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-900 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Key Concerns */}
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Specific Questions / Life Situation
                  </label>
                  <textarea
                    rows={3}
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                    placeholder="Briefly state your main question or concerns (marriage, career, health, etc.)..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting..." : "Submit Consultation Request"}</span>
                  </button>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-400" />
                    <span>WhatsApp Connect</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-gold-300 bg-white/5 hover:bg-white/10 border border-gold-500/25 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === "hi" ? "वापस जाएं (Back)" : "Cancel & Go Back"}</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-gold-100">
                Booking Request Received!
              </h3>

              <p className="text-xs sm:text-sm text-gold-200/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our team will verify your astrological details and contact you at <strong className="text-gold-300">{formData.phone}</strong> to confirm your appointment slot.
              </p>

              {/* Instant WhatsApp Redirection button */}
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-celestial-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-celestial-950" />
                  <span>Send Details on WhatsApp Directly</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowUpiQr(!showUpiQr)}
                  className="px-5 py-3 rounded-xl font-semibold text-xs text-gold-200 border border-gold-500/30 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  <QrCode className="w-4 h-4 text-gold-400" />
                  <span>{showUpiQr ? "Hide Payment QR" : "View UPI Payment Details"}</span>
                </button>
              </div>

              {/* UPI Payment Drawer */}
              {showUpiQr && (
                <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-gold-500/20 max-w-sm mx-auto text-center space-y-3">
                  <span className="text-xs font-bold text-gold-300 uppercase tracking-wider block">
                    Direct UPI Payment
                  </span>
                  <div className="w-44 h-44 mx-auto rounded-xl bg-white p-2.5 flex items-center justify-center shadow-lg">
                    {/* Visual QR Code Display */}
                    <div className="w-full h-full border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-800 text-center p-2">
                      <QrCode className="w-16 h-16 text-celestial-950 mb-1" />
                      <span className="text-[10px] font-bold">UPI: 9116055424@upi</span>
                      <span className="text-[9px] text-gray-600">Scan & Pay via GPay / PhonePe</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gold-300/80">
                    UPI ID: <strong className="text-gold-200">9116055424@upi</strong> or PhonePe/GPay on <strong className="text-gold-200">+91 91160 55424</strong>. Share screenshot on WhatsApp.
                  </p>
                </div>
              )}

              {/* Prominent Back Button on Confirmation Screen */}
              <div className="pt-3 flex justify-center">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-gold-200 bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/30 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === "hi" ? "← मुख्य वेबसाइट पर वापस जाएं" : "← Back to Website"}</span>
                </button>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
