import React, { Component, Fragment } from 'react';
import Board from './board';
import Form from './form';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Board />
        <Form />
      </Fragment>
    );
  }
}
