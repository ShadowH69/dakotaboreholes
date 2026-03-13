import { Droplet, Ruler, Gauge, Layers, Microscope, ShieldCheck } from "lucide-react";
import logo from "@/assets/dakota-logo.png";
import whySurveyBg from "@/assets/slide-whysurvey.jpg";

const reasons = [
  { num: 1, icon: Droplet, title: "Ensure Feasible Water Supply", desc: "Eliminate the 'Dry Hole' Risk: Drilling without a survey is a R100,000+ gamble. Our hydrogeologists pinpoint the exact spot with the highest possible yield!" },
  { num: 2, icon: Ruler, title: "Determine Proper Depth", desc: "Determine Depth & Cost: Know how deep you need to go before the rig arrives." },
  { num: 3, icon: Gauge, title: "Right Pump Size", desc: "Quality Assessment: We assess and identify water-bearing fractures, ensuring sustainable aquifers and not just surface seepage." },
  { num: 4, icon: Layers, title: "Material Analysis", desc: "Identify soil types for proper casing to prevent shaft collapse." },
  { num: 5, icon: Microscope, title: "Scientific Approach", desc: "Only fools drill blindly without underground analysis up to 300m depth!" },
  { num: 6, icon: ShieldCheck, title: "Secure Investment", desc: "Legal & Compliance: Ensure your borehole site meets municipal bylaws and distance requirements from septic tanks." },
];

const WhySurveySection = () => {
  return (
    <section id="why-survey" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${whySurveyBg})` }} />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - title & logo */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight italic"
              style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}
            >
              Why it's important to do a Geo Survey before drilling
            </h2>
            <div className="mt-8">
              <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-24 w-auto drop-shadow-lg" />
              <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
                Dakota Plumbing (Pty) Ltd
              </p>
            </div>
          </div>

          {/* Right side - numbered cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-lg overflow-hidden border border-primary/40"
                style={{ background: 'hsla(207, 70%, 35%, 0.9)' }}
              >
                {/* Number badge + icon */}
                <div className="flex items-center gap-2 px-4 pt-4 pb-2">
                  <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-heading text-sm font-bold text-primary-foreground">
                    {r.num}
                  </span>
                  <r.icon size={28} className="text-gold" />
                </div>
                {/* Title */}
                <h3 className="px-4 font-heading text-base font-bold uppercase text-primary-foreground leading-tight">
                  {r.title}
                </h3>
                {/* Description */}
                <div className="mt-2 mx-3 mb-3 rounded bg-primary-foreground/10 p-3">
                  <p className="text-primary-foreground/80 font-body text-xs leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySurveySection;
