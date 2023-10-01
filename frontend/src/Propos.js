import React from 'react';
import './Propos.css';

function Propos() {
    const dateDeSerment = '2002-07-03';
    const anneeActuelle = new Date().getFullYear();
    const experience = anneeActuelle - parseInt(dateDeSerment.substring(0, 4));

return (
    <div className='propos'>
        <h3 className='t_propos'>À propos</h3>
    <p className='p_propos'>
        Maître Dalia MIMOUN, membre du Barreau de Seine-Saint-Denis (Bobigny), exerce son activité depuis l'année 2002 au sein de son cabinet, idéalement situé au cœur de Bagnolet. <br></br>
    Maître MIMOUN vous offre l'opportunité de la consulter au sein de son cabinet ou à distance, grâce à des consultations en vidéoconférence ou téléphoniques, du lundi au vendredi, de 8h00 à 12h00 et de 14h00 à 18h00.
    Les consultations se font sur rendez-vous, que vous pouvez prendre en nous contactant par téléphone au 01.49.88.15.05 ou en utilisant le système de réservation <a href="https://consultation.avocat.fr/avocat-bagnolet/dalia-mimoun-42248.html" className='rdv'>en ligne</a>.<br></br>
    En tant qu'avocat à Bagnolet, Maître Dalia MIMOUN intervient aussi bien en conseil qu'en contentieux, notamment dans les domaines du Droit immobilier, du Droit pénal et du Droit de la famille, des personnes et de leur patrimoine. <br></br>
    Maître MIMOUN met à la disposition de ses clients ses compétences et sa réactivité afin de les informer au mieux et de défendre leurs intérêts, que ce soit en conseil ou lors de procédures judiciaires.<br></br>
    Notre engagement est de cultiver une relation basée sur la confiance et la transparence avec nos clients, dans le but de mettre en œuvre la stratégie la plus adaptée à leur situation. En cas de litiges, nous nous efforçons de défendre leurs intérêts avec ténacité et efficacité.<br></br>
    Le règlement de nos honoraires peut s'effectuer par chèque ou en espèces. <br></br>
    Maître MIMOUN est francophone et accepte l'aide juridictionnelle.<br></br><br></br>
    </p>

    <h3 className='t_parcours'>Son parcours</h3>
    <p className='p_parcours'>
    Maître Dalia MIMOUN est une avocate chevronnée au Barreau de Bobigny, dont le parcours remarquable reflète son engagement indéfectible envers la justice et le droit. <br></br>
    Dès ses débuts dans le monde du droit après avoir obtenu son bac B en 1993, elle a rapidement gravit les échelons académiques. <br></br>
    Après avoir obtenu sa licence de droit en 1996, elle a poursuivi ses études pour obtenir une maîtrise en carrière judiciaire en 1997, démontrant sa détermination à acquérir une solide compréhension du système juridique. <br></br>
    Parallèlement, elle a élargi son champ de compétences avec une maîtrise en droit des affaires en 1998, puis un DEA (Diplôme d'Études Approfondies) en droit des affaires en 1999.<br></br>
    Après avoir intégré l'EFB (École de Formation professionnelle des Barreaux du ressort de la Cour d'appel de Paris) en 2000, son engagement envers le métier d'avocat s'est concrétisé lors de sa prestation de serment le 3 juillet 2002, marquant le début d'une carrière prolifique. <br></br>
    Elle cumule donc à ce jour {experience} années d’expérience. <br></br>
    Elle a ensuite enrichi son expérience professionnelle en tant que collaboratrice au sein du cabinet Monin Berthault de 2002 à 2005, où elle a acquis une expertise précieuse dans divers domaines du droit. <br></br>
    Depuis 2005, elle exerce seule à son compte.
    Aujourd'hui, Maître Dalia MIOUN est reconnue pour son excellence, sa perspicacité juridique et son dévouement sans faille envers les intérêts de ses clients. <br></br>
    Son parcours impressionnant est le reflet de son engagement continu à offrir une représentation juridique de premier plan et à lutter pour la justice.
    </p>
    </div>
);
}

export default Propos;