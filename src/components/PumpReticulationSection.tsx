import { Sun, Plug, Droplets } from "lucide-react";
import pumpBg from "@/assets/slide-pump.jpg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const options = [
  { icon: Sun, title: "Solar Pumps", desc: "Sustainable off-grid pump systems powered by solar energy." },
  { icon: Plug, title: "Electrical Pumps", desc: "High-capacity installations for commercial and residential use." },
  { icon: Droplets, title: "Reticulation", desc: "Complete water delivery to tanks, homes, and irrigation." },
];

const PumpReticulationSection = () => (
  <section className="relative py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <RevealWrapper direction="left">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Step 3</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-foreground mt-2 leading-tight">
              Pump &<br />Reticulation
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reliable pump systems tailored to your water demand with complete distribution networks.
            </p>
          </RevealWrapper>

          <div className="mt-8 space-y-4">
            {options.map((o, i) => (
              <RevealWrapper key={o.title} direction="left" delay={0.15 + i * 0.08}>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <o.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold uppercase text-foreground">{o.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">{o.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        <RevealWrapper direction="right" delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img src={pumpBg} alt="Pump installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/40 to-transparent" />
          </div>
        </RevealWrapper>
      </div>
    </div>
  </section>
);

export default PumpReticulationSection;
