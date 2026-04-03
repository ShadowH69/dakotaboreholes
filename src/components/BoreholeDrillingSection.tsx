import { CheckCircle2 } from "lucide-react";
import drillingBg from "@/assets/slide-drilling.jpg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const points = [
  "Methods matched to ground conditions",
  "Structural integrity guaranteed",
  "Optimal yield engineering",
  "Professional casing and sealing",
  "Full geological logging",
  "Post-drill yield testing",
];

const BoreholeDrillingSection = () => (
  <section className="relative py-20 lg:py-28 bg-[hsl(var(--section-dark))] overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <RevealWrapper direction="left">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img src={drillingBg} alt="Borehole drilling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/50 to-transparent" />
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper direction="right" delay={0.1}>
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Step 2</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground mt-2 leading-tight">
              Borehole<br />Drilling
            </h2>
            <p className="mt-4 text-primary-foreground/55 leading-relaxed">
              Professional drilling using methods selected based on your site's specific geological conditions.
            </p>
          </RevealWrapper>
          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <RevealWrapper key={p} direction="right" delay={0.2 + i * 0.05}>
                <li className="flex items-center gap-3 group">
                  <CheckCircle2 size={16} className="text-secondary flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-primary-foreground/75 text-sm">{p}</span>
                </li>
              </RevealWrapper>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default BoreholeDrillingSection;
