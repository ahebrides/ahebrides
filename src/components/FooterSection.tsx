import ahebridesLogo from "@/assets/ahebrides-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-secondary px-6 md:px-16 pt-16 pb-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-12">
          {/* Column 1 */}
          <div className="flex items-start gap-4">
            <img src={ahebridesLogo} alt="A. HEBRIDES logo" className="w-12 h-12" />
            <div>
              <p className="heading-display text-foreground text-xl mb-1">A. HEBRIDES.</p>
              <p className="text-muted-foreground text-sm font-light">
                Laurent, Creative Director
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-4">Contact</p>
            <a
              href="mailto:laurent@ahebrides.co.uk"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              laurent@ahebrides.co.uk
            </a>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-4">Follow</p>
            <div className="flex gap-5 items-center mb-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/art_tee_show"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* X */}
              <a
                href="https://x.com/artteeshow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <p className="text-muted-foreground text-sm font-light">
              Sister brand:{" "}
              <a
                href="https://artteeshow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                ARTTEESHOW.
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-xs font-light">
            © 2026 A. HEBRIDES. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs font-light">
            Built from the Outer Hebrides, Scotland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
