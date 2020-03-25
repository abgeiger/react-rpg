import React, { Component } from 'react';

export class Character extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.character.name}</h3>
                <p>{this.props.character.bio}</p>
            </div>
        )
    }
}

export default Character;