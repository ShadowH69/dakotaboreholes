import { Search, Drill, Wrench, Container } from "lucide-react";

const steps = [
  { icon: Search, title: "Survey", desc: "Advanced geophysical surveying to locate the best water-bearing zones up to 300m deep." },
  { icon: Drill, title: "Drill", desc: "Professional borehole drilling using methods matched to your site's geology." },
  { icon: Wrench, title: "Equip", desc: "Solar or electrical pump installation with full reticulation systems." },
  { icon: Container, title: "Deliver", desc: "Tank installation and water delivery to homes, farms, and irrigation." },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">How we work</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-3">
            Our Solution
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
            A complete turnkey groundwater solution — from professional water surveys to fully equipped, working boreholes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative bg-card rounded-lg border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon size={24} className="text-primary" />
                </div>
                <span className="font-heading text-xs uppercase tracking-[0.15em] text-secondary">Step {i + 1}</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-foreground mt-1">{step.title}</h3>
                <p className="mt-3 text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
