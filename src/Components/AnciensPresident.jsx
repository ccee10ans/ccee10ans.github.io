import React, { useState } from 'react';
import './AnciensPresident.css';
import Djibo from '../assets/Images/feu.jpg';
import silue from '../assets/Images/Désiré silue.jpg';
import joseph from '../assets/Images/joseph kopoin.jpg';
import Seraphin from '../assets/Images/Séraphin.jpg';
import Hermance from '../assets/Images/Hermance2.jpg'
import Assi from '../assets/Images/feu.jpg'
import gowa from '../assets/Images/lida.jpg'
import Ahisan from '../assets/Images/Ahisan.jpg'




const presidents = [
  { nom: "Mlle Djibo, 1er président de la CCEE", periode: "IT2, 2014-2015", description: "Est a la base de la création de la Communauté Catholiques des l'Etudiants de l'ESATIC.", image: Djibo },
  { nom: "M. Ahissan Samuel, 2e président de la CCEE", periode: "IT3, 2015-2016", description: "", image: Ahisan },
  { nom: "Mlle Hermance", periode: "2016-2017", description: "", image: Hermance },
  { nom: "M. N'GBE SERAPHIN", periode: "2017-2018", description: "", image: Seraphin },
  { nom: "M. DESIRE SILUE", periode: "2018-2019", description: "", image: silue },
  { nom: "ZOMADI", periode: "2019-2020", description: "", image: "" },
  { nom: "M. YAPO ERIC", periode: "2020-2021", description: "", image: "" },
  { nom: "M. ASSI HARMONY", periode: "2021-2022", description: "Décès survenu dans la nuit du lundi 22 au Mardi 23 avril 2024", image: Assi },
  { nom: "M. KOPOIN JOSEPH", periode: "2022-2023", description: "", image: joseph },
  { nom: "Mlle GOWA LIDA", periode: "2023-2024", description: "", image: gowa },
  { nom: "Mlle ABBÉ PRISCILLE", periode: "2024-2025", description: "", image: "" },
];

export default function AnciensPresidents() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPresident, setSelectedPresident] = useState(null); // État pour stocker le président sélectionné
  const presidentsPerPage = 6;
  const indexOfLastPresident = currentPage * presidentsPerPage;
  const indexOfFirstPresident = indexOfLastPresident - presidentsPerPage;
  const currentPresidents = presidents.slice(indexOfFirstPresident, indexOfLastPresident);
  const totalPages = Math.ceil(presidents.length / presidentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fonction pour afficher le modal
  const openModal = (president) => {
    setSelectedPresident(president);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedPresident(null);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Nos Anciens Présidents</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPresidents.map((president, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={president.image} 
                  alt={president.nom} 
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="text-white text-lg font-semibold"
                    onClick={() => openModal(president)} // Ouvrir le modal avec les détails du président
                  >
                    Voir plus
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{president.nom}</h3>
                <p className="text-gray-600 mb-2">{president.periode}</p>
                <p className="text-gray-700">{president.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal pour afficher l'image en plein écran */}
      {selectedPresident && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 opacity-0"
          style={{ animation: "fadeIn 0.5s forwards" }} // Animation d'apparition douce
          onClick={closeModal} // Fermer le modal lorsqu'on clique en dehors
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-lg w-full transition-transform transform scale-0"
            style={{ animation: "zoomIn 0.5s forwards" }} // Animation d'agrandissement fluide
            onClick={(e) => e.stopPropagation()} // Empêcher la fermeture si on clique sur le contenu interne
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedPresident.image}
              alt={selectedPresident.nom}
              className="w-full h-auto object-cover rounded-lg mb-4"
              onClick={closeModal} // Fermer le modal lorsque l'image est cliquée
            />
            <h3 className="text-xl font-semibold mb-2">{selectedPresident.nom}</h3>
            <p className="text-gray-600 mb-2">{selectedPresident.periode}</p>
            <p className="text-gray-700">{selectedPresident.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
