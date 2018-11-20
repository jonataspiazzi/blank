import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions';

class UserList extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(user =>
          <li
            key={`user-item-${user.id}`}
            onClick={() => this.props.selectUser(user)}
          >
            {user.first} {user.last}
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
