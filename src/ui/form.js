import Componet from './component';
import SnapshotComponent from './snapshotComponent';
import PlayerComponent from './playerConponent';


class Form extends Componet {
  constructor() {
    super();
    this.snapshot = new SnapshotComponent();
    this.player = new PlayerComponent();
  }

  load() {
    this.snapshot.load();
    this.player.load();
  }
}

const form = new Form();

export default form;
