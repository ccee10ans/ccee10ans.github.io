import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionImageTexte from "../Components/SectionImageTexte";
import SectionTexteImage from "../Components/SectionTexteImage";
import AnciensPresidents from "../Components/AnciensPresident";

// Import Google Fonts in your index.html or App.js
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">

const colors = ['#4CAF50', '#FFC107', '#2196F3', '#9C27B0']; // Colors from the form image

function Accueil() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      <motion.h2 
        className="text-2xl md:text-4xl font-bold mb-8 text-center font-poppins"
        style={{ color: colors[colorIndex] }}
        animate={{ color: colors[colorIndex] }}
        transition={{ duration: 0.5 }}
      >
        Bienvenue sur la page d'ACCUEIL
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionImageTexte />
      </motion.div>

      <div className="my-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTexteImage />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AnciensPresidents />
      </motion.div>
    </div>
  );
}

export default Accueil;