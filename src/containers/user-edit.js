import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveUser } from '../actions';
import Input from '../components/input';

class UserEdit extends Component {

  onChange(event) {
    const input = event.target;

    this.props.user[input.name] = input.value;
  }

  render() {
    return (
      <div>
        <p>Id: {this.props.user.id}</p>
        <p>First Name: <Input model={this.props.user} name='first' /></p>
        <p>Last Name: <Input model={this.props.user} name='last' /></p>
        <p>Phone: <Input model={this.props.user} name='phone' /></p>
        <p><input type="button" value="Save" onClick={() => this.props.saveUser(this.props.user)} /></p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userActive.user
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ saveUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
