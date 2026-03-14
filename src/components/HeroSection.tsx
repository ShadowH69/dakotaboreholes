import { ArrowDown } from "lucide-react";
import logo from "@/assets/dakota-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(207, 85%, 15%), hsl(207, 65%, 25%), hsl(200, 80%, 30%))' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, hsl(38, 70%, 55%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(200, 80%, 55%) 0%, transparent 50%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <img src={logo} alt="Dakota Plumbing" className="mx-auto h-20 md:h-28 w-auto mb-2 drop-shadow-lg animate-fade-up" />
        <p className="animate-fade-up text-primary-foreground/70 font-body text-sm tracking-widest">
          Dakota Plumbing (Pty) Ltd<br />Reg 2011/105031/07
        </p>

        <h1 className="animate-fade-up animation-delay-200 font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-primary-foreground leading-none mt-6 drop-shadow-lg">
          Find Water
          <br />
          Find Freedom
        </h1>

        <div className="animate-fade-up animation-delay-400 mt-8 max-w-3xl mx-auto rounded-md border border-primary-foreground/20 px-8 py-5"
          style={{ background: 'hsla(200, 60%, 40%, 0.35)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg md:text-xl italic leading-relaxed">
            We provide a complete turnkey groundwater solution — from professional water surveys to fully equipped, working boreholes. Our experienced team combines advanced technology with proven drilling expertise to deliver reliable water where you need it.
          </p>
        </div>

        <p className="animate-fade-up animation-delay-600 mt-8 font-heading text-xl md:text-2xl uppercase tracking-wider text-primary-foreground/90">
          Surveys &nbsp; Boreholes &nbsp; Pump Installation &nbsp; Tank Installation
        </p>

        <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider text-primary-foreground hover:brightness-125 transition">
            Our Services
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider text-secondary-foreground hover:brightness-110 transition">
            Get a Quote
          </a>
        </div>

        <a href="#solution" className="inline-block mt-12 animate-bounce text-primary-foreground/50">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
