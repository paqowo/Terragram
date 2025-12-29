
import React, { useEffect } from 'react';
import { Card } from '../types';
import { SymbolSVG } from './SymbolSVG';

interface CardDetailViewProps {
  card: Card;
}

// Helper to convert hex color to a comma-separated RGB string
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0'; // Fallback to black
};

const CardDetailView: React.FC<CardDetailViewProps> = ({ card }) => {
  const shadowText = card.shadow.replace(/^Stín:\s*/i, '');

  useEffect(() => {
    document.body.style.setProperty('--ambient-accent', card.accent);
    document.body.style.setProperty('--ambient-accent-rgb', hexToRgb(card.accent));
    return () => {
      document.body.style.removeProperty('--ambient-accent');
      document.body.style.removeProperty('--ambient-accent-rgb');
    };
  }, [card.accent]);

  return (
    <div className="w-full max-w-lg mx-auto pb-20 px-6 pt-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Top (The Spirit): Subtitle */}
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
          {card.subtitle}
        </p>

        {/* Center (The Soul): SymbolSVG with glow */}
        <div className="relative group w-full flex justify-center items-center h-56 symbol-glow-effect">
          <div
            className="absolute inset-0 animate-pulse-aura"
            style={{ backgroundColor: card.accent, filter: 'blur(40px)' }} // Rely on symbol-glow-effect's blur, but keep inline for accent color
          />
          <div className="relative w-48 h-48 sm:w-32 sm:h-32 animate-float z-10">
            <SymbolSVG slug={card.slug} color={card.accent} />
          </div>
        </div>

        {/* Bottom (The Body) */}
        <div className="space-y-2">
          {/* Title */}
          <h1 className="text-4xl font-serif tracking-widest text-shadow-paper uppercase">
            {card.title}
          </h1>
          {/* Affirmation */}
          {card.affirmation && (
            <p className="font-serif italic opacity-80 text-lg">
              &bdquo;{card.affirmation}&ldquo;
            </p>
          )}
        </div>

        <div className="text-left space-y-12 pt-6 w-full">
          <section className="px-2 prose">
            <p className="text-[color:var(--text)] leading-relaxed font-normal text-lg animate-in fade-in slide-in-from-bottom-2 delay-300">
              {card.description}
            </p>
          </section>

          <div className="space-y-6">
            {/* Shadow Box */}
            <section className="bg-black/5 backdrop-filter backdrop-blur-md rounded-2xl p-6 mt-8">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-[color:var(--muted)] uppercase mb-4">
                Stínový aspekt
              </h4>
              <p className="text-[color:var(--muted)] text-base italic leading-relaxed">
                {shadowText}
              </p>
            </section>

            {/* Question Section */}
            {card.question && (
              <section className="surface-card rounded-2xl p-6 text-center mt-8">
                <h4 className="text-[10px] font-black tracking-[0.3em] text-[color:var(--muted)] uppercase mb-4">
                  Otázka k zamyšlení
                </h4>
                <p className="text-[color:var(--text)] text-3xl leading-snug font-serif tracking-tight">
                  {card.question}
                </p>
              </section>
            )}
          </div>
        </div>
        <div className="mt-6 px-4 text-[10px] text-[color:var(--muted)] tracking-[0.1em] md:tracking-[0.3em] uppercase text-center whitespace-nowrap overflow-hidden text-ellipsis watermark-text">
          Terragram je vědomý princip • Symbol světla je jeho obraz • Aktivační klíč vzniká
          ve chvíli, kdy se tento princip v člověku probudí.
        </div>
      </div>
    </div>
  );
};

export default CardDetailView;

