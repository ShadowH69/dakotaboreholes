import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

      {/* Map */}
      <section className="w-full h-[350px] md:h-[420px] relative">
        <iframe
          title="Dakota Plumbing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9999999999995!2d28.009861!3d-26.2441689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95092929d1a67b%3A0x98552f4c63d5ae3c!2s5%20Delamere%20Rd%2C%20Robertsham%2C%20Johannesburg%20South%2C%202091!5e0!3m2!1sen!2sza!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
        <a
          href="https://wa.me/27712857397"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-full font-heading text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="w-12 h-1 bg-secondary mb-10" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left – Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mb-10">Contact Info</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin size={22} className="text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Visit Our Company at</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Address: 5 Delamere Rd, Robertsham,<br />Johannesburg South, 2091
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={22} className="text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Have Questions? Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+27774938076" className="hover:text-foreground transition-colors">+27 77 493 8076</a><br />
                      <a href="tel:+27712857397" className="hover:text-foreground transition-colors">+27 71 285 7397</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={22} className="text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our support is available to help six days a week.<br /><br />
                      Monday – Saturday:<br />08:00 – 20:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={22} className="text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:dakotaboreholes@gmail.com" className="hover:text-foreground transition-colors">dakotaboreholes@gmail.com</a><br />
                      <a href="mailto:boreholeman@gmail.com" className="hover:text-foreground transition-colors">boreholeman@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mb-4">Feedback Contact Form</h2>
              <p className="text-muted-foreground mb-8">If you'd like a site visit, please start by completing the form:</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Your Phone *</label>
                    <input
                      type="tel"
                      placeholder="Enter Your Phone"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Your E-Mail *</label>
                    <input
                      type="email"
                      placeholder="Enter Your E-mail"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Type Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-border bg-card rounded px-4 py-3 text-foreground focus:outline-none focus:border-secondary transition-colors"
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
                  <label className="block font-heading text-sm font-semibold text-foreground mb-1.5">Your Message *</label>
                  <textarea
                    placeholder="Enter Your Message"
                    maxLength={1000}
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border bg-card rounded px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-secondary hover:brightness-110 px-8 py-3 rounded font-heading text-sm uppercase tracking-wider text-secondary-foreground transition"
                >
                  <Send size={16} /> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
