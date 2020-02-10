import React from 'react';
import MemeCard from '../components/MemeCard/MemeCard';
import './ResultsContainer.scss';

interface ResultsProps {
    memesArray: MemeArray[],
}

interface MemeArray {
    id: string,
    name: string,
    url: string
}

function ResultsContainer(props: ResultsProps) {
    return (
        <div className="results__container">
            {props.memesArray.map(meme => {
                return <MemeCard key={meme.id} memeObject={meme}/>
            })}
        </div>
    )
}

export default ResultsContainer;