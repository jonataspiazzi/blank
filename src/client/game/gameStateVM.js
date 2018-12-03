import { playerCollection } from './config';
import { EventEmitter } from 'events';

const gameStateVMEvent = new EventEmitter();

class GameStateVM {
  constructor() {
    this.snapshotList = [{ name: 'loading...', boardData: [] }];
    this.selectedSnapshot = this.snapshotList[0];
    this.playerList = [{ name: 'loading...', constructor: null }];
    this.player1 = this.playerList[0];
    this.player2 = this.playerList[0];

    this.loadSnapshotList();
    this.loadPlayerList();
  }

  addChangedListener(callback) {
    gameStateVMEvent.addListener('changed', callback);
  }

  removeChangedListener(callback) {
    gameStateVMEvent.removeListener('changed', callback);
  }

  async loadSnapshotList() {
    const result = await fetch('http://127.0.0.1:9001/api/snapshots');
    const data = await result.json();
    const snapshots = [];

    for (var name in data) {
      snapshots.push({
        name: name,
        boardData: data[name]
      });
    }

    this.setSnapshotList(snapshots);
  }

  loadPlayerList() {
    const players = [];

    for (const item of playerCollection) {
      players.push({
        name: item.name,
        constructor: item
      });
    }

    this.setPlayerList(players);
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

  setPlayer(playerNumber, player) {
    const playerName = `player${playerNumber}`;
    this[`player${playerNumber}`] = player;
    gameStateVMEvent.emit('changed', this, playerName);
  }
}

export const gameStateVM = new GameStateVM();
