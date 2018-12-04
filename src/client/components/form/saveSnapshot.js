import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { gameStateVM } from '../../game/gameStateVM';

class SaveSnapshot extends Component {
  constructor(props) {
    super(props);
  }

  onNameChanged(event) {
    gameStateVM.setSnapshotName(event.target.value);
  }

  onSave() {
    gameStateVM.saveSnapshot();
  }

  render() {
    return (
      <div className="field-group">
        <label>Save a snapshot</label>
        <div className="inline-group">
          <input type="text" placeholder="snapshot name" value={this.props.name} onChange={this.onNameChanged.bind(this)} />
          <input type="button" value="Save" onClick={this.onSave.bind(this)} />
        </div>
      </div>
    );
  }
}

SaveSnapshot.propTypes = {
  name: PropTypes.string
};

export default SaveSnapshot;
