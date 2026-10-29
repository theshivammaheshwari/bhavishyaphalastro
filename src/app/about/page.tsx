"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
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
      title: language === "hi" ? "वर्ष की सर्वाधिक विश्वसनीय एवं सटीक ज्योतिषी" : "India's Most Trusted & Accurate Astrologer of the Year",
      presenter: language === "hi" ? "पूर्व भारतीय क्रिकेटर व कोच श्री नयन मोंगिया जी" : "Ex Indian Cricketer & Coach Sh Nayan Mongia Ji",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg",
      desc: language === "hi" ? "सटीक वैदिक भविष्यवाणियों एवं अचूक उपायों के लिए राष्ट्रीय मंच पर सम्मानित।" : "National felicitation honoring exceptional accuracy in predictive Vedic calculations and life guidance.",
    },
    {
      title: language === "hi" ? "वैदिक उत्कृष्टता पुरस्कार" : "Vedic Excellence Award",
      presenter: language === "hi" ? "गुरुदेव जी.डी. वशिष्ठ जी (प्रख्यात लाल किताब ज्योतिषी)" : "Gurudev GD Vashist Ji (Celebrated Lal Kitab Astrologer)",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM-1_114.jpeg",
      desc: language === "hi" ? "प्राचीन लाल किताब उपचारात्मक पद्धति एवं आध्यात्मिक परामर्श के संरक्षण हेतु सम्मानित।" : "Conferred for authentic preservation of ancient Lal Kitab remedial systems and spiritual counselling.",
    },
    {
      title: language === "hi" ? "राष्ट्रीय ज्योतिष शिरोमणि सम्मान" : "National Jyotish Shiromani Samman",
      presenter: language === "hi" ? "श्री अरुण बंसal जी (अध्यक्ष, ऑल इंडिया फेडरेशन ऑफ एस्ट्रोलॉजर्स सोसाइटीज)" : "Sh Arun Bansal Ji (Chairman, All India Federation of Astrologers Societies)",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM_113.jpeg",
      desc: language === "hi" ? "गणितीय कुंडली विज्ञान एवं गोचर अनुसंधान में उत्कृष्ट योगदान के लिए प्रदत्त।" : "Recognizing outstanding contribution to mathematical horoscopy and planetary transit research.",
    },
    {
      title: language === "hi" ? "भव्य ज्योतिष कॉन्क्लेव सम्मान" : "Prestigious Astrological Conclave Felicitation",
      presenter: language === "hi" ? "श्री सतीश शर्मा जी एवं श्रीमती वाई राखी" : "Sh Satish Sharma Ji & Smt Y Rakhi",
      image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-1_118.jpeg",
      desc: language === "hi" ? "अखिल भारतीय ज्योतिष महाकुंभ में उच्च जातक संतुष्टि एवं नैतिक मार्गदर्शन हेतु सम्मानित।" : "Honored at the Grand National Astrology Conference for exceptional client satisfaction and ethical guidance.",
    },
  ];

  const dignitaries = [
    { name: language === "hi" ? "श्री प्रेम बैरवा जी" : "Sh Prem Bairwa Ji", role: language === "hi" ? "उपमुख्यमंत्री, राजस्थान" : "Deputy Chief Minister, Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.05-PM-1_37.jpeg" },
    { name: language === "hi" ? "श्री अशोक गहलोत जी" : "Sh Ashok Gehlot Ji", role: language === "hi" ? "पूर्व मुख्यमंत्री, राजस्थान" : "Former Chief Minister, Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.04-PM-3_41.jpeg" },
    { name: language === "hi" ? "श्री संजय विनायक जोशी जी" : "Sh Sanjay Vinayak Joshi Ji", role: language === "hi" ? "वरिष्ठ विचारक एवं नेता" : "Senior RSS Leader & Thinker", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.03-PM_44.jpeg" },
    { name: language === "hi" ? "श्री मदन राठौड़ जी" : "Sh Madan Rathore Ji", role: language === "hi" ? "प्रदेश अध्यक्ष, भाजपा राजस्थान" : "State President, BJP Rajasthan", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-1_47.jpeg" },
    { name: language === "hi" ? "श्री नीरज डांगी जी" : "Sh Neeraj Dangi Ji", role: language === "hi" ? "राज्यसभा सांसद" : "Rajyasabha MP", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-2_46.jpeg" },
    { name: language === "hi" ? "निकिता पोरवाल" : "Nikita Porwal", role: language === "hi" ? "फेमिना मिस इंडिया 2024" : "Femina Miss India 2024", image: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM-1_53.jpeg" },
    { name: language === "hi" ? "पारस मेहता" : "Paras Mehta", role: language === "hi" ? "बॉलीवुड निर्देशक एवं निर्माता" : "Bollywood Director & Producer", image: "/images/WhatsApp-Image-2026-08-07-at-2.13.00-PM-2_50.jpeg" },
    { name: language === "hi" ? "अनूप बरतरिया जी" : "Anoop Bartaria Ji", role: language === "hi" ? "संस्थापक, वर्ल्ड ट्रेड पार्क (WTP)" : "Owner, World Trade Park (WTP) Mall", image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-3_55.jpeg" },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navAbout}</span>
        </nav>

        {/* Hero Section (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl group bg-white">
              <Image
                src="/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg"
                alt="Astrologer Swati Pandey"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-stone-200 backdrop-blur-md shadow-md">
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>{t.nationalAwardee}</span>
                </div>
                <h3 className="text-stone-950 font-serif font-bold text-base sm:text-lg">
                  Astrologer Swati Pandey
                </h3>
                <p className="text-stone-600 text-xs mt-0.5 font-medium">
                  {language === "hi" ? "भारत की सर्वाधिक विश्वसनीय एवं सटीक भविष्यवक्ता" : "India's Most Trusted & Accurate Astrologer of the Year"}
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-astrotalk-yellow text-stone-950 shadow-md font-bold flex items-center gap-2 border border-amber-300">
              <Star className="w-5 h-5 fill-amber-700 stroke-none" />
              <div>
                <div className="text-xs font-extrabold uppercase leading-none">12+ Years</div>
                <div className="text-[10px] font-semibold opacity-90 leading-none mt-0.5">Vedic Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{t.founderPrincipal}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight leading-tight mb-4">
              {t.aboutHeroTitle}
            </h1>

            <p className="text-amber-800 text-base sm:text-lg font-bold mb-6">
              {t.aboutHeroSub}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-sans font-medium">
              <p>{t.aboutBioText1}</p>
              <p>{t.aboutBioText2}</p>
              <p>
                {language === "hi"
                  ? "उपमुख्यमंत्री, सांसदों, प्रख्यात उद्योगपतियों, फेमिना मिस इंडिया विजेताओं और देश-विदेश के हजारों जातकों का अटूट विश्वास ही उनकी निष्पक्ष और सटीक ज्योतिषीय सेवा का प्रमाण है।"
                  : "From Cabinet Ministers and Members of Parliament to Miss India laureates and entrepreneurs worldwide, seekers trust her for honest, unfiltered astrological analysis and transformative life clarity."}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 pt-8 border-t border-stone-200">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950">12,500+</div>
                <div className="text-[11px] text-stone-600 mt-0.5 font-medium">{t.statReadingsLabel}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-amber-700">4.99 ★</div>
                <div className="text-[11px] text-stone-600 mt-0.5 font-medium">{t.statAccuracyLabel}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950">28+</div>
                <div className="text-[11px] text-stone-600 mt-0.5 font-medium">{t.statDignitariesLabel}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-serif font-bold text-stone-950">100%</div>
                <div className="text-[11px] text-stone-600 mt-0.5 font-medium">Confidentiality</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/talk-to-astrologer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md flex items-center gap-2 cursor-pointer transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.callNow}</span>
              </Link>
              <Link
                href="/chat-with-astrologer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 flex items-center gap-2 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.chatNow}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* National Awards Section (Light Theme) */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
              {t.nationalAwardee}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
              {t.awardsSectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold uppercase mb-2">
                    <Award className="w-3 h-3 text-amber-700" />
                    <span>National Honor</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-950 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-bold mb-2">
                    Conferred by: {award.presenter}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distinguished Clients & Dignitaries (Light Theme) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
              {t.statDignitariesLabel}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 mt-1">
              {t.dignitariesSectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {dignitaries.map((client, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif font-bold text-xs sm:text-sm line-clamp-1">
                      {client.name}
                    </h3>
                    <p className="text-[10px] text-amber-200 line-clamp-1 font-medium">
                      {client.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
