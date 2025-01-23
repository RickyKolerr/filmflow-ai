import { Button } from "@/components/ui/button";
import { Clapperboard, Brain, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-navy via-purple/20 to-navy overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <div className="relative">
              <Clapperboard className="w-16 h-16 text-accent animate-glow relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl animate-pulse" />
            </div>
            <div className="relative">
              <Brain className="w-16 h-16 text-primary animate-glow relative z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            <span className="bg-gradient-to-r from-primary via-accent to-purple bg-clip-text text-transparent">
              ScenePilot:
            </span>
            <span className="block mt-2 text-4xl md:text-6xl text-primary/90">
              Revolutionize Film Production with AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-primary/80 animate-fade-up max-w-2xl mx-auto leading-relaxed">
            Streamline your filmmaking process with automated call sheets, shot lists, budget projections, and real-time project management – all powered by cutting-edge AI technology.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-up">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-accent text-secondary hover:bg-accent/90 hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg"
            >
              Watch Demo
              <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            {['Netflix', 'Universal', 'Warner Bros', 'Paramount'].map((company) => (
              <div key={company} className="text-primary/60 text-sm font-semibold tracking-wider">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};