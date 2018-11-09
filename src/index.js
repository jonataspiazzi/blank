import './index.scss';
import Board from './gameInterface/board';

const onLoad = () => {
  const board = new Board();

  fetch('http://127.0.0.1:9001/api/snapshots')
    .then(result => {
      result.json().then(data => {
        board.render(data['simple']);
      });
    });
}

document.addEventListener('DOMContentLoaded', onLoad);
