export type Language = "en" | "hi";

export interface Translations {
  // Topbar
  topNotice: string;
  phone: string;
  email: string;

  // Nav
  navHome: string;
  navAbout: string;
  navServices: string;
  navTalk: string;
  navChat: string;
  navYantras: string;
  navKundli: string;
  navGallery: string;
  navReviews: string;
  navBlog: string;
  navContact: string;
  bookConsultation: string;
  callNow: string;
  chatNow: string;
  whatsappNow: string;
  onlineNow: string;
  leadAstrologerBadge: string;
  nationalAwardee: string;

  // Ticker
  tickerText: string;
  tickerCta: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  heroCtaTalk: string;
  heroCtaChat: string;
  heroCtaKundli: string;
  statExperience: string;
  statReadings: string;
  statDignitaries: string;
  statAccuracy: string;
  statExpLabel: string;
  statReadingsLabel: string;
  statDignitariesLabel: string;
  statAccuracyLabel: string;
  verifiedOnline: string;

  // Quick Hub
  quickHubTitle: string;
  viewAllServices: string;
  quickTalkTitle: string;
  quickTalkSub: string;
  quickChatTitle: string;
  quickChatSub: string;
  quickKundliTitle: string;
  quickKundliSub: string;
  quickMatchingTitle: string;
  quickMatchingSub: string;
  quickHoroscopeTitle: string;
  quickHoroscopeSub: string;
  quickYantrasTitle: string;
  quickYantrasSub: string;
  quickPackagesTitle: string;
  quickPackagesSub: string;
  quickGalleryTitle: string;
  quickGallerySub: string;

  // Consultation Showcase (Home)
  consultationSectionTag: string;
  consultationSectionTitle: string;
  consultationSectionSub: string;
  exploreAllModes: string;
  mode1Badge: string;
  mode1Title: string;
  mode1Desc: string;
  startingFrom: string;
  viewSessions: string;
  mode2Badge: string;
  mode2Title: string;
  mode2Desc: string;
  mode2ReplyTime: string;
  startChat: string;

  // Free Kundli Banner (Home)
  freeKundliBadge: string;
  freeKundliTitle: string;
  freeKundliDesc: string;
  freeKundliCta: string;

  // Featured Previews on Home
  featuredYantrasTitle: string;
  featuredYantrasSub: string;
  featuredGalleryTitle: string;
  featuredGallerySub: string;
  featuredReviewsTitle: string;
  featuredReviewsSub: string;
  viewAllYantras: string;
  viewAllPhotos: string;
  viewAllReviews: string;

  // Talk to Astrologer Page
  talkPageBadge: string;
  talkPageTitle: string;
  talkPageSub: string;
  searchTopicPlaceholder: string;
  founderPrincipal: string;
  directLineTitle: string;
  directLineSub: string;
  directCallBtn: string;
  whatsappAudioVideoBtn: string;
  bookSlotBtn: string;
  chooseSessionTitle: string;
  chooseSessionSub: string;
  filterAll: string;
  filterLife: string;
  filterMarriage: string;
  filterCareer: string;
  filterVastu: string;
  howItWorksTitle: string;
  step1Num: string;
  step1Title: string;
  step1Desc: string;
  step2Num: string;
  step2Title: string;
  step2Desc: string;
  step3Num: string;
  step3Title: string;
  step3Desc: string;

  // Chat with Astrologer Page
  chatPageTitle: string;
  chatPageSub: string;
  chatIntakeTitle: string;
  chatTopicLabel: string;
  chatNameLabel: string;
  chatDobLabel: string;
  chatBirthTimeLabel: string;
  chatBirthPlaceLabel: string;
  chatQuestionLabel: string;
  startWhatsAppChatBtn: string;
  chatConfidentialNotice: string;
  chatFastResponseNotice: string;
  chatRemediesNotice: string;

  // Services Page
  servicesHeroTitle: string;
  servicesHeroSub: string;
  allConsultationsTab: string;
  lifeDestinyTab: string;
  marriageMatchmakingTab: string;
  careerBusinessTab: string;
  vastuPalmistryTab: string;
  bookThisSessionBtn: string;
  chatAboutThisBtn: string;

  // Yantras Page
  yantrasHeroTitle: string;
  yantrasHeroSub: string;
  yantrasFixedPriceNotice: string;
  filterAllYantras: string;
  filterWallYantras: string;
  filterPendants: string;
  orderYantraBtn: string;
  deityLabel: string;
  benefitsLabel: string;
  mantraLabel: string;
  placementLabel: string;

  // About Page
  aboutHeroTitle: string;
  aboutHeroSub: string;
  aboutBioText1: string;
  aboutBioText2: string;
  awardsSectionTitle: string;
  dignitariesSectionTitle: string;

  // Reviews Page
  reviewsHeroTitle: string;
  reviewsHeroSub: string;
  scorecardHeading: string;
  scorecardReviewsCount: string;
  writeReviewBtn: string;

  // Contact Page
  contactHeroTitle: string;
  contactHeroSub: string;
  appointmentFormTitle: string;
  fullNameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  serviceSelectLabel: string;
  preferredDateLabel: string;
  messageLabel: string;
  submitAppointmentBtn: string;
  officeLocationTitle: string;
  officeHoursTitle: string;
  instantUpiTitle: string;
  upiIdLabel: string;
  faqBadge: string;
  faqTitle: string;
  faqSub: string;

