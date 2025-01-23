import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useToast } from "@/components/ui/use-toast";

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    toast({
      title: 'Theme Changed',
      description: `Switched to ${newTheme} mode`,
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};