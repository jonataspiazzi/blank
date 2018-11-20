import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser, readUser, updateUser, deleteUser } from '../actions';

class UserList extends Component {
  render() {
    return (
      <Fragment>
        <input type="button" value="Create New" onClick={() => this.props.createUser()} />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="size-12">Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user =>
              <tr key={`user-item-${user.id}`}>
                <td>{user.id}</td>
                <td>{user.first} {user.last}</td>
                <td>
                  <input type="button" value="Details" onClick={() => this.props.readUser(user)} />
                </td>
                <td>
                  <input type="button" value="Edit" onClick={() => this.props.updateUser(user)} />
                </td>
                <td>
                  <input type="button" value="Delete" onClick={() => this.props.deleteUser(user)} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createUser, readUser, updateUser, deleteUser }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
