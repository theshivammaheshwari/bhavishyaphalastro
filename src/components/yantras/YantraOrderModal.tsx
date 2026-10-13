"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ArrowLeft,
  ShoppingBag,
  Maximize2,
  Minimize2,
  MessageCircle,
  QrCode,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Truck,
  MapPin,
  User,
  Phone,
} from "lucide-react";
import { YantraItem } from "@/lib/site-data";
import { formatCurrency } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

export function YantraOrderModal({
  isOpen,
  onClose,
  yantra,
}: {
  isOpen: boolean;
  onClose: () => void;
  yantra: YantraItem | null;
}) {
  const { language, t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    gotra: "",
    paymentMode: "UPI QR (Instant)",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showUpiQr, setShowUpiQr] = useState(true);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !yantra) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: `Consecrated Yantra Order: ${yantra.title} (₹${yantra.price}/-)`,
          questions: `Address: ${formData.address}, Pincode: ${formData.pincode}, City: ${formData.city}, Gotra: ${formData.gotra}, Payment: ${formData.paymentMode}. Notes: ${formData.notes}`,
        }),
      });

      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#f4c866", "#ef6c14", "#ffffff"],
      });
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppOrderUrl = () => {
    const text = `*New Sacred Yantra Order*%0A%0A*Item:* ${encodeURIComponent(yantra.title)}%0A*Price:* ₹${yantra.price}/-%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Address:* ${encodeURIComponent(formData.address)}%0A*City:* ${encodeURIComponent(formData.city)} - ${encodeURIComponent(formData.pincode)}%0A*Gotra/Nakshatra:* ${encodeURIComponent(formData.gotra)}%0A*Payment Preference:* ${encodeURIComponent(formData.paymentMode)}`;
    return `https://wa.me/919116055424?text=${text}`;
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsFullscreen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleResetAndClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className={`relative w-full bg-celestial-950 border border-gold-500/40 shadow-2xl transition-all duration-300 flex flex-col ${
            isFullscreen
              ? "fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none z-50 overflow-y-auto"
              : "max-w-4xl max-h-[92vh] rounded-3xl overflow-y-auto"
          }`}
        >
          {/* Top Bar with Prominent Back Button, Fullscreen Toggle, and Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-celestial-900/95 backdrop-blur-md border-b border-gold-500/25">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 font-semibold text-xs sm:text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>{language === "hi" ? "← वापस जाएं (Back)" : "← Back to Website"}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gold-300 border border-gold-500/20 text-xs font-medium transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "सामान्य दृश्य" : "Standard View"}</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "फुल स्क्रीन" : "Full Screen"}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-500/20 text-gold-300 hover:text-rose-300 border border-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-8 flex-1">
            {!submitted ? (
              <div className="space-y-6">
                {/* Header Banner */}
                <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-wine-950/80 via-celestial-900/80 to-wine-950/80 border border-gold-500/25">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white/10 p-2 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={yantra.image}
                      alt={yantra.title}
                      width={110}
                      height={110}
                      className="object-contain w-full h-full"
                    />
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gold-400 text-celestial-950 font-extrabold text-[10px]">
                      Authentic
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gold-300 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{yantra.deity}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-100">
                      {yantra.title}
                    </h3>
                    <p className="text-xs text-gold-200/75 leading-relaxed line-clamp-2">
                      {yantra.benefits}
                    </p>
                    <div className="pt-1 flex items-center justify-center sm:justify-start gap-3">
                      <span className="font-serif font-extrabold text-lg text-gold-300">
                        {formatCurrency(yantra.price)}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {language === "hi" ? "प्राण-प्रतिष्ठा पूजा शामिल" : "Pran Pratishtha Included"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Order Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-300 font-semibold mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{t.fullName}</span>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === "hi" ? "उदा. राहुल शर्मा" : "e.g. Rahul Sharma"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gold-300 font-semibold mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{t.phoneLabel}</span>
                        <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <label className="block text-gold-300 font-semibold mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.shippingAddress}</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder={
                        language === "hi"
                          ? "मकान नं., फ्लैट/बिल्डिंग का नाम, गली, लैंडमार्क..."
                          : "House No, Street name, Colony/Area, Landmark..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors resize-none text-xs sm:text-sm"
                    />
                  </div>

                  {/* City, State & PIN Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-300 font-semibold mb-1">
                        {t.cityState} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={language === "hi" ? "उदा. जयपुर, राजस्थान" : "e.g. Jaipur, Rajasthan"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gold-300 font-semibold mb-1">
                        {t.pincode} <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="302001"
                        maxLength={6}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Gotra / Consecration Details */}
                  <div className="p-3.5 rounded-2xl bg-gold-500/10 border border-gold-500/20 space-y-1">
                    <label className="block text-gold-300 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{t.gotraLabel}</span>
                    </label>
                    <input
                      type="text"
                      value={formData.gotra}
                      onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                      placeholder={
                        language === "hi"
                          ? "उदा. कश्यप / भारद्वाज / पराशर (यदि ज्ञात न हो तो खाली छोड़ें)"
                          : "e.g. Kashyap, Bhardwaj, Rohini Nakshatra (leave blank if unknown)"
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors text-xs"
                    />
                    <p className="text-[11px] text-gold-300/70 pt-0.5">
                      {language === "hi"
                        ? "आपके दिए गए नाम और गोत्र के अनुसार आचार्य जी वैदिक मंत्रों से संकल्प एवं प्राण-प्रतिष्ठा करेंगे।"
                        : "Vedic scholars perform specific Pran Pratishtha sanctification for this yantra in your name before dispatch."}
                    </p>
                  </div>

                  {/* Payment Preference */}
                  <div>
                    <label className="block text-gold-300 font-semibold mb-1.5">
                      {t.paymentMethod}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-colors ${
                          formData.paymentMode === "UPI QR (Instant)"
                            ? "bg-gold-500/15 border-gold-400 text-gold-200"
                            : "bg-white/5 border-gold-500/20 text-gold-300/80 hover:bg-white/10"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMode"
                          value="UPI QR (Instant)"
                          checked={formData.paymentMode === "UPI QR (Instant)"}
                          onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                          className="accent-amber-400"
                        />
                        <QrCode className="w-4 h-4 text-gold-400" />
                        <span className="font-medium text-xs">
                          {language === "hi" ? "इंस्टेंट यूपीआई क्यूआर (GPay/PhonePe)" : "Instant UPI QR (Recommended)"}
                        </span>
                      </label>

                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-colors ${
                          formData.paymentMode === "WhatsApp Confirmation"
                            ? "bg-gold-500/15 border-gold-400 text-gold-200"
                            : "bg-white/5 border-gold-500/20 text-gold-300/80 hover:bg-white/10"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMode"
                          value="WhatsApp Confirmation"
                          checked={formData.paymentMode === "WhatsApp Confirmation"}
                          onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                          className="accent-amber-400"
                        />
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span className="font-medium text-xs">
                          {language === "hi" ? "व्हाट्सएप पर ऑर्डर कन्फर्म करें" : "Pay via WhatsApp / COD Assistance"}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit & Secondary Action */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>
                        {isSubmitting
                          ? language === "hi"
                            ? "ऑर्डर दर्ज हो रहा है..."
                            : "Placing Order..."
                          : `${t.confirmOrderBtn} (${formatCurrency(yantra.price)})`}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-gold-300 bg-white/5 hover:bg-white/10 border border-gold-500/25 transition-colors flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{language === "hi" ? "रद्द करें / वापस जाएं" : "Cancel & Go Back"}</span>
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gold-300/70 border-t border-gold-500/15">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-gold-400" />
                      <span>{language === "hi" ? "अखिल भारतीय सुरक्षित स्पीड पोस्ट" : "All-India Insured Express Delivery"}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{language === "hi" ? "100% शुद्ध तांबा / अष्टधातु" : "100% Pure Sanctified Metal"}</span>
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success / Receipt Screen with UPI QR */
              <div className="text-center py-6 sm:py-8 space-y-5 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100">
                    {language === "hi" ? "यंत्र ऑर्डर सफलतापूर्वक दर्ज हुआ!" : "Yantra Order Placed Successfully!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-200/80 leading-relaxed">
                    {language === "hi"
                      ? `धन्यवाद ${formData.name}। आपका ${yantra.title} का ऑर्डर हमारे पास सुरक्षित रूप से प्राप्त हो गया है।`
                      : `Thank you, ${formData.name}. Your order for ${yantra.title} has been logged.`}
                  </p>
                </div>

                {/* Direct WhatsApp Instant Connect */}
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                  <p className="text-xs text-emerald-200">
                    {language === "hi"
                      ? "व्हाट्सएप पर ऑर्डर की पावती और ट्रैकिंग विवरण तुरंत प्राप्त करने के लिए नीचे क्लिक करें:"
                      : "Click below to send your order receipt directly to Astrologer Swati Pandey on WhatsApp:"}
                  </p>
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-celestial-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-celestial-950" />
                    <span>{language === "hi" ? "व्हाट्सएप पर विवरण भेजें" : "Send Order on WhatsApp Directly"}</span>
                  </a>
                </div>

                {/* UPI QR Display */}
                {showUpiQr && (
                  <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/25 space-y-3">
                    <span className="text-xs font-bold text-gold-300 uppercase tracking-wider block">
                      {language === "hi" ? "त्वरित यूपीआई भुगतान (₹3,999/-)" : "Instant UPI Payment (₹3,999/-)"}
                    </span>
                    <div className="w-48 h-48 mx-auto rounded-xl bg-white p-3 flex flex-col items-center justify-center shadow-2xl">
                      <QrCode className="w-20 h-20 text-celestial-950 mb-1" />
                      <span className="text-[11px] font-bold text-gray-900">UPI: 9116055424@upi</span>
                      <span className="text-[9px] text-gray-600">Scan via GPay / PhonePe / Paytm</span>
                    </div>
                    <p className="text-[11px] text-gold-300/80">
                      UPI ID: <strong className="text-gold-200">9116055424@upi</strong> (Astrologer Swati Pandey).
                    </p>
                  </div>
                )}

                {/* Prominent Back to Website Button */}
                <div className="pt-2 flex justify-center">
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
