import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFadeIn } from "@/hooks/useFadeIn";
import FooterSection from "@/components/FooterSection";

import atsHero from "@/assets/ats-hero.jpg";
import atsOsaka from "@/assets/ats-osaka.png";
import atsCastle from "@/assets/ats-castle.jpg";
import atsWhiteTee from "@/assets/ats-white-tee.jpg";
import atsRain from "@/assets/ats-rain.jpg";

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
    <div ref={containerRef} className="bg-background">

      {/* Back link */}
      <div className="px-6 md:px-16 pt-8">
        <Link
          to="/"
          className="text-muted-foreground text-sm tracking-widest uppercase hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pt-12 pb-0">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
          Case Study 001
        </p>
        <h1 className="heading-display text-foreground text-5xl md:text-8xl lg:text-9xl leading-none mb-8">
          ARTTEESHOW.
        </h1>
        <p className="text-foreground/60 font-light text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Building original worlds through fashion, film and AI. From a remote Scottish island.
        </p>
      </section>

      {/* Hero image — full bleed */}
      <div className="w-full">
        <img
          src={atsHero}
          alt="ARTTEESHOW — Heavy Duty campaign"
          className="w-full aspect-[16/9] object-cover object-center"
        />
      </div>

      {/* ── THE BRAND ─────────────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-8">
                THE BRAND.
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed mb-6">
                ARTTEESHOW isn't a t-shirt shop.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                It's a story-first creative studio — one that happens to make clothing people can wear. Every collection begins with a question. Every design belongs to a world. Every campaign reveals another layer of that world.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                Built entirely solo, from the Outer Hebrides, using AI as the production engine — ARTTEESHOW proves that the quality of the output has nothing to do with the size of the team or the budget behind it.
              </p>
            </div>
            <div className="border-l border-border pl-12">
              <p className="text-accent text-2xl md:text-3xl font-light italic leading-relaxed">
                "AI is the production method.<br />Storytelling is the product."
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── CREATIVE MANIFESTO ────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-12">
                CREATIVE<br />MANIFESTO.
              </h2>
              <div className="space-y-5 text-foreground/70 font-light leading-relaxed">
                <p>ARTTEESHOW doesn't start with products. It starts with people.</p>
                <p>Every collection begins with a question.<br />Every design belongs to a world.<br />Every film reveals another part of that world.</p>
                <div className="border-l-2 border-accent pl-6 my-8 space-y-3">
                  <p>We believe ordinary people carry extraordinary weight.</p>
                  <p>We believe the smallest gestures often tell the biggest stories.</p>
                  <p>We believe clothing can become a symbol long before it becomes a product.</p>
                </div>
                <p className="text-foreground font-medium text-lg">
                  We don't make advertisements.<br />We make stories people can wear.
                </p>
              </div>
            </div>
            {/* Rain alley — cinematic, perfectly matches the manifesto's mood */}
            <div>
              <img
                src={atsRain}
                alt="ARTTEESHOW — stories people can wear"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── THE WORK ──────────────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-4">
              THE WORK.
            </h2>
            <p className="text-muted-foreground font-light mb-16 max-w-xl">
              Across collections, aesthetics and moods — a consistent world built with disciplined creative direction.
            </p>

            {/* OSAKA SIX — full width editorial */}
            <div className="mb-4">
              <img
                src={atsOsaka}
                alt="ARTTEESHOW — Osaka Six: 006 Remains campaign"
                className="w-full aspect-[3/4] md:aspect-[16/9] object-cover object-top"
              />
            </div>

            {/* Castle + White tee — side by side portrait */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img
                src={atsCastle}
                alt="ARTTEESHOW — campaign shoot, Scotland"
                className="w-full aspect-[3/4] object-cover"
              />
              <img
                src={atsWhiteTee}
                alt="ARTTEESHOW — brand identity"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── BEYOND CLOTHING ───────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-12">
              BEYOND<br />CLOTHING.
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  ARTTEESHOW is evolving into a story-first creative studio.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  Artist collaborations remain at the heart of the brand, giving each collection its own visual language and mythology.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Alongside those collaborations, original films and series explore the same emotional themes through new characters and new worlds. Each project stands on its own. Together, they form the ARTTEESHOW universe.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-px bg-border">
                {[
                  { label: "Artist Collaborations", desc: "Each collection rooted in a creative partnership — giving every drop its own visual identity and mythology." },
                  { label: "Original Films & Series", desc: "Narrative work that expands the world beyond the clothing — new characters, new stories, same emotional core." },
                  { label: "The Universe", desc: "Every project is standalone. Every project is also part of something larger." },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary p-8">
                    <p className="text-accent text-xs tracking-widest uppercase mb-3">{item.label}</p>
                    <p className="text-foreground/70 font-light leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── THE PROOF ─────────────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16">
              THE PROOF.
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                {
                  label: "Industry Recognition",
                  desc: "Featured on leading fashion-tech and streetwear industry platforms — without a PR budget or agency behind it.",
                },
                {
                  label: "Partner Validation",
                  desc: "Campaign visuals reshared and endorsed by manufacturing and supply-chain partners as benchmark creative.",
                },
                {
                  label: "Brand Credibility",
                  desc: "A complete brand world — identity, e-commerce, campaigns, social — perceived as traditional studio production.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-background p-8 md:p-12">
                  <p className="text-accent text-xs tracking-widest uppercase mb-4">{item.label}</p>
                  <p className="text-foreground/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── WHAT THIS MEANS FOR YOU ───────────────────────────── */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-8">
              WHAT THIS<br />MEANS FOR YOU.
            </h2>
            <p className="text-foreground/70 font-light text-lg leading-relaxed max-w-2xl mb-16">
              If we can build and run a complete premium brand world — solo, from a Scottish island — imagine what we can build for you, with a real brief and a real budget.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Brand identity that looks and feels premium — built in days, not months.",
                "Campaign visuals at editorial quality — at a fraction of the traditional cost.",
                "A cohesive visual world across every touchpoint — website, social, print.",
                "A creative partner who understands both the craft and the technology.",
              ].map((benefit) => (
                <div key={benefit} className="flex gap-4 items-start">
                  <span className="text-accent mt-1 shrink-0">→</span>
                  <p className="text-foreground/70 font-light leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32 text-center">
          <h2 className="heading-display text-foreground text-4xl md:text-7xl mb-6">
            LET'S BUILD<br />SOMETHING.
          </h2>
          <p className="text-muted-foreground font-light mb-12 max-w-xl mx-auto">
            Ready to see what story-first creative direction can do for your brand?
          </p>
          <button
            onClick={handleCTA}
            className="bg-primary text-primary-foreground px-12 py-5 text-sm tracking-widest font-medium hover:bg-primary/90 transition-colors mb-8 block mx-auto"
          >
            START A PROJECT
          </button>
          <a
            href="mailto:laurent@ahebrides.co.uk"
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            laurent@ahebrides.co.uk
          </a>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default CaseStudyArtteeshow;
