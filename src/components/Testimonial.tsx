import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-20 bg-navy/85">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 text-purple opacity-50" />
          <blockquote className="text-2xl font-medium text-white mb-6">
            "This tool has transformed how I manage productions. It saves me hours every week!"
          </blockquote>
          <cite className="text-gray-400 not-italic">
            – Sarah Johnson, Film Producer
          </cite>
        </div>
      </div>
    </section>
  );
};