import logo from "@/assets/dakota-logo.png";

const ServicesSection = () => {
  return (
    <section id="services" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, hsl(207, 85%, 18%), hsl(195, 70%, 25%), hsl(207, 65%, 30%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(200, 80%, 55%) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex justify-end mb-8">
          <div className="text-right">
            <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-20 w-auto ml-auto drop-shadow-lg" />
            <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
              Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
            </p>
          </div>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg text-right">
          Our Services
        </h2>

        <div className="mt-8 max-w-2xl rounded-md border border-primary-foreground/20 px-8 py-6"
          style={{ background: 'hsla(200, 60%, 40%, 0.35)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed">
            From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage of your borehole project. Our integrated approach ensures efficiency, quality, and long-term performance.
          </p>
        </div>

        <p className="mt-10 font-heading text-xl md:text-2xl uppercase tracking-wider text-primary-foreground/90">
          Surveys &nbsp;-&nbsp; Boreholes &nbsp;-&nbsp; Pump Installation &nbsp;-&nbsp; Tank Installation
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
