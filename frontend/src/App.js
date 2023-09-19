import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Acces from './Acces'; 
import Propos from './Propos'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/acces" element={<Acces />} />
          <Route path="/propos" element={<Propos />} />
          {/* Autres routes */}
        </Routes>
          {/* <p>Avocat Generaliste, dans le divorce, droit de la famille,, droit penal et expulsion.</p> */}
        <Footer /> 
      </div>
    </Router> 
  );
}

export default App;
