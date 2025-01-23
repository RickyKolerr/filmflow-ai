import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

export const ShotListLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary text-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="w-16 h-16 mx-auto mb-8 text-accent animate-glow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Shot List Generator
          </h1>
          <p className="text-xl mb-8 text-primary/80">
            Create professional shot lists with intelligent suggestions for camera angles, movements, and technical specifications.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90 w-full md:w-auto"
              onClick={() => navigate("/shot-list")}
            >
              Create Shot List
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Smart Suggestions</h3>
              <p className="text-primary/70">Get AI-powered recommendations for shot composition</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Visual Planning</h3>
              <p className="text-primary/70">Organize shots with visual storyboards</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Export Options</h3>
              <p className="text-primary/70">Share shot lists in multiple formats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};