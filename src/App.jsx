import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AlerteDeroulante from './Components/AlerteDeroulante';
import Accueil from './Pages/Accueil';
import Formulaire from './Pages/Formulaire';
import ToutSavoir from './Pages/ToutSavoir';
import CarrouselConditionnel from './Components/CarrouselConditionnel';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AlerteDeroulante />
        <Header />

        <CarrouselConditionnel />

        <div id="content-section">
          <main className="flex-grow">
            <Routes>
              
              
              <Route path="/" element={<Accueil />} />
              <Route path="/formulaire" element={<Formulaire />} />
              <Route path="/tout-savoir" element={<ToutSavoir />} />
            
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;