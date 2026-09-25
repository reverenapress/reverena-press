import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { AMAZON_LINK } from "@/lib/books";

const HERO_IMG = "https://media.base44.com/images/public/6aabce3312d532ba80bd7a1a/cca2db038_generated_30a5fad4.jpg";

export default function Hero() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setTilt({ x: (e.clientX / w - 0.5) * 16, y: (e.clientY / h - 0.5) * 16 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="vault" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-onyx">
      <div className="blueprint-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover opacity-40" style={{ transform: `translate(${tilt.x * 0.4}px, ${tilt.y * 0.4}px) scale(1.05)`, transition: "transform 0.3s ease-out" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-onyx/60" />
      </div>

      <div className="tech-line top-1/3 left-0 right-0" />
      <div className="tech-line top-2/3 left-0 right-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-gold">
            <span className="inline-block h-px w-8 bg-gold align-middle mr-3" />
            The Blueprint Protocol
          </p>
          <h1 className="font-heading text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-8xl">
            SYSTEMS <br />
            <span className="font-display italic font-medium text-gold">over</span> STRIFE
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A four-module masterworks library by Stephen Nguyen — 30-year engineer turned digital hub founder. Deploy a done-for-you sales funnel, master AI copywriting for sales pages, and build a permanent family legacy.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#repository" className="scan-btn group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-onyx transition-colors">
              Enter the Blueprint Repository
            </a>
            <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold">
              View on Amazon
            </a>
          </div>
        </div>
      </div>

      <a href="#repository" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold">
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
