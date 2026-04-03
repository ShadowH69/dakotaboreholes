import { Droplet, Gauge, Layers, Microscope, Ruler, ShieldCheck } from "lucide-react";
import whySurveyImage from "@/assets/why-survey-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const reasons = [
  { num: "01", icon: Droplet, title: "Ensure Water Supply", desc: "Drilling without a survey is a costly gamble. Start with evidence." },
  { num: "02", icon: Ruler, title: "Determine Depth", desc: "Know how deep the team needs to go before the rig arrives." },
  { num: "03", icon: Gauge, title: "Assess Quality", desc: "Target sustainable aquifers rather than surface seepage." },
  { num: "04", icon: Layers, title: "Read The Ground", desc: "Understand formations that affect casing and drilling stability." },
  { num: "05", icon: Microscope, title: "Use Science", desc: "Technical surveying gives a stronger, data-led starting point." },
  { num: "06", icon: ShieldCheck, title: "Protect Investment", desc: "Better planning safeguards your budget and system performance." },
];

const WhySurveySection = () => (
  <section id="why-survey" className="relative overflow-hidden py-20 lg:py-28">
    <div className="absolute inset-0">
      <img src={whySurveyImage} alt="" loading="lazy" className="h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[hsl(var(--section-dark))]/85" />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8">
      <RevealWrapper direction="up">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Important</span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Why Survey Before Drilling?
          </h2>
          <p className="mt-4 text-primary-foreground/55 leading-relaxed">
            A strong borehole project starts long before drilling. Here's why surveying matters.
          </p>
        </div>
      </RevealWrapper>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <RevealWrapper key={r.title} direction="up" delay={0.06 + i * 0.07}>
            <div className="group h-full rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/[0.08] hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-heading text-2xl font-bold text-primary-foreground/10">{r.num}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/8 transition-transform duration-300 group-hover:scale-110">
                  <r.icon size={18} className="text-secondary" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-primary-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/55">{r.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default WhySurveySection;
