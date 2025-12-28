
import React from 'react';
import { PROJECT_URL } from '../constants';

interface LogoLinkProps {
  sizeClass?: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ sizeClass = 'h-16 w-auto object-contain' }) => {
  return (
    <a
      href={PROJECT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-105 active:scale-95 duration-300"
    >
      <div className="flex flex-col items-center">
        <img
          src="/logo.webp"
          alt="Terragramy logo"
          className={sizeClass}
          width={128}
          height={128}
        />
        <span className="sr-only font-black tracking-[-0.05em] text-[color:var(--text)]">
          TERRAGRAMY
        </span>
        <div className="divider-gold mt-1 w-12" aria-hidden="true"></div>
      </div>
    </a>
  );
};

export default LogoLink;

