import { Radar, Layers, Target, BarChart3, MapPin, CheckCircle } from "lucide-react";

const features = [
  { icon: Radar, title: "Advanced Equipment", desc: "State-of-the-art geophysical survey equipment for accurate subsurface analysis." },
  { icon: Layers, title: "Ground Analysis", desc: "Comprehensive assessment of soil layers and geological formations." },
  { icon: Target, title: "Precision Targeting", desc: "Pinpoint the exact location of water-bearing fractures and aquifers." },
  { icon: BarChart3, title: "Yield Estimation", desc: "Accurate water yield predictions before any drilling begins." },
  { icon: MapPin, title: "Site Mapping", desc: "Complete site surveys ensuring optimal borehole positioning." },
  { icon: CheckCircle, title: "Risk Elimination", desc: "Eliminate the costly 'dry hole' risk with scientific data." },
];

const GeoSurveyingSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Step 1</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-3">
            Geophysical Surveying
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
            We use advanced geophysical surveying techniques to analyse ground conditions, ensuring accurate targeting and optimal yield — up to 300m depth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <f.icon size={22} className="text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold uppercase text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoSurveyingSection;
