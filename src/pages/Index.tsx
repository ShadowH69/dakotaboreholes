import { useState, useCallback } from "react";
import WaterSplash from "@/components/WaterSplash";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
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

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
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
