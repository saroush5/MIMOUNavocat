import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Euro, Info, Map, Phone, Folder } from 'lucide-react';
import './Menu.css';

function Menu() {
    return (
      <div className='menu'>       
        <nav className='nav'>
          <ul>
            <li><a href='#'><Home size={24} /> Accueil</a></li>
            <li><Link to='/prestations'><Folder size={24} /> Prestations</Link></li>
            <li><a href='#'><Euro size={24} /> Tarifs</a></li>
            <li><Link to='/acces'><Map size={24} /> Accès</Link></li>
            <li><Link to='/contact'><Phone size={24} /> Contact</Link></li>
            <li><Link to='/propos'><Info size={24} /> À propos</Link></li>
          </ul>
        </nav>
      </div>
      
    );
  }
  
  export default Menu;