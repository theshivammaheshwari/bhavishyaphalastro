export interface ServiceItem {
  id: string;
  title: string;
  category: "service" | "product";
  description: string;
  price?: number;
  priceFormatted?: string;
  details?: string[];
  image: string;
  badge?: string;
}

export interface YantraItem {
  id: string;
  title: string;
  type: "yantra" | "pendant";
  price: number;
  image: string;
  deity: string;
  benefits: string;
  mantra: string;
  placement: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "awards" | "clients" | "articles" | "astrologers" | "social";
  caption: string;
  image: string;
  badge?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
}

export const SITE_CONFIG = {
  name: "Bhavishyaphal Astrology Services",
  shortName: "Bhavishyaphal",
  tagline: "Vedic Wisdom • Modern Clarity",
  founder: "Astrologer Ajay Kumar Agarwal",
  founderTitle: "India's Most Trusted & Accurate Astrologer of the Year",
  phone: "+91 91160 55424",
  phoneRaw: "919116055424",
  email: "info@bhavishyaphalastro.online",
  instagram: "https://www.instagram.com/bhavishyaphalastro8?igsh=MW9icWgwaXpsNnhvcQ==",
  instagramHandle: "@bhavishyaphalastro8",
  googleBusiness: "https://share.google/Tw00J5OVSEioHorRd",
  location: "Jaipur, Rajasthan, India (Serving Global Clients Online)",
  whatsappLink: "https://wa.me/919116055424?text=Hello%20Bhavishyaphal%20Astrology%20Services%2C%20I%20want%20to%20book%20a%20consultation.",
};

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "astro-consultancy",
    title: "Astro Consultancy",
    category: "service",
    description: "Deep personalized birth-chart interpretation covering major life crossroads, planetary cycles (Dasha/Gochar), relationships, education and prosperity.",
    image: "/images/469921-scaled_60.jpg",
    badge: "Most Popular",
  },
  {
    id: "vastu-consultancy",
    title: "Vastu Consultancy",
    category: "service",
    description: "Practical Vedic architecture & energy balancing for homes, corporate offices, and commercial sites without unnecessary structural demolition.",
    image: "/images/images_61",
    badge: "Spatial Harmony",
  },
  {
    id: "numerology",
    title: "Vedic & Chaldean Numerology",
    category: "service",
    description: "Unlock secret vibration codes in your name, date of birth, mobile number, and business identity for amplified success and luck.",
    image: "/images/images_62",
    badge: "Vibrational Math",
  },
  {
    id: "palmistry",
    title: "Hastrekha (Palmistry)",
    category: "service",
    description: "Ancient palm-line, mount, and symbol analysis revealing innate psychological tendencies, karmic patterns, and vital life phases.",
    image: "/images/1f7de6ef-b5ac-4f33-ac42-77ec460ce260_63.png",
    badge: "Ancient Science",
  },
];

