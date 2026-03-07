import { Search, Drill, Droplets, Container } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Geo Surveys",
    desc: "Advanced geophysical surveying to identify water-bearing zones, ground conditions, and optimal drilling points.",
  },
  {
    icon: Drill,
    title: "Borehole Drilling",
    desc: "Professional borehole drilling with modern rigs. We manage every stage from survey to completion.",
  },
  {
    icon: Droplets,
    title: "Pump Installation",
    desc: "Solar or electrical pump systems tailored to your water demand with complete reticulation.",
  },
  {
    icon: Container,
    title: "Tank Installation",
    desc: "Water storage solutions with JoJo tanks, plumbing connections, and pressure systems.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-center text-foreground">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto font-body">
          From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage of your borehole project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
