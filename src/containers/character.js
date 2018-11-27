import React, { Component, Fragment } from 'react';
import CharacterList from '../components/character/list';
import CharacterWrap from '../components/character/wrap';

class CharacterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: null,
      selection: {},
      characters: []
    };

    this.loadCharacters();
  }

  async loadCharacters() {
    var result = await fetch('http://127.0.0.1:9001/api/characters');
    var characters = await result.json();

    this.setState({ characters });
  }

  onAction(action, selected) {
    this.setState({ action, selected });
  }

  async onSave() {
    const uri = this.state.selected.id
      ? `http://127.0.0.1:9001/api/characters/${this.state.selected.id}`
      : 'http://127.0.0.1:9001/api/characters';

    const req = {
      method: this.state.selected.id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.selected)
    };

    await fetch(uri, req);
    await this.loadCharacters();
    
    this.setState({
      action: null,
      selected: null
    });
  }

  render() {
    return (
      <Fragment>
        <CharacterList
          characters={this.state.characters}
          onAction={(action, character) => this.onAction(action, character)} />
        <CharacterWrap
          action={this.state.action}
          selected={this.state.selected}
          onSave={() => this.onSave()} />
      </Fragment>
    );
  }
}

export default CharacterContainer;
