import logo from "@/assets/dakota-logo.png";
import servicesBg from "@/assets/slide-services.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${servicesBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Logo top right area */}
        <div className="flex justify-end mb-8">
          <div className="text-right">
            <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-20 w-auto ml-auto drop-shadow-lg" />
            <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
              Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
            </p>
          </div>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg text-right"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
        >
          Our Services
        </h2>

        {/* Frosted info box */}
        <div className="mt-8 max-w-2xl rounded-md border border-primary-foreground/30 px-8 py-6"
          style={{ background: 'hsla(200, 60%, 40%, 0.55)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed">
            From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage of your borehole project. Our integrated approach ensures efficiency, quality, and long-term performance.
          </p>
        </div>

        {/* Service keywords */}
        <p className="mt-10 font-heading text-xl md:text-2xl uppercase tracking-wider text-primary-foreground/90"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          Surveys &nbsp;-&nbsp; Boreholes &nbsp;-&nbsp; Pump Installation &nbsp;-&nbsp; Tank Installation
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
