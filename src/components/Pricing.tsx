import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

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
    priceId: null, // Free plan doesn't need a price ID
  },
  {
    name: "Professional",
    price: "29",
    popular: true,
    features: [
      "Advanced AI Templates",
      "Unlimited Team Members",
      "10 Active Projects",
      "Priority Support",
      "Custom Branding",
      "Analytics Dashboard",
    ],
    priceId: "price_XXXXX", // Replace with your actual Stripe Price ID for Professional plan
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
    priceId: "price_YYYYY", // Replace with your actual Stripe Price ID for Enterprise plan
  },
];

export const Pricing = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = async (priceId: string | null) => {
    if (!priceId) {
      // Handle free plan
      toast({
        title: "Free Plan Selected",
        description: "You can start using the free plan right away!",
      });
      return;
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to subscribe to a plan.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      // First, ensure we have a customer ID for this user
      const { data: customerData, error: customerError } = await supabase.functions.invoke(
        "create-customer",
        {
          body: { email: user.email },
        }
      );

      if (customerError) {
        throw new Error(customerError.message);
      }

      // Create checkout session
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        "create-checkout",
        {
          body: { priceId, customerId: customerData.customerId },
        }
      );

      if (checkoutError) {
        throw new Error(checkoutError.message);
      }

      // Redirect to Stripe Checkout
      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      }
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to process subscription. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-navy/50 to-purple/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Simple, <span className="text-[#9b87f5]">Transparent</span> Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl bg-navy/30 hover:bg-navy/40 transition-all duration-300 animate-fade-up border-2 ${
                plan.popular
                  ? "border-[#9b87f5] scale-105 md:scale-110"
                  : "border-[#D6BCFA]/20"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="bg-[#9b87f5] text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-[#9b87f5] mb-6">
                ${plan.price}
                <span className="text-sm text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#9b87f5] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleSubscribe(plan.priceId)}
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? "bg-[#9b87f5] hover:bg-[#8b77e5] text-white"
                    : "bg-transparent border-2 border-[#D6BCFA] text-white hover:bg-[#D6BCFA]/10"
                }`}
              >
                {plan.price === "0" ? "Get Started" : "Subscribe"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};