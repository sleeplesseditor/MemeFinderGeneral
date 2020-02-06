import React, { Component } from 'react';
import './MemeCard.scss';

class MemeCard extends Component {
    render() {
        return (
            <div className="meme-card">
                <h1 className="meme-card__heading">
                    {this.props.memeObject.name}
                </h1>
                <img 
                    className="meme-card__img"
                    alt="meme" 
                    src={this.props.memeObject.url}
                ></img>
            </div>
        )
    }
}

export default MemeCard;