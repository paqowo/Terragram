
import React from 'react';
import { Card } from '../types';
import { SymbolSVG } from './SymbolSVG';

interface CardDetailViewProps {
  card: Card;
}

const CardDetailView: React.FC<CardDetailViewProps> = ({ card }) => {
  const shadowText = card.shadow.replace(/^Stín:\s*/i, '');

  return (
    <div className="w-full max-w-lg mx-auto pb-20 px-6 pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="relative w-full px-4">
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-full"
            style={{ backgroundColor: card.accent }}
          />
          <blockquote className="italic text-[color:var(--text)] text-xl leading-relaxed py-2 pl-6 text-left">
            &ldquo;{card.affirmation}&rdquo;
          </blockquote>
        </div>

        <div className="relative group w-full flex justify-center items-center h-56">
          <div
            className="absolute inset-0 blur-[100px] opacity-20"
            style={{ backgroundColor: card.accent }}
          />
          <div className="relative w-48 h-48 animate-float z-10 symbol-glow">
            <SymbolSVG slug={card.slug} color={card.accent} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black tracking-[0.1em] text-[color:var(--text)] uppercase">
            {card.title}
          </h1>
          <p className="text-[color:var(--muted)] text-sm italic font-medium tracking-wide">
            {card.subtitle}
          </p>
        </div>

        <div className="text-left space-y-12 pt-6 w-full">
          <section className="px-2 prose">
            <p className="text-[color:var(--text)] leading-relaxed font-normal text-lg">
              {card.description}
            </p>
          </section>

          <div className="space-y-6">
            <section className="p-8 rounded-[32px] surface-card-soft">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-[color:var(--muted)] uppercase mb-4">
                Stínový aspekt
              </h4>
              <p className="text-[color:var(--muted)] text-base italic leading-relaxed">
                {shadowText}
              </p>
            </section>

            <section className="p-10 rounded-[40px] surface-card relative overflow-hidden group">
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: card.accent }}
              />
              <h4 className="text-[10px] font-black tracking-[0.3em] text-[color:var(--muted)] uppercase mb-4">
                Otázka k zamyšlení
              </h4>
              <p className="text-[color:var(--text)] text-2xl leading-snug font-bold">
                {card.question}
              </p>
            </section>
          </div>
        </div>
        <div className="mt-6 px-4 text-[10px] text-[color:var(--muted)] tracking-[0.3em] uppercase text-center whitespace-nowrap overflow-hidden text-ellipsis">
          Terragram je vědomý princip • Symbol světla je jeho obraz • Aktivační klíč vzniká
          ve chvíli, kdy se tento princip v člověku probudí.
        </div>
      </div>
    </div>
  );
};

export default CardDetailView;

