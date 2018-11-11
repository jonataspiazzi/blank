import Component from './component';
import { playerCollection } from '../core/gameConfig';

class PlayerComponent extends Component {
  constructor() {
    super();
  }

  load() {
    super.loadComponentPart('redPlayer');
    super.loadComponentPart('bluePlayer');

    this.loadPlayers();
  }

  loadPlayers() {
    super.clearSelect(this.redPlayer);
    super.clearSelect(this.bluePlayer);
    
    for (let i = 0; i < playerCollection.length; i++) {
      const player = new playerCollection[i]();
      super.addOption(this.redPlayer, i, player.name);
      super.addOption(this.bluePlayer, i, player.name);
    }

    super.setSelectOption(this.redPlayer, 0);
    super.setSelectOption(this.bluePlayer, 1);
  }

  getRedPlayer() {
    const key = super.getSelectedKey(this.redPlayer);

    return new playerCollection[key]();
  }

  getBluePlayer() {
    const key = super.getSelectedKey(this.bluePlayer);

    return new playerCollection[key]();
  }
}

export default PlayerComponent;
