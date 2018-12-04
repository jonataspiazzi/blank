import { EventEmitter } from 'events';
import { playerCollection } from './config';
import { boardDataVM } from './boardDataVM';
import SnapshotService from '../service/snapshotService';

const gameStateVMEvent = new EventEmitter();

class GameStateVM {
  constructor() {
    this.snapshotList = [{ name: 'loading...', boardData: [] }];
    this.selectedSnapshot = this.snapshotList[0];
    this.snapshotName = '';
    this.playerList = [{ name: 'loading...', constructor: null }];
    this.player1 = this.playerList[0];
    this.player2 = this.playerList[0];
    this.enableGameRender = true;

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
    const snapshots = await new SnapshotService().getAll();

    this.setSnapshotList(snapshots);
    this.setSelectedSnapshot(snapshots[0]);
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
    this.setPlayer(1, players[0]);
    this.setPlayer(2, players[0]);
  }

  setSnapshotList(snapshotList) {
    this.snapshotList = snapshotList;
    gameStateVMEvent.emit('changed', this, 'snapshotList');
  }

  setSelectedSnapshot(snapshot) {
    this.selectedSnapshot = snapshot;
    gameStateVMEvent.emit('changed', this, 'selectedSnapshot');
  }

  applySelectedSnapshot() {
    boardDataVM.applySnapshot(this.selectedSnapshot.boardData);
  }

  setSnapshotName(name) {
    this.snapshotName = name;
    gameStateVMEvent.emit('changed', this, 'snapshotName');
  }

  async saveSnapshot() {
    const service = new SnapshotService();
    const boardData = boardDataVM.cropSnapshot();
    const name = this.snapshotName;

    await service.save(name, boardData);
    await this.loadSnapshotList();

    const item = this.snapshotList.filter(s => s.name == name)[0];
    this.setSelectedSnapshot(item);
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

  setEnableGameRender(state) {
    this.enableGameRender = state;
    gameStateVMEvent.emit('changed', this, 'enableGameRender');
  }
}

export const gameStateVM = new GameStateVM();
