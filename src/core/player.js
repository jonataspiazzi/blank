
class Player {
  constructor() {
    this.name = 'player';
  }

  async makeAMove(boardData, piece) {
    throw 'This method need\'s to be overrided in a derived class';
  }
}

export default Player;
