import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileSpreadsheet } from "lucide-react";

export const CallSheetsLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary text-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FileSpreadsheet className="w-16 h-16 mx-auto mb-8 text-accent animate-glow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Call Sheet Management
          </h1>
          <p className="text-xl mb-8 text-primary/80">
            Streamline your production workflow with AI-powered call sheets. Automatically generate, customize, and distribute professional call sheets to your entire crew.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90 w-full md:w-auto"
              onClick={() => navigate("/call-sheets")}
            >
              Try Smart Call Sheets
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Generation</h3>
              <p className="text-primary/70">Automatically create call sheets from your production schedule</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Custom Templates</h3>
              <p className="text-primary/70">Create and save templates for different production types</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Instant Distribution</h3>
              <p className="text-primary/70">Share call sheets with your crew in one click</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};