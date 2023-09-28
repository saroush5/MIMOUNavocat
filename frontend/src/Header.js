import { Scale } from 'lucide-react';
import './Header.css';

function Header() {
    return (
      <header className='header'>
        <div className='up'>
          <h1 className='title'> <Scale className='scale'/> Maître Dalia MIMOUN, Avocat <Scale /></h1>
          <span className='spe'>Avocat Généraliste ~ Divorce ~ Expulsion</span><br></br>
          <span className='spe2'>Droit de la famille ~  Droit pénal ~  Droit immobilier</span><br></br>
        </div>
      </header>
      
    );
  }
  
  export default Header;