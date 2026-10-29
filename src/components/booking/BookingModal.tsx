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
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { language, t } = useLanguage();

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleResetAndClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: `DOB: ${formData.dob}, Time: ${formData.birthTime}, Place: ${formData.birthPlace}, Mode: ${formData.consultationMode}, Date: ${formData.preferredDate}. Questions: ${formData.questions}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F1E135", "#F59E0B", "#18181B", "#10B981"],
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
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleResetAndClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.98 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className={`relative w-full bg-white border border-stone-200 shadow-2xl transition-all duration-300 flex flex-col font-sans ${
            isFullscreen
              ? "fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none z-50 overflow-y-auto"
              : "rounded-t-[2rem] sm:rounded-3xl max-w-2xl max-h-[92vh] overflow-y-auto"
          }`}
        >
          {/* Mobile Bottom Sheet Pull Handle */}
          <div className="w-12 h-1.5 rounded-full bg-stone-300 mx-auto my-2.5 sm:hidden" />

          {/* Top Bar with Prominent Back Button & Fullscreen */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-stone-50 border-b border-stone-200">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "वापस जाएं (Back)" : "Back / Close"}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isFullscreen ? "Standard" : "Fullscreen"}</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-rose-100 text-stone-600 hover:text-rose-700 flex items-center justify-center transition-colors cursor-pointer"
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
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-700 font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.bookingBadge}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
                    {t.bookingTitle}
                  </h3>
                  <p className="text-xs text-stone-600 font-medium">
                    {t.bookingSub}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.fullNameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.phoneLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.serviceSelectLabel} <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:border-amber-500 focus:outline-none transition-colors cursor-pointer font-medium"
                      >
                        {ASTRO_CONSULTATION_PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={`${pkg.title} (${pkg.priceFormatted})`}>
                            {pkg.title} ({pkg.priceFormatted})
                          </option>
                        ))}
                        <option value="Vastu Consultancy">Vastu Consultancy</option>
                        <option value="Palmistry Reading">Palmistry (Hastrekha) Reading</option>
                      </select>
                    </div>
                  </div>

                  {/* Birth Details: Date, Time, Place */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                    <span className="text-[11px] font-bold text-stone-900 uppercase tracking-wider block">
                      Vedic Birth Details (For Chart Generation)
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-stone-700 font-medium mb-1">
                          {t.chatDobLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-700 font-medium mb-1">
                          {t.chatBirthTimeLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.birthTime}
                          onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-700 font-medium mb-1">
                          {t.chatBirthPlaceLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.birthPlace}
                          onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Mode & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        Consultation Mode
                      </label>
                      <select
                        value={formData.consultationMode}
                        onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
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
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.preferredDateLabel}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message / Key Concerns */}
                  <div>
                    <label className="block text-stone-800 font-bold mb-1">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.questions}
                      onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                      placeholder="Briefly state your main question or concerns (marriage, career, health, etc.)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting..." : t.submitAppointmentBtn}</span>
                    </button>

                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>WhatsApp Connect</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-950">
                  Booking Request Received!
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you, <strong className="text-stone-900">{formData.name}</strong>. Our team will verify your astrological details and contact you at <strong className="text-stone-900">{formData.phone}</strong> to confirm your appointment slot.
                </p>

                {/* Instant WhatsApp Redirection button */}
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Details on WhatsApp Directly</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowUpiQr(!showUpiQr)}
                    className="px-5 py-3 rounded-xl font-bold text-xs text-stone-800 border border-stone-300 hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-amber-700" />
                    <span>{showUpiQr ? "Hide Payment QR" : "View UPI Payment Details"}</span>
                  </button>
                </div>

                {/* UPI Payment Drawer */}
                {showUpiQr && (
                  <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-300 max-w-sm mx-auto text-center space-y-3">
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                      Direct UPI Payment
                    </span>
                    <div className="w-44 h-44 mx-auto rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md border border-stone-200">
                      <div className="w-full h-full border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-800 text-center p-2">
                        <QrCode className="w-16 h-16 text-stone-950 mb-1" />
                        <span className="text-[10px] font-bold">UPI: 9116055424@upi</span>
                        <span className="text-[9px] text-stone-500">Scan via GPay / PhonePe</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-700 font-medium">
                      UPI ID: <strong className="text-stone-950">9116055424@upi</strong> or PhonePe/GPay on <strong className="text-stone-950">+91 91160 55424</strong>. Share screenshot on WhatsApp.
                    </p>
                  </div>
                )}

                {/* Back Button on Confirmation Screen */}
                <div className="pt-3 flex justify-center">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-8 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors flex items-center gap-2 cursor-pointer"
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
