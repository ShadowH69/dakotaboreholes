import { Container, Drill, Search, Wrench } from "lucide-react";
import solutionImage from "@/assets/solution-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Search, title: "Survey", desc: "Advanced geophysical surveying to locate the best water-bearing zones up to 300m deep." },
  { icon: Drill, title: "Drill", desc: "Professional borehole drilling using methods matched to your site's geology." },
  { icon: Wrench, title: "Equip", desc: "Solar or electrical pump installation with full reticulation systems." },
  { icon: Container, title: "Deliver", desc: "Tank installation and water delivery to homes, farms, and irrigation." },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <RevealWrapper direction="left">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl group">
              <img
                src={solutionImage}
                alt="Borehole drilling equipment working at sunset"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
              <div className="absolute left-6 bottom-6 max-w-md rounded-2xl border border-primary-foreground/15 bg-foreground/55 p-5 backdrop-blur-sm">
                <p className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Turnkey approach</p>
                <p className="mt-2 text-primary-foreground/85 leading-relaxed">
                  One coordinated team handling the survey, drilling, pump setup, and final water delivery.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <div>
            <RevealWrapper direction="right" delay={0.1}>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">How we work</span>
              <h2 className="mt-3 font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
                Our Solution
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A complete groundwater solution designed to feel simple on your side and expertly managed on ours.
              </p>
            </RevealWrapper>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {steps.map((step, i) => (
                <RevealWrapper key={step.title} direction="up" delay={0.15 + i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 hover:scale-110">
                        <step.icon size={22} className="text-primary" />
                      </div>
                      <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary">Step {i + 1}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
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
