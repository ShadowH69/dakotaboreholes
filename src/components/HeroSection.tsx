import { ArrowDown, Droplets, Shield, Zap } from "lucide-react";
import logo from "@/assets/dakota-logo.png";
import heroBg from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <img src={logo} alt="Dakota Plumbing" className="h-12 w-auto" />
              <div>
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Dakota Plumbing (Pty) Ltd</span>
              </div>
            </div>

            <h1 className="animate-fade-up animation-delay-200 font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-primary-foreground leading-[0.9] tracking-tight">
              Find Water
              <br />
              <span className="text-secondary">Find Freedom</span>
            </h1>

            <p className="animate-fade-up animation-delay-400 mt-8 text-primary-foreground/60 font-body text-lg md:text-xl leading-relaxed max-w-lg">
              Complete turnkey groundwater solutions — from professional surveys to fully equipped, working boreholes.
            </p>

            <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded font-heading text-base uppercase tracking-wider text-primary-foreground hover:brightness-125 transition">
                Our Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 px-8 py-4 rounded font-heading text-base uppercase tracking-wider text-primary-foreground/80 hover:border-secondary hover:text-secondary transition">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="animate-fade-up animation-delay-600 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03]">
              <Droplets className="mx-auto mb-3 text-water" size={28} />
              <span className="block font-heading text-4xl font-bold text-primary-foreground">300m</span>
              <span className="text-primary-foreground/50 font-body text-sm mt-1">Survey Depth</span>
            </div>
            <div className="text-center p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03]">
              <Shield className="mx-auto mb-3 text-secondary" size={28} />
              <span className="block font-heading text-4xl font-bold text-primary-foreground">13+</span>
              <span className="text-primary-foreground/50 font-body text-sm mt-1">Years Experience</span>
            </div>
            <div className="text-center p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03]">
              <Zap className="mx-auto mb-3 text-gold" size={28} />
              <span className="block font-heading text-4xl font-bold text-primary-foreground">100%</span>
              <span className="text-primary-foreground/50 font-body text-sm mt-1">Turnkey Service</span>
            </div>
          </div>
        </div>

        <a href="#solution" className="flex justify-center mt-16 animate-bounce text-primary-foreground/30">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
