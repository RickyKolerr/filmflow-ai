import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
};

export default Index;