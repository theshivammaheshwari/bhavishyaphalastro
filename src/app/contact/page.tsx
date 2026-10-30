"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  QrCode,
  ChevronDown,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, ASTRO_CONSULTATION_PACKAGES, FAQS } from "@/lib/site-data";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "All Life Comprehensive Consultancy (₹5,100/-)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navContact}</span>
        </nav>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct Line &amp; Support</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight mb-4">
            {t.contactHeroTitle}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-medium">
            {t.contactHeroSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          {/* Left Column: Direct Info & Quick Cards (Light Theme) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-stone-950">
                  {t.directLineTitle}
                </h3>
                <p className="text-xs text-stone-600 font-medium mb-2">
                  1-on-1 Voice &amp; Video Consultations
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-block font-serif font-bold text-lg text-amber-800 hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-stone-950">
                  Instant WhatsApp Desk
                </h3>
                <p className="text-xs text-stone-600 font-medium mb-2">
                  Fast response under 2 minutes for queries &amp; appointments
                </p>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.whatsappNow}</span>
                </a>
              </div>
            </div>

            {/* Location & Office */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-base text-stone-950">
                  {t.officeLocationTitle}
                </h3>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {SITE_CONFIG.location}
                </p>
                <p className="text-[11px] text-amber-800 font-bold mt-2">
                  Serving Global Clients Online (Voice &amp; Video)
                </p>
              </div>
            </div>

            {/* Instant UPI Payment Box */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-300 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-stone-950 font-serif font-bold text-base">
                <QrCode className="w-5 h-5 text-amber-700" />
                <span>{t.instantUpiTitle}</span>
              </div>
              <p className="text-xs text-stone-700 font-medium leading-relaxed mb-3">
                Pay directly using Google Pay, PhonePe, Paytm or any UPI app:
              </p>
              <div className="p-3 rounded-xl bg-white border border-amber-300 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-stone-900">9116055424@upi</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form (Light Theme) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 shadow-md">
              <div className="mb-6">
                <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                  Direct Enquiry
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-950 mt-1">
                  {t.appointmentFormTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                  Share your preferred consultation or requirement below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-stone-950">
                    Request Received Successfully!
                  </h3>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto font-medium leading-relaxed">
                    Astrologer Ajay Kumar Agarwal&apos;s team will contact you on WhatsApp/Phone shortly to confirm your consultation timing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      {t.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "hi" ? "उदा. विकास शर्मा" : "e.g. Vikas Sharma"}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      {t.serviceSelectLabel}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-xs cursor-pointer"
                    >
                      {ASTRO_CONSULTATION_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={`${pkg.title} (${pkg.priceFormatted})`}>
                          {pkg.title} ({pkg.priceFormatted})
                        </option>
                      ))}
                      <option value="Residential / Corporate Vastu Consultancy">
                        Residential / Corporate Vastu Consultancy
                      </option>
                      <option value="Hastrekha (Palmistry) Reading">
                        Hastrekha (Palmistry) Reading
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === "hi" ? "जन्म विवरण (तिथि, समय, स्थान) या अपनी समस्या यहां लिखें..." : "Enter your Date of Birth, Birth Time, Birth Place, or main question..."}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-stone-950" />
                    <span>{isSubmitting ? "Submitting..." : t.submitAppointmentBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Collapsible FAQs (Light Theme) */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
              {t.faqBadge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-700 transition-transform ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed font-medium border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
