import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <p className='footer'>Maître Dalia MIMOUN<br></br></p>
        <p className='footer'>73 rue Pierre et Marie, 93170 Bagnolet<br></br></p>
        <p className='footer'><a href='tel:+33119881505' className='mail'>01.19.88.15.05</a> ~ <a href='mailto:avocat@mimoun.org' className='mail'>avocat@mimoun.org</a><br></br></p>
        <p className='droits'>Tous droits réservés | Dalia Mimoun © {currentYear}</p>
      </footer>
    );
  }
  
  export default Footer;