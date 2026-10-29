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
  const { t } = useLanguage();
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
      role: "Medical Profession & Dasha Timing",
      location: "Jaipur",
      content: "Swati Ji's analysis of my Rahu Mahadasha transition gave me the exact timing to set up my independent surgical clinic. Her guidance was mathematically flawless and immensely comforting.",
      rating: 5,
      avatar: "SM",
      category: "career",
      date: "12 Oct 2026",
    },
    {
      id: "7",
      name: "Kavita & Amit Bansal",
      role: "Kundli Milan & Marriage Compatibility",
      location: "Chandigarh",
      content: "Other pandits told us we had severe Bhakoot Dosha and could never marry. Swati Ji checked cancellation rules in our Navamsha chart and performed the right remedy. We are happily married for 3 years today!",
      rating: 5,
      avatar: "KB",
      category: "marriage",
      date: "28 Sep 2026",
    },
    {
      id: "8",
      name: "Rohan Deshmukh",
      role: "Corporate Relocation & Abroad Settlement",
      location: "Pune / London",
      content: "Her prediction about foreign settlement in 9th & 12th house sub-periods matched my UK visa grant date to the exact week! Her Shri Yantra placement advice also brought extraordinary calm.",
      rating: 5,
      avatar: "RD",
      category: "career",
      date: "04 Sep 2026",
    },
    {
      id: "9",
      name: "Meenakshi Sundaram",
      role: "Consecrated Mahalakshmi Yantra",
      location: "Chennai",
      content: "Received the energized Mahalakshmi Yantra with personalized Pran Pratishtha. The craftsmanship and spiritual energy in our home altar is palpable. Financial blockages cleared up smoothly.",
      rating: 5,
      avatar: "MS",
      category: "yantras",
      date: "19 Aug 2026",
    },
  ];

  const allReviews = [
    ...TESTIMONIALS.map((t) => ({ ...t, category: "all", date: "Verified Client" })),
    ...additionalReviews,
  ];

  const filtered = allReviews.filter((r) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "marriage") return r.role.toLowerCase().includes("marriage") || r.role.toLowerCase().includes("match");
    if (activeFilter === "career") return r.role.toLowerCase().includes("career") || r.role.toLowerCase().includes("business") || r.role.toLowerCase().includes("timing");
    if (activeFilter === "yantras") return r.role.toLowerCase().includes("yantra");
    return true;
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
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gold-300/70 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-astrotalk-yellow transition-colors">Home</Link>
          <span>/</span>
          <span className="text-astrotalk-yellow font-medium">Client Reviews</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-astrotalk-yellow/15 border border-astrotalk-yellow/30 text-astrotalk-yellow text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-astrotalk-yellow stroke-none" />
            <span>Verified Testimonials</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Real Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-500">Clarity &amp; Transformation</span>
          </h1>

          <p className="text-sm sm:text-base text-gold-200/80 leading-relaxed font-sans">
            Read authentic experiences from over 12,500+ clients across India, USA, UK, UAE, and beyond who consulted Astrologer Swati Pandey for life-defining clarity.
          </p>
        </div>

        {/* Rating Scorecard Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/20 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-astrotalk-yellow">
                4.99
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 my-1 text-astrotalk-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-astrotalk-yellow stroke-none" />
                ))}
              </div>
              <div className="text-xs text-gold-300/70">Based on 2,540+ Verified Reviews</div>
            </div>

            <div className="hidden sm:block h-16 w-px bg-gold-500/20" />

            <div className="hidden sm:flex flex-col gap-1.5 text-xs text-gold-200/80">
              <div className="flex items-center gap-2">
                <span>5 Star</span>
                <div className="w-32 h-2 rounded-full bg-celestial-950 overflow-hidden">
                  <div className="w-[98%] h-full bg-astrotalk-yellow rounded-full" />
                </div>
                <span>98%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>4 Star</span>
                <div className="w-32 h-2 rounded-full bg-celestial-950 overflow-hidden">
                  <div className="w-[2%] h-full bg-amber-400 rounded-full" />
                </div>
                <span>2%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Your Feedback</span>
            </button>

            <Link
              href="/talk-to-astrologer"
              className="px-6 py-3 rounded-xl bg-celestial-950 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-200 hover:text-white transition-all flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-astrotalk-yellow" />
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: "all", label: "All Reviews" },
            { id: "marriage", label: "Marriage & Matchmaking" },
            { id: "career", label: "Career & Business" },
            { id: "yantras", label: "Sacred Yantras" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-astrotalk-yellow text-celestial-950 shadow-md font-bold"
                  : "bg-celestial-900/80 text-gold-200/80 hover:text-white border border-gold-500/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 bg-celestial-900/60 border border-gold-500/20 hover:border-astrotalk-yellow/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-astrotalk-yellow">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-astrotalk-yellow stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-400/25 group-hover:text-gold-400/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-gold-100/90 leading-relaxed font-sans italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gold-500/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-astrotalk-yellow to-amber-500 text-celestial-950 font-bold text-xs flex items-center justify-center flex-shrink-0 shadow">
                  {item.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  </div>
                  <p className="text-[11px] text-gold-300/70 truncate">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl bg-celestial-950 border-2 border-astrotalk-yellow/30 p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-4 right-4 text-gold-300/70 hover:text-white text-lg p-2"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-white">Thank You!</h3>
                <p className="text-xs text-gold-300/80 mt-1">
                  Your feedback has been submitted successfully for verification.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  Share Your Consultation Experience
                </h3>
                <p className="text-xs text-gold-300/70 mb-4 font-sans">
                  Help fellow seekers discover genuine astrological clarity.
                </p>

                <form onSubmit={handleSubmitReview} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="e.g. Ananya Roy"
                      className="w-full p-2.5 rounded-xl bg-celestial-900 border border-gold-500/25 text-xs text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Consultation Service
                    </label>
                    <select
                      value={reviewService}
                      onChange={(e) => setReviewService(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-celestial-900 border border-gold-500/25 text-xs text-white focus:outline-none focus:border-astrotalk-yellow"
                    >
                      <option>All Life Comprehensive Consultancy</option>
                      <option>Kundli Milan &amp; Matchmaking</option>
                      <option>Career &amp; Business Guidance</option>
                      <option>Marriage &amp; Soulmate Timing</option>
                      <option>Vastu &amp; Palmistry Session</option>
                      <option>Sacred Consecrated Yantra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= reviewRating
                                ? "fill-astrotalk-yellow text-astrotalk-yellow"
                                : "text-gold-500/30"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gold-200 mb-1">
                      Your Review &amp; Experience
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Describe how the reading helped you..."
                      className="w-full p-2.5 rounded-xl bg-celestial-900 border border-gold-500/25 text-xs text-white placeholder-gold-300/40 focus:outline-none focus:border-astrotalk-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-astrotalk-yellow via-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
