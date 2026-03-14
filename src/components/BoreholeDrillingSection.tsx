import { CheckCircle2 } from "lucide-react";
import drillingBg from "@/assets/slide-drilling.jpg";

const points = [
  "Methods matched to ground conditions",
  "Structural integrity guaranteed",
  "Optimal yield engineering",
  "Professional casing and sealing",
  "Full geological logging",
  "Post-drill yield testing",
];

const BoreholeDrillingSection = () => {
  return (
    <section className="relative py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
            <img src={drillingBg} alt="Borehole drilling" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>

          {/* Right — Content */}
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Step 2</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground mt-3 leading-tight">
              Borehole<br />Drilling
            </h2>
            <p className="mt-6 text-primary-foreground/60 font-body text-lg leading-relaxed">
              Professional drilling using methods selected based on your site's specific geological conditions.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/80 font-body">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoreholeDrillingSection;
