import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    return (
      <section className="game">
        <canvas id="board" />
      </section>
    );
  }
}
