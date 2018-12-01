import React, { Component } from 'react';

export default class Visibility extends Component {
  render() {
    return (
      <div className="field-group checkbox">
        <input type="checkbox" />
        <label title="Option to run the game without displaing in the left board (to performance enhancement)">Disable visual game <small>(performance enhancement)</small></label>
      </div>
    );
  }
}
