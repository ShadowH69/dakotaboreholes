import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, hsl(210, 40%, 10%), hsl(207, 50%, 15%), hsl(210, 35%, 12%))' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, hsl(38, 70%, 55%) 0%, transparent 40%)' }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-center text-primary-foreground">
          Get In <span className="text-gold">Touch</span>
        </h2>
        <p className="text-center text-primary-foreground/70 mt-4 max-w-md mx-auto font-body">
          Ready to find water? Contact us for a geo water survey starting at just R2,500.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <a href="tel:0712857397" className="flex flex-col items-center gap-4 p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/50 transition group"
            style={{ background: 'hsla(207, 60%, 25%, 0.5)', backdropFilter: 'blur(12px)' }}
          >
            <Phone size={32} className="text-gold group-hover:scale-110 transition-transform" />
            <span className="font-heading text-lg text-primary-foreground">071 285 7397</span>
            <span className="text-primary-foreground/60 text-sm">077 493 8076</span>
          </a>
          <a href="mailto:dakotaboreholes@gmail.com" className="flex flex-col items-center gap-4 p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/50 transition group"
            style={{ background: 'hsla(207, 60%, 25%, 0.5)', backdropFilter: 'blur(12px)' }}
          >
            <Mail size={32} className="text-gold group-hover:scale-110 transition-transform" />
            <span className="font-heading text-sm text-primary-foreground">dakotaboreholes@gmail.com</span>
            <span className="text-primary-foreground/60 text-xs">boreholeman2011@gmail.com</span>
          </a>
          <div className="flex flex-col items-center gap-4 p-8 rounded-lg border border-primary-foreground/10"
            style={{ background: 'hsla(207, 60%, 25%, 0.5)', backdropFilter: 'blur(12px)' }}
          >
            <MapPin size={32} className="text-gold" />
            <span className="font-heading text-lg text-primary-foreground text-center">South Africa</span>
            <span className="text-primary-foreground/60 text-sm text-center">Dakota Plumbing (Pty) Ltd<br/>Reg 2011/105031/07</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/27712857397"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider text-primary-foreground transition"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
