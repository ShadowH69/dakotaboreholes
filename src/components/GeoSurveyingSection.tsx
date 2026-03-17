import { BarChart3, CheckCircle, Layers, MapPin, Radar, Target } from "lucide-react";
import geoImage from "@/assets/geo-clean.jpeg";

const features = [
  { icon: Radar, title: "Advanced Equipment", desc: "State-of-the-art surveying equipment for accurate subsurface analysis." },
  { icon: Layers, title: "Ground Analysis", desc: "Clear assessment of soil layers and geological formations before drilling starts." },
  { icon: Target, title: "Precision Targeting", desc: "Pinpointing the strongest water-bearing fractures and aquifers." },
  { icon: BarChart3, title: "Yield Estimation", desc: "Better insight into likely water output before the rig arrives." },
  { icon: MapPin, title: "Site Mapping", desc: "Positioning the borehole where access, safety, and yield all align." },
  { icon: CheckCircle, title: "Risk Reduction", desc: "Reducing wasted drilling costs with informed technical decisions." },
];

const GeoSurveyingSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Step 1</span>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
              Geophysical Surveying
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Scientific surveying gives the drilling process direction, confidence, and a much stronger chance of success.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <feature.icon size={20} className="mb-3 text-primary" />
                  <h3 className="font-heading text-lg font-bold uppercase text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <img
              src={geoImage}
              alt="Geophysical surveying technician with specialist field equipment at sunset"
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 rounded-2xl border border-primary-foreground/15 bg-foreground/55 p-5 backdrop-blur-sm">
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Survey first</p>
              <p className="mt-2 text-primary-foreground/85 leading-relaxed">
                Ground conditions, structure, and likely yield are assessed before drilling begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoSurveyingSection;
