import { Container, Drill, Search, Wrench, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-clean.jpeg";
import { RevealWrapper } from "@/hooks/useScrollReveal";
import { useSiteConfig } from "@/lib/siteConfig";

const services = [
  { icon: Search, title: "Geophysical Surveying", desc: "Advanced techniques to locate water-bearing fractures and determine optimal drilling points." },
  { icon: Drill, title: "Borehole Drilling", desc: "Methods selected for ground conditions to ensure structural integrity and optimal yield." },
  { icon: Wrench, title: "Pump Installation", desc: "Solar or electrical pump systems with complete reticulation to tanks, homes, and irrigation." },
  { icon: Container, title: "Tank & Reticulation", desc: "Complete water storage and distribution from borehole to point of use." },
];

const ServicesSection = () => {
  const { config } = useSiteConfig();

  return (
    <section id="services" className="relative py-14 sm:py-20 lg:py-28 bg-[hsl(var(--section-dark))] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start">
          <RevealWrapper direction="left">
            <div className="lg:sticky lg:top-32">
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">What we do</span>
              <h2 className="mt-1.5 sm:mt-2 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground leading-tight">
                {config.text.servicesTitle}
              </h2>
              <p className="mt-3 sm:mt-4 max-w-md text-primary-foreground/55 text-sm sm:text-base leading-relaxed">
                {config.text.servicesSubtitle}
              </p>
              <a
                href="/contact"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-5 sm:px-6 py-2.5 sm:py-3 font-heading text-[10px] sm:text-xs uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-105 group"
              >
                Get a Quote
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </RevealWrapper>

          <div className="space-y-3 sm:space-y-4">
            <RevealWrapper direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
                <img
                  src={servicesImage}
                  alt="Drilling truck and field equipment"
                  loading="lazy"
                  className="h-[220px] sm:h-[280px] lg:h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <p className="max-w-md text-primary-foreground/80 text-xs sm:text-sm">
                    Every service is planned to work as one connected system — surveys through installation.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            <div className="grid gap-2.5 sm:gap-3 grid-cols-2">
              {services.map((s, i) => (
                <RevealWrapper key={s.title} direction="up" delay={0.15 + i * 0.08}>
                  <div className="group h-full rounded-xl sm:rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] p-3.5 sm:p-5 transition-all duration-300 hover:bg-primary-foreground/[0.07] hover:-translate-y-1">
                    <div className="mb-2 sm:mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary-foreground/8 transition-transform duration-300 group-hover:scale-110">
                      <s.icon size={16} className="text-secondary sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-lg font-bold uppercase text-primary-foreground">{s.title}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-primary-foreground/55">{s.desc}</p>
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
