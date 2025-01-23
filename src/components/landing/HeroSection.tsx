import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  icon: React.ReactNode;
  route: string;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA = "Watch Demo",
  icon,
  route,
}: HeroSectionProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-navy to-purple/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6 animate-fade-up">
            {icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-up">
            {title}
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent block mt-2">
              {subtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 animate-fade-up max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-up">
            <Button 
              size="lg" 
              className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8 py-6 text-lg group transition-all duration-300"
              onClick={() => navigate(route)}
            >
              {primaryCTA}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#D6BCFA] text-white hover:bg-[#D6BCFA]/10 px-8 py-6 text-lg"
            >
              {secondaryCTA}
              <Play className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};