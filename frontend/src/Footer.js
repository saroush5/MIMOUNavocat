import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className='foot'>
        <p className='footer'>Maître Dalia MIMOUN<br></br></p>
        <p className='footer'>73 rue Pierre et Marie Curie, 93170 BAGNOLET<br></br></p>
        <p className='footer'><a href='tel:+33149881505' className='mail'>01.49.88.15.05</a> ~ <a href='mailto:avocat@mimoun.org' className='mail'>avocat@mimoun.org</a><br></br></p>
        <p className='droits'>Tous droits réservés | Dalia Mimoun © {currentYear}</p>
      </div>
    );
  }
  
  export default Footer;