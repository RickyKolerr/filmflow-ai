import { Check } from "lucide-react";

const steps = [
  {
    title: "Sign Up",
    description: "Create an account in minutes.",
  },
  {
    title: "Customize Your Project",
    description: "Add your production details, and let AI do the heavy lifting.",
  },
  {
    title: "Collaborate in Real-Time",
    description: "Work seamlessly with your team using real-time updates.",
  },
  {
    title: "Deliver Results",
    description: "Stay on schedule and under budget with AI-driven insights.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-navy/90">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-0.5 bg-purple/30 w-full top-6 left-1/2 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};