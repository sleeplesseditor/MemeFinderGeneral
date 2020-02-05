import React, { Component } from 'react';

class MemeCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.memeObject.name}</h1>
                <img alt="meme" src={this.props.memeObject.url}></img>
            </div>
        )
    }
}

export default MemeCard;