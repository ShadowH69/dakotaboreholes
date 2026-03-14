import { Search, Drill, Wrench, Container } from "lucide-react";

const services = [
  { icon: Search, title: "Geophysical Surveying", desc: "Using advanced techniques to analyse ground conditions, locate water-bearing fractures, and determine optimal drilling points.", color: "text-water" },
  { icon: Drill, title: "Borehole Drilling", desc: "Professional drilling with methods selected based on ground conditions to ensure structural integrity and optimal yield.", color: "text-primary" },
  { icon: Wrench, title: "Pump Installation", desc: "Reliable solar or electrical pump systems tailored to your water demand with complete reticulation to tanks, homes, and irrigation.", color: "text-secondary" },
  { icon: Container, title: "Tank & Reticulation", desc: "Complete water storage and distribution systems ensuring efficient delivery from borehole to point of use.", color: "text-gold" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">What we do</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground mt-3 leading-tight">
              Our<br />Services
            </h2>
            <p className="mt-6 text-primary-foreground/60 font-body text-lg leading-relaxed max-w-md">
              From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage of your borehole project.
            </p>
            <div className="mt-8 flex gap-6">
              <a href="#contact" className="inline-flex items-center justify-center bg-secondary px-6 py-3 rounded font-heading text-sm uppercase tracking-wider text-secondary-foreground hover:brightness-110 transition">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right — service cards */}
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.title} className="group p-6 md:p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <s.icon size={24} className={s.color} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase text-primary-foreground">{s.title}</h3>
                    <p className="mt-2 text-primary-foreground/60 font-body text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
