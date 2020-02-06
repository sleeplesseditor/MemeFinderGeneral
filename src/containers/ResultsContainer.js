import React, { Component } from 'react';
import MemeCard from '../components/MemeCard/MemeCard';
import './ResultsContainer.scss';

class ResultsContainer extends Component {
    render() {
        return (
            <div className="results__container">
                {this.props.memesArray.map(meme => {
                    return <MemeCard key={meme.id} memeObject={meme}/>
                })}
            </div>
        )
    }
}

export default ResultsContainer;