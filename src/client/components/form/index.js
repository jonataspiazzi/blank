import React, { Component } from 'react';
import LoadSnapshot from './load-snapshot';
import SaveSnapshot from './save-snapshot';
import PlayerSelector from './player-selector';
import Visibility from './visibility';
import ResetRun from './reset-run';
import GameInfo from './gameInfo';

class Form extends Component {
  render() {
    return (
      <aside className="form">
        <LoadSnapshot />
        <SaveSnapshot />
        <PlayerSelector colour="Red" />
        <PlayerSelector colour="Blue" />
        <Visibility />
        <ResetRun />
        <GameInfo />
      </aside>
    );
  }
}

export default Form;
