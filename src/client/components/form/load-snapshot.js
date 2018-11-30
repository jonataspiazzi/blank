import React, { Component } from 'react';

class LoadSnapshot extends Component {
  render() {
    return (
      <div className="field-group">
        <label>Load a snapshot</label>
        <div className="inline-group">
          <select id="snapshot" name="loadSnapshot">
            <option>loading...</option>
          </select>
          <input type="button" value="Apply" id="applySnapshotButton" />
        </div>
      </div>
    );
  }
}

export default LoadSnapshot;
