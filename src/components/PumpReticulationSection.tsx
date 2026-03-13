import { Zap, Home, Leaf } from "lucide-react";
import pumpBg from "@/assets/slide-pump.jpg";

const deliveryPoints = [
  { icon: Zap, text: "To tanks" },
  { icon: Home, text: "To homes" },
  { icon: Leaf, text: "And irrigation systems" },
];

const PumpReticulationSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pumpBg})` }} />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
            Pump & <span className="text-gold">Reticulation</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-8 border border-primary/30">
              <p className="text-primary-foreground/90 font-body text-lg leading-relaxed mb-6">
                We install reliable solar or electrical pump systems tailored to your water demand. Complete reticulation systems ensure efficient water delivery:
              </p>
              <ul className="space-y-4">
                {deliveryPoints.map((p) => (
                  <li key={p.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <p.icon size={20} className="text-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-primary-foreground">{p.text}</span>
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
              <div key={item.label} className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10 hover:-translate-y-1 transition-transform">
                <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground">{item.label}</h3>
                <p className="mt-2 text-primary-foreground/70 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpReticulationSection;
