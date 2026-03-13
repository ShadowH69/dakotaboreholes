import { Radar, Activity, Target } from "lucide-react";
import surveyingBg from "@/assets/slide-surveying.jpg";

const points = [
  { icon: Radar, text: "Ground conditions" },
  { icon: Activity, text: "Ensuring structural integrity" },
  { icon: Target, text: "Optimal yield" },
];

const GeoSurveyingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${surveyingBg})` }} />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
              Geophysical <span className="text-gold">Surveying</span>
            </h2>
            <div className="mt-8 bg-primary/20 backdrop-blur-sm rounded-lg p-8 border border-primary/30">
              <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-6">
                We use advanced geophysical surveying techniques to analyze:
              </p>
              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <p.icon size={20} className="text-foreground" />
                    </div>
                    <span className="font-heading text-lg uppercase text-primary-foreground">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10">
            <h3 className="font-heading text-2xl font-bold uppercase text-primary-foreground mb-4">
              Our Equipment
            </h3>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Our team uses cutting-edge geophysical equipment including resistivity meters, GPS mapping systems, and digital data loggers for underground analysis up to 300m depth. This scientific approach eliminates guesswork and ensures we identify the best water-bearing zones on your property.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-primary/20 rounded-lg p-4 text-center">
                <span className="font-heading text-3xl font-bold text-gold">300m</span>
                <p className="text-primary-foreground/60 text-sm mt-1">Max Depth Analysis</p>
              </div>
              <div className="bg-primary/20 rounded-lg p-4 text-center">
                <span className="font-heading text-3xl font-bold text-gold">98%</span>
                <p className="text-primary-foreground/60 text-sm mt-1">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoSurveyingSection;
