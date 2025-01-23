import { Camera, FileSpreadsheet, Calculator, LayoutDashboard, FileCheck, MessageSquareMore } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Smart Call Sheets",
    description: "Automatically generate and customize call sheets with ease. Perfect for managing crew schedules and locations.",
    icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    path: "/call-sheets-landing"
  },
  {
    title: "Shot List Generator",
    description: "AI-powered tools to streamline your shot planning. Create professional shot lists with camera angles and movements.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1500210557239-c0e284927505?auto=format&fit=crop&q=80",
    path: "/shot-list-landing"
  },
  {
    title: "Budget Projections",
    description: "Get accurate budget estimates for equipment, crew, locations, and post-production costs.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1604882737276-48aea00494d5?auto=format&fit=crop&q=80",
    path: "/budget-landing"
  },
  {
    title: "Job Dashboard",
    description: "Track all your projects, crew assignments, and production timelines in a single view.",
    icon: LayoutDashboard,
    image: "https://images.unsplash.com/photo-1524026986132-000404263e59?auto=format&fit=crop&q=80",
    path: "/dashboard"
  },
  {
    title: "Contract Management",
    description: "Organize, review, and manage talent and crew contracts securely in one place.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?auto=format&fit=crop&q=80",
    path: "/contracts-landing"
  },
  {
    title: "AI Chatbot",
    description: "Get instant assistance with scheduling, budgeting, and production planning.",
    icon: MessageSquareMore,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    path: "/ai-assistant"
  },
];

export const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fade-up">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden p-6 bg-black/50 border-primary/10 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:border-accent/50 group animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(feature.path)}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <feature.icon className="w-12 h-12 mb-4 text-accent group-hover:text-primary transition-colors relative z-10" />
              <h3 className="text-xl font-semibold mb-2 text-primary relative z-10">{feature.title}</h3>
              <p className="text-primary/70 group-hover:text-primary transition-colors relative z-10">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};