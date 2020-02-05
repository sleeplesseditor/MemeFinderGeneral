import React, { Component } from 'react';
import MemeCard from '../components/MemeCard';

class ResultsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.memesArray.map(meme => {
                    return <MemeCard key={meme.id} memeObject={meme}/>
                })}
            </div>
        )
    }
}

export default ResultsContainer;