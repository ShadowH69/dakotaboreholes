import { Clock, BadgeCheck, Banknote, Phone, Shield, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Clock, title: "24/7 Emergency Service", desc: "Burst geyser at midnight? We're on call around the clock for plumbing emergencies." },
  { icon: BadgeCheck, title: "Licensed & Certified", desc: "Fully registered plumbers with compliance certificates for all installations." },
  { icon: Banknote, title: "Transparent Pricing", desc: "Upfront quotes with no hidden costs. We agree on the price before any work begins." },
  { icon: Phone, title: "Fast Response", desc: "We aim to be on-site within 60 minutes for emergency call-outs in our service areas." },
  { icon: Shield, title: "Workmanship Guarantee", desc: "All our work comes with a written guarantee for your peace of mind." },
  { icon: ThumbsUp, title: "15+ Years Experience", desc: "Trusted by thousands of homeowners and businesses since 2011." },
];

const PlumbingWhySection = () => {
  return (
    <section id="why-survey" className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-center text-primary-foreground">
          Why <span className="text-gold">Dakota?</span>
        </h2>
        <p className="text-center text-primary-foreground/70 mt-4 max-w-lg mx-auto font-body italic">
          Your trusted plumbing partner for quality workmanship and reliable service.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-primary/10 backdrop-blur-sm rounded-lg p-6 border border-primary/20 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <r.icon size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold uppercase text-primary-foreground">{r.title}</h3>
                  <p className="mt-2 text-primary-foreground/70 text-sm leading-relaxed font-body">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbingWhySection;
