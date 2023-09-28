import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Map, Phone, Folder } from 'lucide-react';
import './Menu.css';

function Menu() {
    return (
      <div className='menu'>       
        <nav className='nav'>
          <ul>
            <li><Link to='/'><Home size={24} /> Accueil</Link></li>
            <li><Link to='/prestations'><Folder size={24} /> Prestations</Link></li>
            <li><Link to='/acces'><Map size={24} /> Accès</Link></li>
            <li><Link to='/contact'><Phone size={24} /> Contact</Link></li>
            <li><Link to='/propos'><Info size={24} /> À propos</Link></li>
          </ul>
        </nav>
      </div>
      
    );
  }
  
  export default Menu;