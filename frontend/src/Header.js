import { Scale, Home, DollarSign, Info } from 'lucide-react';
import './Header.css';

function Header() {
    return (
      <header className='header'>
        <div className='up'>
          <h1 className='title'> <Scale size={35}/> Maître Dalia MIMOUN, Avocat <Scale size={35}/></h1>
        </div>
       
        {/* <nav className='menu'>
          <ul>
            <li><a href='#'><Home size={24} /> Accueil</a></li>
            <li><a href='#'><DollarSign size={24} /> Tarifs</a></li>
            <li><a href='#'><Info size={24} /> À Propos</a></li>
          </ul>
      </nav> */}
      </header>
      
    );
  }
  
  export default Header;