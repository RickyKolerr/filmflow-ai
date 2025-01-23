import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in minutes and access powerful AI-driven tools.",
  },
  {
    title: "Customize Your Project",
    description: "Input your production details and let our AI handle the complexity.",
  },
  {
    title: "Collaborate in Real-Time",
    description: "Work seamlessly with your team using our real-time collaboration features.",
  },
  {
    title: "Deliver Results",
    description: "Stay on schedule and under budget with AI-powered insights and automation.",
  },
];

export const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-navy via-purple/10 to-navy relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-30"></div>

      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary animate-fade-up">
          How ScenePilot Works
        </h2>
        <p className="text-xl text-primary/70 text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          Get started in minutes and transform your production workflow with AI-powered tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-up group hover:scale-105 transition-transform duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple flex items-center justify-center group-hover:animate-glow">
                  <Check className="w-8 h-8 text-secondary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-0.5 bg-gradient-to-r from-accent to-purple/30 w-full top-8 left-1/2 -z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary text-center group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-primary/70 text-center group-hover:text-primary transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-accent text-secondary hover:bg-accent/90 hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};