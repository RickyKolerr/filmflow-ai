import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileCheck } from "lucide-react";

export const ContractsLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary text-primary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FileCheck className="w-16 h-16 mx-auto mb-8 text-accent animate-glow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contract Management
          </h1>
          <p className="text-xl mb-8 text-primary/80">
            Streamline your contract workflow with intelligent templates and automated processing.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90 w-full md:w-auto"
              onClick={() => navigate("/contracts")}
            >
              Manage Contracts
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Smart Templates</h3>
              <p className="text-primary/70">AI-powered contract template generation</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">E-Signatures</h3>
              <p className="text-primary/70">Secure digital signing process</p>
            </div>
            <div className="p-6 bg-black/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Contract Tracking</h3>
              <p className="text-primary/70">Monitor contract status and renewals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};