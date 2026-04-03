import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/dakota-logo.png";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Why Survey", href: "/#why-survey" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(var(--section-dark))]/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="/#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Dakota Plumbing"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block leading-tight">
            <span className="font-heading text-base font-bold text-primary-foreground tracking-wide block">
              DAKOTA
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/50 font-medium">
              Plumbing & Borehole
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 font-body text-[13px] font-medium uppercase tracking-wider transition-colors duration-300 rounded-lg ${
                isActive(link.href)
                  ? "text-secondary"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0712857397"
            className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:scale-105"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[hsl(var(--section-dark))]/98 backdrop-blur-xl border-t border-primary-foreground/5 px-4 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-foreground/5 font-body text-sm font-medium text-primary-foreground/70 hover:text-secondary transition-colors"
            >
              {link.label}
              <ChevronRight size={16} className="text-primary-foreground/20" />
            </a>
          ))}
          <a
            href="tel:0712857397"
            className="flex items-center justify-center gap-2 mt-4 bg-secondary px-6 py-3.5 rounded-xl font-heading text-sm uppercase tracking-wider text-secondary-foreground"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
