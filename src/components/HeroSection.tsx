import luskentyreImg from "@/assets/luskentyre.jpeg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={luskentyreImg}
        alt="Luskentyre Beach, Outer Hebrides"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-16 md:pb-24">
        <h1 className="heading-display text-foreground text-5xl md:text-8xl lg:text-9xl leading-none mb-6">
          A. HEBRIDES.
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl max-w-xl mb-10 font-light">
          AI-Powered Creative Studio. Built from the edge of the world.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest font-medium w-fit hover:bg-primary/90 transition-colors"
        >
          START A PROJECT
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
