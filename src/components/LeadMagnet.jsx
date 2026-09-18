import { ArrowRight } from "lucide-react";
import { WEBSITE_LINK } from "@/lib/books";

export default function LeadMagnet() {
  return (
    <section id="exit" className="relative overflow-hidden bg-onyx py-28 md:py-40">
      <div className="tech-line top-0 left-0 right-0" />
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold">
          <span className="inline-block h-px w-8 bg-gold align-middle mr-3" />
          Authenticate Your Exit Strategy
        </p>
        <h2 className="font-heading text-4xl font-light leading-tight text-foreground md:text-6xl">
          Claim the free <span className="font-display italic text-gold">Master Book Blueprint.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A single-page schematic mapping all four modules into one deployable system. Available now at ShopReverena.com.
        </p>
        <div className="mt-12">
          <a
            href={WEBSITE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="scan-btn inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-onyx transition-colors"
          >
            Claim Your Blueprint <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}