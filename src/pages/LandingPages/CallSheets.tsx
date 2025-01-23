import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Clock, 
  FileSpreadsheet, 
  Smartphone, 
  Settings, 
  Share2, 
  CheckCircle2,
  Play,
  ArrowRight
} from "lucide-react";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Instant Generation",
    description: "AI automatically fills in cast, crew, schedules, and locations.",
    icon: Clock,
  },
  {
    title: "Customizable Templates",
    description: "Tailor your call sheets to fit your production needs.",
    icon: Settings,
  },
  {
    title: "Seamless Integration",
    description: "Import data from tools you already use, like Google Sheets or Excel.",
    icon: Share2,
  },
  {
    title: "Mobile-Friendly",
    description: "Access, share, and update call sheets on the go.",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    quote: "Smart Call Sheets saved me hours of prep time and kept my team on schedule.",
    author: "Sarah Johnson",
    role: "Film Director"
  },
  {
    quote: "The best tool for streamlining my production workflow. My crew loves it.",
    author: "Michael Chen",
    role: "Line Producer"
  }
];

const steps = [
  {
    title: "Input Details",
    description: "Enter your project name, cast, crew, and shooting schedule."
  },
  {
    title: "Generate Instantly",
    description: "Let AI create your call sheet in seconds."
  },
  {
    title: "Review & Customize",
    description: "Edit and adjust for your specific needs."
  },
  {
    title: "Share with Your Team",
    description: "Send out the finalized call sheet with one click."
  }
];

const faqs = [
  {
    question: "How does Smart Call Sheets save me time?",
    answer: "Our AI-powered system automates the creation of call sheets, reducing hours of manual work to just seconds."
  },
  {
    question: "Can I customize my call sheets?",
    answer: "Yes, you can fully customize templates and modify any generated call sheet to match your specific needs."
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Absolutely! Access and edit your call sheets on any device with our responsive mobile interface."
  }
];

export const CallSheetsLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-up">
            Effortless Call Sheets, Smarter Productions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary/80 max-w-3xl mx-auto">
            Say goodbye to manual work – create professional, customized call sheets in seconds with AI-powered precision.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90"
              onClick={() => navigate("/call-sheets")}
            >
              Generate Your First Call Sheet Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20"
            >
              <Play className="mr-2" /> Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Why Choose Smart Call Sheets?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-black/30 hover:bg-black/40 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-primary/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Trusted by Filmmakers Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-black/30 hover:bg-black/40 transition-all duration-300"
              >
                <p className="text-lg mb-4 text-primary/90 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-primary/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            How to Create a Smart Call Sheet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-secondary font-bold">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute h-0.5 bg-accent/30 w-full top-6 left-1/2 -z-10" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">{step.title}</h3>
                <p className="text-primary/70 text-center">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent text-secondary hover:bg-accent/90"
              onClick={() => navigate("/call-sheets")}
            >
              Start Your First Call Sheet Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Have Questions? We've Got Answers
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-black/30 hover:bg-black/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{faq.question}</h3>
                <p className="text-primary/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-primary/20"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};