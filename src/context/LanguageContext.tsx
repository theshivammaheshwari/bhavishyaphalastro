"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load from localStorage if present
    const saved = localStorage.getItem("bhavishyaphal_lang") as Language;
    if (saved && (saved === "en" || saved === "hi")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bhavishyaphal_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
