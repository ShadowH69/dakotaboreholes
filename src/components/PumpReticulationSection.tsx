import { Zap, Home, Leaf } from "lucide-react";

const deliveryPoints = [
  { icon: Zap, text: "To tanks" },
  { icon: Home, text: "To homes" },
  { icon: Leaf, text: "And irrigation systems" },
];

const PumpReticulationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
            Pump & <span className="text-primary">Reticulation</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                We install reliable solar or electrical pump systems tailored to your water demand. Complete reticulation systems ensure efficient water delivery:
              </p>
              <ul className="space-y-4">
                {deliveryPoints.map((p) => (
                  <li key={p.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <p.icon size={20} className="text-accent-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-foreground">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Solar Pumps", desc: "Energy-efficient solar-powered systems for off-grid water supply" },
              { label: "Electrical Pumps", desc: "High-performance electrical systems for maximum output" },
              { label: "JoJo Tanks", desc: "Professional tank installation with full plumbing connections" },
              { label: "Pressure Systems", desc: "Complete pressure management for consistent water flow" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-6 shadow-lg border border-border hover:-translate-y-1 transition-transform">
                <h3 className="font-heading text-lg font-semibold uppercase text-foreground">{item.label}</h3>
                <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpReticulationSection;
