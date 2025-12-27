import React, { useEffect, useState } from 'react';

interface SymbolSVGProps {
  slug: string;
  color?: string;
  className?: string;
}

export const SymbolSVG: React.FC<SymbolSVGProps> = ({
  slug,
  color,
  className = "w-full h-full"
}) => {
  const [hasError, setHasError] = useState(false);
  const [src, setSrc] = useState(`/symbols/${slug}.webp`);
  const [triedFallback, setTriedFallback] = useState(false);
  const slugWithUnderscore = slug.replace(/-/g, '_');

  useEffect(() => {
    setHasError(false);
    setSrc(`/symbols/${slug}.webp`);
    setTriedFallback(false);
  }, [slug]);

  if (hasError) {
    return <div className={className} />;
  }

  return (
    <img
      src={src}
      alt=""
      className={className}
      role="presentation"
      onError={() => {
        if (!triedFallback && slugWithUnderscore !== slug) {
          setSrc(`/symbols/${slugWithUnderscore}.webp`);
          setTriedFallback(true);
        } else {
          setHasError(true);
        }
      }}
      {...(color ? { 'data-accent-color': color } : {})}
    />
  );
};
