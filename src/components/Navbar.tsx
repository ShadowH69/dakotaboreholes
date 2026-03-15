import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/dakota-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Survey", href: "#why-survey" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Dakota Plumbing" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold text-primary-foreground leading-tight block">
              DAKOTA PLUMBING
            </span>
            <span className="text-xs text-primary-foreground/70">& Borehole Drilling</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="tel:0712857397"
            className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-md font-heading text-sm uppercase tracking-wider text-secondary-foreground hover:brightness-110 transition"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-primary-foreground/10 px-4 pb-4">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="tel:0712857397"
            className="flex items-center justify-center gap-2 mt-2 bg-secondary px-4 py-3 rounded-md font-heading text-sm uppercase tracking-wider text-secondary-foreground"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
