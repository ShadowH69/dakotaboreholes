import { createContext, useContext, useState, ReactNode } from "react";

type SiteMode = "borehole" | "plumbing";

const SiteModeContext = createContext<{
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
}>({ mode: "borehole", setMode: () => {} });

export const useSiteMode = () => useContext(SiteModeContext);

export const SiteModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<SiteMode>("borehole");
  return (
    <SiteModeContext.Provider value={{ mode, setMode }}>
      {children}
    </SiteModeContext.Provider>
  );
};
