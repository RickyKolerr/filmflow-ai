import { Film } from "lucide-react";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { StepSection } from "@/components/landing/StepSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { FAQSection } from "@/components/landing/FAQSection";

const features = [
  {
    icon: Film,
    title: "AI-Powered Generation",
    description: "Create professional call sheets in seconds with our advanced AI technology.",
  },
  {
    icon: Film,
    title: "Smart Scheduling",
    description: "Automatically organize and optimize your production schedule.",
  },
  {
    icon: Film,
    title: "Real-Time Updates",
    description: "Keep your entire crew in sync with instant notifications.",
  },
  {
    icon: Film,
    title: "Mobile-First Design",
    description: "Access and update call sheets from any device, anywhere.",
  }
];

const steps = [
  {
    title: "Input Project Details",
    description: "Enter your production information and crew details.",
  },
  {
    title: "AI Generation",
    description: "Let our AI create your call sheet instantly.",
  },
  {
    title: "Customize & Review",
    description: "Make adjustments to fit your specific needs.",
  },
  {
    title: "Share with Team",
    description: "Distribute to your crew with one click.",
  }
];

const testimonials = [
  {
    quote: "Smart Call Sheets revolutionized how we manage our productions. The AI features save us hours of work every day.",
    author: "Sarah Johnson",
    role: "Production Manager",
    company: "Paramount Pictures",
  },
  {
    quote: "The best tool for streamlining production workflow. My crew loves how easy it is to use on set.",
    author: "Michael Chen",
    role: "Line Producer",
    company: "Netflix Productions",
  }
];

const faqs = [
  {
    question: "How does Smart Call Sheets save me time?",
    answer: "Our AI-powered system automates the creation of call sheets, reducing hours of manual work to just seconds.",
  },
  {
    question: "Can I customize my call sheets?",
    answer: "Yes, you can fully customize templates and modify any generated call sheet to match your specific needs.",
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Absolutely! Access and edit your call sheets on any device with our responsive mobile interface.",
  },
  {
    question: "How secure is my production data?",
    answer: "We use industry-standard encryption and security measures to protect your data. Your production information is stored securely and only accessible to authorized team members.",
  }
];

export const CallSheetsLanding = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <HeroSection
        title="Smart Call Sheets for"
        subtitle="Modern Filmmaking"
        primaryCTA="Generate Your First Call Sheet"
        icon={<Film className="w-16 h-16 text-[#9b87f5] animate-glow" />}
        route="/call-sheets"
      />
      <FeatureGrid
        title="Why Choose Smart Call Sheets?"
        features={features}
      />
      <StepSection
        title="How It"
        subtitle="Works"
        steps={steps}
      />
      <TestimonialSection
        title="Trusted by"
        subtitle="Industry Leaders"
        testimonials={testimonials}
      />
      <FAQSection
        title="Frequently Asked"
        subtitle="Questions"
        faqs={faqs}
      />
      <Footer />
    </div>
  );
};