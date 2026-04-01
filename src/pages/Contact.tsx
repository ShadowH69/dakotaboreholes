import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.23-1.37a9.92 9.92 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.85 9.85 0 0 0-2.9-6.99Zm-7.03 15.23h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.23 8.23 0 0 1-1.27-4.39c0-4.56 3.71-8.27 8.28-8.27 2.2 0 4.27.85 5.83 2.41a8.17 8.17 0 0 1 2.43 5.86c0 4.56-3.71 8.24-8.27 8.24Zm4.53-6.18c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.17.25-.64.82-.79.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.21.89 2.38 1.02 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Company",
    lines: ["5 Delamere Rd, Robertsham,", "Johannesburg South, 2091"],
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Have Questions? Call US",
    lines: ["+27 77 493 8076", "+27 71 285 7397"],
    color: "text-primary",
    links: ["tel:+27774938076", "tel:+27712857397"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["dakotaboreholes@gmail.com", "boreholeman@gmail.com"],
    color: "text-primary",
    links: ["mailto:dakotaboreholes@gmail.com", "mailto:boreholeman@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Our support available to help is six days a week.", "Monday - Saturday: 08:00 - 20:00"],
    color: "text-primary",
  },
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
      <section className="pt-24 pb-12 bg-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground">Contact</h1>
          <div className="font-heading text-sm uppercase tracking-wider text-primary-foreground/60">
            <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-secondary">Contact</span>
          </div>
        </div>
      </section>

      {/* Cards + Map side by side */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
            {/* Left - Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <RevealWrapper key={card.title} direction="left" delay={i * 0.08}>
                  <div className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <card.icon size={22} className={card.color} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">{card.title}</h3>
                      {card.lines.map((line, j) =>
                        card.links ? (
                          <a key={j} href={card.links[j]} className="block text-muted-foreground hover:text-foreground transition-colors">
                            <span className={j === 0 ? "font-semibold" : ""}>{line}</span>
                          </a>
                        ) : (
                          <p key={j} className={`text-muted-foreground ${j === card.lines.length - 1 && card.icon === Clock ? "font-heading font-bold text-foreground mt-1" : ""}`}>
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </RevealWrapper>
              ))}

              {/* WhatsApp CTA */}
              <RevealWrapper direction="left" delay={0.4}>
                <a
                  href="https://wa.me/27712857397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[hsl(var(--whatsapp))] hover:brightness-110 text-[hsl(var(--whatsapp-foreground))] px-6 py-4 rounded-2xl font-heading text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--whatsapp))]/30 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Quick Message on WhatsApp
                </a>
              </RevealWrapper>
            </div>

            {/* Right - Map */}
            <RevealWrapper direction="right" delay={0.15}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl h-full min-h-[500px]">
                <iframe
                  title="Dakota Plumbing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9999999999995!2d28.009861!3d-26.2441689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95092929d1a67b%3A0x98552f4c63d5ae3c!2s5%20Delamere%20Rd%2C%20Robertsham%2C%20Johannesburg%20South%2C%202091!5e0!3m2!1sen!2sza!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 500 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-foreground">
        <div className="container mx-auto px-4 max-w-3xl">
          <RevealWrapper direction="up">
            <div className="text-center mb-12">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Send us a message</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground mt-3">Feedback Contact Form</h2>
              <p className="text-primary-foreground/60 mt-3">If you'd like a site visit, please start by completing the form:</p>
            </div>
          </RevealWrapper>

          <RevealWrapper direction="up" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-primary-foreground/20 bg-primary-foreground/5 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground mb-1.5">Your Phone *</label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-primary-foreground/20 bg-primary-foreground/5 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground mb-1.5">Your E-Mail *</label>
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-primary-foreground/20 bg-primary-foreground/5 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-heading text-sm font-semibold text-primary-foreground mb-1.5">Type Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-primary-foreground/20 bg-primary-foreground/5 rounded-xl px-4 py-3 text-primary-foreground focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="">Select Your Service</option>
                    <option value="Geo Water Survey">Geo Water Survey</option>
                    <option value="Borehole Drilling">Borehole Drilling</option>
                    <option value="Pump & Reticulation">Pump & Reticulation</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-heading text-sm font-semibold text-primary-foreground mb-1.5">Your Message *</label>
                <textarea
                  placeholder="Enter Your Message"
                  maxLength={1000}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-primary-foreground/20 bg-primary-foreground/5 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-secondary hover:brightness-110 px-8 py-3 rounded-xl font-heading text-sm uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
              >
                <Send size={16} /> Submit
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
