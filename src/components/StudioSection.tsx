import founderImg from "@/assets/founder.jpg";

const StudioSection = () => {
  return (
    <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16 md:mb-24">
          THE STUDIO.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img
            src={founderImg}
            alt="Laurent B. — Creative Director, A. HEBRIDES"
            className="w-full aspect-square object-cover"
          />
          <div>
            <div className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed space-y-6">
              <p>
                I spent 25 years in hospitality building other people's visions.
              </p>
              <p>
                Then I left. Moved to one of the most remote places in Scotland. Learned AI tools from scratch. And built a creative studio that produces world-class campaign work without leaving the island.
              </p>
              <p className="text-accent">
                Geography used to be a cage.<br />
                Now it's the story.
              </p>
            </div>
            <div className="mt-12 border-t border-border pt-8">
              <p className="text-foreground font-bold text-lg">Laurent B.</p>
              <p className="text-muted-foreground text-sm tracking-wide">
                Creative Director, A. HEBRIDES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
