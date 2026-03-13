import solutionBg from "@/assets/slide-solution.jpg";

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solutionBg})` }} />
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
          Our <span className="text-gold">Solution</span>
        </h2>
        <div className="mt-8 max-w-3xl mx-auto bg-primary/20 backdrop-blur-sm rounded-lg p-8 border border-primary/30">
          <p className="text-primary-foreground/90 font-body text-lg md:text-xl leading-relaxed">
            We provide a complete turnkey groundwater solution — from professional water surveys to fully equipped, working boreholes. Our experienced team combines advanced technology with proven drilling expertise to deliver reliable water where you need it.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
          {["Surveys", "Boreholes", "Pump Installation", "Tank Installation"].map((s) => (
            <span key={s} className="font-heading text-xl md:text-2xl uppercase text-primary-foreground/80 tracking-wider">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
