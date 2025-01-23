import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Film, 
  Calendar,
  Smartphone, 
  Settings, 
  Share2,
  CheckCircle2,
  Star,
  Camera
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";

export const CallSheetsLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-navy to-purple/20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Film className="w-12 h-12 text-accent animate-glow" />
            <Calendar className="w-12 h-12 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-up">
            Effortless Call Sheets,{" "}
            <span className="text-accent">Smarter Productions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary/80 max-w-3xl mx-auto animate-fade-up">
            Say goodbye to manual work – create professional, customized call sheets
            in seconds with AI-powered precision.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up">
            <Button
              size="lg"
              className="bg-accent text-navy hover:bg-accent/90 group"
              onClick={() => navigate("/call-sheets")}
            >
              Generate Your First Call Sheet Now
              <Film className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              Watch How It Works
              <Camera className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};