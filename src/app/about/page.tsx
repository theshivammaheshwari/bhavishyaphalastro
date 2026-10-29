"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Calendar,
  Globe2,
  BookOpen,
  ArrowRight,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { BookingModal } from "@/components/booking/BookingModal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("All Life Comprehensive Consultancy (₹5,100/-)");

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setBookingModalOpen(true);
  };

  const awards = [
    {
      title: "India's Most Trusted & Accurate Astrologer of the Year",
      presenter: "Ex Indian Cricketer & Coach Sh Nayan Mongia Ji",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg",
      desc: "National felicitation honoring exceptional accuracy in predictive Vedic calculations and life guidance.",
    },
    {
      title: "Vedic Excellence Award",
      presenter: "Gurudev GD Vashist Ji (Celebrated Lal Kitab Astrologer)",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM-1_114.jpeg",
      desc: "Conferred for authentic preservation of ancient Lal Kitab remedial systems and spiritual counselling.",
    },
    {
      title: "National Jyotish Shiromani Samman",
      presenter: "Sh Arun Bansal Ji (Chairman, All India Federation of Astrologers Societies)",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM_113.jpeg",
      desc: "Recognizing outstanding contribution to mathematical horoscopy and planetary transit research.",
    },
    {
      title: "Prestigious Astrological Conclave Felicitation",
      presenter: "Sh Satish Sharma Ji & Smt Y Rakhi",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-1_118.jpeg",
      desc: "Honored at the Grand National Astrology Conference for exceptional client satisfaction and ethical guidance.",
    },
  ];

  const dignitaries = [
    { name: "Sh Prem Bairwa Ji", role: "Deputy Chief Minister, Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.05-PM-1_37.jpeg" },
    { name: "Sh Ashok Gehlot Ji", role: "Former Chief Minister, Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.04-PM-3_41.jpeg" },
    { name: "Sh Sanjay Vinayak Joshi Ji", role: "Senior RSS Leader & Thinker", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.03-PM_44.jpeg" },
    { name: "Sh Madan Rathore Ji", role: "State President, BJP Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-1_47.jpeg" },
    { name: "Sh Neeraj Dangi Ji", role: "Rajyasabha MP", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-2_46.jpeg" },
    { name: "Nikita Porwal", role: "Femina Miss India 2024", image: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM-1_53.jpeg" },
    { name: "Paras Mehta", role: "Bollywood Director & Producer", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.00-PM-2_50.jpeg" },
    { name: "Anoop Bartaria Ji", role: "Owner, World Trade Park (WTP) Mall", image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-3_55.jpeg" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">About Astrologer</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-astrotalk-yellow/30 shadow-2xl shadow-black/80 group">
              <Image
                src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                alt="Astrologer Swati Pandey - India's Most Trusted & Accurate Astrologer"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-celestial-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-celestial-950/90 border border-astrotalk-yellow/25 backdrop-blur-md">
                <div className="flex items-center gap-2 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-astrotalk-yellow" />
                  <span>National Awardee</span>
                </div>
                <h3 className="text-white font-serif font-bold text-base sm:text-lg">
                  Astrologer Swati Pandey
                </h3>
                <p className="text-gold-200/80 text-xs mt-0.5">
                  India&apos;s Most Trusted & Accurate Astrologer of the Year
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-astrotalk-yellow to-amber-400 text-celestial-950 shadow-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 fill-celestial-950 stroke-none" />
              <div>
                <div className="text-xs font-extrabold uppercase leading-none">12+ Years</div>
                <div className="text-[10px] font-semibold opacity-85 leading-none mt-0.5">Vedic Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder & Lead Astrologer</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Astrologer <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Swati Pandey</span>
            </h1>

            <p className="text-astrotalk-yellow text-base sm:text-lg font-medium mb-6">
              Vedic Wisdom • Modern Clarity • Unmatched Precision
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gold-200/85 leading-relaxed font-sans">
              <p>
                Astrologer Swati Pandey stands among India&apos;s foremost authorities in authentic Vedic Jyotish, KP Horary Astrology, Vastu Shastra, and Palmistry. Conferred with the prestigious national title of <strong>&ldquo;India&apos;s Most Trusted &amp; Accurate Astrologer of the Year&rdquo;</strong> by legendary former Indian cricketer and coach <strong>Sh Nayan Mongia Ji</strong>, she brings exceptional mathematical rigor and empathetic spiritual insight to every birth chart.
              </p>
              <p>
                Her practice is rooted in classical Parashari principles, enriched by decades of astrological study under revered masters including Lal Kitab legend <strong>Gurudev GD Vashist Ji</strong> and All India Federation of Astrologers Societies Chairman <strong>Sh Arun Bansal Ji</strong>. Rather than instilling fear, her guidance focuses on practical, authentic planetary remedies that unlock an individual&apos;s innate cosmic potential.
              </p>
              <p>
                From Cabinet Ministers, Members of Parliament, and senior government dignitaries to Miss India laureates, business tycoons, and families across the globe, clients trust her for honest, unfiltered astrological analysis and transformative life clarity.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 pt-8 border-t border-gold-500/15">
              <div className="p-3.5 rounded-2xl bg-celestial-900/60 border border-gold-500/20 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">12,500+</div>
                <div className="text-[11px] text-gold-300/70 mt-0.5">Readings Given</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-celestial-900/60 border border-gold-500/20 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">4.99 ★</div>
                <div className="text-[11px] text-gold-300/70 mt-0.5">Client Rating</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-celestial-900/60 border border-gold-500/20 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">28+</div>
                <div className="text-[11px] text-gold-300/70 mt-0.5">Countries Served</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-celestial-900/60 border border-gold-500/20 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-astrotalk-yellow">100%</div>
                <div className="text-[11px] text-gold-300/70 mt-0.5">Confidentiality</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => handleOpenBooking("All Life Comprehensive Consultancy (₹5,100/-)")}
                className="px-6 py-3.5 rounded-xl font-serif text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book 1-on-1 Consultation</span>
              </button>

              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* National Awards & Honors */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-widest">
              Prestigious Felicitations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              National Recognitions &amp; Awards
            </h2>
            <p className="text-xs sm:text-sm text-gold-300/70 mt-2">
              Recognized at prestigious national conclaves by sports icons, spiritual masters, and senior astrological federations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="rounded-3xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/40 transition-all group flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-celestial-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-astrotalk-yellow/15 text-astrotalk-yellow text-[10px] font-bold uppercase tracking-wide w-fit mb-2">
                    <Award className="w-3 h-3" />
                    <span>Conferred Honor</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-astrotalk-yellow transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-300 mt-1">
                    Presented by: {award.presenter}
                  </p>
                  <p className="text-xs text-gold-200/70 mt-2 font-sans">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Distinguished VIP Dignitaries & Clients */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-widest">
              Distinguished Encounters
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Social, Political &amp; Celebrity Dignitaries
            </h2>
            <p className="text-xs sm:text-sm text-gold-300/70 mt-2">
              Privileged to have interacted with and guided prominent figures across governance, culture, and industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {dignitaries.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-celestial-900/60 border border-gold-500/20 overflow-hidden hover:border-astrotalk-yellow/40 transition-all group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-astrotalk-yellow transition-colors truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gold-300/70 mt-0.5 line-clamp-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-celestial-900 border border-gold-500/30 text-xs sm:text-sm font-semibold text-gold-200 hover:text-white hover:border-astrotalk-yellow transition-colors"
            >
              <span>Explore All VIP Gallery Photos &amp; Media Moments</span>
              <ArrowRight className="w-4 h-4 text-astrotalk-yellow" />
            </Link>
          </div>
        </section>

        {/* Core Principles & Trust */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-celestial-900/90 via-celestial-950 to-wine-950/80 border border-gold-500/25">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-10 h-10 text-astrotalk-yellow mx-auto mb-3" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
              Ethical Practice &amp; Strict Client Confidentiality
            </h3>
            <p className="text-xs sm:text-sm text-gold-200/80 leading-relaxed font-sans mb-6">
              Astrology is a sacred science intended to illuminate paths, dispel confusion, and inspire resolute action. Every consultation with Astrologer Swati Pandey is conducted under strict confidentiality. We do not promote superstitious dread or exaggerated planetary fears — only accurate mathematical evaluation and genuine, practical remedies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gold-300 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Private &amp; Secure</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Fixed Pricing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Authentic Vedic Calculations</span>
            </div>
          </div>
        </section>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
