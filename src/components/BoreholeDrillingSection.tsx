import { Mountain, Shield, Droplets } from "lucide-react";
import drillingBg from "@/assets/slide-drilling.jpg";

const methods = [
  { icon: Mountain, text: "Ground conditions" },
  { icon: Shield, text: "Ensuring structural integrity" },
  { icon: Droplets, text: "Optimal yield" },
];

const BoreholeDrillingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${drillingBg})` }} />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-4">
              Professional Process
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our drilling rigs are equipped to handle all geological formations across South Africa. From soft sedimentary rock to hard granite, we select the optimal drilling method based on survey results.
            </p>
            <div className="space-y-4">
              {["Site preparation & mobilization", "Drilling to target depth", "Casing & grouting installation", "Yield testing & water sampling", "Completion & handover"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-sm font-bold text-foreground">{i + 1}</span>
                  </div>
                  <span className="text-muted-foreground font-body">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
              Borehole <span className="text-primary">Drilling</span>
            </h2>
            <div className="mt-8 bg-primary/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Drilling methods selected based on:
              </p>
              <ul className="space-y-4">
                {methods.map((m) => (
                  <li key={m.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <m.icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-foreground">{m.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoreholeDrillingSection;
