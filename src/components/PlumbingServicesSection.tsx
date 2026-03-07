import { Wrench, Flame, ShowerHead, PipetteIcon } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Plumbing",
    desc: "Burst pipes, leaks, tap replacements, toilet repairs, and all general plumbing maintenance.",
  },
  {
    icon: Flame,
    title: "Geyser Installation",
    desc: "Electric and solar geyser installations, repairs, and replacements with compliance certificates.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Renovations",
    desc: "Full bathroom fitouts including tiling, fixtures, showers, and vanity installations.",
  },
  {
    icon: PipetteIcon,
    title: "Drain Cleaning",
    desc: "Blocked drains, sewer line clearing, and CCTV drain inspections for residential and commercial properties.",
  },
];

const PlumbingServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-center text-foreground">
          Plumbing <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto font-body">
          From emergency repairs to full installations, Dakota Plumbing delivers professional, reliable plumbing solutions across South Africa.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((s) => (
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

export default PlumbingServicesSection;
