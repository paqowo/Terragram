
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        <span className="text-[10px] font-black uppercase tracking-[0.3em] ml-1">Zpět</span>
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block"> {/* Hidden on small screens */}
        <Link to="/">
            <span className="font-serif font-medium tracking-[0.3em] text-[color:var(--text)] text-sm uppercase whitespace-nowrap">TERRAGRAMY</span>
        </Link>
      </div>
      <Link
        to="/about"
        className="relative inline-block text-[11px] font-serif tracking-[0.3em] text-[color:var(--muted)] transition-colors duration-300 hover:opacity-70
                   after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[color:var(--gold)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        o terragramech
      </Link>
    </nav>
  );
};

export default TopBar;
