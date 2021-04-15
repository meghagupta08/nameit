import React from 'react';
import './NameCard.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestName }) => {
    debugger;
    return (
        <a
            target="_blank"
            href={`${nameCheapUrl}${suggestName}`}
            rel="noreferrer"
            className="card-link"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestName}</p>
            </div>
        </a>
    );
};

export default NameCard;
