
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-12 animate-in fade-in duration-1000">
      
      <div className="lux-shimmer p-4 rounded-full">
        <a href="https://www.freecooperation.cz" target="_blank" rel="noopener noreferrer">
          <img 
            src="/logo.webp" 
            alt="Terragramy Logo" 
            style={{ filter: 'drop-shadow(0 0 25px rgba(201, 162, 77, 0.2))' }}
            className="w-48 h-auto"
          />
        </a>
      </div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-6">
        <Link 
          to="/daily"
          className="group surface-card aspect-[2/3] rounded-[32px] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center p-4 text-center"
        >
          <div className="w-16 h-16 rounded-full border border-[rgba(201,162,77,0.3)] bg-[rgba(201,162,77,0.05)] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-[rgba(201,162,77,0.3)]"></div>
          </div>
          <span className="text-[color:var(--text)] font-medium text-sm mt-4">Karta dne</span>
          <span className="text-xs text-[color:var(--muted)] mt-1 px-2">Prožitek přítomného okamžiku</span>
        </Link>

        <Link 
          to="/gallery"
          className="group surface-card aspect-[2/3] rounded-[32px] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center p-4 text-center"
        >
           <div className="w-16 h-16 flex items-center justify-center">
             <svg className="w-10 h-10 text-[rgba(201,162,77,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           </div>
          <span className="text-[color:var(--text)] font-medium text-sm mt-4">Galerie</span>
          <span className="text-xs text-[color:var(--muted)] mt-1 px-2">Svatyně kvalit bytí</span>
        </Link>
      </div>
      
      <div className="footer-text absolute bottom-10 max-w-[90%]">
        © {new Date().getFullYear()} Terragramy
      </div>
    </div>
  );
};

export default Home;



