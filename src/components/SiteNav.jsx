import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WEBSITE_LINK } from "@/lib/books";

const LINKS = [
  { label: "The Vault", href: "#vault" },
  { label: "Blueprints", href: "#repository" },
  { label: "Protocol", href: "#protocol" },
  { label: "Exit Strategy", href: "#exit" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-panel border-b border-gold/15">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <a href="#vault" className="group flex items-center gap-3">
              <span className="h-6 w-6 border border-gold/60 rotate-45 transition-transform group-hover:rotate-[135deg] duration-500" />
              <span className="font-display text-lg italic tracking-wide text-foreground">Reverena Press</span>
            </a>
            <nav className="hidden items-center gap-10 md:flex">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold">
                  {l.label}
                </a>
              ))}
              <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className="scan-btn border border-gold/50 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-primary-foreground hover:bg-gold">
                ShopReverena
              </a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-onyx/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
          <div className="relative flex h-full flex-col items-center justify-center gap-8 pt-16">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl italic text-foreground transition-colors hover:text-gold"
                style={{ animation: `fadeIn 0.4s ease ${i * 0.08}s both` }}
              >
                {l.label}
              </a>
            ))}
            <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 border border-gold/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">
              ShopReverena
            </a>
          </div>
        </div>
      )}
    </>
  );
}