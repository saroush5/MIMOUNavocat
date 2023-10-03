import React from 'react';
import './Accueil.css';

function Accueil() {
  const handleLearnMoreClick = () => {
    window.location.href = 'https://consultation.avocat.fr/avocat-bagnolet/dalia-mimoun-42248.html';
  };

  return (
    <div className='accueil'>
        <br></br>
        <span>Maître Dalia MIMOUN exerce en tant qu'avocat au Barreau de la Seine-Saint-Denis, où elle a établi sa propre structure afin de consacrer son engagement quotidien au service de ses clients. Son cabinet est idéalement situé au cœur de BAGNOLET.</span><br></br><br></br>
        <button className='btn' onClick={handleLearnMoreClick}> Planifier un rendez-vous </button>
    </div>
  );
}

export default Accueil;
