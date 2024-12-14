import React from 'react';
import { useLocation } from 'react-router-dom';
import Carrousel from './Carrousel';

function CarrouselConditionnel() {
  const location = useLocation();

  // Afficher le carrousel uniquement sur la page d'accueil
  if (location.pathname === '/') {
    return <Carrousel />;
  }

  return null; // Ne rien afficher pour d'autres routes
}

export default CarrouselConditionnel