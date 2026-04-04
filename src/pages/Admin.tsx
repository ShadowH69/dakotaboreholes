import { useState } from "react";
import { useSiteConfig } from "@/lib/siteConfig";
import { Palette, Type, FileText, Image, RotateCcw, Save, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FONT_OPTIONS = [
  { label: "Oswald", value: "'Oswald', sans-serif" },
  { label: "Inter", value: "'Inter', sans-serif" },
  { label: "Roboto", value: "'Roboto', sans-serif" },
  { label: "Montserrat", value: "'Montserrat', sans-serif" },
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Raleway", value: "'Raleway', sans-serif" },
  { label: "Lato", value: "'Lato', sans-serif" },
  { label: "Open Sans", value: "'Open Sans', sans-serif" },
  { label: "Source Sans 3", value: "'Source Sans 3', sans-serif" },
];

const hslToHex = (hslStr: string): string => {
  const parts = hslStr.trim().split(/\s+/);
  if (parts.length < 3) return "#1a5fb4";
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const hexToHsl = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else h = ((r - g) / d + 4) * 60;
  }
  return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

const tabs = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "fonts", label: "Fonts", icon: Type },
  { id: "text", label: "Content", icon: FileText },
  { id: "images", label: "Images", icon: Image },
] as const;

type TabId = typeof tabs[number]["id"];

const Admin = () => {
  const { config, updateColors, updateFonts, updateText, resetConfig } = useSiteConfig();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<TabId>("colors");

  const handleReset = () => {
    resetConfig();
    toast({ title: "Configuration reset to defaults" });
    window.location.reload();
  };

  const inputCls = "w-full border border-border bg-background rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-secondary transition-colors";
  const labelCls = "block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider";

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-lg font-bold text-foreground">Dakota Admin Panel</h1>
            <p className="text-xs text-muted-foreground">Site Configuration</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={12} /> View Site
            </a>
            <button onClick={handleReset} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-destructive/30 text-xs text-destructive hover:bg-destructive/10 transition-colors">
              <RotateCcw size={12} /> Reset All
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-card rounded-xl p-1 border border-border mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <tab.icon size={14} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Colors Tab */}
        {activeTab === "colors" && (
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-1">Brand Colors</h2>
            <p className="text-sm text-muted-foreground mb-6">Changes apply instantly across the entire site.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {(["primary", "secondary", "accent", "water"] as const).map((key) => (
                <div key={key}>
                  <label className={labelCls}>{key}</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={hslToHex(config.colors[key])}
                      onChange={(e) => updateColors({ [key]: hexToHsl(e.target.value) })}
                      className="w-10 h-10 rounded-lg border border-border cursor-pointer"
                    />
                    <span className="text-xs text-muted-foreground font-mono">{hslToHex(config.colors[key])}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-muted">
              <p className="text-xs text-muted-foreground">Preview:</p>
              <div className="flex gap-3 mt-2">
                <div className="w-16 h-10 rounded-lg bg-primary" />
                <div className="w-16 h-10 rounded-lg bg-secondary" />
                <div className="w-16 h-10 rounded-lg bg-accent" />
                <div className="w-16 h-10 rounded-lg bg-water" />
              </div>
            </div>
          </div>
        )}

        {/* Fonts Tab */}
        {activeTab === "fonts" && (
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-1">Typography</h2>
            <p className="text-sm text-muted-foreground mb-6">Choose fonts for headings and body text.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Heading Font</label>
                <select value={config.fonts.heading} onChange={(e) => updateFonts({ heading: e.target.value })} className={inputCls}>
                  {FONT_OPTIONS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
                <p className="mt-3 text-2xl font-bold" style={{ fontFamily: config.fonts.heading }}>
                  Preview Heading
                </p>
              </div>
              <div>
                <label className={labelCls}>Body Font</label>
                <select value={config.fonts.body} onChange={(e) => updateFonts({ body: e.target.value })} className={inputCls}>
                  {FONT_OPTIONS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
                <p className="mt-3 text-sm" style={{ fontFamily: config.fonts.body }}>
                  This is how your body text will look across the website. Make sure it's readable.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Text Tab */}
        {activeTab === "text" && (
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-1">Site Content</h2>
            <p className="text-sm text-muted-foreground mb-6">Edit headings, descriptions, and key text.</p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Company Name</label>
                  <input type="text" value={config.text.companyName} onChange={(e) => updateText({ companyName: e.target.value })} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Tagline</label>
                  <input type="text" value={config.text.companyTagline} onChange={(e) => updateText({ companyTagline: e.target.value })} className={inputCls} />
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Hero Section</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Hero Title</label>
                    <input type="text" value={config.text.heroTitle} onChange={(e) => updateText({ heroTitle: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Highlighted Text</label>
                    <input type="text" value={config.text.heroHighlight} onChange={(e) => updateText({ heroHighlight: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div className="mt-3">
                  <label className={labelCls}>Subtitle</label>
                  <textarea value={config.text.heroSubtitle} onChange={(e) => updateText({ heroSubtitle: e.target.value })} rows={2} className={`${inputCls} resize-y`} />
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Section Titles</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Solution Title</label>
                    <input type="text" value={config.text.solutionTitle} onChange={(e) => updateText({ solutionTitle: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Services Title</label>
                    <input type="text" value={config.text.servicesTitle} onChange={(e) => updateText({ servicesTitle: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className={labelCls}>Solution Subtitle</label>
                    <textarea value={config.text.solutionSubtitle} onChange={(e) => updateText({ solutionSubtitle: e.target.value })} rows={2} className={`${inputCls} resize-y`} />
                  </div>
                  <div>
                    <label className={labelCls}>Services Subtitle</label>
                    <textarea value={config.text.servicesSubtitle} onChange={(e) => updateText({ servicesSubtitle: e.target.value })} rows={2} className={`${inputCls} resize-y`} />
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div>
                  <label className={labelCls}>Why Survey Title</label>
                  <input type="text" value={config.text.whySurveyTitle} onChange={(e) => updateText({ whySurveyTitle: e.target.value })} className={inputCls} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === "images" && (
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-1">Images</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Upload images via the Gallery page or change slideshow images by providing URLs below. Leave blank to use defaults.
            </p>
            <div>
              <label className={labelCls}>Logo URL (leave blank for default)</label>
              <input
                type="url"
                placeholder="https://example.com/logo.png"
                value={config.images.logo}
                onChange={(e) => {
                  const cfg = { ...config };
                  cfg.images = { ...cfg.images, logo: e.target.value };
                  localStorage.setItem("dakota-site-config", JSON.stringify(cfg));
                  window.location.reload();
                }}
                className={inputCls}
              />
            </div>
            <div className="mt-4 p-4 rounded-xl bg-muted">
              <p className="text-xs text-muted-foreground">
                💡 To manage gallery images, visit the <a href="/gallery" className="text-secondary underline">Gallery page</a> and use the Add/Remove buttons.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
