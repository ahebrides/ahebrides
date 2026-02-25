const FooterSection = () => {
  return (
    <footer className="bg-secondary px-6 md:px-16 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="heading-display text-foreground text-xl mb-2">A. HEBRIDES.</p>
            <p className="text-muted-foreground text-sm font-light">
              Laurent, Creative Director
            </p>
          </div>
          <div>
            <a
              href="mailto:laurent@ahebrides.co.uk"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              laurent@ahebrides.co.uk
            </a>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">X</a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
          <div>
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
      </div>
    </footer>
  );
};

export default FooterSection;
