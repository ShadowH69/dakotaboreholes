import { Droplet, Ruler, Gauge, Layers, Microscope, ShieldCheck } from "lucide-react";

const reasons = [
  { num: "01", icon: Droplet, title: "Ensure Water Supply", desc: "Eliminate the 'Dry Hole' Risk — drilling without a survey is a R100,000+ gamble." },
  { num: "02", icon: Ruler, title: "Determine Depth", desc: "Know how deep you need to go before the rig arrives, controlling costs upfront." },
  { num: "03", icon: Gauge, title: "Quality Assessment", desc: "Identify water-bearing fractures ensuring sustainable aquifers, not surface seepage." },
  { num: "04", icon: Layers, title: "Material Analysis", desc: "Identify soil types for proper casing to prevent shaft collapse." },
  { num: "05", icon: Microscope, title: "Scientific Approach", desc: "Professional underground analysis up to 300m depth using advanced technology." },
  { num: "06", icon: ShieldCheck, title: "Legal Compliance", desc: "Ensure your borehole meets municipal bylaws and distance requirements." },
];

const WhySurveySection = () => {
  return (
    <section id="why-survey" className="relative py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Important</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3 leading-tight">
            Why Survey Before Drilling?
          </h2>
          <p className="mt-4 text-primary-foreground/60 font-body text-lg leading-relaxed">
            A professional geo survey is the most critical step. Here's why you should never drill blind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-3xl font-bold text-primary-foreground/15 group-hover:text-secondary/40 transition-colors">{r.num}</span>
                <r.icon size={22} className="text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-primary-foreground">{r.title}</h3>
              <p className="mt-2 text-primary-foreground/60 font-body text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySurveySection;
