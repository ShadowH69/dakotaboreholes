import { useState, useEffect, useCallback, useRef } from "react";
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
  slideHero, slideServices, slideGeoSurveying, slideDrilling,
  slidePump, slideSurvey, slideWhySurvey, slideWaterStatus, slideCallNow,
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = (i: number) => { setCurrent(i); resetTimer(); };
  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  // Touch swipe
  const touchX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section
      className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? "scale(1)" : "scale(1.06)",
            transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 8s cubic-bezier(0.4,0,0.2,1)",
            zIndex: current === i ? 1 : 0,
          }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--section-dark))]/40 via-transparent to-[hsl(var(--section-dark))]/70" />
        </div>
      ))}

      {/* Bottom gradient blending */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-[2]" />

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous" className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              current === i ? "w-8 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
