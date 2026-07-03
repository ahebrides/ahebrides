import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFadeIn } from "@/hooks/useFadeIn";
import FooterSection from "@/components/FooterSection";
import arttee1 from "@/assets/artteeshow-1.jpeg";
import arttee2 from "@/assets/artteeshow-2.png";
import arttee3 from "@/assets/artteeshow-3.png";

const CaseStudyArtteeshow = () => {
  const containerRef = useFadeIn();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTA = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Back Link */}
      <div className="px-6 md:px-16 pt-8">
        <Link
          to="/"
          className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-2"
        >
          ← Back to Home
        </Link>
      </div>

      {/* ─── A. HERO SECTION ─── */}
      <section className="px-6 md:px-16 pt-16 pb-24 max-w-6xl mx-auto">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
          Case Study 001
        </p>
        <h1 className="heading-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6">
          ARTTEESHOW.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mb-16">
          Building a premium AI-native streetwear brand from the edge of the world.
        </p>
        <div className="w-full aspect-[16/9] bg-card border border-border flex items-center justify-center">
          <span className="text-muted-foreground/50 text-sm">
            Hero image — awaiting visual
          </span>
        </div>
      </section>

      {/* ─── B. THE CHALLENGE ─── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-12">
            THE CHALLENGE.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                Building a premium, credible streetwear brand from scratch. Solo. From
                a remote Scottish island. No studio, no team, no photography budget.
              </p>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                The entire creative engine? AI.
              </p>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                Not as a gimmick. Not as an experiment. As the sole means of
                production for a brand that needed to look, feel, and compete like it
                came out of a well-funded creative studio.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-8 flex items-center">
              <blockquote className="text-accent text-xl md:text-2xl italic font-light leading-relaxed">
                "Geography used to be a cage. Now it's the story."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      {/* ─── C. THE APPROACH ─── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
            THE APPROACH.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-3xl mb-6">
            This wasn't about generating images. It was about building a complete,
            cohesive, premium brand world with AI — consistent visual identity,
            campaigns, product visuals, and content, all held together by disciplined
            creative direction.
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-3xl mb-20">
            The skill isn't in the tools. It's in the eye. The taste. The creative
            direction that ensures every output serves the brand, not the technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="space-y-4">
              <span className="heading-display text-5xl md:text-6xl text-accent">01</span>
              <h3 className="heading-display text-lg text-foreground">
                CREATIVE DIRECTION FIRST
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                AI is the instrument. The vision, taste, and brand discipline come
                from years of experience.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="space-y-4">
              <span className="heading-display text-5xl md:text-6xl text-accent">02</span>
              <h3 className="heading-display text-lg text-foreground">
                CONSISTENCY OVER NOVELTY
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Every visual, every campaign, every product shot exists within a
                coherent brand world.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="space-y-4">
              <span className="heading-display text-5xl md:text-6xl text-accent">03</span>
              <h3 className="heading-display text-lg text-foreground">
                OUTPUT THAT COMPETES
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                The benchmark isn't "good for AI." It's "good enough to sit next to
                any traditional studio's work."
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── D. THE WORK ─── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-16">
            THE WORK.
          </h2>

          <div className="space-y-4">
            {/* Image 1: full-width */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              <img
                src={arttee1}
                alt="ARTTEESHOW campaign visual"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Images 2 & 3: side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={arttee2}
                  alt="ARTTEESHOW product visual"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={arttee3}
                  alt="ARTTEESHOW brand visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Placeholder 1: full-width */}
            <div
              className="w-full aspect-[16/9] bg-card border border-border flex items-center justify-center"
              data-placeholder="true"
            >
              <span className="text-muted-foreground/30 text-sm">
                Visual — awaiting asset
              </span>
            </div>

            {/* Placeholders 2 & 3: side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] bg-card border border-border flex items-center justify-center"
                data-placeholder="true"
              >
                <span className="text-muted-foreground/30 text-sm">
                  Visual — awaiting asset
                </span>
              </div>
              <div
                className="aspect-[3/4] bg-card border border-border flex items-center justify-center"
                data-placeholder="true"
              >
                <span className="text-muted-foreground/30 text-sm">
                  Visual — awaiting asset
                </span>
              </div>
            </div>

            {/* Placeholder 4: full-width */}
            <div
              className="w-full aspect-[16/9] bg-card border border-border flex items-center justify-center"
              data-placeholder="true"
            >
              <span className="text-muted-foreground/30 text-sm">
                Visual — awaiting asset
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ─── E. THE PROOF ─── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-16">
            THE PROOF.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card border border-border p-8 space-y-4">
              <div className="w-10 h-10 border border-accent flex items-center justify-center mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Industry Recognition
              </p>
              <p className="text-foreground text-sm font-light leading-relaxed">
                Featured on leading fashion-tech and streetwear industry platforms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border p-8 space-y-4">
              <div className="w-10 h-10 border border-accent flex items-center justify-center mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Partner Validation
              </p>
              <p className="text-foreground text-sm font-light leading-relaxed">
                Campaign visuals reshared and endorsed by manufacturing and
                supply-chain partners.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border p-8 space-y-4">
              <div className="w-10 h-10 border border-accent flex items-center justify-center mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Brand Credibility
              </p>
              <p className="text-foreground text-sm font-light leading-relaxed">
                A complete brand world — identity, e-commerce, campaigns, social —
                perceived as a traditional studio production.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ─── F. CLIENT TAKEAWAY ─── */}
      <div className="fade-in-section">
        <section className="bg-secondary w-full px-6 md:px-16 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
              WHAT THIS MEANS FOR YOU.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-3xl mb-12">
              If we can build and run a complete premium brand world — solo, from a
              Scottish island, with AI — imagine what we can build for you.
            </p>
            <ul className="space-y-6 max-w-3xl">
              <li className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-foreground text-base font-light">
                  Brand identity that looks and feels premium — built in days, not
                  months.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-foreground text-base font-light">
                  Campaign visuals at editorial quality — at a fraction of the
                  traditional cost.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-foreground text-base font-light">
                  A cohesive visual world across every touchpoint — website, social,
                  print.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-foreground text-base font-light">
                  A creative partner who understands both the craft and the
                  technology.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* ─── G. CTA SECTION ─── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-32 max-w-6xl mx-auto text-center">
          <h2 className="heading-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-6">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light mb-12 max-w-2xl mx-auto">
            Ready to see what AI-powered creative direction can do for your brand?
          </p>
          <button
            onClick={handleCTA}
            className="bg-foreground text-background heading-display text-sm tracking-[0.15em] px-10 py-4 hover:bg-accent hover:text-background transition-colors duration-300 mb-8"
          >
            START A PROJECT
          </button>
          <div>
            <a
              href="mailto:laurent@ahebrides.co.uk"
              className="text-muted-foreground text-sm hover:text-accent transition-colors"
            >
              laurent@ahebrides.co.uk
            </a>
          </div>
        </section>
      </div>

      {/* ─── H. FOOTER ─── */}
      <FooterSection />
    </div>
  );
};

export default CaseStudyArtteeshow;
