import logo from "@/assets/dakota-logo.png";

const BoreholeDrillingSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(140deg, hsl(207, 80%, 12%), hsl(200, 70%, 20%), hsl(195, 75%, 28%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(200, 80%, 55%) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mb-8">
          <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-20 w-auto drop-shadow-lg" />
          <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
            Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
          </p>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg text-center">
          Borehole Drilling
        </h2>

        <div className="mt-8 max-w-lg mx-auto rounded-md border border-water/30 px-8 py-6"
          style={{ background: 'hsla(200, 60%, 30%, 0.5)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed mb-4">
            Drilling methods selected based on:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-water flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ground conditions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-water flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ensuring structural integrity</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-water flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Optimal yield</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BoreholeDrillingSection;
