import { Button } from "@/components/ui/button";
import { Clapperboard, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-secondary text-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <div className="flex justify-center gap-4 mb-6">
            <Clapperboard className="w-12 h-12 text-accent animate-glow" />
            <Brain className="w-12 h-12 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Revolutionize Film Production with AI-Powered Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary/80 hover:text-primary transition-colors">
            Streamline your filmmaking process with automated call sheets, shot lists, budget projections, and real-time project management – all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent text-secondary hover:bg-accent/90 hover:scale-105 transition-all duration-300 animate-glow">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};