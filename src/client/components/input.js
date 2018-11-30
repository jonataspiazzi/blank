import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.getValueFromProps(props)
    }
  }

  getValueFromProps(props) {
    let value = props.model[props.name];

    if (!value) {
      value = '';
      props.model[props.name] = value;
    }

    return value;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: this.getValueFromProps(newProps)
    });
  }

  onChange(event) {
    this.props.model[this.props.name] = event.target.value;
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        value={this.state.value}
        onChange={e => this.onChange(e)}
      ></input>
    );
  }
}

export default Input;
