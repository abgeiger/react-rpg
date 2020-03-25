import React, { Component } from 'react';
import Character from './components/CharacterSheet';

export class App extends Component {
  state = {
    characters: [
      {
        id: 1,
        name: 'Dave',
        bio: "He's a barbarian. He fights monsters and brigands. He has a magic sword.",
        stats: {
          strength: 6,
          speed: 5,
          mind: 3,
          spirit: 5,
        },
      },
    ],
}

  render() {
    return (
      <div>
        <Character character={this.state.characters[0]} />
      </div>
    )
  }
}

export default App;