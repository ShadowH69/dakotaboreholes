import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase text-primary-foreground">
            Frequently Asked<br />
            <span className="text-secondary">Questions</span>
          </h1>
          <p className="mt-4 text-primary-foreground/60 font-body text-lg max-w-xl">
            Everything you need to know about geophysical surveying and borehole drilling.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Surveying FAQs */}
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Surveying</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mt-2 mb-8">
              Geophysical Surveying
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {surveyingFAQs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`survey-${i}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Drilling FAQs */}
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.2em] text-secondary">Drilling</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mt-2 mb-8">
              Borehole Drilling
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {drillingFAQs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`drill-${i}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground font-body text-lg mb-6">
              Still have questions? Get in touch with our team.
            </p>
            <a
              href="tel:0712857397"
              className="inline-flex items-center gap-2 bg-secondary px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider text-secondary-foreground hover:brightness-110 transition"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
