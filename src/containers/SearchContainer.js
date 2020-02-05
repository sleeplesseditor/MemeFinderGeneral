import React, { Component } from 'react';

class SearchContainer extends Component {

    render() {
        return (
            <div>
                <h1>Meme Searcher</h1>
                <div>
                    <input
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