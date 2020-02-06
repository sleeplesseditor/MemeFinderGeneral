import React from 'react';
import MemeCard from '../components/MemeCard/MemeCard';
import './ResultsContainer.scss';

function ResultsContainer(props) {
    return (
        <div className="results__container">
            {props.memesArray.map(meme => {
                return <MemeCard key={meme.id} memeObject={meme}/>
            })}
        </div>
    )
}

export default ResultsContainer;