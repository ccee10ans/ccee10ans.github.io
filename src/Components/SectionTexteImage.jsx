import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ccee2 from '../assets/Images/CCEE2.jpg'

function SectionTexteImage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="section-texte-image" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-2/3 md:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Moment de joie et de détente</h2>
            <p className="text-gray-600 mb-6">
            C'est dans cet esprit de communion que la Communauté Catholique des Étudiants de l'ESATIC organise des moments de joie et de détente. Ces instants privilégiés prennent la forme de sorties conviviales, de pèlerinages spirituels et d'autres activités enrichissantes, permettant à ses membres de se retrouver, de partager et de renforcer leurs liens dans une ambiance fraternelle et chaleureuse.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={ccee2}
              alt="CCEE Community" 
              className="rounded-lg shadow-xl w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={openModal}
            />
          </motion.div>
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
                src={ccee2}
                alt="CCEE Community"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <p className="text-center text-gray-600 mt-2">Année de la photo : 2024</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SectionTexteImage;