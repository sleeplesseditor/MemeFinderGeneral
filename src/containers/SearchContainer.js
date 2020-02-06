import React from 'react';
import './SearchContainer.scss';

function SearchContainer (props) {
    return (
        <div className="search__container">
            <div className="search__input__container">
                <input
                    className="search__input"
                    onChange={(event) => props.searchMemes(event)}
                    type="text"
                    placeholder="Search Memes..."
                >
                </input>
            </div>
        </div>
    )
}

export default SearchContainer;