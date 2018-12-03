export default class Player {
  constructor() {
    this.name = this.constructor.name;
  }

  async makeAMove(boardData, piece) {
    throw 'This method need\'s to be overrided in a derived class';
  }
}
