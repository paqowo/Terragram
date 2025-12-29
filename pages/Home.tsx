
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-24 space-y-12 animate-in fade-in duration-1000 relative"> {/* Added relative for absolute positioning of toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-2 text-[color:var(--muted)] hover:opacity-70 transition-all duration-300 rounded-full hover:shadow-[0_0_10px_rgba(var(--gold-rgb),0.2)]"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.507l-.707-.707M6.38 17.62l-.707-.707M18.707 18.707l-.707-.707M5.636 5.636l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      
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
          className="group surface-card aspect-[2/3] rounded-[32px] lux-shimmer relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center justify-center p-4 text-center"
        >
          <div className="flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="symbol-glow-effect opacity-60 text-[color:var(--gold)]">
              {/* Vesica Piscis */}
              <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="0.8"/>
              {/* Central Pillar/Insight dot */}
              <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-[color:var(--text)] font-medium text-sm mt-4">Karta dne</span>
          <span className="text-xs text-[color:var(--muted)] mt-1 px-2">Prožitek přítomného okamžiku</span>
        </Link>

        <Link 
          to="/gallery"
          className="group surface-card aspect-[2/3] rounded-[32px] lux-shimmer relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center justify-center p-4 text-center"
        >
           <div className="flex items-center justify-center">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="symbol-glow-effect opacity-60 text-[color:var(--gold)]">
              {/* Central Circle */}
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              {/* 6 Surrounding Petals/Circles */}
              <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="12" cy="15.5" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="15.03" cy="10.25" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="8.97" cy="10.25" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="15.03" cy="13.75" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
              <circle cx="8.97" cy="13.75" r="3.5" stroke="currentColor" strokeWidth="0.8"/>
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



