import { Container, Drill, Search, Wrench } from "lucide-react";
import solutionImage from "@/assets/solution-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Search, title: "Survey", desc: "Advanced geophysical surveying to locate water-bearing zones up to 300m deep." },
  { icon: Drill, title: "Drill", desc: "Professional borehole drilling matched to your site's geology." },
  { icon: Wrench, title: "Equip", desc: "Solar or electrical pump installation with full reticulation." },
  { icon: Container, title: "Deliver", desc: "Tank installation and water delivery to homes, farms, and irrigation." },
];

const SolutionSection = () => (
  <section id="solution" className="relative py-20 lg:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <RevealWrapper direction="left">
          <div className="relative overflow-hidden rounded-3xl group">
            <img
              src={solutionImage}
              alt="Borehole drilling at sunset"
              loading="lazy"
              className="h-[380px] lg:h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/80 via-transparent to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 glass-card p-5">
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-secondary">Turnkey approach</p>
              <p className="mt-1.5 text-primary-foreground/80 text-sm leading-relaxed">
                One coordinated team handling survey, drilling, pump setup, and final water delivery.
              </p>
            </div>
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper direction="right" delay={0.1}>
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">How we work</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-tight">
              Our Solution
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              A complete groundwater solution — expertly managed from survey to water delivery.
            </p>
          </RevealWrapper>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {steps.map((step, i) => (
              <RevealWrapper key={step.title} direction="up" delay={0.15 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <step.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
