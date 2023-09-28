    import React from 'react';
    import './Acces.css';
    import { Bus, MapPin, Car } from 'lucide-react';
    import 'bootstrap-icons/font/bootstrap-icons.css';

    function Acces() {
    return (
        <div className='acces'>
          <h3 className='t_acces'>Accès</h3>
          < p className='p_acces'>
        Le cabinet de Maître Dalia MIMOUN est idéalement situé au: <br></br>
        <span className="bi bi-pin-map" id="icon"> </span>73 rue Pierre et Marie Curie, à 93170 Bagnolet. <br></br>
        Les moyens de transport en commun à proximité <br></br>comprennent les lignes de bus suivantes: <br></br>

        <Bus size={14} /><i> </i><i className='bus'>Bus</i> <span className='vert'>115</span> - Arrêt : Les Malassis ou Stalingrad <br></br>
        <Bus size={14} /><i> </i><i className='bus'>Bus</i> <span className='bleu'>318</span> - Arrêt : René Alazard - Sadi Carno  <br></br>
        <Bus size={14} /><i> </i><i className='bus'>Bus</i> <span className='violet'>76</span> - Arrêt : Les Malassis ou Pierre Curie ou Stalingrad<br></br>
        <Bus size={14} /><i> </i><i className='bus'>Bus</i> <span className='rose'>122</span> - Arrêt : Pierre Curie  <br></br>
        Ces options de transport offrent un accès pratique au cabinet de Maître MIMOUN, facilitant ainsi les déplacements pour les clients. <br></br>
        {/* <p className="notes">A ajouter: lien waze, lien google maps</p> */}
        <MapPin size={20} id="icon"/> <a href="https://www.google.com/maps?ll=48.87184,2.424218&z=16&t=m&hl=en&gl=FR&mapclient=embed&q=73+Rue+Pierre+et+Marie+Curie+93170+Bagnolet" target="_blank" rel="noopener noreferrer" className='lien'>Lien Google Maps</a> &nbsp;
        <Car size={20} id="icon"/> <a href=" https://waze.com/ul?ll=48.8719194,2.4244284&navigate=yes" target="_blank" rel="noopener noreferrer" className='lien'>Lien Waze</a>
        </p>
        <br></br>
        <iframe className='plan'
        title="Plan Google Maps"
        width="600"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.4289751952225!2d2.417450415874219!3d48.869469079291175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6729435f27273%3A0x4102f63760e9ee0!2s73%20Rue%20Pierre%20et%20Marie%20Curie%2C%2093170%20Bagnolet!5e0!3m2!1sen!2sfr!4v1631878402211!5m2!1sen!2sfr"
        allowFullScreen
        loading="lazy"
      ></iframe>
        </div>
    );
    }

    export default Acces;