
class BoardDataHelper {
  static getSize(boardData) {
    if (!(boardData instanceof Array)) {
      return {};
    }

    const height = boardData.height;
    let width = 0;
    
    for (var y = 0; y < height; y++) {
      const row = boardData[y];

      if (!(row instanceof Array)) {
        return {};
      }

      const currentWidth = boardData[y].length;

      if (y === 0) {
        width = currentWidth;
      }

      if (width != currentWidth) {
        return {};
      }
    }
  }
  
  static forEach(boardData, callback) {
    if (typeof callback !== "function") {
      return;
    }

    if (!(boardData instanceof Array)) {
      return;
    }

    for (var y = 0; y < boardData.length; y++) {
      const row = boardData[y];

      if (!(row instanceof Array)) {
        continue;
      }

      for (var x = 0; x < row.length; x++) {
        callback(boardData[y][x], x, y);
      }
    }
  }

  static 
}

export default BoardDataHelper;
