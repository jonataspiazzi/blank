import React, { Component } from 'react';
import LoadSnapshot from './loadSnapshot';
import SaveSnapshot from './saveSnapshot';
import PlayerSelector from './playerSelector';
import EnableGameRender from './enableGameRender';
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
      snapshotName: gameStateVM.snapshotName,
      playerList: gameStateVM.playerList,
      player1: gameStateVM.player1,
      player2: gameStateVM.player2,
      enableGameRender: gameStateVM.enableGameRender
    };
  }

  onGameStateChanged(newGameState, propChanged) {
    this.setState({
      snapshotList: newGameState.snapshotList,
      selectedSnapshot: newGameState.selectedSnapshot,
      snapshotName: newGameState.snapshotName,
      playerList: newGameState.playerList,
      player1: newGameState.player1,
      player2: newGameState.player2,
      enableGameRender: newGameState.enableGameRender
    });
  }

  render() {
    return (
      <aside className="form">
        <LoadSnapshot
          snapshotList={this.state.snapshotList}
          selectedSnapshot={this.state.selectedSnapshot} />

        <SaveSnapshot
          name={this.state.snapshotName} />
        
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

        <EnableGameRender
          value={this.state.enableGameRender} />

        <ResetRun />
        <GameInfo />
      </aside>
    );
  }
}
