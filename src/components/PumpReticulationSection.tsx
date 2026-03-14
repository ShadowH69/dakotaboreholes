import { Sun, Plug, Droplets } from "lucide-react";
import pumpBg from "@/assets/slide-pump.jpg";

const options = [
  { icon: Sun, title: "Solar Pumps", desc: "Sustainable, off-grid pump systems powered by solar energy for remote locations." },
  { icon: Plug, title: "Electrical Pumps", desc: "High-capacity electrical pump installations for commercial and residential use." },
  { icon: Droplets, title: "Reticulation", desc: "Complete water delivery systems to tanks, homes, and irrigation networks." },
];

const PumpReticulationSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Step 3</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-3 leading-tight">
              Pump &<br />Reticulation
            </h2>
            <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
              We install reliable pump systems tailored to your water demand with complete distribution networks.
            </p>

            <div className="mt-10 space-y-6">
              {options.map((o) => (
                <div key={o.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <o.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase text-foreground">{o.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mt-1">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
            <img src={pumpBg} alt="Pump installation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpReticulationSection;
