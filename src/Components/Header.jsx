// Importation des hooks `useState` pour gérer l'état local et `useLocation` pour obtenir la route active
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo10Ans from '../assets/Images/Logo CCEE.png';

function Header() {
  // Utilisation du hook `useLocation` pour récupérer la route actuelle
  const location = useLocation();
  // Utilisation du hook `useState` pour gérer l'état d'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction qui vérifie si la route active correspond à un chemin spécifique
  const isActive = (path) => {
    // Si le chemin correspond, on retourne une classe spécifique, sinon rien
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    // En-tête principal avec un fond bleu et un texte blanc
    <header className="bg-blue-600 text-white p-1">
      {/* Conteneur principal qui centre et espace les éléments */}
      <div className="container mx-auto flex justify-between items-center relative">
        
        {/* Section contenant le logo et le texte */}
        <div className="flex items-center space-x-4">
          
          {/* Affichage du logo */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={Logo10Ans}
              alt="Logo de l'application"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Texte de l'en-tête : change selon la taille de l'écran */}
          <h1 className="text-xl md:text-2xl font-bold text-yellow-500">
            {/* Sur petits écrans : affiche "CCEE" */}
            <span className="block md:hidden">CCEE</span>
            {/* Sur écrans moyens et plus : affiche le nom complet */}
            <span className="hidden md:block">Communauté Catholique des Étudiants de l'ESATIC</span>
          </h1>
        </div>

        {/* Bouton pour ouvrir/fermer le menu sur mobile */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Bascule l'état d'ouverture du menu
        >
          {/* Première ligne du bouton hamburger */}
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          {/* Ligne centrale, cachée lorsque le menu est ouvert */}
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          {/* Troisième ligne du bouton hamburger */}
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>

        {/* Menu de navigation */}
        <nav
          className={`${
            isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          } absolute top-full left-0 right-0 bg-blue-600 shadow-md transition-all duration-300 ease-in-out origin-top z-40
          md:relative md:opacity-100 md:scale-100 md:shadow-none md:bg-transparent md:flex`}
        >
          {/* Liste des liens */}
          <ul className="flex flex-col items-center py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {/* Lien vers la page d'accueil */}
            <li>
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md ${isActive('/')} hover:bg-blue-700 transition-colors`}
                onClick={() => setIsMenuOpen(false)} // Ferme le menu après avoir cliqué
              >
                Accueil
              </Link>
            </li>
            {/* Lien vers la page du formulaire */}
            <li>
              <Link
                to="/formulaire"
                className={`block px-3 py-2 rounded-md ${isActive('/formulaire')} hover:bg-blue-700 transition-colors`}
                onClick={() => setIsMenuOpen(false)} // Ferme le menu après avoir cliqué
              >
                Formulaire
              </Link>
            </li>
            {/* Lien vers la page "Tout Savoir" */}
            <li>
              <Link
                to="/tout-savoir"
                className={`block px-3 py-2 rounded-md ${isActive('/tout-savoir')} hover:bg-blue-700 transition-colors`}
                onClick={() => setIsMenuOpen(false)} // Ferme le menu après avoir cliqué
              >
                Tout Savoir
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
