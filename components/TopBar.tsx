
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/') return null;

  const specialTitlePaths = ['/daily', '/gallery'];
  const title = specialTitlePaths.some(path => location.pathname.startsWith(path))
    ? 'TerraGram – aktivační klíč a symbol světla'
    : 'Terragramy';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass flex items-center justify-between border-b border-stone-200/50">
      <button 
        onClick={() => navigate(-1)}
        className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] ml-1">Zpět</span>
      </button>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link to="/">
          <span className="font-black tracking-[0.25em] text-stone-800 text-sm uppercase whitespace-nowrap overflow-hidden text-ellipsis block max-w-[220px]">
            {title}
          </span>
        </Link>
      </div>
      
      <Link
        to="/about"
        className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 hover:text-stone-900 transition-colors"
      >
        O Terragramech
      </Link>
    </nav>
  );
};

export default TopBar;
