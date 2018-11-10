import BoardHelper from './../core/BoardHelper';
import SnapshotServer from './../service/snapshotServer';
import board from './board';

class Form {
  constructor() {
    document.addEventListener('DOMContentLoaded', this.load.bind(this));
    this.snapshots = {};
  }

  async load() {
    this.loadComponent('snapshotList');
    this.loadComponent('applySnapshotListButton', this.applySnapshotListOnClick.bind(this));
    this.loadComponent('newSnapshotName');
    this.loadComponent('addSnapshotButton', this.addSnapshotOnClick.bind(this));

    await this.loadSnapshotList();
  }

  loadComponent(name, onClick) {
    this[name] = document.getElementById(name);

    if (typeof onClick === 'function') {
      this[name].addEventListener('click', onClick);
    }
  }

  async loadSnapshotList() {
    const server = new SnapshotServer();
    this.snapshots = await server.getAll();
    
    for (let i = 0; i < this.snapshotList.options.length; i++) {
      this.snapshotList.options[i] = null;
    }

    let c = 0;
    for (let name in this.snapshots) {
      const option = document.createElement('option');

      option.value = name;
      option.innerHTML = name;

      this.snapshotList.options[c++] = option;
    }
  }
  
  applySnapshotListOnClick() {
    const boardData = BoardHelper.createBoarData(board.dataWidth, board.dataHeight);
    const selectedName = this.snapshotList.options[this.snapshotList.options.selectedIndex].value;
    const snapshotData = this.snapshots[selectedName];

    BoardHelper.applySnapshot(boardData, snapshotData);

    board.render(boardData);
  }

  addSnapshotOnClick() {
    console.log('addSnapshotOnClick');
  }
}

const form = new Form();

export default form;
