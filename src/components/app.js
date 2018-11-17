import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React, Babel'
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
    const result = await fetch('http://127.0.0.1:9001/api/about');
    const data = await result.json();

    this.setState({ 
      name: `${this.state.name} and ${data.name}`
    });
  }

  render() {
    return (<p>Hello From {this.state.name}!</p>);
  }
}

export default App;
