import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const contactCards = [
  { icon: MapPin, title: "Visit Us", lines: ["5 Delamere Rd, Robertsham,", "Johannesburg South, 2091"], color: "text-secondary" },
  { icon: Phone, title: "Call Us", lines: ["+27 77 493 8076", "+27 71 285 7397"], color: "text-secondary", links: ["tel:+27774938076", "tel:+27712857397"] },
  { icon: Mail, title: "Email Us", lines: ["dakotaboreholes@gmail.com", "boreholeman@gmail.com"], color: "text-secondary", links: ["mailto:dakotaboreholes@gmail.com", "mailto:boreholeman@gmail.com"] },
  { icon: Clock, title: "Working Hours", lines: ["Monday – Saturday", "08:00 – 20:00"], color: "text-secondary" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = form;
    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const body = `Name: ${name}%0APhone: ${phone}%0AService: ${form.service}%0AMessage: ${message}`;
    window.open(`mailto:dakotaboreholes@gmail.com?subject=${encodeURIComponent("Website Enquiry from " + name)}&body=${body}`);
    toast({ title: "Opening your email client…" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-14 bg-[hsl(var(--section-dark))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-body text-primary-foreground/40 mb-4">
            <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-secondary">Contact</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
            Contact <span className="text-secondary">Us</span>
          </h1>
        </div>
      </section>

      {/* Cards + Map */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
            <div className="space-y-3">
              {contactCards.map((card, i) => (
                <RevealWrapper key={card.title} direction="left" delay={i * 0.06}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <card.icon size={18} className={card.color} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm mb-1">{card.title}</h3>
                      {card.lines.map((line, j) =>
                        card.links ? (
                          <a key={j} href={card.links[j]} className="block text-muted-foreground text-sm hover:text-foreground transition-colors">{line}</a>
                        ) : (
                          <p key={j} className="text-muted-foreground text-sm">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            <RevealWrapper direction="right" delay={0.12}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-full min-h-[420px]">
                <iframe
                  title="Dakota Plumbing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9999999999995!2d28.009861!3d-26.2441689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95092929d1a67b%3A0x98552f4c63d5ae3c!2s5%20Delamere%20Rd%2C%20Robertsham%2C%20Johannesburg%20South%2C%202091!5e0!3m2!1sen!2sza!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0, minHeight: 420 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--section-dark))]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <RevealWrapper direction="up">
            <div className="text-center mb-10">
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Send a message</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary-foreground mt-2">Contact Form</h2>
            </div>
          </RevealWrapper>

          <RevealWrapper direction="up" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading text-xs font-semibold text-primary-foreground mb-1.5 uppercase tracking-wider">Name *</label>
                  <input type="text" placeholder="Your name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-primary-foreground/15 bg-primary-foreground/5 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div>
                  <label className="block font-heading text-xs font-semibold text-primary-foreground mb-1.5 uppercase tracking-wider">Phone *</label>
                  <input type="tel" placeholder="Your phone" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-primary-foreground/15 bg-primary-foreground/5 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading text-xs font-semibold text-primary-foreground mb-1.5 uppercase tracking-wider">Email *</label>
                  <input type="email" placeholder="Your email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-primary-foreground/15 bg-primary-foreground/5 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div>
                  <label className="block font-heading text-xs font-semibold text-primary-foreground mb-1.5 uppercase tracking-wider">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full border border-primary-foreground/15 bg-primary-foreground/5 rounded-xl px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-secondary transition-colors">
                    <option value="">Select service</option>
                    <option value="Geo Water Survey">Geo Water Survey</option>
                    <option value="Borehole Drilling">Borehole Drilling</option>
                    <option value="Pump & Reticulation">Pump & Reticulation</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-heading text-xs font-semibold text-primary-foreground mb-1.5 uppercase tracking-wider">Message *</label>
                <textarea placeholder="Your message" maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-primary-foreground/15 bg-primary-foreground/5 rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:outline-none focus:border-secondary transition-colors resize-y" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-secondary hover:shadow-lg hover:shadow-secondary/20 px-7 py-3 rounded-xl font-heading text-xs uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:scale-[1.02]">
                <Send size={14} /> Submit
              </button>
            </form>
          </RevealWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
