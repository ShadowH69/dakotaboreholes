import { useState } from "react";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.23-1.37a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.85 9.85 0 0 0-2.9-6.99Zm-7.03 15.23h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.23 8.23 0 0 1-1.27-4.39c0-4.56 3.71-8.27 8.28-8.27 2.2 0 4.27.85 5.83 2.41a8.17 8.17 0 0 1 2.43 5.86c0 4.56-3.71 8.24-8.27 8.24Zm4.53-6.18c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.17.25-.64.82-.79.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.21.89 2.38 1.02 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

const ContactSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="contact" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <RevealWrapper direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Let's talk</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-3">
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
              Ready to find water? Contact us for a geo water survey starting at just R2,500.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { href: "tel:0712857397", icon: <Phone size={24} className="text-primary" />, title: "071 285 7397", sub: "077 493 8076" },
            { href: "mailto:dakotaboreholes@gmail.com", icon: <Mail size={24} className="text-primary" />, title: "dakotaboreholes@gmail.com", sub: "boreholeman2011@gmail.com", titleClass: "text-sm" },
            { icon: <MapPin size={24} className="text-primary" />, title: "South Africa", sub: "Dakota Plumbing (Pty) Ltd\nReg 2011/105031/07" },
          ].map((card, i) => (
            <RevealWrapper key={i} direction="up" delay={0.1 + i * 0.1}>
              {card.href ? (
                <a href={card.href} className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className={`font-heading ${card.titleClass || "text-lg"} text-foreground`}>{card.title}</span>
                  <span className="text-muted-foreground text-sm">{card.sub}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="font-heading text-lg text-foreground text-center">{card.title}</span>
                  <span className="text-muted-foreground text-sm text-center whitespace-pre-line">{card.sub}</span>
                </div>
              )}
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="https://wa.me/27712857397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[hsl(var(--whatsapp))] px-8 py-4 font-heading text-lg uppercase tracking-wider text-[hsl(var(--whatsapp-foreground))] transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[hsl(var(--whatsapp))]/30 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-3 bg-secondary hover:brightness-110 px-8 py-4 rounded-xl font-heading text-lg uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <FileText size={18} />
              Quotes
            </button>
          </div>
        </RevealWrapper>
        <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </section>
  );
};

export default ContactSection;
