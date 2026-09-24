import { BOOKS, AMAZON_LINK, WEBSITE_LINK } from "@/lib/books";

export default function SiteFooter() {
  const totalWords = BOOKS.reduce((acc, b) => acc + parseInt(b.specs.words.replace(/,/g, "")), 0);
  const totalPages = BOOKS.reduce((acc, b) => acc + b.specs.pages, 0);
  const totalFrameworks = BOOKS.reduce((acc, b) => acc + b.specs.frameworks, 0);

  return (
    <footer className="relative border-t border-gold/15 bg-obsidian pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 border border-gold/60 rotate-45" />
              <span className="font-display text-xl italic text-foreground">Reverena Press</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Stephen Nguyen | Digital Product Hub & Systems Automation. Engineering the architecture of sovereignty — one automated asset at a time.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/60">
              Core Imprint · Reverena Press
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">Technical Specs</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Modules</dt><dd className="font-mono text-foreground">{BOOKS.length}</dd>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Total Pages</dt><dd className="font-mono text-foreground">{totalPages.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Total Words</dt><dd className="font-mono text-foreground">{totalWords.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <dt className="text-muted-foreground">Frameworks</dt><dd className="font-mono text-foreground">{totalFrameworks}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">Access Points</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold">Amazon Author Page</a></li>
              <li><a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold">ShopReverena.com</a></li>
              <li><a href="#repository" className="text-muted-foreground transition-colors hover:text-gold">Blueprint Repository</a></li>
              <li><a href="#exit" className="text-muted-foreground transition-colors hover:text-gold">Master Book Blueprint</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 py-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            © {new Date().getFullYear()} Stephen Nguyen · Reverena Press · All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/50">
            Earn Daily · Systems Automation · Family Legacy
          </p>
        </div>
      </div>
    </footer>
  );
}