  // Modals & Common
  closeBtn: string;
  backBtn: string;
  submitBtn: string;
  yantraModalTitle: string;
  yantraModalSub: string;
  shippingAddressLabel: string;
  pincodeLabel: string;
  cityStateLabel: string;
  gotraLabel: string;
  confirmOrderBtn: string;

  // Footer
  footerDesc: string;
  quickLinksTitle: string;
  consultationsTitle: string;
  yantrasServicesTitle: string;
  rightsReserved: string;

  // Additional / Component keys
  contactOffice: string;
  bookingBadge: string;
  bookingTitle: string;
  bookingSub: string;
  heroCtaBook: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutBio1: string;
  aboutBio2: string;
  aboutFeature1Title: string;
  aboutFeature1Desc: string;
  aboutFeature2Title: string;
  aboutFeature2Desc: string;
  aboutFeature3Title: string;
  aboutFeature3Desc: string;
  aboutCta: string;
  servicesBadge: string;
  servicesTitle: string;
  servicesSub: string;
  tabConsultancy: string;
  tabRemedial: string;
  yantrasBadge: string;
  yantrasTitle: string;
  yantrasSub: string;
  filterYantras: string;
  orderNowBtn: string;
  whatsAppOrderBtn: string;
  yantraConsecrationNotice: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Topbar
    topNotice: "Personalized Vedic & KP Astrology Guidance",
    phone: "+91 91160 55424",
    email: "info@bhavishyaphalastro.online",

    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navTalk: "Talk to Astrologer",
    navChat: "Chat with Astrologer",
    navYantras: "Sacred Yantras",
    navKundli: "Free Kundli",
    navGallery: "Gallery",
    navReviews: "Reviews",
    navBlog: "Blog",
    navContact: "Contact",
    bookConsultation: "Book Consultation",
    callNow: "Call Now",
    chatNow: "Chat Now",
    whatsappNow: "WhatsApp",
    onlineNow: "Online Now",
    leadAstrologerBadge: "Lead Astrologer • National Awardee",
    nationalAwardee: "National Awardee",

    // Ticker
    tickerText: "Astrologer Ajay Kumar Agarwal is Online Now for 1-on-1 Voice & Video Consultations",
    tickerCta: "Connect in 60 Seconds →",

    // Hero Section
    heroBadge: "India's Most Trusted & Accurate Astrologer",
    heroTitle1: "Know Your Future.",
    heroTitle2: "Transform Your Destiny.",
    heroTitle3: "Sacred Vedic Clarity",
    heroSub: "Personalized Vedic Astrology consultations led by Astrologer Ajay Kumar Agarwal. Conferred national honor by Sh Nayan Mongia Ji. Get mathematical precision, KP Horary clarity, and authentic Lal Kitab remedies.",
    heroCtaTalk: "Talk to Astrologer",
    heroCtaChat: "Chat with Astrologer",
    heroCtaKundli: "Free Janam Kundli",
    statExperience: "12+",
    statReadings: "12,500+",
    statDignitaries: "100+",
    statAccuracy: "4.99 ★",
    statExpLabel: "Years Vedic Mastery",
    statReadingsLabel: "Consultations Completed",
    statDignitariesLabel: "VIPs & Celebrities",
    statAccuracyLabel: "Client Satisfaction",
    verifiedOnline: "Verified Astrologer Online Now",

    // Quick Hub
    quickHubTitle: "Explore Astrological Services & Tools",
    viewAllServices: "View All Services →",
    quickTalkTitle: "Talk to Astrologer",
    quickTalkSub: "Call Live",
    quickChatTitle: "Chat with Astrologer",
    quickChatSub: "Instant Q&A",
    quickKundliTitle: "Free Kundli",
    quickKundliSub: "Janam Kundli",
    quickMatchingTitle: "Kundli Matching",
    quickMatchingSub: "36 Guna Milan",
    quickHoroscopeTitle: "Daily Horoscope",
    quickHoroscopeSub: "12 Rashis",
    quickYantrasTitle: "Sacred Yantras",
    quickYantrasSub: "₹3,999 Consecrated",
    quickPackagesTitle: "All Packages",
    quickPackagesSub: "8 Life Suites",
    quickGalleryTitle: "VIP Gallery",
    quickGallerySub: "National Honors",

    // Consultation Showcase
    consultationSectionTag: "Direct Consultations",
    consultationSectionTitle: "Consult with Astrologer Ajay Kumar Agarwal",
    consultationSectionSub: "National Award Winner • Conferred by Sh Nayan Mongia Ji • 100% Confidential 1-on-1 Consultations",
    exploreAllModes: "Explore All Consultation Modes",
    mode1Badge: "Phone & Video Call • 1-on-1",
    mode1Title: "Direct Phone Consultation",
    mode1Desc: "Detailed discussion on horoscope, career, marriage & remedies",
    startingFrom: "Starting From",
    viewSessions: "View Sessions →",
    mode2Badge: "Instant WhatsApp Chat",
    mode2Title: "Chat with Astrologer Ajay Kumar",
    mode2Desc: "Fast written replies, quick queries, Muhurat & gemstone advice",
    mode2ReplyTime: "Typical reply in < 2 mins",
    startChat: "Start Chat",

