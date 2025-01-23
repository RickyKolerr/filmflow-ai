import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
      className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
      title={language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};