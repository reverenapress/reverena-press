import { BOOKS } from "@/lib/books";
import BookCard from "@/components/BookCard";

export default function BookGallery() {
  return (
    <section id="repository" className="relative bg-onyx py-28 md:py-40">
      <div className="tech-line top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold">
            <span className="inline-block h-px w-8 bg-gold align-middle mr-3" />
            The Blueprint Repository
          </p>
          <h2 className="font-heading text-4xl font-light leading-tight text-foreground md:text-6xl">
            Four modules. <span className="font-display italic text-gold">One machine.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Each masterwork is a self-contained case study in automated income efficiency. Together, they form the complete operating system for a sovereign digital estate.
          </p>
        </div>

        {/* RESPONSIVE LAYOUT CONTAINER ENGINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch w-full">
          {BOOKS.map((book, i) => (
            <div key={i} className="w-full max-w-[280px] flex flex-col justify-between">
              <BookCard book={book} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
