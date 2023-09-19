import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Euro, Info, Map } from 'lucide-react';
import './Menu.css';

function Menu() {
    return (
      <div className='menu'>       
        <nav className='nav'>
          <ul>
            <li><a href='#'><Home size={24} /> Accueil</a></li>
            <li><a href='#'><Euro size={24} /> Tarifs</a></li>
            <li><Link to='/acces'><Map size={24} /> Accès</Link></li>
            <li><a href='#'><Info size={24} /> À propos</a></li>
          </ul>
        </nav>
      </div>
      
    );
  }
  
  export default Menu;