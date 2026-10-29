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
  const { t } = useLanguage();
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
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Contact &amp; Booking</span>
        </nav>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation Helpdesk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Bhavishyaphal Astrology</span>
          </h1>

          <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-sans">
            Schedule your personalized Vedic consultation, inquire about consecrated sacred yantras, or visit our central Jaipur office.
          </p>
        </div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24">
          {/* Left Column: Direct Contact & Timing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-celestial-900/60 border border-gold-500/20 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white">Direct Communication</h3>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="p-4 rounded-2xl bg-celestial-950/80 border border-gold-500/15 hover:border-astrotalk-yellow/40 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-astrotalk-yellow/15 text-astrotalk-yellow flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gold-300/60 uppercase font-bold tracking-wider">Phone Consultation Desk</div>
                    <div className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-astrotalk-yellow transition-colors">
                      {SITE_CONFIG.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400/80 uppercase font-bold tracking-wider">Instant WhatsApp Chat</div>
                    <div className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                      Chat Now (+91 91160 55424)
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="p-4 rounded-2xl bg-celestial-950/80 border border-gold-500/15 hover:border-astrotalk-yellow/40 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-astrotalk-yellow/15 text-astrotalk-yellow flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-gold-300/60 uppercase font-bold tracking-wider">Official Inquiries Email</div>
                    <div className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-astrotalk-yellow transition-colors truncate">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-celestial-950/80 border border-gold-500/15 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-astrotalk-yellow/15 text-astrotalk-yellow flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gold-300/60 uppercase font-bold tracking-wider">Headquarters &amp; Office</div>
                    <div className="text-xs sm:text-sm text-white font-medium">
                      Jaipur, Rajasthan, India
                    </div>
                    <div className="text-[11px] text-gold-300/70 mt-0.5">
                      Serving Global Clients Online (Audio / Video / WhatsApp)
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="pt-4 border-t border-gold-500/15">
                <div className="flex items-center gap-2 text-xs font-bold text-astrotalk-yellow mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Consultation Windows (IST)</span>
                </div>
                <div className="text-xs text-gold-200/80 space-y-1 font-sans">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-white">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-white">11:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency slots:</span>
                    <span className="font-semibold text-astrotalk-yellow">Available on request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant UPI Payment Box */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-celestial-900 via-celestial-950 to-wine-950 border border-gold-500/25 text-center">
              <QrCode className="w-8 h-8 text-astrotalk-yellow mx-auto mb-2" />
              <h4 className="font-serif text-base font-bold text-white">Direct Consultation Payment</h4>
              <p className="text-xs text-gold-300/80 mt-1 mb-4 font-sans">
                Accepting Google Pay, PhonePe, Paytm, BHIM &amp; NetBanking.
              </p>
              <div className="inline-block p-3 rounded-2xl bg-white text-celestial-950 font-mono text-xs font-bold">
                UPI ID: 9116055424@upi
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-celestial-900/60 border border-gold-500/20 shadow-xl">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                Schedule an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-gold-300/70 mb-6 font-sans">
                Fill in your details below and our coordinator will confirm your session time slot within 30 minutes.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h4 className="font-serif text-2xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-gold-200/80 mt-2 max-w-md mx-auto font-sans">
                    Thank you, <strong>{formData.name}</strong>. Astrologer Swati Pandey&apos;s team will reach out to you via WhatsApp / Phone to confirm your consultation schedule.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/30 text-xs font-bold text-astrotalk-yellow hover:bg-astrotalk-yellow hover:text-celestial-950 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gold-200 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gold-200 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@example.com"
                        className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Select Consultation Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white focus:outline-none focus:border-astrotalk-yellow"
                    >
                      {ASTRO_CONSULTATION_PACKAGES.map((s) => (
                        <option key={s.id} value={`${s.title} (${s.priceFormatted})`}>
                          {s.title} ({s.priceFormatted})
                        </option>
                      ))}
                      <option value="Vastu Consultancy">Vastu Consultancy</option>
                      <option value="Hastrekha (Palmistry)">Hastrekha (Palmistry)</option>
                      <option value="Consecrated Sacred Yantra Inquiry">Consecrated Sacred Yantra Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Birth Details or Questions (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include Date of Birth, Birth Time, Birth Place, and any specific question..."
                      className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-serif text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Confirm & Request Appointment"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
              Clarifications &amp; Details
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-astrotalk-yellow flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gold-200/80 leading-relaxed border-t border-gold-500/10 pt-3">
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
