import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Map, Phone, Folder, Menu as Hamburger, X } from 'lucide-react';
import './Menu.css';

function Menu() { 
  const [open, setOpen] = useState(false); 

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
      <div className='hamburger'>
        {open ? (
          <X size={32} onClick={() => setOpen(!open)} />
        ) : (
          <Hamburger size={32} onClick={() => setOpen(!open)} />
        )}
        {open && ( 
          <div className='dropdown'>
            <ul>
              <li><Link to='/' onClick={() => setOpen(false)}><Home size={24} /> Accueil</Link></li>
              <li><Link to='/prestations' onClick={() => setOpen(false)}><Folder size={24} /> Prestations</Link></li>
              <li><Link to='/acces' onClick={() => setOpen(false)}><Map size={24} /> Accès</Link></li>
              <li><Link to='/contact' onClick={() => setOpen(false)}><Phone size={24} /> Contact</Link></li>
              <li><Link to='/propos' onClick={() => setOpen(false)}><Info size={24} /> À propos</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>      
  );
}

export default Menu;
