import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu as Hamburger, X } from 'lucide-react';
import './Menu.css';

function Menu() { 
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const currentTab = window.location.pathname.split('/')[1]; 
    setActiveTab(currentTab || "accueil"); 
  }, []); 

  return (
    <div>
      <div className='menu1'>
        <div className="input">
          <Link to="/" className={`value ${activeTab === "accueil" ? "active" : ""}`} onClick={() => handleTabClick("")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>    
            Accueil
          </Link>
          <Link to="/prestations" className={`value ${activeTab === "prestations" ? "active" : ""}`} onClick={() => handleTabClick("prestations")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>    
            Prestations    
          </Link>
          <Link to='/acces' className={`value ${activeTab === "acces" ? "active" : ""}`} onClick={() => handleTabClick("acces")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>    
            Accès
          </Link>
          <Link to='/contact' className={`value ${activeTab === "contact" ? "active" : ""}`} onClick={() => handleTabClick("contact")}>             
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>    
              Contact
          </Link>
          <Link to='/propos' className={`value ${activeTab === "propos" ? "active" : ""}`} onClick={() => handleTabClick("propos")}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>    
              À propos
          </Link>
        </div>
      </div>   
      <div className='menu2'>
        <div className='hamburger'>
          {open ? ( <X size={32} onClick={() => setOpen(!open)} /> ) : ( <Hamburger size={32} onClick={() => setOpen(!open)} /> )}
          {open && ( 
            <div className='dropdown'>
                <Link to="/" className={`value ${activeTab === "accueil" ? "active" : ""}`} onClick={() => { handleTabClick(""); setOpen(false); }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>    
                Accueil
              </Link>
              <Link to="/prestations" className={`value ${activeTab === "prestations" ? "active" : ""}`} onClick={() =>  { handleTabClick("prestations"); setOpen(false); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>    
                Prestations    
              </Link>
              <Link to='/acces' className={`value ${activeTab === "acces" ? "active" : ""}`} onClick={() => { handleTabClick("acces"); setOpen(false); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>    
                Accès
              </Link>
              <Link to='/contact' className={`value ${activeTab === "contact" ? "active" : ""}`} onClick={() => { handleTabClick("contact"); setOpen(false); }}>             
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>    
                  Contact
              </Link>
              <Link to='/propos' className={`value ${activeTab === "propos" ? "active" : ""}`} onClick={() => { handleTabClick("propos"); setOpen(false); }}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>    
                  À propos
              </Link>
            </div>
          )}
      </div>
    </div>
  </div>   
  );
}

export default Menu;
