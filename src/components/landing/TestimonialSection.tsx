import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const TestimonialSection = ({ title, subtitle, testimonials }: TestimonialSectionProps) => {
  return (
    <section className="py-24 bg-navy/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          {title} <span className="text-[#9b87f5]">{subtitle}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-navy/30 hover:bg-navy/40 transition-all duration-300 animate-fade-up border border-[#D6BCFA]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#9b87f5] fill-[#9b87f5]"
                  />
                ))}
              </div>
              <p className="text-lg mb-6 text-gray-300 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-[#9b87f5]">{testimonial.role}</p>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};