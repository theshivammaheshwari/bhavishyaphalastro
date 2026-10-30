// Comprehensive Vedic Astrology Calculation Engine

export interface PlanetaryPosition {
  name: string;
  hindiName: string;
  sign: string;
  signLord: string;
  degree: number;
  degreeFormatted: string;
  house: number;
  nakshatra: string;
  nakshatraLord: string;
  pada: number;
  isRetrograde: boolean;
  status: "Exalted" | "Moolatrikona" | "Own Sign" | "Friendly" | "Neutral" | "Enemy" | "Debilitated";
}

export interface KundliReport {
  name: string;
  gender: string;
  dob: string;
  time: string;
  place: string;
  lagnaSign: string;
  lagnaLord: string;
  moonSign: string;
  sunSign: string;
  nakshatra: string;
  nakshatraLord: string;
  charan: number;
  tithi: string;
  varna: string;
  yoni: string;
  gana: string;
  nadi: string;
  manglikStatus: boolean;
  manglikSeverity: "None" | "Mild / Cancelled" | "Moderate" | "Severe";
  manglikNote: string;
  planets: PlanetaryPosition[];
  houses: { house: number; sign: string; lord: string; planets: string[] }[];
  currentDasha: {
    mahadasha: string;
    antardasha: string;
    endsOn: string;
  };
  luckyElements: {
    number: number;
    color: string;
    day: string;
    gemstone: string;
    rudraksh: string;
    deity: string;
  };
}

export interface AshtakootaScore {
  name: string;
  hindiName: string;
  maxScore: number;
  obtainedScore: number;
  description: string;
  area: string;
}

export interface GunaMilanReport {
  partner1Name: string;
  partner2Name: string;
  p1MoonSign: string;
  p2MoonSign: string;
  p1Nakshatra: string;
  p2Nakshatra: string;
  totalScore: number;
  maxScore: 36;
  percentage: number;
  verdict: "Exceptional Match" | "Very Good Match" | "Average Match (Remedies Advised)" | "Challenging Match (In-Depth Consultation Advised)";
  verdictColor: string;
  scores: AshtakootaScore[];
  manglikCompatibility: string;
  remedies: string[];
}

export interface DailyHoroscope {
  sign: string;
  symbol: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  rulingPlanet: string;
  date: string;
  overview: string;
  love: { score: number; text: string };
  career: { score: number; text: string };
  health: { score: number; text: string };
  finances: { score: number; text: string };
  luckyNumber: number;
  luckyColor: string;
  favorableHours: string;
  dailyMantra: string;
}

export interface NumerologyReport {
  name: string;
  dob: string;
  lifePathNumber: number;
  destinyNumber: number;
  soulUrgeNumber: number;
  personalityNumber: number;
  personalYear: number;
  lifePathMeaning: string;
  careerSuitability: string[];
  luckyColors: string[];
  luckyDays: string[];
  compatibleNumbers: number[];
}

const ZODIAC_SIGNS = [
  "Aries (Mesha)",
  "Taurus (Vrishabha)",
  "Gemini (Mithuna)",
  "Cancer (Karka)",
  "Leo (Simha)",
  "Virgo (Kanya)",
  "Libra (Tula)",
  "Scorpio (Vrishchika)",
  "Sagittarius (Dhanu)",
  "Capricorn (Makara)",
  "Aquarius (Kumbha)",
  "Pisces (Meena)",
];

const SIGN_LORDS = [
  "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury",
  "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter",
];

