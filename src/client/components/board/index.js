import React, { Component } from 'react';
import { silver, silverRed, silverBlue, darkGrafity } from '../../index.scss';
import { boardDataVM } from '../../game/boardDataVM';
import { gameStateVM } from '../../game/gameStateVM';
import { gameDataWidth, squareSize, gameDataHeight } from '../../game/config';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.ctx = null;
    boardDataVM.addChangedListener(this.boardDataChanged.bind(this));
  }

  loadCanvas(canvas) {
    this.width = gameDataWidth * squareSize;
    this.height = gameDataHeight * squareSize;

    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d');

    this.boardDataChanged(boardDataVM.boardData);
  }
  
  boardDataChanged(boardData) {
    if (gameStateVM.enableGameRender) {
      this.boardData = boardData;
      this.clear();
      this.drawGrid();
      this.drawPieces();
    }
  }

  clear() {
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fillStyle = darkGrafity;
    this.ctx.fill();
  }

  drawGrid() {
    this.ctx.strokeStyle = silver;

    for (let x = 1; x < this.width / squareSize; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * squareSize, 0);
      this.ctx.lineTo(x * squareSize, this.height);
      this.ctx.stroke();
    }

    for (let y = 1; y < this.height / squareSize; y++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y * squareSize);
      this.ctx.lineTo(this.width, y * squareSize);
      this.ctx.stroke();
    }
  }

  drawPieces() {
    for (let y = 0; y < this.boardData.length; y++) {
      const row = this.boardData[y];

      if (!row || !row.length) continue; // prevent crash for empty rows.

      for (let x = 0; x < row.length; x++) {
        const piece = row[x];

        if (!piece) continue;

        this.ctx.beginPath();
        this.ctx.arc((x + 1) * squareSize - squareSize / 2, (y + 1) * squareSize - squareSize / 2, squareSize * 0.3, 0, Math.PI * 2);

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

  render() {
    return (
      <section className="game">
        <canvas ref={c => this.loadCanvas(c)} />
      </section>
    );
  }
}
