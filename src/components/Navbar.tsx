import { useState } from "react";
import { Menu, X, Phone, Droplets, Wrench } from "lucide-react";
import logo from "@/assets/dakota-logo.png";
import { Switch } from "@/components/ui/switch";
import { useSiteMode } from "@/contexts/SiteModeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useSiteMode();

  const boreholeLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Survey", href: "#why-survey" },
    { label: "Contact", href: "#contact" },
  ];

  const plumbingLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Dakota", href: "#why-survey" },
    { label: "Contact", href: "#contact" },
  ];

  const links = mode === "borehole" ? boreholeLinks : plumbingLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Dakota Plumbing" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold text-primary-foreground leading-tight block">
              DAKOTA PLUMBING
            </span>
            <span className="text-xs text-primary-foreground/70">{mode === "borehole" ? "& Borehole Drilling" : "Plumbing Services"}</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {/* Mode Switch */}
          <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3 py-1.5">
            <Droplets size={14} className={`transition-colors ${mode === "borehole" ? "text-water" : "text-primary-foreground/40"}`} />
            <span className={`font-heading text-xs uppercase tracking-wider transition-colors ${mode === "borehole" ? "text-primary-foreground" : "text-primary-foreground/40"}`}>Boreholes</span>
            <Switch
              checked={mode === "plumbing"}
              onCheckedChange={(checked) => setMode(checked ? "plumbing" : "borehole")}
              className="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-water"
            />
            <span className={`font-heading text-xs uppercase tracking-wider transition-colors ${mode === "plumbing" ? "text-primary-foreground" : "text-primary-foreground/40"}`}>Plumbing</span>
            <Wrench size={14} className={`transition-colors ${mode === "plumbing" ? "text-secondary" : "text-primary-foreground/40"}`} />
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
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
          {/* Mobile Mode Switch */}
          <div className="flex items-center justify-center gap-2 py-3 border-b border-primary-foreground/10 mb-2">
            <Droplets size={14} className={`transition-colors ${mode === "borehole" ? "text-water" : "text-primary-foreground/40"}`} />
            <span className={`font-heading text-xs uppercase tracking-wider transition-colors ${mode === "borehole" ? "text-primary-foreground" : "text-primary-foreground/40"}`}>Boreholes</span>
            <Switch
              checked={mode === "plumbing"}
              onCheckedChange={(checked) => setMode(checked ? "plumbing" : "borehole")}
              className="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-water"
            />
            <span className={`font-heading text-xs uppercase tracking-wider transition-colors ${mode === "plumbing" ? "text-primary-foreground" : "text-primary-foreground/40"}`}>Plumbing</span>
            <Wrench size={14} className={`transition-colors ${mode === "plumbing" ? "text-secondary" : "text-primary-foreground/40"}`} />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
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
