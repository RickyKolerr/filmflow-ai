import { Camera, FileSpreadsheet, Calculator, LayoutDashboard, FileCheck, MessageSquareMore } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Call Sheets",
    description: "Generate and customize call sheets instantly with AI. Perfect for managing crew schedules and locations.",
    icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    path: "/call-sheets-landing",
    gradient: "from-blue-500/20 to-purple/20"
  },
  {
    title: "Shot List Generator",
    description: "Create professional shot lists with AI-powered suggestions for camera angles and movements.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1500210557239-c0e284927505?auto=format&fit=crop&q=80",
    path: "/shot-list-landing",
    gradient: "from-purple/20 to-pink-500/20"
  },
  {
    title: "Budget Projections",
    description: "Get accurate AI-driven budget estimates for equipment, crew, locations, and post-production.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1604882737276-48aea00494d5?auto=format&fit=crop&q=80",
    path: "/budget-landing",
    gradient: "from-green-500/20 to-blue-500/20"
  },
  {
    title: "Job Dashboard",
    description: "Manage all your projects, crew assignments, and timelines in one intelligent interface.",
    icon: LayoutDashboard,
    image: "https://images.unsplash.com/photo-1524026986132-000404263e59?auto=format&fit=crop&q=80",
    path: "/dashboard",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Contract Management",
    description: "Organize and manage talent and crew contracts with AI-powered insights and automation.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?auto=format&fit=crop&q=80",
    path: "/contracts-landing",
    gradient: "from-teal-500/20 to-green-500/20"
  },
  {
    title: "AI Assistant",
    description: "Get instant, intelligent assistance for scheduling, budgeting, and production planning.",
    icon: MessageSquareMore,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    path: "/ai-assistant",
    gradient: "from-pink-500/20 to-purple/20"
  },
];

export const Features = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-navy via-purple/10 to-navy relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-50"></div>

      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary animate-fade-up">
          Powerful Features for Modern Filmmaking
        </h2>
        <p className="text-xl text-primary/70 text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          Everything you need to streamline your production workflow, powered by cutting-edge AI technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden p-8 bg-black/30 border-primary/10 backdrop-blur-sm hover:bg-black/40 transition-all duration-500 hover:scale-105 hover:border-accent/50 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(feature.path)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 mb-6 text-accent group-hover:text-primary transition-colors duration-500" />
                <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-primary/70 group-hover:text-primary transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};