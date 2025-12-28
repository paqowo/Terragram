import React, { useState, useEffect } from 'react';
import CardDetailView from './CardDetailView';
import { Card } from '../types';
import { getDailyCardSlug } from '../lib/daily';
import { getCardBySlug } from '../lib/cards';

const DailyReveal: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [card, setCard] = useState<Card | null>(null);
  const [frontLogoSrc, setFrontLogoSrc] = useState('/logo_bile.webp');

  useEffect(() => {
    const slug = getDailyCardSlug();
    const foundCard = getCardBySlug(slug);
    if (foundCard) setCard(foundCard);
  }, []);

  const handleReveal = () => setRevealed(true);

  const todayStr = new Date().toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  if (!card) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-10">
      <div className="text-center mb-10 animate-in fade-in duration-1000">
        <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase mb-2">{todayStr}</p>
        <h1 className="text-3xl font-light text-stone-800 tracking-tight">Dnešní karta</h1>
      </div>

      {!revealed ? (
        <>
          <div className="relative w-full max-w-sm aspect-[3/4.5] perspective-2000 max-h-[60vh]">
            <div
              onClick={handleReveal}
              className="absolute inset-0 bg-white rounded-[40px] shadow-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-1000"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-stone-50 to-stone-100" />
              <div className="relative z-20 flex w-full h-full flex-col items-center justify-center gap-4 px-8">
                <div className="w-[85%] max-w-[420px] max-h-[40vh]">
                  <img
                    src={frontLogoSrc}
                    alt="TerraGram – symbol světla"
                    className="w-full h-auto object-contain animate-float"
                    onError={() => setFrontLogoSrc('/logo_white.webp')}
                  />
                </div>
                <p className="mt-4 block text-center text-sm tracking-wide text-neutral-700">
                  Nechť symbol světla promluví
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleReveal}
            className="mt-8 text-stone-400 text-[10px] tracking-[0.5em] uppercase font-black animate-pulse"
          >
            Aktivovat klíč
          </button>
        </>
      ) : (
        <div className="w-full">
          <CardDetailView card={card} />
        </div>
      )}
    </div>
  );
};

export default DailyReveal;