export const ASTRO_CONSULTATION_PACKAGES: ServiceItem[] = [
  {
    id: "all-life",
    title: "1. All Life Comprehensive Consultancy",
    category: "service",
    price: 5100,
    priceFormatted: "₹5,100/-",
    description: "Complete holistic birth-chart decoding encompassing education, marriage, career, investments, health, longevity and planetary remedies.",
    image: "/images/2aa09003a3b1e47485773b8fe72357cb-4_64.jpg",
    details: [
      "Full Vedic & KP Horoscope analysis",
      "Career, Business & Financial timeline",
      "Marriage, Children & Family wellbeing",
      "Custom Gemstone & Rudraksh prescription",
      "Interactive 45-min one-to-one consultation",
    ],
    badge: "Flagship",
  },
  {
    id: "kundli-milan",
    title: "2. Kundli Milan — Bride & Groom",
    category: "service",
    price: 2100,
    priceFormatted: "₹2,100/-",
    description: "Comprehensive 36-Guna matching, Manglik dosha scrutiny, psychological compatibility, longevity and in-law relations.",
    image: "/images/6efde35bfb57e31eb74602406c07bee4_65.jpg",
    details: [
      "Ashtakoota 36-Point Compatibility",
      "Mangal Dosha & Bhakoot/Nadi Dosha checks",
      "Temperament & Financial longevity",
      "Vedic remedial rectifications",
    ],
  },
  {
    id: "marriage-timing",
    title: "3. Marriage Time & Soulmate Prediction",
    category: "service",
    price: 1500,
    priceFormatted: "₹1,500/-",
    description: "Accurate planetary timing for when you will get married, identifying delay factors, nature of partner, and auspicious marriage windows.",
    image: "/images/2f0df2cc7a055f3ed3f4b06c4c680694_66.jpg",
    details: [
      "Expected month & year of marriage",
      "Direction & background of life partner",
      "Solutions for Vivah Badha / delays",
    ],
  },
  {
    id: "child-birth",
    title: "4. Child Birth Time Prediction & Muhurat",
    category: "service",
    price: 3100,
    priceFormatted: "₹3,100/-",
    description: "Planetary feasibility and timing for parenthood, Santan Prapti yoga, obstacles analysis, plus auspicious delivery birth-time calculation (Muhurat).",
    image: "/images/0a988ea962bca715768817691444e5d3_67.jpg",
    details: [
      "5th House & Jupiter fertility examination",
      "Favorable conception / delivery windows",
      "Auspicious Caesarean/Delivery birth-time calculation",
    ],
  },
  {
    id: "education",
    title: "5. Education & Stream Selection",
    category: "service",
    price: 1100,
    priceFormatted: "₹1,100/-",
    description: "Identify inherent intellectual gifts, best suited academic stream (Science, Commerce, Arts, Law, Tech, Medicine) for accelerated career achievement.",
    image: "/images/118bdeb457b5f6b2974193ec28255a9e-1_68.jpg",
    details: [
      "Mercury & Jupiter cognitive strength evaluation",
      "Competitive exam (UPSC, NEET, JEE) prospects",
      "Focus, memory & foreign study potential",
    ],
  },
  {
    id: "career-business",
    title: "6. Career, Job vs Business Direction",
    category: "service",
    price: 2499,
    priceFormatted: "₹2,499/-",
    description: "Decisive clarity on whether you should pursue salaried employment or independent business, optimal sectors, and partnership success.",
    image: "/images/asset_69",
    details: [
      "Job vs Business determination",
      "Government vs Private vs Multi-National sector",
      "High-profit industry mapping",
      "Favorable period for job change or startup",
    ],
  },
  {
    id: "litigation",
    title: "7. Litigation, Legal & Property Matters",
    category: "service",
    price: 2499,
    priceFormatted: "₹2,499/-",
    description: "Astrological timing analysis for court disputes, property claims, matrimonial settlements and strategic resolution dates.",
    image: "/images/a848bf1e7efa83d06cebbc7bd3a57d3b_70.jpg",
    details: [
      "6th & 8th House analysis for legal outcomes",
      "Favorable out-of-court settlement windows",
      "Karmic remedies to reduce hostility",
    ],
  },
  {
    id: "gemstone-recommendation",
    title: "8. Certified Gem Stone Recommendation",
    category: "service",
    price: 1100,
    priceFormatted: "₹1,100/-",
    description: "Precise prescription of planetary gemstones based on your ascendant, Yogakaraka planets, avoiding malefic gemstones that cause adverse side-effects.",
    image: "/images/551476f023a2c23ba63c2722f651a42d_71.jpg",
    details: [
      "Ascendant & Dasha compatible stones only",
      "Exact carat weight, metal, and finger specification",
      "Energization & wearing Muhurat guidelines",
    ],
  },
];

