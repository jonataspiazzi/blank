import Component from './component';

class GridInfoComponent extends Component {
  constructor() {
    super();
  }

  load() {
    super.loadComponentPart('isGameOn');
    super.loadComponentPart('currentPlayer');
    super.loadComponentPart('roundCount');
    super.loadComponentPart('isGameEnded');
    super.loadComponentPart('lastWinner');
  }

  setIsGameOn(value) {
    this.isGameOn.innerHTML = value;
  }

  setCurrentPlayer(value) {
    let currentPlayer;

    switch(value){
      case 1: currentPlayer = 'Red'; break;
      case 2: currentPlayer = 'Blue'; break;
      default: currentPlayer = '';
    }

    console.log('new current player ', currentPlayer);

    this.currentPlayer.innerHTML = currentPlayer;
  }

  setRoundCount(value) {
    this.setRoundCount.innerHTML = value;
  }

  setIsGameEnded(value) {
    this.isGameEnded.innerHTML = value;
  }

  setLastWinner(value) {
    this.lastWinner.innerHTML = value;
  }
}

export default GridInfoComponent;
