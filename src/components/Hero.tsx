import { Button } from "@/components/ui/button";
import { Clapperboard, Brain, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Background images with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-2 gap-4 opacity-20">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Filmmaking process"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Film editing"
              className="object-cover w-full h-full"
            />
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              alt="Film production"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-purple/80 to-navy opacity-95"></div>
      </div>
      
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