
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-12 animate-in fade-in duration-1000">
      
      <h1 className="font-serif text-3xl tracking-widest text-[#383530] text-center">
        TERRAGRAMY
      </h1>

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



