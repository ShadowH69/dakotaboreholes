import { useState, useCallback } from "react";
import WaterSplash from "@/components/WaterSplash";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhySurveySection from "@/components/WhySurveySection";
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
      <ServicesSection />
      <WhySurveySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
