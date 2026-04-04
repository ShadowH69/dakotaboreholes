import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "James Mokoena", location: "Midrand, Gauteng", text: "Dakota drilled our borehole in just two days. The water quality is excellent and the team was professional from start to finish. Highly recommended!", rating: 5 },
  { name: "Sarah van der Merwe", location: "Sandton, Johannesburg", text: "We were struggling with municipal water cuts. Dakota did the geo survey and found water at 45 metres. Best investment we've ever made.", rating: 5 },
  { name: "Thabo Ndlovu", location: "Centurion, Pretoria", text: "From the initial survey to pump installation, the Dakota team handled everything. Very knowledgeable and their pricing was fair and transparent.", rating: 5 },
  { name: "Linda Potgieter", location: "Alberton, Ekurhuleni", text: "I called Dakota after two other companies couldn't find water. Their geo survey pinpointed the exact spot and we hit water at 60 metres!", rating: 5 },
  { name: "Michael Dlamini", location: "Roodepoort, West Rand", text: "Professional, punctual, and the borehole has been running perfectly for over a year now. Dakota really knows their craft.", rating: 5 },
  { name: "Anita Pillay", location: "Benoni, East Rand", text: "The pump and reticulation system Dakota installed works flawlessly. Our garden has never looked better and we've cut our water bill by 70%.", rating: 5 },
  { name: "David Botha", location: "Vereeniging, Sedibeng", text: "Dakota did a complete borehole installation for our small farm. The yield is fantastic and their after-service support has been outstanding.", rating: 5 },
  { name: "Nomsa Khumalo", location: "Soweto, Johannesburg", text: "I was sceptical at first, but the geo survey results were accurate. Dakota found water exactly where they said they would. Truly impressed.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (dir: 1 | -1) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 7000);
    return () => clearInterval(timer);
  }, [current]);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              What Our Clients Say
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground mt-1.5 sm:mt-2">
              Testimonials
            </h2>
          </div>
        </RevealWrapper>

        <div
          className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto transition-all duration-500"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(16px)" : "translateY(0)",
          }}
        >
          {visible.map((t, i) => (
            <div
              key={`${current}-${i}`}
              className={`relative rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                i === 1 ? "hidden md:block" : ""
              }`}
            >
              <Quote size={24} className="text-secondary/15 absolute top-4 sm:top-5 right-4 sm:right-5" />
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={12} className="fill-secondary text-secondary sm:w-3.5 sm:h-3.5" />
                ))}
              </div>
              <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary/15 flex items-center justify-center font-heading text-secondary font-bold text-xs sm:text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-xs sm:text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-[10px] sm:text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
          <button onClick={() => navigate(-1)} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary transition-all duration-300 active:scale-90">
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1 sm:gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAnimating(true); setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300); }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-400 ${
                  i === current ? "bg-secondary w-5 sm:w-6" : "bg-muted-foreground/20 w-1.5 sm:w-2"
                }`}
              />
            ))}
          </div>
          <button onClick={() => navigate(1)} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-secondary hover:text-secondary transition-all duration-300 active:scale-90">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
