import { Radar, Activity, Target } from "lucide-react";

const points = [
  { icon: Radar, text: "Ground conditions" },
  { icon: Activity, text: "Ensuring structural integrity" },
  { icon: Target, text: "Optimal yield" },
];

const GeoSurveyingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">
              Geophysical <span className="text-primary">Surveying</span>
            </h2>
            <div className="mt-8 bg-primary/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                We use advanced geophysical surveying techniques to analyze:
              </p>
              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <p.icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-foreground">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-4">
              Our Equipment
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our team uses cutting-edge geophysical equipment including resistivity meters, GPS mapping systems, and digital data loggers for underground analysis up to 300m depth. This scientific approach eliminates guesswork and ensures we identify the best water-bearing zones on your property.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <span className="font-heading text-3xl font-bold text-primary">300m</span>
                <p className="text-muted-foreground text-sm mt-1">Max Depth Analysis</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <span className="font-heading text-3xl font-bold text-primary">98%</span>
                <p className="text-muted-foreground text-sm mt-1">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoSurveyingSection;
