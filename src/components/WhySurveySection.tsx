import { Droplet, Gauge, Layers, Microscope, Ruler, ShieldCheck } from "lucide-react";
import whySurveyImage from "@/assets/why-survey-clean.jpeg";

const reasons = [
  { num: "01", icon: Droplet, title: "Ensure Water Supply", desc: "Drilling without a survey is a costly gamble. Start with evidence, not guesswork." },
  { num: "02", icon: Ruler, title: "Determine Depth", desc: "Know how deep the team likely needs to go before the rig reaches site." },
  { num: "03", icon: Gauge, title: "Assess Quality", desc: "Target sustainable water-bearing zones rather than surface seepage." },
  { num: "04", icon: Layers, title: "Read The Ground", desc: "Understand soil and formation changes that affect casing and drilling stability." },
  { num: "05", icon: Microscope, title: "Use Science", desc: "Technical surveying gives the project a stronger, data-led starting point." },
  { num: "06", icon: ShieldCheck, title: "Protect Investment", desc: "Better planning helps safeguard your time, budget, and long-term system performance." },
];

const WhySurveySection = () => {
  return (
    <section id="why-survey" className="relative overflow-hidden bg-foreground py-24">
      <div className="absolute inset-0">
        <img
          src={whySurveyImage}
          alt="Survey markers positioned on a hillside at sunset"
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Important</span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Why Survey Before Drilling?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/65">
            A strong borehole project starts long before drilling. These are the reasons surveying matters first.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/[0.1]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-heading text-3xl font-bold text-primary-foreground/15">{reason.num}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <reason.icon size={20} className="text-secondary" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-primary-foreground">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySurveySection;
