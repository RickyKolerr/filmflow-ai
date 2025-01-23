import { Film, Settings, Share2, Smartphone, Star } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Instant Generation",
    description: "AI automatically fills in cast, crew, schedules, and locations.",
  },
  {
    icon: Settings,
    title: "Customizable Templates",
    description: "Tailor your call sheets to fit your production needs.",
  },
  {
    icon: Share2,
    title: "Seamless Integration",
    description: "Import data from tools you already use, like Google Sheets or Excel.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Access, share, and update call sheets on the go.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-navy/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Why Choose Smart Call Sheets?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-navy/30 hover:bg-navy/40 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-primary/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};