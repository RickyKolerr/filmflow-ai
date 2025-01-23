import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Input Project Details",
    description: "Enter your production information and crew details.",
  },
  {
    title: "AI Generation",
    description: "Let our AI create your call sheet instantly.",
  },
  {
    title: "Customize & Review",
    description: "Make adjustments to fit your specific needs.",
  },
  {
    title: "Share with Team",
    description: "Distribute to your crew with one click.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-navy/50 to-purple/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          How It <span className="text-[#9b87f5]">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#9b87f5] flex items-center justify-center text-2xl font-bold text-white">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-0.5 bg-[#9b87f5]/30 w-full top-8 left-1/2 -z-10" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center">
                {step.title}
              </h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};