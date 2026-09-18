import React from 'react';

export default function BookCard({ book, index }) {
  // Pad the index format to read 01, 02, etc. safely
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="relative w-full flex flex-col justify-between bg-onyx-light border border-white/5 rounded-lg p-6 shadow-xl hover:border-gold/30 transition-all duration-300 group min-h-[480px]">
      
      {/* ➕ THE PREMIUM DARK-GOLD FLOATING DESIGN TAG */}
      <div className="absolute top-4 right-4 text-gold font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
        +
      </div>

      {/* TOP CONTENT MATRIX BLOCK */}
      <div className="relative w-full">
        {/* STRUCTURAL INDEX NUMBER TRACK */}
        <p className="font-mono text-xs uppercase tracking-widest text-gold/60 mb-2">
          MODULE {displayIndex}
        </p>
        
        {/* MASTERWORK BOOK TITLE */}
        <h3 className="font-heading text-xl font-light text-foreground group-hover:text-gold transition-colors duration-300 mb-1">
          {book.title}
        </h3>
        
        {/* TARGET DEMOGRAPHIC TARGET AUDIENCE LINK */}
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-6">
          For: {book.audience || book.for}
        </p>

        {/* 📚 PREMIUM BOOK COVERS DISPLAY TRACK CONTAINER */}
        <div className="relative w-full h-[240px] flex items-center justify-center mb-6 overflow-hidden rounded bg-black/20 p-4 border border-white/5">
          <img 
            src={book.image || book.coverImage} 
            alt={book.title} 
            className="max-h-full max-w-[160px] w-auto h-auto object-contain shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* BOTTOM METRIC AND ACTION ROW TRAIL */}
      <div className="relative w-full mt-auto">
        {/* SPECIFICATION CHIP ROWS */}
        <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 py-3 mb-6 text-center text-[11px] font-mono text-muted-foreground bg-black/5 rounded">
          <div>
            <span className="block text-foreground font-medium">{book.pages || "—"}</span>
            pp
          </div>
          <div className="border-l border-r border-white/5">
            <span className="block text-foreground font-medium">{book.words || "—"}</span>
            words
          </div>
          <div>
            <span className="block text-foreground font-medium">{book.frameworks || "—"}</span>
            frameworks
          </div>
        </div>

        {/* PRIMARY CONVERSION ACTION NAVIGATION ROUTE BUTTON */}
        <a 
          href={book.link || book.url || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-onyx text-xs font-mono uppercase tracking-widest py-3 px-4 rounded transition-all duration-300 font-semibold"
        >
          Acquire Link
        </a>
      </div>

    </div>
  );
}
