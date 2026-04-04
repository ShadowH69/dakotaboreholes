import { Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/dakota-logo.png";
import { useSiteConfig } from "@/lib/siteConfig";

const Footer = () => {
  const { config } = useSiteConfig();

  return (
    <footer className="bg-[hsl(var(--section-darker))] border-t border-primary-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img src={logo} alt="Dakota Plumbing" className="h-9 sm:h-10 w-auto" />
              <div className="leading-tight">
                <p className="font-heading text-sm sm:text-base font-bold uppercase tracking-wide text-primary-foreground">
                  Dakota Plumbing
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-primary-foreground/40">
                  & Borehole Drilling
                </p>
              </div>
            </div>
            <p className="max-w-sm text-primary-foreground/50 text-xs sm:text-sm leading-relaxed">
              Professional borehole surveying and drilling services with complete turnkey water solutions.
            </p>
            <div className="flex items-center gap-2.5 mt-5 sm:mt-6">
              <a href="https://www.instagram.com/dakotaboreholeman/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon social-icon--instagram"><Instagram size={16} /></a>
              <a href="https://www.facebook.com/profile.php?id=61586707790828" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon social-icon--facebook"><Facebook size={16} /></a>
              <a href="https://www.youtube.com/@dakotaplumbing" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon social-icon--youtube"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-xs sm:text-sm uppercase tracking-wider text-primary-foreground mb-4 sm:mb-5 font-semibold">Contact</h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-primary-foreground/55">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-secondary mt-0.5 shrink-0" />
                <p>5 Delamere Rd, Robertsham, Johannesburg South, 2091</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={14} className="text-secondary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+27774938076" className="block hover:text-secondary transition-colors">+27 77 493 8076</a>
                  <a href="tel:+27712857397" className="block hover:text-secondary transition-colors">+27 71 285 7397</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-secondary mt-0.5 shrink-0" />
                <div className="break-all">
                  <a href="mailto:dakotaboreholes@gmail.com" className="block hover:text-secondary transition-colors">dakotaboreholes@gmail.com</a>
                  <a href="mailto:boreholeman@gmail.com" className="block hover:text-secondary transition-colors">boreholeman@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h2 className="font-heading text-xs sm:text-sm uppercase tracking-wider text-primary-foreground mb-4 sm:mb-5 font-semibold">Hours</h2>
            <div className="rounded-xl sm:rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.03] p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-3 sm:mb-4 text-primary-foreground/55 text-xs sm:text-sm">
                <Clock3 size={14} className="text-secondary mt-0.5 shrink-0" />
                <p>Available six days a week</p>
              </div>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-primary-foreground/65">
                <div className="flex justify-between border-b border-primary-foreground/8 pb-2 sm:pb-2.5">
                  <span>Mon – Sat</span>
                  <span className="font-medium text-primary-foreground/80">08:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-secondary font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 border-t border-primary-foreground/5 pt-5 sm:pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] sm:text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Dakota Plumbing (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-5 text-[10px] sm:text-xs font-heading uppercase tracking-wider text-primary-foreground/30">
            <a href="/#home" className="hover:text-secondary transition-colors">Home</a>
            <a href="/#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="/gallery" className="hover:text-secondary transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
