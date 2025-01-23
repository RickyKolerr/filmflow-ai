import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Smart Call Sheets save me time?",
    answer: "Our AI-powered system automates the creation of call sheets, reducing hours of manual work to just seconds. It intelligently fills in details based on your project information and learns from your preferences over time.",
  },
  {
    question: "Can I customize my call sheets?",
    answer: "Yes, you can fully customize templates and modify any generated call sheet to match your specific needs. Our platform offers flexible formatting options while maintaining professional standards.",
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Absolutely! Access and edit your call sheets on any device with our responsive mobile interface. Updates sync instantly across all devices, keeping your team coordinated on the go.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-navy/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-navy/30 rounded-lg px-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-primary hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};