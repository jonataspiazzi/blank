import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gameStateVM } from '../../game/gameStateVM';

class PlayerSelector extends Component {
  constructor(props) {
    super(props);
  }

  playerChanged(event) {
    const item = this.props.playerList.filter(p => p.name == event.target.value)[0];
    gameStateVM.setPlayer(this.props.playerNumber, item);
  }

  render() {
    return (
      <div className="field-group">
        <label>{`${this.props.colour} Player Controller:`}</label>
        <select
          value={this.props.selectedPlayer.name}
          onChange={this.playerChanged.bind(this)}
        >
          {this.props.playerList.map(p => 
            <option key={p.name} value={p.name}>
              {p.name}
            </option>)}
        </select>
      </div>
    );
  }
}

PlayerSelector.propTypes = {
  colour: PropTypes.string.isRequired,
  playerNumber: PropTypes.number.isRequired,
  selectedPlayer: PropTypes.object.isRequired,
  playerList: PropTypes.arrayOf(PropTypes.object)
};

export default PlayerSelector;
