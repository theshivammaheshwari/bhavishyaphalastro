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
  navYantras: string;
  navKundli: string;
  navGallery: string;
  navReviews: string;
  navBlog: string;
  navContact: string;
  bookConsultation: string;
  galleryAwards: string;
  galleryClients: string;
  galleryPress: string;
  galleryAstrologers: string;
  gallerySocial: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  heroCtaBook: string;
  heroCtaKundli: string;
  statExperience: string;
  statReadings: string;
  statDignitaries: string;
  statAccuracy: string;
  statExpLabel: string;
  statReadingsLabel: string;
  statDignitariesLabel: string;
  statAccuracyLabel: string;

  // Banner
  bannerTitle: string;
  bannerSub: string;
  bannerCta: string;

  // About
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

  // Services
  servicesBadge: string;
  servicesTitle: string;
  servicesSub: string;
  tabConsultancy: string;
  tabRemedial: string;
  bookNowBtn: string;
  viewDetailsBtn: string;

  // Yantras
  yantrasBadge: string;
  yantrasTitle: string;
  yantrasSub: string;
  filterAll: string;
  filterYantras: string;
  filterPendants: string;
  orderNowBtn: string;
  whatsAppOrderBtn: string;
  yantraConsecrationNotice: string;

  // Gallery
  galleryBadge: string;
  galleryTitle: string;
  gallerySub: string;

  // Reviews
  reviewsBadge: string;
  reviewsTitle: string;
  reviewsSub: string;

  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSub: string;

  // Booking
  bookingBadge: string;
  bookingTitle: string;
  bookingSub: string;
  fullName: string;
  phoneLabel: string;
  emailLabel: string;
  serviceLabel: string;
  dobLabel: string;
  birthTimeLabel: string;
  birthPlaceLabel: string;
  modeLabel: string;
  preferredDateLabel: string;
  questionsLabel: string;
  submitBtn: string;
  whatsappConnectBtn: string;
  backBtn: string;
  fullscreenBtn: string;

  // Yantra Order Modal
  yantraOrderTitle: string;
  yantraOrderSub: string;
  shippingAddress: string;
  pincode: string;
  cityState: string;
  gotraLabel: string;
  paymentMethod: string;
  confirmOrderBtn: string;

  // Footer
  footerDesc: string;
  quickLinks: string;
  officialServices: string;
  contactOffice: string;
  rightsReserved: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    topNotice: "Personalized Vedic & KP Astrology Guidance",
    phone: "+91 91160 55424",
    email: "info@bhavishyaphalastro.online",

    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navYantras: "Sacred Yantras",
    navKundli: "Kundli Hub",
    navGallery: "Gallery",
    navReviews: "Reviews",
    navBlog: "Blog",
    navContact: "Contact",
    bookConsultation: "Book Consultation",
    galleryAwards: "Awards & Honors",
    galleryClients: "Distinguished Clients",
    galleryPress: "Press & Articles",
    galleryAstrologers: "Moments with Astrologers",
    gallerySocial: "Social Contributions",

    heroBadge: "National Excellence in Vedic Astrology",
    heroTitle1: "Decode Your Destiny With",
    heroTitle2: "Vedic Precision & Divine",
    heroTitle3: "Sacred Remedies",
    heroSub:
      "Guided by Astrologer Swati Pandey — Honored by Deputy Chief Minister Prem Bairwa, leading political dignitaries, celebrities, and thousands of global seekers.",
    heroCtaBook: "Book Private Consultation",
    heroCtaKundli: "Free Kundli & Milan Hub",
    statExperience: "14+",
    statExpLabel: "Years Vedic Mastery",
    statReadings: "25,000+",
    statReadingsLabel: "Verified Consultations",
    statDignitaries: "100+",
    statDignitariesLabel: "VIPs & Celebrities",
    statAccuracy: "99.4%",
    statAccuracyLabel: "Client Satisfaction",

    bannerTitle: "Generate Your Vedic Kundli & Match Horoscopes Online",
    bannerSub:
      "Explore our free 7-in-1 calculator hub: Birth Charts, 36-Point Guna Milan, Daily Horoscopes & Numerology.",
    bannerCta: "Launch Kundli Hub",

    aboutBadge: "Renowned Vedic Astrologer & Vastu Consultant",
    aboutTitle: "Meet Astrologer Swati Pandey",
    aboutBio1:
      "Astrologer Swati Pandey is one of India's most respected Vedic and KP astrologers, renowned for mathematical rigor, deep intuitive wisdom, and practical astrological remedies that transform lives.",
    aboutBio2:
      "Honored on prestigious national platforms by Deputy Chief Minister Prem Chand Bairwa, prominent politicians, national media networks, and respected spiritual conclaves across India.",
    aboutFeature1Title: "Vedic Precision (Parashari & KP)",
    aboutFeature1Desc: "Synthesizing classical Brihat Parashara principles with modern KP sub-lord accuracy.",
    aboutFeature2Title: "Empowering Lal Kitab Remedies",
    aboutFeature2Desc: "Simple, highly effective, non-fear-based remedial measures for real life breakthroughs.",
    aboutFeature3Title: "Consecrated Sacred Yantras",
    aboutFeature3Desc: "Authentic Pran-Pratishtha consecrated geometrical yantras energized for career, health, and peace.",
    aboutCta: "Schedule Private Session",

    servicesBadge: "Astrological Consultation & Remedial Solutions",
    servicesTitle: "Sacred Consultations & Products",
    servicesSub:
      "Select a comprehensive consultation package tailored to your life situation, or explore personalized remedial instruments.",
    tabConsultancy: "Consultation Packages (8)",
    tabRemedial: "Remedial Services (4)",
    bookNowBtn: "Book Session",
    viewDetailsBtn: "View Details",

    yantrasBadge: "Consecrated Vedic Geometries",
    yantrasTitle: "Sacred Yantras & Yantra Pendants",
    yantrasSub:
      "Every Yantra and Sacred Pendant is consecrated with authentic Vedic Pran Pratishtha rituals by our scholars before dispatch. Fixed at an accessible single price of ₹3,999/- each.",
    filterAll: "All Items",
    filterYantras: "Wall / Altar Yantras",
    filterPendants: "Wearable Pendants",
    orderNowBtn: "Order Now",
    whatsAppOrderBtn: "WhatsApp Order",
    yantraConsecrationNotice:
      "Each yantra order includes personalized Vedic Pran Pratishtha energization performed specifically with your Name, Gotra and Nakshatra before secure dispatch.",

    galleryBadge: "Recognitions & Public Trust",
    galleryTitle: "Dignitaries, Awards & Conclaves",
    gallerySub:
      "A glimpse into our public recognitions, high-profile dignitaries, national news coverage, and philanthropic contributions.",

    reviewsBadge: "Client Testimonials",
    reviewsTitle: "Words of Gratitude & Success",
    reviewsSub: "Read real experiences from families, professionals, and seekers blessed with our astrological guidance.",

    faqBadge: "Clear Answers",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Find quick answers regarding consultation modes, privacy, birth time accuracy, and consecrated yantras.",

    bookingBadge: "Private Consultation Session",
    bookingTitle: "Book Your Vedic Consultation",
    bookingSub: "Share your birth details below. Your session will be structured with utmost confidentiality.",
    fullName: "Full Name",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email Address (Optional)",
    serviceLabel: "Consultation Service",
    dobLabel: "Date of Birth",
    birthTimeLabel: "Birth Time",
    birthPlaceLabel: "Birth City / Place",
    modeLabel: "Consultation Mode",
    preferredDateLabel: "Preferred Date",
    questionsLabel: "Specific Questions / Life Situation",
    submitBtn: "Submit Consultation Request",
    whatsappConnectBtn: "Instant WhatsApp Connect",
    backBtn: "← Back / Close",
    fullscreenBtn: "Full Screen",

    yantraOrderTitle: "Consecrated Yantra Order Form",
    yantraOrderSub: "Personalized Pran Pratishtha Consecration & Secure Express Home Delivery",
    shippingAddress: "Complete Delivery Address",
    pincode: "Postal PIN Code",
    cityState: "City, State",
    gotraLabel: "Gotra & Nakshatra (For Consecration Ritual)",
    paymentMethod: "Payment Preference",
    confirmOrderBtn: "Confirm & Place Yantra Order (₹3,999/-)",

    footerDesc:
      "Bhavishyaphal Astrology Services by Astrologer Swati Pandey provides authentic Vedic, KP, and Lal Kitab astrological consultations, Kundli matchmaking, and consecrated Yantras.",
    quickLinks: "Quick Navigation",
    officialServices: "Key Services",
    contactOffice: "Head Office & Contact",
    rightsReserved: "All rights reserved. Designed for spiritual elevation & celestial clarity.",
  },

  hi: {
    topNotice: "व्यक्तिगत वैदिक एवं के.पी. ज्योतिषीय मार्गदर्शन",
    phone: "+91 91160 55424",
    email: "info@bhavishyaphalastro.online",

    navHome: "मुख्य पृष्ठ",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएं",
    navYantras: "सिद्ध यंत्र",
    navKundli: "कुंडली हब",
    navGallery: "गैलरी",
    navReviews: "समीक्षाएं",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    bookConsultation: "परामर्श बुक करें",
    galleryAwards: "पुरस्कार एवं सम्मान",
    galleryClients: "विशिष्ट अतिथि व क्लाइंट्स",
    galleryPress: "प्रेस व समाचार",
    galleryAstrologers: "विद्वान ज्योतिषी समागम",
    gallerySocial: "सामाजिक योगदान",

    heroBadge: "वैदिक ज्योतिष में राष्ट्रीय स्तर पर सम्मानित",
    heroTitle1: "अपने भाग्य को पहचानें",
    heroTitle2: "सटीक वैदिक गणना एवं",
    heroTitle3: "दिव्य अनुभूत उपायों से",
    heroSub:
      "प्रसिद्ध ज्योतिषी स्वाति पांडे द्वारा निर्देशित — राजस्थान के उपमुख्यमंत्री प्रेम बैरवा, प्रख्यात राजनीतिज्ञों, हस्तियों और विश्वभर के हजारों जातकों द्वारा सम्मानित एवं विश्वसनीय।",
    heroCtaBook: "निजी परामर्श बुक करें",
    heroCtaKundli: "फ्री कुंडली व गुण मिलान",
    statExperience: "14+ वर्ष",
    statExpLabel: "वैदिक अनुभव",
    statReadings: "25,000+",
    statReadingsLabel: "सफल भविष्यवाणियां",
    statDignitaries: "100+",
    statDignitariesLabel: "विशिष्ट हस्तियां",
    statAccuracy: "99.4%",
    statAccuracyLabel: "संतुष्ट जातक",

    bannerTitle: "अपनी वैदिक कुंडली बनाएं एवं फ्री में वर-वधू गुण मिलान करें",
    bannerSub:
      "हमारे निःशुल्क 7-इन-1 कैलकुलेटर हब का लाभ उठाएं: जन्म कुंडली, 36 गुण मिलान, दैनिक राशिफल और अंकशास्त्र।",
    bannerCta: "कुंडली हब खोलें",

    aboutBadge: "प्रख्यात वैदिक ज्योतिषी एवं वास्तु सलाहकार",
    aboutTitle: "ज्योतिषी स्वाति पांडे से मिलें",
    aboutBio1:
      "ज्योतिषी स्वाति पांडे भारत की प्रतिष्ठित वैदिक एवं के.पी. ज्योतिषियों में से एक हैं, जो अपनी सटीक गणितीय गणना, गहन अंतर्दृष्टि और चमत्कारी लाल किताब उपायों के लिए जानी जाती हैं।",
    aboutBio2:
      "राजस्थान के उप-मुख्यमंत्री डॉ. प्रेम चंद बैरवा, देश के शीर्ष राजनीतिज्ञों, राष्ट्रीय मीडिया चैनलों एवं प्रतिष्ठित ज्योतिष सम्मेलनों द्वारा कई बार सम्मानित की जा चुकी हैं।",
    aboutFeature1Title: "सटीक वैदिक एवं के.पी. पद्धति",
    aboutFeature1Desc: "महर्षि पराशर सिद्धांत और आधुनिक के.पी. उप-नक्षत्र पद्धति का अद्भुत संगम।",
    aboutFeature2Title: "सरल व प्रभावशाली लाल किताब उपाय",
    aboutFeature2Desc: "बिना किसी भय के जीवन की समस्याओं को सुलझाने वाले अचूक व सरल सात्विक उपाय।",
    aboutFeature3Title: "प्राण-प्रतिष्ठित सिद्ध यंत्र",
    aboutFeature3Desc: "धन, स्वास्थ्य, विवाह व व्यापार में सफलता हेतु वैदिक मंत्रों से सिद्ध किए गए प्रामाणिक यंत्र।",
    aboutCta: "अपॉइंटमेंट बुक करें",

    servicesBadge: "ज्योतिषीय परामर्श एवं दिव्य समाधान",
    servicesTitle: "परामर्श सेवाएं एवं वैदिक समाधान",
    servicesSub:
      "अपनी आवश्यकतानुसार संपूर्ण जीवन, विवाह, करियर, संतान अथवा व्यापार के लिए विशेष परामर्श चुनें।",
    tabConsultancy: "परामर्श पैकेज (8)",
    tabRemedial: "उपचारात्मक सेवाएं (4)",
    bookNowBtn: "परामर्श लें",
    viewDetailsBtn: "विस्तार देखें",

    yantrasBadge: "सिद्ध वैदिक ज्यामिति",
    yantrasTitle: "सिद्ध यंत्र एवं यंत्र लॉकेट संग्रह",
    yantrasSub:
      "प्रत्येक यंत्र एवं लॉकेट को वैदिक विद्वानों द्वारा आपके नाम एवं गोत्र से विधिवत प्राण-प्रतिष्ठित करके भेजा जाता है। एक समान विशेष मूल्य: ₹3,999/- प्रत्येक।",
    filterAll: "सभी यंत्र",
    filterYantras: "पूजा घर / दीवार यंत्र",
    filterPendants: "धारण करने योग्य लॉकेट",
    orderNowBtn: "ऑर्डर करें",
    whatsAppOrderBtn: "व्हाट्सएप ऑर्डर",
    yantraConsecrationNotice:
      "प्रत्येक यंत्र के साथ आपके नाम, गोत्र और नक्षत्र के अनुसार व्यक्तिगत प्राण-प्रतिष्ठा पूजा संपन्न करके सुरक्षित होम डिलीवरी की जाती है।",

    galleryBadge: "सम्मान एवं जन-विश्वास",
    galleryTitle: "विशिष्ट हस्तियां, पुरस्कार एवं सम्मेलन",
    gallerySub:
      "उप-मुख्यमंत्री प्रेम बैरवा, राष्ट्रीय हस्तियों, ज्योतिषी सम्मेलनों और सामाजिक सम्मानों की झलकियां।",

    reviewsBadge: "संतुष्ट जातकों के अनुभव",
    reviewsTitle: "जातकों के विचार एवं कृतज्ञता",
    reviewsSub: "पढ़ें कैसे हमारी ज्योतिषीय सलाह ने परिवारों और व्यवसायियों के जीवन में नई दिशा दी।",

    faqBadge: "स्पष्ट समाधान",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSub: "परामर्श के तरीके, समय, गोपनीयता और सिद्ध यंत्रों से जुड़े सामान्य प्रश्नों के उत्तर।",

    bookingBadge: "गोपनीय परामर्श सत्र",
    bookingTitle: "अपना वैदिक परामर्श बुक करें",
    bookingSub: "कृपया नीचे अपनी जन्म कुंडली का विवरण साझा करें। आपकी सभी जानकारी पूर्णतः गोपनीय रखी जाएगी।",
    fullName: "पूरा नाम",
    phoneLabel: "फोन / व्हाट्सएप नंबर",
    emailLabel: "ईमेल (वैकल्पिक)",
    serviceLabel: "परामर्श सेवा चुनें",
    dobLabel: "जन्म तिथि",
    birthTimeLabel: "जन्म समय",
    birthPlaceLabel: "जन्म स्थान (शहर/राज्य)",
    modeLabel: "परामर्श का माध्यम",
    preferredDateLabel: "पसंदीदा तिथि",
    questionsLabel: "अपने मुख्य प्रश्न / समस्या का विवरण",
    submitBtn: "परामर्श फॉर्म जमा करें",
    whatsappConnectBtn: "सीधे व्हाट्सएप पर भेजें",
    backBtn: "← वापस जाएं / बंद करें",
    fullscreenBtn: "फुल स्क्रीन",

    yantraOrderTitle: "सिद्ध यंत्र ऑर्डर फॉर्म",
    yantraOrderSub: "व्यक्तिगत नाम-गोत्र प्राण प्रतिष्ठा एवं सुरक्षित स्पीड पोस्ट डिलीवरी",
    shippingAddress: "डिलीवरी का पूरा पता (मकान नं., गली, क्षेत्र)",
    pincode: "पिन कोड (PIN Code)",
    cityState: "शहर एवं राज्य",
    gotraLabel: "गोत्र एवं जन्म नक्षत्र (प्राण प्रतिष्ठा संकल्प हेतु)",
    paymentMethod: "भुगतान का प्रकार",
    confirmOrderBtn: "ऑर्डर कन्फर्म करें (₹3,999/-)",

    footerDesc:
      "भविष्यफल ज्योतिष संस्थान — प्रख्यात ज्योतिषी स्वाति पांडे द्वारा संचालित। वैदिक, के.पी. एवं लाल किताब ज्योतिषीय परामर्श और सिद्ध यंत्रों का विश्वसनीय केंद्र।",
    quickLinks: "महत्वपूर्ण लिंक्स",
    officialServices: "प्रमुख सेवाएं",
    contactOffice: "कार्यालय एवं संपर्क",
    rightsReserved: "सर्वाधिकार सुरक्षित। आध्यात्मिक उन्नति एवं दिव्य मार्गदर्शन के लिए समर्पित।",
  },
};
