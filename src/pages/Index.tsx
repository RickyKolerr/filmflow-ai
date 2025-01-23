import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FileManager } from "@/components/FileManager";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-8">
          <FileManager />
        </div>
        <Features />
        <HowItWorks />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Index;