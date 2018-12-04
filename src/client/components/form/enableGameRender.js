import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { gameStateVM } from '../../game/gameStateVM';

class EnableGameRender extends Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    gameStateVM.setEnableGameRender(event.target.checked);
  }

  render() {
    return (
      <div className="field-group checkbox">
        <input type="checkbox" checked={this.props.value} onChange={this.onChange.bind(this)} />
        <label title="Option to run the game without displaing in the left board (to performance enhancement)">Disable visual game <small>(performance enhancement)</small></label>
      </div>
    );
  }
}

EnableGameRender.propTypes = {
  value: PropTypes.bool
}

export default EnableGameRender;
