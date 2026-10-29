"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  Send,
  Heart,
  User,
  ArrowRight,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsPage() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewService, setReviewService] = useState("All Life Comprehensive Consultancy");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const additionalReviews = [
    {
      id: "6",
      name: "Dr. Siddharth Mathur",
      role: language === "hi" ? "चिकित्सा व्यवसाय एवं महादशा गोचर" : "Medical Profession & Dasha Timing",
      location: "Jaipur",
      content: language === "hi"
        ? "स्वाति जी के राहु महादशा विश्लेषण ने मुझे निजी क्लिनिक शुरू करने का सही समय बताया। उनकी भविष्यवाणियां पूर्णतः सटीक साबित हुईं।"
        : "Swati Ji's analysis of my Rahu Mahadasha transition gave me the exact timing to set up my independent surgical clinic. Her guidance was mathematically flawless and immensely comforting.",
      rating: 5,
      avatar: "SM",
      category: "career",
      date: "12 Oct 2026",
    },
    {
      id: "7",
      name: "Kavita & Amit Bansal",
      role: language === "hi" ? "कुंडली मिलान एवं दांपत्य सुख" : "Kundli Milan & Marriage Compatibility",
      location: "Chandigarh",
      content: language === "hi"
        ? "अन्य पंडितों ने भकूट दोष बताकर विवाह से मना कर दिया था। स्वाति जी ने नवमांश में परिहार नियम समझाए और सही उपाय बताए। आज हम अत्यंत सुखी हैं।"
        : "Other pandits told us we had severe Bhakoot Dosha and could never marry. Swati Ji checked cancellation rules in our Navamsha chart and performed the right remedy. We are happily married for 3 years today!",
      rating: 5,
      avatar: "KB",
      category: "marriage",
      date: "28 Sep 2026",
    },
    {
      id: "8",
      name: "Rohan Deshmukh",
      role: language === "hi" ? "विदेश प्रवास एवं करियर वृद्धि" : "Corporate Relocation & Abroad Settlement",
      location: "Pune / London",
      content: language === "hi"
        ? "विदेश योग की उनकी भविष्यवाणी सटीक सप्ताह पर सच हुई। उनके द्वारा सिद्ध श्री यंत्र की स्थापना के बाद जीवन में अद्भुत शांति और तरक्की आई।"
        : "Her prediction about foreign settlement in 9th & 12th house sub-periods matched my UK visa grant date to the exact week! Her Shri Yantra placement advice also brought extraordinary calm.",
      rating: 5,
      avatar: "RD",
      category: "career",
      date: "05 Sep 2026",
    },
  ];

  const allReviews = [
    ...TESTIMONIALS.map((item, idx) => ({
      id: `base-${idx}`,
      name: item.name,
      role: item.role || "Astrological Consultation",
      location: item.location,
      content: item.content,
      rating: 5,
      avatar: item.name.substring(0, 2).toUpperCase(),
      category: idx % 2 === 0 ? "life" : "marriage",
      date: "Verified Client",
    })),
    ...additionalReviews,
  ];

  const filteredReviews = allReviews.filter((r) => {
    if (activeFilter === "all") return true;
    return r.category === activeFilter;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmitted(false);
      setReviewName("");
      setReviewText("");
    }, 2000);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#FAFAF8] text-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-800 transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-amber-800 font-bold">{t.navReviews}</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
            <span>4.99 ★ Verified Rating</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight mb-4">
            {t.reviewsHeroTitle}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-medium">
            {t.reviewsHeroSub}
          </p>
        </div>

        {/* Rating Scorecard Box (Light Theme) */}
        <div className="mb-12 p-8 rounded-3xl bg-white border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Big Score */}
            <div className="md:col-span-4 text-center md:border-r border-stone-200 md:pr-8">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-stone-950 mb-2">
                4.99
              </div>
              <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 stroke-none" />
                ))}
              </div>
              <p className="text-xs text-stone-600 font-bold uppercase tracking-wider">
                {t.scorecardHeading}
              </p>
              <p className="text-[11px] text-stone-500 mt-1">
                {t.scorecardReviewsCount}
              </p>
            </div>

            {/* Metric Bars */}
            <div className="md:col-span-5 space-y-2.5 font-sans">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-24 text-stone-700 font-bold">5 Stars</span>
                <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
                  <div className="h-full bg-astrotalk-yellow rounded-full" style={{ width: "98%" }} />
                </div>
                <span className="w-10 text-right text-stone-600 font-bold">98%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-24 text-stone-700 font-bold">4 Stars</span>
                <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: "2%" }} />
                </div>
                <span className="w-10 text-right text-stone-600 font-bold">2%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-24 text-stone-500">3 Stars &amp; below</span>
                <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
                  <div className="h-full bg-stone-300 rounded-full" style={{ width: "0%" }} />
                </div>
                <span className="w-10 text-right text-stone-500">0%</span>
              </div>
            </div>

            {/* Write a review trigger */}
            <div className="md:col-span-3 text-center md:text-right">
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-md transition-all cursor-pointer"
              >
                {t.writeReviewBtn}
              </button>
              <p className="text-[11px] text-stone-500 mt-2">
                100% Verified Consultation Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 bg-white border border-stone-200 hover:border-amber-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-5 font-medium italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-stone-950">{rev.name}</h3>
                  <p className="text-[11px] text-amber-800 font-bold">{rev.role}</p>
                  <p className="text-[10px] text-stone-500">{rev.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-100 text-stone-900 font-bold flex items-center justify-center text-xs">
                  {rev.avatar}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8 relative">
            <h3 className="font-serif font-bold text-xl text-stone-950 mb-2">
              {t.writeReviewBtn}
            </h3>
            <p className="text-xs text-stone-600 mb-6 font-medium">
              Share your personal experience with Astrologer Swati Pandey.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-stone-950">Thank You!</h4>
                <p className="text-xs text-stone-600">Your review has been submitted for verification.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="e.g. Ankit Sharma"
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewRating(star)}
                        className="text-amber-500 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= reviewRating ? "fill-amber-500" : "text-stone-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">Your Review</label>
                  <textarea
                    rows={4}
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Describe how the consultation or remedy helped you..."
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-stone-950 bg-astrotalk-yellow hover:bg-astrotalk-yellowHover shadow-sm"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
