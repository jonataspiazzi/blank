import Player from './../core/player';
import board from './../ui/board';

class HumanPlayer extends Player {
  constructor(name) {
    super();
    this.name = name;
  }

  async makeAMove(boardData, piece) {
    const canvas = document.getElementById('board');
    
    return await new Promise((resolve, reject) => {
      const onClick = (e) => {
        canvas.removeEventListener('click', onClick);

        const x = Math.trunc(e.offsetX / board.squareSize);
        const y = Math.trunc(e.offsetY / board.squareSize);

        resolve({ x, y });
      }

      canvas.addEventListener('click', onClick);
    });
  }
}

export default HumanPlayer;
