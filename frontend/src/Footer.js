import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear(); // Obtient l'année courante
  
    return (
      <footer>
        <span className='footer'>Maître Dalia MIMOUN<br></br></span>
        <span className='footer'>73 rue Pierre et Marie, 93170 Bagnolet<br></br></span>
        <span className='footer'><a href='tel:+33119881505' className='mail'>01.19.88.15.05</a> ~ <a href='mailto:avocat@mimoun.org' className='mail'>avocat@mimoun.org</a><br></br></span>
        <p>Tous droits réservés | Dalia Mimoun © {currentYear}</p>
      </footer>
    );
  }
  
  export default Footer;