import React, { Component } from 'react';
import CharacterDetail from './detail';
import CharacterEdit from './edit';

class CharacterWrap extends Component {
  onSave() {
    if (this.props.onSave) {
      this.props.onSave();
    }
  }

  render() {
    switch(this.props.action) {
      case 'read':
        return (<CharacterDetail selected={this.props.selected} />);
      case 'create':
      case 'update':
        return (<CharacterEdit selected={this.props.selected} onSave={()=> this.onSave()} />);
      default:
        return (<div></div>);
    }
  }
}

export default CharacterWrap;