    // Free Kundli Banner
    freeKundliBadge: "100% Free Computational Engine",
    freeKundliTitle: "Interactive 7-in-1 Vedic Janma Kundli & Horoscope",
    freeKundliDesc: "Generate North-Indian diamond birth chart, 36-Point Guna Milan, and daily planetary transit predictions.",
    freeKundliCta: "Open Vedic Kundli Suite",

    // Featured Previews on Home
    featuredYantrasTitle: "Sacred Consecrated Yantras & Pendants",
    featuredYantrasSub: "Each yantra is energized with a 3-day Vedic Pran Pratishtha ritual in your name before dispatch.",
    featuredGalleryTitle: "National Honors & VIP Dignitaries",
    featuredGallerySub: "Felicitated by cricket legends, senior ministers, Bollywood directors, and prominent conclaves.",
    featuredReviewsTitle: "Verified Client Testimonials",
    featuredReviewsSub: "Real feedback from families, professionals, and entrepreneurs guided by Astrologer Ajay Kumar Agarwal.",
    viewAllYantras: "View All 22 Yantras →",
    viewAllPhotos: "View Full VIP Gallery →",
    viewAllReviews: "Read All 12,500+ Reviews →",

    // Talk to Astrologer Page
    talkPageBadge: "Available for Direct Phone & Video Calls",
    talkPageTitle: "Talk to Astrologer Ajay Kumar Agarwal",
    talkPageSub: "Connect directly via confidential 1-on-1 voice or video call. India's Most Trusted & Accurate Astrologer of the Year • Conferred by Sh Nayan Mongia Ji.",
    searchTopicPlaceholder: "Search topic (e.g. Marriage, Career)...",
    founderPrincipal: "Founder & Principal Astrologer",
    directLineTitle: "Direct Line",
    directLineSub: "Connect on phone or WhatsApp audio/video call instantly.",
    directCallBtn: "Call Direct: +91 91160 55424",
    whatsappAudioVideoBtn: "WhatsApp Audio/Video",
    bookSlotBtn: "Book Scheduled Slot",
    chooseSessionTitle: "Choose Your Consultation Session",
    chooseSessionSub: "Every session is conducted personally and confidentially with Astrologer Ajay Kumar Agarwal.",
    filterAll: "All Sessions",
    filterLife: "Horoscope & Life",
    filterMarriage: "Love & Marriage",
    filterCareer: "Career & Finance",
    filterVastu: "Vastu & Palmistry",
    howItWorksTitle: "How Direct Consultation Works",
    step1Num: "1",
    step1Title: "Select Consultation",
    step1Desc: "Choose your specific area of concern (All Life, Kundli Milan, Marriage, Career, or Vastu).",
    step2Num: "2",
    step2Title: "Share Birth Details",
    step2Desc: "Provide your accurate Date of Birth, Birth Time, and Birth Place for precision chart calculation.",
    step3Num: "3",
    step3Title: "Live 1-on-1 Call",
    step3Desc: "Speak directly with Astrologer Ajay Kumar Agarwal on phone or video call and receive actionable Lal Kitab remedies.",

    // Chat with Astrologer Page
    chatPageTitle: "Chat with Astrologer Ajay Kumar Agarwal",
    chatPageSub: "Get instant astrological clarity delivered directly to your WhatsApp. Quick remedies, chart insights, and auspicious Muhurat.",
    chatIntakeTitle: "Start Instant WhatsApp Consultation",
    chatTopicLabel: "Select Consultation Topic",
    chatNameLabel: "Your Full Name",
    chatDobLabel: "Date of Birth",
    chatBirthTimeLabel: "Birth Time",
    chatBirthPlaceLabel: "Birth Place (City, State)",
    chatQuestionLabel: "Your Specific Question or Dilemma",
    startWhatsAppChatBtn: "Start Chat on WhatsApp",
    chatConfidentialNotice: "100% Confidential & Private Conversation",
    chatFastResponseNotice: "Typical Response Time: Under 2 Minutes",
    chatRemediesNotice: "Includes Planetary Mahadasha & Remedy Advice",

    // Services Page
    servicesHeroTitle: "Specialized Astrological Consultation Packages",
    servicesHeroSub: "Personalized, 1-on-1 confidential consultations with Astrologer Ajay Kumar Agarwal. Transparent pricing, authentic mathematical birth-chart calculations, and practical remedial solutions.",
    allConsultationsTab: "All Consultations",
    lifeDestinyTab: "Life & Destiny",
    marriageMatchmakingTab: "Marriage & Matchmaking",
    careerBusinessTab: "Career & Business",
    vastuPalmistryTab: "Vastu & Palmistry",
    bookThisSessionBtn: "Book Session",
    chatAboutThisBtn: "Chat on WhatsApp",

    // Yantras Page
    yantrasHeroTitle: "Sacred Consecrated Yantras & Pendants",
    yantrasHeroSub: "Every sacred geometrical Yantra and wearable pendant is strictly energized with authentic Vedic Pran Pratishtha rituals specifically in your Name and Gotra before dispatch. Fixed at an accessible single price of ₹3,999/- each.",
    yantrasFixedPriceNotice: "Fixed Consecrated Price: ₹3,999/- with 3-Day Vedic Pran Pratishtha Rituals Included",
    filterAllYantras: "All Items (22)",
    filterWallYantras: "Wall / Altar Yantras",
    filterPendants: "Wearable Pendants",
    orderYantraBtn: "Order Consecrated (₹3,999)",
    deityLabel: "Deity",
    benefitsLabel: "Key Benefits",
    mantraLabel: "Sacred Mantra",
    placementLabel: "Placement & Direction",

