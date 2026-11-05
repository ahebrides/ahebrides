import arttee1 from "@/assets/artteeshow-1.jpeg";
import arttee2 from "@/assets/artteeshow-2.jpg";
import arttee3 from "@/assets/artteeshow-3.jpg";
import dtdModel from "@/assets/dtd/model-tee.jpg";
import dtdHero from "@/assets/dtd/hero-poster.jpg";
import dtdFlatlay from "@/assets/dtd/product-flatlay.jpg";

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
            <img src={arttee1} alt="ARTTEESHOW. campaign, model in store" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={arttee2} alt="ARTTEESHOW. campaign, baroque editorial" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={arttee3} alt="ARTTEESHOW. campaign, flat lay" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>

          <a href="/case-study/artteeshow" className="text-accent text-sm tracking-widest uppercase hover:text-accent/80 transition-colors">
            Full case study →
          </a>
        </div>

        {/* Case Study 002 */}
        <div className="border-t border-border pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              Case Study 002
            </p>
            <span className="text-xs font-mono text-accent">
              artteeshow.com/pages/de-tha-dol ↗
            </span>
          </div>
          <h3 className="text-foreground text-2xl md:text-4xl font-bold tracking-tight mb-6">
            DÈ THA DOL?
          </h3>
          <p className="text-foreground/70 font-light text-lg max-w-2xl mb-10 leading-relaxed">
            From a T-shirt to a conversation. Turning ARTTEESHOW.'s best-selling design into a participatory cultural campaign across fashion, code and film.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img src={dtdModel} alt="Dè Tha Dol? model shot" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={dtdHero} alt="Dè Tha Dol? campaign hero" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={dtdFlatlay} alt="Dè Tha Dol? 260GSM remaster flatlay set in Harris" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>

          <a href="/case-study/de-tha-dol" className="text-accent text-sm tracking-widest uppercase hover:text-accent/80 transition-colors">
            Full case study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
