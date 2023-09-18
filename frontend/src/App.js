import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Address from './Address';
import Footer from './Footer';
import Menu from './Menu';
import Acces from './Acces'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/acces" element={<Acces />} />
          {/* Autres routes */}
        </Routes>
          {/* <p>Avocat Generaliste, dans le divorce, droit de la famille,, droit penal et expulsion.</p>
          <Address className="address" /> */}
        <Footer /> 
      </div>
    </Router> 
  );
}

export default App;
