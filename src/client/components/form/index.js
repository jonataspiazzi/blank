import React, { Component } from 'react';
import LoadSnapshot from './loadSnapshot';
import SaveSnapshot from './saveSnapshot';
import PlayerSelector from './playerSelector';
import Visibility from './visibility';
import ResetRun from './resetRun';
import GameInfo from './gameInfo';

export default class Form extends Component {
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
