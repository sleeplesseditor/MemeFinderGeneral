import React from 'react';
import './MemeCard.scss';

function MemeCard (props) {
    return (
        <div className="meme-card">
            <h1 className="meme-card__heading">
                {props.memeObject.name}
            </h1>
            <img 
                className="meme-card__img"
                alt="meme" 
                src={props.memeObject.url}
            ></img>
        </div>
    )
}

export default MemeCard;