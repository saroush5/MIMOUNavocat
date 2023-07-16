import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear(); // Obtient l'année courante
  
    return (
      <footer>
        <p>Tous droits réservés | Dalia Mimoun © {currentYear}</p>
      </footer>
    );
  }
  
  export default Footer;