"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Star,
  Send,
  HelpCircle,
  ArrowRight,
  User,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ChatWithAstrologerPage() {
  const { t } = useLanguage();
  const [topic, setTopic] = useState("Love & Marriage");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [question, setQuestion] = useState("");

  const topics = [
    "Love & Marriage",
    "Kundli Milan (Matching)",
    "Career & Job Promotion",
    "Business & Financial Growth",
    "Child Birth & Family",
    "Health & Vitality",
    "Lal Kitab & Gemstone Remedies",
  ];

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `*Name*: ${name || "Not provided"}`,
      `*Topic*: ${topic}`,
      dob ? `*DOB*: ${dob}` : "",
      birthTime ? `*Birth Time*: ${birthTime}` : "",
      birthPlace ? `*Birth Place*: ${birthPlace}` : "",
      question ? `*Question*: ${question}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const message = `Hello Astrologer Swati Pandey! I would like to start a Chat Consultation.\n\n${details}`;
    const whatsappUrl = `https://wa.me/919116055424?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Chat with Astrologer</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Astrologer Profile & Live Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-celestial-900 via-celestial-950 to-wine-950/80 border-2 border-astrotalk-yellow/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-astrotalk-yellow shadow-md flex-shrink-0">
                  <Image
                    src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                    alt="Astrologer Swati Pandey"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-celestial-950" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live &amp; Available Now</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-white">Astrologer Swati Pandey</h2>
                  <p className="text-xs text-gold-300/80">India&apos;s Most Trusted Astrologer of the Year</p>
                  <div className="flex items-center gap-2 text-xs mt-1 text-astrotalk-yellow font-semibold">
                    <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
                    <span>4.99 ★</span>
                    <span className="text-gold-300/60 font-normal">(12,500+ chats completed)</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-celestial-950/80 border border-gold-500/15 mb-4 text-xs text-gold-200/85 leading-relaxed font-sans">
                💡 <strong>Chat Consultation Feature:</strong> Get quick, typed responses directly from Astrologer Swati Pandey with chart computations, auspicious timings, and practical remedies delivered directly to your chat window.
              </div>

              <div className="space-y-2 text-xs text-gold-300 font-sans">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>100% Confidential &amp; Private Conversation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>Typical Response Time: Under 2 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-astrotalk-yellow flex-shrink-0" />
                  <span>Includes Planetary Mahadasha &amp; Remedy Advice</span>
                </div>
              </div>
            </div>

            {/* Quick Call Switch */}
            <div className="p-5 rounded-2xl bg-celestial-900/60 border border-gold-500/20 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Prefer Voice/Video Call?</h4>
                <p className="text-[11px] text-gold-300/70">Connect directly on phone</p>
              </div>
              <Link
                href="/talk-to-astrologer"
                className="px-4 py-2 rounded-xl bg-celestial-950 border border-astrotalk-yellow/40 text-xs font-bold text-astrotalk-yellow hover:bg-astrotalk-yellow hover:text-celestial-950 transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Chat Intake Form (Astrotalk Reference Style) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-celestial-900/70 border border-gold-500/25 shadow-xl">
              <div className="mb-6">
                <span className="text-astrotalk-yellow text-xs font-bold uppercase tracking-wider">
                  Quick Consultation Intake
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                  Start Your Vedic Chat Consultation
                </h3>
                <p className="text-xs text-gold-300/70 mt-1 font-sans">
                  Enter your details below to prepare your birth chart for Astrologer Swati Pandey before initiating the chat.
                </p>
              </div>

              <form onSubmit={handleStartChat} className="space-y-4 font-sans">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-semibold text-gold-200 mb-2">
                    Select Consultation Topic
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTopic(t)}
                        className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                          topic === t
                            ? "bg-astrotalk-yellow/20 border-astrotalk-yellow text-white font-bold"
                            : "bg-celestial-950/60 border-gold-500/15 text-gold-200/70 hover:border-gold-500/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gold-200 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
                    />
                  </div>
                </div>

                {/* DOB & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Time of Birth (if known)
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
                      <input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Place */}
                <div>
                  <label className="block text-xs font-semibold text-gold-200 mb-1">
                    Birth Place (City, State)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
                    <input
                      type="text"
                      value={birthPlace}
                      onChange={(e) => setBirthPlace(e.target.value)}
                      placeholder="e.g. Jaipur, Rajasthan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
                    />
                  </div>
                </div>

                {/* Specific Question */}
                <div>
                  <label className="block text-xs font-semibold text-gold-200 mb-1">
                    Your Specific Question or Concern
                  </label>
                  <textarea
                    rows={3}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. When will I get a new job / is my Kundli compatible for marriage?"
                    className="w-full p-3 rounded-xl bg-celestial-950/80 border border-gold-500/25 text-xs sm:text-sm text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-serif text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-astrotalk-yellow/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all cursor-pointer mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat with Astrologer Swati Pandey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
