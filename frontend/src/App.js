import React from 'react';
import { createContext, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Acces from './Acces';
import Propos from './Propos';
import Contact from './Contact';
import Prestations from './Prestations';
import Accueil from './Accueil';

export const ThemeContext = createContext(null);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/acces" element={<Acces />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestations" element={<Prestations />} />
        </Routes>
        <div className="container">
          <img src="../bob.png" alt="Image" className="bobi" />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
