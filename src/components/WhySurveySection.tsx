import { Droplet, Ruler, Gauge, Layers, Microscope, ShieldCheck } from "lucide-react";
import whySurveyBg from "@/assets/slide-whysurvey.jpg";

const reasons = [
  { icon: Droplet, title: "Ensure Feasible Water Supply", desc: "Eliminate the 'dry hole' risk. Our hydrogeologists pinpoint the exact spot with the highest possible yield." },
  { icon: Ruler, title: "Determine Proper Depth", desc: "Know how deep you need to go before the rig arrives. Determine depth and cost upfront." },
  { icon: Gauge, title: "Right Pump Size", desc: "We assess and identify water-bearing fractures, ensuring sustainable aquifers and not just surface seepage." },
  { icon: Layers, title: "Material Analysis", desc: "Identify soil types for proper casing to prevent shaft collapse." },
  { icon: Microscope, title: "Scientific Approach", desc: "Underground analysis up to 300m depth using cutting-edge geophysical equipment." },
  { icon: ShieldCheck, title: "Secure Investment", desc: "Ensure your borehole site meets municipal bylaws and distance requirements." },
];

const WhySurveySection = () => {
  return (
    <section id="why-survey" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${whySurveyBg})` }} />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-center text-primary-foreground">
          Why <span className="text-gold">Survey First?</span>
        </h2>
        <p className="text-center text-primary-foreground/70 mt-4 max-w-lg mx-auto font-body italic">
          Don't gamble with your boreholes. Drilling without a survey is a R100,000+ risk.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-primary/10 backdrop-blur-sm rounded-lg p-6 border border-primary/20 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <r.icon size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground">{r.title}</h3>
                  <p className="mt-2 text-primary-foreground/70 text-sm leading-relaxed font-body">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySurveySection;
