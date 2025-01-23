import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";

export const BudgetLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary text-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calculator className="w-16 h-16 mx-auto mb-8 text-accent animate-glow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Budget Projections
          </h1>
          <p className="text-xl mb-8 text-primary/80">
            Get accurate budget estimates and projections powered by AI analysis of your production requirements.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90 w-full md:w-auto"
              onClick={() => navigate("/budget")}
            >
              Start Budgeting
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Cost Analysis</h3>
              <p className="text-primary/70">Detailed breakdown of all production costs</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-primary/70">Track expenses as they happen</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Budget Reports</h3>
              <p className="text-primary/70">Generate professional budget reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};