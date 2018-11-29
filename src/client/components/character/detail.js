import React, { Component } from 'react';

class CharacterDetail extends Component {
  render() {
    return (
      <div>
        <p>Id: {this.props.selected.id}</p>
        <p>Name: {this.props.selected.firstName} {this.props.selected.lastName}</p>
        <p>Artist: {this.props.selected.artist}</p>
        <p>Hair Colour: {this.props.selected.hair}</p>
        <p>Sex: {this.props.selected.sex}</p>
      </div>
    );
  }
}

export default CharacterDetail;