    // About Page
    aboutHeroTitle: "About Astrologer Ajay Kumar Agarwal",
    aboutHeroSub: "Conferred 'India's Most Trusted & Accurate Astrologer of the Year' by former Indian cricketer Sh Nayan Mongia Ji. Conferred Vedic Excellence by Gurudev GD Vashist Ji & Sh Arun Bansal Ji.",
    aboutBioText1: "Astrologer Ajay Kumar Agarwal is a distinguished Vedic scholar, KP astrologer, and Lal Kitab specialist with over 12+ years of rigorous predictive experience. Conferred with national honors by cricket icon Sh Nayan Mongia Ji, he has guided more than 12,500 clients across 28+ countries.",
    aboutBioText2: "His expertise bridges classical Parashari mathematical foundations, KP Horary sub-lord accuracy, practical non-fear-based remedies, and consecrated Vedic yantras.",
    awardsSectionTitle: "National Honors & Awards",
    dignitariesSectionTitle: "Distinguished VIP Dignitaries & Clients",

    // Reviews Page
    reviewsHeroTitle: "Verified Client Reviews & Testimonials",
    reviewsHeroSub: "Over 12,500+ satisfied clients across 28+ countries have experienced life-changing clarity through Astrologer Ajay Kumar Agarwal's guidance.",
    scorecardHeading: "Client Satisfaction Scorecard",
    scorecardReviewsCount: "Based on 12,500+ Verified Consultations",
    writeReviewBtn: "Write a Client Review",

    // Contact Page
    contactHeroTitle: "Contact & Appointment Desk",
    contactHeroSub: "Schedule your consultation session, make an enquiry, or connect directly on WhatsApp with Astrologer Ajay Kumar Agarwal's desk.",
    appointmentFormTitle: "Book Consultation Appointment",
    fullNameLabel: "Full Name",
    phoneLabel: "Phone / WhatsApp Number",
    emailLabel: "Email Address (Optional)",
    serviceSelectLabel: "Select Consultation Service",
    preferredDateLabel: "Preferred Date & Time",
    messageLabel: "Birth Details or Questions",
    submitAppointmentBtn: "Submit Appointment Request",
    officeLocationTitle: "Consultation Office",
    officeHoursTitle: "Consultation Hours",
    instantUpiTitle: "Instant UPI Consultation Fee Box",
    upiIdLabel: "UPI ID: 9116055424@upi",
    faqBadge: "Clear Answers",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Find quick answers regarding consultation modes, privacy, and consecrated yantras.",

    // Modals & Common
    closeBtn: "Close",
    backBtn: "Back",
    submitBtn: "Submit",
    yantraModalTitle: "Consecrated Yantra Order Form",
    yantraModalSub: "Personalized Pran Pratishtha Consecration & Secure Express Home Delivery",
    shippingAddressLabel: "Complete Delivery Address",
    pincodeLabel: "PIN Code",
    cityStateLabel: "City, State",
    gotraLabel: "Gotra & Nakshatra (For Consecration Puja)",
    confirmOrderBtn: "Confirm & Place Yantra Order (₹3,999/-)",

    // Footer
    footerDesc: "Bhavishyaphal Astrology Services by Astrologer Ajay Kumar Agarwal provides authentic Vedic, KP, and Lal Kitab astrological consultations, Kundli matchmaking, and consecrated Yantras.",
    quickLinksTitle: "Quick Navigation",
    consultationsTitle: "Consultations",
    yantrasServicesTitle: "Yantras & Sacred Items",
    rightsReserved: "All rights reserved. Designed for celestial clarity & ethical astrological guidance.",

