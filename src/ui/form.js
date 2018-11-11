import Componet from './component';
import SnapshotComponent from './snapshotComponent';
import PlayerComponent from './playerConponent';
import PerformanceComponent from './performanceComponent';
import GridInfoComponent from './gridInfoComponent';
import game from './../core/game';

class Form extends Componet {
  constructor() {
    super();
    this.snapshot = new SnapshotComponent();
    this.player = new PlayerComponent();
    this.performance = new PerformanceComponent();
    this.gridInfo = new GridInfoComponent();
  }

  load() {
    this.snapshot.load();
    this.player.load();
    this.performance.load();
    this.gridInfo.load();
    this.loadComponentPart('runButton', this.run.bind(this));
  }

  run() {
    game.player1 = this.player.getRedPlayer();
    game.player2 = this.player.getBluePlayer();
    game.start();
  }
}

const form = new Form();

export default form;
