import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  features: Feature[];
}

export const FeatureGrid = ({ title, features }: FeatureGridProps) => {
  return (
    <section className="py-24 bg-navy/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-navy/30 hover:bg-navy/40 transition-all duration-300 group animate-fade-up border border-[#D6BCFA]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};