    contactOffice: "Consultation Office",
    bookingBadge: "Verified Consultation Desk",
    bookingTitle: "Book Astrological Consultation",
    bookingSub: "Connect directly with Astrologer Ajay Kumar Agarwal for deep birth chart insights & authentic Vedic remedies.",
    heroCtaBook: "Book Consultation",
    aboutBadge: "Meet The Astrologer",
    aboutTitle: "Astrologer Ajay Kumar Agarwal",
    aboutBio1: "Vedic & KP Astrologer with 12+ years of experience, guiding clients worldwide towards clarity and success.",
    aboutBio2: "Honored by national dignitaries including Ex-Indian Cricketer Nayan Mongia Ji.",
    aboutFeature1Title: "12,500+ Consultations",
    aboutFeature1Desc: "Guiding patrons across 28+ countries with high precision.",
    aboutFeature2Title: "National Awardee",
    aboutFeature2Desc: "Conferred 'Most Trusted Astrologer of the Year'.",
    aboutFeature3Title: "Consecrated Remedies",
    aboutFeature3Desc: "Authentic Pran Pratishtha Yantras and practical Vedic guidance.",
    aboutCta: "Book Consultation with Ajay Ji",
    servicesBadge: "Astrological Services",
    servicesTitle: "Vedic & KP Consultation Services",
    servicesSub: "Comprehensive astrological solutions tailored to your unique birth chart.",
    tabConsultancy: "Consultation Sessions",
    tabRemedial: "Consecrated Remedies",
    yantrasBadge: "Pran Pratishtha Yantras",
    yantrasTitle: "Sacred Energized Yantras",
    yantrasSub: "Consecrated with 3-day Vedic rituals for prosperity and protection.",
    filterYantras: "Wall Yantras",
    orderNowBtn: "Order Yantra",
    whatsAppOrderBtn: "Order on WhatsApp",
    yantraConsecrationNotice: "Every sacred yantra is consecrated with 3-day Vedic Pran Pratishtha before dispatch.",
  },

  hi: {
    // Topbar
    topNotice: "व्यक्तिगत वैदिक एवं के.पी. ज्योतिषीय मार्गदर्शन",
    phone: "+91 91160 55424",
    email: "info@bhavishyaphalastro.online",

    // Nav
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएं",
    navTalk: "ज्योतिषी से बात करें",
    navChat: "ज्योतिषी से चैट करें",
    navYantras: "सिद्ध यंत्र",
    navKundli: "फ्री कुंडली",
    navGallery: "गैलरी",
    navReviews: "समीक्षाएं",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    bookConsultation: "परामर्श बुक करें",
    callNow: "कॉल करें",
    chatNow: "चैट करें",
    whatsappNow: "व्हाट्सएप",
    onlineNow: "ऑनलाइन उपलब्ध",
    leadAstrologerBadge: "प्रमुख ज्योतिषी • राष्ट्रीय सम्मान प्राप्त",
    nationalAwardee: "राष्ट्रीय पुरस्कार विजेता",

    // Ticker
    tickerText: "आचार्य अजय कुमार अग्रवाल 1-on-1 फोन व वीडियो परामर्श के लिए अभी ऑनलाइन उपलब्ध हैं",
    tickerCta: "60 सेकंड में जुड़ें →",

    // Hero Section
    heroBadge: "भारत के सर्वाधिक विश्वसनीय एवं सटीक भविष्यवक्ता",
    heroTitle1: "अपना भविष्य जानें।",
    heroTitle2: "सटीक वैदिक समाधान पाएं।",
    heroTitle3: "दिव्य अनुभूत उपाय",
    heroSub: "ज्योतिषी अजय कुमार अग्रवाल द्वारा व्यक्तिगत वैदिक ज्योतिषीय मार्गदर्शन। पूर्व भारतीय क्रिकेटर श्री नयन मोंगिया जी द्वारा राष्ट्रीय सम्मान प्राप्त। सूक्ष्म गणितीय जन्मपत्री विश्लेषण एवं लाल किताब के अचूक सात्विक उपाय।",
    heroCtaTalk: "ज्योतिषी से बात करें",
    heroCtaChat: "ज्योतिषी से चैट करें",
    heroCtaKundli: "फ्री जन्म कुंडली",
    statExperience: "12+ वर्ष",
    statReadings: "12,500+",
    statDignitaries: "100+",
    statAccuracy: "4.99 ★",
    statExpLabel: "वैदिक अनुभव",
    statReadingsLabel: "सफल परामर्श",
    statDignitariesLabel: "विशिष्ट हस्तियां",
    statAccuracyLabel: "संतुष्टि रेटिंग",
    verifiedOnline: "सत्यापित ज्योतिषी अभी ऑनलाइन उपलब्ध",

    // Quick Hub
    quickHubTitle: "ज्योतिषीय सेवाएं एवं ऑनलाइन टूल्स",
    viewAllServices: "सभी सेवाएं देखें →",
    quickTalkTitle: "ज्योतिषी से बात करें",
    quickTalkSub: "लाइव कॉल",
    quickChatTitle: "ज्योतिषी से चैट करें",
    quickChatSub: "त्वरित समाधान",
    quickKundliTitle: "फ्री जन्म कुंडली",
    quickKundliSub: "सटीक चक्र",
    quickMatchingTitle: "कुंडली मिलान",
    quickMatchingSub: "36 गुण मिलान",
    quickHoroscopeTitle: "दैनिक राशिफल",
    quickHoroscopeSub: "12 राशियां",
    quickYantrasTitle: "सिद्ध यंत्र",
    quickYantrasSub: "₹3,999 सिद्ध",
    quickPackagesTitle: "सभी पैकेज",
    quickPackagesSub: "8 प्रमुख सेवाएं",
    quickGalleryTitle: "वीआईपी गैलरी",
    quickGallerySub: "राष्ट्रीय सम्मान",

    // Consultation Showcase
    consultationSectionTag: "प्रत्यक्ष परामर्श",
    consultationSectionTitle: "आचार्य अजय कुमार अग्रवाल से परामर्श लें",
    consultationSectionSub: "राष्ट्रीय पुरस्कार विजेता • श्री नयन मोंगिया जी द्वारा सम्मानित • 100% गोपनीय 1-on-1 परामर्श",
    exploreAllModes: "सभी परामर्श विकल्प देखें",
    mode1Badge: "फोन व वीडियो कॉल • 1-on-1",
    mode1Title: "सीधे फोन पर परामर्श",
    mode1Desc: "जन्मपत्री, करियर, विवाह, संतान एवं लाल किताब उपायों पर विस्तृत व्यक्तिगत चर्चा",
    startingFrom: "शुरुआती शुल्क",
    viewSessions: "सत्र विवरण देखें →",
    mode2Badge: "त्वरित व्हाट्सएप चैट",
    mode2Title: "ज्योतिषी अजय कुमार से चैट करें",
    mode2Desc: "त्वरित लिखित उत्तर, प्रश्न कुंडली, शुभ मुहूर्त एवं रत्न परामर्श",
    mode2ReplyTime: "प्रायः 2 मिनट में उत्तर",
    startChat: "चैट शुरू करें",

    // Free Kundli Banner
    freeKundliBadge: "100% निःशुल्क ऑनलाइन कैलकुलेटर",
    freeKundliTitle: "7-इन-1 वैदिक जन्म कुंडली एवं गुण मिलान हब",
    freeKundliDesc: "उत्तर-भारतीय लग्न चक्र, 36 गुण मिलान, नवमांश और दैनिक ग्रह गोचर तुरंत देखें।",
    freeKundliCta: "वैदिक कुंडली टूल खोलें",

    // Featured Previews on Home
    featuredYantrasTitle: "सिद्ध एवं प्राण-प्रतिष्ठित यंत्र व पेंडेंट",
    featuredYantrasSub: "प्रत्येक यंत्र को आपके नाम एवं गोत्र से 3 दिवसीय वैदिक अनुष्ठान द्वारा सिद्ध करके भेजा जाता है।",
    featuredGalleryTitle: "राष्ट्रीय पुरस्कार एवं विशिष्ट हस्तियां",
    featuredGallerySub: "उपमुख्यमंत्री प्रेम बैरवा, पूर्व मुख्यमंत्री अशोक गहलोत, श्री नयन मोंगिया एवं गुरुदेव जीडी वशिष्ठ जी द्वारा सम्मान।",
    featuredReviewsTitle: "सत्यापित जातकों की समीक्षाएं",
    featuredReviewsSub: "आचार्य अजय कुमार अग्रवाल के सटीक मार्गदर्शन से लाभान्वित परिवारों और व्यवसायियों के वास्तविक अनुभव।",
    viewAllYantras: "सभी 22 यंत्र देखें →",
    viewAllPhotos: "पूरी वीआईपी गैलरी देखें →",
    viewAllReviews: "सभी 12,500+ समीक्षाएं पढ़ें →",

    // Talk to Astrologer Page
    talkPageBadge: "फोन एवं वीडियो कॉल के लिए उपलब्ध",
    talkPageTitle: "ज्योतिषी अजय कुमार अग्रवाल से सीधे बात करें",
    talkPageSub: "1-on-1 फोन अथवा वीडियो कॉल द्वारा जुड़ें। वर्ष के सर्वाधिक विश्वसनीय एवं सटीक ज्योतिषी • श्री नयन मोंगिया जी द्वारा सम्मानित।",
    searchTopicPlaceholder: "विषय खोजें (जैसे: विवाह, करियर)...",
    founderPrincipal: "संस्थापक एवं मुख्य ज्योतिषी",
    directLineTitle: "डायरेक्ट हेल्पलाइन",
    directLineSub: "सीधे फोन अथवा व्हाट्सएप ऑडियो/वीडियो कॉल पर जुड़ें।",
    directCallBtn: "सीधे कॉल करें: +91 91160 55424",
    whatsappAudioVideoBtn: "व्हाट्सएप ऑडियो/वीडियो",
    bookSlotBtn: "पसंदीदा समय अनुसार स्लॉट बुक करें",
    chooseSessionTitle: "अपना परामर्श सत्र चुनें",
    chooseSessionSub: "प्रत्येक सत्र आचार्य अजय कुमार अग्रवाल द्वारा पूर्ण व्यक्तिगत ध्यान एवं गोपनीयता के साथ आयोजित किया जाता है।",
    filterAll: "सभी सत्र",
    filterLife: "कुंडली एवं संपूर्ण जीवन",
    filterMarriage: "विवाह एवं प्रेम",
    filterCareer: "करियर एवं व्यापार",
    filterVastu: "वास्तु एवं हस्तरेखा",
    howItWorksTitle: "परामर्श प्रक्रिया कैसे काम करती है",
    step1Num: "1",
    step1Title: "सत्र का चयन करें",
    step1Desc: "अपनी आवश्यकता के अनुसार परामर्श पैकेज (संपूर्ण जीवन, विवाह, करियर, संतान अथवा वास्तु) चुनें।",
    step2Num: "2",
    step2Title: "जन्म विवरण साझा करें",
    step2Desc: "सटीक जन्म तिथि, जन्म समय एवं जन्म स्थान प्रदान करें ताकि सूक्ष्म गणितीय गणना की जा सके।",
    step3Num: "3",
    step3Title: "लाइव 1-on-1 कॉल",
    step3Desc: "आचार्य अजय कुमार अग्रवाल से फोन अथवा वीडियो कॉल पर सीधी बात करें और सटीक समाधान व सात्विक उपाय पाएं।",

    // Chat with Astrologer Page
    chatPageTitle: "आचार्य अजय कुमार अग्रवाल से चैट पर परामर्श",
    chatPageSub: "व्हाट्सएप पर तुरंत सटीक ज्योतिषीय परामर्श पाएं। त्वरित उपाय, जन्मपत्री विश्लेषण एवं शुभ मुहूर्त।",
    chatIntakeTitle: "तुरंत व्हाट्सएप चैट परामर्श शुरू करें",
    chatTopicLabel: "परामर्श का विषय चुनें",
    chatNameLabel: "आपका पूरा नाम",
    chatDobLabel: "जन्म तिथि",
    chatBirthTimeLabel: "जन्म समय",
    chatBirthPlaceLabel: "जन्म स्थान (शहर, राज्य)",
    chatQuestionLabel: "आपका मुख्य प्रश्न या समस्या",
    startWhatsAppChatBtn: "व्हाट्सएप पर चैट शुरू करें",
    chatConfidentialNotice: "100% व्यक्तिगत एवं गोपनीय परामर्श",
    chatFastResponseNotice: "प्रायः 2 मिनट में त्वरित उत्तर",
    chatRemediesNotice: "महादशा विश्लेषण एवं अचूक लाल किताब उपाय सम्मिलित",

    // Services Page
    servicesHeroTitle: "विशिष्ट ज्योतिषीय परामर्श पैकेज",
    servicesHeroSub: "आचार्य अजय कुमार अग्रवाल के साथ व्यक्तिगत व गोपनीय परामर्श। पारदर्शी शुल्क, सटीक वैदिक गणना एवं प्रामाणिक लाल किताब उपाय।",
    allConsultationsTab: "सभी परामर्श",
    lifeDestinyTab: "जीवन एवं भाग्य",
    marriageMatchmakingTab: "विवाह एवं गुण मिलान",
    careerBusinessTab: "करियर एवं व्यापार",
    vastuPalmistryTab: "वास्तु एवं हस्तरेखा",
    bookThisSessionBtn: "परामर्श बुक करें",
    chatAboutThisBtn: "व्हाट्सएप पर पूछें",

    // Yantras Page
    yantrasHeroTitle: "सिद्ध एवं प्राण प्रतिष्ठित यंत्र व पेंडेंट",
    yantrasHeroSub: "प्रत्येक पवित्र ज्यामितीय यंत्र एवं धारण करने योग्य लॉकेट आपके नाम व गोत्र से 3 दिवसीय वैदिक अनुष्ठान द्वारा सिद्ध किया जाता है। एक समान विशेष मूल्य: मात्र ₹3,999/- प्रत्येक।",
    yantrasFixedPriceNotice: "एक समान सिद्ध मूल्य: ₹3,999/- (3-दिवसीय वैदिक प्राण-प्रतिष्ठा पूजा सहित)",
    filterAllYantras: "सभी यंत्र (22)",
    filterWallYantras: "पूजा घर / दीवार यंत्र",
    filterPendants: "धारण करने योग्य लॉकेट",
    orderYantraBtn: "सिद्ध यंत्र ऑर्डर करें (₹3,999)",
    deityLabel: "अधिष्ठाता देवता",
    benefitsLabel: "प्रमुख लाभ",
    mantraLabel: "सिद्ध बीज मंत्र",
    placementLabel: "स्थापना व दिशा",

    // About Page
    aboutHeroTitle: "आचार्य अजय कुमार अग्रवाल का परिचय",
    aboutHeroSub: "पूर्व भारतीय क्रिकेटर श्री नयन मोंगिया जी द्वारा 'वर्ष के सर्वाधिक विश्वसनीय एवं सटीक ज्योतिषी' से सम्मानित। गुरुदेव जी.डी. वशिष्ठ जी एवं श्री अरुण बंसल जी द्वारा वैदिक उत्कृष्टता सम्मान प्राप्त।",
    aboutBioText1: "ज्योतिषी अजय कुमार अग्रवाल 12 से अधिक वर्षों के अनुभव के साथ वैदिक, के.पी. और लाल किताब ज्योतिष के अग्रणी विशेषज्ञ हैं। क्रिकेट लीजेंड श्री नयन मोंगिया जी द्वारा राष्ट्रीय मंच पर सम्मानित, उन्होंने 28 से अधिक देशों के 12,500 से अधिक जातकों को सही राह दिखाई है।",
    aboutBioText2: "उनकी भविष्यवाणियां पराशरी सिद्धांतों की सटीकता, के.पी. उप-नक्षत्र गणित और बिना भय के सरल व चमत्कारी लाल किताब उपायों पर आधारित हैं।",
    awardsSectionTitle: "राष्ट्रीय पुरस्कार एवं सम्मान",
    dignitariesSectionTitle: "विशिष्ट अतिथि एवं सम्मानीय जातक",

    // Reviews Page
    reviewsHeroTitle: "सत्यापित जातकों की समीक्षाएं",
    reviewsHeroSub: "28 से अधिक देशों में 12,500+ से अधिक जातक आचार्य अजय कुमार अग्रवाल के मार्गदर्शन से अपने जीवन में सकारात्मक बदलाव ला चुके हैं।",
    scorecardHeading: "जातक संतुष्टि स्कोरकार्ड",
    scorecardReviewsCount: "12,500+ सत्यापित परामर्शों पर आधारित",
    writeReviewBtn: "अपनी समीक्षा लिखें",

    // Contact Page
    contactHeroTitle: "संपर्क एवं परामर्श डेस्क",
    contactHeroSub: "परामर्श का समय निर्धारित करें, जानकारी प्राप्त करें या व्हाट्सएप पर सीधे संपर्क करें।",
    appointmentFormTitle: "परामर्श अपॉइंटमेंट फॉर्म",
    fullNameLabel: "पूरा नाम",
    phoneLabel: "फोन / व्हाट्सएप नंबर",
    emailLabel: "ईमेल (वैकल्पिक)",
    serviceSelectLabel: "परामर्श सेवा चुनें",
    preferredDateLabel: "पसंदीदा तिथि एवं समय",
    messageLabel: "जन्म विवरण अथवा प्रश्न",
    submitAppointmentBtn: "अपॉइंटमेंट अनुरोध भेजें",
    officeLocationTitle: "परामर्श कार्यालय",
    officeHoursTitle: "परामर्श समय",
    instantUpiTitle: "सीधा UPI शुल्क भुगतान",
    upiIdLabel: "UPI ID: 9116055424@upi",
    faqBadge: "स्पष्ट समाधान",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSub: "परामर्श के तरीके, समय, गोपनीयता और सिद्ध यंत्रों से जुड़े सामान्य प्रश्नों के उत्तर।",

    // Modals & Common
    closeBtn: "बंद करें",
    backBtn: "वापस",
    submitBtn: "जमा करें",
    yantraModalTitle: "सिद्ध यंत्र ऑर्डर फॉर्म",
    yantraModalSub: "व्यक्तिगत नाम-गोत्र प्राण प्रतिष्ठा एवं सुरक्षित स्पीड पोस्ट डिलीवरी",
    shippingAddressLabel: "डिलीवरी का पूरा पता (मकान नं., गली, क्षेत्र)",
    pincodeLabel: "पिन कोड (PIN Code)",
    cityStateLabel: "शहर एवं राज्य",
    gotraLabel: "गोत्र एवं जन्म नक्षत्र (संकल्प हेतु)",
    confirmOrderBtn: "ऑर्डर कन्फर्म करें (₹3,999/-)",

    // Footer
    footerDesc: "भविष्यफल ज्योतिष संस्थान — आचार्य अजय कुमार अग्रवाल द्वारा संचालित। वैदिक, के.पी. एवं लाल किताब ज्योतिषीय परामर्श और सिद्ध यंत्रों का विश्वसनीय केंद्र।",
    quickLinksTitle: "महत्वपूर्ण लिंक्स",
    consultationsTitle: "परामर्श सेवाएं",
    yantrasServicesTitle: "सिद्ध यंत्र एवं लॉकेट",
    rightsReserved: "सर्वाधिकार सुरक्षित। आध्यात्मिक उन्नति एवं दिव्य मार्गदर्शन के लिए समर्पित।",

    contactOffice: "परामर्श कार्यालय",
    bookingBadge: "सत्यापित परामर्श केंद्र",
    bookingTitle: "ज्योतिषीय परामर्श बुक करें",
    bookingSub: "गहन कुंडली विश्लेषण एवं सटीक वैदिक उपायों हेतु आचार्य अजय कुमार अग्रवाल से सीधे संपर्क करें।",
    heroCtaBook: "परामर्श बुक करें",
    aboutBadge: "ज्योतिषाचार्य परिचय",
    aboutTitle: "आचार्य अजय कुमार अग्रवाल",
    aboutBio1: "12+ वर्षों के अनुभव के साथ वैदिक एवं के.पी. ज्योतिष में प्रतिष्ठित, विश्वभर के जातकों को सही दिशा दिखाते हैं।",
    aboutBio2: "पूर्व भारतीय क्रिकेटर नयन मोंगिया जी द्वारा राष्ट्रीय पुरस्कार से सम्मानित।",
    aboutFeature1Title: "12,500+ जातक",
    aboutFeature1Desc: "28+ देशों में जातकों को सटीक मार्गदर्शन।",
    aboutFeature2Title: "राष्ट्रीय पुरस्कार विजेता",
    aboutFeature2Desc: "मोस्ट ट्रस्टेड एस्ट्रोलॉजर ऑफ द ईयर से सम्मानित।",
    aboutFeature3Title: "प्राण प्रतिष्ठित उपाय",
    aboutFeature3Desc: "सिद्ध वैदिक यंत्र एवं व्यावहारिक समाधान।",
    aboutCta: "अजय जी से परामर्श बुक करें",
    servicesBadge: "ज्योतिषीय सेवाएं",
    servicesTitle: "वैदिक एवं के.पी. परामर्श सेवाएं",
    servicesSub: "आपकी जन्मपत्रिका के अनुरूप सटीक एवं व्यावहारिक समाधान।",
    tabConsultancy: "परामर्श सत्र",
    tabRemedial: "उपाय एवं यंत्र",
    yantrasBadge: "प्राण प्रतिष्ठित यंत्र",
    yantrasTitle: "सिद्ध वैदिक यंत्र",
    yantrasSub: "3-दिवसीय वैदिक अनुष्ठान द्वारा सिद्ध किए गए दिव्य यंत्र।",
    filterYantras: "दीवार यंत्र",
    orderNowBtn: "यंत्र ऑर्डर करें",
    whatsAppOrderBtn: "व्हाट्सएप पर ऑर्डर करें",
    yantraConsecrationNotice: "प्रत्येक यंत्र को व्यक्तिगत नाम व गोत्र से 3 दिन सिद्ध करके स्पीड पोस्ट से भेजा जाता है।",
  },
};
