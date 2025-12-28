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

  if (!card) return null;

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 pt-10 pb-10 gap-6">
      <div className="w-full max-w-[560px]">
        {!revealed ? (
          <div
            onClick={handleReveal}
            className="w-full rounded-[40px] surface-card cursor-pointer overflow-hidden transition-all duration-700 lux-shimmer"
            style={{ height: 'min(62vh, 620px)' }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-stone-50 to-stone-100" />

              <div className="relative z-20 flex w-full h-full flex-col items-center justify-center">
                <div className="logo-panel w-full max-w-[420px]">
                  <img
                    src={frontLogoSrc}
                    alt="TerraGram symbol světla"
                    className="w-full h-auto object-contain animate-float"
                    onError={() => setFrontLogoSrc('/logo_white.webp')}
                  />
                </div>

                <p className="mt-4 text-center text-sm tracking-wide text-neutral-700">
                  Nechť symbol světla promluví
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <CardDetailView card={card} />
          </div>
        )}
      </div>

      {!revealed && (
        <div className="w-full max-w-[560px] flex flex-col items-center gap-3">
          <button
            onClick={handleReveal}
            className="luxury-cta luxury-cta-soft px-7 py-3 rounded-full text-[11px] tracking-[0.45em] font-black animate-pulse"
          >
            Aktivovat klíč
          </button>

          <p className="max-w-[520px] text-center text-[color:var(--muted)] text-sm leading-relaxed uppercase tracking-[0.18em]">
            Nechť symbol světla promluví v okamžiku, kdy pozornost spočine na jeho znamení.
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyReveal;
