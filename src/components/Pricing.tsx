import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "Basic Call Sheet Templates",
      "Simple Shot List Creation",
      "1 Project",
      "2 Team Members",
      "Basic AI Assistant",
    ],
  },
  {
    name: "Starter",
    price: "9.99",
    features: [
      "Advanced Call Sheet Templates",
      "Shot List Generator with AI",
      "5 Projects",
      "10 Team Members",
      "Budget Tracking",
      "Contract Templates",
      "Priority Support",
    ],
  },
  {
    name: "Pro",
    price: "19.99",
    features: [
      "Custom Call Sheet Templates",
      "Advanced Shot List AI Generator",
      "Unlimited Projects",
      "Unlimited Team Members",
      "Advanced Budget Analytics",
      "Custom Contract Management",
      "24/7 Priority Support",
      "API Access",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary animate-fade-up">Choose Your Plan</h2>
        <p className="text-center text-primary/70 mb-12 max-w-2xl mx-auto">
          Scale your film production workflow with our flexible pricing options
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className="p-6 bg-black/50 border-primary/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 group animate-fade-up"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-accent mb-6">
                ${plan.price}
                <span className="text-sm text-primary/70">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-primary/80 group-hover:text-primary">
                    <Check className="w-5 h-5 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-accent text-secondary hover:bg-accent/90 transition-all duration-300"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};