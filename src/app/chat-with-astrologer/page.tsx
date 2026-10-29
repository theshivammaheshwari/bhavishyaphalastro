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
  const { t, language } = useLanguage();
  const [topic, setTopic] = useState("Love & Marriage");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [question, setQuestion] = useState("");

  const topics = [
    { en: "Love & Marriage", hi: "विवाह एवं प्रेम संबंध" },
    { en: "Kundli Milan (Matching)", hi: "कुंडली मिलान (36 गुण मिलान)" },
    { en: "Career & Job Promotion", hi: "करियर, नौकरी एवं प्रमोशन" },
    { en: "Business & Financial Growth", hi: "व्यापार एवं धन वृद्धि" },
    { en: "Child Birth & Family", hi: "संतान सुख एवं पारिवारिक शांति" },
    { en: "Health & Vitality", hi: "स्वास्थ्य एवं दीर्घायु" },
    { en: "Lal Kitab & Gemstone Remedies", hi: "लाल किताब उपाय एवं उपयुक्त रत्न" },
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
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navChat}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Astrologer Profile & Live Highlights (Light Theme) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 bg-white border border-stone-200 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-astrotalk-yellow shadow-md flex-shrink-0 bg-stone-100">
                  <Image
                    src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                    alt="Astrologer Swati Pandey"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>{t.onlineNow}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-stone-950">Astrologer Swati Pandey</h2>
                  <p className="text-xs text-stone-600 font-medium">{t.founderPrincipal}</p>
                  <div className="flex items-center gap-2 text-xs mt-1 text-amber-700 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                    <span>4.99 ★</span>
                    <span className="text-stone-500 font-normal">({t.statReadings} {t.statReadingsLabel})</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-4 text-xs text-stone-800 leading-relaxed font-sans font-medium">
                💡 <strong>{language === "hi" ? "चैट परामर्श सुविधा:" : "Chat Consultation Feature:"}</strong> {language === "hi"
                  ? "सीधे आचार्य स्वाति पांडे से व्हाट्सएप पर त्वरित संदेश, जन्मपत्री गणना, शुभ समय और उपाय प्राप्त करें।"
                  : "Get quick, typed responses directly from Astrologer Swati Pandey with chart computations, auspicious timings, and practical remedies delivered directly to your chat window."}
              </div>

              <div className="space-y-2.5 text-xs text-stone-700 font-sans font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t.chatConfidentialNotice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{t.chatFastResponseNotice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{t.chatRemediesNotice}</span>
                </div>
              </div>
            </div>

            {/* Quick Call Switch */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-sm text-stone-950">
                  {language === "hi" ? "फोन पर सीधे बात करना चाहते हैं?" : "Prefer a Phone or Video Call?"}
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  {language === "hi" ? "1-on-1 विस्तृत बातचीत के लिए कॉल चुनें" : "Switch to voice call for in-depth discussion"}
                </p>
              </div>
              <Link
                href="/talk-to-astrologer"
                className="py-2 px-3 rounded-xl bg-astrotalk-yellow hover:bg-astrotalk-yellowHover text-stone-950 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.callNow}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Chat Intake Form (Light Theme) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 shadow-md">
              <div className="mb-6">
                <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                  {t.navChat}
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
                  {t.chatIntakeTitle}
                </h1>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
                  {t.chatPageSub}
                </p>
              </div>

              <form onSubmit={handleStartChat} className="space-y-4">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    {t.chatTopicLabel} *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topics.map((item, idx) => {
                      const label = language === "hi" ? item.hi : item.en;
                      const isSelected = topic === item.en;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setTopic(item.en)}
                          className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-amber-100 border-amber-400 text-stone-950 shadow-xs"
                              : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          <span>{label}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-amber-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    {t.chatNameLabel}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === "hi" ? "उदा. राहुल शर्मा" : "e.g. Rahul Sharma"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>
                </div>

                {/* DOB & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      {t.chatDobLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      {t.chatBirthTimeLabel}
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                      <input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500 shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Place */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    {t.chatBirthPlaceLabel}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                    <input
                      type="text"
                      value={birthPlace}
                      onChange={(e) => setBirthPlace(e.target.value)}
                      placeholder={language === "hi" ? "उदा. जयपुर, राजस्थान" : "e.g. Jaipur, Rajasthan, India"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>
                </div>

                {/* Specific Question */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    {t.chatQuestionLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={language === "hi" ? "अपनी चिंता, विवाह का समय, करियर या कोई विशेष प्रश्न यहां लिखें..." : "Describe your current situation, career crossroad, or specific marriage query..."}
                    className="w-full p-3 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-sm resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 mt-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-800 fill-emerald-800" />
                  <span>{t.startWhatsAppChatBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
