import React from 'react';
import '../Header/Header.css';
import NameCard from '../NameCards/NameCard';

const ResultsContainer = ({ suggestedNames }) => {
    debugger;
    const suggestedJSX = suggestedNames.map((suggestedName) => {
        return (
            <NameCard
                key={suggestedNames.indexOf(suggestedName)}
                suggestName={suggestedName}
            />
        );
    });
    return <div className="results-container">{suggestedJSX}</div>;
};

export default ResultsContainer;
