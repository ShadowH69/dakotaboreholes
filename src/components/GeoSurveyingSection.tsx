import { BarChart3, CheckCircle, Layers, MapPin, Radar, Target } from "lucide-react";
import geoImage from "@/assets/geo-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const features = [
  { icon: Radar, title: "Advanced Equipment", desc: "State-of-the-art surveying for accurate subsurface analysis." },
  { icon: Layers, title: "Ground Analysis", desc: "Detailed soil and formation assessment before drilling." },
  { icon: Target, title: "Precision Targeting", desc: "Pinpointing the strongest water-bearing fractures." },
  { icon: BarChart3, title: "Yield Estimation", desc: "Better insight into likely output before drilling." },
  { icon: MapPin, title: "Site Mapping", desc: "Optimal borehole position for access, safety, and yield." },
  { icon: CheckCircle, title: "Risk Reduction", desc: "Reducing wasted costs with informed decisions." },
];

const GeoSurveyingSection = () => (
  <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <RevealWrapper direction="left">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Step 1</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-tight">
              Geophysical<br />Surveying
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              Scientific surveying gives the drilling process direction and a much stronger chance of success.
            </p>
          </RevealWrapper>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <RevealWrapper key={f.title} direction="up" delay={0.1 + i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:-translate-y-1">
                  <f.icon size={18} className="mb-2 text-primary" />
                  <h3 className="font-heading text-base font-bold uppercase text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        <RevealWrapper direction="right" delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl group">
            <img
              src={geoImage}
              alt="Surveying technician with field equipment"
              loading="lazy"
              className="h-[450px] lg:h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/70 via-transparent to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 glass-card p-5">
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-secondary">Survey first</p>
              <p className="mt-1.5 text-primary-foreground/80 text-sm leading-relaxed">
                Ground conditions, structure, and likely yield assessed before drilling begins.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  </section>
);

export default GeoSurveyingSection;
