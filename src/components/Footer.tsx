import { Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/dakota-logo.png";

const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Dakota Plumbing" className="h-12 w-auto" />
            <div>
              <p className="font-heading text-xl uppercase tracking-wide text-primary-foreground">
                Dakota Plumbing & Borehole Drilling
              </p>
            </div>
          </div>
          <p className="max-w-md text-primary-foreground/65 leading-relaxed">
            Professional borehole surveying and drilling services with complete turnkey water solutions for homes,
            agriculture, and commercial sites.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://www.instagram.com/dakotaboreholeman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon social-icon--instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61586707790828"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon social-icon--facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/@dakotaplumbing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-icon social-icon--youtube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl uppercase tracking-wide text-primary-foreground mb-5">Contact Info</h2>
          <div className="space-y-5 text-primary-foreground/70">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary mt-1 shrink-0" />
              <p>5 Delamere Rd, Robertsham, Johannesburg South, 2091</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-secondary mt-1 shrink-0" />
              <div>
                <a href="tel:+27774938076" className="block hover:text-secondary transition-colors">+27 77 493 8076</a>
                <a href="tel:+27712857397" className="block hover:text-secondary transition-colors">+27 71 285 7397</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-secondary mt-1 shrink-0" />
              <div>
                <a href="mailto:dakotaboreholes@gmail.com" className="block hover:text-secondary transition-colors">dakotaboreholes@gmail.com</a>
                <a href="mailto:boreholeman@gmail.com" className="block hover:text-secondary transition-colors">boreholeman@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl uppercase tracking-wide text-primary-foreground mb-5">Working Hours</h2>
          <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
            <div className="flex items-start gap-3 mb-4 text-primary-foreground/70">
              <Clock3 size={18} className="text-secondary mt-1 shrink-0" />
              <p>Our support team is available to assist you six days a week.</p>
            </div>
            <div className="space-y-3 text-sm font-body text-primary-foreground/80">
              <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-3">
                <span>Mon - Sat</span>
                <span>08:00 - 20:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="text-secondary">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-primary-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-primary-foreground/45">
          © {new Date().getFullYear()} Dakota Plumbing (Pty) Ltd. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-5 text-sm font-heading uppercase tracking-wider text-primary-foreground/45">
          <a href="/#home" className="transition-colors hover:text-secondary">Home</a>
          <a href="/#services" className="transition-colors hover:text-secondary">Services</a>
          <a href="/gallery" className="transition-colors hover:text-secondary">Gallery</a>
          <a href="/contact" className="transition-colors hover:text-secondary">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
