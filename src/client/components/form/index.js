import React, { Component } from 'react';
import LoadSnapshot from './loadSnapshot';
import SaveSnapshot from './saveSnapshot';
import PlayerSelector from './playerSelector';
import Visibility from './visibility';
import ResetRun from './resetRun';
import GameInfo from './gameInfo';
import { gameStateVM } from '../../game/gameStateVM';

export default class Form extends Component {
  constructor(props) {
    super(props);
    
    gameStateVM.addChangedListener(this.onGameStateChanged.bind(this));

    this.state = {
      snapshotList: gameStateVM.snapshotList,
      selectedSnapshot: gameStateVM.selectedSnapshot,
      playerList: gameStateVM.playerList,
      player1: gameStateVM.player1,
      player2: gameStateVM.player2
    };
  }

  onGameStateChanged(newGameState, propChanged) {
    this.setState({
      snapshotList: newGameState.snapshotList,
      selectedSnapshot: newGameState.selectedSnapshot,
      playerList: newGameState.playerList,
      player1: newGameState.player1,
      player2: newGameState.player2
    });
  }

  render() {
    return (
      <aside className="form">
        <LoadSnapshot snapshotList={this.state.snapshotList} selectedSnapshot={this.state.selectedSnapshot} />
        <SaveSnapshot />
        
        <PlayerSelector
          colour="Red"
          playerNumber={1}
          selectedPlayer={this.state.player1}
          playerList={this.state.playerList} />

        <PlayerSelector
          colour="Blue"
          playerNumber={2}
          selectedPlayer={this.state.player2}
          playerList={this.state.playerList} />

        <Visibility />
        <ResetRun />
        <GameInfo />
      </aside>
    );
  }
}
