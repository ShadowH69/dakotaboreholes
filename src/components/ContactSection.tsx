import { useState } from "react";
import { Phone, Mail, MapPin, FileText, ArrowRight } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Let's talk</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-primary-foreground mt-1.5 sm:mt-2">
              Get In Touch
            </h2>
            <p className="mt-3 sm:mt-4 text-primary-foreground/55 text-sm sm:text-base leading-relaxed">
              Ready to find water? Contact us for a geo water survey starting at just R2,500.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          {[
            { href: "tel:0712857397", icon: <Phone size={18} className="text-secondary sm:w-[22px] sm:h-[22px]" />, title: "Call Us", sub: "071 285 7397" },
            { href: "mailto:dakotaboreholes@gmail.com", icon: <Mail size={18} className="text-secondary sm:w-[22px] sm:h-[22px]" />, title: "Email", sub: "dakotaboreholes@gmail.com" },
            { icon: <MapPin size={18} className="text-secondary sm:w-[22px] sm:h-[22px]" />, title: "Location", sub: "Johannesburg South" },
          ].map((card, i) => (
            <RevealWrapper key={i} direction="up" delay={0.1 + i * 0.08}>
              {card.href ? (
                <a href={card.href} className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className="font-heading text-xs sm:text-sm font-bold text-primary-foreground">{card.title}</span>
                  <span className="text-primary-foreground/50 text-[9px] sm:text-xs text-center break-all leading-tight">{card.sub}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/8 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="font-heading text-xs sm:text-sm font-bold text-primary-foreground">{card.title}</span>
                  <span className="text-primary-foreground/50 text-[9px] sm:text-xs text-center">{card.sub}</span>
                </div>
              )}
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper direction="up" delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 sm:px-7 py-3 sm:py-3.5 font-heading text-xs sm:text-sm uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] group"
            >
              Contact Us
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary-foreground/15 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-heading text-xs sm:text-sm uppercase tracking-wider text-primary-foreground/70 transition-all duration-300 hover:border-secondary hover:text-secondary"
            >
              <FileText size={14} /> Request Quote
            </button>
          </div>
        </RevealWrapper>
        <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </section>
  );
};

export default ContactSection;
