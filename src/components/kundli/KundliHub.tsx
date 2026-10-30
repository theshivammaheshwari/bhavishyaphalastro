"use client";

import { useState } from "react";
import {
  Stars,
  Heart,
  Briefcase,
  Sun,
  CalendarClock,
  Hash,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  MessageCircle,
  FileText,
  User,
  Clock,
  MapPin,
  Flame,
  ShieldAlert,
} from "lucide-react";
import {
  generateKundli,
  calculateGunaMilan,
  getDailyHoroscope,
  calculateNumerology,
  KundliReport,
  GunaMilanReport,
  DailyHoroscope,
  NumerologyReport,
} from "@/lib/astrology-engine";
import { VedicChartDisplay } from "./VedicChartDisplay";
import { SITE_CONFIG } from "@/lib/site-data";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export function KundliHub({ onOpenBooking }: { onOpenBooking: (service?: string) => void }) {
  const [activeTab, setActiveTab] = useState<
    "kundli" | "marriage" | "daily" | "career" | "yearly" | "numerology" | "lal_kitab"
  >("kundli");

  // Tab 1: Kundli Generator State
  const [kundliForm, setKundliForm] = useState({
    name: "Vikram Sharma",
    gender: "male",
    dob: "1994-08-15",
    time: "10:30",
    place: "Jaipur, Rajasthan",
  });
  const [kundliResult, setKundliResult] = useState<KundliReport | null>(null);

  // Tab 2: Marriage Matching State
  const [milanForm, setMilanForm] = useState({
    p1Name: "Rohan Verma",
    p1Dob: "1995-04-12",
    p1Time: "08:15",
    p1Place: "Delhi",
    p2Name: "Ananya Iyer",
    p2Dob: "1997-11-20",
    p2Time: "14:45",
    p2Place: "Mumbai",
  });
  const [milanResult, setMilanResult] = useState<GunaMilanReport | null>(null);

  // Tab 3: Daily Horoscope State
  const [selectedZodiac, setSelectedZodiac] = useState("aries");
  const horoscopeData: DailyHoroscope = getDailyHoroscope(selectedZodiac);

  // Tab 4: Career Guidance State
  const [careerResult, setCareerResult] = useState<any | null>(null);

  // Tab 5: Yearly Guidance State
  const [yearlyResult, setYearlyResult] = useState<any | null>(null);

  // Tab 6: Numerology State
  const [numForm, setNumForm] = useState({ name: "Aarav Gupta", dob: "1996-03-24" });
  const [numResult, setNumResult] = useState<NumerologyReport | null>(null);

  // Quick City Coordinates Preset
  const handleCityPreset = (val: string, targetForm: "kundli" | "p1" | "p2") => {
    if (!val) return;
    const [city] = val.split("|");
    if (targetForm === "kundli") setKundliForm((prev) => ({ ...prev, place: city }));
    if (targetForm === "p1") setMilanForm((prev) => ({ ...prev, p1Place: city }));
    if (targetForm === "p2") setMilanForm((prev) => ({ ...prev, p2Place: city }));
  };

  const handleGenerateKundli = (e: React.FormEvent) => {
    e.preventDefault();
    const res = generateKundli({
      name: kundliForm.name,
      gender: kundliForm.gender,
      dob: kundliForm.dob,
      time: kundliForm.time,
      place: kundliForm.place,
    });
    setKundliResult(res);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const handleCalculateMilan = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateGunaMilan(
      { name: milanForm.p1Name, dob: milanForm.p1Dob, time: milanForm.p1Time, place: milanForm.p1Place },
      { name: milanForm.p2Name, dob: milanForm.p2Dob, time: milanForm.p2Time, place: milanForm.p2Place }
    );
    setMilanResult(res);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
  };

  const handleGenerateCareer = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerResult({
      careerType: "Hybrid (Leadership in Enterprise or Independent Venture)",
      rulingLords: "10th House Lord Saturn & Sun aspect on 2nd House of Wealth",
      keyStrength: "Strategic analysis, executive negotiation, and high organizational stamina.",
      favorableSectors: [
        "Information Technology & FinTech Architecture",
        "Corporate Consulting, Law & Strategic Advisory",
        "Real Estate, Infrastructure & Manufacturing",
        "Public Service, Administration & International Trade",
      ],
      goldenWindow: "Current Rahu-Jupiter transit creates an exceptional breakthrough phase over the next 18 months.",
      remedy: "Wear a 5 Mukhi Rudraksh and offer water to the rising Sun daily for professional authority.",
    });
  };

  const handleGenerateYearly = (e: React.FormEvent) => {
    e.preventDefault();
    setYearlyResult({
      year: "2026 - 2027",
      financialStatus: "Strong upward financial trajectory with lucrative gains in Q2 and Q4.",
      relationships: "Peaceful family ties; singles encounter serious long-term marriage proposals.",
      health: "High vitality, though caution is recommended regarding seasonal digestives in autumn.",
      guidance: "Auspicious periods for asset purchase or foreign travel occur between November and March.",
    });
  };

  const handleCalculateNumerology = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateNumerology(numForm.name, numForm.dob);
    setNumResult(res);
  };

  const zodiacList = [
    { key: "aries", name: "Aries", symbol: "♈" },
    { key: "taurus", name: "Taurus", symbol: "♉" },
    { key: "gemini", name: "Gemini", symbol: "♊" },
    { key: "cancer", name: "Cancer", symbol: "♋" },
    { key: "leo", name: "Leo", symbol: "♌" },
    { key: "virgo", name: "Virgo", symbol: "♍" },
    { key: "libra", name: "Libra", symbol: "♎" },
    { key: "scorpio", name: "Scorpio", symbol: "♏" },
    { key: "sagittarius", name: "Sagittarius", symbol: "♐" },
    { key: "capricorn", name: "Capricorn", symbol: "♑" },
    { key: "aquarius", name: "Aquarius", symbol: "♒" },
    { key: "pisces", name: "Pisces", symbol: "♓" },
  ];

  return (
    <div className="space-y-12">
      {/* 7 Tab Bar Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gold-500/20">
        <button
          type="button"
          onClick={() => setActiveTab("kundli")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "kundli"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Stars className="w-4 h-4 text-gold-400" />
          <span>Kundli Generator</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("marriage")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "marriage"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Marriage & Guna Milan</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("daily")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "daily"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Sun className="w-4 h-4 text-amber-400" />
          <span>Daily Horoscope</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("career")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "career"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Briefcase className="w-4 h-4 text-gold-400" />
          <span>Career & Business</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("yearly")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "yearly"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <CalendarClock className="w-4 h-4 text-amber-400" />
          <span>Yearly Guidance</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("numerology")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "numerology"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Hash className="w-4 h-4 text-gold-400" />
          <span>Numerology</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lal_kitab")}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === "lal_kitab"
              ? "bg-gradient-to-r from-wine-700 to-wine-600 text-gold-100 shadow-lg border border-gold-400/40"
              : "text-gold-200/70 hover:text-gold-200 hover:bg-white/5"
          }`}
        >
          <Flame className="w-4 h-4 text-orange-400" />
          <span>Lal Kitab Remedies</span>
        </button>
      </div>

      {/* ================= TAB 1: KUNDLI GENERATOR ================= */}
      {activeTab === "kundli" && (
        <div className="space-y-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
                Bhavishyaphal Birth Chart Engine
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                Generate Your Authentic Vedic Birth Chart
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                Enter your birth details to generate your North-Indian diamond chart, planetary degrees, Nakshatra, Dasha, and Manglik status.
              </p>
            </div>

            <form onSubmit={handleGenerateKundli} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={kundliForm.name}
                    onChange={(e) => setKundliForm({ ...kundliForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Gender</label>
                  <select
                    value={kundliForm.gender}
                    onChange={(e) => setKundliForm({ ...kundliForm, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Date of Birth <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={kundliForm.dob}
                    onChange={(e) => setKundliForm({ ...kundliForm, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Birth Time <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={kundliForm.time}
                    onChange={(e) => setKundliForm({ ...kundliForm, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Birth City / Place <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={kundliForm.place}
                    onChange={(e) => setKundliForm({ ...kundliForm, place: e.target.value })}
                    placeholder="e.g. Jaipur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gold-300 font-semibold mb-1">
                    Quick City Presets (Optional)
                  </label>
                  <select
                    onChange={(e) => handleCityPreset(e.target.value, "kundli")}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  >
                    <option value="">Select major city preset...</option>
                    <option value="Jaipur|26.9124|75.7873">Jaipur, Rajasthan</option>
                    <option value="New Delhi|28.6139|77.2090">New Delhi</option>
                    <option value="Mumbai|19.0760|72.8777">Mumbai, Maharashtra</option>
                    <option value="Bengaluru|12.9716|77.5946">Bengaluru, Karnataka</option>
                    <option value="Kolkata|22.5726|88.3639">Kolkata, West Bengal</option>
                    <option value="Chennai|13.0827|80.2707">Chennai, Tamil Nadu</option>
                    <option value="Lucknow|26.8467|80.9462">Lucknow, UP</option>
                    <option value="Ahmedabad|23.0225|72.5714">Ahmedabad, Gujarat</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
                >
                  <Stars className="w-4 h-4" />
                  <span>Generate My Kundli Chart</span>
                </button>
              </div>
            </form>
          </div>

          {/* Generated Kundli Output */}
          {kundliResult && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: North Indian Diamond Chart */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl backdrop-blur-xl">
                  <VedicChartDisplay kundli={kundliResult} />

                  {/* Summary Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-gold-500/15">
                      <span className="text-[10px] text-gold-400 uppercase block font-semibold">Ascendant (Lagna)</span>
                      <strong className="text-gold-100">{kundliResult.lagnaSign}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-gold-500/15">
                      <span className="text-[10px] text-gold-400 uppercase block font-semibold">Moon Sign (Rashi)</span>
                      <strong className="text-gold-100">{kundliResult.moonSign}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-gold-500/15">
                      <span className="text-[10px] text-gold-400 uppercase block font-semibold">Nakshatra</span>
                      <strong className="text-gold-100">{kundliResult.nakshatra} (Pada {kundliResult.charan})</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-gold-500/15">
                      <span className="text-[10px] text-gold-400 uppercase block font-semibold">Vimshottari Dasha</span>
                      <strong className="text-gold-100">{kundliResult.currentDasha.mahadasha} - {kundliResult.currentDasha.antardasha}</strong>
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Interpretation & Tables */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Manglik Status Card */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20 flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        kundliResult.manglikStatus
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {kundliResult.manglikStatus ? (
                        <AlertTriangle className="w-5 h-5" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-xs">
                      <strong className="text-sm font-bold text-gold-200 block">
                        Mangal Dosha Status: {kundliResult.manglikSeverity}
                      </strong>
                      <p className="text-gold-200/80 mt-1 leading-relaxed">
                        {kundliResult.manglikNote}
                      </p>
                    </div>
                  </div>

                  {/* Lucky Elements Grid */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20">
                    <h4 className="font-serif font-bold text-sm text-gold-200 mb-3">
                      Auspicious Personal Cosmic Elements
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Lucky Gemstone</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.gemstone}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Consecrated Rudraksh</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.rudraksh}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Lucky Color</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.color}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Auspicious Day</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.day}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Lucky Cosmic Number</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.number}</strong>
                      </div>
                      <div className="p-2 rounded-xl bg-celestial-950/60 border border-gold-500/10">
                        <span className="text-[10px] text-gold-400 block font-medium">Ishta Devata</span>
                        <strong className="text-gold-100">{kundliResult.luckyElements.deity}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Planetary Positions Table */}
                  <div className="rounded-2xl overflow-hidden border border-gold-500/20 bg-celestial-950/80">
                    <div className="px-4 py-3 bg-white/5 border-b border-gold-500/15">
                      <h4 className="font-serif font-bold text-xs text-gold-200">
                        Planetary Longitudes & Dignity
                      </h4>
                    </div>
                    <div className="overflow-x-auto max-h-60 overflow-y-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-celestial-900/90 text-gold-400 text-[10px] uppercase font-bold sticky top-0">
                          <tr>
                            <th className="p-2.5">Planet</th>
                            <th className="p-2.5">Sign</th>
                            <th className="p-2.5">Degree</th>
                            <th className="p-2.5">House</th>
                            <th className="p-2.5">Nakshatra</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gold-500/10 text-gold-200/90">
                          {kundliResult.planets.map((p) => (
                            <tr key={p.name} className="hover:bg-white/5 transition-colors">
                              <td className="p-2.5 font-semibold text-gold-100 flex items-center gap-1.5">
                                <span>{p.name}</span>
                                <span className="text-[10px] text-gold-400 font-normal">({p.hindiName})</span>
                                {p.isRetrograde && (
                                  <span className="text-[9px] px-1 rounded bg-rose-500/20 text-rose-300 font-bold">
                                    R
                                  </span>
                                )}
                              </td>
                              <td className="p-2.5">{p.sign.split(" ")[0]}</td>
                              <td className="p-2.5">{p.degreeFormatted}</td>
                              <td className="p-2.5 font-semibold text-gold-300">H{p.house}</td>
                              <td className="p-2.5 text-[11px]">{p.nakshatra}</td>
                              <td className="p-2.5">
                                <span
                                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                    p.status === "Exalted" || p.status === "Own Sign"
                                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                      : p.status === "Debilitated"
                                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                                      : "bg-white/5 text-gold-300"
                                  }`}
                                >
                                  {p.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Premium Options Row (Preserved from WordPress Kundli page) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-wine-950 via-celestial-900 to-wine-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <strong className="text-xs font-bold text-gold-200 block">
                        Need Astrologer Ajay Kumar Agarwal&apos;s Personal Decoding?
                      </strong>
                      <span className="text-[11px] text-gold-300/80">
                        Get in-depth analysis on marriage timing, career path, and customized remedies.
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(`Detailed Kundli Interpretation for ${kundliResult.name}`)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-md"
                      >
                        Personal Consultation (₹2,499)
                      </button>

                      <a
                        href={`https://wa.me/919116055424?text=Hello%20Bhavishyaphal%2C%20I%20generated%20my%20Kundli%20for%20${encodeURIComponent(
                          kundliResult.name
                        )}%20(DOB%3A%20${encodeURIComponent(
                          kundliResult.dob
                        )})%20and%20want%20to%20consult%20Astrologer%20Ajay%20Kumar%20Agarwal.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: MARRIAGE & GUNA MILAN ================= */}
      {activeTab === "marriage" && (
        <div className="space-y-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                Ashtakoota 36-Guna Compatibility Match
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                Check Kundli Matching & Guna Milan
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                Evaluate complete 36-point compatibility, Mangal Dosha cross-examination, Nadi & Bhakoot status, and remedies for prospective brides and grooms.
              </p>
            </div>

            <form onSubmit={handleCalculateMilan} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Partner 1 Details */}
                <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20 space-y-3">
                  <h4 className="font-serif font-bold text-sm text-gold-300">
                    Partner 1 (Bride / Groom) Details
                  </h4>
                  <div>
                    <label className="block text-gold-200 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={milanForm.p1Name}
                      onChange={(e) => setMilanForm({ ...milanForm, p1Name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-gold-200 font-semibold mb-1">Date of Birth</label>
                      <input
                        type="date"
                        required
                        value={milanForm.p1Dob}
                        onChange={(e) => setMilanForm({ ...milanForm, p1Dob: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gold-200 font-semibold mb-1">Birth Time</label>
                      <input
                        type="time"
                        required
                        value={milanForm.p1Time}
                        onChange={(e) => setMilanForm({ ...milanForm, p1Time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gold-200 font-semibold mb-1">Birth Place / City</label>
                    <input
                      type="text"
                      required
                      value={milanForm.p1Place}
                      onChange={(e) => setMilanForm({ ...milanForm, p1Place: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Partner 2 Details */}
                <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20 space-y-3">
                  <h4 className="font-serif font-bold text-sm text-gold-300">
                    Partner 2 (Bride / Groom) Details
                  </h4>
                  <div>
                    <label className="block text-gold-200 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={milanForm.p2Name}
                      onChange={(e) => setMilanForm({ ...milanForm, p2Name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-gold-200 font-semibold mb-1">Date of Birth</label>
                      <input
                        type="date"
                        required
                        value={milanForm.p2Dob}
                        onChange={(e) => setMilanForm({ ...milanForm, p2Dob: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gold-200 font-semibold mb-1">Birth Time</label>
                      <input
                        type="time"
                        required
                        value={milanForm.p2Time}
                        onChange={(e) => setMilanForm({ ...milanForm, p2Time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gold-200 font-semibold mb-1">Birth Place / City</label>
                    <input
                      type="text"
                      required
                      value={milanForm.p2Place}
                      onChange={(e) => setMilanForm({ ...milanForm, p2Place: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-900 fill-rose-900" />
                <span>Calculate 36 Guna Milan & Compatibility</span>
              </button>
            </form>
          </div>

          {/* Guna Milan Results */}
          {milanResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gold-500/15 text-center sm:text-left">
                <div>
                  <span className="text-xs text-gold-400 uppercase font-bold tracking-wider">
                    Compatibility Verdict
                  </span>
                  <h3 className={`font-serif text-3xl font-extrabold ${milanResult.verdictColor} mt-1`}>
                    {milanResult.verdict}
                  </h3>
                  <p className="text-xs text-gold-200/80 mt-1">
                    Matching between <strong className="text-gold-200">{milanResult.partner1Name}</strong> & <strong className="text-gold-200">{milanResult.partner2Name}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-gold-500/30">
                    <span className="text-[10px] text-gold-400 uppercase block font-bold">Total Score</span>
                    <strong className="text-4xl font-serif font-extrabold text-gold-200">
                      {milanResult.totalScore}
                      <span className="text-lg text-gold-400/60">/36</span>
                    </strong>
                    <span className="text-[11px] text-gold-300 block font-medium">({milanResult.percentage}% Match)</span>
                  </div>
                </div>
              </div>

              {/* Ashtakoota Score Table */}
              <div className="overflow-x-auto rounded-2xl border border-gold-500/20">
                <table className="w-full text-left text-xs">
                  <thead className="bg-celestial-950 text-gold-400 uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-3">Koota</th>
                      <th className="p-3">Area Evaluated</th>
                      <th className="p-3">Max Score</th>
                      <th className="p-3">Obtained Score</th>
                      <th className="p-3">Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold-500/10 text-gold-200/90">
                    {milanResult.scores.map((sc) => (
                      <tr key={sc.name} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 font-semibold text-gold-100">
                          {sc.name} <span className="text-[10px] text-gold-400 font-normal">({sc.hindiName})</span>
                        </td>
                        <td className="p-3 text-gold-300">{sc.area}</td>
                        <td className="p-3">{sc.maxScore}</td>
                        <td className="p-3 font-bold text-gold-300">{sc.obtainedScore}</td>
                        <td className="p-3 text-[11px] text-gold-200/70">{sc.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Remedies for the Couple */}
              <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20 space-y-3">
                <h4 className="font-serif font-bold text-sm text-gold-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Vedic Remedies & Marital Recommendations</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-gold-200/80">
                  {milanResult.remedies.map((rem, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>{rem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gold-500/15">
                <span className="text-xs text-gold-300/80">
                  Have specific queries about in-law compatibility or Manglik dosha?
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Kundli Milan Consultation for ${milanResult.partner1Name} & ${milanResult.partner2Name} (₹2,100/-)`)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 transition-all shadow-md"
                >
                  Book 1-on-1 Marriage Consultation (₹2,100/-)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: DAILY HOROSCOPE ================= */}
      {activeTab === "daily" && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Real-Time Planetary Transits
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100">
              Choose Your Zodiac Sign
            </h3>
            <p className="text-xs text-gold-200/70">
              Daily celestial guidance, scores, lucky hours, and mantras for all 12 Rashi signs.
            </p>
          </div>

          {/* 12 Signs Grid Selector */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {zodiacList.map((z) => (
              <button
                key={z.key}
                type="button"
                onClick={() => setSelectedZodiac(z.key)}
                className={`p-3.5 rounded-2xl border transition-all text-center flex flex-col items-center gap-1.5 ${
                  selectedZodiac === z.key
                    ? "bg-gradient-to-b from-wine-800 to-wine-950 border-gold-400 shadow-xl shadow-wine-950/60 scale-105"
                    : "bg-white/5 border-gold-500/20 hover:border-gold-400/40 text-gold-200/80"
                }`}
              >
                <span className="text-2xl text-gold-300">{z.symbol}</span>
                <span className="text-xs font-bold text-gold-100">{z.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Horoscope Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gold-500/15">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-wine-700 to-gold-600 border border-gold-400/40 text-gold-100 flex items-center justify-center text-3xl">
                  {horoscopeData.symbol}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gold-100">
                    {horoscopeData.sign} Daily Forecast
                  </h3>
                  <span className="text-xs text-gold-400 font-medium">
                    {horoscopeData.date} • Element: {horoscopeData.element} • Ruler: {horoscopeData.rulingPlanet}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gold-300 font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-gold-500/20">
                  Favorable Hours: {horoscopeData.favorableHours}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gold-200/90 leading-relaxed font-light">
              {horoscopeData.overview}
            </p>

            {/* 4 Spheres Scores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-gold-300">Love & Relations</span>
                  <span className="font-bold text-rose-400">{horoscopeData.love.score}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-400 h-full rounded-full" style={{ width: `${horoscopeData.love.score}%` }} />
                </div>
                <p className="text-[11px] text-gold-200/70 pt-1 leading-snug">{horoscopeData.love.text}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-gold-300">Career & Work</span>
                  <span className="font-bold text-gold-400">{horoscopeData.career.score}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gold-400 h-full rounded-full" style={{ width: `${horoscopeData.career.score}%` }} />
                </div>
                <p className="text-[11px] text-gold-200/70 pt-1 leading-snug">{horoscopeData.career.text}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-gold-300">Health & Vitality</span>
                  <span className="font-bold text-emerald-400">{horoscopeData.health.score}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${horoscopeData.health.score}%` }} />
                </div>
                <p className="text-[11px] text-gold-200/70 pt-1 leading-snug">{horoscopeData.health.text}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-gold-300">Finances & Luck</span>
                  <span className="font-bold text-amber-400">{horoscopeData.finances.score}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: `${horoscopeData.finances.score}%` }} />
                </div>
                <p className="text-[11px] text-gold-200/70 pt-1 leading-snug">{horoscopeData.finances.text}</p>
              </div>
            </div>

            {/* Lucky Elements & Daily Mantra */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-wine-950 to-celestial-950 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4 flex-wrap">
                <div>
                  <span className="text-[10px] text-gold-400 uppercase block font-semibold">Lucky Number</span>
                  <strong className="text-gold-200 text-sm">{horoscopeData.luckyNumber}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-gold-400 uppercase block font-semibold">Lucky Color</span>
                  <strong className="text-gold-200 text-sm">{horoscopeData.luckyColor}</strong>
                </div>
              </div>

              <div className="text-right sm:max-w-md">
                <span className="text-[10px] text-gold-400 uppercase block font-semibold">Daily Vedic Beej Mantra</span>
                <span className="font-serif italic text-gold-300 text-xs">{horoscopeData.dailyMantra}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 4: CAREER GUIDANCE ================= */}
      {activeTab === "career" && (
        <div className="space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
                10th House & Karma Bhava Scrutiny
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                Career & Business Guidance Report
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                Explore suitable career directions, Job vs Business potential, high-yield industries, and optimal timing for job switches or capital deployment.
              </p>
            </div>

            <form onSubmit={handleGenerateCareer} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Rohan Mehrotra"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    defaultValue="1992-06-18"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Birth Time & Place</label>
                  <input
                    type="text"
                    required
                    defaultValue="09:20 AM, Jaipur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore Career Astrological Report</span>
              </button>
            </form>
          </div>

          {careerResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl space-y-5 animate-fadeIn">
              <h4 className="font-serif text-xl font-bold text-gold-100">
                Astrological Career Assessment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 uppercase font-semibold block">Primary Recommendation</span>
                  <strong className="text-gold-200 text-sm mt-0.5 block">{careerResult.careerType}</strong>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 uppercase font-semibold block">Planetary Alignment</span>
                  <strong className="text-gold-200 text-sm mt-0.5 block">{careerResult.rulingLords}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15 text-xs space-y-2">
                <span className="text-[10px] text-gold-400 uppercase font-semibold block">Top 4 Thriving Industries</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gold-200">
                  {careerResult.favorableSectors.map((sec: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-wine-950 to-celestial-950 border border-gold-500/20 text-xs">
                <span className="text-[10px] text-gold-400 uppercase font-semibold block">Favorable Period (Golden Window)</span>
                <p className="text-gold-200/90 mt-1">{careerResult.goldenWindow}</p>
              </div>

              <div className="pt-2 flex justify-between items-center gap-4 flex-wrap">
                <span className="text-xs text-gold-300/80">Need custom timing for your company launch or job switch?</span>
                <button
                  type="button"
                  onClick={() => onOpenBooking("Career & Business Direction Consultation (₹2,499/-)")}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300"
                >
                  Book Complete Career Consultation (₹2,499/-)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 5: YEARLY GUIDANCE ================= */}
      {activeTab === "yearly" && (
        <div className="space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Annual Transit & Varshaphala Outlook
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                Your Personalized Yearly Forecast
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                Major milestones across financial liquidity, matrimonial prospects, relocation, real estate, and wellness throughout 2026-2027.
              </p>
            </div>

            <form onSubmit={handleGenerateYearly} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Priya Saxena"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    defaultValue="1996-10-04"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <CalendarClock className="w-4 h-4" />
                <span>Generate Annual Outlook</span>
              </button>
            </form>
          </div>

          {yearlyResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl space-y-5 animate-fadeIn text-xs">
              <h4 className="font-serif text-xl font-bold text-gold-100">
                Annual Prognosis for {yearlyResult.year}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 uppercase font-semibold block">Finance & Wealth</span>
                  <p className="text-gold-200/90 mt-1 leading-relaxed">{yearlyResult.financialStatus}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 uppercase font-semibold block">Marriage & Relationships</span>
                  <p className="text-gold-200/90 mt-1 leading-relaxed">{yearlyResult.relationships}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/15">
                  <span className="text-[10px] text-gold-400 uppercase font-semibold block">Vitality & Health</span>
                  <p className="text-gold-200/90 mt-1 leading-relaxed">{yearlyResult.health}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-gold-500/20 text-gold-200/90">
                <strong className="text-gold-300 block mb-1">Key Auspicious Dates & Advice:</strong>
                {yearlyResult.guidance}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 6: NUMEROLOGY ================= */}
      {activeTab === "numerology" && (
        <div className="space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
                Pythagorean & Chaldean Vowel Vibrations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
                Numerology Calculator & Life Path
              </h3>
              <p className="text-xs sm:text-sm text-gold-200/70 mt-1">
                Decode your Life Path Number, Destiny Number, Soul Urge Number, and Personal Year.
              </p>
            </div>

            <form onSubmit={handleCalculateNumerology} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={numForm.name}
                    onChange={(e) => setNumForm({ ...numForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold-300 font-semibold mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={numForm.dob}
                    onChange={(e) => setNumForm({ ...numForm, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-celestial-950 border border-gold-500/20 text-gold-100 focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-serif text-xs sm:text-sm font-bold text-celestial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <Hash className="w-4 h-4" />
                <span>Calculate Numerology Numbers</span>
              </button>
            </form>
          </div>

          {numResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 shadow-2xl space-y-6 text-xs animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 uppercase font-bold block">Life Path Number</span>
                  <strong className="text-4xl font-serif font-extrabold text-gold-200 block my-1">
                    {numResult.lifePathNumber}
                  </strong>
                  <span className="text-[10px] text-gold-300/70">Core Purpose</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 uppercase font-bold block">Destiny Number</span>
                  <strong className="text-4xl font-serif font-extrabold text-gold-200 block my-1">
                    {numResult.destinyNumber}
                  </strong>
                  <span className="text-[10px] text-gold-300/70">Worldly Path</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 uppercase font-bold block">Soul Urge Number</span>
                  <strong className="text-4xl font-serif font-extrabold text-gold-200 block my-1">
                    {numResult.soulUrgeNumber}
                  </strong>
                  <span className="text-[10px] text-gold-300/70">Inner Desires</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 uppercase font-bold block">Personal Year</span>
                  <strong className="text-4xl font-serif font-extrabold text-gold-200 block my-1">
                    {numResult.personalYear}
                  </strong>
                  <span className="text-[10px] text-gold-300/70">Current Vibration</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-gold-500/20 space-y-2">
                <h4 className="font-serif font-bold text-sm text-gold-200">
                  Core Life Path Profile ({numResult.lifePathNumber})
                </h4>
                <p className="text-gold-200/90 leading-relaxed font-light">
                  {numResult.lifePathMeaning}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 7: LAL KITAB REMEDIES ================= */}
      {activeTab === "lal_kitab" && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-celestial-900/70 border border-gold-500/25 backdrop-blur-xl shadow-2xl">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block">
              Time-Tested Traditional Shastras
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-100 mt-1">
              Lal Kitab Remedial Prescriptions
            </h3>
            <p className="text-xs sm:text-sm text-gold-200/70 mt-1 max-w-2xl">
              Authentic, straightforward customary remedies designed to mitigate negative planetary affluxes without complex rituals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-xs">
              <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/15 space-y-2">
                <strong className="text-gold-300 font-serif text-sm block">1. Saturn (Shani) Relief Remedy</strong>
                <p className="text-gold-200/80 leading-relaxed">
                  Donate mustard oil or black sesame seeds on Saturdays. Serve water or bread to crows or stray animals. Avoid alcohol and deceit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/15 space-y-2">
                <strong className="text-gold-300 font-serif text-sm block">2. Rahu Malefic pacification</strong>
                <p className="text-gold-200/80 leading-relaxed">
                  Keep silver square piece in your wallet. Avoid clutter and electronic debris in the South-West of your bedroom.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/15 space-y-2">
                <strong className="text-gold-300 font-serif text-sm block">3. Jupiter (Guru) Financial Expansion</strong>
                <p className="text-gold-200/80 leading-relaxed">
                  Apply pure saffron or turmeric tilak on forehead and throat. Respect elders and teachers. Donate yellow gram lentils on Thursdays.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-gold-500/15 space-y-2">
                <strong className="text-gold-300 font-serif text-sm block">4. Mars (Mangal) Delay Rectification</strong>
                <p className="text-gold-200/80 leading-relaxed">
                  Recite Hanuman Chalisa daily. Distribute sweet batasha or jaggery on Tuesdays. Keep sweet relations with younger siblings.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-wine-950 to-celestial-950 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gold-200/80">
                Want a custom Lal Kitab prescription personalized to your birth degrees?
              </span>
              <button
                type="button"
                onClick={() => onOpenBooking("Lal Kitab Personalized Remedy Consultation")}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300"
              >
                Consult Astrologer Ajay Kumar Agarwal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
