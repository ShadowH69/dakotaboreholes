import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const packages = [
  {
    tier: "Basic",
    name: "Standard System",
    capacity: "2,500L",
    idealFor: "Small Homes, Apartments, Offices",
    price: "R 27,500",
    priceNote: "Ex Vat",
    highlight: false,
    features: [
      "Free site visit & assessment",
      "2,500L JoJo tank",
      "0.75kW Pressure booster pump",
      "Water filtration system",
      "Automatic switchover system",
      "Tank Float Valve",
      "All plumbing & electrical materials",
      "2-Year equipment warranty",
      "4-Month workmanship guarantee",
      "Free filter replacement after 6 months",
      "Complete testing & final inspection",
      "After-service support",
    ],
    note: "Tank base concrete slab not included",
  },
  {
    tier: "Premier",
    name: "Premier System",
    capacity: "5,000L",
    idealFor: "Homes, Apartments, Offices",
    price: "R 34,900",
    priceNote: "Ex Vat",
    highlight: true,
    features: [
      "Free site visit & assessment",
      "5,000L JoJo tank",
      "0.75kW Pressure booster pump",
      "Water filtration + UV light",
      "Automatic switchover system",
      "Tank Float Valve",
      "All plumbing & electrical materials",
      "2-Year equipment warranty",
      "4-Month workmanship guarantee",
      "Free filter replacement after 6 months",
      "Complete testing & final inspection",
      "After-service support",
    ],
    note: "Tank base concrete slab not included",
  },
];

const Packages = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSelect = (pkg: string) => { setSelectedPackage(pkg); setQuoteOpen(true); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-14 bg-[hsl(var(--section-dark))] text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Our <span className="text-secondary">Packages</span>
          </h1>
          <p className="text-primary-foreground/55 mt-3 max-w-xl mx-auto">
            Water Backup Systems — Never Run Out of Water Again
          </p>
          <p className="text-primary-foreground/35 text-sm mt-1">
            Includes professional installation
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <RevealWrapper key={pkg.tier} direction="up" delay={i * 0.1}>
                <div className={`relative rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.highlight ? "border-secondary shadow-lg shadow-secondary/10" : "border-border"
                }`}>
                  {pkg.highlight && (
                    <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground font-heading text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl z-10">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-7 text-center ${pkg.highlight ? "bg-secondary/8" : "bg-muted/50"}`}>
                    <span className="inline-block bg-secondary/15 text-secondary font-heading text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {pkg.tier}
                    </span>
                    <h2 className="font-heading text-xl font-bold text-foreground">{pkg.name}</h2>
                    <p className="text-muted-foreground text-xs mt-1">{pkg.capacity} — {pkg.idealFor}</p>
                    <div className="mt-5">
                      <span className="font-heading text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground text-xs ml-1.5">({pkg.priceNote})</span>
                    </div>
                  </div>

                  <div className="p-7 bg-card">
                    <ul className="space-y-2.5 mb-6">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75">
                          <Check className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-muted-foreground italic text-center mb-5">*{pkg.note}</p>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => handleSelect(`${pkg.tier} - ${pkg.name} (${pkg.capacity})`)}
                        className={`w-full py-3 rounded-xl font-heading text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group ${
                          pkg.highlight
                            ? "bg-secondary text-secondary-foreground hover:shadow-secondary/20"
                            : "bg-primary text-primary-foreground hover:shadow-primary/20"
                        }`}
                      >
                        Get a Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                      <a href="tel:0774938076" className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                        <Phone size={12} /> Or call us directly
                      </a>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {quoteOpen && <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />}
      <Footer />
    </div>
  );
};

export default Packages;
