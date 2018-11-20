import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDelailed extends Component {
  render() {
    if (!this.props.user) {
      return (<p>Select a user...</p>);
    }
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
    user: state.userSelected
  }
};

export default connect(mapStateToProps)(UserDelailed);
