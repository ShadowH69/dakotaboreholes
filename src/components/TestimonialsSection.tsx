import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "James Mokoena", location: "Midrand, Gauteng", text: "Dakota drilled our borehole in just two days. The water quality is excellent and the team was professional from start to finish. Highly recommended!", rating: 5 },
  { name: "Sarah van der Merwe", location: "Sandton, Johannesburg", text: "We were struggling with municipal water cuts. Dakota did the geo survey and found water at 45 metres. Best investment we've ever made for our property.", rating: 5 },
  { name: "Thabo Ndlovu", location: "Centurion, Pretoria", text: "From the initial survey to pump installation, the Dakota team handled everything. Very knowledgeable and their pricing was fair and transparent.", rating: 5 },
  { name: "Linda Potgieter", location: "Alberton, Ekurhuleni", text: "I called Dakota after two other companies couldn't find water on my property. Their geo survey pinpointed the exact spot and we hit water at 60 metres!", rating: 5 },
  { name: "Michael Dlamini", location: "Roodepoort, West Rand", text: "Professional, punctual, and the borehole has been running perfectly for over a year now. Dakota really knows their craft. Will use them again.", rating: 5 },
  { name: "Anita Pillay", location: "Benoni, East Rand", text: "The pump and reticulation system Dakota installed works flawlessly. Our garden has never looked better and we've cut our water bill by 70%.", rating: 5 },
  { name: "David Botha", location: "Vereeniging, Sedibeng", text: "Dakota did a complete borehole installation for our small farm. The yield is fantastic and their after-service support has been outstanding.", rating: 5 },
  { name: "Nomsa Khumalo", location: "Soweto, Johannesburg", text: "I was sceptical at first, but the geo survey results were accurate. Dakota found water exactly where they said they would. Truly impressed with their expertise.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const perPage = 2;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const navigate = (dir: 1 | -1) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + totalPages) % totalPages);
      setIsAnimating(false);
    }, 250);
  };

  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative py-24 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4">
        <RevealWrapper direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">
              What Our Clients Say
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground mt-3">
              Testimonials
            </h2>
          </div>
        </RevealWrapper>

        <div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-500"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(20px)" : "translateY(0)",
          }}
        >
          {visible.map((t, i) => (
            <div
              key={current * perPage + i}
              className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-primary-foreground/[0.08] transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={32} className="text-secondary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-heading text-secondary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary-foreground">{t.name}</p>
                  <p className="text-primary-foreground/50 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAnimating(true); setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 250); }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-8" : "bg-primary-foreground/20 w-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
