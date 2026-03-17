import { useState, useCallback } from "react";
import { useNavigationType } from "react-router-dom";
import WaterSplash from "@/components/WaterSplash";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import GeoSurveyingSection from "@/components/GeoSurveyingSection";
import BoreholeDrillingSection from "@/components/BoreholeDrillingSection";
import PumpReticulationSection from "@/components/PumpReticulationSection";
import WhySurveySection from "@/components/WhySurveySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SPLASH_SESSION_KEY = "dakota-home-splash-played";

const Index = () => {
  const navigationType = useNavigationType();
  const [splashDone, setSplashDone] = useState(() => {
    if (typeof window === "undefined") return true;

    const hasPlayed = window.sessionStorage.getItem(SPLASH_SESSION_KEY) === "true";
    const shouldPlay = navigationType === "POP" && !hasPlayed;

    return !shouldPlay;
  });

  const handleSplashComplete = useCallback(() => {
    window.sessionStorage.setItem(SPLASH_SESSION_KEY, "true");
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <WaterSplash onComplete={handleSplashComplete} />}
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <ServicesSection />
      <GeoSurveyingSection />
      <BoreholeDrillingSection />
      <PumpReticulationSection />
      <WhySurveySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
