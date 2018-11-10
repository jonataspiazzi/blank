global._babelPolyfill = false;
import 'babel-polyfill';
import './index.scss';
import board from './ui/board';
import form from './ui/form';

const index = () => {
  console.log('link5 inteligence lab was started');
  board.render([]);
}

document.addEventListener('DOMContentLoaded', index);

export default index;
