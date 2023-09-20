import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Acces from './Acces'; 
import Propos from './Propos'; 
import Contact from './Contact'; 
import Prestations from './Prestations';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/acces" element={<Acces />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestations" element={<Prestations />} />
          {/* Autres routes */}
        </Routes>
        <Footer /> 
      </div>
    </Router> 
  );
}

export default App;
