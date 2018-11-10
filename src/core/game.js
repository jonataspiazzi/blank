import HumanPlayer from './../players/humanPlayer';
import BoardHelper from './BoardHelper';
import board from './../ui/board';

class Game {
  constructor() {
    this.enableVisualBoard = true;
    this.reset();
  }

  reset() {
    this.player1 = new HumanPlayer('Jhon');
    this.player2 = new HumanPlayer('Jhoane');
    this.boardData = BoardHelper.createBoarData(board.dataWidth, board.dataHeight);
  }

  async start() {
    let currentPiece = 1;
    let currentPlayer = this.player1;

    while (!this.isEnded()) {
      const move = await currentPlayer.makeAMove(this.boardData, currentPiece);

      console.log('piece ', currentPiece);
      console.log('move ', move);
      console.log('player', currentPlayer);

      if (currentPiece === 1) {
        currentPiece = 2;
        currentPlayer = this.player2;
      }
      else {
        currentPiece = 1;
        currentPlayer = this.player1;
      }
    }
  }

  isEnded() {
    this.isEndedCount = (this.isEndedCount || 0) + 1;
    return this.isEndedCount > 10;
  }
}

const game = new Game();

export default game;
