global._babelPolyfill = false;
import 'babel-polyfill';
import './index.scss';
import board from './ui/board';
import form from './ui/form';
import HumanPlayer from './players/humanPlayer';
import game from './core/game';

const index = () => {
  console.log('link5 inteligence lab was started');
  form.load();
  board.render([]);
}

document.addEventListener('DOMContentLoaded', index);

export default index;
