import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    features: [
      "Basic Call Sheet Templates",
      "Up to 5 Team Members",
      "1 Active Project",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "29",
    features: [
      "Advanced AI Templates",
      "Unlimited Team Members",
      "10 Active Projects",
      "Priority Support",
      "Custom Branding",
      "Analytics Dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Custom AI Solutions",
      "Unlimited Everything",
      "24/7 Support",
      "API Access",
      "Custom Integration",
      "Dedicated Account Manager",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Start for Free, Scale as You Grow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy/30 hover:bg-navy/40 transition-all duration-300 animate-fade-up border border-accent/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-accent mb-6">
                ${plan.price}
                <span className="text-sm text-primary/70">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-primary/80">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-accent text-navy hover:bg-accent/90"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};