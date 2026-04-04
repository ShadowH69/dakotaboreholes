import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { RevealWrapper } from "@/hooks/useScrollReveal";

const surveyingFAQs = [
  { q: "What is geophysical surveying?", a: "Geophysical surveying uses advanced equipment to analyse subsurface geological conditions — identifying water-bearing fractures, aquifer depth, and expected yield — before any drilling begins." },
  { q: "Why should I survey before drilling?", a: "Surveying eliminates the costly risk of drilling a dry borehole. It pinpoints the optimal location and depth, saving you time and money while maximising water yield." },
  { q: "How deep can your surveys detect water?", a: "Our equipment can accurately analyse ground conditions and detect water-bearing formations up to 300 metres below the surface." },
  { q: "How long does a survey take?", a: "A typical geophysical survey takes between 2 to 4 hours on-site, depending on the size and complexity of the property." },
  { q: "Is surveying guaranteed to find water?", a: "While no method is 100% guaranteed, geophysical surveying dramatically increases success rates — typically above 90% — by using scientific data rather than guesswork." },
];

const drillingFAQs = [
  { q: "How deep do you drill?", a: "We drill boreholes to depths determined by the geophysical survey, typically ranging from 40 to 250 metres depending on the geological conditions and aquifer location." },
  { q: "How long does drilling take?", a: "Most boreholes are completed within 1 to 3 days, depending on depth, ground conditions, and access to the site." },
  { q: "What drilling methods do you use?", a: "We select the drilling method based on your site's geology — including rotary air percussion and mud rotary techniques — to ensure structural integrity and optimal yield." },
  { q: "Do you install the pump as well?", a: "Yes, we offer a complete turnkey solution including pump installation, reticulation, and connection to your water system." },
  { q: "What happens if the borehole runs dry?", a: "Dry boreholes are extremely rare when preceded by a proper geophysical survey. In the unlikely event, we assess the data and recommend the best course of action." },
  { q: "Do I need permission to drill a borehole?", a: "In most areas, you need to register your borehole with the Department of Water and Sanitation. We can guide you through the registration process." },
  { q: "How much water can a borehole produce?", a: "Yield varies depending on the aquifer — typical boreholes produce between 500 and 5,000 litres per hour. The geophysical survey provides a yield estimate before drilling." },
  { q: "What maintenance does a borehole need?", a: "Boreholes require minimal maintenance — periodic pump servicing, water quality testing, and occasional yield checks to ensure long-term performance." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Header */}
    <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-body text-primary-foreground/40 mb-3 sm:mb-4">
          <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
          <span>/</span>
          <span className="text-secondary">FAQ</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h1>
        <p className="mt-2 sm:mt-3 text-primary-foreground/50 max-w-lg text-sm sm:text-base">
          Everything you need to know about geophysical surveying and borehole drilling.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-10 sm:space-y-14">
        {[
          { label: "Surveying", title: "Geophysical Surveying", items: surveyingFAQs, prefix: "survey" },
          { label: "Drilling", title: "Borehole Drilling", items: drillingFAQs, prefix: "drill" },
        ].map((section) => (
          <RevealWrapper key={section.prefix} direction="up">
            <div>
              <span className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">{section.label}</span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase text-foreground mt-1 mb-4 sm:mb-6">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-2 sm:space-y-2.5">
                {section.items.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.prefix}-${i}`}
                    className="border border-border rounded-lg sm:rounded-xl px-4 sm:px-5 data-[state=open]:border-primary/25 data-[state=open]:shadow-sm transition-all"
                  >
                    <AccordionTrigger className="font-heading text-xs sm:text-sm font-semibold text-foreground hover:no-underline py-3 sm:py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-3 sm:pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealWrapper>
        ))}

        <RevealWrapper direction="up">
          <div className="text-center pt-6 sm:pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4 sm:mb-5">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-heading text-[10px] sm:text-xs uppercase tracking-wider text-secondary-foreground transition-all hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] group"
            >
              Contact Us <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>

    <Footer />
  </div>
);

export default FAQ;
