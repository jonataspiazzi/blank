import './index.scss';
import Board from './gameInterface/board';

const onLoad = () => {
  const board = new Board();

  const a = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,1],
    [0,2,2,0]
  ];

  board.render(a);
};

document.addEventListener('DOMContentLoaded', onLoad);
