import { Container, Drill, Search, Wrench } from "lucide-react";
import solutionImage from "@/assets/solution-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";
import { useSiteConfig } from "@/lib/siteConfig";

const steps = [
  { icon: Search, title: "Survey", desc: "Advanced geophysical surveying to locate water-bearing zones up to 300m deep." },
  { icon: Drill, title: "Drill", desc: "Professional borehole drilling matched to your site's geology." },
  { icon: Wrench, title: "Equip", desc: "Solar or electrical pump installation with full reticulation." },
  { icon: Container, title: "Deliver", desc: "Tank installation and water delivery to homes, farms, and irrigation." },
];

const SolutionSection = () => {
  const { config } = useSiteConfig();

  return (
    <section id="solution" className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
          <RevealWrapper direction="left">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
              <img
                src={solutionImage}
                alt="Borehole drilling at sunset"
                loading="lazy"
                className="h-[280px] sm:h-[340px] lg:h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/80 via-transparent to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5 glass-card p-4 sm:p-5">
                <p className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary">Turnkey approach</p>
                <p className="mt-1 sm:mt-1.5 text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                  One coordinated team handling survey, drilling, pump setup, and final water delivery.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <div>
            <RevealWrapper direction="right" delay={0.1}>
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">How we work</span>
              <h2 className="mt-1.5 sm:mt-2 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-tight">
                {config.text.solutionTitle}
              </h2>
              <p className="mt-3 sm:mt-4 max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed">
                {config.text.solutionSubtitle}
              </p>
            </RevealWrapper>

            <div className="mt-6 sm:mt-8 grid gap-2.5 sm:gap-3 grid-cols-2">
              {steps.map((step, i) => (
                <RevealWrapper key={step.title} direction="up" delay={0.15 + i * 0.08}>
                  <div className="group h-full rounded-xl sm:rounded-2xl border border-border bg-card p-3.5 sm:p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                        <step.icon size={16} className="text-primary sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                        Step {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-base sm:text-xl font-bold uppercase text-foreground">{step.title}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
