import React, { Component } from 'react';
import LoadSnapshot from './load-snapshot';
import SaveSnapshot from './save-snapshot';
import PlayerSelector from './player-selector';

class Form extends Component {
  render() {
    return (
      <aside className="form">
        <LoadSnapshot />
        <SaveSnapshot />
        <PlayerSelector colour="Red" />
        <PlayerSelector colour="Blue" />
      </aside>
    );
  }
}

export default Form;
