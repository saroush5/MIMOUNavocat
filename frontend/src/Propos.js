import React from 'react';
import './Propos.css';
import { Bus, MapPin, Car } from 'lucide-react';

function Propos() {
    const dateDeSerment = '2002-07-03';
    const anneeActuelle = new Date().getFullYear();
    const experience = anneeActuelle - parseInt(dateDeSerment.substring(0, 4));

return (
    <div className='propos'>
    Maître Dalia MIMOUN, membre du Barreau de Seine-Saint-Denis (Bobigny), exerce son activité depuis l'année 2002 au sein de son cabinet, idéalement situé au cœur de Bagnolet. <br></br>
    Maître MIMOUN vous offre l'opportunité de la consulter au sein de son cabinet ou à distance, grâce à des consultations en vidéoconférence ou téléphoniques, du lundi au vendredi, de 8h00 à 12h00 et de 14h00 à 18h00.<br></br>
    Les consultations se font sur rendez-vous, que vous pouvez prendre en nous contactant par téléphone au 01.49.88.15.05 ou en utilisant le système de réservation <a href="https://consultation.avocat.fr/avocat-bagnolet/dalia-mimoun-42248.html" className='rdv'>en ligne</a>.<br></br>
    En tant qu'avocat à Bagnolet, Maître Dalia MIMOUN intervient aussi bien en conseil qu'en contentieux, notamment dans les domaines du Droit immobilier, du Droit pénal et du Droit de la famille, des personnes et de leur patrimoine. <br></br>
    Maître MIMOUN met à la disposition de ses clients ses compétences et sa réactivité afin de les informer au mieux et de défendre leurs intérêts, que ce soit en conseil ou lors de procédures judiciaires.<br></br>
    Notre engagement est de cultiver une relation basée sur la confiance et la transparence avec nos clients, dans le but de mettre en œuvre la stratégie la plus adaptée à leur situation. En cas de litiges, nous nous efforçons de défendre leurs intérêts avec ténacité et efficacité.<br></br>
    Le règlement de nos honoraires peut s'effectuer par chèque ou en espèces. <br></br>
    Maître MIMOUN est francophone et accepte l'aide juridictionnelle.<br></br><br></br>

    Son parcours:
    apres l'obtention de son baccalaureat, Maître MIMOUN blablabla
    Elle a prete serment le 3 juillet 2002 et cumule à ce jour {experience} années d’expérience.
    elle a dabord ete salariee mais depuis ??? elle a ouvert son cabinet et exerce seule.

    </div>
);
}

export default Propos;