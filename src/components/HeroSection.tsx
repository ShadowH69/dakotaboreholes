import { Droplets, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <Droplets className="mx-auto mb-6 text-water" size={48} />
        </div>
        <h1 className="animate-fade-up animation-delay-200 font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-primary-foreground leading-tight">
          Find Water
          <br />
          <span className="text-gold">Find Freedom</span>
        </h1>
        <p className="animate-fade-up animation-delay-400 mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto italic">
          Geo Hydrological Surveys & Borehole Drilling
        </p>
        <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider text-primary-foreground hover:brightness-125 transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider text-secondary-foreground hover:brightness-110 transition"
          >
            Get a Quote
          </a>
        </div>
        <a href="#services" className="inline-block mt-16 animate-bounce text-primary-foreground/50">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
