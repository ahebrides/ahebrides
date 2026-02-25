const ContradictionSection = () => {
  return (
    <section className="bg-background px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16 md:mb-24">
          THE CONTRADICTION.
        </h2>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-muted-foreground text-sm tracking-widest mb-8 uppercase">The old way</p>
            <div className="space-y-3 text-foreground/70 text-lg md:text-xl font-light leading-relaxed">
              <p>A luxury campaign shoot.</p>
              <p className="text-foreground font-medium">£10,000+.</p>
              <p>Location permits. Model fees.</p>
              <p>Crew. Equipment. Travel.</p>
              <p>Post-production. Waiting.</p>
              <p className="text-foreground/50 italic">Compromise.</p>
            </div>
          </div>
          <div>
            <p className="text-accent text-sm tracking-widest mb-8 uppercase">The A. Hebrides way</p>
            <div className="space-y-3 text-foreground/70 text-lg md:text-xl font-light leading-relaxed">
              <p>A luxury campaign shoot.</p>
              <p className="text-foreground font-medium">From £500.</p>
              <p>AI generation. Zero crew.</p>
              <p>No permits. No flights.</p>
              <p>Delivered in days.</p>
              <p className="text-accent font-medium">No compromise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContradictionSection;
