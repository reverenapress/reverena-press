import React from 'react';
import { AMAZON_LINK } from './books'; 

export default function BookCard({ book, index }) {
  // Safe default backup image repository paths if external links fail
  const repositoryCovers = {
    "MODULE 01": "https://githubusercontent.com",
    "MODULE 02": "https://githubusercontent.com",
    "MODULE 03": "https://githubusercontent.com",
    "MODULE 04": "https://githubusercontent.com"
  };

  // Harmonize data properties to map your unique storefront routes dynamically
  const currentModule = book.module || `MODULE ${String(index + 1).padStart(2, '0')}`;
  const targetCover = book.cover || book.image || repositoryCovers[currentModule];
  const targetAudience = book.persona || book.audience || book.for || "Sovereign Operator";
  
  // Extract custom metrics layout weights
  const pageCount = book.specs?.pages || book.pages || "—";
  const wordCount = book.specs?.words || book.words || "—";
  const frameworkCount = book.specs?.frameworks || book.frameworks || "—";

  // DYNAMIC FIX: Prioritizes the book's specific URL, then falls back to the master author link
  const targetCheckoutUrl = book.amazonUrl || AMAZON_LINK || "https://amazon.com";

  return (
    <div className="relative w-full flex flex-col justify-between bg-onyx-light border border-white/5 rounded-lg p-6 shadow-xl hover:border-gold/30 transition-all duration-300 group min-h-[520px]">
      
      {/* 1. HYDRO-LINKED PLUS SIGN (+ Tag Top-Right Position) */}
      <a 
        href={targetCheckoutUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-gold font-mono text-sm opacity-60 group-hover:opacity-100 group-hover:text-yellow-400 transition-all select-none cursor-pointer font-bold"
        title={`Acquire ${book.title}`}
      >
        +
      </a>

      {/* TOP CONTENT MATRIX BLOCK */}
      <div className="relative w-full">
        {/* STRUCTURAL INDEX NUMBER TRACK */}
        <p className="font-mono text-xs uppercase tracking-widest text-gold/60 mb-2">
          {currentModule}
        </p>
        
        {/* MASTERWORK BOOK TITLE */}
        <h3 className="font-heading text-xl font-light text-foreground group-hover:text-gold transition-colors duration-300 mb-1 line-clamp-2 min-h-[56px]">
          {book.title}
        </h3>
        
        {/* TARGET DEMOGRAPHIC AUDIENCE LINK */}
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-6 line-clamp-1">
          For: {targetAudience}
        </p>

        {/* 2. HYDRO-LINKED COVER DISPLAY CONTAINER */}
        <a 
          href={targetCheckoutUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-full h-[260px] flex items-center justify-center mb-6 overflow-hidden rounded bg-black/40 border border-white/5 shadow-inner block outline-none"
        >
          <img 
            src={targetCover} 
            alt={book.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.target.src = repositoryCovers[currentModule];
            }}
          />
        </a>
      </div>

      {/* BOTTOM METRIC AND ACTION ROW TRAIL */}
      <div className="relative w-full mt-auto">
        {/* SPECIFICATION CHIP ROWS */}
        <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 py-3 mb-6 text-center text-[11px] font-mono text-muted-foreground bg-black/20 rounded">
          <div>
            <span className="block text-foreground font-medium">{pageCount}</span>
            pp
          </div>
          <div className="border-l border-r border-white/5">
            <span className="block text-foreground font-medium">{wordCount}</span>
            words
          </div>
          <div>
            <span className="block text-foreground font-medium">{frameworkCount}</span>
            frameworks
          </div>
        </div>

        {/* 3. DYNAMIC PRIMARY CONVERSION ACTION NAVIGATION ROUTE BUTTON */}
        <a 
          href={targetCheckoutUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-onyx text-xs font-mono uppercase tracking-widest py-3 px-4 rounded transition-all duration-300 font-semibold"
        >
          Acquire
        </a>
      </div>

    </div>
  );
}
