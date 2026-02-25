const services = [
  {
    title: "Campaign Production",
    description: "Full AI-generated campaign visuals. Editorial quality, delivered in days, not months.",
  },
  {
    title: "Brand Identity",
    description: "Visual identity systems built with AI precision. From logo to full brand world.",
  },
  {
    title: "Content Creation",
    description: "Ongoing content pipelines for social, web, and print. Consistent, scalable, beautiful.",
  },
  {
    title: "AI Influencer Deployment",
    description: "Custom AI-generated brand ambassadors. Full creative control, zero logistics.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16 md:mb-24">
          SERVICES.
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div key={service.title} className="bg-secondary p-8 md:p-12">
              <h3 className="text-foreground text-xl md:text-2xl font-bold tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-accent text-sm tracking-widest uppercase hover:text-accent/80 transition-colors">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
