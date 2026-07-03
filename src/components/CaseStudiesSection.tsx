import arttee1 from "@/assets/artteeshow-1.jpeg";
import arttee2 from "@/assets/artteeshow-2.png";
import arttee3 from "@/assets/artteeshow-3.png";

const CaseStudiesSection = () => {
  return (
    <section className="bg-background px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16 md:mb-24">
          THE WORK.
        </h2>

        {/* Case Study 001 */}
        <div className="mb-24">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Case Study 001
          </p>
          <h3 className="text-foreground text-2xl md:text-4xl font-bold tracking-tight mb-6">
            ARTTEESHOW.
          </h3>
          <p className="text-foreground/70 font-light text-lg max-w-2xl mb-10 leading-relaxed">
            Building a wearable art brand in the Outer Hebrides using AI to produce world-class visuals for a fraction of the cost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img src={arttee1} alt="ARTTEESHOW campaign — model in store" className="w-full aspect-[3/4] object-cover" />
            <img src={arttee2} alt="ARTTEESHOW campaign — baroque editorial" className="w-full aspect-[3/4] object-cover" />
            <img src={arttee3} alt="ARTTEESHOW campaign — flat lay" className="w-full aspect-[3/4] object-cover" />
          </div>

          <a href="/case-study/artteeshow" className="text-accent text-sm tracking-widest uppercase hover:text-accent/80 transition-colors">
            Full case study →
          </a>
        </div>

        {/* Case Study 002 Placeholder */}
        <div className="border-t border-border pt-12">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Case Study 002
          </p>
          <p className="text-foreground/30 text-2xl md:text-4xl font-bold tracking-tight">
            COMING SOON.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
