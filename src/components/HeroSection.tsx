import { ArrowDown, Droplets, Shield, Zap } from "lucide-react";
import logo from "@/assets/dakota-logo.png";
import heroBg from "@/assets/hero-main.jpg";
import { useSiteConfig } from "@/lib/siteConfig";

const stats = [
  { icon: Droplets, value: "300m", label: "Survey Depth", color: "text-water" },
  { icon: Shield, value: "13+", label: "Years Experience", color: "text-secondary" },
  { icon: Zap, value: "100%", label: "Turnkey Service", color: "text-gold" },
];

const HeroSection = () => {
  const { config } = useSiteConfig();

  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--section-dark))]/90 via-[hsl(var(--section-dark))]/70 to-[hsl(var(--section-dark))]/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
          <div>
            <div className="animate-fade-up flex items-center gap-3 mb-6 sm:mb-8">
              <img src={logo} alt="Dakota Plumbing" className="h-8 sm:h-10 w-auto" />
              <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary-foreground/40 font-medium">
                Dakota Plumbing (Pty) Ltd
              </span>
            </div>

            <h1 className="animate-fade-up animation-delay-200 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-primary-foreground leading-[0.9] tracking-tight">
              {config.text.heroTitle}
              <br />
              <span className="text-secondary">{config.text.heroHighlight}</span>
            </h1>

            <p className="animate-fade-up animation-delay-400 mt-5 sm:mt-8 text-primary-foreground/55 font-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              {config.text.heroSubtitle}
            </p>

            <div className="animate-fade-up animation-delay-600 mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-heading text-xs sm:text-sm uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 hover:scale-[1.02]"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/15 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-heading text-xs sm:text-sm uppercase tracking-wider text-primary-foreground/70 transition-all duration-300 hover:border-secondary hover:text-secondary hover:bg-secondary/5"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Stats cards */}
          <div className="animate-fade-up animation-delay-600 grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/[0.06] hover:-translate-y-1"
              >
                <s.icon className={`mx-auto mb-1.5 sm:mb-3 ${s.color}`} size={20} />
                <span className="block font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-foreground">
                  {s.value}
                </span>
                <span className="text-primary-foreground/40 font-body text-[9px] sm:text-[11px] md:text-xs mt-0.5 sm:mt-1 block leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a href="#solution" className="flex justify-center mt-8 lg:mt-16 animate-bounce text-primary-foreground/25">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
