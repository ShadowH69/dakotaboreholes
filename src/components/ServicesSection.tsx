import { Container, Drill, Search, Wrench } from "lucide-react";
import servicesImage from "@/assets/services-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const services = [
  { icon: Search, title: "Geophysical Surveying", desc: "Using advanced techniques to analyse ground conditions, locate water-bearing fractures, and determine optimal drilling points." },
  { icon: Drill, title: "Borehole Drilling", desc: "Professional drilling with methods selected based on ground conditions to ensure structural integrity and optimal yield." },
  { icon: Wrench, title: "Pump Installation", desc: "Reliable solar or electrical pump systems tailored to your water demand with complete reticulation to tanks, homes, and irrigation." },
  { icon: Container, title: "Tank & Reticulation", desc: "Complete water storage and distribution systems ensuring efficient delivery from borehole to point of use." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <RevealWrapper direction="left">
            <div className="lg:sticky lg:top-32">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">What we do</span>
              <h2 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Our Services
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/65">
                Technical capability in the field, polished delivery for the client, and one brand language across the full project.
              </p>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-heading text-sm uppercase tracking-wider text-secondary-foreground transition hover:brightness-110 hover:shadow-lg hover:shadow-secondary/20"
              >
                Get a Quote
              </a>
            </div>
          </RevealWrapper>

          <div className="space-y-5">
            <RevealWrapper direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/10 bg-primary-foreground/[0.04] group">
                <img
                  src={servicesImage}
                  alt="Dakota drilling truck and field equipment prepared for borehole services"
                  loading="lazy"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="max-w-xl font-body text-primary-foreground/85 md:text-lg">
                    From surveying to final installation, every service is planned to work as one connected system.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <RevealWrapper key={service.title} direction="up" delay={0.15 + i * 0.08}>
                  <div className="group h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 transition-all duration-300 hover:bg-primary-foreground/[0.08] hover:-translate-y-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon size={22} className="text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase text-primary-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{service.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
