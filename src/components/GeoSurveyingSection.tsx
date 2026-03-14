import logo from "@/assets/dakota-logo.png";

const GeoSurveyingSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, hsl(38, 50%, 22%), hsl(30, 45%, 28%), hsl(25, 40%, 22%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, hsl(38, 70%, 55%) 0%, transparent 40%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mb-8">
          <img src={logo} alt="Dakota Plumbing" className="h-16 md:h-24 w-auto drop-shadow-lg" />
          <p className="text-primary-foreground/60 font-body text-xs tracking-widest mt-1">
            Dakota Plumbing (Pty) Ltd · Reg 2011/105031/07
          </p>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase text-primary-foreground drop-shadow-lg">
          Geophysical Surveying
        </h2>

        <div className="mt-8 max-w-xl rounded-md border border-gold/30 px-8 py-6 ml-auto mr-0 md:mr-16"
          style={{ background: 'hsla(30, 40%, 25%, 0.6)', backdropFilter: 'blur(12px)' }}
        >
          <p className="text-primary-foreground font-body text-lg leading-relaxed mb-4">
            We use advanced geophysical surveying techniques:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ground conditions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Ensuring structural integrity</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-primary-foreground font-heading text-lg uppercase">Optimal yield</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GeoSurveyingSection;
