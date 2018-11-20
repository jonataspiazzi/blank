import React, { Component, Fragment } from "react";
import UserList from './user-list';
import UserDelailed from "./user-detailed";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h2>List</h2>
          <UserList />
        </div>
        <div>
          <h2>Item Details</h2>
          <UserDelailed />
        </div>
      </Fragment>
    );
  }
}

export default App;
