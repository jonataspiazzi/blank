
class BoardHelper {
  static cropSnapshot(boardData) {
    if (boardData.length === 0) return;
    if (boardData[0].length === 0) return;
    
    let minY = boardData.length;
    let minX = boardData[0].length;
    let maxY = 0;
    let maxX = 0;

    for (let y = 0; y < boardData.length; y++) {
      for (let x = 0; x < boardData[y].length; x++) {
        if (!boardData[y][x]) continue;

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
        crop[y][x] = boardData[y + minY][x + minX];
      }
    }

    return crop;
  }

  static applySnapshot(boardData, snapshot) {
    const startY = Math.trunc((boardData.length - snapshot.length) / 2);
    const startX = Math.trunc((boardData[0].length - snapshot[0].length) / 2);

    for (let y = 0; y < snapshot.length; y++) {
      for (let x = 0; x < snapshot[y].length; x++) {
        boardData[y + startY][x + startX] = snapshot[y][x];
      }
    }
  }

  static createBoarData(width, height) {
    const boardData = [];

    for (let y = 0; y < height; y++) {
      boardData[y] = [];
      for (let x = 0; x < width; x++) {
        boardData[y][x] = 0;
      }
    }

    return boardData;
  }
}

export default BoardHelper;
