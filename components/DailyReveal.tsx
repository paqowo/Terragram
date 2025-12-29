import React, { useState, useEffect, useContext } from 'react';
import CardDetailView from './CardDetailView';
import { Card } from '../types';
import { getDailyCardSlug } from '../lib/daily';
import { getCardBySlug } from '../lib/cards';
import { ZenSoundContext } from '../App';

const DailyReveal: React.FC = () => {
  const { playZenPing } = useContext(ZenSoundContext)!;
  const [revealed, setRevealed] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const slug = getDailyCardSlug();
    const foundCard = getCardBySlug(slug);
    if (foundCard) setCard(foundCard);
  }, []);

  const handleReveal = () => {
    if (isAnimatingOut || revealed) return;
    playZenPing(); // Trigger sound on button click
    setIsAnimatingOut(true);
    setTimeout(() => {
      setRevealed(true);
    }, 700); // Match animation duration
  };

  if (!card) return null;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-10 pb-24 gap-8">
      
      {/* The new "Sacred Ritual" card view */}
      {!revealed && (
        <div
          onClick={handleReveal}
          className={`relative w-full max-w-sm aspect-[9/16] rounded-3xl cursor-pointer
                      transition-all duration-700 ease-in-out
                      ${isAnimatingOut ? 'animate-out fade-out scale-95' : 'animate-in fade-in slide-in-from-bottom-5 duration-1000'}`}
        >
          {/* Glass-Stone Effect Container */}
          <div className="absolute inset-0 w-full h-full rounded-3xl surface-card" />

          {/* Ambient Glow */}
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[color:var(--ambient-accent)]/50 blur-3xl animate-pulse-slow rounded-full" />
          
          {/* Content: Centered Logo and Text */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            <div className="flex-grow flex items-center justify-center">
              <img
                src="/logo.webp"
                alt="TerraGram symbol světla"
                className="w-4/5 h-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="font-serif text-sm tracking-[0.2em] text-center text-[color:var(--muted)]">
              Dovolte světlu promluvit
            </p>
          </div>
        </div>
      )}

      {/* Card Detail View After Reveal */}
      {revealed && (
        <div className="w-full max-w-lg animate-in fade-in zoom-in-105 duration-1000 delay-100">
          <CardDetailView card={card} />
        </div>
      )}

      {/* Controls and Instructions, only visible before reveal */}
      {!revealed && !isAnimatingOut && (
        <div className="w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in duration-1000 delay-200">
          <button
            onClick={handleReveal}
            className="font-serif text-[color:var(--text)] text-opacity-80 text-xs tracking-[0.3em] uppercase
                       border-[0.5px] border-[color:var(--gold)] border-opacity-60 rounded-full px-10 py-3
                       transition-all duration-300 ease-in-out
                       hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(var(--gold-rgb),0.4)]"
          >
            Aktivovat klíč
          </button>

          <p className="max-w-xs text-center text-[color:var(--muted)] text-xs leading-relaxed tracking-wide">
            Ztište svou mysl a nechte svou pozornost spočinout v nitru. V tomto tichu se symbol stává klíčem k Vašemu Poznání.
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyReveal;
