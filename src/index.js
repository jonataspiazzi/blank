global._babelPolyfill = false;
import './index.scss';
import Board from './gameInterface/board';
import BoardHelper from './core/BoardHelper';

const onLoad = () => {
  const board = new Board();
  
  BoardHelper.loadSnapshots().then(data => {
    const boardData = BoardHelper.createBoarData(18, 18);

    BoardHelper.applySnapshot(boardData, data['simple']);

    board.render(boardData);
  });
}

document.addEventListener('DOMContentLoaded', onLoad);
