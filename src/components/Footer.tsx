import logo from "@/assets/dakota-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-8 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Dakota Plumbing" className="h-10 w-auto" />
        <span className="text-primary-foreground/60 text-sm font-body">
          © {new Date().getFullYear()} Dakota Plumbing (Pty) Ltd. All rights reserved.
        </span>
      </div>
      <div className="flex gap-6">
        <a href="#home" className="text-primary-foreground/50 hover:text-gold text-sm font-heading uppercase tracking-wider transition-colors">Home</a>
        <a href="#services" className="text-primary-foreground/50 hover:text-gold text-sm font-heading uppercase tracking-wider transition-colors">Services</a>
        <a href="#contact" className="text-primary-foreground/50 hover:text-gold text-sm font-heading uppercase tracking-wider transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
