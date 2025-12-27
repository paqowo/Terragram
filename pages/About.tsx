import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center space-y-8">
      <div className="space-y-3 max-w-2xl">
        <h1 className="text-3xl font-black tracking-[0.1em] text-stone-900 uppercase">O Terragramech</h1>
        <p className="text-stone-500 text-[13px] leading-relaxed">
          Terragram je vědomý symbol nesoucí kvalitu bytí.
          Jeho symbol světla slouží jako vizuální jazyk vnímání.
          Aktivační klíč vzniká ve chvíli, kdy se symbol, význam a pozornost propojí v člověku.
        </p>
      </div>

      <Link
        to="/"
        className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 hover:text-stone-800"
      >
        Zpět
      </Link>
    </div>
  );
};

export default About;
