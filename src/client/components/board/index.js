import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <section className="game">
        <canvas id="board" />
      </section>
    );
  }
}

export default Board;
