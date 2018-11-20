import React, { Component, Fragment } from "react";
import UserList from '../containers/user-list';
import UserWrap from '../containers/user-wrap';

class App extends Component {
  render() {
    return (
      
      <Fragment>
        <section>
          <h2>List</h2>
          <UserList />
        </section>
        <section>
          <h2>Item Details</h2>
          <UserWrap />
        </section>
      </Fragment>
    );
  }
}

export default App;
