import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slideHero from "@/assets/slide-hero.jpeg";
import slideSurvey from "@/assets/slide-survey.jpeg";
import slideWaterStatus from "@/assets/slide-water-status.jpeg";
import slideGeoSurveying from "@/assets/slide-geo-surveying.jpeg";
import slideDrilling from "@/assets/slide-drilling.jpeg";
import slideServices from "@/assets/slide-services.jpeg";
import slidePump from "@/assets/slide-pump.jpeg";
import slideCallNow from "@/assets/slide-call-now.jpeg";
import slideWhySurvey from "@/assets/slide-why-survey.jpeg";

const slides = [
  slideHero,
  slideServices,
  slideGeoSurveying,
  slideDrilling,
  slidePump,
  slideSurvey,
  slideWhySurvey,
  slideWaterStatus,
  slideCallNow,
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-foreground">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1)" : "scale(1.08)",
            transition: "opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: current === i ? 1 : 0,
          }}
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Subtle gradient overlay at bottom for blending into content */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground/30 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/80 hover:bg-foreground/50 hover:text-primary-foreground transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground/30 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/80 hover:bg-foreground/50 hover:text-primary-foreground transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              current === i
                ? "w-8 bg-secondary"
                : "w-2.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
