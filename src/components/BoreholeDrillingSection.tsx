import logo from "@/assets/dakota-logo.png";
import drillingBg from "@/assets/slide-drilling.jpg";

const BoreholeDrillingSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${drillingBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/30" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-20 w-auto drop-shadow-lg" />
          <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
            Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
          </p>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg text-center"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
        >
          Borehole Drilling
        </h2>

        {/* Frosted info box */}
        <div className="mt-8 max-w-lg mx-auto rounded-md border border-primary-foreground/30 px-8 py-6"
          style={{ background: 'hsla(200, 60%, 40%, 0.55)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed mb-4">
            Drilling methods selected based on:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ground conditions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ensuring structural integrity</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-foreground flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Optimal yield</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoreholeDrillingSection;
