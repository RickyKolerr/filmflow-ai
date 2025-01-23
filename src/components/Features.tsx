import { Camera, FileSpreadsheet, Calculator, LayoutDashboard, FileCheck, MessageSquareMore } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Smart Call Sheets",
    description: "Automatically generate and customize call sheets with ease.",
    icon: FileSpreadsheet,
  },
  {
    title: "Shot List Generator",
    description: "AI-powered tools to streamline your shot planning.",
    icon: Camera,
  },
  {
    title: "Budget Projections",
    description: "Get accurate budget estimates tailored to your production.",
    icon: Calculator,
  },
  {
    title: "Job Dashboard",
    description: "Track all your projects and tasks in a single view.",
    icon: LayoutDashboard,
  },
  {
    title: "Contract Management",
    description: "Organize, review, and manage contracts securely.",
    icon: FileCheck,
  },
  {
    title: "AI Chatbot",
    description: "Get instant assistance with scheduling and planning.",
    icon: MessageSquareMore,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-navy/95">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <feature.icon className="w-12 h-12 mb-4 text-purple" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};