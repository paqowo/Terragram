
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../types';
import { SymbolSVG } from './SymbolSVG';

interface CardTileProps {
  card: Card;
}

// Helper to convert hex color to a comma-separated RGB string
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0'; // Fallback to black
};


const CardTile: React.FC<CardTileProps> = ({ card }) => {
  const accentRgb = hexToRgb(card.accent);

  return (
    <Link 
      to={`/card/${card.slug}`}
      className="relative group cursor-pointer aspect-square overflow-hidden rounded-[28px] lux-shimmer hover:-translate-y-2 transition-all duration-500 block hover:shadow-[0_25px_60px_-15px_rgba(var(--accent-rgb),0.2)]
                 border-[1px] border-[color:rgba(var(--accent-rgb),0.1)] group-hover:border-[color:rgba(var(--accent-rgb),0.7)]"
      style={{ '--accent-rgb': accentRgb } as React.CSSProperties}
    >
      {/* Subtle background wash */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ backgroundColor: card.accent, opacity: 0.05 }}
      />
      
      {/* Hover Glow Border - now integrated into main border */}
      {/* <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.5), transparent)` }}
      /> */}

      <div className="p-6 h-full flex flex-col items-center justify-center space-y-4 relative z-10">
        <div className="w-20 h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <SymbolSVG slug={card.slug} color={card.accent} />
        </div>
        {/* Glass Label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 text-center transition-all duration-300 group-hover:bg-white/40">
          <h3 className="text-[10px] tracking-[0.25em] font-black text-[color:var(--text)] uppercase whitespace-nowrap">{card.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardTile;
