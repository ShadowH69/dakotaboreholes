import { useState, useEffect } from "react";
import logo from "@/assets/dakota-logo.png";

const WaterSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [bubbles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 20,
      delay: Math.random() * 1.5,
      duration: 1.5 + Math.random() * 1,
    }))
  );

  useEffect(() => {
    const timer = setTimeout(onComplete, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Water body */}
      <div
        className="absolute inset-0 water-splash-overlay"
        style={{
          background: "linear-gradient(to top, hsl(207 85% 25%), hsl(200 80% 45%), hsl(195 75% 60%))",
        }}
      >
        {/* Wave surface */}
        <div
          className="absolute top-0 left-0 w-[200%] h-16 water-wave-surface"
          style={{
            background: "radial-gradient(ellipse at center, hsl(195 80% 65% / 0.6) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Bubbles */}
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full bubble"
            style={{
              left: `${b.left}%`,
              bottom: "10%",
              width: b.size,
              height: b.size,
              background: "radial-gradient(circle at 30% 30%, hsl(195 90% 80% / 0.6), hsl(200 80% 55% / 0.2))",
              border: "1px solid hsl(195 90% 80% / 0.3)",
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Dakota Plumbing"
            className="splash-logo w-40 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WaterSplash;
