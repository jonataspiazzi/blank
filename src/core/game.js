import HumanPlayer from './../players/humanPlayer';
import BoardHelper from './BoardHelper';
import board from './../ui/board';
import { firstPieceToPlay, gameDataWidth, gameDataHeight } from './gameConfig';

class Game {
  constructor() {
    this.enableVisualBoard = true;
    this.reset();
  }

  reset() {
    this.player1 = new HumanPlayer('Jhon');
    this.player2 = new HumanPlayer('Jhoane');
    this.boardData = BoardHelper.createBoarData(gameDataWidth, gameDataHeight);
  }

  setBoardState(boardData) {
    this.boardData = boardData;

    const counts = BoardHelper.countPieces(this.boardData);

    if (counts.piece1 === counts.piece2) {
      this.setCurrentPiece(firstPieceToPlay);
    }
    else {
      this.setCurrentPiece(counts.piece1 > counts.piece2 ? 2 : 1);
    }

    if (this.enableVisualBoard) {
      board.render(this.boardData);
    }
  }

  setCurrentPiece(piece) {
    this.currentPiece = piece;

    this.currentPlayer = this.currentPiece === 1
      ? this.player1
      : this.player2;
  }

  toggleCurrentPiece() {
    this.setCurrentPiece(this.currentPiece === 1 ? 2 : 1);
  }

  async start() {
    board.render(this.boardData);
    this.setCurrentPiece(firstPieceToPlay);

    while (!this.isEnded()) {
      const move = await this.currentPlayer.makeAMove(this.boardData, this.currentPiece);

      this.boardData[move.y][move.x] = this.currentPiece;

      board.render(this.boardData);
      this.toggleCurrentPiece();
    }
  }

  isEnded() {
    this.isEndedCount = (this.isEndedCount || 0) + 1;
    return this.isEndedCount > 10;
  }
}

const game = new Game();

export default game;
