import Componet from './component';
import SnapshotServer from './../service/snapshotServer';
import BoardHelper from './../core/BoardHelper';
import { gameDataWidth, gameDataHeight } from './../core/gameConfig';
import game from './../core/game';

class SnapshotComponent extends Componet {
  constructor() {
    super();
    this.snapshots = {};
  }

  load() {
    super.loadComponentPart('snapshot');
    super.loadComponentPart('applySnapshotButton', this.applySnapshot.bind(this));
    super.loadComponentPart('newSnapshotName');
    super.loadComponentPart('saveSnapshotButton', this.saveSnapshot.bind(this));

    this.loadSnapshots();
  }

  async loadSnapshots() {
    const server = new SnapshotServer();
    this.snapshots = await server.getAll();
    
    super.clearSelect(this.snapshot);

    for (let name in this.snapshots) {
      super.addOption(this.snapshot, name, name);
    }
  }

  applySnapshot() {
    const boardData = BoardHelper.createBoarData(gameDataWidth, gameDataHeight);
    const selectedName = super.getSelectedKey(this.snapshot);
    const snapshotData = this.snapshots[selectedName];

    BoardHelper.applySnapshot(boardData, snapshotData);

    game.setBoardState(boardData);
  }

  async saveSnapshot() {
    const server = new SnapshotServer();

    const name = this.newSnapshotName.value;
    this.newSnapshotName.value = '';
    const snapshot = BoardHelper.cropSnapshot(game.boardData);

    await server.save(name, snapshot);
    await this.loadSnapshots();

    super.setSelectOption(this.snapshot, name);
  }
}

export default SnapshotComponent;
