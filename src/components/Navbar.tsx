import { useState } from "react";
import { Menu, X, Clapperboard, Brain, FileText, Calendar, Users, MessageSquare, DollarSign, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { name: "Smart Call Sheets", icon: FileText, path: "/call-sheets" },
  { name: "Shot List Generator", icon: Clapperboard, path: "/shot-list" },
  { name: "Budget Projections", icon: DollarSign, path: "/budget" },
  { name: "Job Dashboard", icon: Calendar, path: "/dashboard" },
  { name: "Contract Management", icon: Users, path: "/contracts" },
  { name: "AI Assistant", icon: MessageSquare, path: "/ai-assistant" },
  { name: "Pricing", icon: DollarSign, path: "/pricing" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer shrink-0"
            onClick={() => handleNavigation("/")}
          >
            <div className="flex items-center justify-center w-8 h-8">
              <Clapperboard className="w-8 h-8 text-accent animate-glow" />
            </div>
            <span className="text-primary text-xl font-bold">ScenePilot</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end space-x-4 flex-1 ml-8">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.path)}
                className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300 whitespace-nowrap"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="md:hidden text-primary hover:text-accent"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary border-primary/10">
              <SheetHeader>
                <SheetTitle className="text-primary flex items-center space-x-2">
                  <Clapperboard className="h-6 w-6 text-accent animate-glow" />
                  <Brain className="h-6 w-6 text-primary animate-glow" />
                  <span>ScenePilot Menu</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => handleNavigation(item.path)}
                    className="w-full justify-start text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="w-full justify-start text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};