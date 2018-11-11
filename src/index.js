global._babelPolyfill = false;
import 'babel-polyfill';
import './index.scss';
import board from './ui/board';
import form from './ui/form';
import game from './core/game';

const index = () => {
  console.log('link5 inteligence lab was started');
  form.load();
  board.clear();
  game.reset();
}

document.addEventListener('DOMContentLoaded', index);

export default index;
