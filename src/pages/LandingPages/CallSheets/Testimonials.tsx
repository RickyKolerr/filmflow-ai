import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Smart Call Sheets saved me hours of prep time and kept my team on schedule.",
    author: "Sarah Johnson",
    role: "Film Director",
  },
  {
    quote: "The best tool for streamlining my production workflow. My crew loves it.",
    author: "Michael Chen",
    role: "Line Producer",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-navy/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Trusted by Filmmakers Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-navy/30 hover:bg-navy/40 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-lg mb-4 text-primary/90 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-primary/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};