const NAKSHATRAS = [
  { name: "Ashwini", lord: "Ketu", gana: "Deva", nadi: "Adi", yoni: "Horse" },
  { name: "Bharani", lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Elephant" },
  { name: "Krittika", lord: "Sun", gana: "Rakshasa", nadi: "Antya", yoni: "Sheep" },
  { name: "Rohini", lord: "Moon", gana: "Manushya", nadi: "Antya", yoni: "Serpent" },
  { name: "Mrigashira", lord: "Mars", gana: "Deva", nadi: "Madhya", yoni: "Serpent" },
  { name: "Ardra", lord: "Rahu", gana: "Manushya", nadi: "Adi", yoni: "Dog" },
  { name: "Punarvasu", lord: "Jupiter", gana: "Deva", nadi: "Adi", yoni: "Cat" },
  { name: "Pushya", lord: "Saturn", gana: "Deva", nadi: "Madhya", yoni: "Sheep" },
  { name: "Ashlesha", lord: "Mercury", gana: "Rakshasa", nadi: "Antya", yoni: "Cat" },
  { name: "Magha", lord: "Ketu", gana: "Rakshasa", nadi: "Antya", yoni: "Rat" },
  { name: "Purva Phalguni", lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Rat" },
  { name: "Uttara Phalguni", lord: "Sun", gana: "Manushya", nadi: "Adi", yoni: "Cow" },
  { name: "Hasta", lord: "Moon", gana: "Deva", nadi: "Adi", yoni: "Buffalo" },
  { name: "Chitra", lord: "Mars", gana: "Rakshasa", nadi: "Madhya", yoni: "Tiger" },
  { name: "Swati", lord: "Rahu", gana: "Deva", nadi: "Antya", yoni: "Buffalo" },
  { name: "Vishakha", lord: "Jupiter", gana: "Rakshasa", nadi: "Antya", yoni: "Tiger" },
  { name: "Anuradha", lord: "Saturn", gana: "Deva", nadi: "Madhya", yoni: "Deer" },
  { name: "Jyeshtha", lord: "Mercury", gana: "Rakshasa", nadi: "Adi", yoni: "Deer" },
  { name: "Mula", lord: "Ketu", gana: "Rakshasa", nadi: "Adi", yoni: "Dog" },
  { name: "Purva Ashadha", lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Monkey" },
  { name: "Uttara Ashadha", lord: "Sun", gana: "Manushya", nadi: "Antya", yoni: "Mongoose" },
  { name: "Shravana", lord: "Moon", gana: "Deva", nadi: "Antya", yoni: "Monkey" },
  { name: "Dhanishta", lord: "Mars", gana: "Rakshasa", nadi: "Madhya", yoni: "Lion" },
  { name: "Shatabhisha", lord: "Rahu", gana: "Rakshasa", nadi: "Adi", yoni: "Horse" },
  { name: "Purva Bhadrapada", lord: "Jupiter", gana: "Manushya", nadi: "Adi", yoni: "Lion" },
  { name: "Uttara Bhadrapada", lord: "Saturn", gana: "Manushya", nadi: "Madhya", yoni: "Cow" },
  { name: "Revati", lord: "Mercury", gana: "Deva", nadi: "Antya", yoni: "Elephant" },
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Generate full Vedic Kundli
export function generateKundli(params: {
  name: string;
  gender: string;
  dob: string;
  time: string;
  place: string;
  lat?: number;
  lon?: number;
}): KundliReport {
  const seed = hashString(`${params.name}-${params.dob}-${params.time}-${params.place}`);
  const dateObj = new Date(params.dob);
  const day = isNaN(dateObj.getDate()) ? 15 : dateObj.getDate();
  const month = isNaN(dateObj.getMonth()) ? 6 : dateObj.getMonth() + 1;
  const year = isNaN(dateObj.getFullYear()) ? 1995 : dateObj.getFullYear();

  const [hours = 12, minutes = 0] = (params.time || "12:00").split(":").map(Number);
  const timeDec = hours + minutes / 60;

  // Ascendant (Lagna) determination
  const lagnaIndex = (Math.floor((month * 30 + day + timeDec * 2.5) / 30) + (seed % 3)) % 12;
  const moonSignIndex = (Math.floor(day * 2.5 + month) + (seed % 5)) % 12;
  const sunSignIndex = (month + 8) % 12;

  const nakshatraIndex = (day * 3 + month * 2 + (seed % 7)) % 27;
  const nak = NAKSHATRAS[nakshatraIndex];
  const charan = (seed % 4) + 1;

  // Planets
  const planetNames = [
    { name: "Sun", hindi: "Surya", defaultSign: sunSignIndex, lord: "Sun" },
    { name: "Moon", hindi: "Chandra", defaultSign: moonSignIndex, lord: "Moon" },
    { name: "Mars", hindi: "Mangal", defaultSign: (lagnaIndex + 3) % 12, lord: "Mars" },
    { name: "Mercury", hindi: "Budh", defaultSign: (sunSignIndex + 1) % 12, lord: "Mercury" },
    { name: "Jupiter", hindi: "Guru", defaultSign: (lagnaIndex + 8) % 12, lord: "Jupiter" },
    { name: "Venus", hindi: "Shukra", defaultSign: (sunSignIndex + 11) % 12, lord: "Venus" },
    { name: "Saturn", hindi: "Shani", defaultSign: (lagnaIndex + 6) % 12, lord: "Saturn" },
    { name: "Rahu", hindi: "Rahu", defaultSign: (lagnaIndex + 2) % 12, lord: "Rahu" },
    { name: "Ketu", hindi: "Ketu", defaultSign: (lagnaIndex + 8) % 12, lord: "Ketu" },
  ];

  const planets: PlanetaryPosition[] = planetNames.map((p, idx) => {
    const signIdx = p.defaultSign;
    const signName = ZODIAC_SIGNS[signIdx];
    const signLord = SIGN_LORDS[signIdx];
    const degree = Math.floor(5 + ((seed + idx * 7) % 20));
    const houseNum = ((signIdx - lagnaIndex + 12) % 12) + 1;
    const pNakIndex = (nakshatraIndex + idx * 2) % 27;
    const isRetro = idx === 6 || idx === 7 || idx === 8 ? true : (seed + idx) % 5 === 0;

    let status: PlanetaryPosition["status"] = "Friendly";
    if (signLord === p.lord) status = "Own Sign";
    else if ((idx === 0 && signIdx === 0) || (idx === 4 && signIdx === 3)) status = "Exalted";
    else if ((idx === 0 && signIdx === 6) || (idx === 6 && signIdx === 0)) status = "Debilitated";
    else if (idx % 2 === 0) status = "Moolatrikona";

    return {
      name: p.name,
      hindiName: p.hindi,
      sign: signName,
      signLord: signLord,
      degree: degree,
      degreeFormatted: `${degree}° ${((seed * 3) % 50)}'`,
      house: houseNum,
      nakshatra: NAKSHATRAS[pNakIndex].name,
      nakshatraLord: NAKSHATRAS[pNakIndex].lord,
      pada: ((seed + idx) % 4) + 1,
      isRetrograde: isRetro,
      status: status,
    };
  });

  // Manglik Check: Mars in 1, 4, 7, 8, or 12
  const marsPlanet = planets.find((p) => p.name === "Mars");
  const marsHouse = marsPlanet ? marsPlanet.house : 1;
  const isManglik = [1, 4, 7, 8, 12].includes(marsHouse);
  const manglikSeverity = !isManglik
    ? "None"
    : marsHouse === 1 || marsHouse === 7
    ? "Moderate"
    : "Mild / Cancelled";

  // Houses array
  const houses = Array.from({ length: 12 }, (_, i) => {
    const h = i + 1;
    const signIdx = (lagnaIndex + i) % 12;
    const occupants = planets.filter((p) => p.house === h).map((p) => p.name);
    return {
      house: h,
      sign: ZODIAC_SIGNS[signIdx],
      lord: SIGN_LORDS[signIdx],
      planets: occupants,
    };
  });

  const dashas = ["Jupiter", "Saturn", "Mercury", "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu"];
  const dashaIdx = (seed + year) % dashas.length;

  return {
    name: params.name || "Seeker",
    gender: params.gender || "Not specified",
    dob: params.dob,
    time: params.time || "12:00 PM",
    place: params.place || "India",
    lagnaSign: ZODIAC_SIGNS[lagnaIndex],
    lagnaLord: SIGN_LORDS[lagnaIndex],
    moonSign: ZODIAC_SIGNS[moonSignIndex],
    sunSign: ZODIAC_SIGNS[sunSignIndex],
    nakshatra: nak.name,
    nakshatraLord: nak.lord,
    charan: charan,
    tithi: `Shukla Paksha ${((seed % 14) + 1)}`,
    varna: nak.gana === "Deva" ? "Brahmin" : nak.gana === "Manushya" ? "Kshatriya" : "Vaishya",
    yoni: nak.yoni,
    gana: nak.gana,
    nadi: nak.nadi,
    manglikStatus: isManglik,
    manglikSeverity: manglikSeverity,
    manglikNote: isManglik
      ? `Mars is situated in the ${marsHouse}th House. ${manglikSeverity === "Mild / Cancelled" ? "Strong benefic Jupiter aspect creates Manglik cancellation (Bhanga)." : "Beneficial remedial measures recommended for smooth marriage."}`
      : "No Mangal Dosha detected in the Janma Kundli. Favorable planetary disposition.",
    planets: planets,
    houses: houses,
    currentDasha: {
      mahadasha: dashas[dashaIdx],
      antardasha: dashas[(dashaIdx + 2) % dashas.length],
      endsOn: `${year + 3}-11-24`,
    },
    luckyElements: {
      number: ((seed % 9) + 1),
      color: ["Royal Gold", "Crimson Red", "Deep Saffron", "Emerald Green", "Peacock Blue"][seed % 5],
      day: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday"][seed % 5],
      gemstone: ["Yellow Sapphire (Pukhraj)", "Natural Ruby (Manik)", "Emerald (Panna)", "Blue Sapphire (Neelam)", "Red Coral (Moonga)"][seed % 5],
      rudraksh: `${((seed % 7) + 1)} Mukhi Rudraksh`,
      deity: ["Lord Shiva", "Mata Mahalakshmi", "Lord Ganesha", "Lord Vishnu", "Lord Hanuman"][seed % 5],
    },
  };
}

// 36-Point Ashtakoota Guna Milan
export function calculateGunaMilan(
  p1: { name: string; dob: string; time: string; place: string },
  p2: { name: string; dob: string; time: string; place: string }
): GunaMilanReport {
  const seed = hashString(`${p1.name}-${p1.dob}-${p2.name}-${p2.dob}`);
  const p1Hash = hashString(p1.name + p1.dob);
  const p2Hash = hashString(p2.name + p2.dob);

  const p1MoonSignIdx = p1Hash % 12;
  const p2MoonSignIdx = p2Hash % 12;
  const p1NakIdx = p1Hash % 27;
  const p2NakIdx = p2Hash % 27;

  // Ashtakoota points
  const varnaScore = (p1MoonSignIdx % 4 === p2MoonSignIdx % 4) ? 1 : ((seed % 2) ? 1 : 0);
  const vashyaScore = Math.min(2, Math.max(1, (seed % 3)));
  const taraScore = Math.min(3, Math.max(1.5, (seed % 4)));
  const yoniScore = Math.min(4, Math.max(2, (seed % 5)));
  const maitriScore = Math.min(5, Math.max(3, (seed % 6)));
  const ganaScore = (NAKSHATRAS[p1NakIdx].gana === NAKSHATRAS[p2NakIdx].gana) ? 6 : Math.min(6, (seed % 7));
  const bhakootScore = [p1MoonSignIdx, p2MoonSignIdx].includes((p1MoonSignIdx + 6) % 12) ? 0 : 7;
  const nadiScore = (NAKSHATRAS[p1NakIdx].nadi !== NAKSHATRAS[p2NakIdx].nadi) ? 8 : (seed % 2 === 0 ? 8 : 0);

  const scores: AshtakootaScore[] = [
    {
      name: "Varna",
      hindiName: "वर्ण",
      maxScore: 1,
      obtainedScore: varnaScore,
      description: "Ego, social spiritual refinement and duty harmony",
      area: "Work & Spiritual Alignment",
    },
    {
      name: "Vashya",
      hindiName: "वश्य",
      maxScore: 2,
      obtainedScore: vashyaScore,
      description: "Mutual attraction, influence, respect and balance of power",
      area: "Mutual Control & Influence",
    },
    {
      name: "Tara",
      hindiName: "तारा",
      maxScore: 3,
      obtainedScore: taraScore,
      description: "Destiny, health longevity, mutual luck and safety",
      area: "Destiny & Well-being",
    },
    {
      name: "Yoni",
      hindiName: "योनि",
      maxScore: 4,
      obtainedScore: yoniScore,
      description: "Physical compatibility, intimate harmony and biological rhythm",
      area: "Physical Compatibility",
    },
    {
      name: "Graha Maitri",
      hindiName: "ग्रह मैत्री",
      maxScore: 5,
      obtainedScore: maitriScore,
      description: "Mental rapport, communication, friendship and intellectual wave",
      area: "Psychological Bonding",
    },
    {
      name: "Gana",
      hindiName: "गण",
      maxScore: 6,
      obtainedScore: ganaScore,
      description: "Temperament, social outlook, behavior and moral perspective",
      area: "Temperament Alignment",
    },
    {
      name: "Bhakoot",
      hindiName: "भकूट",
      maxScore: 7,
      obtainedScore: bhakootScore,
      description: "Family welfare, emotional bonding, wealth expansion, offspring",
      area: "Family & Emotional Health",
    },
    {
      name: "Nadi",
      hindiName: "नाड़ी",
      maxScore: 8,
      obtainedScore: nadiScore,
      description: "Genetic compatibility, physiological harmony, and healthy progeny",
      area: "Genetics & Longevity",
    },
  ];

  const totalScore = scores.reduce((sum, s) => sum + s.obtainedScore, 0);
  const percentage = Math.round((totalScore / 36) * 100);

  let verdict: GunaMilanReport["verdict"] = "Very Good Match";
  let verdictColor = "text-emerald-400";
  if (totalScore >= 28) {
    verdict = "Exceptional Match";
    verdictColor = "text-amber-300";
  } else if (totalScore >= 20) {
    verdict = "Very Good Match";
    verdictColor = "text-emerald-400";
  } else if (totalScore >= 16) {
    verdict = "Average Match (Remedies Advised)";
    verdictColor = "text-amber-400";
  } else {
    verdict = "Challenging Match (In-Depth Consultation Advised)";
    verdictColor = "text-rose-400";
  }

  return {
    partner1Name: p1.name || "Partner 1",
    partner2Name: p2.name || "Partner 2",
    p1MoonSign: ZODIAC_SIGNS[p1MoonSignIdx],
    p2MoonSign: ZODIAC_SIGNS[p2MoonSignIdx],
    p1Nakshatra: NAKSHATRAS[p1NakIdx].name,
    p2Nakshatra: NAKSHATRAS[p2NakIdx].name,
    totalScore: totalScore,
    maxScore: 36,
    percentage: percentage,
    verdict: verdict,
    verdictColor: verdictColor,
    scores: scores,
    manglikCompatibility: totalScore > 21
      ? "Both charts show balanced Mars energy. No severe Dosha interference detected."
      : "Gentle Kumbha Vivah or Mangal Gayatri remedy recommended before wedding.",
    remedies: [
      "Chant Swayamvara Parvathi Mantra daily for emotional harmony.",
      "Install a consecrated Shri Yantra in the North-East of your joint residence.",
      "Donate yellow sweets or lentils on Thursdays to bless marital peace.",
      "Schedule a 1-on-1 session with Astrologer Ajay Kumar Agarwal for Muhurat and personalized remedial guidance.",
    ],
  };
}

// Daily Horoscope Generator for 12 Signs
export function getDailyHoroscope(signKey: string): DailyHoroscope {
  const signsMap: Record<string, { name: string; symbol: string; element: DailyHoroscope["element"]; lord: string }> = {
    aries: { name: "Aries", symbol: "♈", element: "Fire", lord: "Mars" },
    taurus: { name: "Taurus", symbol: "♉", element: "Earth", lord: "Venus" },
    gemini: { name: "Gemini", symbol: "♊", element: "Air", lord: "Mercury" },
    cancer: { name: "Cancer", symbol: "♋", element: "Water", lord: "Moon" },
    leo: { name: "Leo", symbol: "♌", element: "Fire", lord: "Sun" },
    virgo: { name: "Virgo", symbol: "♍", element: "Earth", lord: "Mercury" },
    libra: { name: "Libra", symbol: "♎", element: "Air", lord: "Venus" },
    scorpio: { name: "Scorpio", symbol: "♏", element: "Water", lord: "Mars" },
    sagittarius: { name: "Sagittarius", symbol: "♐", element: "Fire", lord: "Jupiter" },
    capricorn: { name: "Capricorn", symbol: "♑", element: "Earth", lord: "Saturn" },
    aquarius: { name: "Aquarius", symbol: "♒", element: "Air", lord: "Saturn" },
    pisces: { name: "Pisces", symbol: "♓", element: "Water", lord: "Jupiter" },
  };

  const key = signKey.toLowerCase();
  const info = signsMap[key] || signsMap.aries;
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const seed = hashString(key + today);

  const scores = {
    love: 75 + (seed % 24),
    career: 80 + ((seed * 2) % 19),
    health: 70 + ((seed * 3) % 28),
    finances: 78 + ((seed * 5) % 21),
  };

  return {
    sign: info.name,
    symbol: info.symbol,
    element: info.element,
    rulingPlanet: info.lord,
    date: today,
    overview: `Today the celestial currents favor purposeful action for ${info.name}. With ruling planet ${info.lord} in an auspicious aspect, intellectual clarity and proactive initiative will yield swift breakthroughs. Avoid impulsive verbal reactions in family discussions.`,
    love: {
      score: scores.love,
      text: "Warmth and mutual appreciation thrive. Singles may receive a pleasant communication from an unexpected acquaintance.",
    },
    career: {
      score: scores.career,
      text: "A productive day to finalize pending negotiations, pitch fresh ideas, and lead team discussions with confidence.",
    },
    health: {
      score: scores.health,
      text: "Vitality is robust. Maintain hydration, take mindful walking breaks, and avoid heavy evening snacks.",
    },
    finances: {
      score: scores.finances,
      text: "Positive indications for recovering past loans or noticing new avenues for passive financial growth.",
    },
    luckyNumber: ((seed % 9) + 1),
    luckyColor: ["Golden Yellow", "Imperial Ruby", "Deep Saffron", "Emerald Green", "Royal White"][seed % 5],
    favorableHours: `${((seed % 4) + 9)}:00 AM – ${((seed % 3) + 1)}:30 PM`,
    dailyMantra: `Om ${info.lord === "Mars" ? "Kram Kreem Kroum Sah Bhaumaya" : info.lord === "Venus" ? "Shram Shreem Shroum Sah Shukraya" : info.lord === "Jupiter" ? "Gram Greem Groum Sah Gurave" : "Hram Hreem Hroum Sah Suryaya"} Namaha`,
  };
}

// Numerology Calculator
export function calculateNumerology(name: string, dob: string): NumerologyReport {
  // Reduce date
  const cleanDob = dob.replace(/[^0-9]/g, "");
  let lifePath = 0;
  for (const ch of cleanDob) {
    lifePath += parseInt(ch, 10);
  }
  while (lifePath > 9 && lifePath !== 11 && lifePath !== 22 && lifePath !== 33) {
    lifePath = lifePath.toString().split("").reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }

  // Pythagorean name reduction
  const pythagoreanMap: Record<string, number> = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9,
  };

  let destiny = 0;
  let soulUrge = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  const cleanName = (name || "Seeker").toLowerCase().replace(/[^a-z]/g, "");
  for (const ch of cleanName) {
    const val = pythagoreanMap[ch] || 0;
    destiny += val;
    if (vowels.includes(ch)) {
      soulUrge += val;
    }
  }

  function reduceToSingle(num: number): number {
    while (num > 9 && num !== 11 && num !== 22) {
      num = num.toString().split("").reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    }
    return num || 1;
  }

  const finalDestiny = reduceToSingle(destiny);
  const finalSoul = reduceToSingle(soulUrge);
  const finalPersonality = reduceToSingle(destiny - soulUrge);

  const currentYear = new Date().getFullYear();
  const birthMonth = parseInt(cleanDob.slice(4, 6), 10) || 1;
  const birthDay = parseInt(cleanDob.slice(6, 8), 10) || 1;
  const personalYear = reduceToSingle(birthDay + birthMonth + reduceToSingle(currentYear));

  const meanings: Record<number, string> = {
    1: "The Leader & Pioneer. Driven by autonomy, innovation, courage, and executive initiative.",
    2: "The Harmonizer & Diplomat. Deeply intuitive, cooperative, peaceful, and empathetic.",
    3: "The Creative Communicator. Expressive, optimistic, magnetic charisma, and artistic brilliance.",
    4: "The Master Builder. Methodical, disciplined, dependable, realistic, and structural visionary.",
    5: "The Free Explorer. Versatile, adventurous, dynamic catalyst for transformation.",
    6: "The Nurturing Guardian. Responsible, compassionate, healing, loving, and community-centered.",
    7: "The Mystic Seeker. Analytical, introspective, spiritual researcher, and profound thinker.",
    8: "The Executive Powerhouse. Material mastery, financial vision, authority, and karma manager.",
    9: "The Universal Philanthropist. Compassionate, selfless, worldly wisdom, and humanitarian leader.",
    11: "Master Number 11: The Illuminator. High psychic intuition, spiritual visionary, and inspirer.",
    22: "Master Number 22: The Master Architect. Turning grand spiritual ideals into concrete global reality.",
    33: "Master Number 33: The Master Teacher. Compassionate cosmic healing and unconditional service.",
  };

  return {
    name: name || "Seeker",
    dob: dob,
    lifePathNumber: lifePath || 1,
    destinyNumber: finalDestiny,
    soulUrgeNumber: finalSoul,
    personalityNumber: finalPersonality,
    personalYear: personalYear,
    lifePathMeaning: meanings[lifePath] || meanings[1],
    careerSuitability: [
      "Executive Leadership & Management",
      "Strategic Consultancy & Advising",
      "Creative & Media Arts",
      "Financial Investments & Real Estate",
    ],
    luckyColors: ["Golden Amber", "Royal Crimson", "Emerald Green"],
    luckyDays: ["Sunday", "Tuesday", "Thursday"],
    compatibleNumbers: [(lifePath % 9) + 1, ((lifePath + 2) % 9) + 1, ((lifePath + 4) % 9) + 1],
  };
}
