
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  if (location.pathname === '/') return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass flex items-center justify-between">
      <button
        onClick={() => navigate(-1)}
        className="text-[color:var(--muted)] hover:opacity-70 transition-all duration-300 flex items-center gap-1 group hover:shadow-[0_0_10px_rgba(var(--gold-rgb),0.2)] rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-light text-[10px] tracking-[0.5em] uppercase ml-1">Zpět</span>
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block"> {/* Hidden on small screens */}
        <Link to="/">
            <span className="font-serif font-medium tracking-[0.3em] text-[color:var(--text)] text-sm uppercase whitespace-nowrap">TERRAGRAMY</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-[color:var(--muted)] hover:opacity-70 transition-all duration-300 rounded-full hover:shadow-[0_0_10px_rgba(var(--gold-rgb),0.2)]"
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
        <Link
          to="/about"
          className="relative inline-block text-[10px] font-light tracking-[0.5em] uppercase text-[color:var(--muted)] transition-colors duration-300 hover:opacity-70
                     after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[color:var(--gold)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          o terragramech
        </Link>
      </div>
    </nav>
  );
};

export default TopBar;
