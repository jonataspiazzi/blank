import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React'
    };

    this.changeName();
  }

  async getName() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Babel');
      }, 1000);
    });
  }

  async changeName() {
    const name = await this.getName();
    this.setState({ 
      name: `${this.state.name} and ${name}`
    });
  }

  render() {
    return (<p>Hello From {this.state.name}!</p>);
  }
}

export default App;
