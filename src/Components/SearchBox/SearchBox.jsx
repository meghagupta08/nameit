import React from 'react';
import '../SearchBox/SearchBox.css';
const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="search-container">
            <input
                placeholder="Type words"
                className="search-input"
                onChange={(event) => {
                    handleInputChange(event.target.value);
                }}
            />
        </div>
    );
};

export default SearchBox;
