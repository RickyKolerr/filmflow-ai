import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import { Pricing } from "@/components/Pricing";
import Auth from "./pages/Auth";
import { CallSheetsLanding } from "./pages/LandingPages/CallSheets";
import { ShotListLanding } from "./pages/LandingPages/ShotList";
import { BudgetLanding } from "./pages/LandingPages/Budget";
import { ContractsLanding } from "./pages/LandingPages/Contracts";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route
                  path="/auth"
                  element={
                    !session ? <Auth /> : <Navigate to="/" replace={true} />
                  }
                />
                <Route
                  path="/"
                  element={
                    session ? <Index /> : <Navigate to="/auth" replace={true} />
                  }
                />
                <Route
                  path="/pricing"
                  element={
                    session ? <Pricing /> : <Navigate to="/auth" replace={true} />
                  }
                />
                {/* Landing Pages */}
                <Route path="/call-sheets-landing" element={<CallSheetsLanding />} />
                <Route path="/shot-list-landing" element={<ShotListLanding />} />
                <Route path="/budget-landing" element={<BudgetLanding />} />
                <Route path="/contracts-landing" element={<ContractsLanding />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;