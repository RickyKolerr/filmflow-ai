import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQ[];
}

export const FAQSection = ({ title, subtitle, faqs }: FAQSectionProps) => {
  return (
    <section className="py-24 bg-navy/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          {title} <span className="text-[#9b87f5]">{subtitle}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-navy/30 rounded-xl px-6 animate-fade-up border border-[#D6BCFA]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-white hover:text-[#9b87f5] text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};