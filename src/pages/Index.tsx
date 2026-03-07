import { useState, useCallback } from "react";
import WaterSplash from "@/components/WaterSplash";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhySurveySection from "@/components/WhySurveySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PlumbingHeroSection from "@/components/PlumbingHeroSection";
import PlumbingServicesSection from "@/components/PlumbingServicesSection";
import PlumbingWhySection from "@/components/PlumbingWhySection";
import { useSiteMode } from "@/contexts/SiteModeContext";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const { mode } = useSiteMode();

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <WaterSplash onComplete={handleSplashComplete} />}
      <Navbar />
      <div className="transition-opacity duration-500">
        {mode === "borehole" ? (
          <>
            <HeroSection />
            <ServicesSection />
            <WhySurveySection />
          </>
        ) : (
          <>
            <PlumbingHeroSection />
            <PlumbingServicesSection />
            <PlumbingWhySection />
          </>
        )}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
