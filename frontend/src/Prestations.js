import './Prestations.css';
import React, { useState } from 'react';

const Prestations = () => {
  const categories = [
    {
      name: 'Droit de la famille, des personnes et de leur patrimoine',
      subcategories: [
        '• État civil: mariage, PACS, procédures en changement de nom et prénom',
        '• Divorces pour faute, divorces amiables par consentement mutuel …',
        '• Procédures en responsabilité civile: indemnisation pour faute, dommages-intérêts',
        '• Droit des mineurs, paternité, filiation, autorité parentale, adoption',
        '• Pension alimentaire, prestation compensatoire: calcul, revalorisation',
        '• Divorce: consentement mutuel, altération lien conjugal, faute, procédure',
        '• Droit des mineurs, contestation et reconnaissance de paternité, filiation, autorité parentale',
      ],
    },
    {
      name: 'Droit pénal',
      subcategories: [
        '• Droit pénal des affaires: fraude fiscale, abs, prises illégales d’intérêts',
        '• Assistance pour des délits (vols, usage de stupéfiants, abus de faiblesse, faux…) et crimes',
        '• Assistance lors d’une garde à vue et devant le juge',
        '• Conseil et défense en Droit pénal général pour les auteurs et victimes',
        '• Représentation devant tribunal de police, tribunal correctionnel, cour d’assises…',
      ],
    },
    {
      name: 'Droit immobilier',
      subcategories: [
        '• Baux d’habitation: rédaction contrats bail locatif, recouvrement, expulsion, congé …',
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(category);
    }
  };

  const formatSubcategory = (subcategory) => {
    const parts = subcategory.split(':');
    if (parts.length === 2) {
      const textBeforeColon = parts[0].substring(2); // Sélectionne du 3e caractère jusqu'au caractère ":"
      return (
        <span>
          • <span className="souligne">{textBeforeColon}</span>: {parts[1]}
        </span>
      );
    } else {
      return subcategory;
    }
  };

  return (
    <div className="prestations">
      <h3 className="t_prestations">Prestations</h3>
      <p className="p_prestations">
        <ul>
          {categories.map((category, index) => (
            <li key={index} className='cat'>
              <button
                className={`category-button ${
                  selectedCategory === category.name ? 'active' : ''
                }`}
                onClick={() => handleCategorySelect(category.name)}
              >
                {category.name}
              </button>
              {selectedCategory === category.name && (
                <ul className="subcategories">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>{formatSubcategory(subcategory)}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default Prestations;

/* Droit des personnes :
Droit de la famille
Responsabilité civile
Droit des mineurs

Droit pénal :
Droit pénal général
Droit pénal des affaires

Droit de la famille, des personnes et de leur patrimoine
- Etat civil : mariage, pacs, procédures en changement de nom et prénom
- Divorces pour faute, divorces amiables par consentement mutuel …
- Procédures en responsabilité civile : indemnisation pour faute, dommages-intérêts
- Droit des mineurs, paternité, filiation, autorité parentale, adoption
- Pension alimentaire, prestation compensatoire : calcul, revalorisation
- Divorce : consentement mutuel, altération lien conjugal, faute, procédure
- Droit des mineurs, contestation et reconnaissance de paternité, filiation, autorité parentale

Droit pénal
- Droit pénal des affaires : fraude fiscale, abs, prises illégales d’intérêts
- Assistance pour des délits (vols, usage de stupéfiants, abus de faiblesse, faux…) et crimes
- Assistance lors d’une garde à vue et devant le juge
- Conseil et défense en Droit pénal général pour les auteurs et victimes
- Représentation devant tribunal de police, tribunal correctionnel, cour d’assises…

Droit immobilier
- Baux d’habitation : rédaction contrats bail locatif, recouvrement, expulsion, congé … */