import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gameStateVM } from '../../game/gameStateVM';

class LoadSnapshot extends Component {
  constructor(props) {
    super(props);
  }

  selectedSnapshotChanged(event) {
    var item = this.props.snapshotList.filter(ss => ss.name == event.target.value)[0];
    gameStateVM.setSelectedSnapshot(item);
  }

  onApply() {
    gameStateVM.applySelectedSnapshot();
  }

  render() {
    return (
      <div className="field-group">
        <label>Load a snapshot</label>
        <div className="inline-group">
          <select
            id="snapshot"
            name="loadSnapshot"
            value={this.props.selectedSnapshot.name}
            onChange={this.selectedSnapshotChanged.bind(this)}
          >
            {this.props.snapshotList.map(ss => 
              <option key={ss.name} value={ss.name}>
                {ss.name}
              </option>)}
          </select>
          <input type="button" value="Apply" onClick={this.onApply.bind(this)} />
        </div>
      </div>
    );
  }
}

LoadSnapshot.propTypes = {
  snapshotList: PropTypes.arrayOf(PropTypes.object),
  selectedSnapshot: PropTypes.object
}

export default LoadSnapshot;
