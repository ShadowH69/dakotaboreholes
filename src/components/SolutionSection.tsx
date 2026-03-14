import logo from "@/assets/dakota-logo.png";

const SolutionSection = () => {
  return (
    <section id="solution" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(30, 50%, 20%), hsl(30, 40%, 28%), hsl(38, 45%, 30%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, hsl(38, 70%, 55%) 0%, transparent 40%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <img src={logo} alt="Dakota Plumbing" className="mx-auto h-16 md:h-24 w-auto mb-2 drop-shadow-lg" />
        <p className="text-primary-foreground/60 font-body text-xs tracking-widest">
          Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
        </p>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground mt-8 drop-shadow-lg">
          Our Solution
        </h2>

        <div className="mt-8 max-w-3xl mx-auto rounded-md border border-gold/30 px-8 py-6"
          style={{ background: 'hsla(30, 40%, 25%, 0.6)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg md:text-xl leading-relaxed">
            We provide a complete turnkey groundwater solution — from professional water surveys to fully equipped, working boreholes. Our experienced team combines advanced technology with proven drilling expertise to deliver reliable water where you need it.
          </p>
        </div>

        <p className="mt-10 font-heading text-xl md:text-2xl uppercase tracking-wider text-primary-foreground/90">
          Surveys &nbsp; Boreholes &nbsp; Pump Installation &nbsp; Tank Installation
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
