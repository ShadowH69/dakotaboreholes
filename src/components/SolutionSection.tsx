import logo from "@/assets/dakota-logo.png";
import solutionBg from "@/assets/slide-solution.jpg";

const SolutionSection = () => {
  return (
    <section id="solution" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solutionBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Logo */}
        <img src={logo} alt="Dakota Plumbing" className="mx-auto h-16 md:h-24 w-auto mb-2 drop-shadow-lg" />
        <p className="text-primary-foreground/60 font-body text-xs tracking-widest">
          Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
        </p>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground mt-8 drop-shadow-lg"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
        >
          Our Solution
        </h2>

        {/* Frosted info box */}
        <div className="mt-8 max-w-3xl mx-auto rounded-md border border-primary-foreground/30 px-8 py-6"
          style={{ background: 'hsla(200, 60%, 40%, 0.55)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-primary-foreground font-body text-lg md:text-xl leading-relaxed">
            We provide a complete turnkey groundwater solution — from professional water surveys to fully equipped, working boreholes. Our experienced team combines advanced technology with proven drilling expertise to deliver reliable water where you need it.
          </p>
        </div>

        {/* Service keywords */}
        <p className="mt-10 font-heading text-xl md:text-2xl uppercase tracking-wider text-primary-foreground/90"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          Surveys &nbsp; Boreholes &nbsp; Pump Installation &nbsp; Tank Installation
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
