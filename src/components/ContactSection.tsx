import { useState } from "react";
import { Phone, Mail, MapPin, FileText, ArrowRight } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4 lg:px-8">
        <RevealWrapper direction="up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Let's talk</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground mt-2">
              Get In Touch
            </h2>
            <p className="mt-4 text-primary-foreground/55 leading-relaxed">
              Ready to find water? Contact us for a geo water survey starting at just R2,500.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { href: "tel:0712857397", icon: <Phone size={22} className="text-secondary" />, title: "Call Us", sub: "071 285 7397" },
            { href: "mailto:dakotaboreholes@gmail.com", icon: <Mail size={22} className="text-secondary" />, title: "Email", sub: "dakotaboreholes@gmail.com" },
            { icon: <MapPin size={22} className="text-secondary" />, title: "Location", sub: "Johannesburg South" },
          ].map((card, i) => (
            <RevealWrapper key={i} direction="up" delay={0.1 + i * 0.08}>
              {card.href ? (
                <a href={card.href} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className="font-heading text-sm font-bold text-primary-foreground">{card.title}</span>
                  <span className="text-primary-foreground/50 text-xs text-center">{card.sub}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03]">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/8 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="font-heading text-sm font-bold text-primary-foreground">{card.title}</span>
                  <span className="text-primary-foreground/50 text-xs">{card.sub}</span>
                </div>
              )}
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper direction="up" delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-7 py-3.5 font-heading text-sm uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] group"
            >
              Contact Us
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 border border-primary-foreground/15 px-7 py-3.5 rounded-xl font-heading text-sm uppercase tracking-wider text-primary-foreground/70 transition-all duration-300 hover:border-secondary hover:text-secondary"
            >
              <FileText size={16} /> Request Quote
            </button>
          </div>
        </RevealWrapper>
        <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </section>
  );
};

export default ContactSection;
