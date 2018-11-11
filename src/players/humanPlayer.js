import Player from './../core/player';
import board from './../ui/board';
import { squareSize } from './../core/gameConfig';

class HumanPlayer extends Player {
  constructor() {
    super();
    this.name = 'Human Player';
  }

  async makeAMove(boardData, piece) {
    const canvas = document.getElementById('board');
    
    return await new Promise((resolve, reject) => {
      const onClick = (e) => {
        canvas.removeEventListener('click', onClick);

        const x = Math.trunc(e.offsetX / squareSize);
        const y = Math.trunc(e.offsetY / squareSize);

        resolve({ x, y });
      }

      canvas.addEventListener('click', onClick);
    });
  }
}

export default HumanPlayer;
