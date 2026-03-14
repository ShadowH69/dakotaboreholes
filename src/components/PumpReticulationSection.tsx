import logo from "@/assets/dakota-logo.png";

const PumpReticulationSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(155deg, hsl(30, 50%, 18%), hsl(38, 55%, 25%), hsl(35, 45%, 20%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(38, 70%, 55%) 0%, transparent 45%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg text-right">
          Pump and Reticulation
        </h2>

        <div className="mt-8 max-w-xl ml-auto rounded-md border border-gold/30 px-8 py-6"
          style={{ background: 'hsla(30, 40%, 25%, 0.6)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed mb-4">
            We install reliable solar or electrical pump systems tailored to your water demand. Complete reticulation systems ensure efficient water delivery:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">To tanks</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">To homes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">And irrigation systems</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="text-right">
            <img src={logo} alt="Dakota Plumbing" className="h-14 md:h-20 w-auto ml-auto drop-shadow-lg" />
            <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
              Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpReticulationSection;
