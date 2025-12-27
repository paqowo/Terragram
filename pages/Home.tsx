
import React from 'react';
import { Link } from 'react-router-dom';
import LogoLink from '../components/LogoLink';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-16 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center space-y-3">
        <LogoLink sizeClass="h-56 w-auto max-w-sm object-contain" />
      </div>

      <div className="w-full max-w-xs flex flex-col space-y-4">
        <Link 
          to="/daily"
          className="group relative overflow-hidden w-full py-6 bg-white border border-stone-100 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
        >
          <span className="text-stone-800 font-medium text-lg">Karta dne</span>
          <span className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">Denní rituál</span>
        </Link>

        <Link 
          to="/gallery"
          className="group relative overflow-hidden w-full py-6 bg-white border border-stone-100 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
        >
          <span className="text-stone-800 font-medium text-lg">Galerie</span>
          <span className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">Všech 16 symbolů</span>
        </Link>
      </div>
      
      <div className="absolute bottom-10 text-stone-300 text-[10px] tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} Terragramy
      </div>
    </div>
  );
};

export default Home;
