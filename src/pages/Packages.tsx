import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

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
      "Free site visit & assessment (R350 call-out fee applies if you choose not to proceed)",
      "2,500L JoJo tank",
      "0.75kW Pressure booster pump for reliable water pressure",
      "Water filtration system for clean & safe water",
      "Automatic switchover system during outages",
      "Tank Float Valve that regulates water flow & prevents overfilling",
      "All plumbing & electrical materials (within 1sqm of main water supply)",
      "2-Year equipment warranty",
      "4-Month workmanship guarantee",
      "Free filter replacement after 6 months of installation",
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
      "Free site visit & assessment (R350 call-out fee applies if you choose not to proceed)",
      "5,000L JoJo tank",
      "0.75kW Pressure booster pump for reliable water pressure",
      "Water filtration system plus UV light for clean & safe water",
      "Automatic switchover system during outages",
      "Tank Float Valve that regulates water flow & prevents overfilling",
      "All plumbing & electrical materials (within 1sqm of main water supply)",
      "2-Year equipment warranty",
      "4-Month workmanship guarantee",
      "Free filter replacement after 6 months of installation",
      "Complete testing & final inspection",
      "After-service support",
    ],
    note: "Tank base concrete slab not included",
  },
];

const Packages = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSelect = (pkg: string) => {
    setSelectedPackage(pkg);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-foreground text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Packages</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Water Backup Systems — Never Run Out of Water Again
          </p>
          <p className="text-primary-foreground/50 text-sm mt-2">
            Suitable for homes, apartments and offices — includes installation
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.tier}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all hover:scale-[1.02] duration-300 ${
                  pkg.highlight
                    ? "border-gold shadow-[0_0_30px_hsl(var(--gold)/0.2)]"
                    : "border-border"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-gold text-foreground font-heading text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl z-10">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 text-center ${pkg.highlight ? "bg-gold/10" : "bg-muted"}`}>
                  <span className="inline-block bg-secondary text-secondary-foreground font-heading text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                    {pkg.tier} Installation
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {pkg.name}
                  </h2>
                  <p className="text-muted-foreground text-sm">{pkg.capacity} — {pkg.idealFor}</p>
                  <div className="mt-6">
                    <span className="font-heading text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">({pkg.priceNote})</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 bg-background">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground italic text-center mb-6">
                    *{pkg.note}
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => handleSelect(`${pkg.tier} - ${pkg.name} (${pkg.capacity})`)}
                      className={`w-full font-heading uppercase tracking-wider ${
                        pkg.highlight
                          ? "bg-gold text-foreground hover:bg-gold/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                      size="lg"
                    >
                      Get a Quote
                    </Button>
                    <a
                      href="tel:0774938076"
                      className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone size={14} /> Or call us directly
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} defaultPackage={selectedPackage} />
      <Footer />
    </div>
  );
};

export default Packages;