export const SACRED_YANTRAS: YantraItem[] = [
  {
    id: "shri-yantra",
    title: "Shri Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/asset_77",
    deity: "Goddess Tripurasundari / Mahalakshmi",
    benefits: "Supreme sacred geometry for immense wealth, spiritual elevation, cosmic harmony, and removal of Vastu doshas.",
    mantra: "Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed",
    placement: "North or North-East direction on a red silk cloth.",
  },
  {
    id: "mahalakshmi-yantra",
    title: "Mahalakshmi Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/50201347_Mahalakshmi_4_result_700x700-1_78.webp",
    deity: "Mata Mahalakshmi",
    benefits: "Attracts non-stop financial influx, clears long-standing debts, and protects family wealth.",
    mantra: "Om Hreem Shreem Lakshmibhayo Namaha",
    placement: "Cash safe, home altar, or business cash counter.",
  },
  {
    id: "kubera-yantra",
    title: "Kubera Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/images-2026-07-28T113943.910_79.webp",
    deity: "Lord Kubera (Treasurer of Gods)",
    benefits: "Amplifies capital accumulation, business revenue, and guards against unexpected monetary drain.",
    mantra: "Om Yakshaya Kuberaya Vaishravanaya Dhana-Dhanyadi Pataye",
    placement: "North wall of your office, store, or living room.",
  },
  {
    id: "vyapara-vriddhi-yantra",
    title: "Vyapara Vriddhi Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/asset_80",
    deity: "Lord Ganesha & Goddess Lakshmi",
    benefits: "Expands customer footfall, drives lucrative commercial deals, and dissolves business stagnancy.",
    mantra: "Om Gam Ganapataye Namaha • Om Shreem Mahalakshmyai Namah",
    placement: "Facing east or north in showroom, shop, or corporate office.",
  },
  {
    id: "sarva-karya-siddhi-yantra",
    title: "Sarva Karya Siddhi Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/images-2026-07-28T114038.255_81.webp",
    deity: "Universal Cosmic Energies",
    benefits: "Guarantees success in endeavors, competitive tests, job interviews, and removes stubborn blockages.",
    mantra: "Om Hreem Kleem Namaha",
    placement: "Personal temple, study room, or work desk.",
  },
  {
    id: "sudarshana-yantra",
    title: "Sudarshana Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/images-2026-07-28T114053.935_82.webp",
    deity: "Lord Maha Vishnu",
    benefits: "Impenetrable protective shield against black magic, negative evil eye (Buri Nazar), psychic attacks, and accidents.",
    mantra: "Om Namo Bhagavate Maha Sudarshanaya",
    placement: "Facing the main entrance door or East wall.",
  },
  {
    id: "narasimha-yantra",
    title: "Narasimha Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/MYH52_83.webp",
    deity: "Bhagwan Narasimha",
    benefits: "Eliminates fierce enemies, wins court disputes, drives away demonic fears and debilitating illness.",
    mantra: "Om Hreem Kshrong Ugram Veeram Maha Vishnum",
    placement: "North-East or puja area facing south-west.",
  },
  {
    id: "maha-mrityunjaya-yantra",
    title: "Maha Mrityunjaya Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/81BCd8saGzL._AC_UF8941000_QL80__84.webp",
    deity: "Lord Shiva",
    benefits: "Bestows longevity, cures severe chronic illness, shields from untimely demise (Akaal Mrityu).",
    mantra: "Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam",
    placement: "Beside the bedside or family puja shrine.",
  },
  {
    id: "katyayani-yantra",
    title: "Katyayani Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/51RDknzSg9L._AC_UY1100__85.webp",
    deity: "Mata Katyayani",
    benefits: "Fast-tracks marriage for eligible women, removes obstacles to wedlock, and attracts ideal loving grooms.",
    mantra: "Katyayani Mahamaye Mahayoginyadheeshwari",
    placement: "Pooja place in South-West or North-East.",
  },
  {
    id: "swayamvara-parvathi-yantra",
    title: "Swayamvara Parvathi Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/71jGRIkJoPL._AC_UF350350_QL80__86.webp",
    deity: "Mata Parvathi & Lord Shiva",
    benefits: "Harmonizes strained marital relationships, reconciles estranged couples, and secures marital bliss.",
    mantra: "Om Hreem Yoginim Yogini Yogeshwari Yoga Bhayankari",
    placement: "Master bedroom puja shelf or East wall.",
  },
  {
    id: "saraswati-yantra",
    title: "Saraswati Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/images-2026-07-28T114201.976_87.webp",
    deity: "Mata Saraswati",
    benefits: "Sharpens intellect, memory retention, musical/artistic genius, and exceptional academic results.",
    mantra: "Om Aim Saraswatyai Namaha",
    placement: "Study desk or library shelf facing East.",
  },
  {
    id: "navagraha-yantra",
    title: "Navagraha Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/images-2026-07-28T114239.206_90.webp",
    deity: "All Nine Celestial Planets",
    benefits: "Pacifies doshas of Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu simultaneously.",
    mantra: "Om Brahma Murari Tripurantkari Bhanuh Shashih Bhumi Suto Budhashcha",
    placement: "Center of home (Brahmasthan) or living room.",
  },
  {
    id: "vastu-yantra",
    title: "Vastu Dosh Nivaran Yantra",
    type: "yantra",
    price: 3999,
    image: "/images/original-imahkfgx5z2h2zdu_91.webp",
    deity: "Vastu Purusha",
    benefits: "Neutralizes architectural flaws, cut-corners, incorrect toilets or kitchens without demolition.",
    mantra: "Om Vastu Purushaya Namaha",
    placement: "Central wall or defective directional corner.",
  },
  // Pendants
  {
    id: "shri-yantra-pendant",
    title: "Shri Yantra Energized Sacred Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/WhatsApp_Image_2026-06-13_at_12.52.25_PM_1-1_92.webp",
    deity: "Mata Mahalakshmi",
    benefits: "Wearable energized sacred amulet for continuous aura empowerment, charismatic aura, and good luck.",
    mantra: "Om Shreem Hreem Shreem Kamale Kamalalaye Namaha",
    placement: "Wear around neck on red silk thread or gold/silver chain.",
  },
  {
    id: "kubera-pendant",
    title: "Kubera Wealth Energized Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/images-2026-07-28T114317.654_93.webp",
    deity: "Lord Kubera",
    benefits: "Constant magnet for prosperity, high sales closing rate, and protection from financial loss.",
    mantra: "Om Kuberaya Namaha",
    placement: "Wear around neck touching the Anahata (Heart) chakra.",
  },
  {
    id: "maha-mrityunjaya-pendant",
    title: "Maha Mrityunjaya Sacred Protection Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/images-2026-07-28T114329.301_94.webp",
    deity: "Lord Shiva",
    benefits: "Shields against sudden hazards, promotes vitality, reduces anxiety, and grants long healthy life.",
    mantra: "Om Jum Sah Palay Palay Sah Jum Om",
    placement: "Wear around neck on yellow or white thread.",
  },
  {
    id: "sudarshana-pendant",
    title: "Sudarshana Divine Shield Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/images-2026-07-28T114340.407_95.webp",
    deity: "Bhagwan Vishnu Sudarshana Chakra",
    benefits: "Ultimate personal armor protecting the wearer from envy, psychic hostility, and negative energies.",
    mantra: "Om Sudarshanaya Namaha",
    placement: "Wear around neck on black or red thread.",
  },
  {
    id: "navagraha-pendant",
    title: "Navagraha Planetary Harmony Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/images-2026-07-28T114354.782_96.webp",
    deity: "Nine Cosmic Planets",
    benefits: "Balances all 9 planetary currents inside the body meridian system.",
    mantra: "Om Navagrahaya Namaha",
    placement: "Wear every day touching the chest.",
  },
  {
    id: "saraswati-pendant",
    title: "Saraswati Vidya & Intellect Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/81eRQeTyTIL._AC_UY1100__97.webp",
    deity: "Mata Saraswati",
    benefits: "Bestowed upon students and creative professionals for high mental clarity and focus.",
    mantra: "Om Aim Kleem Sauh Saraswatyai Namah",
    placement: "Wear around neck during study and examinations.",
  },
  {
    id: "sarva-raksha-pendant",
    title: "Sarva Raksha Kavacha Sacred Pendant",
    type: "pendant",
    price: 3999,
    image: "/images/images-2026-07-28T114506.058_98.webp",
    deity: "All Divine Guardians",
    benefits: "All-encompassing protective kavacha infused with Vedic hymns for complete physical & spiritual safety.",
    mantra: "Om Raksha Raksha Hum Phat Svaha",
    placement: "Wear on neck or upper arm.",
  },
];

