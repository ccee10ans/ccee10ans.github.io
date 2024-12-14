import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ccee from '../assets/Images/CCEE.jpg'

function SectionImageTexte() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="section-image-texte" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src={ccee}
              alt="CCEE" 
              className="rounded-lg shadow-xl w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={openModal}
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Entretenir des liens de fraternel</h2>
            <p className="text-gray-600 mb-6">
            C'est dans cette vision que, tous les dimanches, les membres de la Communauté Catholique des Étudiants de l'ESATIC se rassemblent pour participer à la messe dans la paroisse la plus proche de l'ESATIC. Ce moment de prière et de recueillement est aussi une occasion pour renforcer les liens fraternels entre les membres. Par ailleurs, la communauté ne se limite pas à la messe dominicale : elle organise régulièrement des sorties, participe à des pèlerinages et prend part à des événements religieux qui nourrissent la foi et la cohésion de ses membres.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 rounded-lg max-w-3xl w-full m-4"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <img
                src={ccee}
                alt="CCEE"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <p className="text-center text-gray-600 mt-2">Année de la photo : 2023</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SectionImageTexte;