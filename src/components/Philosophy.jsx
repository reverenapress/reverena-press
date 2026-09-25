const MACRO_IMG = "https://media.base44.com/images/public/6aabce3312d532ba80bd7a1a/1e0dabf3c_generated_ea19378a.jpg";
const ARCH_IMG = "https://media.base44.com/images/public/6aabce3312d532ba80bd7a1a/4eafb51ee_generated_17a73ea5.jpg";

const PILLARS = [
  { num: "01", title: "Systems Automation", desc: "Replace trading hours for dollars with 24/7 automated online business systems that compound while you sleep." },
  { num: "02", title: "Income Efficiency", desc: "Maximize output per hour with AI copywriting for sales pages — high-converting copy generated in hours, not weeks." },
  { num: "03", title: "Digital Leverage", desc: "Deploy done-for-you sales funnels and digital product hubs with zero ongoing monthly platform fees." },
  { num: "04", title: "Family Legacy", desc: "Convert transient income into a permanent, transferable digital estate built to outlast a single generation." },
];

export default function Philosophy() {
  return (
    <section id="protocol" className="relative overflow-hidden bg-obsidian py-28 md:py-40">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold">
              <span className="inline-block h-px w-8 bg-gold align-middle mr-3" />
              The Protocol
            </p>
            <h2 className="font-heading text-4xl font-light leading-tight text-foreground md:text-5xl">
              From <span className="font-display italic text-muted-foreground">complexity</span> to <span className="font-display italic text-gold">automation.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Stephen Nguyen spent three decades as an engineer before founding Reverena Press. The Blueprint Protocol distills that engineering precision into a repeatable system — one that transforms raw AI capability into a sovereign, automated digital estate for the everyday professional.
            </p>
            <div className="mt-12 grid gap-px border border-gold/15 bg-gold/15 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div key={p.num} className="bg-obsidian p-6 transition-colors hover:bg-onyx">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-gold/60">{p.num}</span>
                    <h3 className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-foreground">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/15">
              <img src={MACRO_IMG} alt="Engineered precision" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden aspect-square w-48 overflow-hidden border border-gold/20 md:block">
              <img src={ARCH_IMG} alt="Architectural void" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -right-4 -top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/50">
              Fig. 01 — Precision
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