export const REMEDIAL_PRODUCTS = [
  {
    id: "rudraksh",
    title: "Authentic Himalayan Rudraksh",
    subtitle: "1 Mukhi to 21 Mukhi Certified Beads",
    description: "Lab-tested genuine Nepali & Indonesian beads consecrated with traditional Pran Pratishtha rituals to awaken spiritual and remedial potency.",
    image: "/images/WhatsApp-Image-2026-08-06-at-1.05.02-PM_106.jpeg",
    badge: "Energized",
    action: "Enquire on WhatsApp",
  },
  {
    id: "gemstones",
    title: "Natural Navgraha Gemstones",
    subtitle: "Untreated, Unheated Certified Precious Stones",
    description: "Yellow Sapphire (Pukhraj), Blue Sapphire (Neelam), Ruby (Manik), Emerald (Panna), Red Coral (Moonga), and Diamond/Opal selected for astrological efficacy.",
    image: "/images/WhatsApp-Image-2026-08-06-at-1.26.35-PM_107.jpeg",
    badge: "Govt Lab Certified",
    action: "Check Recommendation",
  },
  {
    id: "crystals",
    title: "Healing Crystal Collection & Bracelets",
    subtitle: "45 Unique Crystal Varieties & Charged Malas",
    description: "Amethyst, Rose Quartz, Pyrite, Citrine, Black Tourmaline, and Tiger Eye prepared as bracelets and pendants to elevate personal frequency and attract wealth.",
    image: "/images/7bfa6f2af4c4b072282779be300e043f_108.jpg",
    badge: "Aura Balancing",
    action: "Explore Crystals",
  },
  {
    id: "pooja-anushthan",
    title: "Vedic Pooja & Sacred Anushthan",
    subtitle: "Conducted by Learned Vedic Scholars",
    description: "Navagraha Shanti, Kaal Sarp Dosh Nivaran, Maha Mrityunjaya Jaap, Mangal Dosh Shanti, and Baglamukhi Anushthan conducted according to scriptural Vidhi.",
    image: "/images/f607680cec97d790432f3877d1bb8254_109.jpg",
    badge: "Sacred Rituals",
    action: "Book Anushthan",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Awards
  {
    id: "award-1",
    title: "Best Astro Researcher Award",
    category: "awards",
    caption: "Conferred by Sh GD Vishishth Ji and Sh Arun Bansal Ji for stellar astrological research.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM-1_53.jpeg",
    badge: "National Award",
  },
  {
    id: "award-2",
    title: "Most Prominent and Accurate Astrologer Award",
    category: "awards",
    caption: "Presented by Sh Satish Sharma Ji in recognition of uncanny prediction accuracy.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM_54.jpeg",
    badge: "Excellence",
  },
  {
    id: "award-3",
    title: "India's Most Trusted Astrologer of the Year",
    category: "awards",
    caption: "Honored by Ex Indian Cricketer & National Team Coach Sh Nayan Mongia Ji.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-2_38.jpeg",
    badge: "Prestigious",
  },
  {
    id: "award-4",
    title: "Astrologer of the Year Citation",
    category: "awards",
    caption: "Award ceremony with legendary sports and national icons.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM_57.jpeg",
    badge: "Honor",
  },
  {
    id: "award-5",
    title: "Lifetime Achievement in Astrology",
    category: "awards",
    caption: "Presented by Renowned Celebrity Astrologer Smt Y Rakhi.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-3_58.jpeg",
    badge: "Lifetime Honor",
  },
  {
    id: "award-6",
    title: "Occult Shiromani National Award",
    category: "awards",
    caption: "Conferred by Sh Arun Bansal Ji for exceptional contributions to Vedic occult sciences.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-2_59.jpeg",
    badge: "Shiromani Award",
  },

  // Clients
  {
    id: "client-1",
    title: "With Drilling Today Magazine Owner Sh Manish Bharadwaj",
    category: "clients",
    caption: "Distinguished astrological advisory session with media house owner.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.03-PM_44.jpeg",
    badge: "Media Client",
  },
  {
    id: "client-2",
    title: "With Bollywood Director Sh Paras Mehta",
    category: "clients",
    caption: "Film release muhurat and creative astrological consultation.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.02-PM_45.jpeg",
    badge: "Bollywood",
  },
  {
    id: "client-3",
    title: "With Mumbai Income Tax Commissioner",
    category: "clients",
    caption: "High-level personal horoscope reading for senior government leadership.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.00-PM-3_49.jpeg",
    badge: "Civil Services",
  },
  {
    id: "client-4",
    title: "With Sh Anoop Bartaria Ji (Owner WTP Mall Jaipur)",
    category: "clients",
    caption: "Vastu & commercial astrological advisory with Rajasthan's foremost architect and World Trade Park owner.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.59-PM-3_51.jpeg",
    badge: "Industrialist",
  },
  {
    id: "client-5",
    title: "With Femina Miss India Nikita Porwal",
    category: "clients",
    caption: "Special astrological session and best wishes with Miss India winner.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.58-PM-1_56.jpeg",
    badge: "Pageant Winner",
  },

  // Articles & Posters
  {
    id: "article-1",
    title: "Featured Newspaper Publication 1",
    category: "articles",
    caption: "National press coverage on Bhavishyaphal astrology insights.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM_113.jpeg",
    badge: "Print Media",
  },
  {
    id: "article-2",
    title: "Planetary Forecast Column",
    category: "articles",
    caption: "Special weekly column analyzing planetary transit influences.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM-1_114.jpeg",
    badge: "Editorial",
  },
  {
    id: "article-3",
    title: "Vastu & Life Harmony Feature",
    category: "articles",
    caption: "Detailed guidance on home alignment and spiritual remedy science.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.55-PM_115.jpeg",
    badge: "Feature",
  },
  {
    id: "article-4",
    title: "Yearly Prediction Analysis",
    category: "articles",
    caption: "Comprehensive national and zodiac annual outlook.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.56-PM-2_116.jpeg",
    badge: "Press",
  },
  {
    id: "article-5",
    title: "Astrology & Modern Psychology Article",
    category: "articles",
    caption: "Bridging ancient Vedic shastras with contemporary mental well-being.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM_117.jpeg",
    badge: "Thought Leadership",
  },
  {
    id: "article-6",
    title: "Award Recognition News Feature",
    category: "articles",
    caption: "Press coverage of India's Most Trusted Astrologer felicitation.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.12.57-PM-1_118.jpeg",
    badge: "News",
  },

  // Astrologers
  {
    id: "astrologer-1",
    title: "With Celebrity Astrologer Sh Shailender Pandey Ji",
    category: "astrologers",
    caption: "In-depth dialogue on classical astrological systems and timing techniques.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.06-PM-2_36.jpeg",
    badge: "Celebrity Master",
  },
  {
    id: "astrologer-2",
    title: "With Renowned Astrologer Sh Anupam Jolly",
    category: "astrologers",
    caption: "Conclave on KP system and modern astrological computational accuracy.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.04-PM-1_42.jpeg",
    badge: "Renowned Scholar",
  },
  {
    id: "astrologer-3",
    title: "Astrologer Ajay Kumar Agarwal — Conclave Keynote",
    category: "astrologers",
    caption: "Addressing the National Astrology Summit in Jaipur.",
    image: "/images/asset_43",
    badge: "Keynote",
  },
  {
    id: "astrologer-4",
    title: "Spiritual Blessings from Guru Ji",
    category: "astrologers",
    caption: "Seeking sacred divine guidance and parampara blessings.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-2_46.jpeg",
    badge: "Spiritual Lineage",
  },
  {
    id: "astrologer-5",
    title: "With Celebrity Astrologer Sh Purushottam Gaurav Ji",
    category: "astrologers",
    caption: "Scholarly deliberation on planetary remedies and Yantra power.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM_48.jpeg",
    badge: "Conclave",
  },
  {
    id: "astrologer-6",
    title: "With Celebrity Astrologer Sh Ajay Bhambhi Ji",
    category: "astrologers",
    caption: "Memorable meeting with national astrology icon and columnist.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.00-PM-2_50.jpeg",
    badge: "Legendary Scholar",
  },

  // Social
  {
    id: "social-1",
    title: "With RSS Senior Leader Sh Sanjay Vinayak Joshi Ji",
    category: "social",
    caption: "Discussion on cultural preservation and traditional Indian sciences.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.06-PM-1_39.jpeg",
    badge: "Dignitary",
  },
  {
    id: "social-2",
    title: "With BJP State President Sh Madan Rathore",
    category: "social",
    caption: "Honorary meeting regarding astrological heritage in Rajasthan.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.06-PM_40.jpeg",
    badge: "State Leadership",
  },
  {
    id: "social-3",
    title: "With Deputy Chief Minister Rajasthan Sh Prem Bairwa Ji",
    category: "social",
    caption: "Felicitation and auspicious blessings at Rajasthan government secretariat.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.05-PM-1_37.jpeg",
    badge: "Deputy CM",
  },
  {
    id: "social-4",
    title: "With Ex Chief Minister Sh Ashok Gehlot",
    category: "social",
    caption: "Distinguished meeting and felicitation with former Chief Minister of Rajasthan.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.04-PM-3_41.jpeg",
    badge: "Ex Chief Minister",
  },
  {
    id: "social-5",
    title: "With Rajyasabha MP Sh Neeraj Dangi & IFS Sh Sharavan Kumar",
    category: "social",
    caption: "National delegation meeting on cultural heritage and educational initiatives.",
    image: "/images/WhatsApp-Image-2026-08-07-at-2.13.01-PM-1_47.jpeg",
    badge: "Parliamentarian",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Priyanka Sharma",
    role: "Marriage & Match Consultation",
    location: "New Delhi",
    content: "The consultation was calm, scientific and free from fear-mongering. Ajay Ji predicted the exact month of my wedding and the remedy suggested brought tremendous peace to our family.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "2",
    name: "Rajesh Singhania",
    role: "Industrialist & Business Vastu",
    location: "Jaipur",
    content: "We consulted Bhavishyaphal before expanding our manufacturing facility. Her Vastu corrections without demolition and career timing insights transformed our business revenue within 6 months.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "3",
    name: "Neha Kapoor",
    role: "Career & Stream Guidance",
    location: "Mumbai",
    content: "I was torn between corporate legal practice and civil services preparation. The KP astrology analysis of 10th and 6th houses gave me unequivocal clarity. Today I am serving in government with pride.",
    rating: 5,
    avatar: "NK",
  },
  {
    id: "4",
    name: "Anjali Mehta",
    role: "KP Astrology & Child Timing",
    location: "Bengaluru",
    content: "After years of anxiety, her compassionate reading and Santan Prapti guidance gave us immense hope. Her calculated Caesarean Muhurat ensured a healthy, blissful birth of our daughter.",
    rating: 5,
    avatar: "AM",
  },
  {
    id: "5",
    name: "Vikramaditya Rathore",
    role: "All Life Comprehensive Reading",
    location: "Udaipur",
    content: "Hands down the most genuine astrologer in India. No false promises, no exaggerated gemstone costs—only authentic Vedic calculations and actionable guidance. Truly an enlightening experience.",
    rating: 5,
    avatar: "VR",
  },
];

export const FAQS = [
  {
    q: "What birth details are required for an accurate Vedic Astrology reading?",
    a: "You need three essential details: your exact Date of Birth, accurate Birth Time (to the minute if possible), and Birth City/Location. If exact birth time is slightly uncertain, our engine and astrologer can perform birth time rectification using major past life events.",
  },
  {
    q: "Can I take the consultation completely online if I live abroad?",
    a: "Yes! Over 60% of our clients reside across the USA, UK, Canada, Australia, UAE, and Singapore. Consultations are conducted seamlessly over high-definition video calls (WhatsApp / Zoom / Google Meet) with recorded summaries and chart reports shared directly to your phone.",
  },
  {
    q: "How does Bhavishyaphal differ from generic horoscope websites or apps?",
    a: "Most commercial portals use automated generic paragraphs. At Bhavishyaphal, all readings are backed by Astrologer Ajay Kumar Agarwal's proven mathematical KP & Parashari lineage, individualized planetary degrees, and positive, empowering solutions without fear tactics.",
  },
  {
    q: "Are the Sacred Yantras and Gemstones genuinely energized before dispatch?",
    a: "Absolutely. Every Sacred Yantra and Gemstone undergoes a comprehensive 3-day Vedic consecration ritual (Pran Pratishtha) with specific Beej Mantras chanted in your name, Gotra, and Nakshatra before secure tracked delivery.",
  },
  {
    q: "What happens if a Kundli match has Manglik Dosha or Nadi Dosha?",
    a: "Classical Vedic astrology provides many cancellation yogas (Dosha Bhanga) that generic software misses. Ajay Ji evaluates special planetary counter-balances, Navamsha aspects, and provides authentic, gentle remedies that allow harmonious wedlock without panic.",
  },
  {
    q: "How do I make a payment for consultation or reports?",
    a: "You can pay instantly using all UPI apps (Google Pay, PhonePe, Paytm, BHIM) by scanning the dynamic QR code in our checkout modal, or via direct bank transfer and international cards, followed by instant confirmation on WhatsApp.",
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: "1",
    slug: "understanding-mangal-dosha-myths-vs-reality",
    title: "Understanding Mangal Dosha: Dispelling Common Fears and Discovering Authentic Vedic Remedies",
    excerpt: "Why being Manglik is not a marital curse. Learn how modern astrological scrutiny reveals cancellations and harmonious unions.",
    category: "Marriage Astrology",
    date: "October 10, 2026",
    readTime: "5 min read",
    author: "Astrologer Ajay Kumar Agarwal",
    image: "/images/6efde35bfb57e31eb74602406c07bee4_65.jpg",
    content: [
      "Mangal Dosha, or Mars affliction, is one of the most misunderstood concepts in Indian astrology. Popular superstition has caused immense anxiety among marriage seekers, yet Sage Parashara in Brihat Parashara Hora Shastra outlined over twenty distinct conditions where Mangal Dosha gets completely cancelled.",
      "Mars represents energy, courage, drive, and blood circulation. When placed in the 1st, 4th, 7th, 8th, or 12th houses from the Lagna, Moon, or Venus, it exerts a dynamic influence on relationships.",
      "However, if Mars is in its own sign (Aries or Scorpio), in exaltation (Capricorn), or aspected by a strong benefic Jupiter, the malefic intensity dissolves into productive vitality. In this guide, we explore how proper horoscope matching reveals true compatibility beyond superficial fear.",
    ],
  },
  {
    id: "2",
    slug: "how-planetary-dasha-dictates-career-success",
    title: "How Planetary Vimshottari Dasha Dictates the Perfect Timing for Job and Business Transitions",
    excerpt: "Why hard work alone isn't enough without cosmic timing. Discover how to identify golden career windows.",
    category: "Career Astrology",
    date: "September 28, 2026",
    readTime: "6 min read",
    author: "Astrologer Ajay Kumar Agarwal",
    image: "/images/asset_69",
    content: [
      "Have you ever noticed two individuals with identical qualifications and effort experiencing vastly contrasting career outcomes? The secret lies in the Vimshottari Dasha cycle—the chronological unfoldment of planetary periods.",
      "When an individual enters the Mahadasha or Antardasha of the 10th or 11th house lord, promotions, salary jumps, and venture success arrive almost effortlessly. Conversely, operating under an afflicted 8th or 12th house period necessitates consolidation and defensive strategy rather than aggressive expansion.",
      "Understanding your current planetary period gives you the strategic foresight to know when to launch, when to negotiate, and when to wait.",
    ],
  },
  {
    id: "3",
    slug: "power-of-shri-yantra-science-behind-sacred-geometry",
    title: "The Power of Shri Yantra: The Quantum Science Behind Sacred Vedic Geometry",
    excerpt: "Modern physics and ancient rishis agree: the 43 interlocking triangles of Shri Yantra create a profound electromagnetic resonance.",
    category: "Sacred Yantras",
    date: "September 15, 2026",
    readTime: "4 min read",
    author: "Astrologer Ajay Kumar Agarwal",
    image: "/images/asset_77",
    content: [
      "The Shri Yantra is often termed the 'Mother of All Yantras'. Composed of nine interlocking triangles centered around the Bindu (the origin of cosmic consciousness), it represents the cosmic creation cycle.",
      "Laboratory studies on sacred geometries have demonstrated that meditating on the Shri Yantra shifts brainwave patterns into high-coherence Alpha and Theta states, fostering deep mental stillness, intuitive clarity, and abundance consciousness.",
      "Installing an energized brass or copper Shri Yantra in the North-East quadrant of your home activates the flow of Prana and dispels heavy, stagnant energies.",
    ],
  },
  {
    id: "4",
    slug: "vastu-guidelines-for-wealth-and-prosperity",
    title: "Essential Vastu Shastra Guidelines to Attract Wealth, Peace and Prosperity into Your Home",
    excerpt: "Five simple adjustments to home orientation and water elements that unblock stagnant financial energy.",
    category: "Vastu Shastra",
    date: "August 30, 2026",
    readTime: "7 min read",
    author: "Astrologer Ajay Kumar Agarwal",
    image: "/images/images_61",
    content: [
      "Vastu Shastra is the traditional Indian science of architecture that harmonizes living spaces with the five natural elements (Pancha Bhootas): Earth, Water, Fire, Air, and Space.",
      "The North direction is governed by Lord Kubera, the custodian of cosmic wealth. Keeping the North light, uncluttered, and adorned with running water features or green plants draws lucrative opportunities.",
      "The South-East (Agni corner) commands your cash liquidity and metabolic vitality. Ensuring your kitchen or electrical equipment resides here protects your financial stamina.",
    ],
  },
];
