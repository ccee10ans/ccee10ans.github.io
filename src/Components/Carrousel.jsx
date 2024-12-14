import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageC1 from '../assets/Images/ImageCarou1.jpg'
import ImageC2 from '../assets/Images/ImageCarou2.jpg'
import ImageC3 from '../assets/Images/ImageCarou3.jpg'
import ImageC4 from '../../src/assets/Images/Fetes.jpg'

const diapositives = [
  {
    image: ImageC1,
    titre: 'CCEE',
    sousTitre: '',
    description: ''
  },
  {
    image: ImageC2,
    titre: 'NOTRE VISION',
    sousTitre: 'Notre vision est de former des leaders chrétiens qui excelleront dans leur domaine professionnel tout en restant fidèles à leurs valeurs.',
    description: 'Sports, clubs, événements et plus encore'
  },
  {
    image: ImageC3,
    titre: 'PRIERE EN COMMUNAUTE',
    sousTitre: 'LIEU: ESATIC (TWIN 1) ',
    description: 'Nos rencontres de prière en communauté se font tous les Mardis de 19h00 - 21h00, l\'objectif principal a travers ces rencontres de prière est de maintenir la vie de prière des communautaire parallèlement aux difficultés de la vie étudiant'
  },
  {
    image: ImageC4,
    titre: 'FESTIVITÉS',
    sousTitre: 'LIEU: ???',
    description: 'Nous organisons des fêtes pour partager des moments de joie 🎉 et renforcer la fraternité 🤝. Ces événements sont l’occasion de célébrer ensemble les bienfaits de Dieu et de créer des liens solides entre les membres 🙏.'
  }
  
];

export default function Carrousel() {
  const [diapositiveCourante, setDiapositiveCourante] = useState(0);

  const diapositiveSuivante = () => {
    setDiapositiveCourante((prev) => (prev + 1) % diapositives.length);
  };

  const diapositivePrecedente = () => {
    setDiapositiveCourante((prev) => (prev - 1 + diapositives.length) % diapositives.length);
  };

  useEffect(() => {
    const minuteur = setInterval(() => {
      diapositiveSuivante();
    }, 5000); // Change de diapositive toutes les 5 secondes

    return () => clearInterval(minuteur);
  }, []);

  const scrollToSectionImageTexte = () => {
    const sectionImageTexte = document.getElementById('section-image-texte');
    if (sectionImageTexte) {
      const yOffset = -60; // Ajustez cette valeur pour décaler le défilement si nécessaire
      const y = sectionImageTexte.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {diapositives.map((diapositive, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === diapositiveCourante ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={diapositive.image}
            alt={diapositive.titre}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{diapositive.titre}</h2>
              <h3 className="text-xl md:text-2xl mb-2">{diapositive.sousTitre}</h3>
              <p className="text-sm md:text-base mb-6">{diapositive.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={diapositivePrecedente}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={diapositiveSuivante}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={scrollToSectionImageTexte}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:scale-105 shadow-lg"
      >
        Savoir plus
      </button>
    </div>
  );
}