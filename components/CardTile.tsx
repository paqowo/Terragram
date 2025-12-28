
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../types';
import { SymbolSVG } from './SymbolSVG';

interface CardTileProps {
  card: Card;
}

const CardTile: React.FC<CardTileProps> = ({ card }) => {
  return (
    <Link 
      to={`/card/${card.slug}`}
      className="relative group cursor-pointer aspect-square overflow-hidden rounded-[28px] surface-card lux-shimmer hover:-translate-y-2 transition-all duration-500 block"
    >
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ backgroundColor: card.accent, opacity: 0.05 }}
      />
      
      <div className="p-6 h-full flex flex-col items-center justify-center space-y-4 relative z-10">
        <div className="w-20 h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <SymbolSVG slug={card.slug} color={card.accent} />
        </div>
        <div className="text-center">
          <h3 className="text-[10px] tracking-[0.25em] font-black text-[color:var(--text)] uppercase">{card.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardTile;
