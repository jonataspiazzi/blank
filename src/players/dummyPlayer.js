import Player from './../core/player';

class DummyPlayer extends Player {
  constructor() {
    super();
    this.name = 'Dummy AI';
  }

  makeAMove(boardData, piece) {
    return new Promise((resolve, reject) => {
      for (let y = 0; y < boardData.length; y++) {
        for (let x = 0; x < boardData.length; x++) {
          if (boardData[y][x] !== 0) continue;
  
          setTimeout(() => resolve({ x, y }), 500);
        }
      }

      reject('board alread full');
    });
  }
}

export default DummyPlayer;
