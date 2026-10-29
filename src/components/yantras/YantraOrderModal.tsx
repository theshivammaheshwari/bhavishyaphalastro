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

export default function YantraOrderModal({
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
  const [showUpiQr, setShowUpiQr] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleResetAndClose();
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

  if (!isOpen || !yantra) return null;

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
          service: `Sacred Yantra Order: ${yantra.title} (₹${yantra.price.toLocaleString("en-IN")}/-)`,
          message: `Address: ${formData.address}, City: ${formData.city}, PIN: ${formData.pincode}, Gotra/Nakshatra: ${formData.gotra}, Mode: ${formData.paymentMode}. Notes: ${formData.notes}`,
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

  const getWhatsAppOrderUrl = () => {
    const text = `*New Sacred Yantra Order*%0A%0A*Yantra:* ${encodeURIComponent(yantra.title)}%0A*Price:* ₹${yantra.price}%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Address:* ${encodeURIComponent(formData.address)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*PIN:* ${encodeURIComponent(formData.pincode)}%0A*Gotra:* ${encodeURIComponent(formData.gotra)}%0A*Payment Mode:* ${encodeURIComponent(formData.paymentMode)}`;
    return `https://wa.me/919116055424?text=${text}`;
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsFullscreen(false);
    setShowUpiQr(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleResetAndClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className={`relative w-full bg-white border border-stone-200 shadow-2xl transition-all duration-300 flex flex-col font-sans ${
            isFullscreen
              ? "fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none z-50 overflow-y-auto"
              : "max-w-3xl max-h-[92vh] rounded-3xl overflow-y-auto"
          }`}
        >
          {/* Top Bar with Prominent Back Button & Fullscreen Toggle */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-stone-50 border-b border-stone-200">
            <button
              type="button"
              onClick={handleResetAndClose}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === "hi" ? "वापस जाएं (Back)" : "Back to Website"}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isFullscreen ? "Standard" : "Fullscreen"}</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-rose-100 text-stone-600 hover:text-rose-700 flex items-center justify-center transition-colors cursor-pointer"
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
                <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-300">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white p-2 border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Image
                      src={yantra.image}
                      alt={yantra.title}
                      width={110}
                      height={110}
                      className="object-contain w-full h-full"
                    />
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-astrotalk-yellow text-stone-950 font-bold text-[10px] shadow-xs">
                      Authentic
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{yantra.deity}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                      {yantra.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 font-medium">
                      {yantra.benefits}
                    </p>
                    <div className="pt-1 flex items-center justify-center sm:justify-start gap-3">
                      <span className="font-serif font-bold text-xl text-stone-950">
                        {formatCurrency(yantra.price)}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
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
                      <label className="block text-stone-800 font-bold mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{t.fullNameLabel}</span>
                        <span className="text-rose-500">*</span>
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
                      <label className="block text-stone-800 font-bold mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{t.phoneLabel}</span>
                        <span className="text-rose-500">*</span>
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

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-stone-800 font-bold mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.shippingAddressLabel}</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="House/Flat No., Street, Landmark, Area..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* City & PIN Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.cityStateLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Jaipur, Rajasthan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-800 font-bold mb-1">
                        {t.pincodeLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="e.g. 302001"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Gotra / Consecration Details */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <label className="block text-stone-800 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.gotraLabel}</span>
                    </label>
                    <input
                      type="text"
                      value={formData.gotra}
                      onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                      placeholder="e.g. Kashyap Gotra, Rohini Nakshatra"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:outline-none"
                    />
                    <p className="text-[11px] text-stone-500">
                      Vedic scholars perform specific Pran Pratishtha sanctification for this yantra in your name before dispatch.
                    </p>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isSubmitting ? "Processing..." : t.confirmOrderBtn}</span>
                    </button>

                    <a
                      href={getWhatsAppOrderUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>WhatsApp Order</span>
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
                  Order Successfully Placed!
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you, <strong className="text-stone-900">{formData.name}</strong>. Your consecrated order for <strong className="text-stone-900">{yantra.title}</strong> has been received. Our team will begin the 3-day Vedic Pran Pratishtha rituals.
                </p>

                {/* Instant WhatsApp Redirection button */}
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Order on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowUpiQr(!showUpiQr)}
                    className="px-5 py-3 rounded-xl font-bold text-xs text-stone-800 border border-stone-300 hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-amber-700" />
                    <span>{showUpiQr ? "Hide Payment QR" : "View UPI QR Details"}</span>
                  </button>
                </div>

                {/* UPI Payment Drawer */}
                {showUpiQr && (
                  <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-300 max-w-sm mx-auto text-center space-y-3">
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                      Direct UPI Payment (₹{yantra.price.toLocaleString("en-IN")}/-)
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
export { YantraOrderModal };
