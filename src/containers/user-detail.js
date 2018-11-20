import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDelail extends Component {
  render() {
    return (
      <div>
        <p>Id: {this.props.user.id}</p>
        <p>User: {this.props.user.first} {this.props.user.last}</p>
        <p>Phone: {this.props.user.phone}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userActive.user
  }
};

export default connect(mapStateToProps)(UserDelail);
