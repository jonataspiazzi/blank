import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <p>Hello World!</p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//const index = () => {
//  console.log('link5 inteligence lab was started');
//  form.load();
//  board.clear();
//  game.reset();
//}
//
//document.addEventListener('DOMContentLoaded', index);
//
//export default index;

//global._babelPolyfill = false;
//import 'babel-polyfill';
//import './index.scss';
//import board from './ui/board';
//import form from './ui/form';
//import game from './core/game';