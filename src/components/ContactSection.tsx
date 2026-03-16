import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import QuoteFormDialog from "./QuoteFormDialog";

const ContactSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="contact" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Let's talk</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground mt-3">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
            Ready to find water? Contact us for a geo water survey starting at just R2,500.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="tel:0712857397" className="flex flex-col items-center gap-4 p-8 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={24} className="text-primary" />
            </div>
            <span className="font-heading text-lg text-foreground">071 285 7397</span>
            <span className="text-muted-foreground text-sm">077 493 8076</span>
          </a>
          <a href="mailto:dakotaboreholes@gmail.com" className="flex flex-col items-center gap-4 p-8 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} className="text-primary" />
            </div>
            <span className="font-heading text-sm text-foreground">dakotaboreholes@gmail.com</span>
            <span className="text-muted-foreground text-xs">boreholeman2011@gmail.com</span>
          </a>
          <div className="flex flex-col items-center gap-4 p-8 rounded-lg border border-border bg-card">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin size={24} className="text-primary" />
            </div>
            <span className="font-heading text-lg text-foreground text-center">South Africa</span>
            <span className="text-muted-foreground text-sm text-center">Dakota Plumbing (Pty) Ltd<br/>Reg 2011/105031/07</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="https://wa.me/27712857397"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded font-heading text-lg uppercase tracking-wider text-primary-foreground transition"
          >
            💬 WhatsApp Us
          </a>
          <button
            onClick={() => setQuoteOpen(true)}
            className="inline-flex items-center gap-3 bg-secondary hover:brightness-110 px-8 py-4 rounded font-heading text-lg uppercase tracking-wider text-secondary-foreground transition"
          >
            📋 Quotes
          </button>
        </div>
        <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    </section>
  );
};

export default ContactSection;
