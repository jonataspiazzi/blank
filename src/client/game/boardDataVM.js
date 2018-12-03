import { EventEmitter } from 'events';
import { gameDataWidth, gameDataHeight } from './config';

const boardDataVMEvent = new EventEmitter();

class BoardDataVM {
  constructor() {
    this.boardData = [];
  }

  addChangedListener(callback) {
    boardDataVMEvent.addListener('changed', callback);
  }

  removeChangedListener(callback) {
    boardDataVMEvent.removeListener('changed', callback);
  }

  cropSnapshot() {
    if (this.boardData.length === 0) return;
    if (this.boardData[0].length === 0) return;

    let minY = this.boardData.length;
    let minX = this.boardData[0].length;
    let maxY = 0;
    let maxX = 0;

    for (let y = 0; y < this.boardData.length; y++) {
      for (let x = 0; x < this.boardData[y].length; x++) {
        if (!this.boardData[y][x]) continue;

        if (y < minY) minY = y;
        if (x < minX) minX = x;
        if (y > maxY) maxY = y;
        if (x > maxX) maxX = x;
      }
    }

    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;
    const crop = [];

    for (let y = 0; y < cropHeight; y++) {
      crop[y] = [];

      for (let x = 0; x < cropWidth; x++) {
        crop[y][x] = this.boardData[y + minY][x + minX];
      }
    }

    return crop;
  }

  applySnapshot(snapshot) {
    this.clearBoardData();

    const startY = Math.trunc((this.boardData.length - snapshot.length) / 2);
    const startX = Math.trunc((this.boardData[0].length - snapshot[0].length) / 2);

    for (let y = 0; y < snapshot.length; y++) {
      for (let x = 0; x < snapshot[y].length; x++) {
        this.boardData[y + startY][x + startX] = snapshot[y][x];
      }
    }

    boardDataVMEvent.emit('changed', this.boardData);
  }

  clearBoardData() {
    this.boardData = [];

    for (let y = 0; y < gameDataHeight; y++) {
      this.boardData[y] = [];
      for (let x = 0; x < gameDataWidth; x++) {
        this.boardData[y][x] = 0;
      }
    }
  }

  countPieces() {
    let piece1 = 0;
    let piece2 = 0;

    for (let y = 0; y < this.boardData.width; y++) {
      for (let x = 0; x < this.boardData[y].width; x++) {
        if (this.boardData[y][x] === 1) piece1++;
        else if (this.boardData[y][x] === 2) piece2++;
      }
    }

    return { piece1, piece2 };
  }
}

export const boardDataVM = new BoardDataVM();
