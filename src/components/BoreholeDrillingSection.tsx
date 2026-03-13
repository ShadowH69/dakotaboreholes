import { Drill, Mountain, Shield, Droplets } from "lucide-react";

const methods = [
  { icon: Mountain, text: "Ground conditions" },
  { icon: Shield, text: "Ensuring structural integrity" },
  { icon: Droplets, text: "Optimal yield" },
];

const BoreholeDrillingSection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-primary/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold uppercase text-primary-foreground mb-4">
              Professional Process
            </h3>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-6">
              Our drilling rigs are equipped to handle all geological formations across South Africa. From soft sedimentary rock to hard granite, we select the optimal drilling method based on survey results.
            </p>
            <div className="space-y-4">
              {["Site preparation & mobilization", "Drilling to target depth", "Casing & grouting installation", "Yield testing & water sampling", "Completion & handover"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-sm font-bold text-foreground">{i + 1}</span>
                  </div>
                  <span className="text-primary-foreground/80 font-body">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
              Borehole <span className="text-gold">Drilling</span>
            </h2>
            <div className="mt-8 bg-primary/20 backdrop-blur-sm rounded-lg p-8 border border-primary/30">
              <p className="text-primary-foreground/90 font-body text-lg leading-relaxed mb-6">
                Drilling methods selected based on:
              </p>
              <ul className="space-y-4">
                {methods.map((m) => (
                  <li key={m.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <m.icon size={20} className="text-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-primary-foreground">{m.text}</span>
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
