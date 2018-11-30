import React, { Component } from "react";
import CharacterContainer from '../containers/character';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <CharacterContainer />
      </section>
    );
  }
}

export default App;
