import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Input Details",
    description: "Enter your project name, cast, crew, and shooting schedule.",
  },
  {
    title: "Generate Instantly",
    description: "Let AI create your call sheet in seconds.",
  },
  {
    title: "Review & Customize",
    description: "Edit and adjust for your specific needs.",
  },
  {
    title: "Share with Your Team",
    description: "Send out the finalized call sheet with one click.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          How to Create a Smart Call Sheet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-navy font-bold">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-0.5 bg-accent/30 w-full top-6 left-1/2 -z-10" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                {step.title}
              </h3>
              <p className="text-primary/70 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};