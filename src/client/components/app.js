import React, { Component, Fragment } from 'react';
import Board from './board';
import Form from './form';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Board />
        <Form />
      </Fragment>
    );
  }
}

export default App;
