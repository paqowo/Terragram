
import React, { useState, useEffect } from 'react';
import CardDetailView from './CardDetailView';
import { Card } from '../types';
import { getDailyCardSlug } from '../lib/daily';
import { getCardBySlug } from '../lib/cards';
import { SymbolSVG } from './SymbolSVG';

const DailyReveal: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [card, setCard] = useState<Card | null>(null);
  const [frontLogoSrc, setFrontLogoSrc] = useState('/logo_bile.webp');

  useEffect(() => {
    const slug = getDailyCardSlug();
    const foundCard = getCardBySlug(slug);
    if (foundCard) setCard(foundCard);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
  };

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

      <div className="relative w-full max-w-sm aspect-[3/4.5] perspective-2000">
        <div className={`relative w-full h-full transition-all duration-[1200ms] transform-style-3d ${revealed ? 'rotate-y-180' : ''}`}>
          
          {/* Back (Cover) */}
          <div
            onClick={handleReveal}
            className={`absolute inset-0 bg-white rounded-[40px] shadow-2xl flex flex-col items-center justify-center cursor-pointer backface-hidden z-20 overflow-hidden transition-all duration-1000 ${revealed ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-stone-50 to-stone-100" />

            <div className="relative group flex flex-col items-center p-12 text-center">
              <div className="w-[75%] mb-8">
                <img
                  src={frontLogoSrc}
                  alt="Terragram – symbol světla"
                  className="w-full h-full object-contain animate-float"
                  onError={() => setFrontLogoSrc('/logo_white.webp')}
                />
              </div>
              <div className="text-stone-400 text-[10px] tracking-[0.5em] uppercase relative z-10 font-black">
                Nechť symbol světla promluví
              </div>
            </div>
          </div>

          {/* Front */}
          <div 
            className={`absolute inset-0 bg-white rounded-[40px] shadow-2xl p-8 flex flex-col items-center justify-between rotate-y-180 backface-hidden z-10 overflow-hidden`}
          >
            <div 
              className="absolute inset-0 opacity-5"
              style={{ backgroundColor: card.accent }}
            />
            
            <div className="text-center w-full z-10 mt-4">
              <h3 className="text-[14px] tracking-[0.4em] text-stone-900 uppercase font-black mb-1">{card.title}</h3>
              <p className="text-[11px] text-stone-500 italic font-medium">{card.subtitle}</p>
            </div>

            {/* Symbol Container */}
            <div className="relative w-full flex justify-center items-center h-48">
               <div 
                className="absolute inset-0 blur-[60px] opacity-30 animate-pulse"
                style={{ backgroundColor: card.accent }}
              />
              <div className="w-36 h-36 relative z-10 animate-float">
                <SymbolSVG slug={card.slug} color={card.accent} />
              </div>
            </div>

            <div className="w-full z-10 text-center space-y-6 mb-4">
              <p className="text-stone-800 text-sm italic leading-relaxed font-medium px-4">
                &ldquo;{card.affirmation}&rdquo;
              </p>
              <Link 
                to={`/card/${card.slug}`}
                className="mx-auto w-full max-w-[200px] py-4 bg-stone-900 text-white rounded-[20px] text-[10px] font-black tracking-[0.3em] uppercase hover:bg-stone-800 active:scale-95 transition-all shadow-lg block text-center"
              >
                Vstoupit do výkladu
              </Link>
              <CardDetailView card={card} />
            </div>
          </div>
        </div>
      </div>
      
      {!revealed && (
        <button 
          onClick={handleReveal}
          className="mt-12 text-stone-400 text-[10px] tracking-[0.5em] uppercase font-black animate-pulse"
        >
          Aktivovat klíč
        </button>
      )}
    </div>
  );
};

export default DailyReveal;
