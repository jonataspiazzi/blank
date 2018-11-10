import { silver, silverRed, silverBlue, darkGrafity } from './../index.scss';

class Board {
  constructor() {
    const canvas = document.getElementById('board');
    this.width = canvas.width = 540;
    this.height = canvas.height = 540;
    this.ctx = canvas.getContext('2d');
  }

  render(boardData) {
    this.clear();
    this.drawGrid(30);
    this.drawPieces(boardData, 30);
  }

  clear() {
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fillStyle = darkGrafity;
    this.ctx.fill();
  }

  drawGrid(size) {
    this.ctx.strokeStyle = silver;
    
    for (let x = 1; x < this.width / size; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * size, 0);
      this.ctx.lineTo(x * size, this.height);
      this.ctx.stroke();
    }

    for (let y = 1; y < this.height / size; y++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y * size);
      this.ctx.lineTo(this.width, y * size);
      this.ctx.stroke();
    }
  }

  drawPieces(boardData, size) {
    for (let y = 0; y < boardData.length; y++) {
      const row = boardData[y];
      
      if (!row || !row.length) continue; // prevent crash for empty rows.

      for (let x = 0; x < row.length; x++) {
        const piece = row[x];

        if (!piece) continue;

        this.ctx.beginPath();
        this.ctx.arc((x + 1) * size - size / 2, (y + 1) * size - size / 2, size * .3, 0, Math.PI * 2);

        if (piece == 1) {
          this.ctx.strokeStyle = silverRed;
          this.ctx.fillStyle = silverRed;
        }
        else if (piece == 2) {
          this.ctx.fillStyle = silverBlue;
          this.ctx.strokeStyle = silverBlue;
        }
        else {
          this.ctx.fillStyle = 'white';
          this.ctx.strokeStyle = 'white';
        }
        
        this.ctx.fill();
        this.ctx.stroke();
      }
    }
  }
}

export default Board;
