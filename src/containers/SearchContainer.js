import React, { Component } from 'react';
import './SearchContainer.scss';

class SearchContainer extends Component {

    render() {
        return (
            <div className="search__container">
                <div className="search__input__container">
                    <input
                        className="search__input"
                        onChange={(event) => this.props.searchMemes(event)}
                        type="text"
                        placeholder="Search Memes..."
                    >
                    </input>
                </div>
            </div>
        )
    }
}

export default SearchContainer;