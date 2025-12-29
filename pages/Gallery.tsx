import React from 'react';
import { CARDS } from '../lib/cards';
import CardTile from '../components/CardTile';

const Gallery: React.FC = () => {
  const mainCards = CARDS.filter(card => !['ja-jsem', 'novy-vek', 'spoluprace'].includes(card.slug));
  const supplementaryCards = CARDS.filter(card => ['ja-jsem', 'novy-vek', 'spoluprace'].includes(card.slug));

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <header className="mb-10 text-center space-y-3">
        <h1 className="text-2xl font-light tracking-[0.1em] text-[color:var(--text)] uppercase">
          Galerie Terragramů
        </h1>
        <p className="text-[color:var(--muted)] text-[11px] tracking-[0.15em] max-w-3xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
          Zrcadlo poznání. Symbol, který nepromlouvá k mysli, ale k tichu uvnitř Vás. Nechte se vést rezonancí tvarů.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        {mainCards.map(card => (
          <CardTile key={card.id} card={card} />
        ))}
      </div>

      <div className="text-center my-16 space-y-4 max-w-5xl mx-auto">
        <div className="divider-gold w-full max-w-xs mx-auto"></div>
        <p className="font-light text-[10px] tracking-[0.5em] text-[color:var(--muted)] uppercase">Doplňkové klíče</p>
        <div className="divider-gold w-full max-w-xs mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        {supplementaryCards.map(card => (
          <CardTile key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;


