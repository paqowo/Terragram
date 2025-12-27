import React from 'react';
import { CARDS } from '../lib/cards';
import CardTile from '../components/CardTile';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <header className="mb-10 text-center space-y-3">
        <h1 className="text-2xl font-light tracking-[0.1em] text-stone-800 uppercase">
          Galerie Terragramů
        </h1>
        <p className="text-stone-400 text-[11px] tracking-[0.15em] max-w-3xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
          Každý Terragram nese určitou kvalitu bytí. Symbol světla slouží jako jazyk
          vnímání, nikoli jako popis.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        {CARDS.map(card => (
          <CardTile key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
