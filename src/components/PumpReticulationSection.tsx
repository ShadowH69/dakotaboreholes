import { Sun, Plug, Droplets } from "lucide-react";
import pumpBg from "@/assets/slide-pump.jpg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const options = [
  { icon: Sun, title: "Solar Pumps", desc: "Sustainable off-grid pump systems powered by solar energy." },
  { icon: Plug, title: "Electrical Pumps", desc: "High-capacity installations for commercial and residential use." },
  { icon: Droplets, title: "Reticulation", desc: "Complete water delivery to tanks, homes, and irrigation." },
];

const PumpReticulationSection = () => (
  <section className="relative py-14 sm:py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        <div>
          <RevealWrapper direction="left">
            <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Step 3</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground mt-1.5 sm:mt-2 leading-tight">
              Pump &<br />Reticulation
            </h2>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Reliable pump systems tailored to your water demand with complete distribution networks.
            </p>
          </RevealWrapper>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {options.map((o, i) => (
              <RevealWrapper key={o.title} direction="left" delay={0.15 + i * 0.08}>
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <o.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold uppercase text-foreground">{o.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-0.5">{o.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        <RevealWrapper direction="right" delay={0.1}>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] group">
            <img src={pumpBg} alt="Pump installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/40 to-transparent" />
          </div>
        </RevealWrapper>
      </div>
    </div>
  </section>
);

export default PumpReticulationSection;
