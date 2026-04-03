import { Container, Drill, Search, Wrench, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const services = [
  { icon: Search, title: "Geophysical Surveying", desc: "Advanced techniques to locate water-bearing fractures and determine optimal drilling points." },
  { icon: Drill, title: "Borehole Drilling", desc: "Methods selected for ground conditions to ensure structural integrity and optimal yield." },
  { icon: Wrench, title: "Pump Installation", desc: "Solar or electrical pump systems with complete reticulation to tanks, homes, and irrigation." },
  { icon: Container, title: "Tank & Reticulation", desc: "Complete water storage and distribution from borehole to point of use." },
];

const ServicesSection = () => (
  <section id="services" className="relative py-20 lg:py-28 bg-[hsl(var(--section-dark))] overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <RevealWrapper direction="left">
          <div className="lg:sticky lg:top-32">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">What we do</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground leading-tight">
              Our Services
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/55 leading-relaxed">
              From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-heading text-xs uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-105 group"
            >
              Get a Quote
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </RevealWrapper>

        <div className="space-y-4">
          <RevealWrapper direction="right" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src={servicesImage}
                alt="Drilling truck and field equipment"
                loading="lazy"
                className="h-[300px] lg:h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="max-w-md text-primary-foreground/80 text-sm">
                  Every service is planned to work as one connected system — surveys through installation.
                </p>
              </div>
            </div>
          </RevealWrapper>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <RevealWrapper key={s.title} direction="up" delay={0.15 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] p-5 transition-all duration-300 hover:bg-primary-foreground/[0.07] hover:-translate-y-1">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/8 transition-transform duration-300 group-hover:scale-110">
                    <s.icon size={20} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-primary-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/55">{s.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
