import React, { Component } from 'react';
import Input from '../input';

class CharacterEdit extends Component {
  constructor(props) {
    super(props);
  }

  onSave() {
    if (this.props.onSave) {
      this.props.onSave();
    }
  }

  render() {
    return (
      <div>
        <p>Id: {this.props.selected.id}</p>
        <p>First Name: <Input model={this.props.selected} name='firstName' /></p>
        <p>Family Name: <Input model={this.props.selected} name='lastName' /></p>
        <p>Artist: <Input model={this.props.selected} name='artist' /></p>
        <p>Hair: <Input model={this.props.selected} name='hair' /></p>
        <p>Sex: <Input model={this.props.selected} name='sex' /></p>

        <p><input type="button" value="Save" onClick={() => this.onSave()} /></p>
      </div>
    );
  }
}

export default CharacterEdit;
