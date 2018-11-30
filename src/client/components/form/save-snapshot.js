import React, { Component } from 'react';

class SaveSnapshot extends Component {
  render() {
    return (
      <div className="field-group">
        <label>Save a snapshot</label>
        <div className="inline-group">
          <input type="text" placeholder="snapshot name" id="newSnapshotName" />
          <input type="button" value="Save" id="saveSnapshotButton" />
        </div>
      </div>
    );
  }
}

export default SaveSnapshot;
