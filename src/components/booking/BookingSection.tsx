"use client";

import { useState } from "react";
import { Phone, Mail, Instagram, MapPin, MessageCircle, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, ASTRO_CONSULTATION_PACKAGES } from "@/lib/site-data";
import confetti from "canvas-confetti";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "All Life Comprehensive Consultancy (₹5,100/-)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-24 relative bg-celestial-950 border-t border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-100 mt-2">
                Request Your Personal Consultation
              </h2>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-2 leading-relaxed">
                Reach out directly with your questions. We will schedule a dedicated time slot for Astrologer Ajay Kumar Agarwal to study your horoscope and guide you personally.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="p-4 rounded-2xl bg-white/5 border border-gold-500/20 hover:border-gold-400/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase font-medium">Direct Call / WhatsApp</span>
                  <strong className="text-sm font-bold text-gold-200 group-hover:text-gold-300 transition-colors">
                    {SITE_CONFIG.phone}
                  </strong>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-4 rounded-2xl bg-white/5 border border-gold-500/20 hover:border-gold-400/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase font-medium">Official Email</span>
                  <strong className="text-sm font-bold text-gold-200 group-hover:text-gold-300 transition-colors">
                    {SITE_CONFIG.email}
                  </strong>
                </div>
              </a>

              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-gold-500/20 hover:border-gold-400/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase font-medium">Instagram Profile</span>
                  <strong className="text-sm font-bold text-gold-200 group-hover:text-gold-300 transition-colors">
                    {SITE_CONFIG.instagramHandle}
                  </strong>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-400/80 block uppercase font-medium">Consultation Office</span>
                  <span className="text-xs text-gold-200/90 font-medium">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-celestial-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-celestial-950" />
                <span>Start Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-celestial-900/80 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gold-100">
                      Send Us Your Enquiry
                    </h3>
                    <p className="text-xs text-gold-200/70 mt-1">
                      Fill in your details and our team will get in touch with you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-300 font-semibold mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
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
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-300 font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gold-300 font-semibold mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="All Life Comprehensive Consultancy (₹5,100/-)">
                          All Life Comprehensive Reading (₹5,100/-)
                        </option>
                        <option value="Kundli Milan — Bride & Groom (₹2,100/-)">
                          Kundli Milan — Bride & Groom (₹2,100/-)
                        </option>
                        <option value="Marriage Time Prediction (₹1,500/-)">
                          Marriage Time Prediction (₹1,500/-)
                        </option>
                        <option value="Child Birth Time Prediction (₹3,100/-)">
                          Child Birth Time Prediction (₹3,100/-)
                        </option>
                        <option value="Education Consultancy (₹1,100/-)">
                          Education Consultancy (₹1,100/-)
                        </option>
                        <option value="Career & Business Guidance (₹2,499/-)">
                          Career & Business Guidance (₹2,499/-)
                        </option>
                        <option value="Litigation Consultancy (₹2,499/-)">
                          Litigation Consultancy (₹2,499/-)
                        </option>
                        <option value="Certified Gemstone Recommendation (₹1,100/-)">
                          Certified Gemstone Recommendation (₹1,100/-)
                        </option>
                        <option value="Sacred Yantra Order (₹3,999/-)">
                          Sacred Yantra Order (₹3,999/-)
                        </option>
                        <option value="Vastu Consultancy">Vastu Consultancy</option>
                        <option value="Palmistry (Hastrekha)">Palmistry (Hastrekha)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold-300 font-semibold mb-1">
                      Message / Main Questions <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your questions or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-gold-100">
                    Thank You! We Have Received Your Enquiry.
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-200/70 max-w-md mx-auto">
                    We will get back to you at <strong className="text-gold-300">{formData.phone}</strong> with consultation timing options.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-gold-300 border border-gold-500/30 hover:bg-white/5 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
