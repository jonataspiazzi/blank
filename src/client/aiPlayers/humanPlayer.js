import Player from './player';
import { squareSize } from '../game/config';

export default class HumanPlayer extends Player {
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
