import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface SiteConfig {
  // Colors (HSL values without hsl() wrapper)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    water: string;
  };
  // Fonts
  fonts: {
    heading: string;
    body: string;
  };
  // Text content
  text: {
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    solutionTitle: string;
    solutionSubtitle: string;
    servicesTitle: string;
    servicesSubtitle: string;
    whySurveyTitle: string;
    companyName: string;
    companyTagline: string;
  };
  // Image URLs (override defaults)
  images: {
    heroSlides: string[];
    logo: string;
  };
}

const defaultConfig: SiteConfig = {
  colors: {
    primary: "210 70% 38%",
    secondary: "38 80% 52%",
    accent: "200 75% 48%",
    water: "200 80% 55%",
  },
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Inter', sans-serif",
  },
  text: {
    heroTitle: "Find Water",
    heroHighlight: "Find Freedom",
    heroSubtitle: "Complete turnkey groundwater solutions — from professional surveys to fully equipped, working boreholes.",
    solutionTitle: "Our Solution",
    solutionSubtitle: "A complete groundwater solution — expertly managed from survey to water delivery.",
    servicesTitle: "Our Services",
    servicesSubtitle: "From identifying the best water-bearing zones to installing pumps and treatment systems, we manage every stage.",
    whySurveyTitle: "Why Survey Before Drilling?",
    companyName: "DAKOTA",
    companyTagline: "Plumbing & Borehole",
  },
  images: {
    heroSlides: [],
    logo: "",
  },
};

const STORAGE_KEY = "dakota-site-config";

interface SiteConfigContextType {
  config: SiteConfig;
  updateConfig: (updates: Partial<SiteConfig>) => void;
  updateColors: (colors: Partial<SiteConfig["colors"]>) => void;
  updateFonts: (fonts: Partial<SiteConfig["fonts"]>) => void;
  updateText: (text: Partial<SiteConfig["text"]>) => void;
  resetConfig: () => void;
}

const SiteConfigContext = createContext<SiteConfigContextType | null>(null);

export const useSiteConfig = () => {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) return { config: defaultConfig, updateConfig: () => {}, updateColors: () => {}, updateFonts: () => {}, updateText: () => {}, resetConfig: () => {} };
  return ctx;
};

export const SiteConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...defaultConfig, ...parsed, colors: { ...defaultConfig.colors, ...parsed.colors }, fonts: { ...defaultConfig.fonts, ...parsed.fonts }, text: { ...defaultConfig.text, ...parsed.text }, images: { ...defaultConfig.images, ...parsed.images } };
      }
    } catch {}
    return defaultConfig;
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); } catch {}
  }, [config]);

  // Apply CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", config.colors.primary);
    root.style.setProperty("--secondary", config.colors.secondary);
    root.style.setProperty("--accent", config.colors.accent);
    root.style.setProperty("--water", config.colors.water);
    root.style.setProperty("--gold", config.colors.secondary);
    root.style.setProperty("--font-heading", config.fonts.heading);
    root.style.setProperty("--font-body", config.fonts.body);
  }, [config.colors, config.fonts]);

  const updateConfig = (updates: Partial<SiteConfig>) => setConfig((c) => ({ ...c, ...updates }));
  const updateColors = (colors: Partial<SiteConfig["colors"]>) => setConfig((c) => ({ ...c, colors: { ...c.colors, ...colors } }));
  const updateFonts = (fonts: Partial<SiteConfig["fonts"]>) => setConfig((c) => ({ ...c, fonts: { ...c.fonts, ...fonts } }));
  const updateText = (text: Partial<SiteConfig["text"]>) => setConfig((c) => ({ ...c, text: { ...c.text, ...text } }));
  const resetConfig = () => { setConfig(defaultConfig); localStorage.removeItem(STORAGE_KEY); };

  return (
    <SiteConfigContext.Provider value={{ config, updateConfig, updateColors, updateFonts, updateText, resetConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
};
