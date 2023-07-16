import { Scale } from 'lucide-react';

import './Header.css';

function Header() {
    return (
      <header className='header'>
        <h1 className='title'> <Scale size={35}/> Maître Dalia MIMOUN, Avocat <Scale size={35}/></h1>
      </header>
    );
  }
  
  export default Header;