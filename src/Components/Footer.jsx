import React, { useState } from 'react';
import axios from 'axios';
import LogoCCEE from '../assets/Images/logo_ccee.png';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/submit-footer`, { email, message });
      setEmail('');
      setMessage('');
      alert('Message envoyé avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Section de présentation */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center justify-center mb-4">
              <img src={LogoCCEE} className="w-10 h-10 mr-2" alt="Logo" />
              <h3 className="text-2xl font-bold">Communauté Catholique des Étudiants de l'ESATIC</h3>
            </div>
            <p className="mb-4">
              Notre communauté vise à promouvoir les valeurs chrétiennes et à soutenir les étudiants dans leur parcours académique et spirituel.
            </p>
            <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
              "Notre vision est de former des leaders chrétiens qui excelleront dans leur domaine professionnel tout en restant fidèles à leurs valeurs."
              <footer className="text-sm mt-2">- La CCEE</footer>
            </blockquote>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Nous Contactez </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Liens et copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <p>&copy; 2024 Communauté Catholique ESATIC. Tous droits réservés.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <a href="#" className="mx-2 hover:text-blue-500">Politique de confidentialité</a>
            <a href="#" className="mx-2 hover:text-blue-500">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;