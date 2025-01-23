import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const LanguageToggle = () => {
  const { language, setLanguage, translations } = useLanguage();
  const { toast } = useToast();

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'vi' : 'en';
    setLanguage(newLanguage);
    toast({
      title: translations['language_changed'] || 'Language Changed',
      description: newLanguage === 'en' ? 'Switched to English' : 'Đã chuyển sang Tiếng Việt',
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLanguageChange}
      className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
      title={language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};