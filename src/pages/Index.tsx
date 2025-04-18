
import { useState, useEffect } from "react";
import Navbar, { languages, LanguageContext } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import RoyaltyDivision from "@/components/RoyaltyDivision";
import AccessForm from "@/components/AccessForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  useEffect(() => {
    // Listen for language change events
    const handleLanguageChange = (event: CustomEvent<{ language: string }>) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage: setCurrentLanguage }}>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <RoyaltyDivision />
          <HowItWorks />
          <AccessForm />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default Index;
