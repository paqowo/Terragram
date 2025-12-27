
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCardBySlug } from '../lib/cards';
import CardDetailView from '../components/CardDetailView';

const CardDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const card = slug ? getCardBySlug(slug) : undefined;

  if (!card) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-stone-400">Karta nenalezena</p>
        <button 
          onClick={() => navigate('/gallery')}
          className="text-stone-800 font-medium underline"
        >
          Zpět do galerie
        </button>
      </div>
    );
  }

  return <CardDetailView card={card} />;
};

export default CardDetail;
