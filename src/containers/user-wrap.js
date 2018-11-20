import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDelail from './user-detail';
import UserEdit from './user-edit';

class UserWrap extends Component {
  render() {
    switch(this.props.action) {
      case 'read':
        return (<UserDelail />);
      case 'create':
      case 'update':
        return (<UserEdit />);
      default:
        return (<div></div>);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    action: state.userActive.action
  }
};

export default connect(mapStateToProps)(UserWrap);
