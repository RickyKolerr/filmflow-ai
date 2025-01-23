import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

type LanguageContextType = {
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
  translations: Record<string, string>;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const { data, error } = await supabase
          .from('language_tokens')
          .select('*');

        if (error) throw error;

        const translationsMap: Record<string, string> = {};
        data.forEach((token) => {
          translationsMap[token.key] = language === 'en' ? token.english : token.vietnamese;
        });

        setTranslations(translationsMap);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching translations:', error);
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};