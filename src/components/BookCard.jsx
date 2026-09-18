import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { AMAZON_LINK } from "@/lib/books";

export default function BookCard({ book, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative flex w-[85vw] shrink-0 snap-center flex-col md:w-[440px]">
      <div className="absolute -top-6 left-0 font-mono text-xs uppercase tracking-[0.3em] text-gold/70">
        {book.module}
      </div>

      <div className="relative aspect-[2/3] overflow-hidden border border-gold/15 bg-obsidian" data-cursor="hover">
        <img src={book.cover} alt={book.title} className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">For: {book.persona}</p>
          <h3 className="mt-2 font-heading text-xl font-medium leading-tight text-foreground">{book.title}</h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="scan-btn absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-onyx"
          aria-label="Quick view blueprint"
        >
          <Plus size={16} className={`transition-transform duration-300 ${expanded ? "rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mt-4 border border-gold/15 bg-obsidian/60 p-5">
          <p className="font-display text-base italic text-muted-foreground">{book.subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{book.for}</p>
          <div className="mt-4 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">Blueprint Contents</p>
            {book.blueprint.map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="mt-1.5 h-px w-3 bg-gold/60 shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>{book.specs.pages} pp</span>
          <span>{book.specs.words}</span>
          <span>{book.specs.frameworks} frameworks</span>
        </div>
        <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-foreground">
          Acquire <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}