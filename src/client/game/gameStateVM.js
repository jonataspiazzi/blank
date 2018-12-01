import { playerCollection } from './config';
import { EventEmitter } from 'events';

const gameStateVMEvent = new EventEmitter();

class GameStateVM {
  constructor() {
    this.snapshotList = [];
    this.selectedSnapshot = null;
    this.playerList = [...playerCollection];
    this.player1 = null;
    this.player2 = null;
  }

  addChangedListener(callback) {
    gameStateVMEvent.addListener('changed', callback);
  }

  removeChangedListener(callback) {
    gameStateVMEvent.removeListener('changed', callback);
  }

  async loadSnapshotList() {
    
  }

  setSnapshotList(snapshotList) {
    this.snapshotList = snapshotList;
    gameStateVMEvent.emit('changed', this, 'snapshotList');
  }

  setSelectedSnapshot(snapshot) {
    this.selectedSnapshot = snapshot;
    gameStateVMEvent.emit('changed', this, 'selectedSnapshot');
  }

  setPlayerList(playerList) {
    this.playerList = playerList;
    gameStateVMEvent.emit('changed', this, 'playerList');
  }

  setPlayer1(player) {
    this.player1 = player;
    gameStateVMEvent.emit('changed', this, 'player1');
  }

  setPlayer2(player) {
    this.player2 = player;
    gameStateVMEvent.emit('changed', this, 'player2');
  }
}

const gameStateVM = new GameStateVM();

export const gameStateVM;
