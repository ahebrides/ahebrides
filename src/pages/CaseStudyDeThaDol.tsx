import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFadeIn } from "@/hooks/useFadeIn";
import FooterSection from "@/components/FooterSection";

import heroPoster from "@/assets/dtd/hero-poster.jpg";
import productFlatlay from "@/assets/dtd/product-flatlay.jpg";
import modelTee from "@/assets/dtd/model-tee.jpg";
import modelReel from "@/assets/dtd/model-reel.jpg";
import plateWall from "@/assets/dtd/plate-wall.jpg";
import plateRoad from "@/assets/dtd/plate-road.jpg";
import hangTag from "@/assets/dtd/hang-tag.png";
import protoAntigravity from "@/assets/dtd/proto-antigravity.jpg";
import protoIteration from "@/assets/dtd/proto-iteration.jpg";
import remasterLive from "@/assets/dtd/remaster-live.jpg";
import motionWorkflow from "@/assets/dtd/motion-workflow.jpg";
import motionPassTypography from "@/assets/dtd/motion-pass-typography.jpg";
import motionPassScale from "@/assets/dtd/motion-pass-scale.jpg";

const CaseStudyDeThaDol = () => {
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
    <div ref={containerRef} className="bg-background text-foreground">

      {/* TOP NAVIGATION BAR */}
      <div className="px-6 md:px-16 pt-8 pb-4 flex flex-wrap justify-between items-center gap-4 border-b border-border/40">
        <Link
          to="/"
          className="text-muted-foreground text-xs tracking-[0.25em] uppercase hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/case-study/artteeshow"
            className="text-muted-foreground text-xs tracking-[0.25em] uppercase hover:text-foreground transition-colors"
          >
            Case Study 001: ARTTEESHOW. →
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="px-6 md:px-16 pt-12 md:pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
              Case Study 002 · Brand Experience & Campaign Architecture
            </p>
            <a
              href="https://artteeshow.com/pages/de-tha-dol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
            >
              <span>artteeshow.com/pages/de-tha-dol</span>
              <span>↗</span>
            </a>
          </div>

          <h1 className="heading-display text-foreground text-5xl md:text-8xl lg:text-9xl leading-none mb-6">
            DÈ THA DOL?
          </h1>
          <p className="text-accent text-xl md:text-3xl font-light tracking-tight mb-8">
            From a T-Shirt to a Conversation.
          </p>
          <p className="text-foreground/70 font-light text-lg md:text-xl max-w-3xl leading-relaxed">
            How ARTTEESHOW.'s best-selling design was expanded into a participatory cultural campaign.
            Directed through three AI development experiments, four motion passes, and an ongoing community documentary.
          </p>
        </div>
      </section>

      {/* HERO VISUAL (FULL BLEED) */}
      <div className="w-full border-y border-border">
        <img
          src={heroPoster}
          alt="Dè Tha Dol? Campaign Hero"
          className="w-full aspect-[16/9] object-cover object-center"
        />
      </div>

      {/* 1. THE ORIGIN */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                01 · The Origin
              </p>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-8">
                A PHRASE, NOT A SLOGAN.
              </h2>
              <p className="text-foreground/80 font-light text-lg leading-relaxed mb-6">
                In Scottish Gaelic, <span className="text-foreground font-medium">"Dè Tha Dol?"</span> translates literally to "What's going on?" or "What's happening?"
              </p>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Across the Outer Hebrides, it carries much deeper weight. It is not quick casual talk. It is how islanders ask after one another, greeting neighbours and checking how someone actually is.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Originally released as an early graphic tee in the ARTTEESHOW. archive, the piece resonated immediately and was confirmed by the founder as the label's best-selling design.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                Rather than treating it as static merchandise, the brand initiated a complete remaster: moving the design to custom 260GSM heavyweight cotton via Tapstitch, paired with bespoke woven neck labels, archival packaging, and collector hang tags.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={modelTee}
                  alt="Original Dè Tha Dol? tee model shot"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <img
                  src={productFlatlay}
                  alt="Dè Tha Dol? 260GSM remaster flatlay set in Harris"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="border-l border-border pl-8 py-2">
                <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">
                  Archival Specification
                </p>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  260GSM heavyweight combed cotton · Custom collector hang tag · 100% live HTML accent typography · Stornoway archive
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. THE CHALLENGE */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
              02 · The Challenge
            </p>
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-12">
              TURNING A PRODUCT INTO<br />A LIVING EXPERIENCE.
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
                <p>
                  Most fashion labels promote graphic tees through standard digital marketing: synthetic ad campaigns, influencer gifting, and automated discount funnels.
                </p>
                <p>
                  For ARTTEESHOW., a phrase that belongs to Gaelic culture demanded a completely different creative posture. The shirt travels further than a plaque, but the community comes before the garment.
                </p>
                <div className="border-l-2 border-accent pl-6 my-8 space-y-4">
                  <p className="text-foreground text-lg font-normal">
                    How do you turn a piece of clothing into a participatory dialogue?
                  </p>
                  <p className="text-sm">
                    The brief: Invite Gaelic speakers, learners, and anyone connected to the islands to record a brief video clip saying "Dè Tha Dol?" and sharing what the greeting means to them.
                  </p>
                </div>
                <p>
                  The mechanics were strictly egalitarian. No follower counts, no algorithm gaming, and no entry fees. In addition, the campaign pledged £3 per Dè Tha Dol? tee to Seachdain na Gàidhlig (World Gaelic Week), with the final donation to be transferred after the limited edition run concludes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <img
                  src={plateWall}
                  alt="Dè Tha Dol? Hebridean architectural plate"
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-6 border border-border">
                    <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">Charitable Commitment</p>
                    <p className="text-foreground/80 text-sm font-light">
                      £3 pledged per tee to Seachdain na Gàidhlig. Final transfer scheduled upon conclusion of the limited edition run.
                    </p>
                  </div>
                  <div className="bg-background p-6 border border-border">
                    <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">Participation Rule</p>
                    <p className="text-foreground/80 text-sm font-light">
                      Open to all speakers and learners. No social metrics or reach thresholds evaluated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. THE EXPERIMENTS */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                03 · The Experiments
              </p>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-6">
                THREE AI BUILDS.<br />ONE CREATIVE DIRECTION.
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                To build the campaign landing page, the founder tested three separate AI-assisted development environments against the exact same brief.
                This was not an automated benchmark. It was an exercise in creative direction, critical critique, and human-led engineering.
              </p>
            </div>

            {/* THREE BUILDS COMPARISON GRID */}
            <div className="grid md:grid-cols-3 gap-px bg-border mb-16">
              <div className="bg-background p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-accent text-xs font-mono uppercase tracking-widest">Candidate 01</p>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 text-accent">Strong</span>
                  </div>
                  <h3 className="heading-display text-xl md:text-2xl mb-4">CLAUDE CODE</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-6">Anthropic Claude 3.5 Sonnet</p>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6">
                    Delivered exceptional front-end architecture: clean ES modules, distinct CSS token separation, zero framework dependencies, and rigorous typography restraint.
                  </p>
                </div>
                <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                  Key asset: Modular dethadol.js architecture
                </div>
              </div>

              <div className="bg-background p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-accent text-xs font-mono uppercase tracking-widest">Candidate 02</p>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 text-accent">Strong</span>
                  </div>
                  <h3 className="heading-display text-xl md:text-2xl mb-4">GOOGLE ANTIGRAVITY</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-6">Google Gemini 2.0</p>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6">
                    Demonstrated the deepest Shopify system understanding: production-ready Online Store 2.0 JSON templates, customizer schema blocks, native form processing, and accessibility compliance.
                  </p>
                </div>
                <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                  Key asset: 7 Liquid sections & Customizer schema
                </div>
              </div>

              <div className="bg-background p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">Candidate 03</p>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground">Weaker</span>
                  </div>
                  <h3 className="heading-display text-xl md:text-2xl mb-4">LOVABLE</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-6">Full-Stack Prompt Builder</p>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6">
                    Rapid visual scaffolding, but judged noticeably weaker in bespoke visual design, hierarchy, and typographic nuance. Lacked the restraint needed for a gallery-grade art label.
                  </p>
                </div>
                <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                  Key asset: Rapid layout exploration
                </div>
              </div>
            </div>

            {/* REAL PROTOTYPE SCREENSHOTS */}
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Verified Prototype Iterations · Real Build Captures
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <img
                    src={protoAntigravity}
                    alt="Antigravity Liquid prototype early build"
                    className="w-full aspect-[4/3] object-cover border border-border"
                    loading="lazy"
                  />
                  <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                    Build Pass 1: Antigravity native Liquid schema and video scrim prototype
                  </p>
                </div>
                <div>
                  <img
                    src={protoIteration}
                    alt="Refined prototype iteration incorporating Claude structure"
                    className="w-full aspect-[4/3] object-cover border border-border"
                    loading="lazy"
                  />
                  <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                    Build Pass 2: Merged revision incorporating Claude modular styling with Shopify Liquid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. THE FINAL EXPERIENCE */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                  04 · The Final Experience
                </p>
                <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-8">
                  MERGED SHOPIFY<br />PRODUCTION BUILD.
                </h2>
                <p className="text-foreground/80 font-light text-lg leading-relaxed mb-6">
                  The final production release on the live Shopify theme was not a default copy of any single tool. It was a synthesis directed by the founder.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  It united the architectural discipline of Claude Code with the robust Liquid schema engineering of Google Antigravity, while enforcing strict editorial standards across the entire customer journey.
                </p>
              </div>

              {/* TECHNICAL SPECIFICATIONS ACCORDION / GRID */}
              <div className="space-y-4">
                <div className="bg-background p-6 border border-border">
                  <p className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                    Rule 01 · 100% Live HTML Typography
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    The title and accented Gaelic character <span className="text-foreground font-semibold">è</span> are strictly rendered in live HTML text over video scrims, never baked into raster graphics or AI video which routinely distort accents.
                  </p>
                </div>
                <div className="bg-background p-6 border border-border">
                  <p className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                    Rule 02 · Zero Third-Party App Bloat
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    Submissions are handled entirely through Shopify's native contact form infrastructure, capturing direct cloud video links (Google Drive, WeTransfer, Instagram, iCloud) with zero monthly app fees.
                  </p>
                </div>
                <div className="bg-background p-6 border border-border">
                  <p className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                    Rule 03 · Accessibility & Reduced Motion
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    Full compliance with <code className="text-xs text-foreground font-mono">prefers-reduced-motion</code>. Autoplay video is suppressed and replaced with a static poster still for users requiring reduced motion.
                  </p>
                </div>
                <div className="bg-background p-6 border border-border">
                  <p className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                    Rule 04 · Editorial Prose Standards
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    Strict prohibition of em dashes and generic marketing tropes across all template schemas, customer emails, and live storefront copy.
                  </p>
                </div>
              </div>
            </div>

            {/* LIVE STORE IMAGE */}
            <div className="border border-border">
              <img
                src={remasterLive}
                alt="Dè Tha Dol? live Shopify store release banner"
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
              <div className="bg-background p-6 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-muted-foreground border-t border-border">
                <span>Production Storefront · Live Horizon Theme · ARTTEESHOW.</span>
                <span>Tapstitch 260GSM Remaster Announcement</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5. THE MOTION CAMPAIGN */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                05 · The Motion Campaign
              </p>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-6">
                FOUR MEASURED PASSES.<br />THE CRAFT OF THE BRIEF.
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                The campaign motion piece was engineered in motion.so across four documented passes on 18 September 2026, culminating in a 24-second vertical render.
                It stands as a testament to the fact that directing AI motion tools requires the exact same rigour as traditional post-production.
              </p>
            </div>

            {/* MOTION ITERATION PROCESS CARDS */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <img
                  src={motionWorkflow}
                  alt="Motion.so GPT Astra design workflow interface"
                  className="w-full aspect-[4/3] object-cover border border-border"
                  loading="lazy"
                />
                <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                  18 September 2026: Prompting motion.so through structured GPT design blocks
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6 space-y-3">
                  <p className="text-foreground text-xl font-medium">
                    The Lesson of the Brief
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    During early passes, an unexpected jump in typography scale and a clipped transition occurred.
                    Analysis revealed that the issue was not a model glitch, but a numerical ambiguity in the director's own prompt specifications.
                  </p>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    By recalculating frame timing, correcting pixel coordinates, and explicitly defining clear-space margins, Pass 4 delivered seamless continuity.
                    The solution was not changing tools, but elevating the precision of the human brief.
                  </p>
                </div>

                <div className="bg-secondary p-6 border border-border space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Documented Passes</span>
                    <span className="text-foreground">4 Iterations (18 Sep 2026)</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Pass 4 Render Duration</span>
                    <span className="text-foreground">24.0 Seconds</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Key Adjustments</span>
                    <span className="text-foreground">Type scale · Audio levels · Logo clear-space</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Director Discipline</span>
                    <span className="text-foreground">Human prompt correction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOTION PASS STILLS */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <img
                  src={motionPassTypography}
                  alt="Motion Pass typography alignment"
                  className="w-full aspect-[16/10] object-cover border border-border"
                  loading="lazy"
                />
                <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                  Pass 3 analysis: Typography tracking and Scottish Gaelic accent verification
                </p>
              </div>
              <div>
                <img
                  src={motionPassScale}
                  alt="Motion Pass scale and logo placement"
                  className="w-full aspect-[16/10] object-cover border border-border"
                  loading="lazy"
                />
                <p className="text-xs font-mono text-muted-foreground/70 mt-2">
                  Pass 4 final check: Frame-by-frame proportion and safe margin alignment
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. THE FILM (WORK IN PROGRESS) */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                06 · The Film
              </p>
              <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-6">
                COMMUNITY DOCUMENTARY.<br />PRODUCTION IN PROGRESS.
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                The Dè Tha Dol? community film is currently in active production.
                Conceived as a 34-second vertical documentary (9:16), it weaves together genuine contributor voice recordings with authentic island landscapes and AI-created characters.
              </p>
            </div>

            {/* FILM PRODUCTION PACK & TRANSPARENCY NOTICE */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
                <div className="border-l-2 border-accent pl-6 py-1">
                  <p className="text-foreground text-sm font-medium uppercase tracking-wider mb-1">
                    Transparent Creative Disclosure
                  </p>
                  <p className="text-xs leading-relaxed">
                    Authentic contributors provide their genuine voices and personal reflections. Fictional narrative characters (such as the young man at Stornoway harbour and the older woman at the window) are AI-created to bridge dialogue, clearly disclosed as synthetic.
                  </p>
                </div>
                <p>
                  The timeline follows a disciplined six-scene progression: sweeping over Outer Hebridean moorland, revealing Stornoway Harbour from the Lews Castle grounds, transitioning through the founder's greeting, into community submissions, and resolving on the physical tee.
                </p>
                <p>
                  No loud trailer narration. No exaggerated Celtic caricature. The piece trusts real Scottish daylight, quiet wind ambience, and authentic island voices.
                </p>
              </div>

              {/* FILM CONTAINER RESERVED FOR FINAL EMBED */}
              <div className="bg-background border border-border p-8 flex flex-col justify-between aspect-video md:aspect-[16/10]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent">Production Reel</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 text-accent">In Progress</span>
                  </div>
                  <h3 className="heading-display text-2xl mb-3">DÈ THA DOL?</h3>
                  <p className="text-xs font-mono text-muted-foreground">34 Seconds · 9:16 Timeline · Stornoway, Isle of Lewis</p>
                </div>

                <div className="border border-dashed border-border p-6 text-center my-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Film Embed Slot
                  </p>
                  <p className="text-xs text-foreground/50 font-light">
                    This section will host the finished vertical documentary upon official release.
                  </p>
                </div>

                <p className="text-[11px] font-mono text-muted-foreground/60">
                  Status: Scene assembly & contributor audio mastering
                </p>
              </div>
            </div>

            {/* PRODUCTION PACK SHOT REFERENCE */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={plateRoad}
                alt="Single-track Hebridean moorland road scene reference"
                className="w-full aspect-[16/10] object-cover border border-border"
                loading="lazy"
              />
              <img
                src={modelReel}
                alt="Vertical portrait shot composition reference"
                className="w-full aspect-[16/10] object-cover border border-border"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 7. THE OUTCOME */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
              07 · The Outcome
            </p>
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16">
              MEASURED DELIVERABLES.<br />VERIFIED IMPACT.
            </h2>

            <div className="grid md:grid-cols-3 gap-px bg-border mb-16">
              <div className="bg-background p-8 md:p-12">
                <p className="text-accent text-xs font-mono uppercase tracking-widest mb-4">
                  Commercial Validation
                </p>
                <h3 className="text-foreground text-xl font-bold mb-3">Best-Selling Design</h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  Confirmed by the founder as ARTTEESHOW.'s top-selling garment, demonstrating that genuine cultural storytelling outperforms generic apparel merchandising.
                </p>
              </div>

              <div className="bg-background p-8 md:p-12">
                <p className="text-accent text-xs font-mono uppercase tracking-widest mb-4">
                  Cultural Purpose
                </p>
                <h3 className="text-foreground text-xl font-bold mb-3">Charitable Pledge</h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  A pledged £3 per tee committed to Seachdain na Gàidhlig, turning customer purchases into direct cultural support upon limited edition completion.
                </p>
              </div>

              <div className="bg-background p-8 md:p-12">
                <p className="text-accent text-xs font-mono uppercase tracking-widest mb-4">
                  Engineering Agility
                </p>
                <h3 className="text-foreground text-xl font-bold mb-3">Multi-Agent Workflow</h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  Production-grade Shopify Liquid deployment, customizer integration, and motion design produced by a solo creative director without agency overhead.
                </p>
              </div>
            </div>

            {/* HANG TAG ARTIFACT */}
            <div className="bg-secondary p-8 md:p-12 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">Physical Artifact</p>
                <h3 className="heading-display text-2xl text-foreground mb-3">THE COLLECTOR HANG TAG</h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  Every 260GSM Dè Tha Dol? garment ships with a bespoke archival card explaining the Hebridean greeting, its pronunciation, and its role in island heritage.
                </p>
              </div>
              <img
                src={hangTag}
                alt="Dè Tha Dol? collector hang tag artwork"
                className="w-48 h-auto object-contain shrink-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 8. THE STUDIO */}
      <div className="fade-in-section">
        <section className="bg-secondary px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
              08 · The Studio
            </p>
            <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-8">
              WHAT THIS DEMONSTRATES<br />ABOUT A.HEBRIDES.
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <p className="text-foreground/80 font-light text-lg leading-relaxed mb-6">
                  This project was never about an AI model autonomously building a brand campaign.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  It was about a founder using AI-assisted coding and creative generation tools, evaluating their flaws with an expert eye, making critical architectural choices, and delivering a coherent finished experience.
                </p>
                <div className="border-l-2 border-accent pl-6 py-2">
                  <p className="text-foreground text-lg font-medium leading-snug">
                    "The tools generated options.<br />The creative direction turned those options into a finished experience."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px bg-border">
                {[
                  {
                    title: "Creative Direction First",
                    body: "AI models generate unlimited variations. Knowing which candidate has real taste, and which is generic, is the human craft."
                  },
                  {
                    title: "Full-Stack Implementation",
                    body: "From Liquid schemas and responsive CSS to motion design and shooting scripts, managed as one unified vision."
                  },
                  {
                    title: "Cultural Authenticity",
                    body: "Technology in service of real heritage, real geography, and real people, with zero synthetic posturing."
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-background p-6">
                    <p className="text-accent text-xs font-mono uppercase tracking-widest mb-2">{item.title}</p>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CALL TO ACTION */}
      <div className="fade-in-section">
        <section className="px-6 md:px-16 py-24 md:py-32 text-center">
          <h2 className="heading-display text-foreground text-4xl md:text-7xl mb-6">
            LET'S BUILD<br />SOMETHING.
          </h2>
          <p className="text-muted-foreground font-light mb-12 max-w-xl mx-auto">
            Ready to turn your brand vision into an editorial, high-performance digital reality?
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

export default CaseStudyDeThaDol;
